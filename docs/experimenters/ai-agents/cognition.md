---
sidebar_position: 8
title: Cognition (Experimental)
---

# Agent Cognition

:::warning Experimental
The cognition system is under active development. Concepts described here are stable, but the editor interface and configuration format may change between releases. Expect this page to evolve.
:::

By default, an agent maps each experiment situation to a response with a single model call. The **cognition system** replaces that single step with a composable reasoning process you design — so cognition itself becomes a manipulable experimental variable. You can run the same experiment with agents that differ only in, say, whether they model their partner's beliefs, and compare outcomes.

Cognition is configured per agent in the designer's **Cognition** tab (per-turn reasoning) and **Offline** tab (between-episode learning).

## Online cognition: the reasoning chain

Each agent turn runs a small graph of **abilities** between perceiving the situation and deciding what to do. Abilities are composable nodes with named inputs and outputs — you wire them together on a canvas, or start from a prebuilt recipe.

Available abilities include:

| Ability | What it does |
|---------|--------------|
| **Goal inference** | Infers what a co-participant is trying to achieve |
| **Belief model** | Models what a co-participant believes (including recursively: what they believe about you) |
| **Predict** | Predicts a co-participant's next action |
| **Prediction error** | Scores surprise when predictions miss — logged as a dependent variable |
| **Counterfactuals** | Considers what would have happened under alternative actions |
| **Regret** | Scores the gap between the chosen action and the best alternative |
| **Goal valence** | Evaluates outcomes against the agent's own goals |
| **Encode / Recall** | Writes and retrieves episodic memories |
| **Distill / Recall insight** | Abstracts durable insights into semantic memory and retrieves them |
| **Track belief / Model partner** | Maintains persistent per-peer belief and partner models |
| **Deliberate** | Generates candidate actions and scores them against remembered past episodes before acting |

### Memory stores

Abilities read and write typed memory stores:

- **Episodic** — timestamped experiences, retrieved by a weighted mix of recency, importance, and relevance
- **Semantic** — distilled insights and general rules
- **Belief** — per-peer belief state
- **Opponent/partner** — per-peer behavioral models

### Theory of mind

The mentalizing abilities implement perspective-taking with configurable **recursive depth** (first-order: "what does my partner believe"; second-order: "what does my partner believe about me"; up to depth 3). A separate **legibility** toggle controls whether an agent's reasoning is shown to human co-participants — doing the reasoning and displaying it are independent knobs.

### Recipes

Prebuilt configurations cover common designs, including: no theory-of-mind (direct), first-order ToM, recursive ToM, prediction + surprise + regret, reflective memory, and experience-guided decision (Deliberate). Recipes are starting points — you can open and modify any of them.

## Offline cognition: learning between episodes

The **Offline** tab configures what an agent does *between* experiment sessions (or at triggers like end-of-experiment, idle periods, or timers):

- **Reflect** — reviews recent and important episodic memories and writes durable insights
- **Consolidate** — abstracts accumulated insights into a few general rules
- **Ruminate** — replays a real past episode, generates counterfactuals, and optionally validates and promotes lessons that would have improved the outcome

Offline processes run under their own budgets (max calls / max tokens), and optional **drives** — self-improvement urgency and mistake sensitivity — scale how aggressively replay prioritizes failures.

Offline cognition pairs with **cross-experiment memory persistence** ([Designing Agents](/experimenters/ai-agents/designing-agents#memory-and-language)) so what an agent learns can carry into its next session.

## Analytics

Cognition-enabled agents log their intermediate signals as data: surprise (prediction error), regret, goal valence, and per-peer belief trajectories all land in the [decision records](/experimenters/ai-agents/agent-data), ready to analyze by condition.

{/* Cognition canvas editor screenshots coming soon — the canvas UI is being redesigned */}
