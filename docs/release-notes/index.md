---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.7.33

Released: 2026-11-03

## What's Changed

## Changes since last production release

- fix(api-v3): a fetched config sent back after later saves is accepted (1573f3c94)
- fix(api-keys): create-experiment examples send states, not components (3f6afe74c)
- refactor(experiments): remove the retired GET /api/experiments/v3 list (5eb66ef60)
- fix(dashboard): show experiments created or changed elsewhere (9ab63f1c1)
- fix(api-v3): one set of checks for experiment create, update and validate (bcfce34ed)
- fix(api-v3): refuse organization-less API keys; deployments fail closed (7d76a47e2)
- docs(plan): randomization step 7 done; record the Randomize state order gate (ffa728bfe)

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
