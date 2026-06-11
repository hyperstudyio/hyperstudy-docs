---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.6.76

Released: 2026-06-10

## What's Changed

## Changes since last production release

- fix(sessions): endExperiment orphan sweep — end sessions of participants pruned from the room map (e0994238)
- feat(cleanup): runaway-recording watchdog + stale live-session expiry (fe5acb69)
- fix(prolific): route dead-room sessions to a completion code, not back into the experiment (903a5d48)
- fix(participant): restore terminal-status guards on dashboard auto-reconnect (1a922612)
- chore(recording): backfill script for StopEgress-misclassified recordings (22c504df)
- fix(recording): EGRESS_COMPLETE egresses are never aborts — restore duration/offset enrichment (d3dccc96)
- fix(e2e): remote-mode V1 coverage requires its own experiment id (5a1dc7d7)
- feat(e2e): V1-runner parity scenario + viewer mid-video refresh rejoin (173f0ca8)
- fix(e2e): review follow-ups — stale 8085 ports, codec-aware project skip (fa114f3b)
- feat(e2e): two-window multi-participant V2 video-sync test (real browser) (62eed381)
- fix(emulator): align Firestore emulator port with firebase.json (8085) (dd316a63)
- feat(media): forceHlsJs config option to pin the HLS.js pipeline (1e8b24ee)
- fix(auth): IPv6-safe rate-limit key for resend-verification limiter (1b5e5a43)
- fix(cors): allow PATCH — required by API v4 participant session routes (f4a7715d)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
