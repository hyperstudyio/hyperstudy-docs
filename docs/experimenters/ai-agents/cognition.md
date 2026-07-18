---
sidebar_position: 8
title: Cognition (Experimental)
---

# Agent Cognition

:::warning Experimental
The cognition system is under active development. The concepts described here are stable, but the editor interface and configuration format may change between releases. Expect this page to evolve.
:::

By default, an agent maps each experiment situation to a response with a single model call. The **cognition system** replaces that single step with a composable reasoning process you design — so cognition itself becomes a manipulable experimental variable. You can run the same experiment with agents that differ only in, say, whether they model their partner's beliefs, and compare outcomes.

Cognition is configured on the **Cognition** tab of the [agent designer](/experimenters/ai-agents/designing-agents). The tab is organized along two dimensions:

- **Context** — *which situation* the reasoning applies to: **Response** (the main per-turn loop, always present), **Chat** (incoming chat messages), and **Whole mind** (a cross-context consolidation loop).
- **Loop** — *when* it runs: **Online** (during the agent's turn) or **Offline** (between turns and between sessions).

![The Cognition tab: context sub-tabs, the Online/Offline toggle, the shared stores rail, and the reasoning canvas](/img/agents/cognition-tab.jpg)

## Online cognition: the reasoning canvas

Each agent turn runs a small graph of **abilities** between two fixed anchors: **Perceive** (the room state, peer responses, chat messages, and media the agent takes in) and **Decide** (which chooses exactly one action per turn). Abilities are composable nodes you wire together on a canvas — start from a prebuilt recipe or build from the **+ Add** menu.

![The cognition canvas with the Social ToM recipe: belief tracking and partner modeling feed typed memory stores on the way to Decide](/img/agents/cognition-canvas.jpg)

Nodes carry their configuration visibly on the card: a **×N** badge means the ability fans out per co-participant, a **d1/d2/d3** badge shows recursive mentalizing depth, and a **z⁻¹** badge marks feedback abilities that compare against the *prior* turn.

### The ability catalog

![The + Add menu lists every ability with its scope, plus the recipe gallery](/img/agents/cognition-catalog.jpg)

| Ability | Scope | What it does |
|---------|-------|--------------|
| **Goal Inference** | per-peer | Infers what a co-participant is trying to achieve |
| **Belief Model** | per-peer | Models what a co-participant believes (including recursively: what they believe about you) |
| **Predict** | per-peer | Predicts a co-participant's next action |
| **Reflect** | self | Reviews the current situation against recent experience |
| **Counterfactuals** | self | Considers what would have happened under alternative actions |
| **Encode** / **Recall** | self | Writes episodic memories / retrieves them by weighted recency, importance, and relevance |
| **Prediction error** | per-peer · feedback | Scores surprise when last turn's prediction missed — logged as a dependent variable |
| **Regret** | per-peer · feedback | Scores the gap between the chosen action and the best alternative |
| **Goal valence** | self · feedback | Evaluates outcomes against the agent's own goals |
| **Recall insight** / **Distill insight** | self | Retrieves distilled insights from semantic memory / abstracts new ones into it |
| **Track belief** | per-peer | Maintains a persistent per-peer belief state (writes to a Belief store) |
| **Model partner** | per-peer | Maintains a persistent per-peer behavioral model (writes to an Opponent store) |
| **Deliberate** | self | Generates candidate actions and scores them against remembered past episodes before acting |

### Inspecting and editing a node

Clicking any node opens the inspector, where you can edit its prompt, output slot, **scope** (self — runs once, or per-peer — fans out), **recursion depth**, and **timing** (this turn vs. feedback against the prior turn).

![The inspector for a Track belief node: prompt, output slot, scope, recursion depth, and timing](/img/agents/cognition-inspector.jpg)

Two more controls live here:

- **Recursion depth** (mentalizing abilities): depth 0 is the agent's own vantage; 1 models the peer's goals; 2 models the peer's model of the agent; 3 goes one level deeper.
- **Gates**: enable *"Skip deeper reasoning when confident"* to set a confidence threshold τ on a node's output — at or above τ, the remaining reasoning is skipped and Decide runs on what's been written so far. Gates keep expensive graphs cheap on easy turns.

### Recipes

Prebuilt starting graphs cover common designs — everything stays editable after you load one:

![A new agent's Cognition tab offers the recipe gallery](/img/agents/cognition-recipes.jpg)

- **Direct (no ToM)** — perceive → decide; the fastest, cheapest agent
- **1st-order ToM** — infers each partner's goals and predicts their next move before deciding
- **Recursive ToM (K=2)** — models what your partner thinks *you* will do (two levels deep)
- **Predict + Surprise + Regret** — predicts, then scores surprise and regret against last turn's expectations
- **Reflective-memory agent** — retrieves episodic memories, reflects on them, and encodes new ones
- **Social ToM** — tracks beliefs, models partners, and distills insights into semantic memory
- **Experience-guided decision** — scores candidate actions against remembered episodes before deciding

## Memory stores

The **Stores** rail on the left of the canvas holds the agent's memory. Stores are shared across all contexts — the Response and Chat graphs read and write the same memory. On the canvas, a store's **read port is a circle** and its **write port is a diamond**, so you can see at a glance which abilities consume versus update each store.

Typed stores you can add:

- **Episodic** — a timestamped experience stream, retrieved by a weighted mix of recency, importance, and relevance (weights and decay half-life are configurable per store). Optionally auto-encodes each turn, and holds any **seeded events** and **example decisions** you give the agent as backstory.
- **Semantic** — distilled insights and general rules
- **Belief** — a per-peer who-knew-what table
- **Opponent** — per-peer partner models

Two built-in entries are always present:

- **Identity** — the agent's persona, ambient in every prompt. Fixed in-session; only the experimenter edits it.
- **Goals** — a list of goal entries. Each entry is one goal with an optional direction (maximize / minimize / maintain) and weight, plus a per-goal **"may revise"** flag: revisable goals can be rewritten by the agent as it learns, while unchecked goals stay fixed. Goals feed every decision and the goal-valence outcome signal.

![The Goals panel: one entry per goal, with optional direction and weight and a per-goal "may revise" flag](/img/agents/cognition-goals.jpg)

## The Chat and Whole mind contexts

- **Chat** uses a built-in fast path by default: each incoming message gets a single model call with a turn-taking bias, and no graph runs. You can create a dedicated chat graph — but it runs once per incoming message, so keep it small and gate it.
- **Whole mind** is offline-only: a consolidation loop that runs *across* every context between turns. It has no online graph.

## Offline cognition: learning between episodes

The **Offline** toggle configures what an agent does between turns and between sessions. Offline graphs are built on the same canvas, from three node types:

- **Reflect** — reviews recent and important episodic memories and writes durable insights
- **Consolidate** — abstracts accumulated insights into a few general rules
- **Ruminate** — replays a real past episode, generates counterfactuals, and (with **Validate** enabled) promotes only lessons that score net-positive against an outcome signal such as goal valence or prediction error

![An offline loop: a validated Ruminate node distills lessons into semantic memory, with triggers, budgets, and drives on the left](/img/agents/cognition-offline.jpg)

Offline recipes: **Reflection only**, **Reflect + Consolidate**, and **Validated rumination**.

The rail beside the offline canvas configures the loop as a whole:

- **Triggers** — end of experiment, a periodic timer, or after important events (idle and section-boundary triggers are coming)
- **Budget per run** — max LLM calls and max tokens
- **Drives** — optional self-improvement urgency and mistake sensitivity, which scale how aggressively replay prioritizes failures

Offline cognition pairs with **cross-experiment memory persistence** ([Designing Agents](/experimenters/ai-agents/designing-agents#memory-and-language)) so what an agent learns can carry into its next session.

:::note Rebuilding older agents
Agents whose reasoning configuration predates the canvas (or uses the retired single-graph format) no longer run their old config — the designer shows a rebuild notice, and your first edit on the canvas replaces the old graph.
:::

## Analytics

Cognition-enabled agents log their intermediate signals as data: surprise (prediction error), regret, goal valence, and per-peer belief trajectories all land in the [decision records](/experimenters/ai-agents/agent-data), ready to analyze by condition.
