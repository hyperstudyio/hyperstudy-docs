---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.21

Released: 2026-10-18

## What's Changed

## Changes since last production release

- fix(designer): typing a font size in TextStyleControl lands on that size (f14ce130f)
- fix(experiment): address review of experimenter message style (f36099790)
- feat(experiment): configurable text style for experimenter messages (35f6b43bb)
- test(emulator): assert the owner receives the cleaned-room questionnaire broadcast (217f59806)
- refactor(frontend): drop the last caller of the deleted room write routes (65758d82c)
- fix(rooms): delete the write handlers of the legacy sessions/rooms router (0c4acf0c8)
- docs: record the unauthenticated V1 /sync namespace as an accepted gap (8b1eac358)
- fix(rooms): grant room data access through experiment permissions only (5f4c620ae)
- fix(ownership): read experiment owner from ownerId only; fix invitation-decline notification (dc887cc3e)
- refactor(redis): one generic lock on stateManager for matching and background jobs (f89720e06)
- perf(questionnaire): route out-of-memory completions through the shared broadcast (5064d8c2c)
- fix(auth): report a verified email even when the follow-up user reload fails (de1ef9a7c)
- fix(tracking): drop the experiment owner cache (5b16e6dd7)
- fix(platform-metrics): share one in-flight lookup per key across caller types (29fc547ac)
- fix(tracking): merge state changes only into sessions the server updates (4874f5b71)
- fix(waiting-room): bound sweep config staleness to 60 seconds (3c0a580e3)
- fix(background-jobs): log once per job when skipped as disabled (652d1c4bc)
- Merge branch 'fix/email-verification-route' into integration/cost-perf-cleanup (33b7064fc)
- docs(claude): fix stale source paths in the architecture section (767e94ba0)
- chore(frontend): remove dead shared-experiments loaders and unused dev deps (226f0b5a1)
- chore(backend): drop the no-op stopSyncMetricsCollection (a567f1e9a)
- fix(cleanup): run the runaway-recording watchdog in production only, one pod per tick (c489375f4)
- Merge branch 'chore/frontend-dead-code' into integration/cost-perf-cleanup (c2ce71ee2)
- Merge branch 'perf/frontend-bundle-split' into integration/cost-perf-cleanup (c542747f4)
- Merge branch 'chore/backend-dead-code-scripts' into integration/cost-perf-cleanup (c5dfbd662)
- Merge branch 'perf/firestore-read-waste' into integration/cost-perf-cleanup (dd5bfe393)
- Merge branch 'perf/deployment-tracker-incremental' into integration/cost-perf-cleanup (97b1e0f59)
- Merge branch 'chore/remove-metrics-service' into integration/cost-perf-cleanup (b2a4a69a1)
- Merge branch 'fix/prometheus-route-label-cardinality' into integration/cost-perf-cleanup (96bf72111)
- chore(admin): remove unused UserManager and UserTable (a88fe6cbf)
- fix(auth): verification and password-reset links land on real pages (9759d9043)
- perf(frontend): keep experimenter-only shared components out of the entry (2d3cad3e2)
- docs(claude-md): drop the removed RTDB URL from production-project evidence (f172f01f0)
- docs(legal): remove LogRocket from the privacy policy (1ac798426)
- fix(jobs): run HLS health check and stale-session expiry on one production pod (abbb9745d)
- perf(waiting-room): sweep reads requiredParticipants from Redis (a813065b9)
- chore(scripts): drop stale org-migration advice and a hard-coded one-off repair (5f0acfcfb)
- perf(v3-ratings): fetch only the page's pause/play events for sparse exports (6dbac11c3)
- chore: remove stray repo-root scripts and manifests (778fc5d76)
- chore(scripts): delete completed one-off migrations and broken scripts (d1827e5b4)
- chore(scripts): delete backend/scripts/archived (beb20c3c5)
- docs: add metrics-service removal runbook and mark stale references (6ecb94db5)
- perf(metrics): share platform metrics across pods and stop dev gauge scans (3adbdcebf)
- chore(deps): drop unused backend dependencies (49ae421a9)
- chore(backend): remove redisExperimentStore and the 410 system-metrics stub (32a54c6e4)
- chore(backend): remove unreferenced modules and dead exports (214464501)
- chore(frontend): remove stray console test scripts and unused story wrapper (c9f7eaff3)
- chore(frontend): remove unused experiment, state and utility exports (205e78c2e)
- chore(infra): remove the orphaned metrics-service (8c90037dc)
- chore(frontend): remove unused service, network and auth exports (d531074bc)
- chore(routes): remove route files and handlers with no callers or traffic (24773a46b)
- perf(frontend): lazy-load experimenter and admin routes (7070ec127)
- fix(security): remove dead debug, test-fixture and legacy auth/session routes (115ed8c36)
- refactor(metrics): drop speculative mount-param remapping from route label (acb805c04)
- perf(tracker): take the experiment owner from room data; single room-progress broadcast (bf0a100b7)
- fix(metrics): bound the HTTP route label to route templates (1116c3339)
- chore(frontend): remove unused media, device and kernel exports (ddc91c733)
- perf(agent-monitor): coalesce room-progress refetches and stand the launch poll down (84d7955fb)
- perf(tracker): merge recruitment:updated in place, coalesce the rest into one refetch (bd753f4d3)
- chore(frontend): remove featureFlags module and unused imageService imports (c944c3f0c)
- chore(frontend): remove dead experimentService room helpers and dashboard summary (e305bb310)
- perf(tracker): emit recruitment:updated once per event and cache owner lookups (1531ce258)
- chore(frontend): drop the unused Firebase Realtime Database client (041afe086)
- chore(frontend): remove LogRocket (458d45fe3)
- chore(frontend): remove unreferenced auth, settings and experiment helpers (84df8b51e)
- chore(frontend): remove unreferenced data-management services and components (55c8cabd8)
- chore(frontend): remove unreferenced admin room/user components and barrels (9189aaba4)

---

## v0.7.20

Released: 2026-10-09

## What's Changed

## Changes since last production release

- fix(designer): address code review of the collaborative-sync change (654afa674)
- test(designer): duplicating a state keeps its global component visibility (f7bc1a0f4)
- fix(designer): shared op applier refuses prototype keys itself (783f6aca8)
- fix(designer): collaborative saves address states by id and stay in sync (7e759b66c)
- fix(designer): global component toggles persist reliably and reach collaborators (098a13be0)

---

## v0.7.19

Released: 2026-10-05

## What's Changed

## Changes since last production release

- fix(experiment): Scanner Pulse Recorder no longer takes layout space (1ba6ae6c7)
- fix(trigger): synchronized trigger releases only when every trigger has arrived (7d00d5da1)

---


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
