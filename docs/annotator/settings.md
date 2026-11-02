---
title: Settings
sidebar_position: 6
---

# Settings

**Settings** has three tabs: **Models**, **Compute** and **App**.

## Models

**The steps' models** lists what each step of the pipeline runs: its models, with links and licences, whether it
runs on your computers or calls an API, and how much it downloads (once). Some steps have choices, such as which
Claude model writes the shot captions. What you choose here is the default; Extract can change it for one run.

Each step that needs a key has the key's row under it.

### Keys

The app keeps three keys, in this computer's keychain:

| Key | What it is for | Where to get one |
|---|---|---|
| Anthropic | Shot captions written by Claude | [console.anthropic.com](https://console.anthropic.com/settings/keys) |
| Hugging Face | Downloading gated models, and higher download limits | [huggingface.co](https://huggingface.co/settings/tokens) |
| RunPod | Cloud GPU pods | [console.runpod.io](https://console.runpod.io/user/settings) |

- **Add key** (or **Replace**) asks you to paste it, and **Save** stores it.
- **Test** asks the provider whether it accepts the key. The check is one request and costs nothing.
- **Remove** deletes it from the keychain.

A key the pipeline finds elsewhere, in your environment or in a private `~/.config/hyperstudy/*.env` file, shows
**Found in …** instead. Each step is given only the keys it needs.

**Keys no step uses** lists keys saved earlier that no step needs any more. You can remove them.

### Hugging Face access

Some models, such as SAM 3 and DINOv3 for objects and pyannote for speaker diarization, are **gated**: Hugging Face
lets you download them only once you have asked for access. When a step uses one, **Hugging Face access** walks you
through it:

1. **Open Hugging Face** to sign in or create an account.
2. **Ask for access** to each model. Some are granted when you accept their terms; Meta reviews requests for its
   models. Each shows **✓ Granted** or **Not yet**. **Check again** checks.
3. **Create token**, with Read access.
4. Paste it, and **Save**.

![Settings > Models: the four Hugging Face access steps, each gated model with Ask for access, and the steps' models below](/img/annotator/settings-models.png)

When every model is granted, the section folds to one line. **Show steps** opens it again.

## Compute

**This computer** says what this computer is and which steps can run on it. **Remote servers** and **Cloud GPU** add
other machines for runs. See [Lab servers and RunPod](./compute.md).

## App

**Updates** shows the app's version, checks for a newer one, and installs it (see
[Updating](./index.md#updating)). The pipeline's version is shown below it. **Documentation** opens these pages.
