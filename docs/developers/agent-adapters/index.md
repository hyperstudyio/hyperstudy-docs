---
title: Agent Adapter Spec
sidebar_position: 1
---

{/* Generated from the HyperStudy source (backend/src/agentSpec). Edits here are overwritten on the next release. */}

# Agent Adapter Spec

:::info Spec version 0.2.0 (draft)
Generated from the HyperStudy source. Machine-readable: [agent-spec.json](pathname:///agent-spec/0.2.0/agent-spec.json).
:::

HyperStudy runs experiments in which some participants are AI agents. An
**adapter** is what you build to put your own model or engine behind such an
agent. This spec is the contract between HyperStudy and an adapter. It is
generated from the HyperStudy source code on every release, so it describes
what the platform actually does.

## Concepts

**A seat.** An agent takes one participant role in a study room, as a human
would. HyperStudy does the participant's work for it: it joins the room,
follows the study from screen to screen, and records everything, as it does
for every participant. Your adapter only decides what the agent says and how
it answers.

**Perception.** The agent is told what a human participant in the same role
would see. That includes the screen's text, the question and its options,
chat messages, and other participants' responses when the study reveals them.
The goal is parity: the agent works from the same information as a human in
its seat.

**Tools are the only way to act.** The agent acts by calling tools from a
closed catalogue with fixed JSON schemas: type in the chat, answer the
question on screen, or wait. HyperStudy checks every call against its schema
and against the question on screen. A refused call is returned to the
adapter with the reason, and nothing else happens.

**One mind per seat.** Everything the agent does in a room comes from one
adapter. A voice agent's engine both talks with the participant and answers
the questionnaires, so its answers reflect the conversation it just had.

**Everything is study data.** What the agent was shown, what it said and
every answer it gave are recorded in the study's data, timestamped like a
human participant's.

## Adapter kinds

| Kind | How HyperStudy talks to it | Use it for |
|---|---|---|
| [Model endpoint](./model-endpoint.md) | An HTTPS call to your OpenAI-compatible Chat Completions endpoint each time the agent has to decide (a question appears, someone types to it). | Text agents on your own model or server. |
| [Voice engine](./voice-engine.md) | One realtime WebSocket session for the whole run: audio both ways, study context as text, actions as function calls. | Agents that talk with participants over the video chat. |

In both kinds **HyperStudy connects to the adapter**. Nothing in the study
room is exposed to the adapter directly.

## Answer schemas

Each question an agent answers has a value schema. A model endpoint receives
it as the `value` parameter of `submit_response`. A voice engine answers with
the catalogue tool named in the last column.

| Component | Shown on | Value | Voice tool |
|---|---|---|---|
| `multiplechoice` | screen or rating pause | The exact text of the selected choice. | `answer_choice` |
| `multiplechoice` (several allowed) | screen or rating pause | The exact text(s) of the selected choice(s). | `answer_choices` |
| `likertscale` | screen or rating pause | Selected scale point, 1 to 7. | `answer_scale` |
| `vasrating` | screen or rating pause | Rating between 0 and 100. | `answer_scale` |
| `ranking` | screen or rating pause | All item texts in ranked order. | `answer_ranking` |
| `textinput` | screen or rating pause | Free-text answer. | `answer_text` |
| `rapidrate` | rating pause | A 0-100 score for every dimension, keyed by its label. | `answer_dimensions` |
| `audiorecording` | rating pause | The exact words you would say aloud. | `answer_text` |

The schemas below are generated from the example configurations shown. Bounds
such as a scale's range come from each study's own configuration.

### multiplechoice

Example configuration:

```json
{
  "question": "Which drink do you prefer?",
  "choices": [
    "Coffee",
    "Tea"
  ]
}
```

Value schema:

```json
{
  "type": "string",
  "description": "The exact text of the selected choice."
}
```

### multiplechoice (several allowed)

Example configuration:

```json
{
  "question": "Which colours do you like?",
  "choices": [
    "Red",
    "Green",
    "Blue"
  ],
  "allowMultiple": true
}
```

Value schema:

```json
{
  "type": "array",
  "items": {
    "type": "string"
  },
  "description": "The exact text(s) of the selected choice(s)."
}
```

### likertscale

Example configuration:

```json
{
  "question": "I enjoyed the conversation.",
  "scale": 7
}
```

Value schema:

```json
{
  "type": "integer",
  "minimum": 1,
  "maximum": 7,
  "description": "Selected scale point, 1 to 7."
}
```

### vasrating

Example configuration:

```json
{
  "question": "How warm was your partner?",
  "minValue": 0,
  "maxValue": 100
}
```

Value schema:

```json
{
  "type": "number",
  "minimum": 0,
  "maximum": 100,
  "description": "Rating between 0 and 100."
}
```

### ranking

Example configuration:

```json
{
  "question": "Rank these activities.",
  "options": [
    "Reading",
    "Hiking",
    "Cooking"
  ]
}
```

Value schema:

```json
{
  "type": "array",
  "items": {
    "type": "string"
  },
  "description": "All item texts in ranked order."
}
```

### textinput

Example configuration:

```json
{
  "question": "Describe your partner in one sentence."
}
```

Value schema:

```json
{
  "type": "string",
  "description": "Free-text answer."
}
```

### rapidrate

Example configuration:

```json
{
  "prompt": "How do you feel right now?",
  "dimensions": [
    {
      "label": "Calm"
    },
    {
      "label": "Happy"
    }
  ]
}
```

Value schema:

```json
{
  "type": "object",
  "properties": {
    "Calm": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    },
    "Happy": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    }
  },
  "required": [
    "Calm",
    "Happy"
  ],
  "additionalProperties": false,
  "description": "A 0-100 score for every dimension, keyed by its label."
}
```

### audiorecording

Example configuration:

```json
{
  "prompt": "Say what just happened."
}
```

Value schema:

```json
{
  "type": "string",
  "description": "The exact words you would say aloud."
}
```

## Versioning

This spec uses semantic versioning. While the version is `0.x` it is a draft,
and a minor version may change the contract in ways that break adapters.
Every change is listed in the [changelog](./changelog.md).

The full contract is also published as JSON, one file per version, for code
generation and diffing:

- This version: [/agent-spec/0.2.0/agent-spec.json](pathname:///agent-spec/0.2.0/agent-spec.json)
- Latest: [/agent-spec/latest/agent-spec.json](pathname:///agent-spec/latest/agent-spec.json)

The voice [conformance suite](./conformance.md) has its own version, which a
stored conformance report must match before HyperStudy will start an agent on
that engine.

## Known gaps

- Countdown timers shown to participants are not sent to agents yet.
- Voice engines are accepted only from the providers listed on the
  [voice engine](./voice-engine.md) page. A third-party engine URL is not
  accepted yet. That page describes the protocol such an engine will speak.
