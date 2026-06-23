---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.83

Released: 2026-06-23

## What's Changed

## Changes since last production release

- fix(infra): set duplex:half for undici streaming bodies (completes upload fix) (853ba70c5)
- fix(infra): route firebase-admin/gaxios through undici (fixes Google POST 'Premature close') (f43a0549a)
- fix(infra): force IPv4-first DNS resolution (pods have no IPv6 egress) (f8f1f19b3)
- fix(security): approval gate fails CLOSED (addresses review finding) (19ec88e0e)
- fix(security): drop checkRevoked from experimenter auth paths (caused V3/WS 500s) (ce606fea2)
- fix(security): gate unapproved experimenters on every auth path (020f58d7b)
- fix(auth): clear registration rate-limit error + lab-friendlier limit (45120ba4a)
- fix(recordings): leaner download stream + clear error mapping (a7931ba4b)
- feat(recordings): authenticated streaming download instead of signed URLs (ea48f0c4c)
- fix(v2-components): record final component.end at completion (c0fd17b71)
- fix(data): chat tab participant query drops redundant Firestore orderBy (e362512ce)
- test(v2): update stale tests for new V2 recording paths (8b1c6889f)
- fix(v2-components): generate focusComponent id in ensureSession (db92e524d)
- fix(v2-components): read stateIndex inside untrack; test end-event priority/timestamp (1130472c9)
- fix(v2-components): record component.start/end per state in V2 runner (335f78c40)
- fix(v2-chat): reset chat mode unconditionally in disconnect() (eb1b927bf)
- fix(v2-chat): persist chat.message via dataServiceV4 in V2 runner (66a48412a)
- fix(v2-diagnostics): collect + POST client diagnostics from V2 runner (4dea13e3b)
- feat(v4): add POST /session/:token/diagnostics to persist client diagnostics (28f72d6e4)
- fix(v2-sync): record viewer sync.metrics events via dataServiceV4 (4e746e144)
- fix(sync): make experimentId reactive in ShowVideoComponent + log dropped sync metrics (79e72bd3c)
- fix(data): match sessionId-keyed sync metrics in counts + sync tab (mirror legacy-chat fix) (71325380c)
- fix(experiments): ExperimentManager reads unified /api/v3/experiments (drop deprecated /v3/shared) (12aac55a7)
- perf(deployments): project list queries to consumer keep-list (Phase 2 T5) (3a4d247b1)
- docs(data): track deferred data-management bug-hunt fixes + next actions (186fb649d)
- fix(ratings): reset auto-select latch on participant switch + select either populated type (a2f48475f)
- fix(recordings): clamp pagination total so it can't be less than returned rows (e5417bd7c)
- revert(experiments): badges resolve with data-type again (permMap reuse changed semantics) + keep doc fixes (7cc4a556a)
- perf(experiments): reuse access-filter permMap for badges (one resolver call) + doc fixes (494f8e7c0)
- docs(experiments): deprecate internal /v3 + /v3/shared (superseded by unified read path) (a0de0ac5b)
- refactor(data): experiments table reads unified /api/v3/experiments?view=summary (one call, cross-org included) (3f9c33fd5)
- feat(api-v3): support view=summary on experiments list (dashboard-ready shape) (e55b9ef96)
- perf(experiments): summary .select() projection in listExperimentsForUser (T4 partial; full win needs T8 statesCount) (465d6fa5f)
- fix(api-v3): preserve single-experiment response shape (no per-user badges) + restore field-key anchor (565e95940)
- feat(api-v3): auth-conditional per-user permission badges on experiments list (481402a9f)
- feat(experiments): fold cross-org shares into listExperimentsForUser (public endpoint) (c448c221b)
- refactor(experiments): extract public list query into listExperimentsForUser service (edaa4f224)
- docs: revise consolidation plan — D3 secure resolver, D4 converge on public/offset (9ace9d915)
- fix(experiments): restore /admin/all room-count enrich + align withOrgName default (5a03da42e)
- refactor(experiments): extract shared enrichExperiments (no behavior change) (ddd9dd3f9)
- test(experiments): characterization net for the 3 list endpoints before consolidation (bda819301)
- docs: lock decisions + bite-sized TDD task breakdown for experiments read consolidation (d6e737bcd)
- docs: experiments read-path consolidation design (one service, two facades) (b65dc13db)
- docs(perf): correct Phase 2 plan — re-target T4, add statesCount/T8 dependency (5246c3b3c)
- perf(rooms): project list query to mapped fields only (Phase 2 T6) (fe524b2fb)
- fix(data): three data-management refactor bugs found in review pass (6ae8072bc)
- fix(components): render missing component response as NaN (not N/A) (be3c813e3)
- fix(recordings): sign URLs against the file's actual bucket + populate fileSize (7f5ffb086)
- fix(components): include response-only components (no start/end events) instead of dropping them (b559f8f3f)
- fix(rooms): never record EG_ egress identities as participants (keeps count aggregate correct) (b1be86e38)
- chore: untrack force-committed .superpowers scratch reports (76cc5b3a4)
- perf(rooms): count participants via aggregate instead of reading every subcollection doc (035e242ed)
- docs(perf): add perf-t1 batch permission report (7eace2b0f)
- perf(experiments): batch permission resolution to kill serial N+1 in list endpoint (e76b4b6c7)
- perf(deployments): count active sessions via aggregate instead of scanning rooms (34b50698b)
- fix(recordings): mint fresh signed URL from storagePath instead of reusing stale fileUrl (31185f894)
- fix(chat): degrade gracefully when legacy sessionId index isn't built yet (11077daf7)
- fix(chat): match legacy sessionId-keyed chat docs at room/participant scope + counts (c7a3db127)
- fix(recordings): resolve URL from subcollection + skip full-bucket GCS scan on common path (b3e056d3b)
- fix(data): unwrap array-wrapped v3 envelope in getParticipantDataCounts (e28fcee80)
- fix(data): guard ratings badge against NaN + test real _hydratePersistent path (e325c00e4)
- fix(cache): preserve expiry across sessionStorage hydration + never persist empty results (523b7d61e)
- feat(data): show participant data counts on tabs before they're opened (ea3404ec0)
- fix(counts): participant-filter room recordings subcollection count (f143e8a08)
- fix(storage): pass autoPaginate: true to bucket.getFiles for complete listing (4a7fc2cef)
- fix(recordings): primary-source rooms/{roomId}/recordings subcollection for room and participant scopes (a9379f1ee)
- feat(data): wire participant data counts into tab visibility (0556f57fe)
- test(data): per-query scope assertions for CountsProcessor token/participant paths (ce810cf5f)
- feat(data): add GET /api/v3/data/counts/participant/:participantId endpoint (8e58e5719)
- fix(data): DataViewer cancels each lazy-tab query exactly once (e99cb8303)
- fix(experiments): evict SWR cache on org switch (clearCache) + export key constant (54b7a7029)
- fix(data): subscriber-counted cancellation + catch background revalidation rejections (5451ec554)
- perf(experiments): serve experiments table from SWR cache for instant dashboard revisits (29f07afb1)
- fix(data): lazy view uses SWR keys + cancellation; reuse events hover-prefetch; de-flake test (445b3d529)
- feat(dataManagement): lazy per-tab data loading — events-only on participant select (85cbbf8a2)
- test(dataManagement): add lazyTabs test RED->GREEN + update DataViewer tests (c353761b3)
- fix(data): align Rooms→Participants prefetch key + stop stats-bar flicker on revalidation (b33118c8b)
- fix(data): carry-forward fixes in DeploymentsTable (loading prop +  guard) (6ba9fffd3)
- refactor(data): migrate ExperimentParticipantsTable to createQuery SWR pattern (1dd771b18)
- refactor(data): migrate ParticipantsTable to createQuery SWR pattern (1436ce908)
- refactor(data): migrate RoomsTable to createQuery SWR pattern (65feb17bc)
- feat(virtual-table): add onRowHover prop with debounced mouseenter (c3e7e274c)
- feat(ui): skeleton rows in VirtualTable while loading (53c4bc587)
- fix(data): createQuery — cancel each key exactly once on change/teardown (0d4c6afaa)
- feat(data): createQuery reactive SWR helper for Svelte 5 (d9281137a)
- fix(data): harden SWR core — entry-scoped inflight cleanup, prefetch guard, hydrate catch (4fb5bd5a3)
- feat(data): SWR query core in dataServiceV3 (dedup, cancel, subscribe, persist) (a5993b05f)
- feat(cache): sessionStorage persistence tier with size cap + LRU (b4ff7819d)
- feat(cache): add DataCache.peek for stale-while-revalidate reads (26c859a53)
- docs: implementation plan for frontend instant-feel navigation (89e27425d)
- docs: implementation plan for backend Lever 1 query-latency cuts (c3aae0bd1)
- docs: design spec for instant-feel navigation (Phase 1) (41df9f315)

---

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


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
