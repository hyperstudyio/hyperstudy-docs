---
title: Component Overview
sidebar_position: 1
---

# Component Overview

Components are the building blocks of interactive experiments in HyperStudy. They provide the interface elements that participants see and interact with.

HyperStudy has two types of components:

1. **Focus Components**: The main interactive element in each experiment state. Only one focus component can be active per state.
2. **Global Components**: Elements that persist across multiple states, providing consistent functionality throughout the experiment.

:::tip Interactive Demos
Each component page below includes interactive demos from [storybook.hyperstudy.io](https://storybook.hyperstudy.io) where you can explore configurations live.
:::

## Focus Components

Focus components are the primary content of each experiment state. When you add a state, you select a focus component for that state.

| Component | Description | Common Uses |
|-----------|-------------|-------------|
| [Text Display](./text.md) | Shows formatted text content | Instructions, stories, scenarios |
| [Image](./image.md) | Displays static images | Visual stimuli, diagrams, photos |
| [Synchronized Video](./video.md) | Plays video with precise synchronization | Stimuli, demonstrations, scenarios |
| [Multiple Choice](./multiple-choice.md) | Presents a question with selectable options | Quizzes, surveys, decision tasks |
| [Text Input](./text-input.md) | Field for free text entry | Open questions, form fields |
| [VAS Rating](./vas-rating.md) | Visual analog scale for continuous ratings | Subjective ratings, evaluations |
| [Audio Recording](./audio-recording.md) | Records participant audio responses | Voice responses, think-aloud tasks |
| [Code](./code.md) | Display syntax-highlighted code | Programming tasks, code review |
| [Waiting](./waiting.md) | Empty state with optional message | Transitions, synchronization points |
| [Trigger](./trigger.md) | Hardware trigger send/receive | fMRI sync, equipment time-locking |
| [Likert Scale](./likert-scale.md) | Standard agreement/frequency scales | Surveys, questionnaires |
| [Ranking](./ranking.md) | Drag-and-drop ranking of items | Preference ordering, prioritization |
| [Rapid Rate](./rapid-rate.md) | Multi-dimensional quick rating | Emotion ratings, fast assessments |

## Global Components

Global components persist across multiple experiment states. Configure them once and control their visibility per state using the visibility matrix.

| Component | Description | Common Uses |
|-----------|-------------|-------------|
| [Video Chat](./videochat.md) | Real-time audio/video communication | Participant interactions, interviews |
| [Text Chat](./text-chat.md) | Text messaging between participants | Text-based communication |
| [Continuous Rating](./continuous-rating.md) | Real-time rating during stimuli | Moment-by-moment evaluations |
| [Sparse Rating](./sparse-rating.md) | Time-based rating prompts | Moment-specific evaluations |
| [Scanner Pulse Recorder](./scanner-pulse-recorder.md) | Records fMRI scanner TR pulses | fMRI hyperscanning synchronization |
| [Gaze Overlay](./gaze-overlay.md) | Real-time eye tracking visualization | Gaze monitoring, calibration verification |

## Common Properties

All components share these configurable properties:

- **Title**: Optional heading text for the component
- **Instructions**: Optional guidance text for participants
- **Width/Height**: Size settings (percentage or pixels)
- **Visibility**: Which roles can see this component

### Stimulus Display

Seven input components support showing an image alongside the response interface: Text Input, Likert Scale, VAS Rating, Multiple Choice, Ranking, Audio Recording, and Rapid Rate. Enable "Show Stimulus Image" in the component config to display a static or dynamic image in one of four layout positions (above, below, left, right). See [Stimulus Display](../stimulus-display.md) for details.

### Text Formatting

All text fields in components support:
- **Variables**: Insert dynamic values using `{variableName}` syntax
- **HTML Tags**: Format text with `<b>`, `<i>`, `<u>`, `<s>`, `<h1>`-`<h6>`, `<br>`, `<p>`

See [Text Component - HTML Formatting](./text.md#using-html-formatting) for details.
