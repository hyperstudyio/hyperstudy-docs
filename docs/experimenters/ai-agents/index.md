---
sidebar_position: 1
title: AI Agents Overview
---

# AI Agents

HyperStudy can run **AI agents as experiment participants**. Agents are powered by large language models, join experiments through the same runtime as human participants, and produce the same kinds of data — plus rich per-decision logs of their internal reasoning. You can run fully agent-only studies (for piloting, power analysis, or agent-behavior research), or mix agents and humans in the same session.

## What agents can do

- **Participate in real experiments**: agents perceive the current experiment state (instructions, stimuli, chat messages, co-participant activity), make decisions, and respond to components — ratings, multiple choice, text input, and chat.
- **Play any role**: any role in a multi-participant experiment can be assigned to an agent instead of a human.
- **Run at scale**: agent-only deployments launch batches of rooms with budget controls, live monitoring, and per-room stop/retry.
- **Produce analyzable data**: every agent turn is logged as a decision record (prompt, reasoning, chosen action), and every run gets a manifest with the model, token/cost totals, and random seed for reproducibility. Agents also emit the same event and component records as human participants, so your existing analysis pipelines work unchanged.

## Key concepts

| Concept | What it is |
|---------|-----------|
| **Agent (persona)** | A reusable agent definition in your library: identity, objective, model settings, guardrails, and (optionally) cognition. Personas are organization-level resources you can share, duplicate, import, and export. |
| **Role binding** | Attaching a persona to a role in an experiment. The experiment can add role-specific objectives and guidance on top of the persona, but never replaces the persona's identity. |
| **Provider** | The LLM service that powers an agent: Anthropic, OpenAI, Gemini, or a custom self-hosted endpoint. |
| **Agent-only deployment** | A deployment that launches rooms populated entirely by agents — no waiting room, no human participants. |
| **Decisions & runs** | The data agents generate: per-turn decision logs and per-run manifests, available in Data Management and through the API. |
| **Cognition** (experimental) | Optional composable reasoning abilities — theory-of-mind, memory, reflection — configured per persona. |

## Workflow at a glance

1. **[Design an agent](/experimenters/ai-agents/designing-agents)** — create a persona in your library with a structured prompt and model settings.
2. **[Connect a provider](/experimenters/ai-agents/connecting-providers)** — add an API key for Anthropic, OpenAI, or Gemini, or [serve your own model](/developers/custom-agents) with the `hyperstudy-agent` CLI.
3. **[Add agents to an experiment](/experimenters/ai-agents/agents-in-experiments)** — bind personas to roles in the experiment designer.
4. **[Deploy and monitor](/experimenters/ai-agents/deploying-and-monitoring)** — launch agent-only or mixed deployments and watch agents think in real time.
5. **[Analyze the data](/experimenters/ai-agents/agent-data)** — inspect decisions and runs in Data Management, or pull them with the Python SDK.

## Requirements

- Agent experiments run on the **V2 experiment runtime** (`runtime: 'v2'` on the experiment). New experiments created in the designer with agent roles are set up for this automatically.
- Each agent's provider must have a working API key (personal or organization-shared) before deployment — this is validated by a preflight check when you deploy.

:::info Cognition is experimental
The [cognition system](/experimenters/ai-agents/cognition) — composable reasoning, memory stores, and offline learning — is under active development. Its interfaces may change between releases.
:::
