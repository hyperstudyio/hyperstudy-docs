---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.14

Released: 2026-09-23

## What's Changed

## Changes since last production release

- fix(v2): hold every participant variable write to one policy (3d19b9181)
- fix(v2): one room-scope image draw per room; warn on unsupported V2 sampling (40c30c7bf)
- fix(v2): send components' setVariable() writes to the server (a9f2109f2)
- feat(v2): route browser variable writes through one server path (64e4dc1ae)
- fix(preview): stop recording variables and device reports for preview rooms (67cb61b9c)
- docs: plan the root-cause fix for V2 browser variable writes (8d42aec0e)
- fix(agents): never send an answer with no value (f78c55653)
- chore(v2): log the shape of each sparse-rating answer (5fc40b211)
- fix(participant): markdown formatting in bullets, headings and questionnaires (0eade54d6)
- fix(sparse-rating): keep un-submitted answers for every component; store V2 output variables (edbc45213)
- fix(export): export sparse multiple-choice, ranking and audio answers (06fa6123a)
- test(agents): let CI run the agent sparse-rating tests (edd1e315b)
- fix: address review findings on agent sparse ratings and preview (4d7e723f3)
- feat(preview): preview consent, instructions and questionnaire (4a1b32233)
- fix(preview): agents in preview rooms write nothing to Firestore (3b98c739d)
- feat(agents): answer sparse-rating prompts (9666615ec)
- fix(textinput): honor the configured textarea row count (a735d4bf0)

---

## v0.7.13

Released: 2026-09-17

## What's Changed

## Changes since last production release

- fix(ci): stop splicing commit subjects into the promotion shell script (6053d2d37)
- fix(recording): restore V2 recordings from the LiveKit rejoin, not a protocol hook (b51bbd264)
- Revert "fix(recording): give V2 the recording lifecycle it never had" (a749bc723)
- fix(recording): give V2 the recording lifecycle it never had (b9199bc56)
- fix(recording): stop starting a duplicate egress on every participant rejoin (6fa4766ff)

---

## v0.7.12

Released: 2026-09-15

## What's Changed

## Changes since last production release

- fix(storybook): make the render check able to fail, and address review findings (2bf7ac144)
- refactor(svelte): remove the last Svelte 4 API and guard against its return (7345b7b9f)
- fix(storybook): repair 25 broken stories and check every story renders (8bc2fdb0b)
- fix(experiment): pin the countdown in the sparse-rating modal (52e7c397a)

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
