---
id: data-types
title: Data Types Overview
slug: /experimenters/api-access/data-types
sidebar_position: 3
---

# Data Types Overview

This page explains the data types HyperStudy collects and when to use each one. For endpoint URLs, request parameters, response schemas, and a "Try it" UI, use the **[interactive API Reference](/api-reference)**.

## Scopes

Every data type can be queried at three scope levels — pick the smallest scope that fits your analysis:

| Scope | When to use |
|---|---|
| `experiment` | Comparing across sessions, computing aggregate metrics, exporting a full dataset |
| `room` | Analyzing a single session — most multi-participant analyses live here |
| `participant` | Inspecting one person's behavior within one session |

The participant scope requires a `roomId` query parameter to disambiguate which session.

## Available data types

### Events

**Scope**: `read:events`

Every participant interaction, component completion, state transition, and media event. The primary data type for behavioral analysis. Includes enriched `content` fields, state names, participant roles, and response payloads. Filter by `category` (`component`, `state`, `media`) to narrow down.

**Batch recording**: `POST /data/events/batch` accepts up to 100 events per request (requires `write:events`).

### Recordings

**Scope**: `read:recordings`

Video and audio recordings from LiveKit video chat sessions. Each record includes a signed download URL, the offset from experiment start, and metadata (duration, file size, format, resolution).

### Video chat

**Scope**: `read:videochat`

LiveKit connection data and session metadata — useful for analyzing video chat participation patterns separately from the recordings themselves.

### Text chat

**Scope**: `read:chat`

Messages sent through the text chat component, with sender and timing.

### Ratings

**Scope**: `read:ratings`

Two sub-types served from distinct endpoints:

- **Continuous ratings** — high-frequency samples (every 100–500 ms) from continuous rating components. Use for time-series analysis of valence, engagement, or arousal.
- **Sparse ratings** — discrete responses from VAS, Likert, multiple choice, and other rating components. Each record includes the value, response time, and scale metadata.

### Sync metrics

**Scope**: `read:sync`

Video synchronization quality data for multi-participant experiments with synchronized media. Includes time drift, playback rate, sync quality, and latency. Only populated when an experiment uses sync sockets.

### Components

**Scope**: `read:components`

Component-level response data including configurations and variable snapshots at display time. Useful for understanding what each participant saw and how they responded. Filter by `componentType`, `completed`, or `stateId`.

### Participants

**Scope**: `read:events` (uses the events scope)

Participant metadata and session information. Available at `experiment` and `room` scopes only — not at participant scope. Includes `completionCode` (`SUCCESS`, `TIMEOUT`, `TECHNICAL`, `NOCONSENT`, `ABANDONED`, `IN_PROGRESS`, `COMPLETED_NO_CODE`) and supports sorting by join/completion time.

### Rooms

**Scope**: `read:events` (uses the events scope)

Room/session metadata for an experiment, enriched with deployment names and participant counts. Returns up to 5,000 rooms.

### Data access check

**No scope required** (authentication only)

`GET /data/check-access/experiment/{experimentId}` returns `{ canView, canExport }` so you can probe permissions before making heavier requests.

## Experiment management

The API also exposes full CRUD for experiment definitions (`read:experiments`, `write:experiments`, `delete:experiments` scopes). For programmatic experiment authoring with the Python SDK's typed builder, see the [Experiment Authoring guide](./experiment-authoring.md). For the raw endpoint surface, see the [API Reference](/api-reference).

## Next steps

- **[API Reference](/api-reference)** — endpoint URLs, query parameters, request/response schemas, "Try it" UI
- **[Python Guide](./python-guide.md)** | **[JavaScript Guide](./javascript-guide.md)** | **[R Guide](./r-guide.md)** — language-specific code examples
- **[Experiment Authoring](./experiment-authoring.md)** — build experiments programmatically
- **[API Key Management](./api-keys.md)** — generate keys and manage scopes
