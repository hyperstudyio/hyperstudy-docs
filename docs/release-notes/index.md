---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.23

Released: 2026-10-21

## What's Changed

## Changes since last production release

- fix(platform-admin): System explains a pod without health instead of crashing (08c9ede69)
- Merge remote-tracking branch 'origin/dev' into feat/platform-admin-overhaul (cf6a0089d)
- fix(platform-admin): review fixes for reports and alerts (d5e3db770)
- feat(platform-admin): settings say who saved them by name (9801b6e98)
- Merge branch 'worktree-agent-a9c69ad01c136af94' into feat/platform-admin-overhaul (a3b92029f)
- feat(platform-admin): hourly platform-reports job (74b13e93c)
- feat(platform-admin): alerts for account requests and organizations over quota (2573a295e)
- feat(platform-admin): report settings, weekly report and integrity check (989931285)
- feat(platform-admin): Settings page with Reports and alerts (11406e063)
- feat(platform-admin): settings, weekly report preview and test calls in the admin service (a3cb3f0bf)
- fix(data): the Conversation tab names every kind of voice context (be22d0809)
- docs: phase 4 plan and settings interface (63df7634e)
- Merge remote-tracking branch 'origin/dev' into feat/platform-admin-overhaul (7d655dc6a)
- fix(plans, platform-admin): quotas change only with the plan; last sign-in from Auth (61e436580)
- fix(recruitment): directly assigned participants show their assigned date (bfae545fb)
- fix(plans): organizations get the Plan definitions overrides, not the bare defaults (9fa1f9a3e)
- fix(platform-admin): review fixes for phase 3 and enrollment (b208443a0)
- Merge remote-tracking branch 'origin/dev' into feat/platform-admin-overhaul (1e79c6e8c)
- fix(enrollment): one cross-pod limit on revealing whether an address is a participant (162e26245)
- fix(invitations): private invitation dates show, and the list omits accept tokens (e8a0e3f01)
- fix(enrollment): an existing participant invited by email is added, not emailed (1643c9334)
- Merge branch 'worktree-agent-af6e4ec98d773e24c' into feat/platform-admin-overhaul (b57f87e1c)
- feat(platform-admin): billing page reads Stripe (23c09e988)
- feat(platform-admin): organizations master-detail (1e6b8790a)
- feat(platform-admin): users table with detail drawer and platform admin switch (9c15c0802)
- Merge branch 'worktree-agent-a487986359706423a' into feat/platform-admin-overhaul (2eb0349f1)
- feat(platform-admin): sidebar shell, Home and System sections (051aa256f)
- chore(tests): remove the duplicate AuditSection test and a skipped VideoAdmin test file (fe8b33b54)
- Merge remote-tracking branch 'origin/dev' into feat/platform-admin-overhaul (d5f7efd02)
- fix(platform-admin): review fixes for grant/revoke, participant lookup and invitations (32f4e1e5e)
- feat(platform-admin): read-only billing summary from Stripe (8e93ab0eb)
- fix(platform-admin): organization admin detail, plan change and type filter (db84f3f04)
- docs: record platform admin grant/revoke, exact participant lookup and production migrations (bac1df44f)
- fix(auth): a platform invitee owns only the organization the invitation names (d01721eb7)
- refactor(platform-admin): remove Analytics, orphaned metrics routes and the admin socket (5fa108958)
- fix(auth): private enrollment finds participants by complete email only (b238b5671)
- feat(platform-admin): audited endpoint to grant and revoke platform admin (46b2058e9)
- fix(agents): review fixes: voice context order, role waiting screens, avatar cleanup (6353c24da)
- feat(agents): drag and drop an avatar for an agent in the Agent Designer (a7fafe31a)
- feat(agents): an agent persona can have an avatar, shown as a person's would be (0d5326cb4)
- feat(voice): voice agents see the screen and are told what happens in the study (30a7fbdc9)
- fix(agents): disguised delimiters are caught; a failed image note omits its URL (b849fa352)
- fix(agents): images an agent is shown are fetched through the SSRF guard (78c8990ac)
- fix(agents): participant text cannot close the prompt's data delimiters (a286dbf51)
- fix(agents): screen text is read safely from participant-influenced input (81fe1f72a)
- feat(agents): agents know the other participants by name (a8e82c52c)
- feat(agents): agents see what a participant of their role sees (18cf11831)
- fix(auth): rate limit participant search per account (f35ab131c)
- fix(platform-admin): review fixes for the user directory and summary (5a99b8b20)
- fix(migrations): 010 makes a kept workspace visible (02eaa87d3)
- fix(auth): a participant promoted to experimenter gets a personal workspace (7acb6beed)
- docs: record platform admin overhaul phase 2 progress (320fa6281)
- feat(platform-admin): Overview reads a server summary built from count() (dd3a8cb78)
- fix(auth): experimenters can no longer list every account (8d437b311)
- feat(platform-admin): server-side user directory with search, filters and paging (48021f1b8)
- fix(platform-admin): organization search covers every organization (e84096e1d)
- fix(metrics): recent sign-ups count accounts whose createdAt is an ISO string (5f5a58f99)
- docs: record platform admin overhaul phase 1 progress (03f47f25c)
- fix(monitoring): public health check exposes status only, no false memory alarm (fa1d651f2)
- fix(platform-admin): organization dates no longer show Invalid Date (15849aea0)
- fix(usage): recomputing usage no longer erases LiveKit and recording counters (870936195)
- chore(migrations): make experimenter orgs visible, retire participant workspaces (fd4fd9784)
- fix(organizations): new organizations appear in the platform admin list (4a1a318b4)
- fix(auth): only self-registered experimenters get a personal workspace (e9f2aad42)
- chore(frontend): remove NIH funding acknowledgement from page footers (926f3e9c0)
- fix(invitations): permission groups are not invitations; remove the emailed group-invite path (93f399c66)
- fix(security): a folder's visibility reaches only items its owner may change (45c4608d0)
- fix(invitations): a group invitation link works from the login page (19d91d70c)
- fix(security): only owners and org admins decide who can see a resource (604f0acc4)
- fix(security): a group invitation is accepted only through its emailed link (8d640ae87)
- fix(security): share rights let you share, not take control (4919dad13)
- fix(security): groups cannot impersonate an organization or a user (6c61ce130)
- fix(media): a failed lookup is an error, not an empty or public-only list (63cede946)
- fix(security): an organization's resources are managed and opened only by its members (9f84ed2c9)
- fix(agents): agents shared from another organization appear in the list (0c7a34d76)
- fix(auth): deleting a user removes their org memberships (96f47ae1c)
- feat(agents): expose the voice speech threshold and lead-in audio in the Agents tab (0849e30f4)
- fix(v2): a room's session and its agents are created once (e57608356)
- fix(frontend): page footers show the real build version, not 1.0.0 (6035cb988)
- refactor(agents): remove the persona language field, which nothing read (e8d35dfc9)
- fix(voice): the agent's voice is recorded: it is ready once its voice is in the room (5bb311533)
- test(voice): the preview tests pass on Node 20 (2f836dea4)
- feat(voice): hear a voice before choosing it (8ec829099)
- test(voice): the researcher's prompts reach the voice engine (ab41fcb4b)
- fix(voice): speech after a pause keeps its time; false starts; transcription language (28fbab5a9)
- fix(data): backend events keep their own time and id, and are written once (ad4ec5121)
- fix(voice): when the study changes, the voice agent is told, and nothing stale is acted on (4c81dec3f)
- fix(voice): a participant cut off mid-sentence by a screen change no longer stalls the agent (60124cafe)
- feat(agents): a versioned agent adapter spec, generated from the code (a34246f68)
- feat(voice): voice agents answer on-screen questions and rating pauses (fed48acc4)
- feat(agents): the designer warns when a study's agents would not start (41a19cd16)
- fix(agents): say why a room's agent could not start, to the experimenter and the participant (b23c83a34)
- fix(voice): conformance covers every turn-detection mode a study can use (14a8a191b)
- fix(designer): renaming a state from the state list saves again (a898b14db)
- docs(voice): conversation data lives in the event stream (062180347)
- fix(voice): typed chat to a voice agent gets a reply (bac898ffe)
- feat(voice): Conversation tab in the data viewer; transcription setting (f1fb484cc)
- feat(voice): voice data type in the v3 data API (0ed42cff4)
- feat(voice): record both sides of the conversation in the event stream (c6cc93796)
- feat(voice): spawn voice agents with the realtime engine as their brain (2d9a9693a)
- feat(voice): voice settings in the agent designer and the experiment's Agents tab (4f7462b3d)
- feat(voice): persona voice block and experiment voice turn-taking settings (81b78e995)
- fix(agents): persona saves no longer drop chat initiation settings (9dd1eb0e8)
- docs(voice): defer agent id concealment until voice works end to end (6f52e6dca)
- feat(voice): one LiveKit presence for agent chat and voice; agent looks human (e8784ffa2)
- docs(voice): default engine turn detection is server_vad (500 ms), per experiment (517812201)
- feat(voice): conformance runs against OpenAI; measure end-of-turn delay (07d1c074c)
- feat(voice): voice bridge core for engine mode (a3ad8397f)
- feat(voice): playout queue and playout clock (519940e06)
- feat(voice): HRP conformance suite, report store and CLI (479503cb4)
- feat(voice): HRP client for the dial transport (7698cd1ce)
- docs(voice): Phase 0 complete; room identity shipped in v0.7.22 (1668a13e1)
- feat(voice): mock HRP engine for bridge and conformance tests (4abf97f59)
- feat(voice): HRP core event builders and inbound event validator (76ccecce2)
- docs(voice): record decision to keep V1 Prolific display names (2ca9a0170)
- docs(voice): security and privacy section; room identity gates real-participant voice sessions (de5c0e472)
- fix(runner-v2): never use a participant's email as their display name (ec1d9b329)
- feat(agents): persona display name shown to other participants (f731f0def)
- docs: voice agents design (HyperStudy Realtime Profile, voice bridge, engines) (37eddcc8c)

---

## v0.7.22

Released: 2026-10-19

## What's Changed

## Changes since last production release

- test(emulator): join with real sessions under the server-authoritative binding (1b48c3155)
- test(emulator): let the emulator hosts come from the environment (340279dde)
- test(waiting-room): replace inert done-callback socket tests with real ones (88517cae6)
- docs: promotion to production is manual only (2f9d4f1a9)
- docs: record that deployments of a study share the lobby and waiting room (a63e5ab74)
- fix(security): attribute live chat to LiveKit's authenticated sender (edb440efd)
- docs: note session-token readability and live chat sender as follow-ups (51373ac21)
- fix(security): address review of the session-bound joins (cd3aa3806)
- fix(waiting-room): write a match's room and session assignments atomically (989b072da)
- fix(security): actually verify LiveKit webhook signatures (23891a466)
- fix(security): remove the REST join endpoint (3ef9b268c)
- fix(security): only a caller's own session may join the waiting room (70b91ead3)
- fix(security): issue LiveKit tokens from the caller's session, not the request (fa05d192b)
- fix(security): hold V1 joins and abandons to the caller's own session (1af22d7c7)
- fix(security): hold V2 joins to the session's assigned room, role and experiment (c4ebd8ed8)

---

## v0.7.21

Released: 2026-10-18

## What's Changed

## Changes since last production release

- fix(designer): typing a font size in TextStyleControl lands on that size (f14ce130f)
- fix(experiment): address review of experimenter message style (f36099790)
- feat(experiment): configurable text style for experimenter messages (35f6b43bb)
- test(emulator): assert the owner receives the cleaned-room questionnaire broadcast (217f59806)
- refactor(frontend): drop the last caller of the deleted room write routes (65758d82c)
- fix(rooms): delete the write handlers of the legacy sessions/rooms router (0c4acf0c8)
- docs: record the unauthenticated V1 /sync namespace as an accepted gap (8b1eac358)
- fix(rooms): grant room data access through experiment permissions only (5f4c620ae)
- fix(ownership): read experiment owner from ownerId only; fix invitation-decline notification (dc887cc3e)
- refactor(redis): one generic lock on stateManager for matching and background jobs (f89720e06)
- perf(questionnaire): route out-of-memory completions through the shared broadcast (5064d8c2c)
- fix(auth): report a verified email even when the follow-up user reload fails (de1ef9a7c)
- fix(tracking): drop the experiment owner cache (5b16e6dd7)
- fix(platform-metrics): share one in-flight lookup per key across caller types (29fc547ac)
- fix(tracking): merge state changes only into sessions the server updates (4874f5b71)
- fix(waiting-room): bound sweep config staleness to 60 seconds (3c0a580e3)
- fix(background-jobs): log once per job when skipped as disabled (652d1c4bc)
- Merge branch 'fix/email-verification-route' into integration/cost-perf-cleanup (33b7064fc)
- docs(claude): fix stale source paths in the architecture section (767e94ba0)
- chore(frontend): remove dead shared-experiments loaders and unused dev deps (226f0b5a1)
- chore(backend): drop the no-op stopSyncMetricsCollection (a567f1e9a)
- fix(cleanup): run the runaway-recording watchdog in production only, one pod per tick (c489375f4)
- Merge branch 'chore/frontend-dead-code' into integration/cost-perf-cleanup (c2ce71ee2)
- Merge branch 'perf/frontend-bundle-split' into integration/cost-perf-cleanup (c542747f4)
- Merge branch 'chore/backend-dead-code-scripts' into integration/cost-perf-cleanup (c5dfbd662)
- Merge branch 'perf/firestore-read-waste' into integration/cost-perf-cleanup (dd5bfe393)
- Merge branch 'perf/deployment-tracker-incremental' into integration/cost-perf-cleanup (97b1e0f59)
- Merge branch 'chore/remove-metrics-service' into integration/cost-perf-cleanup (b2a4a69a1)
- Merge branch 'fix/prometheus-route-label-cardinality' into integration/cost-perf-cleanup (96bf72111)
- chore(admin): remove unused UserManager and UserTable (a88fe6cbf)
- fix(auth): verification and password-reset links land on real pages (9759d9043)
- perf(frontend): keep experimenter-only shared components out of the entry (2d3cad3e2)
- docs(claude-md): drop the removed RTDB URL from production-project evidence (f172f01f0)
- docs(legal): remove LogRocket from the privacy policy (1ac798426)
- fix(jobs): run HLS health check and stale-session expiry on one production pod (abbb9745d)
- perf(waiting-room): sweep reads requiredParticipants from Redis (a813065b9)
- chore(scripts): drop stale org-migration advice and a hard-coded one-off repair (5f0acfcfb)
- perf(v3-ratings): fetch only the page's pause/play events for sparse exports (6dbac11c3)
- chore: remove stray repo-root scripts and manifests (778fc5d76)
- chore(scripts): delete completed one-off migrations and broken scripts (d1827e5b4)
- chore(scripts): delete backend/scripts/archived (beb20c3c5)
- docs: add metrics-service removal runbook and mark stale references (6ecb94db5)
- perf(metrics): share platform metrics across pods and stop dev gauge scans (3adbdcebf)
- chore(deps): drop unused backend dependencies (49ae421a9)
- chore(backend): remove redisExperimentStore and the 410 system-metrics stub (32a54c6e4)
- chore(backend): remove unreferenced modules and dead exports (214464501)
- chore(frontend): remove stray console test scripts and unused story wrapper (c9f7eaff3)
- chore(frontend): remove unused experiment, state and utility exports (205e78c2e)
- chore(infra): remove the orphaned metrics-service (8c90037dc)
- chore(frontend): remove unused service, network and auth exports (d531074bc)
- chore(routes): remove route files and handlers with no callers or traffic (24773a46b)
- perf(frontend): lazy-load experimenter and admin routes (7070ec127)
- fix(security): remove dead debug, test-fixture and legacy auth/session routes (115ed8c36)
- refactor(metrics): drop speculative mount-param remapping from route label (acb805c04)
- perf(tracker): take the experiment owner from room data; single room-progress broadcast (bf0a100b7)
- fix(metrics): bound the HTTP route label to route templates (1116c3339)
- chore(frontend): remove unused media, device and kernel exports (ddc91c733)
- perf(agent-monitor): coalesce room-progress refetches and stand the launch poll down (84d7955fb)
- perf(tracker): merge recruitment:updated in place, coalesce the rest into one refetch (bd753f4d3)
- chore(frontend): remove featureFlags module and unused imageService imports (c944c3f0c)
- chore(frontend): remove dead experimentService room helpers and dashboard summary (e305bb310)
- perf(tracker): emit recruitment:updated once per event and cache owner lookups (1531ce258)
- chore(frontend): drop the unused Firebase Realtime Database client (041afe086)
- chore(frontend): remove LogRocket (458d45fe3)
- chore(frontend): remove unreferenced auth, settings and experiment helpers (84df8b51e)
- chore(frontend): remove unreferenced data-management services and components (55c8cabd8)
- chore(frontend): remove unreferenced admin room/user components and barrels (9189aaba4)

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
