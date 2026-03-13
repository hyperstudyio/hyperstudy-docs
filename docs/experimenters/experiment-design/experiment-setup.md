---
title: Experiment Setup Phase
sidebar_position: 10
---

# Experiment Setup Phase

The experiment setup phase occurs after participants leave the waiting room and before the main experiment begins. It ensures all devices, media, and connections are ready for a smooth experience.

**Duration:** Typically 10-60 seconds depending on media size and connection speed.

## What Happens During Setup

The setup process handles several tasks automatically:

1. **Media Preloading** — All videos and images are downloaded into the browser cache
2. **Device Setup** — Camera and microphone permissions and selection (if needed)
3. **Video Chat Connection** — LiveKit room connection (if video chat is enabled)
4. **Sync Socket** — Video synchronization connection (if multi-participant with video)
5. **Special Hardware** — USB triggers or Kernel integration (if enabled)

Participants see a progress indicator during this phase. Once all steps complete, the experiment begins automatically.

## Media Preloading

All videos and images used in the experiment are preloaded before the experiment starts. This prevents loading delays, grey video boxes, and buffering during the experiment.

### What Gets Preloaded

- Every video referenced in ShowVideo components
- Every image referenced in ShowImage components
- Role-specific media for the participant's assigned role
- Media across **all states**, not just upcoming ones

### What Participants See

A progress bar shows preloading status:

```
Loading Experiment Media...
[████████████████░░░░] 82%

Loading videos: 2/3 complete
```

### Optimizing Preload Time

| Optimization | Impact |
|-------------|--------|
| Compress videos (H.264 codec) | Faster downloads |
| Keep images under 1920x1080 | Reduced file size |
| Use shorter video clips | Faster preloading |
| Upload to HyperStudy (not external URLs) | Optimized delivery via signed URLs |

:::tip Video Format
MP4 files work best. MOV files may have seeking issues in Firefox. See [Media Management](../media-management.md#video-format-recommendations) for details.
:::

### Setup Time Benchmarks

| Experiment Type | Expected Setup Time |
|----------------|---------------------|
| Text-only survey | 2-5 seconds |
| With images (5-10) | 5-15 seconds |
| With short video (< 50MB) | 15-30 seconds |
| With long videos (> 50MB) | 30-90 seconds |
| With video chat | +5-10 seconds |
| With all features | 60-120 seconds |

Keep setup under 60 seconds for the best participant experience.

## Device Setup

Device setup appears when your experiment requires participant camera and/or microphone.

### When It Appears

Device setup is shown when:
- Video chat component is enabled
- Audio recording component is used

It is skipped for experiments that don't need devices (e.g., surveys, video viewing).

### What Participants See

1. **Permission prompt** — Browser asks to access camera/microphone
2. **Device selection** — Dropdowns for camera, microphone, and speakers
3. **Live preview** — Video feed and audio level meter
4. **Test audio** — Button to verify speaker output
5. **Continue** — Participant confirms when ready

### Best Practices

- **Send a preparation guide** before the experiment — recommend testing at [hyperstudy.io/devicetester](https://hyperstudy.io/devicetester)
- **Recommend Chrome** for best device compatibility
- **Allow extra time** (2-3 minutes) for device setup in your schedule
- **Include device checks** in pilot testing

## LiveKit Video Chat Connection

For experiments with video chat, the system automatically connects to LiveKit after device setup completes. This typically takes 2-5 seconds.

**Configuration** is done in **Global Components** → **Video Chat**:
- Initial audio muted/unmuted
- Initial video on/off
- Recording enabled/disabled
- Layout mode (grid, spotlight, sidebar)

## Special Hardware

### USB Triggers

For experiments using hardware triggers (fMRI sync, button boxes):
1. Setup requests USB device access
2. Connected trigger device is detected and tested

See [Trigger Component](./components/trigger.md) for configuration.

### Kernel Integration

For computational notebook integration, the system establishes a WebSocket connection during setup. See [Kernel Integration](./kernel-integration.md) for configuration.

## Disconnect Timeout

The disconnect timeout feature controls what happens when a participant loses connection during a multi-participant experiment.

### How It Works

When a participant disconnects:
1. The experiment **pauses** for all participants
2. A countdown timer appears showing remaining time
3. Connected participants see who is disconnected
4. If the participant reconnects, the experiment **resumes**
5. If the timer expires, the experiment **completes** for everyone

:::note
Disconnect timeout only applies to **multi-participant experiments**. Single-participant experiments allow rejoining at any time without a timeout.
:::

### Configuration

Disconnect timeout is **disabled by default**. To enable it, configure these settings:

| Setting | Default | Description |
|---------|---------|-------------|
| `enabled` | `false` | Enable/disable the feature |
| `durationMs` | `60000` | Timeout duration in milliseconds |
| `action` | `"complete"` | What happens when timeout expires |

**Recommended timeout values:**

| Experiment Length | Recommended Timeout |
|------------------|---------------------|
| Quick tasks (< 5 min) | 30-60 seconds |
| Medium tasks (5-20 min) | 60-120 seconds |
| Long tasks (> 20 min) | 120-300 seconds |

### What Happens on Rejoin

When a disconnected participant returns:
- They skip device setup (already completed)
- They're placed in the current experiment state
- State timer resumes with remaining time
- All variables, role assignment, and completed work are preserved

### What Happens on Timeout

When the countdown expires:
- The experiment completes for all participants
- Post-experiment questionnaires still appear (if enabled)
- Completion status is recorded as `DISCONNECT_TIMEOUT`
- All data collected up to that point is preserved

### Best Practices

- Test disconnect behavior before live sessions
- Warn participants about the timeout in instructions
- Don't set timeout too short (< 30s) — participants may panic
- Don't set timeout too long (> 5 min) — remaining participants will leave

For technical implementation details, see [Disconnect Timeout Technical Reference](../../developers/disconnect-timeout.md).

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Setup takes too long | Compress videos, reduce image count, check network speed |
| Device setup fails | Close other apps using camera/mic, try Chrome, restart browser |
| Video chat won't connect | Disable VPN, check firewall, ensure network ports aren't blocked |
| Media preloading stalls | Verify media URLs are valid, check for CORS issues with external media |
| Grey video boxes during experiment | Media failed to preload — check console for errors, verify video format |

## Next Steps

- [Participant Flow Guide](./participant-flow.md) — Complete participant journey
- [Experiment States](./experiment-states.md) — Design your experiment states
- [Device Testing Guide](../../participants/device-testing.md) — What to tell participants
