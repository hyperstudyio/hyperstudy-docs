---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.70

Released: 2026-05-06

## What's Changed

## Changes since last production release

- fix(sparse-rating): persist previousRatings across remounts (afbbdbe5)
- chore(sparse-rating): drop tombstone comments + add cleanupRoom call (7c7df527)
- fix(sparse-rating): don't auto-complete on socket disconnect (e62217c5)
- fix(sparse-rating): restore single-subject resume + refresh recovery (d1ebfdc8)
- fix(lb-firewall): restrict Traefik LB inbound 80/443 to Cloudflare CIDRs (7d45fd65)
- fix(experiment-load): per-pod cache + debounced background variable sync (a82eb364)
- fix(ip-trust-chain): CIDR-based trust proxy + Traefik forwardedHeaders.trustedIPs (299b69f1)

---

## v0.6.69

Released: 2026-05-03

## What's Changed

## Changes since last production release

- fix(completion): isProlific reflects this RUN, not experiment capability (5edb5cea)
- fix(completion): require prolificPid before rendering ProlificCompletion (f98b4a90)
- fix(sparse-rating): trust serverOriginated play, bypass pause-flag race (891ef26c)
- fix(livekit-recording): reduce A/V startup gap and pin high-quality audio encoding (63d1c0b2)

---

## v0.6.68

Released: 2026-05-02

## What's Changed

## Changes since last production release

- fix(invite-member-modal): replace bind:group with explicit checked+onchange so role selection actually persists (40a44ac3)
- fix(experiment-manager): drain all pages of org+shared experiments instead of dropping the tail (d8b5975b)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
