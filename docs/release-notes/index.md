---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.82

Released: 2026-06-19

## What's Changed

## Changes since last production release

- Merge fix/data-participant-stale-guard: guard participant-data load against stale responses (f70358dec)
- fix(data): guard participant-data load against stale responses (9b0897d5f)
- Merge branch 'fix/pupil-gaze-already-connected' into dev-integration (a3e3e4b72)
- Merge branch 'feature/pupil-independent-calibration' into dev-integration (4b9b66195)
- Merge branch 'fix/leave-experiment-confirmation' into dev-integration (3dcb8b7fc)
- Merge branch 'fix/v2-preview-trigger-autoadvance' into dev-integration (b652b0d27)
- Merge branch 'feature/account-menu-platform-admin' into dev-integration (ee4eac99a)
- fix(experiment): guard reconnection-overlay leave against double-click re-entrancy (d9bb969a4)
- fix(experiment): confirm before leaving from the reconnection overlay (b928aff77)
- docs(experiment): narrow leave-confirmation spec to overlay-only + add plan (b62f39f93)
- docs(experiment): spec for leave-experiment confirmation guard (b1e4eb9f6)
- feat(experiment): thread pupil calibrationEnabled through DeviceSetupManager + V1/V2 runners (6056a8a6e)
- feat(pupil): allow calibration without the gaze overlay (calibrationEnabled), record transform on completion (ed899fab3)
- feat(pupil): record calibration transform to dataset (recordCalibrationToDataset) (b77eff5d9)
- feat(designer): opt-in 'Enable gaze calibration' for Pupil, nest require-calibration under it (efa11ffa7)
- docs: implementation plan for independent (opt-in) Pupil gaze calibration (9010c9f63)
- docs: design spec for independent (opt-in) Pupil gaze calibration (8009a5d33)
- fix(experiment): auto-advance TTL/Pupil triggers in V2 preview (a57f926bc)
- feat(admin): use shared AccountMenu in platform admin dashboard (ee5e85989)
- fix(devices): recycle a stale Neon gaze inlet on "already connected" (1a69a33ea)

---

## v0.6.81

Released: 2026-06-19

## What's Changed

## Changes since last production release

- fix(experiment): V1 setup watchdog surfaces retryable error, not a half-built experiment (7ef263b0)
- fix(devices): recycle a stale Neon gaze inlet on "already connected" (6f3e5e56)
- feat(auth): carry platformRole in JWT claims and drive dashboard routing from the token (0eb51813)
- fix(routing): gate dashboard render on resolved role so experimenters never see the participant dashboard (591ee7a3)
- fix(livekit): prevent cross-user video bleed via stale singleton + token authz (1e9dc20d)
- fix(data): write participants subcollection at room creation for dataVersion:2 rooms (1ccf80b6)
- build(backend): switch base image node:22-alpine → node:22-bookworm-slim (glibc) (e9a64b6a)
- test(agents): remove stale free-text Model-change test (field is now a <select>) (39fecfc0)
- fix(agents): lazy-load @livekit/rtc-node to unbreak backend boot on Alpine/musl (88a0810d)
- fix(agents): route all agent chat over LiveKit (send_chat/sendChat -> lk-chat) (b43fe557)
- test(agents): drop redundant/misleading chat loop-guard test (kept wait-provider proof) (a2c4e754)
- feat(agents): wire chatEnabled into perception + e2e peer-chat perceive->reply (c8faba45)
- refactor(v2): extract RESPONSE_REVEALED_TAG const (avoid filter/emit drift) (7fe3f476)
- feat(v2): reveal-gated participant.response-revealed broadcast (67a25dab)
- feat(agents): wire LiveKit chat channel into spawn lifecycle (09d9ea50)
- feat(agents): persist agent chat turns to rooms/{roomId}/chat (ec827278)
- feat(agents): mint agent LiveKit token (agent flag in metadata) (3de0b705)
- feat(agents): agentLiveKitChannel envelope encode/decode (fakeable transport) (74f01f20)
- build(agents): add @livekit/rtc-node + native-binding load check (2537d149)
- feat(agents): clock-injected response pacing + lk-chat routing (d45a6775)
- feat(agents): pure pacing delay computation (e9ef5b73)
- feat(agents): scheduler->generator chat decision path (c0494dac)
- feat(agents): rate-aware chat turn-taking policy (pure) (84007c99)
- feat(agents): perceptionModel peerResponses channel (c21b38d4)
- feat(agents): perceptionModel peer-chat messages channel (excludes own) (2569b9be)
- docs: Phase 1 (Tier 2) implementation plan for agent perception (13defbd9)
- docs: design spec for finishing agent perception (T2 detailed, hybrid LiveKit) (52450c66)
- feat(agents): surface component content to the agent + typed submit_response value (a857e493)
- feat(agents): provider selection from enabled keys + model generation params (24ffa5dc)
- feat(designer): move Preview button to the designer header next to Close (13844162)
- feat(agents): model picker dropdown with Custom escape hatch (a8cddadf)
- Merge remote-tracking branch 'origin/dev' into feat/v2-agent-participants-phase0 (82140318)
- fix(v2): record onset reference time and stop questionnaire-phase abandonment (b7a63f5f)
- fix(designer): reactive availableRoles in StateEditor + V2-gating test (9019a88c)
- fix(agents): end room on incomplete agent spawn + reclaim agent session docs (7914e240)
- ci(agents): revert AGENT_SECRET_KEY wiring — retired in favor of userApiKeys (ENCRYPTION_KEY) (a053203f)
- feat(agents): settings UI for Anthropic/OpenAI/Gemini API keys (shareable) + provider+model picker in Agents tab (c465d558)
- refactor(agents): resolve provider keys from userApiKeys (user->org-shared) via createProvider; retire orgCredentialStore + seed CLI + AGENT_SECRET_KEY gate (53fdecda)
- feat(agents): OpenAI + Gemini providers (key schemas + test-connection + adapters + createProvider factory) (e7fe82d4)
- feat(agents): add Anthropic to userApiKeys (schema+test) + extract apiKeyCrypto util + resolveProviderKey (user->org-shared) (edcd92fc)
- ci(agents): pass AGENT_SECRET_KEY to production deploy too (synced from shared GHA secret) (b4286210)
- ci(agents): wire AGENT_SECRET_KEY into dev backend secrets (GHA → hyperstudy-secrets) (5c8a62f5)
- Merge remote-tracking branch 'origin/dev' into feat/v2-agent-participants-phase0 (ff5167f8)
- fix(agents): agent closes its own socket on experiment completion (no leaked connection) (40d11860)
- feat(agents): per-state agent guidance UI (V2, agent roles) — sets state.agentGuidance[role] (cd7dd508)
- fix(agents): review fixes — floor requiredParticipants at 1, gate role mode to V2, deep-merge roleOverrides, test the recompute helper (81f1e134)
- feat(agents): seed-agent-credential CLI to set an org provider key (dev-validation enabler) (0cf23ab6)
- feat(agents): V2-only Agents designer tab (provider/model/system prompt/per-role overrides) (62e5629c)
- feat(agents): designer role mode toggle + agentConfig default + requiredParticipants recompute (V2-only) (30c73db5)
- feat(agents): exclude agent-mode roles from human role assignment in matching (fb166137)
- feat(agents): wire agent spawner into createV2Integration (gated on AGENT_SECRET_KEY) (205f0cc3)
- fix(agents): holistic-review hardening — serialize decides, gate on current state (fd98065c)
- feat(agents): spawn orchestration — one agent per agent-mode role count (8bbbe85e)
- test(agents): agentRunner decide test enters running phase before acting (5ceae1bf)
- feat(agents): production spawn path - mint session, resolve key, run agent in-process (2f2d8fe3)
- feat(agents): in-process ws socket pair for same-pod agent connection (ce69c03d)
- fix(agents): only run the LLM decision loop while the experiment is running (d833f07e)
- docs: Phase 1c plan — production spawn path (07a9a6f3)
- test(agents): end-to-end agent drives the real V2 engine to completion (5e9faff8)
- feat(agents): agent runner composition root (transport+decide+participant) (3c6871c6)
- feat(agents): WS transport adapter over the V2 protocol envelope (c4f1a0d3)
- docs: Phase 1b plan — live transport + runner + e2e (249b1117)
- feat(agents): LLM decision loop composing prompt, tools, and provider (644bd35b)
- feat(agents): Anthropic provider adapter (default claude-opus-4-8) (3456b62d)
- feat(agents): layered prompt builder from perception snapshot (62a70b4a)
- feat(agents): tool/action schema mapping LLM tool-use to protocol actions (b19263fc)
- docs: Phase 1a plan — LLM decision loop for AI agent participants (6def3a25)
- feat(v2-spectate): render real focus components read-only + live participant input (b6de0602)
- feat(v2-preview): auto-reconnect on dropped protocol socket (bfaa8a3a)
- docs: carry-forward Phase 1 notes from Phase 0 final review (adb38126)
- feat(agents): mint agent participant session identities (850a09c1)
- feat(agents): encrypted per-org provider credential store (12ce977c)
- feat(agents): transport-agnostic agent participant harness (41f97c8a)
- feat(agents): tier-1 perception model for AI-agent participants (92d8c293)
- docs: Phase 0 implementation plan for AI agent participants (1f8bb2f1)
- docs: design spec for AI agent participants in the V2 runner (cd10b19c)

---

## v0.6.80

Released: 2026-06-13

## What's Changed

## Changes since last production release

- fix(tab-state): review fixes — route-scoped keys, logout clear, designer restore guards (384f6019)
- feat(dashboard): restore per-tab state for 5 minutes when switching tabs (49161754)
- feat(frontend): tab-state snapshot store with TTL eviction (d748ad20)
- docs: design spec for dashboard tab state restore (5-min TTL) (8276f065)
- chore(deps): bump livekit-client to 2.19.2 and livekit-server-sdk to 2.15.4 (a7a936b9)
- fix(permissions): address review findings on effective-permissions batch path (dc654bd2)
- refactor(frontend): summary view for experiment list consumers; remove permission N+1 module (d7f5e4a8)
- perf(deployments-table): batch effective permissions instead of draining all experiments (ba0442f9)
- perf(experiments-table): drop per-experiment permission N+1, use summary view (aaef8f18)
- feat(frontend): batch effective-permissions fetch util + view=summary store param (ffe50d8f)
- feat(permissions): badge logic reads server-resolved effective data permissions (1d323e57)
- feat(permissions): batch effective data permissions endpoint for table badges (126b5bdd)
- feat(experiments): embed effective data permissions and support view=summary in v3 list endpoints (a4cfd758)
- feat(experiments): summary projection + effective data permission enrichment helpers (f7fbaf65)
- feat(permissions): batch-resolve effective data permissions per user (112a089a)
- docs: implementation plan for table loading perf (d27a86ec)
- docs: design spec for table loading perf (server-resolved data permissions + summary projection) (a84cb09f)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
