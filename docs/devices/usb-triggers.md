---
sidebar_position: 7
title: USB Triggers
---

# USB Triggers

HyperStudy supports direct USB trigger devices through the browser's WebUSB API. This allows sending trigger signals to USB-connected hardware (button boxes, stimulus markers) without requiring the HyperStudy Bridge.

:::tip Recommended: Use TTL via Bridge Instead
For new experiments, the recommended approach for hardware triggers is the [HyperStudy TTL](/devices/hyperstudy-ttl) device with the [HyperStudy Bridge](/devices/hyperstudy-bridge). TTL triggers provide better timing precision and electrical isolation. USB triggers are supported for setups where direct USB communication is preferred.
:::

## Overview

USB triggers use the [WebUSB API](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API) to communicate directly with USB devices from the browser. This enables sending trigger commands to Adafruit, Arduino, or other compatible microcontroller-based devices.

## Prerequisites

- **Browser**: Chrome or Edge (WebUSB is not supported in Firefox or Safari)
- **USB Device**: A microcontroller that accepts serial commands via USB (e.g., Adafruit RP2040, Arduino)
- **Firmware**: The device must be programmed to respond to the configured trigger command

## Supported Devices

| Vendor | Vendor ID | Examples |
|--------|-----------|----------|
| **Adafruit** (default) | `0x239A` | Feather RP2040, QT Py, Trinkey |
| **Arduino** | `0x2341` | Uno, Nano, Leonardo |
| **Custom** | Configurable | Any WebUSB-compatible device |

## Configuration

### Trigger Component Settings

In the Experiment Designer, configure the [Trigger Component](/experimenters/experiment-design/components/trigger) with these USB-specific settings:

| Setting | Default | Description |
|---------|---------|-------------|
| **USB Vendor ID** | `0x239A` | Hex vendor ID of your USB device |
| **USB Product ID** | _(empty)_ | Hex product ID (leave empty to match any product from the vendor) |
| **USB Command** | `TRIGGER\n` | String command sent to the device when triggered |
| **Enable Device Setup** | `true` | Show USB device selection screen during experiment setup |

### Trigger Modes

USB triggers operate in **send mode** — the experiment sends a command to the USB device when a trigger event occurs. To receive triggers from external hardware, use the [HyperStudy TTL](/devices/hyperstudy-ttl) device instead.

## Setup Flow

When USB device setup is enabled, participants see a setup screen during the experiment setup phase:

1. **Device enumeration** — Lists previously authorized USB devices
2. **Device selection** — Participant selects or adds a USB device
3. **Add device** — Browser's WebUSB dialog allows selecting a new device (requires user gesture)
4. **Connection test** — Verifies the device responds
5. **Continue** — Proceeds to the experiment

Participants can skip this step if allowed by the experimenter's configuration.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No devices listed | Click "Add Device" to open the browser's USB device picker |
| "WebUSB not supported" | Use Chrome or Edge; Firefox and Safari don't support WebUSB |
| Device not appearing in picker | Check USB connection; verify the device firmware exposes a WebUSB interface |
| Connection test fails | Ensure the device is not in use by another application; try unplugging and reconnecting |
| Permission denied | The user must grant permission via the browser dialog; cannot be automated |

## Resources

- [Trigger Component Documentation](/experimenters/experiment-design/components/trigger) — Configuring triggers in experiments
- [HyperStudy TTL](/devices/hyperstudy-ttl) — Recommended TTL trigger hardware
- [WebUSB API](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API) — Browser API documentation
