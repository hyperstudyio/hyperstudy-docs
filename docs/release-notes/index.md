---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

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

## v0.7.32

Released: 2026-11-02

## What's Changed

## Changes since last production release

- test(designer): an opened settings section stays open across saves (1dc50ebbb)
- feat(designer): General settings group into collapsible sections with summaries (01bfcb61d)
- fix(randomization): review fixes for the Randomize state order setting (fc70cb8e3)
- docs(api): randomizeStates gates V2 clusters as well as the legacy shuffle (15719cccf)
- feat(randomization): V2 randomization lives under "Randomize state order" in General settings (3527c6c10)
- docs(api): spec schemas refuse what the server refuses; Runtime help text narrowed (c715bc14a)
- fix(api): v3 experiment validation applies create's runtime default (1d472e9b7)
- docs(api): document clusters and variableDefinitions in the v3 OpenAPI spec (868142279)
- feat(designer): Runtime setting recommends V2 and drops the experimental label (e9404f2fa)
- fix(designer): selects in the Variables and Randomization panels show their dropdown arrow (cec039157)
- feat(designer): Stimulus Mappings match the Variables tab and confirm deletes in the app's dialog (cb2ee75e3)
- feat(variables): V2 Variables tab keeps an invalid edit at its field, and constants have a type (0fbe98c66)
- fix(variables): random variable summaries start with a capital like the constants' (7104fec7c)
- fix(variables): review fixes for where-used in the V2 Variables tab (6fb7e6bd0)
- feat(variables): V2 Variables tab shows where each variable is used (33cc0e5b1)
- fix(variables): V1 Variables tab decides create or update from the server (414644660)
- fix(experiments): give a new experiment its V2 runtime before validating it (db264c68a)
- fix(variables): V1 Variables tab creates new variables and drops deleted ones (feeaa709b)
- feat(experiments): new experiments run on V2 (0029870fa)
- fix(designer): the Randomization section's Variables tab link scrolls up to the tab (8bcef9832)
- feat(variables): V2 variables defined in the experiment document (bbeb4f0d4)
- feat(randomization): designer random variables and durations drawn from them (e2fbe4975)
- feat(randomization): random variables drawn once per room into the session plan (e41ff2555)
- fix(randomization): Clusters panel name fields collapsed; refused saves are not console errors (04f1ac471)
- feat(randomization): preview shows its order seed and can replay it (634249f67)
- feat(randomization): designer cluster tags, Clusters panel and sample an order (9f6deb7c3)
- feat(randomization): save clusters and refuse writes that make them invalid (fedb74b53)
- fix(randomization): observers that subscribed early receive the run order (08995ffe0)
- fix(randomization): named states never fall back to position; count deleted occurrences (270dd678a)
- fix(v2): Codex review fixes for pod-loss resume (ddb8c25c6)
- fix(v2): a disconnect-paused room resumes its video from where it paused (15b8a0afd)
- fix(randomization): export reads state ids first; Variables rows for edited experiments (aa00807a2)
- fix(randomization): review fixes for run-order consumers (75ae5d0da)
- feat(randomization): positions resolve against each room's run order (e12079567)
- fix(randomization): review fixes for the session plan (194e77c32)
- feat(randomization): each V2 room runs one stored, randomized order (4fdf3ac76)
- feat(randomization): shared run-order planner with seeded generator (8a3ef9f06)
- fix(v2): review fixes for pod-loss resume (f90d97a06)
- docs(plan): pod-loss resume status and the missing-checkpoint decision (bad3a77a1)
- fix(v2): a room that was running but lost its resume checkpoint is ended, not restarted (d16513880)
- fix(v2): the countdown stops during a disconnect pause and resumes with the time left (d117a241f)
- feat(v2): a room whose backend pod dies resumes where it was (e6bc23fda)
- feat(v2): checkpoint a running room and restore it into the disconnect pause (cb7c40132)
- docs(plan): V2 rooms resume after their backend pod dies (49bdd660f)

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
