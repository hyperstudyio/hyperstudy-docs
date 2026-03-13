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
- **Automatic Discovery**: Find Neon devices on the network via LSL without manual IP entry
- **9-Point Calibration**: Screen-space calibration for accurate gaze mapping
- **Recording Control**: Start/stop recordings on the Neon from within HyperStudy
- **Battery Monitoring**: Real-time battery level displayed during setup
- **Gaze Overlay**: Live gaze visualization during experiments via the [Gaze Overlay](/experimenters/experiment-design/components/gaze-overlay) component

## Prerequisites

### Hardware

- Pupil Labs Neon eye tracker
- The Neon and the Bridge machine must be on the same network (WiFi or Ethernet)

### Software

- **HyperStudy Bridge** v0.8.22 or later
- **Pupil Labs Neon Companion app** (running on the Neon's companion device)

## Connection Methods

### Automatic Discovery (Recommended)

The Bridge uses Lab Streaming Layer (LSL) to discover Neon devices on the network automatically:

1. Launch the Bridge and ensure the Pupil module is active
2. In the HyperStudy experiment setup, click **Discover Devices**
3. Available Neon devices appear in the list
4. Select your device and click **Connect**

### Manual IP Connection

If automatic discovery doesn't find your device:

1. Find the Neon's IP address in the Companion app settings
2. Enter the IP address in the setup dialog
3. Click **Connect**

The last connected IP is remembered for future sessions.

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

## Usage

### Basic Workflow

1. **Power on** the Neon and ensure the Companion app is running
2. **Verify network** — the Neon and Bridge machine must be on the same network
3. **Launch HyperStudy Bridge** on the experiment machine
4. **Connect** to the Neon (automatic discovery or manual IP)
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
2. **Device discovery** — finds Neon devices on the network
3. **Connection** — connects to the selected device
4. **Gaze stream test** — verifies gaze data is flowing
5. **Calibration** (if required) — 9-point calibration with live preview
6. **Live gaze preview** — confirms everything is working

Participants can skip setup if allowed by the experimenter's configuration.

## Troubleshooting

### Device Not Discovered

- Verify the Neon and Bridge machine are on the same network
- Check that the Companion app is running and connected
- Try manual IP connection as a fallback
- Restart the Bridge's LSL discovery

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
- **HyperStudy Bridge**: [GitHub Repository](https://github.com/ljchang/hyperstudy-bridge)
- **Gaze Overlay Component**: [Gaze Overlay Documentation](/experimenters/experiment-design/components/gaze-overlay)
