---
title: Gaze Overlay
sidebar_position: 6
---

# Gaze Overlay

The Gaze Overlay is a global component that displays a real-time gaze position indicator on participants' screens. It visualizes eye-tracking data from connected eye trackers (Pupil Labs Neon or EyeLink 1000 Plus) as a semi-transparent dot that follows gaze position.

:::note Device Required
The Gaze Overlay only appears in the experiment designer when at least one eye tracker (Pupil Labs Neon or EyeLink) is enabled in the experiment's device integration settings.
:::

## Key Features

- **Real-time gaze visualization** as a semi-transparent dot overlay
- **Non-interactive** — does not block participant interactions with experiment components
- **Optional gaze trail** showing recent gaze positions
- **Pupil size visualization** with dot scaling based on pupil diameter
- **Multi-participant gaze sharing** — view all participants' gaze positions on each screen
- **Automatic device selection** — works with whichever eye tracker is actively streaming

## When to Use

- **Gaze monitoring**: Experimenters can observe where participants are looking during live sessions
- **Calibration verification**: Confirm eye tracker calibration accuracy during experiment setup
- **Multi-participant gaze studies**: Overlay all participants' gaze positions to study shared attention
- **Debugging**: Verify eye tracker integration is working correctly

## Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dotSize` | number | 20 | Size of the gaze dot in pixels |
| `dotColor` | color | #ff3232 | Color of the gaze dot |
| `dotOpacity` | number | 0.6 | Opacity of the gaze dot (0-1) |
| `showTrail` | boolean | false | Show trail of recent gaze positions as fading dots |
| `trailLength` | number | 20 | Number of trailing dots to display (5-50) |
| `showPupilSize` | boolean | false | Vary dot size based on pupil diameter |
| `showOnAllScreens` | boolean | false | Show all participants' gaze positions on each screen |

### Gaze Trail

When `showTrail` is enabled, a series of fading dots appears behind the main gaze dot, showing the path of recent gaze positions. Trail dots gradually decrease in opacity and size as they age. Adjust `trailLength` to control how many positions are retained (5-50).

### Pupil Size Visualization

When `showPupilSize` is enabled, the gaze dot scales based on the participant's pupil diameter. Typical pupil diameters range from 2-8mm, which map to 0.5x-2x the base `dotSize`. This provides visual feedback of pupil dilation changes that may correlate with arousal, cognitive load, or light conditions.

### Multi-Participant Gaze Sharing

When `showOnAllScreens` is enabled in a multi-participant experiment, each participant's screen displays all participants' gaze positions:

- Each participant is assigned a stable color (blue, orange, green, purple) based on their participant ID
- Remote gaze dots are 80% the size of the local dot
- A label below each remote dot shows the participant's role
- Remote gaze positions are automatically removed if no update is received for 3 seconds

## Visibility Matrix

Like other global components, control the Gaze Overlay's visibility per state using the Global Components Matrix. This lets you show gaze tracking only during specific experiment states (e.g., during video viewing but not during instructions).

## Eye Tracker Setup

The Gaze Overlay works with data from either:

- **[Pupil Labs Neon](../../../devices/index.md)** — via the HyperStudy Bridge
- **[EyeLink 1000 Plus](../../../devices/eyelink.md)** — via the HyperStudy Bridge

### Calibration

Each device supports an optional gaze calibration step during experiment setup:

- **Calibration type**: 9-point grid calibration (device-agnostic)
- **Per point**: 500ms settle time + 1500ms data collection
- **Quality check**: RMS error threshold with accuracy warnings above 8%
- **Requirement**: Controlled per-device in the experiment's Device Integration settings (`requireCalibration`)

If calibration is enabled, participants complete it during the device setup phase before the experiment begins. Calibration results are applied automatically to transform raw gaze coordinates to screen positions.

## Data Collection

The Gaze Overlay itself does not produce a separate data type. Gaze data is recorded through the eye tracker's data stream. See the [Data Management](../../data-management.md) guide for information on accessing experiment data.
