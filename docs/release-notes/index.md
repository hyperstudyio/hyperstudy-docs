---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.66

Released: 2026-05-01

## What's Changed

## Changes since last production release

- fix(session-recorder): strip undefined fields before Firestore writes (9204f1b5)

---

## v0.6.65

Released: 2026-05-01

## What's Changed

## Changes since last production release

- fix(private-enrollment): don't show 'failed to cancel' when cancel succeeded (bc70df60)
- chore(backfill-recording-metadata): only backfill rooms whose file still exists (4c3cef44)
- chore(backfill-recording-metadata): add MP4 box duration as precision tier (33994e55)
- chore(scripts): backfill recording metadata for damaged rooms (96c03788)
- fix(livekit-webhooks): exempt egress events from pod-ownership skip (49602c6a)
- fix(sparse-rating): clear pause flag in V2 bridge to unblock /sync resume (97f9d9a8)
- fix(completion-route): visible text on completion + error screens (e934ed84)
- fix(state-manager): skip 3-segment legacy keys in waiting:* scan (3ed533ce)
- revert(traefik): drop DO LB PROXY protocol + hostname annotations (11b4326c)
- fix(rate-limit): preserve real client IP end-to-end + Redis-backed limiters (627ac899)
- test(participant-flow): add tests for /questionnaire and /completion routes (f7679631)
- fix(participant-flow): address code-review findings on completion route (59213426)
- fix(participant-flow): unify sync engine + promote questionnaire/completion to routes (fd347af9)
- fix(component-config): expose textStyle controls in nested + RapidRate editors (e2cb7145)

---

## v0.6.64

Released: 2026-04-27

## What's Changed

## Changes since last production release

- test(deployment-metadata-editor): mock loadAllOrgExperiments to track CI (71edd2f9)
- fix(v4-discovery): per-list pagination metadata so public/prolific truncation is observable (8e35130b)
- fix(participation-store): drain V4 discovery + history cursors (bb5e0e5c)
- fix(data-service-v3): drain all participant pages by default (ea55c2a3)
- fix(experiment-store): add loadAllOrgExperiments / loadAllSharedExperiments and use them everywhere (48362dfe)
- fix(experiments-table): paginate through all org+shared experiments instead of dropping the tail (f3728475)
- fix(experiment-v2): silent no-op for component-complete on non-SYNCHRONIZED + filter high-freq logs (fd7a3431)
- fix(experiment-v2): flush data + setCompleted + countdown on completion (dffdbd14)
- test(experiment-v2): replace removed .v2-state debug hook with data-boot-state (c4027985)
- fix(experiment-v2): video URL substitution + header parity + completion UI (927d7c16)
- fix(experiment-v2): use server-authoritative participantId for engine actions (97314928)
- fix(experiment-v2): attach WS message listener before auth await (f4de280c)
- chore(experiment-v2): add diagnostic logging to WS message path (862c6282)
- fix(experiment-v2): serialize WS message handling per socket (00680cbe)
- fix(redis): iterate scanIterator batches and restore UPPERCASE options (6cb6c82c)
- fix(ingress): add Traefik route for /ws/experiment/v2 WebSocket (858a8d5c)
- fix(experiment-v2): WS URL ladder, auth token threading, Sentry observability (41b41521)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
