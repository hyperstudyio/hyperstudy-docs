---
sidebar_position: 7
title: Agent Data
---

# Agent Data

Agents produce two layers of data: everything a human participant would produce, plus decision-level logs of their internal reasoning.

## What gets recorded

**Human-parity data.** Agents emit the same component lifecycle and response events as human participants — component views, ratings, text responses, chat messages. Your existing Events and Components tabs, exports, and analysis code work on agent rooms unchanged.

**Decisions.** Every agent turn is logged as a decision record: what the agent perceived, the prompt it received, its reasoning, and the action it chose. Agents with [cognition](/experimenters/ai-agents/cognition) enabled also log theory-of-mind signals (prediction error / surprise, regret, per-peer belief snapshots) as analyzable dependent variables.

**Run manifests.** Each agent's run gets a manifest recording the model and provider used, token and cost totals, the random seed, the agent (persona) ID, and the platform code version — everything needed to reproduce or audit a run.

## Viewing agent data

Open **Data Management** for an experiment with agent runs:

- The **Agent Decisions** tab lists per-turn decisions, grouped by run, with drill-down from a run manifest into its decisions and from a decision into its full detail (prompt, reasoning chain, belief snapshots).
- Runs flagged as **orphaned** belong to rooms that ended abnormally — useful for spotting rooms killed by budgets or timeouts.

![Agent runs in Data Management — outcomes, cognition, model, and cost per run](/img/agents/data-agent-runs.jpg)

Clicking through to a participant opens their Events / Reasoning / Variables views, with per-run manifests and CSV/JSON export:

![A participant's reasoning view with the run manifest](/img/agents/data-agent-reasoning.jpg)

## Exporting

Agent decisions are exportable from Data Management like any other data type (export type `AGENT_DECISIONS`). Standard exports (events, components, chat) include agent participants automatically.

## API access

Agent data is available through the [HyperStudy REST API](/experimenters/api-access/overview) with an API key that has the `read:events` scope:

| Endpoint | Returns |
|----------|---------|
| `GET /api/v3/data/agent-decisions/experiment/{experimentId}` | All decisions + run manifests across every room (supports `?limit=`, `?detail=true`) |
| `GET /api/v3/data/agent-decisions/room/{roomId}` | Decisions + run manifest for one room |
| `GET /api/v3/data/agent-decisions/room/{roomId}/decision/{decisionId}` | One decision with full detail blobs |
| `GET /api/v3/data/agent-runs/experiment/{experimentId}` | All run manifests, with orphaned-run flags |

The [Python SDK](/experimenters/api-access/python-guide) wraps these as `get_agent_decisions()`, `get_agent_decision()`, and `get_agent_runs()`.

:::note
Some recorded fields (cognition configuration snapshots, fine-grained theory-of-mind traces) are still being surfaced in exports — the underlying records are complete, but export coverage is evolving alongside the [cognition system](/experimenters/ai-agents/cognition).
:::
