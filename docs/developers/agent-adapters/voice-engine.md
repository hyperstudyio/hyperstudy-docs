---
title: Voice engine
sidebar_position: 3
---

{/* Generated from the HyperStudy source (backend/src/agentSpec). Edits here are overwritten on the next release. */}

# Voice engine: the HyperStudy Realtime Profile (HRP)

:::info Spec version 0.2.0 (draft)
Generated from the HyperStudy source. Machine-readable: [agent-spec.json](pathname:///agent-spec/0.2.0/agent-spec.json).
:::

A voice agent speaks and listens in the study's video chat. HyperStudy keeps
one realtime session open with the voice engine for the whole run. It streams
the participant's audio to the engine, plays the engine's audio into the
room, tells the engine what is happening in the study, and carries out the
engine's function calls.

The protocol is the **HyperStudy Realtime Profile (HRP)**: a pinned subset of
the OpenAI Realtime API. HyperStudy sends only the events listed below, and
relies only on the engine events listed below. An engine that speaks this
subset and passes the [conformance suite](./conformance.md) can be used.

## Connection

Providers accepted today: `openai`.

HyperStudy opens a WebSocket to the engine with these headers. The safety identifier is an opaque per-session id, never a participant's identity.

```json
{
  "url": "wss://api.openai.com/v1/realtime?model=gpt-realtime-2.1",
  "headers": {
    "Authorization": "Bearer <api key>",
    "OpenAI-Safety-Identifier": "hs-<opaque id>"
  }
}
```

## Audio

- PCM16, little-endian, mono at 24000 Hz, in both directions, base64 in events.
- Format field in `session.update`: `{"type":"audio/pcm","rate":24000}`.
- One audio delta may carry at most 2000 ms of audio; a larger one ends the session.

## Turn-taking and interruptions

The engine detects when the participant starts and stops speaking (its own
turn detection, configured in `session.update`), and replies when they
finish. When the participant speaks while the agent is talking, the engine
must cancel its reply on the `speech_started` edge. HyperStudy then stops
playback and sends `conversation.item.truncate` at the point the participant
actually heard, so the engine's record of the conversation matches the
room's.

When the study moves to a screen without the video chat, the participant can
no longer be heard, often in the middle of a sentence. HyperStudy switches
the engine's turn detection off and commits the audio so far as that
participant's turn. The engine must keep it as the same turn without
replying, and must treat their next speech, once turn detection is back on,
as a new turn.

HyperStudy records when each participant turn was said from the engine's
`audio_start_ms` and `audio_end_ms`. Until turn detection is first switched
off, these count from the start of the session's input audio. Once it is
switched back on, they must count from that moment: the first audio appended
after the switch is at 0. No audio is appended while turn detection is off.

## Events HyperStudy sends

### `session.update`

Configure the session at start: instructions, voice, the declared tools, audio format and turn detection.

```json
{
  "type": "session.update",
  "session": {
    "type": "realtime",
    "output_modalities": [
      "audio"
    ],
    "instructions": "<the persona and study instructions>",
    "tools": [
      {
        "type": "function",
        "name": "answer_choice",
        "description": "Answer the on-screen multiple-choice question with one choice, using its exact text.",
        "parameters": {
          "type": "object",
          "properties": {
            "choice": {
              "type": "string"
            }
          },
          "required": [
            "choice"
          ],
          "additionalProperties": false
        }
      }
    ],
    "tool_choice": "auto",
    "audio": {
      "input": {
        "format": {
          "type": "audio/pcm",
          "rate": 24000
        },
        "transcription": null,
        "turn_detection": {
          "type": "server_vad",
          "silence_duration_ms": 500,
          "create_response": true,
          "interrupt_response": true
        }
      },
      "output": {
        "format": {
          "type": "audio/pcm",
          "rate": 24000
        },
        "voice": "marin",
        "speed": 1
      }
    }
  }
}
```

### `session.update`

Change only the instructions when the study enters a part with its own agent guidance. Every other session setting is kept.

```json
{
  "type": "session.update",
  "session": {
    "type": "realtime",
    "instructions": "<the persona and study instructions, with guidance for this part>"
  }
}
```

### `session.update`

Switch turn detection off when the participant can no longer be heard (the screen stops showing the video chat), and back on when they can. Switching it off must end the engine's turn in progress, so their next speech is a new turn.

```json
{
  "type": "session.update",
  "session": {
    "type": "realtime",
    "audio": {
      "input": {
        "format": {
          "type": "audio/pcm",
          "rate": 24000
        },
        "transcription": null,
        "turn_detection": null
      }
    }
  }
}
```

### `input_audio_buffer.commit`

Keep what the participant said before they were cut off as their turn: sent with turn detection off, it commits that same turn and must not start a reply.

```json
{
  "type": "input_audio_buffer.commit"
}
```

### `input_audio_buffer.append`

Stream the participant's microphone audio, only while the study shows the video chat.

```json
{
  "type": "input_audio_buffer.append",
  "audio": "<base64 PCM16>"
}
```

### `conversation.item.create`

Tell the engine what is happening in the study: a [context] item (see Context items).

```json
{
  "type": "conversation.item.create",
  "item": {
    "type": "message",
    "role": "user",
    "content": [
      {
        "type": "input_text",
        "text": "[context] {\"event\":\"screen\",\"type\":\"showtext\",\"text\":\"Please introduce yourselves.\"}"
      }
    ]
  }
}
```

### `conversation.item.create`

A screen with images: each image the participant sees is attached to the screen's [context] item as an input_image data URL, once per session.

```json
{
  "type": "conversation.item.create",
  "item": {
    "type": "message",
    "role": "user",
    "content": [
      {
        "type": "input_text",
        "text": "[context] {\"event\":\"screen\",\"type\":\"showimage\",\"text\":\"Look at this face.\",\"images\":[\"attached: the image (a smiling face)\"]}"
      },
      {
        "type": "input_image",
        "image_url": "data:image/png;base64,<base64 bytes>"
      }
    ]
  }
}
```

### `conversation.item.create`

Answer a function call: a JSON result, or &#123;"error": "&#60;reason&#62;"&#125; when the call was refused.

```json
{
  "type": "conversation.item.create",
  "item": {
    "type": "function_call_output",
    "call_id": "<call_id>",
    "output": "{\"accepted\":true}"
  }
}
```

### `conversation.item.truncate`

Cut the agent's reply at what the participant actually heard, after an interruption.

```json
{
  "type": "conversation.item.truncate",
  "item_id": "<item_id>",
  "content_index": 0,
  "audio_end_ms": 1840
}
```

### `response.create`

Ask for a reply without a spoken turn (for example to typed chat), or a silent answer to an on-screen question (see Answering questions).

```json
{
  "type": "response.create",
  "response": {
    "output_modalities": [
      "audio"
    ]
  }
}
```

### `response.cancel`

Stop the reply in progress.

```json
{
  "type": "response.cancel",
  "response_id": "<response_id>"
}
```

## Events HyperStudy reads

These are the engine events HyperStudy acts on, with the fields each must
carry. A core event missing a required field is a protocol error and ends
the session.

| Event | Required fields |
|---|---|
| `session.created` | `session` |
| `session.updated` | `session` |
| `input_audio_buffer.speech_started` | `audio_start_ms`, `item_id` |
| `input_audio_buffer.speech_stopped` | `audio_end_ms`, `item_id` |
| `input_audio_buffer.committed` | `item_id` |
| `conversation.item.added` | `item` |
| `conversation.item.done` | `item` |
| `conversation.item.truncated` | `item_id`, `audio_end_ms` |
| `response.created` | `response` |
| `response.done` | `response` |
| `response.output_audio.delta` | `response_id`, `item_id`, `delta` |
| `response.output_audio.done` | `response_id`, `item_id` |
| `response.output_audio_transcript.delta` | `response_id`, `item_id`, `delta` |
| `response.output_audio_transcript.done` | `response_id`, `item_id`, `transcript` |
| `response.function_call_arguments.done` | `response_id`, `call_id`, `name`, `arguments` |
| `conversation.item.input_audio_transcription.completed` | `item_id`, `transcript` |
| `conversation.item.input_audio_transcription.failed` | `item_id`, `error` |
| `error` | `error` |

These events are accepted and ignored:

- `rate_limits.updated`
- `response.output_item.added`
- `response.output_item.done`
- `response.content_part.added`
- `response.content_part.done`
- `response.function_call_arguments.delta`
- `response.output_text.delta`
- `response.output_text.done`
- `conversation.item.input_audio_transcription.delta`
- `conversation.item.input_audio_transcription.segment`
- `input_audio_buffer.cleared`
- `input_audio_buffer.timeout_triggered`
- `output_audio_buffer.started`
- `output_audio_buffer.stopped`
- `output_audio_buffer.cleared`

Any other event type is logged and ignored.

## Context items

HyperStudy tells the engine what happens in the study with `[context]` items:
a user text item that holds one JSON object. They describe the study and
never instruct the engine. Text a participant typed is quoted inside them as
data.

```text
[context] {"event":"participants","others":[{"name":"Alex","role":"A"}]}
[context] {"event":"screen","type":"showtext","text":"Please introduce yourselves."}
[context] {"event":"screen","type":"vasrating","text":"How trustworthy is this face?","images":["attached: the image (Face 3)"]}
[context] {"event":"typed","speaker":"Alex","said":"hello?"}
[context] {"event":"question","tool":"answer_scale","question":"Question: How warm was your partner?\nThis is a visual analog rating scale from 0 to 100.\nRespond with a number between 0 and 100.","duringVideo":false}
[context] {"event":"timer","secondsLeft":30}
[context] {"event":"experimenter_message","text":"Please answer honestly."}
[context] {"event":"revealed","name":"Alex","role":"A","answer":70}
[context] {"event":"paused","waitingFor":["Alex (A)"]}
[context] {"event":"resumed"}
```

- `participants`: the other participants, by the names they are shown under.
  Sent at the start and again whenever it changes.
- `screen`: a new screen, with its text as the participant reads it. Each image
  on it is attached to the same item as an `input_image` (a `data:` URL), and
  `images` says what each one is, in order: `attached` (in this item),
  `attached earlier` (already in the conversation; an image is sent once per
  session), or `could not be loaded`. A choice image is labeled with the
  choice text the answer must use.
- `question`: a question to answer silently with the named tool. Images on it
  (choice, item or dimension images) are attached the same way.
- `timer`: the screen just shown has a time limit, in seconds.
- `experimenter_message`: a message the experimenter sent this participant
  or everyone.
- `revealed`: another participant's answer, shown to this participant.
- `paused` means the study stopped because a participant dropped out, named in
  `waitingFor`. The agent is cut off and not heard until `resumed`.

An engine must accept `input_image` content in a user message item. The
conformance suite checks it (`image_context`).

## Tools

The engine is given these tools once, in `session.update`, and they do not
change during the session. `send_chat` is declared only when the study has
text chat.

```json
[
  {
    "name": "send_chat",
    "description": "Type a message in the text chat that the other participant can see.",
    "parameters": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "description": "The message to type."
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_choice",
    "description": "Answer the on-screen multiple-choice question with one choice, using its exact text.",
    "parameters": {
      "type": "object",
      "properties": {
        "choice": {
          "type": "string"
        }
      },
      "required": [
        "choice"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_choices",
    "description": "Answer the on-screen multiple-choice question that allows several choices, using their exact texts.",
    "parameters": {
      "type": "object",
      "properties": {
        "choices": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "choices"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_scale",
    "description": "Answer the on-screen rating scale with a number in its range.",
    "parameters": {
      "type": "object",
      "properties": {
        "value": {
          "type": "number"
        }
      },
      "required": [
        "value"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_ranking",
    "description": "Answer the on-screen ranking with every item text, in your order.",
    "parameters": {
      "type": "object",
      "properties": {
        "order": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "order"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_text",
    "description": "Answer the on-screen question that asks for text (or for words you would say aloud).",
    "parameters": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string"
        }
      },
      "required": [
        "text"
      ],
      "additionalProperties": false
    }
  },
  {
    "name": "answer_dimensions",
    "description": "Answer the on-screen multi-dimension rating with a score for every dimension, keyed by its label.",
    "parameters": {
      "type": "object",
      "properties": {
        "scores": {
          "type": "object",
          "additionalProperties": {
            "type": "number"
          }
        }
      },
      "required": [
        "scores"
      ],
      "additionalProperties": false
    }
  }
]
```

Every call gets a function output. It is either the result or the reason the
call was refused:

```json
{
  "accepted": {
    "accepted": true
  },
  "refused": {
    "error": "<why the answer was refused>"
  }
}
```

## Answering questions

When a question appears on screen, or the video pauses for a rating,
HyperStudy sends a `question` context item and then requests a silent
response that must call the tool for that question:

```json
{
  "type": "response.create",
  "response": {
    "output_modalities": [
      "text"
    ],
    "tool_choice": {
      "type": "function",
      "name": "answer_scale"
    }
  }
}
```

The participant never hears the agent answer. HyperStudy checks the answer
against the question. A refused answer goes back to the engine as an error
output and is asked for again, silently, a limited number of times. An
accepted answer is not followed by any speech.
