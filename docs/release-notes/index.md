---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.10

Released: 2026-09-13

## What's Changed

## Changes since last production release

- fix(devices): query the Bridge live for TTL in the pre-flight instead of trusting the status cache (a026f7885)
- fix(ratings): record and export un-submitted RapidRate/VAS responses with null for untouched values (df5d10b38)
- fix(pupil-setup): manual address placeholder no longer suggests neon.local (8f863fd88)

---

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


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
