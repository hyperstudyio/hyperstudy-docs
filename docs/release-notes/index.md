---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.6

Released: 2026-08-25

## What's Changed

## Changes since last production release

- ci: log gh version and prove the mergeStateStatus query before waiting (c9afb0852)
- fix(ci): poll mergeStateStatus only; stop guessing at gh pr checks semantics (e10b59af6)
- fix(ci): let branch protection, not gh's exit code, decide the promotion (5fa593007)
- fix(ci): widen the check-registration window and assert branch protection agrees (a8079d5bb)
- fix(ci): count registered checks instead of trusting gh's exit status (8d1416361)
- fix(ci): make promotion PRs actually run CI, and stop releasing on a failed promote (2ea633f4d)
- fix(rapidrate): draw the previous-None marker like the other reference markers (020f82709)
- ci(prod): let branch protection gate production instead of re-running tests (a2fe9db69)
- ci: make the promotion gate and the test summary fail closed (87a81463f)
- ci(dev): drop the no-op test job that tripled dev deploy time (76af11ddd)
- fix(auth): single-column, form-first registration pages (df5d83a0c)
- test(emulator): realign four tests with the vocabulary and authz changes (b1d0fb29a)
- fix(auth): present registration ToS as a modal dialog (786978dc5)
- fix(authz): converge the last legacy role:admin evaluators onto platformRole (step 4 review) (9e9bc291a)
- docs: Phase 1 step 4 complete (migration was a no-op) (62fc3e7b7)
- refactor(authz): platformRole is the ONE source of platform-admin truth (Phase 1 step 4) (605f14cb3)
- fix(review): step-3 review findings — session swap, recovery errors, abuse cap, safe defaults (a2e63eeb4)
- docs: Phase 1 step 3 complete (1241eccad)
- feat(provisioning): Prolific gateway through the door; frontend goes server-first (Phase 1 step 3b/3c) (9de5da655)
- feat(provisioning): POST /register through the one door — server-side Auth creation (Phase 1 step 3a) (a9c39e867)
- fix(provisioning): harden the one door per review — whitelist, transaction, non-destructive resume, healable claims (a533a8f7c)
- docs: Phase 1 step 2 complete (d7c528dde)
- feat(authz): resolveAuthContext — one evaluator, one read, one cache (Phase 1 step 2) (0be44f110)
- feat(provisioning): the one-door account provisioning service (Phase 1 step 1) (213445452)
- docs: Phase 1 decisions locked + build order (041759440)
- fix(review): stop agent-role guard masking 500s; reuse hasAgentRole; repo hygiene (4036e51da)
- docs: Phase 0 complete (c9c2ab166)
- fix(security,auth): shared-data key guard, register W3 reorder, update-user-status whitelist, dead createAdmin (68c7b28ad)
- docs: track Phase 0 progress on the provisioning branch (ab07c9dea)
- fix(security): enforce agent-role authorization on every experiment write path (84e1e1fd7)
- fix(security): whitelist the experimenter profile PUT body (58f63aa45)

---

## v0.7.5

Released: 2026-08-22

## What's Changed

## Changes since last production release

- fix(tests): unblock the production gate — best-effort emit hardening and three stale pins (0d593fe9d)
- docs: account provisioning and write-surface redesign plan (2a18e1e86)

---

## v0.7.4

Released: 2026-08-22

## What's Changed

## Changes since last production release

- fix(prolific): unstamped sessions no longer match a named deployment; /join stamps deploymentId (35b833fb7)
- fix(prolific,v2,completion): waiting-room mints the real TIMEOUT code; close the deferred completion gaps (55c82106f)
- fix(runners,prolific,rating): harden the review-batch fixes (e61e05fe2)
- fix(runners,completion): settle in-flight LiveKit on V2 boot failure; release V1 retry latch; fail questionnaire-disabled write visibly (f8becd229)
- fix(prolific): close the live-status SUCCESS gap; validate deployment on token lookup (30110acb1)
- docs: record the review fix batch in the completion-vocabulary handoff (f819f6040)
- fix(rating,media): key RapidRate state by the configured label; keep timeout out of the reference history; drop pre-buffer diagnostics after settle (0db5778ae)
- fix(v2,completion): tear down LiveKit on boot failure; unbury the slow-escape button (6c0cf7f2f)
- fix(completion): V2 disconnect parity, V1 lost-reason default, questionnaire-disabled outcome (c30f5438e)
- fix(prolific): guard SUCCESS minting by session phase; never re-mint an issued code (21a444ff2)
- docs: detail the four carried-over review findings in the handoff (35bdf47bf)
- docs: completion vocabulary handoff — state, verification and open items (6e09d9ae1)
- fix(completion): one outcome vocabulary for both runners, backend and Prolific (33fba4a04)
- feat(rapid-rate): drag to reorder dimensions in the designer (9dbec4178)
- test(rapid-rate): pin that clicking None counts as interacting with that dimension (90cf336b5)
- feat(rapid-rate): record that a block timed out, and which dimensions went unanswered (227a85db7)
- fix(rapid-rate): make submit-without-interaction a configuration parameter (984b420d3)
- fix(rapid-rate): stop dropping rating blocks when the participant rates nothing (19fab4111)
- fix(prolific): distinguish TIMEOUT from ABANDONED, and stop V1 recording phantom SUCCESS (c416d5eb7)
- fix(v1): stop the shared completion policy from skipping the questionnaire on success (673add8c3)
- fix(ux): one waiting treatment and plain copy for the transitional states (0eee05374)
- fix(v1): route abnormal ends to /completion; make questionnaire errors visible (6c160c3e6)
- fix(media): put the HLS pre-buffer diagnostics in the message, not just the context object (e11a16214)
- fix(media): describe the unmatched-video case accurately (43447f625)
- fix(media,completion): make HLS pre-buffer failures legible; take the doomed session lookup off the render path (f39fe97e4)
- fix(runners): tear down LiveKit on failed setup; stop dropping the final data flush (1748ce0f5)
- fix(auth): stop fixed timers from reporting a slow session restore as signed out (05b6789a3)
- fix(v1): connect LiveKit before the media preload; stop the HLS pre-buffer loader (d73f527a1)
- fix(ci): let the Firestore rules deploy actually run (0318d5ac9)
- ci(promote): dispatch Deploy Storybook after a release (7111b869b)

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
