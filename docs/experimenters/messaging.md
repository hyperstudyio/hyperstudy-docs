---
title: Experimenter-Participant Messaging
sidebar_position: 5.5
---

# Experimenter-Participant Messaging

HyperStudy includes a two-way messaging system that allows experimenters and participants to communicate during a live experiment session. Experimenters can broadcast messages to participants in a room, and participants can send help requests back to the experimenter.

## When to Use Messaging

Messaging is designed for real-time support during experiments:

- **Experimenter → Participant**: Notify participants of schedule changes, provide hints if someone is stuck, or deliver instructions that weren't part of the original design
- **Participant → Experimenter**: Participants can ask for help if they encounter confusion, technical issues, or need clarification

:::caution
Messages are delivered during active experiments. Keep them short and supportive — participants are mid-task and lengthy messages can be distracting or influence their responses.
:::

## Enabling Participant Messaging

By default, participants cannot message the experimenter. To enable this:

1. Open your experiment in the **Experiment Editor**
2. Navigate to the **Settings** section (in the experiment metadata)
3. Check **Allow participants to message the experimenter**
4. Save the experiment

When enabled, participants will see a floating **Help** button during the experiment. When disabled, participants have no way to initiate contact.

:::tip
You can enable or disable this setting at any time. Changes take effect for new sessions — participants already in an active session will keep whatever setting was active when they joined.
:::

## Sending Messages to Participants

You can send messages to participants from the [Deployment Tracking](./deployments.md#session-tracking) dashboard.

### How to Send a Message

1. Open the deployment tracking view for your active deployment
2. Find the session (room) you want to message in the session table
3. Click the **Msg** button in the **Actions** column
4. A compose modal appears showing the target room
5. Type your message (up to 1,000 characters)
6. Click **Send**

### What Participants See

When you send a message, participants in that room see a banner at the top of their screen:

- The banner is labeled **Experimenter** so participants know who sent it
- The message text appears below the label
- The banner **automatically dismisses after 10 seconds**
- Participants can also dismiss it early by clicking the close button
- If you send multiple messages in quick succession, they stack vertically

### Targeting

Messages are broadcast to **all participants in the room**. There is no option to message a single participant within a multi-participant room — everyone in that session sees the same message.

## Receiving Messages from Participants

When participant messaging is enabled, participants can send messages to you from within the experiment.

### What Participants See

Participants see a floating **Help** button in the bottom-right corner of the experiment interface. Clicking it opens a compose modal where they can type a message (up to 1,000 characters) and send it.

After sending, participants see a brief confirmation message before the modal closes automatically.

### What You See

Incoming participant messages appear in the deployment tracking dashboard:

1. **Alert column badge**: A numbered badge appears in the **Alert** column for that session, showing how many unread messages have been received
2. **Click to view**: Click the badge (or the **View msgs** button in the Actions column) to open the message thread
3. **Message thread**: The thread shows all messages from participants in that room, with sender name and timestamp
4. **Reply**: You can reply directly from the message thread — your reply is delivered as an experimenter message banner to the room

### Message Notifications

Messages arrive in real-time via WebSocket. You will see the badge count update immediately when a participant sends a message — no need to refresh the page. However, you must have the deployment tracking view open to see incoming messages.

## Best Practices

- **Keep messages short**: Participants are mid-task. A brief, clear message is far more effective than a paragraph.
- **Monitor the Alert column**: During active data collection, keep the deployment tracking dashboard open and watch for message badges and stuck indicators.
- **Use for support, not experimental manipulation**: Messaging is a support channel. Avoid using it to deliver experimental stimuli or instructions that could bias responses — use experiment states and components for that.
- **Enable selectively**: Only enable participant messaging for experiments where real-time support is valuable. For simple, self-paced experiments, it may be unnecessary.
- **Respond promptly**: If a participant asks for help, they are likely blocked. A quick response prevents frustration and potential data loss from abandoned sessions.

## Next Steps

- [Deployments](./deployments.md) — Monitor sessions and use messaging controls in the tracking dashboard
- [Experiment Design Overview](./experiment-design/overview.md) — Configure experiment settings including messaging
