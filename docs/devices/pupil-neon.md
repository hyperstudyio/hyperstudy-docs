---
sidebar_position: 6
title: Pupil Labs Neon
---

# Pupil Labs Neon

Integration guide for using the Pupil Labs Neon eye tracker with HyperStudy experiments through the [HyperStudy Bridge](/devices/hyperstudy-bridge).

## Overview

The Pupil Labs Neon is a lightweight, mobile eye tracker that provides real-time gaze data. It connects to HyperStudy via the Bridge application, which communicates with the device through its REST API and Lab Streaming Layer (LSL) for gaze data streaming.

### Signal Flow

```
HyperStudy Web App → HyperStudy Bridge → Pupil Labs Neon (REST API + LSL)
```

## Features

- **Real-Time Gaze Streaming**: Live gaze position and pupil diameter at up to 200 Hz via LSL
- **Event Annotations**: Timestamped event markers synchronized with the Neon's recording timeline
- **Phone Discovery by Hardware ID**: Find the Neon Companion phones on your network and pin a station to one phone, so two phones on the same network can never be mixed up
- **Pre-flight Check**: Before a session starts, HyperStudy verifies that each participant's station is connected to the phone it was pinned to and that no two participants share a phone
- **Marker Delivery Feedback**: Event markers that the phone does not accept are reported on screen instead of failing silently
- **9-Point Calibration**: Screen-space calibration for accurate gaze mapping
- **Recording Control**: Start/stop recordings on the Neon from within HyperStudy
- **Battery Monitoring**: Real-time battery level displayed during setup
- **Gaze Overlay**: Live gaze visualization during experiments via the [Gaze Overlay](/experimenters/experiment-design/components/gaze-overlay) component

## Prerequisites

### Hardware

- Pupil Labs Neon eye tracker
- The Neon and the Bridge machine must be on the same network (WiFi or Ethernet)

### Software

- **HyperStudy Bridge** v0.8.27 or later (phone pinning and recording safeguards). Bridges from v0.8.22 update themselves in-app; older installs must be reinstalled by hand.
- **Pupil Labs Neon Companion app** (running on the Neon's companion device). Give each phone a unique name in the Companion app settings (for example `Neon-A` and `Neon-B`) — every Companion phone is called "Neon Companion" out of the box, and identical names make the setup screens hard to read.

## Connecting to the Right Phone

Every Neon Companion phone advertises itself on the local network with its **hardware id** (a 16-character code such as `3a7a373396c1afc4`). HyperStudy and the Bridge use that id, not the phone's name or hostname, to decide which phone a station talks to.

### Find Phones (Recommended)

1. Launch the Bridge on the station computer
2. In the HyperStudy setup screen (or the Bridge's Pupil configuration dialog), click **Find phones**
3. Every Companion phone on the network appears with its name, hardware id, IP address, battery level and whether it is currently recording
4. Choose the phone for this station and click **Use this phone**

The station is now **pinned** to that phone's hardware id. On every later connect, HyperStudy resolves the pinned phone on the network by its id and connects to it wherever it is — a new IP address after a DHCP change does not matter.

If a *different* phone answers (for example because someone swapped phones between stations), the connection is refused with a **wrong device** error and the setup screen shows both the pinned and the answering phone. Click **Reconnect to pinned phone** after fixing the hardware, or **Unpin** to deliberately adopt the phone that answered.

### Manual Address (Fallback)

If discovery cannot see the phone (for example on a network that blocks multicast), enter its IP address and port from the Companion app settings (such as `192.168.1.100:8080`). Avoid the `neon.local` hostname: when more than one Companion phone is on the network, `neon.local` can resolve to *either* of them.

### Several Phones on One Network

In multi-person (hyperscanning) studies each participant has their own phone and their own Bridge, usually on the same Wi-Fi. Before pinning was introduced, both stations could silently end up driving the same phone — recordings stopped mid-session, one participant's markers landed in the other's recording, and the second station saw "Already recording!".

With the current versions this cannot happen unnoticed:

- each station connects to the phone it is pinned to, and refuses any other phone
- when participants report ready, the server compares the phones behind every station and refuses to start the session if two participants share one; the experimenter sees which stations collide and can override only deliberately
- the Bridge refuses to stop or cancel a recording that it did not start itself

Pin each station once (the pin is remembered per browser on that computer), then verify the phone name and id shown on the setup screen before each session.

## Configuration

### Experiment Designer Settings

In the Experiment Designer, navigate to **Device Integration** → **Pupil Labs Neon**:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enabled** | `false` | Enable Pupil Labs Neon integration |
| **Gaze Streaming** | `false` | Stream real-time gaze data to HyperStudy |
| **Require Calibration** | `false` | Require gaze calibration before experiment starts |

### Gaze Data

When gaze streaming is enabled, the following data is available in real-time:

| Field | Description |
|-------|-------------|
| `gazeX`, `gazeY` | Normalized gaze position (0-1) |
| `pupilDiameter` | Pupil diameter in millimeters |
| `confidence` | Gaze confidence metric |
| `timestamp` | Unix timestamp |
| `sampleCount` | Total samples received |

The system auto-detects whether the device reports pixel coordinates or normalized values and handles the conversion.

## Calibration

When calibration is enabled, participants complete a 9-point calibration during experiment setup.

### How It Works

1. A calibration target appears at 9 screen positions (10%, 50%, 90% on each axis)
2. The participant fixates on each target
3. The system collects gaze samples for 1.5 seconds per point (after 500ms settling time)
4. A 6-parameter affine transform is computed to map gaze coordinates to screen positions
5. A quality score (RMS error) is reported

### Calibration Quality

| RMS Error | Quality |
|-----------|---------|
| < 4% | Excellent |
| 4-8% | Good |
| > 8% | Warning — consider recalibrating |

A minimum of 30 samples per point is required. If insufficient samples are collected at a point, the system prompts for recalibration.

## Event Annotations

HyperStudy automatically sends timestamped event markers to the Neon's recording for synchronization. These annotations appear in the Neon's recording timeline.

### Annotated Events

| Event | Annotation Format |
|-------|-------------------|
| Experiment start | `experiment_start:<name>` |
| Experiment end | `experiment_end` |
| State transition | `state_transition:<index>:<name>` |
| Component start | `component_start:<type>` |
| Component end | `component_end:<type>` |
| Component response | `component_response:<type>` |
| Trigger | `trigger:<code>` |
| Custom marker | `marker:<label>` |

These markers enable precise alignment of experiment events with the eye tracking data during analysis.

### Recording Safeguards

- **Start waits for the phone.** When HyperStudy starts a recording, the Bridge waits until the phone reports the recording as active (up to 3 seconds) before returning, so markers sent right after the start are never lost.
- **Markers are checked against the recording.** Every marker carries the id of the recording it landed in. If that is not the recording HyperStudy started (someone started a recording from the phone, or the phone was swapped), the marker is flagged as a **recording mismatch** and shown as a failure on the participant's screen.
- **Only the owner may stop.** The Bridge refuses to stop or cancel a recording it did not start (`recording_not_owned`) and reports `phone_busy` if asked to start while the phone is already recording. If the phone's status cannot be read at all, these checks fail closed rather than guessing. An experimenter can pass `force` from the Bridge to override.

## Usage

### Basic Workflow

1. **Power on** the Neon and ensure the Companion app is running
2. **Verify network** — the Neon and Bridge machine must be on the same network
3. **Launch HyperStudy Bridge** on the experiment machine
4. **Connect** to the Neon — pick the pinned phone (or use **Find phones** the first time)
5. **Start recording** on the Neon (optional — can be automatic)
6. **Run your experiment** — event annotations are sent automatically
7. **Stop recording** and disconnect when finished
8. **Export data** from the Neon Companion app for analysis

### With Gaze Overlay

To show live gaze visualization during experiments:

1. Enable **Pupil Labs Neon** in Device Integration settings
2. Enable **Gaze Streaming**
3. Enable the **Gaze Overlay** global component
4. Optionally enable **Require Calibration** for screen-mapped gaze
5. Configure the Gaze Overlay appearance (dot size, color, trail, etc.)

## Setup Flow for Participants

During experiment setup, participants see:

1. **Bridge connection check** — verifies the Bridge is running
2. **Phone selection** — connects to the phone this station is pinned to, or offers **Find phones** the first time
3. **Identity check** — shows the phone's name, hardware id and battery so the participant or experimenter can confirm it is the right one
4. **Gaze stream test** — verifies gaze data is flowing
5. **Calibration** (if required) — 9-point calibration with live preview
6. **Live gaze preview** — confirms everything is working

Participants can skip setup if allowed by the experimenter's configuration.

When the participant reports ready, a **pre-flight check** runs automatically: it confirms the Bridge still reports the pinned phone (and the Kernel Flow2, if enabled) as connected, and the server confirms no other participant is using the same phone. A failed check keeps the participant on the setup screen with an explanation instead of starting a session that would record nothing.

## Troubleshooting

### Device Not Discovered

- Verify the Neon and Bridge machine are on the same network
- Check that the Companion app is running and connected
- Click **Find phones** again — discovery listens for a few seconds and a phone that just woke up may have been missed
- Try a manual IP address as a fallback (not `neon.local`)

### A Different Phone Answered (Wrong Device)

The station is pinned to one phone but another one responded — usually the phones were swapped between stations, or a manual `neon.local` address picked the wrong phone.

- Check the phone name and hardware id shown on the setup screen against the label on the phone
- Put the right phone back on this station and click **Reconnect to pinned phone**, or **Unpin** if this station should now use the phone that answered

### Two Participants Share a Phone

The session refuses to start and the experimenter sees which stations collide. One station is connected to the other participant's phone.

- Fix the pin on the offending station (see above) and have that participant report ready again
- The experimenter can override the check for a deliberate single-phone setup; the override is recorded with the session

### Phone Is Already Recording (`phone_busy`)

Someone started a recording from the Companion app, or a previous session did not stop its recording.

- Stop the recording on the phone, then start the session again
- The Bridge never stops a recording it did not start on its own; an experimenter can force it from the Bridge

### Markers Reported as Failed

The participant's screen shows failed markers when the phone rejects an event or the event landed in a recording HyperStudy did not start.

- Check that the recording on the phone is the one started by HyperStudy (a recording started from the phone counts as a mismatch)
- Check the phone's battery and network connection; markers are not queued, so a phone that is unreachable for a while loses the events sent during that time

### No Gaze Data

- Ensure gaze streaming is enabled in the experiment's Device Integration settings
- Verify the Neon is properly positioned on the participant
- Check that the Bridge shows an active gaze stream
- Restart the gaze stream from the setup interface

### Poor Calibration Quality

- Ensure the participant keeps their head still during calibration
- Verify the Neon is properly seated and not shifting
- Check that the room lighting allows good pupil detection
- Try recalibrating — sometimes a second attempt improves results

### Connection Lost During Experiment

- The system will attempt to reconnect automatically
- If the Neon's battery dies, gaze data will stop but the experiment continues
- Check the Bridge status window for connection diagnostics

## Resources

- **Pupil Labs Documentation**: [docs.pupil-labs.com](https://docs.pupil-labs.com/)
- **HyperStudy Bridge**: [GitHub Repository](https://github.com/hyperstudyio/hyperstudy-bridge)
- **Gaze Overlay Component**: [Gaze Overlay Documentation](/experimenters/experiment-design/components/gaze-overlay)
