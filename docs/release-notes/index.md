---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.6.74

Released: 2026-06-10

## What's Changed

## Changes since last production release

- Merge branch 'worktree-agent-a8cbf70bc55427d4e' into merge/audit-deferrals (0faf9c44)
- Merge branch 'chore/dep-bumps-surgical' into merge/audit-deferrals (66e6e80d)
- Merge branch 'fix/monitor-authz-checkItemPermission' into merge/audit-deferrals (120b752d)
- feat(monitoring): redis-exporter + Infra & Reliability dashboard + RedisDown alert (1da35fc5)
- feat(observability): add prolific completion counter and active-sessions gauge (bfb6b224)
- chore(deps): bump ws and socket.io-parser to clear GHSA-677m + GHSA-58qx (3f1268c2)
- fix(security): authorize V2 monitor access via checkItemPermission (deployment/experiment permissions) (ae5074ad)
- feat(monitoring): app alert rules (video errors, p95 latency, 429s, recording failures, scrape-down) (3991dfca)
- fix(security): constant-time comparison for Prolific v2 gateway study token (21811569)
- feat(perf): lazy-load hls.js via dynamic import at the use sites (1675dbac)
- feat(perf): split hls.js and livekit-client into separate chunks (6952076f)
- feat(perf): bound participant-scope recording query to experiment when experimentId is known (4f6ed0ae)
- feat(perf): sync.metrics buffering hysteresis + conservative batch bump (b680cd38)
- feat(perf): gate cacheModel on state-changing observations only (skip playback.tick) (929683a8)
- fix(monitoring): reload Prometheus on deploy + validate apiserver TLS via server_name (21a2edae)
- fix(monitoring): scrape kubelet+cAdvisor via apiserver proxy; repair stale panels/job (fbd9365f)
- fix(monitoring): Recreate strategy for grafana so RWO PVC rollout doesn't deadlock (caffab8d)
- fix(security): sanitize instructions HTML before render (stored XSS) (e4c85e80)
- fix(security): sanitize consent form HTML before render (stored XSS) (a5792e8c)
- Merge remote-tracking branch 'origin/dev' into chore/followup-batch (37844c73)
- test(v2): sparse-rating modal integration coverage (19f986be)
- test(v2): full-stack two-participant playback protocol coverage (675a1a72)
- feat(monitoring): Loki health alerting (down, dropping logs, WAL disk full) (6f48d6ce)
- fix(components): restore config.initialValue seeding in TextInputComponent (656e825d)
- fix(components): per-key config defaults merge for AudioRecordingComponent (5c7b0f34 pattern) (595f3ada)
- fix(components): per-key config defaults merge for RapidRateComponent (5c7b0f34 pattern) (8deb09fe)
- fix(components): per-key config defaults merge for TextInputComponent (5c7b0f34 pattern) (a3ed98e4)
- fix(components): per-key config defaults merge for ShowImageComponent (5c7b0f34 pattern) (72fa49d0)
- test(billing): use clearAllMocks in afterEach instead of restoreAllMocks (65e9ec85)
- fix(recording): stop V1 room recording by egress id, not room id (376b2ee6)
- feat(v2): cancel/end actions for pre-experiment sessions in the V2 lifecycle panel (52ac4ae2)
- docs(v2): design for pre-experiment session actions in the V2 lifecycle panel (be8c89a0)
- docs(v2): mark clock-sync spec implemented (0fb8e987)
- fix(v2): behavioral tests for viewer latency feed + remove stale measuredLatencyMs reference (5a55411b)
- feat(v2): viewer latency compensation from clock-sync in ShowVideoComponentV2 (47ce4142)
- feat(v2): clock-sync exchange over the V2 protocol with NTP-style offset estimation (82c01492)
- docs(v2): implementation plan for clock-sync latency compensation (7d951a9f)
- docs(v2): design spec for clock-sync viewer latency compensation (2ed91765)
- docs(v2): mark device event forwarder spec implemented (a30703ce)
- feat(v2): wire device event forwarder into the runner boot lifecycle (e7081ce7)
- feat(v2): device event forwarder mapping observations to device lifecycle events (9d6cdaa3)
- docs(v2): implementation plan for device event forwarder (03dc9e4f)
- docs(v2): design spec for device event forwarder (kernel, eye tracking, TTL, EEG) (301de991)
- fix(v2): stop LiveKit egress when a V2 room completes (21eda1c6)
- Merge remote-tracking branch 'origin/dev' into feature/v2-cross-pod-observer-relay (4417e336)
- docs(v2): mark cross-pod observer relay spec as implemented (4ccf509e)
- test(v2): relay-disabled degradation coverage for cross-pod control and spectate (b6c843ec)
- feat(v2): cross-pod spectate — relay-cached snapshot plus relayed live tail (739567fe)
- feat(v2): owning-pod spectate publishing with on-demand ref-counted activation (df574481)
- feat(v2): route experimenter-message via routeControlAction for cross-pod delivery (fcbe7a94)
- feat(v2): route end-experiment to the owning pod via the command channel (ba298a82)
- fix(v2): make subscribeCommands idempotent on re-subscribe (63682d65)
- feat(v2): monitorRelay spectate channel and per-role snapshot cache (1b8020ce)
- feat(v2): monitorRelay command channel for inbound cross-pod control actions (41cef716)
- test(v2): extract fake Redis network into a shared helper (22d4157f)
- docs(v2): verify cross-pod relay spec against code; add snapshot-on-activate refinement (5fb92ddc)
- docs(v2): implementation plan for cross-pod observer relay (69eb6203)
- fix(monitoring): replace expand-env node filter with __host__/HOSTNAME filtering (739e72ed)
- fix(monitoring): restart promtail daemonset on deploy so ConfigMap changes apply (8976084d)
- fix(monitoring): restart Grafana on deploy so provisioned datasources reload (13c40766)
- fix(monitoring): escape  capture ref in promtail path relabel under expand-env (ce96f751)
- fix(sync): forward stateId through exp:initial-state relay handlers (9c59ae51)
- feat(monitoring): add Loki log aggregation with 30-day retention (5a399ee0)
- fix(sync): scope videoState cache by stateId to stop stale cross-video seeding (a9295e03)
- docs(v2): design spec for cross-pod observer relay (control + spectate, Part 2) (024426c0)
- cleanup(reconnect): drop orphaned experimentStatus/roomStatus session fields (246e0282)
- fix(reconnect): recover the genuinely-active session + remove the rejoin banner (2d88d070)
- fix(audio): scope chat-volume persistence to the run so the configured default takes effect (43acddcd)
- fix(ingress): route /ws/experiment/v2 through pod-router for participant pinning (780e0062)
- feat(v2): warn-only guard when a participant session lands on a non-owning pod (e3703abc)
- refactor(pod-router): extract extractRoomId to a testable module + add /ws/experiment/v2 branch (58a0cc26)
- feat(v2): pin participant WS to owning pod via roomId in URL (d303f218)
- feat(v2): support roomId in protocol WS URL builder (e1419a5a)
- docs(v2): implementation plan for participant pod-pinning (37ad85a3)
- docs(v2): design spec for participant pod-pinning (cross-pod Part 1) (82d7a30e)
- fix(v2): server-side sparse-rating timeout, video-pause integrity, and real end-experiment completion (0155cfde)
- fix(multiplechoice): scope without-replacement image pool by mapping+key, not component id (194bb8bd)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
