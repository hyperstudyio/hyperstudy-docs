---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.26

Released: 2026-10-23

## What's Changed

## Changes since last production release

- fix(k8s): hpa-floor review fixes — pull secret, manual raises, no apply gap (c087d331d)
- feat(k8s): keep the backend HPA from removing a pod that is running experiments (86941745d)
- fix(k8s): keep a draining backend pod resolvable so participants can reconnect (8ba8ea9b4)

---

## v0.7.25

Released: 2026-10-22

## What's Changed

## Changes since last production release

- fix(engine): agent roles do not hold a SYNCHRONIZED trigger state (6df1540cf)
- fix(preview): agent previews take edit access; end the run on leave; show spawn failures (c474f78a1)
- feat(preview): agent-only previews, and an agent pane reasoning toggle (9fb6ad61c)
- fix(spectate): ask the owning pod to activate only once subscribed (28d87fcda)
- feat(preview): agent roles get an agent pane showing what the agent is given (6e6c665c2)

---

## v0.7.24

Released: 2026-10-22

## What's Changed

## Changes since last production release

- fix(permissions): one rule for managing sharing; new experiments' data starts with owner and org admins (09d3bfd8c)
- test(deployments): update emulator tests to the owner-and-org-admin default (91b1da948)
- fix(permissions): experimenters always act in their organization; deployments default to owner and org admins (cf227cca4)
- fix(data-access): cache data-access answers per session; recognise platform admins (ece5b5377)
- fix(permissions): session, participant and recording data follow the data permission (a0ee56846)
- fix(deployments): deployments use the shared permission checks (d7e2b95db)
- chore: restore performance baseline rewritten by a local test run (62569bf9f)
- fix(permissions): every share check gets the resource id and type (4c38bcfa1)
- fix(permissions): shares work for duplicate, update and variables; name external users (ef3282989)
- fix(org-settings): API key sharing icons render through Icon.svelte (493493a59)
- ci(promote): dispatch the agent adapter spec sync after each release (91b7d3118)
- feat(org-settings): share agent provider keys from the organization settings panel (a78f32613)

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
