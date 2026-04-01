---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.43

Released: 2026-04-01

## What's Changed

## Changes since last production release

- feat: add Client Diagnostics tab to data management viewer (61e214a8)
- fix: prevent Prometheus OOM cascade with Recreate strategy and higher memory limit (4d7ccc47)
- docs: add client diagnostics and clock sync design spec and implementation plan (959e453d)
- fix: XSS escape client diagnostics, extract shared render, add stop guard and throttle (d76de46a)
- feat: add diagnostics update endpoint for window size at experiment start (97b7a7eb)
- feat: apply clock offset correction to client-sourced event onsets (b377b581)
- Replace fragile EventBridge HLS trigger with backend-initiated transcoding (61252ef6)
- feat: enrich participants with diagnostics and add Client Info UI column (277aa002)
- feat: add clock sync socket handlers and ExperimentRunner integration (f3b94284)
- feat: capture and store client diagnostics at session creation (3fbe726f)
- feat: add clock sync service using Cristian's algorithm with EMA smoothing (a166e2ee)
- feat: add client diagnostics collection service with UA parsing (b0bcae16)
- Add media pause/resume onset times to processed sparse ratings (02264972)

---

## v0.6.42

Released: 2026-03-19

## What's Changed

## Changes since last production release

- Add true sampling without replacement (no pool reset) (9a6041d8)
- Preserve state groupings and randomizeStates through experiment export/import (9d850169)

---

## v0.6.41

Released: 2026-03-18

## What's Changed

## Changes since last production release

- Fix tests for video sync throttling and buffering grace timer (580d843d)
- Fix Firefox CPU spike during HLS video sync (d9f50f56)
- Fix syncParametersManager tests for 2-state Kalman filter (b890df67)
- Fix designer server to reassign duplicate state IDs instead of dropping them (c9b2dbfb)
- Improve sync engine: 2-state Kalman, PID pause awareness, derivative filter (4201e3ca)
- Fix video sync lifecycle issues: ended replay, slow calibration, stale state (d9db5cd8)
- Fix sync metrics tab not showing for non-host participants (e0245cc1)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
