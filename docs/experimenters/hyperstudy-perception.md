---
title: HyperStudy Perception
sidebar_position: 20
---

# HyperStudy Perception

HyperStudy Perception turns a video into a time-indexed **perception track**: its shots and keyframes, a word-timed
transcript, face tracks grouped into people, and captions for each shot. You review and correct the track in the
**HyperStudy Annotator** desktop app.

## In the HyperStudy Annotator

The annotator installs the pipeline itself, along with its own copy of Python, the first time it opens. It updates the
pipeline when it starts. You do not need to install anything else. To process a video, choose **Run pipeline…**, pick a
video, turn on the features you want, and start the run. When the run finishes, its bundle opens in the library.

The first launch downloads Python, each step's packages and the model weights. That is a few gigabytes, and it happens
once.

## On the command line

The same pipeline is a Python package, [`hyperstudy-perception`](https://pypi.org/project/hyperstudy-perception/):

```sh
uv tool install hyperstudy-perception      # or: pip install hyperstudy-perception
perception doctor                          # what can run on this machine
perception graphs                          # the graphs it can run
perception run full.yaml --input video=clip.mp4 --only asr,faces --allow-downloads
```

Each step runs in its own environment. These are made the first time a step is needed, or ahead of time with
`perception setup`, and stored under `~/.hyperstudy-perception`.

## Licences

Model weights download when a step first needs them, and each comes under its own licence. Some, including the face
models (py-feat and ArcFace), are for non-commercial use only. Each bundle records the most restrictive licence among
its layers.

---

## Release Notes

<!-- RELEASE_NOTES_START -->

### v0.1.2

**Released:** 2026-10-30

#### What's Changed
* vision.body-pose: RTMW-l and its YOLOX-m person detector, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/5
* A URL weight source needs its sha256 by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/6
* A weight source is hf:// or https:// in lower case; a node with WEIGHTS declares them by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/7
* audio.waveform: the waveform layer's peaks from decode's audio, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/8
* vision.face-track: the faces_detail side file (landmarks, AUs, emotions, pose), as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/9
* vision.gaze: Gaze-LLE gaze targets from faces, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/11
* The full graph lets embeddings leave the machine, with consent by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/13
* audio.diarize: pyannote community-1 speaker diarization, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/10
* audio.sounds: sound events (PANNs, EfficientAT mn40, PE-A-Frame), as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/12
* vision.face-track 1.2.0: the 478-point face mesh side file, as the bake-off wrote it by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/14
* vision.face-track 1.3.0: keep the ArcFace embeddings as a side file by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/18
* Parquet side files for full model output; gaze keeps its heatmaps by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/20
* vision.facing: who faces whom from MediaPipe 3D torso direction, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/15
* vision.hands: RTMPose-m hand keypoints with RTMDet-nano hand boxes, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/17
* vision.active-speaker: who on screen is speaking (LR-ASD) and voice links, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/16
* vision.objects: SAM 3 objects, DINOv3 links and Haiku names, as the bake-off chose by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/19
* core.decode 1.1.0: keep the shot detector's per-frame scores as a side file by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/24
* audio.asr 1.1.0: keep Parakeet's tokens and confidences as a side file by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/23
* audio.diarize 1.1.0: keep pyannote's speaker turns and voice embeddings as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/22
* audio.sounds 1.1.0: keep the taggers' and PE-A-Frame's scores as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/21
* vision.body-pose 1.1.0: keep the detector scores and dropped duplicates as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/26
* vision.face-track 1.4.0: keep py-feat's remaining output and the untracked faces as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/25
* vision.active-speaker 1.1.0: keep LR-ASD's per-frame scores and the word votes as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/27
* vision.facing 1.1.0: keep MediaPipe's poses and the facing angles as side files by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/28
* vision.hands 1.1.0: keep every hand detection, and what became of it, as a side file by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/29
* Fix a race in the pod removal-at-boot test by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/34
* vision.gestures: rule-based hand events (hand over mouth, self-touch, pointing, raised hand) with per-sample evidence; optional inputs by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/30
* vision.gaze 1.2.0: tracked objects as gaze targets, through an optional objects input by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/32
* Prosody: Praat measures and Odyssey emotion, gpt-audio delivery captions by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/33
* audio.asr: CUDA (and CPU) runner, NVIDIA NeMo's Parakeet TDT 0.6B v3 by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/31
* Fix review MINORs from wave 3 by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/35
* One cache identity for every backend by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/40
* keys check HF_TOKEN says each gated model's access by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/38
* vision.objects 1.1.0: clothing from body boxes, generic vocabulary, no people in object masks by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/36
* Remote hosts keep the outputs they make by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/39
* Plan: run the whole pipeline anywhere, or one run across machines by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/37
* A host keeps one environment per lock, shared by every node and code version by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/41
* Every GPU on a host: a node on each card, leased against every coordinator by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/42
* Objects is three steps: names, track and link; the crop check runs in parallel by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/43
* What a host keeps is removed after 7 days unused, or when its disk is short; never while a step holds it by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/44
* The names and track steps are part of objects: the app shows one feature by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/45
* A whole run coordinated on a lab server, with the keys its steps declare by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/46
* A gated model's token goes only to its prepare; the step reads the cache offline, on a host too by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/47
* A run coordinated on a lab server can be canceled from here (perception remote cancel) by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/48
* Release 0.1.2 by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/49


**Full Changelog**: https://github.com/hyperstudyio/hyperstudy-perception/compare/v0.1.1...v0.1.2

#### Install

```sh
uv tool install hyperstudy-perception     # or: pip install hyperstudy-perception
perception doctor
```

The HyperStudy Annotator app installs and updates it on its own.


---

### v0.1.1

**Released:** 2026-10-27

#### What's Changed
* keys check, cloud check, hosts probe and ssh overrides; nodes' choices in models list by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/3
* Release 0.1.1 by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/4


**Full Changelog**: https://github.com/hyperstudyio/hyperstudy-perception/compare/v0.1.0...v0.1.1

#### Install

```sh
uv tool install hyperstudy-perception     # or: pip install hyperstudy-perception
perception doctor
```

The HyperStudy Annotator app installs and updates it on its own.


---

### v0.1.0

**Released:** 2026-10-26

#### What's Changed
* Publish to PyPI, cut releases from a tag, MIT licence by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/1
* RunPod image: under hyperstudyio, and built on branch pushes only by @ljchang in https://github.com/hyperstudyio/hyperstudy-perception/pull/2

#### New Contributors
* @ljchang made their first contribution in https://github.com/hyperstudyio/hyperstudy-perception/pull/1

**Full Changelog**: https://github.com/hyperstudyio/hyperstudy-perception/commits/v0.1.0

#### Install

```sh
uv tool install hyperstudy-perception     # or: pip install hyperstudy-perception
perception doctor
```

The HyperStudy Annotator app installs and updates it on its own.


---
