---
id: experiment-authoring
title: Experiment Authoring API
slug: /experimenters/api-access/experiment-authoring
sidebar_position: 5
---

# Authoring experiments programmatically

The HyperStudy v3 API lets you create, read, update, and validate experiment definitions from code. This page shows how to build experiments with the Python SDK's typed builders — but the underlying REST endpoints are the same whether you call them from Python, JavaScript, R, or `curl`.

For the full endpoint reference, see the [interactive API Reference](/api-reference). For data-fetching workflows (events, recordings, ratings), see the [Python Guide](./python-guide.md).

## Quickstart

```python
from hyperstudy import HyperStudy, Experiment, State, show_text

hs = HyperStudy()  # reads HYPERSTUDY_API_KEY

exp = Experiment(
    name="Welcome study",
    required_participants=1,
    states=[
        State(id="intro", focus_component=show_text("Welcome to the study!")),
    ],
)

info = hs.create_experiment(experiment=exp)
print(info["id"])  # → exp_...
```

The typed builders convert snake_case Python fields to the camelCase shape the backend expects (`required_participants` → `requiredParticipants`). Unknown top-level fields are preserved as-is, so the SDK does not block on newly added backend features.

## Building blocks

### `Experiment`

The root object. Only `name` is required.

```python
exp = Experiment(
    name="My Study",
    description="Short description",
    required_participants=2,
    randomize_states=False,
    completion_screen_duration_ms=5000,
)
```

### `State`

A single screen/phase. Each state has an `id` and (usually) a `focus_component` that defines what the participant sees.

```python
from hyperstudy import State, TransitionRules, show_video

s = State(
    id="watch",
    name="Watch the clip",
    order=1,
    focus_component=show_video("https://example.com/clip.mp4"),
    transition_rules=TransitionRules(type="auto"),
)
```

### `FocusComponent`

One component per state. Use a factory helper (next section) or construct directly:

```python
from hyperstudy import FocusComponent, ComponentType

c = FocusComponent(
    type=ComponentType.SHOW_TEXT,
    config={"text": "Hello", "fontSize": 24},
)
```

### `Role`

Used for multi-participant experiments.

```python
from hyperstudy import Role

roles = {
    "speaker": Role(name="Speaker", participant_count=1),
    "listener": Role(name="Listener", participant_count=1),
}
exp = Experiment(name="Pair study", required_participants=2, roles=roles)
```

### Waiting room and timeouts

```python
from hyperstudy import WaitingRoomConfig, DisconnectTimeout

exp = Experiment(
    name="Multi-participant study",
    required_participants=2,
    waiting_room_config=WaitingRoomConfig(
        max_wait_time_ms=60_000,
        countdown_time_ms=3_000,
    ),
    disconnect_timeout=DisconnectTimeout(
        enabled=True,
        duration_ms=30_000,
    ),
)
```

## Component factories

Each factory returns a `FocusComponent` with the standard config keys filled in. Pass extra keyword arguments to set any other config field the backend accepts.

All factories accept a keyword-only `id=` argument; if omitted, an 8-character ID is generated automatically. Directly-constructed `FocusComponent(...)` instances do NOT auto-generate an ID — set `id=` explicitly when bypassing the factories.

| Factory | Component type | Required args |
|---|---|---|
| `show_text(text, *, id=None, **extra)` | `showtext` | `text` |
| `show_image(url, *, id=None, **extra)` | `showimage` | `url` |
| `show_video(url, *, id=None, **extra)` | `showvideo` | `url` |
| `vas_rating(prompt, *, output_variable, id=None, **extra)` | `vasrating` | `prompt`, `output_variable` |
| `text_input(prompt, *, output_variable, id=None, **extra)` | `textinput` | `prompt`, `output_variable` |
| `multiple_choice(prompt, options, *, output_variable, id=None, **extra)` | `multiplechoice` | `prompt`, `options`, `output_variable` |
| `likert_scale(prompt, *, output_variable, scale_points=7, id=None, **extra)` | `likertscale` | `prompt`, `output_variable` |
| `ranking(prompt, options, *, output_variable, id=None, **extra)` | `ranking` | `prompt`, `options`, `output_variable` |
| `waiting(duration_ms, *, id=None, **extra)` | `waiting` | `duration_ms` |

For component types without a factory (`code`, `continuousrating`, `videochat`, `textchat`, `rapidrate`, `audiorecording`, `sparserating`, `trigger`, `scannerpulserecorder`, `gazeoverlay`), construct directly:

```python
from hyperstudy import FocusComponent, ComponentType

video_chat = FocusComponent(
    type=ComponentType.VIDEO_CHAT,
    config={"durationMs": 120_000},
)
```

Keyword arguments other than `id` pass through to the component's `config`:

```python
show_text("Hello", fontSize=32, color="navy", textAlign="center")
# → config = {"text": "Hello", "fontSize": 32, "color": "navy", "textAlign": "center"}
```

Use camelCase keys for these pass-through fields — they go to the backend unchanged. Factory-set keys (e.g. `text` for `show_text`) take precedence over extras with the same name.

## Validation

Two layers of validation:

1. **Client-side (Pydantic)** at construction time — typos in field names, missing required fields, wrong types raise `pydantic.ValidationError` immediately.
2. **Server-side** via `validate_experiment()` — dry-run against the same validator the backend uses for `create_experiment`.

```python
from hyperstudy import HyperStudy, Experiment, State, show_text
from pydantic import ValidationError

hs = HyperStudy()

# Catches obvious errors before any HTTP traffic.
try:
    exp = Experiment(name="", required_participants=0)
except ValidationError as e:
    print(e)

# Catches structural issues the schema can't model.
exp = Experiment(name="Check me", states=[State(id="s1", focus_component=show_text("Hi"))])
result = hs.validate_experiment(exp)
print(result)  # → {"valid": True} or {"valid": False, "errors": [...]}
```

Use `validate_experiment` in a CI pipeline to catch breaking schema changes before you publish.

## Round-trip workflow

Fetch an existing experiment, modify it, and push it back:

```python
hs = HyperStudy()

# Read. Returns the camelCase wire-format dict.
config = hs.get_experiment_config("exp_abc123")

# Mutate. Because the dict is in wire format, mutations use camelCase keys —
# writing config["randomize_states"] would *add a new field* rather than
# update the existing one.
config["name"] = "Renamed"
config["randomizeStates"] = True

# Write. You can pass the raw dict back via **config…
hs.update_experiment("exp_abc123", **config)

# …or re-parse it into Experiment for type-checked edits in snake_case.
from hyperstudy import Experiment
exp = Experiment.model_validate(config)
exp.completion_screen_duration_ms = 8000
hs.update_experiment("exp_abc123", experiment=exp)
```

`Experiment.model_validate` accepts both snake_case and camelCase keys, so an exported config from the UI imports cleanly.

## Schema reference

The most-used top-level fields:

| Python (snake_case) | Wire (camelCase) | Type | Required | Description |
|---|---|---|---|---|
| `name` | `name` | `str` | ✓ | Experiment name. |
| `description` | `description` | `str` | | Free-text description. |
| `required_participants` | `requiredParticipants` | `int >= 1` | | Number of participants needed to start. |
| `randomize_states` | `randomizeStates` | `bool` | | Randomize state order per participant. |
| `states` | `states` | `list[State]` | | Ordered list of states. |
| `roles` | `roles` | `dict[str, Role]` | | Role definitions (multi-participant). |
| `global_components` | `globalComponents` | `dict[str, dict]` | | Persistent components running throughout. |
| `waiting_room_config` | `waitingRoomConfig` | `WaitingRoomConfig` | | Pre-experiment lobby behavior. |
| `disconnect_timeout` | `disconnectTimeout` | `DisconnectTimeout` | | How long to wait on a disconnect before dropping. |
| `completion_screen_duration_ms` | `completionScreenDurationMs` | `int >= 0` | | Final screen duration. |
| `consent_form_enabled` | `consentFormEnabled` | `bool` | | Show consent form? |
| `consent_form_title` | `consentFormTitle` | `str` | | Consent form title. |
| `consent_form_content` | `consentFormContent` | `str` | | Consent form HTML. |
| `instructions_enabled` | `instructionsEnabled` | `bool` | | Show instructions? |
| `instructions_title` | `instructionsTitle` | `str` | | Single-page instructions title. |
| `instructions_content` | `instructionsContent` | `str` | | Single-page instructions HTML body. |
| `instructions_pages` | `instructionsPages` | `list[InstructionsPage]` | | Multi-page instructions (alternative to title/content). |
| `post_experiment_questionnaire` | `postExperimentQuestionnaire` | `PostExperimentQuestionnaire` | | Post-task survey. |
| `variables` | `variables` | `dict` | | Experiment variables for dynamic content. |

For the authoritative schema (including per-component config shapes), see the [interactive API Reference](/api-reference) and search for `Experiment`.

## Troubleshooting

**`ValidationError: 1 validation error for Experiment / name / String should have at least 1 character`**

You called `Experiment(name="")` or omitted `name` entirely. `name` must be a non-empty string.

**`ValidationError: ... type / Input should be 'showtext', 'showimage', ...`**

You passed an unrecognized component type. Check `ComponentType` for the supported values, or construct with `FocusComponent(type=ComponentType.X, config=...)`.

**`{"valid": false, "errors": [...]}` from `validate_experiment`**

The structure passed Pydantic but failed the backend's per-component validation — most often a required `config` key missing for a specific component type. The error list names the offending path; cross-reference the [API Reference](/api-reference) for that component's config schema.

**`TypeError: create_experiment requires a 'name' ...`**

Either pass `name="..."` directly or include it on the `Experiment` you pass via `experiment=`.

## Next steps

- **Interactive API reference**: [API Reference](/api-reference) — browse every endpoint and schema
- **Data retrieval**: [Python Guide](./python-guide.md) — reading events, recordings, ratings
- **Other languages**: [JavaScript](./javascript-guide.md) | [R](./r-guide.md)
- **API key setup**: [API Key Management](./api-keys.md)
