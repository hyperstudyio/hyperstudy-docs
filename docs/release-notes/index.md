---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.9

Released: 2026-09-04

## What's Changed

## Changes since last production release

- fix(devices): check identity on paused rejoins, persist merged identity, tighten phone-name matching (71b4f931a)
- fix(devices): make the V1 device-conflict path work; harden re-checks, persistence and identity refresh (dd695b177)
- feat(devices): server-side device conflict detection at client-ready; persist device identity (c0329e1a4)
- feat(devices): station profile pins the Neon phone by hardware id; phone picker in setup (12da883d4)
- feat(devices): pre-flight device check, visible marker failures, deterministic Neon selection (8ff53aa2a)

---

## v0.7.8

Released: 2026-08-29

## What's Changed

## Changes since last production release

- refactor(logging): put backend diagnostics behind log levels; narrate the drain (b073d2676)
- docs: record the 2026-08-28 Prolific batch analysis and the pod drain reference (3c8cc4b60)
- fix(drain): stop routing rooms to a draining pod; harden the deploy guards (33b173dd8)
- ci(deploy): render the backend manifest once instead of mutating it three times (8614e771d)
- fix(prolific): correct recruitment target, drain pods, quiet logs, 120s default (9f7b0523c)
- test(experiments): stop the SortableTable mock leaking a polling interval (966fa0a37)
- feat(questionnaire): make the post-experiment questionnaire optionally required (1c0091c55)
- docs(questionnaire): correct a comment describing a watchdog removed in June (188f18fde)
- fix(completion): mint Prolific codes on expiry; report room outcomes honestly (2fad59226)

---

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


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
