---
title: Experiment Completion
sidebar_position: 11
---

# Experiment Completion

The completion phase is the final stage of the participant experience. This guide explains how experiments end, how to configure completion screens, and how to handle different completion scenarios.

## What Happens at Completion

When participants reach the end of an experiment:

1. **Session finalized** — Participant marked as complete, data recording finalized
2. **Completion outcome determined** — Normal, timeout, error, or disconnect
3. **Completion screen displayed** — Thank you message with optional completion code
4. **Redirect** — Automatic redirect to Prolific or custom URL (if configured)

## Completion Outcomes

| Outcome | When It Occurs | Prolific Payment | Post-Experiment Questionnaire |
|---------|---------------|------------------|-------------------------------|
| `SUCCESS` | Participant completes all states normally | Full compensation | Yes |
| `ABANDONED` | Participant closes browser or navigates away | No compensation | No |
| `DISCONNECT_TIMEOUT` | Multi-participant disconnect timeout expires | Configurable | Yes |
| `TECHNICAL` | System error or experimenter force-completes | Full compensation (good faith) | Configurable |

### Normal Completion (SUCCESS)

The standard path — participant reaches the final experiment state. A completion code is generated (for Prolific studies), the completion screen appears, and the participant is redirected.

### Early Exit (ABANDONED)

When a participant leaves mid-experiment (closes browser, navigates away), the session is marked as incomplete. Partial data collected up to that point is preserved. No completion code is generated.

### Disconnect Timeout

In multi-participant experiments with [disconnect timeout](./experiment-setup.md#disconnect-timeout) enabled, if a disconnected participant doesn't rejoin within the timeout period, the experiment completes for all participants with this outcome.

### Technical Issue

Triggered by system errors or when an experimenter force-completes a session. Participants see a message explaining the issue wasn't their fault. Typically compensated in full.

## Configuring the Completion Screen

### Thank You Message

Navigate to **Experiment Settings** → **Completion** to configure the message participants see:

```markdown
# Thank You!

You have successfully completed our study on decision-making.
Your responses will help us understand how people make choices.

We appreciate your time and thoughtful participation!
```

### Completion Screen Duration

| Duration | Use Case |
|----------|----------|
| 5 seconds | Standard (recommended) |
| 10+ seconds | When including debriefing information |
| 0 seconds | Instant redirect (not recommended — disorienting) |

The screen includes a countdown and a manual "Continue Now" button so participants can proceed at their own pace.

### Debriefing

Include debriefing information in your completion message:
- Study purpose
- What was measured
- How data will be used
- Contact information for questions
- Links to related research

## Prolific Integration

### Setup

1. **In Prolific**: Set the completion URL to your HyperStudy experiment URL
2. **In HyperStudy**: Navigate to **Recruitment** → **Prolific Settings** and enable Prolific integration with your Study ID

### Completion Codes

When a participant completes the experiment:
1. A unique alphanumeric code (8-10 characters) is generated
2. The code appears on the completion screen
3. The participant is automatically redirected to Prolific with the code
4. Prolific validates the code for payment

Each code is unique per session and stored for verification.

### Redirect URLs

Redirects happen automatically based on the outcome:

| Outcome | Redirect |
|---------|----------|
| SUCCESS | Prolific completion URL with code |
| TIMEOUT | Prolific timeout return code |
| TECHNICAL | Prolific completion URL (for good-faith payment) |
| ABANDONED | No redirect (participant already left) |

### Testing

Before going live, test with Prolific's preview mode:
1. Complete the experiment via preview link
2. Verify the completion code appears
3. Confirm the redirect works
4. Check the code is accepted by Prolific

## Custom Redirect URLs

For non-Prolific experiments, configure a custom redirect URL in experiment settings. URL parameters can include participant ID, experiment ID, and completion timestamp.

You can also configure different redirect URLs per outcome (success, timeout, technical) to route participants to different landing pages.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Completion screen doesn't appear | Verify the final state is configured correctly |
| Redirect fails | Check the URL is valid; test in incognito; check popup blocker |
| No completion code | Verify Prolific integration is enabled in experiment settings |
| Duplicate completions | Session status prevents this automatically; check for page refreshes |
| Code not accepted by Prolific | Verify the Study ID matches between HyperStudy and Prolific |

## Best Practices

- **Test every completion path** before going live (success, timeout, error)
- **Keep completion screens to 5-10 seconds** — long enough to read, short enough to not frustrate
- **Thank participants sincerely** and explain next steps
- **Provide contact information** for questions about the study
- **Include debriefing** when your IRB requires it
- **Test Prolific integration** with preview mode before publishing your study

## Next Steps

- [Participant Flow Guide](./participant-flow.md) — Complete participant journey
- [Prolific Integration](../recruitment/prolific-integration.md) — Detailed Prolific setup
- [Data Management](../data-management.md) — Accessing completion data
- [Experiment States](./experiment-states.md) — Configuring final states
