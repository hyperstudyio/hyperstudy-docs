---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.36

Released: 2026-11-13

## What's Changed

## Changes since last production release

- ci: name the Firestore rules Node setup steps 24.x (076d429cf)
- feat(data): download device recordings as CSV, whole or one stream at a time (fb792846f)
- fix(device-setup): no recording dialog flash between device setup and the study (517a21def)
- ci: run CI and production images on Node 24 (f0853a537)
- feat(designer): add a FRENZ device card (a030da24a)
- fix(socket): send a fresh Firebase token on every experiment socket handshake (a5c9db8f3)
- docs(perception): extraction by hand per video for now; admins enter the group's Hugging Face and RunPod keys (e2b6e0049)
- fix(profile-pictures): no reader serves a stored link; rejoins show the fresh one (ccceb255c)
- fix(profile-pictures): store the picture's path and sign a link wherever it is shown (0da0783c0)
- fix(v1): leave the loading screen when the server refuses a join to a missing room (45100dca0)
- fix(experiment): refuse V1 joins to rooms the waiting room never created (8f5c2adf9)
- fix(upload): failures answer with a generic error, internals stay in the log (b7f4d5bdc)
- fix(audio): only a session's participant uploads its audio; answers hold the path, not a permanent link (5b47f5a47)
- chore(frontend): remove dead recording and signed-URL client code (103a22d1f)
- fix(media): a reused signed link always has its full lifetime left (f954c74d1)
- fix(media): parse storage URLs by exact host, cap signed link lifetime at 3 hours (8dcbd52fb)
- fix(recordings): remove the open recording routes, match a room's recordings exactly (35ab64e9f)
- fix(images): sign only image folders, never participant recordings (b38f76f3b)
- fix(upload): create the video once, and let a multipart completion be retried (cf6c20de7)
- fix(upload): complete only uploads the server issued, from the context it validated (aa92a98e5)
- feat(recordings): capture Neon raw LSL with shared study recorder (9c6820339)
- Merge remote-tracking branch 'origin/dev' into codex/bridge-cloud-recordings (b422693fd)
- fix(frenz): verify live status and serialize V2 recording boundaries (dd4d3fc8d)
- fix(perception): hash the bytes S3 holds after the read, and read when the lookup fails (f748e44c5)
- fix(perception): one hash per S3 key, reused only for the same bytes (855ee2d10)
- fix(perception): review fixes for phase 1 storage (b13b1ac7c)
- feat(perception): video sha256 and perception bundle storage (integration phase 1) (d5652b10d)
- Merge remote-tracking branch 'origin/dev' into codex/bridge-cloud-recordings (2d01c6121)
- chore(frontend): bump svelte to 5.57.3 (18733cbde)
- test(recording): include device artifacts in counts fixture (8721d233c)
- fix(recording): discover FRENZ bands from short LSL descriptors (3b4ba7c30)
- fix(recording): validate cross-runtime manifests and rejoin parity (3d0661fc5)
- feat(recording): connect Bridge study capture to verified cloud artifacts (9d4209a5f)

---

## v0.7.35

Released: 2026-11-04

## What's Changed

## Changes since last production release

- fix(data-access): legacy audio recordings follow the session they belong to (30ad0602f)
- fix(data-access): a room in the query no longer stands in for a whole experiment (914ef0548)
- fix(data-access): organization members see experiment data again; deployment shares open their sessions in Data Management (001575820)

---

## v0.7.34

Released: 2026-11-03

## What's Changed

## Changes since last production release

- fix(prolific): separate rate limits and outages from refusals; keep secrets out of Sentry bodies (03585c6ec)
- fix(prolific): keep API keys out of logs and show Prolific's refusals to researchers (f6f0f9733)

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
