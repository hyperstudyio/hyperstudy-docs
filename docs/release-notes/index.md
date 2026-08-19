---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.3

Released: 2026-08-19

## What's Changed

## Changes since last production release

- fix(storybook): export sparseRatingPauseActive from the experimentStore mock (80b33816f)
- ci(deploy): widen pod-router rollout budget; make Sentry upload failures legible (5280e9eab)
- fix(experiment): restore ContinuousRating under V2, close videochat capture leaks (679c9c08e)
- fix(experiment): correct V2 video resume position, host-fatal deadlock, and videochat audio leak (d24ed5fc3)
- fix(v1): anchor the manual advance in V1 too; surface control rejections cross-pod (6ae9206b0)
- fix(v2): anchor observer advance-state to the state it was aimed at; log observer control actions (142e77f17)
- fix(logging): redact experimenter preview session tokens too (a8d800091)
- fix(logging): redact session and invitation tokens from request logs (ce64434fb)
- docs: correct stale data-services section and record 2026-08-18 security lessons (fc7553345)
- fix(invitations): list invitable org roles explicitly to avoid import-time coupling (99a691329)
- Merge branch 'fix/register-selfheal-overwrite' into security-2026-08-18-integration (229ebc08f)
- fix(auth): require proof of control before /register touches an existing account (00ef95ebc)
- Merge branch 'fix/verify-role-self-promotion' into security-2026-08-18-integration (1a9161f33)
- Merge branch 'fix/profile-update-privilege-escalation' into security-2026-08-18-integration (312b605fd)
- fix(security): close group-membership escalation and guard the deployment designer (404529418)
- fix(designer): whitelist writable field paths on the designer socket (930d2eb0d)
- fix(auth): whitelist fields on profile updates — self-service privilege escalation (1ad8294df)
- Merge branch 'fix/legacy-experiment-put-whitelist' into security-2026-08-18-integration (b75120097)
- Merge branch 'ci/firestore-rules-automation' into security-2026-08-18-integration (19877184f)
- Merge branch 'fix/firestore-rules-hardening' into security-2026-08-18-integration (135cfca9d)
- fix(invitations): return 400 for invalid team invitation roles (aaf38997f)
- security(firestore): fix review findings - deploy target, CI break, rooms guard, read bypasses (10c8ebca6)
- ci(firestore): pin the production project and refuse test-project deploys (efb95f12c)
- fix(api): restore runtime-read experiment fields, share the create whitelist, correct the audit trail (676ae6a18)
- ci(firestore): automate rules testing, deployment and drift detection (eae872346)
- Merge branch 'perf/dashboard-boot-waterfall' into perf-2026-08-18-integration (79000d6f9)
- fix(auth): close three role self-promotion paths (da57f5521)
- fix(dashboard): address review findings on the boot-waterfall branch (a1e141c3a)
- security(firestore): deny client-SDK writes by default in security rules (661137d27)
- fix(experimenter-groups): bound the profile-group recovery fan-out (7cd7cae99)
- security(rules): make experiment documents backend-only for client SDK writes (e5961aec2)
- perf(v3/experiments): sub-stage timings and remove redundant work from the list path (dc5db1dc6)
- perf(experimenter): stop force-refreshing the ID token and parallelize dashboard boot fetches (36eaea73f)
- perf(experimenter): start the experiments fetch at route mount, drop a redundant token refresh (0b169834d)
- perf(dashboard): add uid-bound experiments prefetch to the experiment store (b355e89ea)
- fix(cache): raise persistent-cache per-entry cap and log size drops (108bb7313)
- fix(api): whitelist fields on legacy experiment PUT and reject Firestore field paths (e16291bc0)
- Merge branch 'perf/experiments-table-load' into ux-perf-2026-08-17-integration (173f3c2c3)
- fix(experiments): close review findings on the list load path (6038bd6b5)
- fix(bridge): correct latch, mid-session signal and retry window from review (13d5e856d)
- perf(experiments): cut round trips on the dashboard experiment list (90410e339)
- fix(bridge): make missing-Bridge connection failures quiet and bounded (9c668b7df)
- fix(dashboard): show a loading state instead of the empty state while experiments load (fd8eb37d9)
- Merge branch 'fix/preview-watchdog-and-state-skip' into triage-smallbugs-integration (80cf36d55)
- fix(v2-preview): bound every boot phase separately; attribute completions to the mount that produced them (773b5923d)
- Merge branch 'fix/spectate-signing-and-audio-download' into triage-smallbugs-integration (514ef0ef8)
- fix(media): restrict signing failures to access_denied; fix spectate attach race and recording downloads (9af74b941)
- fix(v2): keep abandon per-participant once the experiment is over (339ff9264)
- fix(prolific): address code review on the completion-integrity batch (bb15607e5)
- fix(prolific): completion integrity for V2 runs that end abnormally (f4ced1534)
- fix(admin): restore fileType parameter to handleDownloadRecording (3da46ed05)
- fix(media): surface signing failures instead of raw-URL fallback; re-sign HLS URLs; audio download path (6f31dab92)
- Merge branch 'fix/video-permission-resourcetype' into triage-2026-08-17-integration (6f45f5d89)
- Merge branch 'fix/audio-recordings-subcollection' into triage-2026-08-17-integration (321f102c7)
- fix(auth): harden profile self-heal against races, demotion lockout, and fail-open sibling routes (920cf75d5)
- fix(data): harden audio recording-doc write and backfill per review (e0a175af8)
- fix(media): address review findings on video/image permission changes (715733890)
- fix(media): pass explicit _resourceType at video/image permission checks (f5b0a10b5)
- fix(data): register uploaded audio in rooms/{roomId}/recordings so the v3 API lists it (9ad6bf9da)
- fix(auth): stop identity-consistency reload from orphaning registrations; self-heal orphaned accounts (3d2167a0b)

---

## v0.7.2

Released: 2026-07-29

## What's Changed

## Changes since last production release

- fix(data): unify state-flatten semantics across V1 runtime and V3 EventProcessor (04869a4dd)
- fix(v2): execute states in designer-authored order, not creation order (72184fa9b)

---

## v0.7.1

Released: 2026-07-28

## What's Changed

## Changes since last production release

- test(emulator): update invitation tests for kept-token resend and idempotent re-accept (66f71fa52)
- fix(devices): Kernel marker integrity — completion-navigation race and reconnect duplicates (4481c8e59)
- fix(auth): invitation token stability, delivery/accept error surfacing, ToS gate and accept flow (46c4a99c8)
- test(frontend): complete dataServiceV4 mocks in runner-mounting suites (427fff808)
- fix(data): component instance pairing, completion lifecycle dedup, experiment.end anchors, participant-export anchor merge (6da5e902f)
- fix(timing): review findings — timestamp authority, clock validation, anchor spoof/restart guards (57c6facae)
- fix(timing): server-timeline event clocks on both runners, onset-anchor hardening, type-unified timestamps (47a6b74f6)

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
