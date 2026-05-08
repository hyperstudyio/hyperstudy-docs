---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.72

Released: 2026-05-08

## What's Changed

## Changes since last production release

- feat(participant-flow): recover V4 session token after tab close (3dc25a98)
- feat(v4): GET /api/v4/participant/session/active for token recovery (f4544cf9)
- fix(coordination): endExperiment fan-out covers all participants, not just isActive (e47f51bb)
- fix(audio-recording): resolve participantId and roomId on /questionnaire route (8802a800)
- fix(audio-recording): defensive fallback for experiment context — store → window → URL params (2aad852d)
- feat(questionnaire): add Leave Experiment button to questionnaire route (0ea70dea)
- fix(questionnaire): persist draft answers in sessionStorage to survive page refresh (718f9e3b)
- fix(coordination): navigateForSessionPhase is forward-only to prevent stale-read redirect loops (91906af0)
- fix(coordination): endExperiment fan-out tolerates participant.id when participantId missing (736f00de)
- fix(coordination): remove sync-by-delay from leave handler + tighten delta-payload test (a3ee5dcb)
- fix(coordination): include canonical completionTimestamp in session-phase payload + idempotency guard on legacy handler (f086036d)
- fix(coordination): map V4 completionOutcome to Prolific outcome enum in navigation (9ebb9864)
- fix(coordination): preserve default-to-ready semantics + update questionnaire route test (46eb040d)
- refactor(coordination): revert safety-timeout queue drain (no longer needed) (8aaa2692)
- refactor(coordination): replace state-update queue with latest-only slot (fdcbbd78)
- refactor(coordination): experiment.svelte leave handler relies on phase listener; drop V3 setCompleted dual-write (6914a1ca)
- refactor(coordination): ExperimentRunner.handleLeaveExperiment relies on phase listener (0b10850b)
- feat(coordination): session-phase listeners drive navigation + flip isComplete on terminal status (35d81af6)
- refactor(coordination): lobby + waiting-room routes use navigateForSessionPhase (3678cbef)
- refactor(coordination): completion route uses navigateForSessionPhase (9284cc2c)
- refactor(coordination): questionnaire route uses navigateForSessionPhase (f21a2923)
- refactor(coordination): experiment route uses navigateForSessionPhase (9babd4ca)
- feat(coordination): add navigateForSessionPhase helper (98f3086a)
- test(coordination): integration tests for session-phase snapshot+delta with reconnect (963be1e9)
- docs(plan): single-push strategy + reconnect tests + device-end coupling (1c138fcd)
- feat(coordination): passive session-phase listeners (log-only, PR 2 of 4) (1f841f61)
- feat(coordination): endParticipantSession emits session-phase-changed delta (722e598d)
- feat(coordination): emit session-phase snapshot on socket join (e04680de)
- feat(coordination): add emitSessionPhase helper for snapshot+delta (abf8c6ea)
- fix(coordination): cleanupExpiredSessions stamps completionOutcome:timeout to match synchronous expireSession (24321b7a)
- feat(coordination): runtime guard rejecting raw terminal-status writes (c63215ad)
- chore(coordination): audit participantSessions.status writers (b951a3ba)
- fix(coordination): endParticipantSession works for sessions whose room has been cleaned (2e84f713)
- refactor(coordination): handleQuestionnaireComplete uses per-session lifecycle (cb8ad85a)
- refactor(coordination): questionnaireDisconnectTimeout uses per-session lifecycle (fd959bd8)
- refactor(coordination): handleAbandonExperiment uses per-session lifecycle (79515fe6)
- chore(coordination): clean up stale references to completeAllParticipantSessionsForRoom (0b8ca2da)
- refactor(coordination): endExperiment delegates to endParticipantSession per participant (b8d230f7)
- docs(plan): use V4-canonical outcomes (fixes vocabulary mismatch found in Task 1.1 review) (bd0f0f2e)
- fix(coordination): use V4-canonical outcomes in endParticipantSession (e915568e)
- feat(coordination): add endParticipantSession as canonical per-session lifecycle method (e6abe43a)
- docs(plan): implementation plan for participant coordination redesign (9de69b5d)
- docs(spec): participant coordination redesign for V1 legacy runtime (ce5a8b2a)
- fix(abandon): mint Prolific code + route to /completion when leaving an already-complete experiment (d5c4ba8c)
- fix(experiment-runner): drain queued state-updates on safety timeout to unstick stranded participants (675feb88)
- fix(sync): seed videoState on ShowVideo state transitions so viewer's first video plays (50dcb669)

---

## v0.6.71

Released: 2026-05-06

## What's Changed

## Changes since last production release

- fix(experiment-load): cache experiment_stats lookup too (51116237)
- fix(experiment-load): coalesce concurrent cache misses into one fetch (5ac14a93)
- fix(experiment-load): cache permission decisions + owner info (b09b2404)
- chore(load-tests): add periodic burst-test scripts + README (e71e289a)

---

## v0.6.70

Released: 2026-05-06

## What's Changed

## Changes since last production release

- fix(sparse-rating): persist previousRatings across remounts (afbbdbe5)
- chore(sparse-rating): drop tombstone comments + add cleanupRoom call (7c7df527)
- fix(sparse-rating): don't auto-complete on socket disconnect (e62217c5)
- fix(sparse-rating): restore single-subject resume + refresh recovery (d1ebfdc8)
- fix(lb-firewall): restrict Traefik LB inbound 80/443 to Cloudflare CIDRs (7d45fd65)
- fix(experiment-load): per-pod cache + debounced background variable sync (a82eb364)
- fix(ip-trust-chain): CIDR-based trust proxy + Traefik forwardedHeaders.trustedIPs (299b69f1)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
