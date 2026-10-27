---
title: Changelog
sidebar_position: 5
---

{/* Generated from the HyperStudy source (backend/src/agentSpec). Edits here are overwritten on the next release. */}

# Changelog

:::info Spec version 0.3.0 (draft)
Generated from the HyperStudy source. Machine-readable: [agent-spec.json](pathname:///agent-spec/0.3.0/agent-spec.json).
:::

## 0.3.0 (2026-10-27)

- Every `response.create` HyperStudy sends is named by a request id, as its
  `event_id` and as `response.metadata.hs_request`. An engine must echo the
  request's `metadata` on the response it creates, and must refuse a request
  that arrives while a response is under way with a
  `conversation_already_has_active_response` error carrying that request's
  `event_id` (see "One response at a time" on the voice engine page).
  HyperStudy credits each response to the request that produced it by that
  id, and sends a refused request again after the reply that displaced it.
- An answer to an on-screen question that the engine cancels (the
  participant started speaking) is asked for again once they finish.

## 0.2.1 (2026-10-26)

- A RapidRate shown as a screen's own question (not only inside a rating
  pause) is now answerable: `answerableComponents.screen` includes
  `rapidrate`. Text agents answer it with `submit_response` and voice engines
  with `answer_dimensions`, a 0–100 score for every dimension keyed by its
  label, exactly as in a rating pause.

## 0.2.0 (2026-10-21)

- Voice engines are shown what the participant sees. A `[context]` user item
  can now carry `input_image` content (a `data:` URL) after its text: each
  image on a screen is attached to that screen's item once per session, and
  the item's `images` list says what each one is (`attached`,
  `attached earlier`, `could not be loaded`). Questions attach their choice,
  item and dimension images the same way.
- New context items: `participants` (the other participants by name),
  `timer` (a screen's time limit), `experimenter_message`, `revealed`
  (another participant's answer shown to this one), and `paused` now names
  who the study is waiting for in `waitingFor`. A `screen` item's `text` is
  the screen as read (rich-text tags removed) and is omitted when empty.
- Conformance suite version 6 adds `image_context`: an engine must accept an
  image item and name the colour of a solid red image. Reports under earlier
  suite versions no longer pass preflight.

## 0.1.0 (2026-10-19)

- First published draft. It covers the model endpoint contract for text agents,
  the HyperStudy Realtime Profile for voice engines, the study tool catalogue
  and silent answering of on-screen questions, pausing turn detection while a
  participant cannot be heard, and the conformance suite at suite version 5.
  Engine audio times restart when turn detection is switched back on.
