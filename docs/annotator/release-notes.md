---
title: Release notes
sidebar_position: 7
---

# Release notes

Each release of the HyperStudy Annotator, newest first. Installed copies check for a new release when they open and
offer to install it. The perception pipeline the app runs has its own
[release notes](/experimenters/hyperstudy-perception#release-notes).

<!-- RELEASE_NOTES_START -->

### v0.0.5

**Released:** 2026-11-05

#### Fixes

- Use the Hugging Face token saved in Settings during pipeline setup and gated-model downloads. A token that passes the access check now reaches setup without needing `launchctl setenv HF_TOKEN`.
- Read saved keys again on each setup attempt, so replacing a token and clicking **Try again** uses the replacement without restarting the app.
- Recover on **Try again** after unlocking a keychain that was locked when the app started.
- Add OpenAI key storage in Settings for delivery captions. Hugging Face, Anthropic, RunPod, and OpenAI keys are covered by credential propagation regression tests.
- Round the RunPod spending cap up to cover the reservation shown before starting a run.


---

### v0.0.4

**Released:** 2026-11-02

v0.0.3 was not published, so this lists every change since v0.0.2.

#### What's Changed
* One annotation per video, Settings by purpose, and where a step runs on its own row by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/33
* Inspect edits what's selected; model details on the timeline; overlays you can style by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/34
* Inspect: Review's Not there in its own words; Back never goes nowhere by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/35
* Annotate on the timeline: types on the Annotations row, A and keys to code by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/36
* A new type keeps only what its kind uses; port plan updated by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/37
* Drag an annotation to move it, and its ends to change its length by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/38
* A dropped annotation lands where it was dragged; overlay rows outlined like Loop by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/39
* Double-click an annotation for its menu at the bar; ⌫ deletes by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/40
* ⌫ in another menu is that menu's; Escape closes the annotation menu from a number field by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/41
* Settings: Compute and Models by step, with a Test for every key, provider and server by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/42
* A cloud provider's Test result goes when its key changes or it is re-added by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/43
* WebKit fixes: ⌫ never navigates, pop-ups handle Tab; browser tests in WebKit in CI by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/44
* Release 0.0.3 by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/45
* The Annotator imports; extracting is Extract's page by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/48
* RunPod has one Test: its key's by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/46
* A lab server can be chosen for a step; a choice that cannot be planned is undone by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/47
* A stale plan can be planned again with the same choices by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/49
* Hugging Face access is set up in Settings, with each gated model's access by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/50
* The Mac does not idle to sleep while a run has steps on other machines by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/51
* Objects is one feature again, in Settings > Models and Extract by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/52
* A lab server can be allowed to run whole pipelines with your keys, in Settings > Compute by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/53
* Extract can run the whole pipeline on a lab server, and lists the runs there not yet in the library by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/54
* The demo pipeline names the objects in the captions call (perception #51) by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/55
* Run on RunPod: a whole run on a pod made for it; other machines offered once their Test passes by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/56
* Settings lists the full graph's steps, not every step registered by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/57
* Release 0.0.4 by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/58


**Full Changelog**: https://github.com/hyperstudyio/hyperstudy-annotator/compare/v0.0.2...v0.0.4

---

### v0.0.2

**Released:** 2026-10-27

#### What's new

- **Updates in the app.** At launch the app checks for a newer release and offers to install it; relaunch to finish.
  Every update is signed, and the app installs only updates signed with the release key. The relaunch waits while
  a pipeline is running or being set up.
- **No setup needed to run the pipeline.** At launch the app installs or upgrades the perception pipeline from PyPI
  with its bundled `uv`, so you no longer need to clone hyperstudy-perception or install Python. The run dialog
  shows the setup's progress, and why it failed if it did.
- **Navigation.** A rail on the left takes you to Extract, Annotator, Settings and Docs.
- **Quitting stops the pipeline.** Quitting the app, from the menu, the Dock or a terminal signal, now cancels a run
  in progress the same way Cancel does and stops everything it started. Before, a quit during a run or setup could
  leave pipeline processes running in the background.
- **Open source.** The app is released under the MIT licence.

#### What's Changed
* App navigation: a rail with Extract, Annotator, Settings and Docs by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/19
* Before going public: an MIT licence, and no local path in the tests by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/20
* Update the app in place: checked at launch, installed when asked, signed releases by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/22
* CI: keep apt's packages between runs by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/23
* Updater: the release key's public half by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/24
* Install the pipeline from PyPI with the bundled uv; nothing needed on the machine by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/25
* Review follow-up: a run and a setup decided under one lock order by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/26
* Updates: the relaunch also waits while the pipeline is being set up by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/27
* Version 0.0.2 by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/28
* Setup status: a version on disk is known as installed from the start by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/29
* Updater: the new release key, and the key tried before the build by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/30
* Release: the updater key may have no passphrase by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/31
* Quitting the app stops the pipeline: a run canceled as Cancel does, nothing left running by @ljchang in https://github.com/hyperstudyio/hyperstudy-annotator/pull/32

**Full Changelog**: https://github.com/hyperstudyio/hyperstudy-annotator/compare/v0.0.1...v0.0.2


---
