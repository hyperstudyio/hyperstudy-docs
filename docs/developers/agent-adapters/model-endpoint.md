---
title: Model endpoint
sidebar_position: 2
---

{/* Generated from the HyperStudy source (backend/src/agentSpec). Edits here are overwritten on the next release. */}

# Model endpoint (text agents)

:::info Spec version 0.2.1 (draft)
Generated from the HyperStudy source. Machine-readable: [agent-spec.json](pathname:///agent-spec/0.2.1/agent-spec.json).
:::

A model endpoint is an OpenAI-compatible Chat Completions server that
HyperStudy calls whenever a text agent has to decide something: a question
appears on its screen, or someone types to it in the chat. Each call is
independent. HyperStudy sends the whole situation every time and keeps the
agent's state itself, so the endpoint stays stateless.

The `hyperstudy-agent` command-line tool serves a local model as such an
endpoint and checks it against this contract. See
[Custom Agent Endpoints](/developers/custom-agents).

## Requirements

- **API:** OpenAI Chat Completions, with function tool calling.
- **Base URL:** A public https URL ending in the API root, e.g. https://agent.example.org/v1. Private, loopback and LAN addresses are refused.
- **Authentication:** `Authorization: Bearer <api key>`.
- **Requests used:** `GET {baseUrl}/models`, `POST {baseUrl}/chat/completions`.
- **Time limit per request:** 60 s by default; the experimenter can set 10 s to 300 s.
- **Retries:** none. A failed request is a failed decision.

## Connection test

HyperStudy tests the endpoint with these requests when an experimenter tests
it in Settings, and before deploying a study that uses it:

| Request | Time limit | Passes when |
|---|---|---|
| `GET {baseUrl}/models` | 10 s | Any response except a server error. The first model id, if listed, is used as the model name. |
| `POST {baseUrl}/chat/completions` | 30 s | A 1-token completion returns 200 with a choices array. 401 or 403 means the key was refused. |

## Requests

A decision is one `POST {baseUrl}/chat/completions` request. An agent set up
with cognition stages (reasoning about the other participants before it acts)
makes a few more requests to the same endpoint first. A decision request
carries:

- a `system` message with the agent's persona and instructions;
- a `user` message describing the screen and, for a chat turn, the recent
  messages, with any images on screen as image parts;
- the tools the agent can use right now, with `tool_choice: "auto"`.

Text written by participants is wrapped in tags, and the system message tells
the model to treat it as data, never as instructions to follow.

## Tools

The endpoint answers a decision request by calling a tool. These are the
tools in OpenAI's format, as sent while a rating scale is on screen in a study
with text chat:

```json
[
  {
    "type": "function",
    "function": {
      "name": "send_chat",
      "description": "Send a chat message to the other participant(s) in the experiment.",
      "parameters": {
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "description": "The message text to send."
          }
        },
        "required": [
          "message"
        ],
        "additionalProperties": false
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "wait",
      "description": "Take no action this turn. Use when nothing is required of you right now.",
      "parameters": {
        "type": "object",
        "properties": {},
        "additionalProperties": false
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "submit_response",
      "description": "Submit your response to the current \"vasrating\" component.",
      "parameters": {
        "type": "object",
        "properties": {
          "value": {
            "type": "number",
            "minimum": 0,
            "maximum": 100,
            "description": "Rating between 0 and 100."
          }
        },
        "required": [
          "value"
        ],
        "additionalProperties": false
      }
    }
  }
]
```

send_chat is offered only when the study has text chat; submit_response only while a question is on screen, with the value schema of that question (see Answer schemas).
