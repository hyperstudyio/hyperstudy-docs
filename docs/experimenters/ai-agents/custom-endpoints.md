---
sidebar_position: 4
title: Custom Agent Endpoints
slug: /developers/custom-agents
---

import { AgentCliDownload } from '@site/src/components/GitHubDownload';

# Custom Agent Endpoints

Run HyperStudy agents on **your own hardware** — a Mac, a workstation GPU, or a DGX Spark — instead of a cloud provider. This keeps inference local (useful for data-governance requirements), costs nothing per token, and lets you study open-weight models.

The **`hyperstudy-agent` CLI** does the heavy lifting: it detects your hardware, launches a properly configured `llama-server` (llama.cpp), proves the endpoint meets HyperStudy's contract, and exposes it publicly so you can paste the URL straight into HyperStudy Settings.

## Install the CLI

<AgentCliDownload />

Or use the install script (downloads the right binary into `/usr/local/bin`):

```bash
curl -fsSL https://raw.githubusercontent.com/hyperstudyio/hyperstudy-agent/main/install.sh | bash
```

Building from source (Go 1.26+) is also supported — see the [repository README](https://github.com/hyperstudyio/hyperstudy-agent#install).

**Prerequisites:** `serve` needs `llama-server` (`brew install llama.cpp` on macOS; see [Hardware notes](https://github.com/hyperstudyio/hyperstudy-agent#hardware-notes) for Linux/GPU builds). `tunnel` needs `cloudflared` (`brew install cloudflared`). Check your install with `hyperstudy-agent --version`.

## Quickstart

Three commands: **serve** a model, **verify** the endpoint, **tunnel** it to the internet.

### 1. Serve

```bash
hyperstudy-agent serve
```

This detects your hardware, picks an appropriate model (downloading it on first run), generates an API key (prefix `hsa_`, saved to `~/.hyperstudy-agent/config.json` and reused across restarts), and starts `llama-server` with authentication enabled. When it prints `READY`, note the `baseUrl` and API key.

Useful flags: `--model` (preset name like `qwen3.6-moe` / `gemma4-moe` / `gemma4-4b`, or any raw `-hf` reference), `--port` (default 8080), `--parallel` (default 8), `--ctx` (default 32768), `--regenerate-key`, and `--mtp` (lossless speculative decoding for the gemma4 presets, 1.4–2.3× faster). See the [model overrides guide](https://github.com/hyperstudyio/hyperstudy-agent#model-overrides) for details and hardware-specific recommendations.

### 2. Verify

```bash
hyperstudy-agent verify
```

Runs four checks against HyperStudy's endpoint contract:

1. **Reachable** — `GET /models` answers with an OpenAI-compatible shape
2. **Auth enforced** — a deliberately wrong key is rejected with 401
3. **Tool calling** — the model successfully calls a `respond` tool with schema-valid JSON arguments
4. **Concurrency** — p50/p95 latency under parallel load fits HyperStudy's timeout budget

If any check fails, `verify` prints the reason and exits non-zero. Every failure message maps to a row in the [troubleshooting table](#troubleshooting).

### 3. Tunnel

```bash
hyperstudy-agent tunnel
```

Wraps a Cloudflare quick tunnel and prints a public `https://….trycloudflare.com/v1` URL. Quick tunnels get a **new hostname on every restart** — for a stable hostname use [Tailscale Funnel](https://tailscale.com/kb/1223/funnel) instead (`tailscale funnel 8080` publishes a fixed `https://<machine>.<tailnet>.ts.net` URL).

If HyperStudy and your server are on the same local network (e.g., a lab deployment), the LAN `baseUrl` printed by `serve` may be enough and no tunnel is needed.

### 4. Connect to HyperStudy

1. Go to **Settings → API Keys → Custom Agent Endpoint**.
2. Paste the **Base URL** (from `tunnel`, or the LAN URL from `serve`) and the **API key**.
3. Optionally set a **Generate timeout** (10–300 seconds) if your hardware needs more than the 60-second default per request.
4. Click **Test connection**.

{/* screenshot: custom endpoint card with URL + key fields — static/img/agents/settings-custom-endpoint.png */}

Then, in your [agent's Model & Guardrails tab](/experimenters/ai-agents/designing-agents#model--guardrails), set the provider to **Custom** and enter the **model name** — the model field is required for custom endpoints.

## The endpoint contract

If you'd rather bring your own server than use the CLI, it must satisfy this contract:

- **OpenAI-compatible** `/v1/chat/completions` **with function calling**. Every HyperStudy agent turn submits its response as a `respond` tool call, not free text — a model or server that never returns `tool_calls` cannot be used, regardless of text quality.
- **Bearer-token auth enforced** on completion endpoints (`Authorization: Bearer <key>`).
- **Timeouts**: HyperStudy's budget is 60 s default / 300 s max per request, including under concurrent load.
- **Public or LAN-reachable HTTPS/HTTP URL.** Private-network and loopback addresses are rejected by HyperStudy's server-side URL policy when the platform is hosted (hosted HyperStudy cannot reach your `localhost`) — that's what the tunnel is for.

:::caution Bare Ollama does not meet the contract
Ollama doesn't enforce inbound auth, silently drops `tool_choice`, serializes requests by default, and truncates context without warning. Use `llama-server`, or front Ollama with a reverse proxy that adds real auth. `mlx-lm` similarly has no built-in auth — don't expose it directly.
:::

## Privacy note

When a custom endpoint powers an agent, the **full experiment perception payload** — including other participants' chat messages and experiment state — is sent to the machine running the server. Only run it on hardware you trust, and treat the generated API key as a credential to your experiment data.

## Troubleshooting

Each row corresponds to a `verify` failure message:

| Failure message | What it means | Fix |
|---|---|---|
| `endpoint unreachable` | Nothing is listening at `--base-url` | Confirm `serve` is running and the port matches |
| `GET /models returned N — not an OpenAI-compatible baseUrl?` | The URL doesn't speak the OpenAI API shape | Check the URL includes `/v1` and points at `llama-server` |
| `a WRONG key was accepted` | The server ignores `Authorization` | You're likely running bare Ollama or forgot `--api-key`; `serve` configures this automatically |
| `chat/completions returned N` | The completions endpoint errored | Check server logs; often out-of-memory or a bad model load |
| `endpoint rejected the API key` | Wrong key (not a model problem) | Pass the correct `--api-key`, or re-run `serve` to print the saved key |
| `no tool_calls in response` | The model replied with plain text | The model doesn't support tool calling or its chat template is broken; try a Qwen3 GGUF from `unsloth`, or update llama.cpp |
| `tool_calls arguments are not valid JSON` / schema mismatches | Malformed or wrong-typed tool arguments | Try a different quant or a larger model; increase `--ctx` if the schema is truncated |
| `request failed under load` | A request failed during the parallel concurrency test | Raise `--parallel`, or check memory pressure under load |
| `exceeds the platform's 300s maximum timeout` | p95 latency is over the hard cap | Smaller/faster model, less concurrency, or more compute |
| `above the 60s default; raise the credential's timeoutMs` | Passes, but slower than the default budget | Optionally raise the Generate timeout on the credential in Settings |

For hardware-specific setup (CUDA builds, DGX Spark source build, model presets, Gemma 4 tool-calling notes), see the [repository README](https://github.com/hyperstudyio/hyperstudy-agent#hardware-notes).

## Release Notes

<!-- RELEASE_NOTES_START -->

### v0.1.3

**Released:** 2026-07-15

- `serve --mtp`: speculative decoding (multi-token prediction) for the Gemma 4 presets — lossless, 1.4–2.3× faster generation
- Removed the deprecated `serve --no-thinking` flag

---

### v0.1.2

**Released:** 2026-07-14

- `serve --no-thinking`: disable reasoning-model thinking for faster turns

---

### v0.1.1

**Released:** 2026-07-14

- `serve` output clarifies that the LAN URL is local-network-only and steers users to `tunnel` for hosted HyperStudy

---

### v0.1.0

**Released:** 2026-07-14

Initial release.

- `serve`: hardware detection (RAM, NVIDIA VRAM, DGX Spark), automatic model-tier selection, named model presets, API-key generation and persistence, readiness polling
- `verify`: four contract checks — reachability, auth enforcement, tool calling via the `respond` tool, concurrency latency (p50/p95)
- `tunnel`: public HTTPS URL via a Cloudflare quick tunnel
- Install script and prebuilt binaries for macOS (Apple Silicon) and Linux (x86_64, ARM64)

---

<!-- RELEASE_NOTES_END -->

_Release notes are automatically synced from [GitHub releases](https://github.com/hyperstudyio/hyperstudy-agent/releases)._
