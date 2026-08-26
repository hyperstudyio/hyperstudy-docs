---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.7

Released: 2026-08-26

## What's Changed

## Changes since last production release

- test(v2): wait on the recording mocks instead of sleeping past them (c4c6bd398)
- fix(monitor): remove the 10-minute "stuck" alert that fired on healthy participants (15c2ffeff)
- fix(timing): put questionnaire events on the server timeline (70a04a4d2)
- fix(completion): mint a Prolific code when force-completing a questionnaire (ba2e57c89)
- chore: gitignore playwright run artifacts (adb358a90)
- test(e2e): delete seven Playwright specs that had never passed (9a4f131e7)
- test: delete 14 rotted test files that provided no coverage (f2cdc8e97)
- test(ci): run the integration suite that ran in no CI job at all (9dd31f765)
- perf(ci): shard the backend suite across three runners per Node version (04a3e869c)
- perf(ci): shard the frontend suite across four runners (d3d8ab7d9)

---

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


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
