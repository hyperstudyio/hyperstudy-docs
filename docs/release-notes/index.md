---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.6.78

Released: 2026-06-11

## What's Changed

## Changes since last production release

- fix(api): shape-check the APIError duck-type before exposing error details (00c203e8)
- feat(preview): Preview action in experiments table + designer view-only button (109de95d)
- feat(preview): open preview access to anyone with experiment access (b027b1f2)
- fix(preview): preview panes never navigate to questionnaire/completion — pin completion routing (14276323)
- fix(preview): registry throws when redis unavailable; skip room lookup in config for preview (ad25d7b8)
- docs(monitor): correct setState/advanceState dispatch-path docstrings (e08f551a)
- fix(preview): idle sweep evicts engine sessions for expired preview rooms; gate legacy end call (8b79d2a0)
- docs(preview): tighten openPreview persistence comment (dc2de017)
- test(preview): e2e two-pane preview flow (89444143)
- fix(preview): accept preview_ room ids in experiment socket connect (0ce26acc)
- feat(preview): designer Preview button for v2 experiments (4a5d350b)
- fix(preview): delete room on SPA unmount and launch failure; restart loading state; lock select when complete (9641a7e9)
- feat(preview): multi-pane preview shell route with flow-control bar (e2143813)
- fix(monitor): drop dead error branch — rejections ride onError; clear stale errors on control sends (b39ba61e)
- feat(monitor): setState/advanceState observer commands (5eda7d88)
- feat(preview): explicit previewToken entry path in the experiment route (e4c27406)
- fix(preview): don't clobber shared sessionStorage from preview contexts; validate adopted tokens (781e331c)
- feat(preview): previewService + first-class in-memory preview tokens in participantServiceV4 (4c16723a)
- fix(preview): fail launch on pod-assignment failure, cap panes, reject API-key auth (b6d9b41e)
- feat(preview): v4 preview launch/teardown endpoints (3df23466)
- feat(preview): v4 session endpoints accept-and-discard for preview tokens (00f4ec8c)
- feat(preview): sessionAuth recognizes pvw_ preview tokens via the Redis registry (058d9a26)
- fix(preview): gate abandon path, bind preview tokens to room+role, pin fail-closed auth (17cf7523)
- feat(preview): v2 WS auth + observer authz + side-effect gates for preview rooms (70730620)
- feat(monitor): surface engine rejections of observer flow control; pin cross-room scoping (af466da6)
- feat(monitor): observer set-state/advance-state flow control (closes deferred advance-state) (d86831de)
- fix(runtime): also cancel state timers on experiment.completed; pin same-state re-entry (88208c46)
- fix(runtime): cancel stale state timers when a transition leaves a TIMED state (91ade0d7)
- fix(engine): reset SYNCHRONIZED barrier on every state entry — stale completions across flow-control jumps (3d59329f)
- feat(engine): set-state and advance-state flow-control events (6ffdcc70)
- fix(preview): registry review fixes — TTL assertions, parse guard, cap comment (8764cc19)
- feat(preview): Redis-backed preview session registry (759cd001)
- docs: V2 experiment preview implementation plan (af4b2bee)
- docs: V2 experiment preview design spec (089189e2)
- chore(monitoring): Firestore read-rate runaway alert (policy-as-code) (542b978b)

---

## v0.6.77

Released: 2026-06-11

## What's Changed

## Changes since last production release

- fix(rejoin): register socket in socketMap before any await — dropped client-ready froze dyad (f198af46)
- fix(metrics): harden platform-metrics cache per code review (97c334a9)
- test(metrics): clear platform-metrics cache between emulator test cases (bcafeea8)
- perf(metrics): TTL-cache platform metrics — stop ~40M Firestore reads/day from gauge refresh (2f7ee253)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
