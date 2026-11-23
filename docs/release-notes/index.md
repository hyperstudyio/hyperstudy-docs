---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.38

Released: 2026-11-23

## What's Changed

## Changes since last production release

- fix(frontend): fixed-name static files are no longer cached for a year (3a28f54f4)
- fix(frontend): browsers ask for the app shell again on every load (14f23798b)
- fix(v2): a room pool's merged used list is held to the variable size limit (07293bd08)
- fix(v2): room pools survive simultaneous draws; reconnecting screen with a spinner (bdeba43b2)
- fix(data-export): V1 runs no longer export a stray "unknown" component row (10c94f5e2)
- fix(v2): room-scope stimulus pools track what they have used (d971cbd02)
- test(waiting-room): emulator mocks provide the per-socket and dead-pod removal the manager now calls (896e45600)
- Merge fix/review-fixes-backend (pre-production fixes) into review integration (b355c5d25)
- fix(dashboard): a burst of experiment broadcasts costs one reload in flight and one follow-up (7ee792b47)
- fix(sockets): a default-namespace socket holds its rooms only while its token is good (478c40ec2)
- fix(agents): an agent's answer names the visit of the state it was decided for (2968f5506)
- Merge fix/review-fixes-stimulus (shown-stimulus extension) into review integration (43eab622c)
- feat(data-management): show what was displayed in the Components table by default (d1e19a090)
- feat(data-export): an AudioRecording row says what was displayed under V2 (22055b98a)
- feat(focus-components): record which video was shown, and what an unanswered question displayed (0c9b59bb9)
- test(sockets): recognise the shutdown notice by event name in the broadcast guard (31d4337ab)
- Merge fix/review-fixes-stimulus into review integration (234c2ff14)
- fix(templates): a template that writes a variable it names resolves once, not for ever (3cff06e98)
- Merge fix/review-fixes-v2visit into review integration (3aa43a77b)
- Merge fix/review-fixes-frontend into review integration (e03488364)
- Merge fix/review-fixes-backend into review integration (768b90dee)
- feat(data-export): a resolved column for what a component displayed (1f7a75da9)
- feat(focus-components): record what each templated field displayed (c1903eb35)
- fix(events): back off the server event queue while its batches keep failing, and report the outage once (8039bf211)
- fix(sockets): re-authorize joined experiment rooms on a new token and recognize platform admins (b91841f92)
- fix(api-v3): shorten the API key cache to 60 seconds so a revoked key stops working on every pod within a minute (1a7f30743)
- fix(recording): size unload beacon chunks in UTF-8 bytes, not UTF-16 code units (16ee22473)
- fix(image-proxy): bound the proxied image in bytes and keep the time limit through the body (ec7d5ff9e)
- fix(questionnaire): a retried submit delivers the queued answers instead of recording them again (2c80a6e76)
- fix(deployments): End Date job checks the date again when it ends a deployment, reads dates strictly, and fails when recruitment was left open (cf857ddad)
- fix(prolific): deployment study operations use the caller's Prolific key, not the experiment creator's (5be082171)
- fix(recording): beacon a high-priority event whose POST is in flight when the page unloads (2e8973d33)
- fix(waiting-room): prune pre-deploy queue entries of a replaced pod, and record a process as ended as soon as its sockets close (107e5bf68)
- fix(prolific): require a membership document before an organization's shared Prolific key is used (2c66849f1)
- fix(v2-runner): tell a fresh visit to a state from a reconnect replay of it (edeabeca0)
- fix(usage): count a V2 participant session and mark it counted in one commit (d10dada56)
- fix(tracking): stop returning participant session tokens from the deployment tracking list (2ef7856c6)
- fix(sockets): broadcast experiment and media changes only to authenticated sockets, without experiment content (ee487ba75)
- fix(livekit): count participant minutes on whichever pod receives participant_left (4a721478f)
- fix(events): a request that failed part way is not stored twice when sent again without clientEventId (e35a3c9a0)
- fix(events): keep a refused event whole before acknowledging it (2fe244b2d)
- Merge fix/review-fixes-frontend into review integration (2a1553847)
- Merge fix/review-fixes-backend into review integration (31aa30c1c)
- fix(templates): draw each {sample()} once per state in Likert, MultipleChoice and VAS (00c3ad40b)
- fix(v2-runner): a re-delivered completion does not repeat the transport's side effects (76cec1093)
- fix(usage): count LiveKit usage once with a batch, not a transaction on the organization (716ddf7b9)
- fix(usage): LiveKit minutes do not count egress recorder participants (eda87164d)
- fix(deployments): ship the End Date CronJob suspended; platform transitions check no user (9ca9063f8)
- fix(v3-events): refuse a batch whose experimentId or roomId is not one document id (d8983f586)
- fix(socket): an experiment-room check that failed is made again (d4630bec1)
- fix(tracking): observer socket admits admins the way the REST routes do (7c8f00221)
- fix(security): strip the participant session token from every event and room response (00480aa9a)
- fix(text-input): record the answer once when Enter lands inside the debounce (ab08dbcad)
- fix(templates): follow variable changes while keeping a state's {sample()} draw (e376c1fb2)
- chore(k8s): hold the Traefik access-log change out of this batch (5600361e9)
- Merge fix/review-perf-frontend into review integration (539166282)
- Merge fix/review-bugs-frontend into review integration (a61049f6b)
- Merge e2e6db8d5 into review integration (6203bc79e)
- Merge fix/review-sec-http into review integration (109103326)
- Merge fix/review-bugs-data into review integration (e04cf4942)
- Merge fix/review-bugs-matching into review integration (531e50de8)
- Merge fix/review-sec-xss into review integration (dd1747814)
- Merge fix/review-deadcode-files into review integration (0be9d2b89)
- fix(text-input): a pending auto-submit does not land in the next state (7c378ba29)
- fix(v2-runner): countdown uses the clock offset and ends with its state (e22f5fefa)
- fix(ratings): ContinuousRating sampleIndex keeps increasing (087b5ebfc)
- fix(v3-auth): drop a cached API key when it is revoked or its scopes change (a4f1cfbaf)
- fix(v2-runner): flush queued events before Leave Experiment closes the session (1a16e436c)
- fix(questionnaire): a failed final submit keeps the form and the draft (5a78136cb)
- fix(monitor): require edit access to control a running session (9310dccd6)
- fix(recording): stamp every event and rating with a clientEventId (8960907d6)
- fix(usage): LiveKit minutes are counted once per participant session (8d37cf4af)
- fix(usage): recording storage is counted, once per egress (7a7c14f1f)
- perf(data-management): hold fetched datasets in .raw instead of deep  (70dfba386)
- fix(build): production drops console.log/info/debug; only the flag "true" keeps them (6bc6a6534)
- perf(frontend): load LiveKit and the runners only on pages that lead into an experiment (d011ae2ca)
- fix(recording): keep events deliverable after the session is completed (bf860972c)
- fix(waiting-room): check-room-assignment answers only for the caller (3fa9a2344)
- fix(v2): count V2 participant sessions against the monthly quota at join (7e97045cb)
- fix(deployments): enforce the End Date, through the end of that date (d736e6507)
- fix(v3-events): require write access to every experiment in an events batch (d8fd16517)
- feat(k8s): NetworkPolicy manifests for default-deny ingress, not applied (e2e6db8d5)
- fix(v2-runner): deliver a completion the engine never received after reconnect (96137ad44)
- fix(v2): stop a room's recording by room, so it is stopped after a pod-loss resume (19b5eb060)
- fix(usage): reconciliation leaves a counter alone when its query failed (140d8a30c)
- fix(image-proxy): relay only raster images and hold redirects to the allowlist (b521e8f2f)
- fix(server): remove the unauthenticated pod info and pod lookup endpoints (39e6259cd)
- fix(v4): a re-sent event or rating is stored once (3973e55b9)
- fix(prolific): require experiment access on the Prolific study routes (febf7f90b)
- fix(v2-runner): draw a state's {sample()} content once (3990d0879)
- fix(logging): keep session tokens out of the Traefik access log and Sentry (c1906f00e)
- fix(events): rejected-event records are deleted with their rooms and hold no session token (ef660d026)
- fix(v2): a finished room is never run again when a participant returns (198eb4d82)
- chore(infra): remove the pre-Kubernetes docker-compose and nginx stack (e8805aa99)
- fix(email-templates): show the HTML template preview in a sandboxed frame (b36003045)
- fix(designer): sanitize the consent and instructions previews (904e27eb3)
- fix(socket): default namespace takes identity from a verified ID token (d76d7064c)
- fix(prolific): bind the Prolific API key to the caller (1779a5163)
- chore(scripts): remove unreferenced one-off scripts (ade433495)
- fix(wal): adopt another pod's log only when that pod is provably gone (a973e62ab)
- fix(wal): keep recovered events until their replay has succeeded (6a739fc4d)
- fix(tables): render SortableTable cells as text unless the column opts in to HTML (a25a512ef)
- fix(events): one event Firestore refuses no longer blocks the rest (45b407fa5)
- fix(rooms): stop returning participant session tokens in room responses (eb89162fe)
- chore(cleanup): remove components and engine scaffolding reached only by their own tests (757c2196f)
- fix(waiting-room): do not match queue entries whose session ended or whose pod is gone (b8616c21f)
- fix(data-management): render VirtualTable cells as text unless the column opts in to HTML (d38512089)
- fix(firestore-rules): deny client reads that bypassed the API's permission model (ca53a3ee0)
- fix(waiting-room): a replaced socket's disconnect no longer removes a live waiter (bb4954601)
- chore(cleanup): remove unreferenced files, skipped tests and repo debris (58506a445)
- fix(clock): review fixes for the after-session fit and device marker shift (0e0a7a0e8)
- feat(export): after-session clock fit for V2 events and device recordings (c10ab0d9d)
- fix(devices): Kernel markers keep the time as recorded (5456d240e)
- fix(devices): shift device markers only by an offset that beats its error bound (86c17141b)
- fix(devices): server-time device markers on this computer's clock, in both runners (2f1d93c03)
- fix(device-setup): Neon setup stays up while the recording starts (ab5d780dd)
- fix(devices): send Neon markers on this computer's clock (9e09dd2b0)
- fix(clock-sync): review fixes for saving raw clock-sync exchanges (e55f48514)
- fix(clock-sync): cap saved exchanges per session and limit only owned sessions (3af3dc234)
- feat(clock-sync): save every raw clock-sync exchange (3c77ad16c)
- feat(device-setup): raw Neon recording on the Neon setup screen (071b2db9f)
- fix(participant): one Leave Experiment during V2 device setup (082c32be7)

---

## v0.7.37

Released: 2026-11-17

## What's Changed

## Changes since last production release

- chore(migration): 013 re-correct V2 event timestamps skewed by queued clock-sync pings (153022422)
- fix(v2): clock-sync pings no longer wait behind join-experiment (061078320)
- refactor(devices): stop sending FRENZ LSL markers; the study recording saves them (aceeeb841)
- ci(claude-review): deny every place a token is readable; check the comment (0053b4f72)
- ci(claude-review): give the reviewer no shell (6b7cd08b3)
- ci(claude-review): strict tool list, release-aware prompt, review fixes (68efb52e8)
- ci(claude-review): keep the token out of the checkout and skip fork PRs (04dc82695)
- ci: review pull requests with Claude Code (09b83b1f7)
- fix(experiment-settings): show TTL and Neon options inside their device cards (5bd945a84)
- fix(participant): draggable windows float above the header; text chat on top (aded22c13)
- fix(participant): keep the header and Leave Experiment above every participant overlay (ee4852431)
- fix(device-setup): never trap a participant in setup; V2 survives a dropped socket (7febf0d23)
- fix(experiment-settings): stop offering EyeLink while Bridge support is unfinished (ff00b65a4)
- fix(data): list and serve device recordings from every environment (4ae40df8f)

---

## v0.7.36

Released: 2026-11-13

## What's Changed

## Changes since last production release

- ci: name the Firestore rules Node setup steps 24.x (076d429cf)
- feat(data): download device recordings as CSV, whole or one stream at a time (fb792846f)
- fix(device-setup): no recording dialog flash between device setup and the study (517a21def)
- ci: run CI and production images on Node 24 (f0853a537)
- feat(designer): add a FRENZ device card (a030da24a)
- fix(socket): send a fresh Firebase token on every experiment socket handshake (a5c9db8f3)
- docs(perception): extraction by hand per video for now; admins enter the group's Hugging Face and RunPod keys (e2b6e0049)
- fix(profile-pictures): no reader serves a stored link; rejoins show the fresh one (ccceb255c)
- fix(profile-pictures): store the picture's path and sign a link wherever it is shown (0da0783c0)
- fix(v1): leave the loading screen when the server refuses a join to a missing room (45100dca0)
- fix(experiment): refuse V1 joins to rooms the waiting room never created (8f5c2adf9)
- fix(upload): failures answer with a generic error, internals stay in the log (b7f4d5bdc)
- fix(audio): only a session's participant uploads its audio; answers hold the path, not a permanent link (5b47f5a47)
- chore(frontend): remove dead recording and signed-URL client code (103a22d1f)
- fix(media): a reused signed link always has its full lifetime left (f954c74d1)
- fix(media): parse storage URLs by exact host, cap signed link lifetime at 3 hours (8dcbd52fb)
- fix(recordings): remove the open recording routes, match a room's recordings exactly (35ab64e9f)
- fix(images): sign only image folders, never participant recordings (b38f76f3b)
- fix(upload): create the video once, and let a multipart completion be retried (cf6c20de7)
- fix(upload): complete only uploads the server issued, from the context it validated (aa92a98e5)
- feat(recordings): capture Neon raw LSL with shared study recorder (9c6820339)
- Merge remote-tracking branch 'origin/dev' into codex/bridge-cloud-recordings (b422693fd)
- fix(frenz): verify live status and serialize V2 recording boundaries (dd4d3fc8d)
- fix(perception): hash the bytes S3 holds after the read, and read when the lookup fails (f748e44c5)
- fix(perception): one hash per S3 key, reused only for the same bytes (855ee2d10)
- fix(perception): review fixes for phase 1 storage (b13b1ac7c)
- feat(perception): video sha256 and perception bundle storage (integration phase 1) (d5652b10d)
- Merge remote-tracking branch 'origin/dev' into codex/bridge-cloud-recordings (2d01c6121)
- chore(frontend): bump svelte to 5.57.3 (18733cbde)
- test(recording): include device artifacts in counts fixture (8721d233c)
- fix(recording): discover FRENZ bands from short LSL descriptors (3b4ba7c30)
- fix(recording): validate cross-runtime manifests and rejoin parity (3d0661fc5)
- feat(recording): connect Bridge study capture to verified cloud artifacts (9d4209a5f)

---


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
