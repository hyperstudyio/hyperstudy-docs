---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.6.75

Released: 2026-06-10

## What's Changed

## Changes since last production release

- test(media): condition-based wait for lazy hls.js load in claim-path test (a495ea87)
- fix(media): fail loud on unloaded hls.js in sync helpers; log V1 source-init rejections (70521a2b)
- fix(v2): media-attach failure must not kill ShowVideoComponentV2 playback subscriptions (5df51501)
- fix(media): share one lazy hls.js singleton between hlsPlayer and mediaPreloader (2566833f)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
