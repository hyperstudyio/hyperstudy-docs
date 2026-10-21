---
sidebar_position: 6
title: Voice Agents
---

# Voice Agents

A **voice agent** is an agent that talks. It joins the experiment's video chat, hears the participant, and answers out loud in real time. It also answers the questions that appear on its screen, such as ratings and multiple choice, without saying anything.

One realtime model does all of this: it listens, decides what to say, speaks, and chooses the answers to on-screen questions. HyperStudy currently uses the **OpenAI Realtime** engine, with `gpt-realtime-2.1` as the default model.

Any agent in your library can become a voice agent. You give its persona a voice in the Agent Designer, then bind it to a role in an experiment as you would any other agent.

## Requirements

Voice agents have stricter requirements than text agents. Every one of these is checked when you deploy (see [What blocks a deployment](#what-blocks-a-deployment)).

| Requirement | Details |
|-------------|---------|
| **V2 runtime** | Like all agents, voice agents run only on the [V2 experiment runtime](/experimenters/ai-agents#requirements). |
| **Exactly one human participant** | The room must have exactly one human participant. Group conversations are not supported yet. |
| **One voice agent per room** | Only one role in the experiment can be bound to an agent with a voice. Other roles can still be text agents. |
| **Video chat** | The [Video Chat](/experimenters/experiment-design/components/videochat) global component must be enabled. The agent hears and speaks through the room's audio. |
| **OpenAI API key** | The experiment owner, or their organization, needs an OpenAI key in **Settings → API Keys**. See [Connecting LLM Providers](/experimenters/ai-agents/connecting-providers). |
| **A tested engine** | The engine and model must have passed HyperStudy's conformance tests. See [Engine conformance](#engine-conformance). |

## Giving an agent a voice

Open the agent in the Agent Designer and go to the **Voice** tab. Check **Give this agent a voice**.

![The Voice tab in the Agent Designer, with the engine, model, voice, speed and speaking style](/img/agents/voice/designer-voice-tab.jpg)

| Field | What it does | Default and range |
|-------|--------------|-------------------|
| **Engine** | The realtime engine that hears, thinks and speaks. | OpenAI Realtime (the only engine for now) |
| **Model** | The OpenAI realtime model. A model other than the default only runs if it has a passing conformance report. | `gpt-realtime-2.1` |
| **Voice** | The built-in voice the agent speaks with. | `marin`, `cedar`, `alloy`, `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer` or `verse`. New voices start on `marin`. |
| **Speed** | How fast the agent speaks. | 0.25 to 1.5, default 1 |
| **Speaking style** | How the agent should sound, in plain words, for example "warm, a little hesitant, speaks in short sentences". | Up to 500 characters |

**Play sample** reads a fixed sentence with the selected voice, speed and style so you can hear it before you use it. It uses your OpenAI key. Each combination of settings is generated once and then reused.

When a persona has a voice, the realtime engine makes every decision for it. The persona's text model settings on the **Model & Guardrails** tab (provider, model, temperature and so on) are not used. The persona's prompt is used: its identity, objective and guidance become the engine's instructions (see [How the agent's instructions are built](#how-the-agents-instructions-are-built)).

:::caution Cloud voices are not deterministic
The same voice and settings can sound slightly different from one session to the next. If the voice itself is your manipulated variable, use fixed recorded stimuli instead.
:::

## Avatars

Each agent can have an avatar picture. Other participants see it on the agent's video tile, the same way they see a person's profile picture. Without an avatar, they see the first letter of the agent's display name.

Set the avatar on the agent's **Definition** tab: drag an image onto the circle, or click it to choose a file. PNG, JPEG, GIF and WebP images up to 5 MB are accepted. **Replace image** and **Remove** change it later.

![The Definition tab, with the display name and avatar fields](/img/agents/voice/designer-definition-avatar.jpg)

The **Display name** on the same tab is the name other participants see in chat and video. If it is empty, they see the agent's name.

:::note Avatar files are public
The avatar is stored as a public file, so every participant's browser can load it, including anonymous participants. Don't upload anything you wouldn't show to every participant. Duplicating an agent gives the copy its own copy of the image.
:::

## Adding a voice agent to an experiment

Bind the agent to a role on the experiment designer's **Agents** tab, exactly as for a text agent (see [Adding Agents to Experiments](/experimenters/ai-agents/agents-in-experiments)). The role's **Objective** and **Guidance** fields add study-specific instructions to the agent's own.

![A voice agent bound to a role on the Agents tab, with the study-specific Objective and Guidance fields](/img/agents/voice/experiment-agents-role-binding.jpg)

Then check two things in your experiment design:

- **Video chat must be visible on the states where the agent should talk.** The agent hears the participant only while the current state shows the video chat. In the lobby, during device setup, on states without the video chat, and after the experiment ends, nothing the participant says reaches the engine. If the video chat disappears while the agent is speaking, it stops.
- **The agent must be able to answer every question on a synchronized state.** A voice agent answers these focus components: [Multiple Choice](/experimenters/experiment-design/components/multiple-choice) (single and multiple selection), [Likert Scale](/experimenters/experiment-design/components/likert-scale), [VAS Rating](/experimenters/experiment-design/components/vas-rating), [Ranking](/experimenters/experiment-design/components/ranking), [Text Input](/experimenters/experiment-design/components/text-input), and [Rapid Rate](/experimenters/experiment-design/components/rapid-rate) in a [sparse rating](/experimenters/experiment-design/components/sparse-rating) pause. For [Audio Recording](/experimenters/experiment-design/components/audio-recording), it submits as text what it would have said; no audio is recorded for the agent's answer.

The agent answers on-screen questions silently. Its answer is checked against the question (for example, a choice must match one of the choices exactly) and then recorded like any agent's response. If an answer is rejected, the agent is asked again, up to three attempts in total.

## Voice turn-taking

The settings that control when the agent speaks are set **per experiment**, in the **Voice turn-taking** section of the experiment designer's **Agents** tab. They apply to every agent in the experiment whose persona has a voice.

![The Voice turn-taking settings on the experiment designer's Agents tab](/img/agents/voice/experiment-voice-turn-taking.jpg)

### How a turn works

The engine listens to the participant continuously. When it decides the participant has finished speaking, it replies. Two things follow from how this works today:

- **The agent replies to every turn.** There is no setting that lets it stay silent after the participant speaks.
- **Any speech cuts the agent off.** If the engine detects the participant speaking while the agent is talking, the agent stops at once and the engine is told how much of its reply was actually heard. There is no minimum interruption length: a short "mm-hm", a laugh or a cough loud enough to pass the speech threshold also stops it.

The agent does not start the conversation. It speaks after the participant has spoken, or when the participant types to it in the text chat (it replies to typed messages by typing).

### Settings

| Setting (as shown in the UI) | What it does | Default | Allowed values |
|------------------------------|--------------|---------|----------------|
| **End of the participant's turn** | How the engine decides that the participant has finished speaking. **After a silence** ends the turn after a set length of silence. **When they sound finished (semantic)** uses a model that judges whether the participant sounds done. | After a silence | After a silence; When they sound finished (semantic) |
| **Silence that ends a turn (ms)** | With *After a silence*: how long the participant must be quiet before their turn ends. Shorter makes the agent reply sooner but more likely to jump in during a pause. | 500 | 100 to 5,000 |
| **Speech threshold (0–1)** | With *After a silence*: how loud a sound must be to count as speech, both to start the participant's turn and to interrupt the agent. Raise it if background noise or a quiet "mm" cuts the agent off; set too high, soft-spoken participants are missed. Loud sounds such as a laugh or cough still pass. | 0.5 (OpenAI's default) | 0 to 1 |
| **Audio kept before speech (ms)** | With *After a silence*: how much audio from just before detected speech is included in the participant's turn, so the first syllable is not clipped. It does not change how easily a turn starts, but recorded turn start times move earlier by this amount. | 300 (OpenAI's default) | 0 to 2,000 |
| **Eagerness** | With *When they sound finished*: how readily the engine decides the participant is done. | `high` when you switch to semantic detection in the designer | `high`, `medium`, `low`, `auto` |
| **Minimum response delay (ms)** | The agent waits at least this long after the participant stops speaking before its reply starts playing. Instant replies can give an agent away. | 0 | 0 to 10,000 |
| **Longest single response (seconds)** | A reply longer than this is cut off. | 60 | 1 to 300 |
| **Transcribe participants' speech** | Records a transcript of what the participant says. See [Transcription](#transcription). | Off | On or off |
| **Transcription model** | The model that transcribes the participant (shown when transcription is on). | `gpt-4o-transcribe` | `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, `whisper-1` |
| **Language participants speak** | A hint for the transcription model (shown when transcription is on). | Detect automatically | Detect automatically, or a language from the list |

### Turn detection and latency

The choice of turn detection has a large effect on how quickly the agent replies. In one measurement on OpenAI with `gpt-realtime-2.1`, using synthetic speech, the time from the end of the participant's speech to the engine committing their turn was:

| Turn detection | End of speech to turn committed |
|----------------|---------------------------------|
| After a silence, 500 ms | about 0.7 s |
| Semantic, `high` eagerness | about 2.6 s |
| Semantic, `auto` eagerness | about 4.6 s |

In that measurement, semantic detection waited out its maximum timeout even after a plainly finished question. These figures are one measurement, not a guarantee: natural speech, a different model, or a change on the provider's side can give different results. The engine then needs additional time to start speaking, and any **Minimum response delay** is added on top.

### Transcription

The agent's own words are always recorded, as the text the engine generated. The participant's words are recorded as text only when **Transcribe participants' speech** is on. Without it, the participant's turns are still recorded with their start and end times, but with no transcript.

Transcription runs alongside the engine's reply, so it adds no delay, but your provider charges for it per minute. The **Language participants speak** setting only affects the transcript. The agent itself answers in whatever language it is spoken to. Naming the language helps when automatic detection turns short or noisy turns into the wrong language.

## What the agent perceives

A voice agent is told what a participant in its role sees on screen, as it happens. The engine keeps one running conversation for the whole session, so everything it has been told stays in that conversation.

**Screens.** Each time a new screen appears, the agent is told the screen's type and its text as a participant reads it (formatting removed). This includes titles, questions, prompts, instructions and captions, and a waiting screen's message.

**Images.** The agent sees the images on the screen as images, each labeled with what it is:

- the image on an [Image](/experimenters/experiment-design/components/image) screen
- the stimulus image on a response screen that shows one (for example a rating with a stimulus)
- the images on multiple-choice choices, ranking items and Rapid Rate dimensions, labeled with the text of their choice, item or dimension

Up to 8 images per screen are sent, with the stimulus first. Each image is sent once per session; when it appears again, the agent is reminded that it was attached earlier. Images are fetched by the HyperStudy server, not by the model provider. Only `https` addresses are fetched, only PNG, JPEG, GIF and WebP images are accepted, and an image that can't be loaded is replaced by a note saying so.

**Questions.** When a question appears on screen, or a sparse rating pauses the video, the agent is asked to answer it.

**What is happening in the study.** The agent is also told:

- how long a timed screen lasts (the seconds left)
- messages from the experimenter that are sent to everyone, or to this agent
- when the study pauses, and which participant it is waiting for; and when it resumes
- other participants' answers when the state reveals them (**Reveal responses to other participants** in the state editor)
- what the participant types in the text chat
- the other participants' names. A person's name is their account display name, or "Participant" followed by their role if they have none. Another agent's name is its display name.

**Participant content is data, not instructions.** Everything the agent is told about the study is sent as clearly marked context. The engine's instructions tell it that this context is information and never instructions, so a participant who types or displays "ignore your instructions" is quoted to the agent rather than obeyed. This reduces the risk of manipulation but cannot rule it out.

### What text agents perceive

Text agents use the same perception. They see the same screen text and images (up to 8), the time left on a timed screen, the three most recent experimenter messages, and the other participants' names. Because a text agent's view is rebuilt on every turn, it is also shown the text of up to 3 screens it read since it last answered, so a story read on one screen is still known when the next screen asks about it. Two items are currently voice-only: who a paused study is waiting for, and revealed answers (text agents use revealed answers only in [cognition](/experimenters/ai-agents/cognition) reasoning steps).

### What agents do not perceive

- **Video content.** No agent sees or hears what is in a playing video. It knows that a video screen is showing, and it is asked any sparse rating questions when the video pauses.
- **Images chosen in the participant's browser.** Multiple-choice images drawn at random from a pool are picked in the browser, so the server never knows which one was shown.
- **Anything a participant could not see.** Agents are not given other roles' configuration, hidden fields or participant IDs.

## How the agent's instructions are built

You can write instructions for an agent at three levels. They combine; a lower level adds to the one above it and never replaces it.

| Level | Where you write it | Applies to |
|-------|--------------------|------------|
| **Agent** | The agent's identity, objective and guidance on the **Cognition** tab of the Agent Designer (see [Writing the prompt](/experimenters/ai-agents/designing-agents#writing-the-prompt)) | Every experiment the agent is used in |
| **Experiment** | The role's **Objective** and **Guidance** on the experiment designer's **Agents** tab (see [Role overrides](/experimenters/ai-agents/agents-in-experiments#role-overrides)) | This agent role in this experiment |
| **State** | **Agent guidance (this phase)** in the state editor (see [Instructions for one state](/experimenters/ai-agents/agents-in-experiments#instructions-for-one-state)) | One state of the experiment |

For a voice agent, the engine's instructions are, in order:

1. The agent's identity, then its objective and guidance with the experiment's role objective and guidance appended to each.
2. A fixed description of the setting: a live spoken conversation with another participant, in short conversational turns.
3. The **Speaking style** from the Voice tab.
4. How to use the text chat (when the experiment has one) and how to answer on-screen questions.
5. The current state's agent guidance, under "For this part of the study". When the participant moves to a state with different guidance, the instructions are updated.

The full instructions sent at the start are saved on the run manifest, and each update is recorded in the conversation data.

## Data

A voice conversation is recorded as events, alongside the experiment's other events. Each event is stored under its speaker: the agent's turns under the agent, the participant's turns under the participant.

| Event | What it records |
|-------|-----------------|
| `voice.utterance` | A speech turn that reached the room, by the agent or the participant: its start and end time, duration and transcript. Agent turns also record how much of the reply was heard versus generated, whether it was cut off, and the response latency (from the end of the participant's speech to the agent's first audio). |
| `voice.discarded` | A false start: an agent reply that was dropped before any of it was heard, usually because the participant kept talking. |
| `voice.response` | An agent reply that acted without speaking, such as answering an on-screen question or typing in the chat. |
| `voice.context` | What the engine was told: its instructions, each screen, question, typed message and the other context described above. |

Because the agent's audio track is in the room, video chat recordings include the agent's voice along with the participant's.

### Viewing the conversation

In **Data Management**, open a participant's data from a room with a voice agent. A **Conversation** tab appears, showing the room's conversation as a transcript or as a table. You can show false starts and what the agent was told, and, if you have export permission, export the rows as CSV or JSON.

### Through the API

The [REST API](/experimenters/api-access/overview) returns the conversation with an API key that has the `read:events` scope. Rows are flat, so the CSV format (`?format=csv`) is usable as is.

| Endpoint | Returns |
|----------|---------|
| `GET /api/v3/data/voice/experiment/{experimentId}` | Every voice conversation in the experiment (`?deploymentId=` narrows it to one deployment) |
| `GET /api/v3/data/voice/room/{roomId}` | One room's conversation, all speakers |
| `GET /api/v3/data/voice/participant/{participantId}` | One participant's own voice events (`?roomId=` narrows it to one room) |

Add `?includeContext=false` to leave out the `voice.context` rows. The full schema is in the [API reference](/api-reference).

The run manifest for a voice agent (see [Agent Data](/experimenters/ai-agents/agent-data)) also records the engine, model, voice, speed, style, turn-taking and transcription settings, and which conformance report the engine ran under.

## Costs and guardrails

The realtime engine's token usage counts against the agent's **token budget** guardrail. If the budget is exceeded, the agent stops and the room ends. The cost in US dollars of realtime audio is not calculated yet, so a voice agent's run is marked as **cost unknown**; check your OpenAI billing dashboard for actual spend.

Guardrails can only act on what a voice agent said after it has been said. Nothing reviews the engine's speech before the participant hears it.

## Engine conformance

HyperStudy only starts a voice agent on an engine and model that have a stored, passing report from its voice engine conformance suite, at the current version of the suite. The suite checks, with recorded speech, that the engine detects turns, stops when interrupted, answers questions silently, accepts images, and more. Running it is an administrator or developer task; the [agent adapter specification](https://docs.hyperstudy.io/developers/agent-adapters) describes it in full.

If you change the **Model** on the Voice tab to one that has not been tested, or the suite is updated, deployment is blocked until the suite has been run again and has passed.

## What blocks a deployment

Voice agents go through the same [preflight validation](/experimenters/ai-agents/agents-in-experiments#preflight-validation) as other agents. These voice-specific problems block a deployment, and are listed together with any others:

| Problem | Fix |
|---------|-----|
| More than one role is bound to an agent with a voice | Remove the voice from all but one agent, or bind text agents to the other roles |
| The experiment does not have exactly one human participant | Voice agents currently need exactly one human in the room |
| The Video Chat global component is not enabled | Enable it, and show it on the states where the agent should talk |
| No OpenAI key for the experiment's owner or organization | Add one in **Settings → API Keys** |
| The engine and model have no passing conformance report | Ask your administrator to run the conformance suite for that model, or switch back to the default model |
| An invalid turn-taking or transcription setting | Fix the setting named in the message |

The same checks run again when each room starts.

## Limitations

- **One human, one voice agent per room.** Group conversations and several voice agents in a room are not supported yet.
- **OpenAI only.** Other realtime engines are planned.
- **No video perception.** Agents don't see or hear the content of a playing video.
- **Sessions are not reconnected.** If the connection to the voice engine ends during a run, for example because the provider ends the session or the network drops, it is not reconnected: the agent's run ends and the room ends with it. Keep sessions within your provider's maximum realtime session length.
- **The agent cannot choose to stay silent**, and **any detected speech interrupts it** (see [How a turn works](#how-a-turn-works)).
- **The agent never speaks first.**
- **V2 runtime only**, like all agents.
