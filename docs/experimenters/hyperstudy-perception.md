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
