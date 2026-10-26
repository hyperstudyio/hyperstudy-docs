---
title: Conformance suite
sidebar_position: 4
---

{/* Generated from the HyperStudy source (backend/src/agentSpec). Edits here are overwritten on the next release. */}

# Voice engine conformance suite

:::info Spec version 0.2.1 (draft)
Generated from the HyperStudy source. Machine-readable: [agent-spec.json](pathname:///agent-spec/0.2.1/agent-spec.json).
:::

Before HyperStudy starts a voice agent on an engine, that engine and model
must have a stored, passing report from the conformance suite at the current
suite version. The suite drives the engine with recorded speech and checks
the behaviour the platform depends on.

The suite is run by HyperStudy against an engine; it is not yet packaged for
engine authors to run themselves. The checks and thresholds below are what it
holds an engine to.

Current suite version: **6**.

## Checks

Checks marked "each mode" run once for every turn-detection mode a study can
choose.

| Check | Runs | Verifies |
|---|---|---|
| `handshake` | once | The engine acknowledges the session update with PCM16 at 24 kHz in both directions. |
| `engine_turn` | each mode | With engine turn detection, speech fires speech_started at its onset, the turn is committed, and the engine gives a complete spoken answer with a transcript and usage. |
| `barge_in` | each mode | Speech while the engine is talking fires speech_started, the engine cancels its own response on that edge, and no audio follows. A truncate at the position the platform reports is then acknowledged and graded. |
| `listening_pause` | each mode | Switching turn detection off mid-speech and committing keeps what was said as that same turn, with no reply. With turn detection back on, the next speech starts a new turn, timed from the moment turn detection was switched back on. |
| `listening_pause_silent` | each mode | Switching turn detection off while no one is speaking and back on again: the next speech is timed from the moment turn detection was switched back on. |
| `cancel` | once | response.cancel ends the response promptly, and no audio for it arrives afterwards. |
| `function_call` | once | The engine calls a declared tool, accepts the function output, and finishes a follow-up response. |
| `silent_tool` | once | A response requested with text output only and a forced tool calls exactly that tool once and produces no audio. |
| `image_context` | once | An image attached to a context item as an input_image data URL is accepted and seen: asked silently which colour fills it, the engine answers red. |
| `turn_detection_fields` | each mode | Every requested turn-detection setting comes back unchanged in session.updated. |

## Turn-detection modes

- `{"type":"server_vad","silence_duration_ms":500}`
- `{"type":"semantic_vad","eagerness":"auto"}`

## Thresholds

| Threshold | Value |
|---|---|
| `maxOnsetDelayMs` | 1000 ms |
| `maxResponseStartMs` | 5000 ms |
| `maxCancelToDoneMs` | 1500 ms |
| `eventTimeoutMs` | 15000 ms |
| `noReplyWindowMs` | 1500 ms |
| `truncateAckTimeoutMs` | 3000 ms |
