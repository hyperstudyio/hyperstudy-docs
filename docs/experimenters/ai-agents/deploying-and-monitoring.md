---
sidebar_position: 6
title: Deploying & Monitoring
---

# Deploying & Monitoring Agent Experiments

## Deployment types

- **Agent-only** — every role is an agent. Rooms are created and launched automatically in batches: no waiting room, no recruitment, no human participants. Use this for piloting a design, generating synthetic baselines, or agent-behavior research.
- **Mixed** — some roles human, some agent. The deployment behaves like a normal human deployment (recruitment, waiting room), and agents fill their roles when each session starts.

## Launching an agent-only deployment

When you create a deployment for an experiment with agent roles, choose **Agent-only** and set:

| Setting | Meaning |
|---------|---------|
| **Rooms** | How many rooms to run (up to 100 per batch) |
| **Budget (USD)** | Required. The deployment-wide kill switch — once estimated spend reaches this cap, no further rooms launch |
| **Stagger** | Delay between room launches (default 2 s), so rooms don't all hit your provider at once |
| **Max room duration** | Safety timeout per room (default 30 min) |

Before anything launches, every agent role goes through [preflight validation](/experimenters/ai-agents/agents-in-experiments#preflight-validation). If any role fails, nothing launches and you get a per-role list of what to fix.

## The deployment monitor

The monitor gives you a live view of the whole run:

- **Stat cards and progress** — rooms pending / running / completed / failed at a glance
- **Budget bar** — live estimated spend against the deployment budget
- **Room table** — per-room status with actions:
  - **Stop** (two-click confirm) — force-end a running room
  - **Retry** — relaunch a room that failed to spawn
- **Batch history** — every launch batch with its outcome
- **Run more** — after a batch finishes (or while active), launch additional rooms with a fresh budget without recreating the deployment
- **Spectate** — click a running room to drill into a live view of what participants (including agents) see

{/* screenshot: AgentDeploymentMonitor mid-run — static/img/agents/deployment-monitor.png */}

## Watching agents think

Each running agent has a **Thinking** toggle that streams its decision log live — every turn's perception, reasoning, and chosen action as it happens. This is the fastest way to debug a prompt: you see exactly why the agent did what it did.

{/* screenshot: agent thinking panel streaming decisions — static/img/agents/thinking-panel.png */}

## When things stop

Agents stop themselves when they hit their per-agent guardrails (max turns, token budget, USD budget, or repeated decision errors — see [Designing Agents](/experimenters/ai-agents/designing-agents#model--guardrails)). The deployment stops launching new rooms when the deployment budget is reached. Rooms that exceed the max room duration are ended by the safety timeout.

Everything an agent did up to any stop is preserved in [agent data](/experimenters/ai-agents/agent-data).
