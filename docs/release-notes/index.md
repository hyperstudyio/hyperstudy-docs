---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.31

Released: 2026-10-29

## What's Changed

## Changes since last production release

- fix(designer): an edit on an older multiple-choice option survives collaborators' writes (ea7e7f6fe)
- fix(permissions): turning public off no longer flips back on in media panels (5296b3cee)
- fix(security): API keys cannot create API keys; the '*' scope does not skip quotas (c7b96fff4)
- feat(designer): dragging one of several selected states moves them all (d4c41ab48)
- fix(security): only a platform admin's unrestricted API key has admin access (7e9be29fd)
- fix(designer): visibility changes reach everyone with the experiment open (f056ebc19)
- fix(security): an API key's '*' scope no longer grants platform-admin access (006d8346e)
- fix(security): only owners and org admins change who can see an experiment (b575683c9)
- fix(designer): multiple-choice options are edited by id (9befd3cf6)
- fix(designer): instruction and questionnaire editors select pages and questions by id (9797cd302)
- fix(designer): renaming a state opens a focused input (c230ec027)
- chore(designer): remove autosave getters and helpers nothing uses (f6e8bd054)
- fix(designer): questionnaire editors stop resending their stale copies (ff676b61c)
- fix(designer): select states by id; Delete, Duplicate and Group act on what is shown (8b4ba1e39)
- fix(designer): config panel saves only what was edited, on the current config (7397d1ddc)

---

## v0.7.30

Released: 2026-10-28

## What's Changed

## Changes since last production release

- feat(voice): a dropped voice engine pauses the study and reconnects instead of ending it (fee306af2)
- fix(webhooks): record each LiveKit webhook once, and verify signatures everywhere (04a028f81)

---

## v0.7.29

Released: 2026-10-28

## What's Changed

## Changes since last production release

- docs(plan): state randomization and random variables for the V2 runner (557bb7e71)
- test(designer): split the run-order edit-sequence test into seed batches (a891348e0)
- fix(designer): keep state and group run order intact across edits (6061466e3)

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
