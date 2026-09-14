---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.11

Released: 2026-09-14

## What's Changed

## Changes since last production release

- fix(experiment): address review findings on the focus-component scroll work (034828fc8)
- fix(experiment): one scroll region and pinned chrome for every focus component (16903454a)
- ci(docs): escape angle brackets in synced release notes so MDX does not truncate lines (870a066eb)

---

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


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
