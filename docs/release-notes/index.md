---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.17

Released: 2026-09-24

## What's Changed

## Changes since last production release

- fix(preview): show only enabled flow steps; align the header controls (4ca317789)
- fix(sparse-rating): drop the black backing behind the modal countdown (1cde48c69)

---

## v0.7.16

Released: 2026-09-24

## What's Changed

## Changes since last production release

- fix(duplicate): unbind unusable agent personas with a warning instead of refusing (e08b77469)
- fix: agent-role checks on duplicate/import, full design on import, runtime validation, editor count (f877eb57e)
- fix(k8s): drop ClientIP affinity on backend-service; run CronJobs in production only (7121ece71)
- fix(deploy): hold production rollouts until no participant is in the flow (9f913b38f)
- fix(designer): keep the socket open until closing flushes are acknowledged (d467a7cce)
- fix(designer): show the new role's config after a role switch; validate runtime on create (9f8eb235d)
- fix(designer): keep the runtime chosen at creation; save role edits to their own role (a7df1cb4f)
- fix(designer): keep questionnaire prop sync alive after a debounced save (fa1a5e2bd)
- fix(designer): flush the edit actually typed when an editor is torn down (442c9046c)
- fix(designer): queued edits must not hang, reorder, or clobber others (d51641366)
- fix(designer): stop silently dropping edits; show real save status (cce8a7cc8)

---

## v0.7.15

Released: 2026-09-23

## What's Changed

## Changes since last production release

- fix(preview): rejoin remounted panes; unmount off-step screens; no-deadline pause UI (b055c40a7)
- feat(preview): open on the first flow step; pause the run off the Run step (c758e0504)

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
