---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.7.24

Released: 2026-10-22

## What's Changed

## Changes since last production release

- fix(permissions): one rule for managing sharing; new experiments' data starts with owner and org admins (09d3bfd8c)
- test(deployments): update emulator tests to the owner-and-org-admin default (91b1da948)
- fix(permissions): experimenters always act in their organization; deployments default to owner and org admins (cf227cca4)
- fix(data-access): cache data-access answers per session; recognise platform admins (ece5b5377)
- fix(permissions): session, participant and recording data follow the data permission (a0ee56846)
- fix(deployments): deployments use the shared permission checks (d7e2b95db)
- chore: restore performance baseline rewritten by a local test run (62569bf9f)
- fix(permissions): every share check gets the resource id and type (4c38bcfa1)
- fix(permissions): shares work for duplicate, update and variables; name external users (ef3282989)
- fix(org-settings): API key sharing icons render through Icon.svelte (493493a59)
- ci(promote): dispatch the agent adapter spec sync after each release (91b7d3118)
- feat(org-settings): share agent provider keys from the organization settings panel (a78f32613)

---

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


[View all v0.7 releases →](/release-notes/v0.7)

## Previous Versions

- [v0.6 releases](/release-notes/v0.6)
- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
