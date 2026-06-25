---
sidebar_position: 5
---

# Release Notes

Stay up to date with the latest features, improvements, and bug fixes in HyperStudy.

## Latest Releases

## v0.6.84

Released: 2026-06-25

## What's Changed

## Changes since last production release

- fix(recordings): unwrap array-wrapped mint envelope so downloads return the signed url (0561b0598)
- fix(eyetracking): guard tab NaN, record calibration pointCount, test residual formatter (6f3cfb920)
- fix(calibration): honest requireCalibration label + up-front exit when gaze unavailable (5c46a7043)
- test(eyetracking): cover null-timestamp sort branch and error-propagation behavior (265984787)
- fix(eyetracking): stop swallowing non-index query errors; surface _warnings for missing-index (8b2ad3030)
- fix(calibration): wire accuracyThreshold and drop the three deferred no-op config knobs (a896b41fc)
- fix(eyetracking): stop calibration remount, untrap required-calibration failures, guard+flag validation (b220dc613)
- fix(eyetracking): route recordCalibrationToDataset through the shared record contract (a58b16031)
- fix(eyetracking): guard EyeTrackingTab against -Infinity on empty perPoint (8ced741fa)
- fix(eyetracking): drop redundant orderBy that forced a swallowed composite-index requirement (6c5152ea3)
- fix(eyetracking): make null-timestamp sort comparator antisymmetric (552d7ac1d)
- feat(eyetracking): wire Eye Tracking tab into DataViewer (lazy-loaded) (9c83522a5)
- feat(eyetracking): add EyeTrackingTab rendering calibration + validation records (f7688ad85)
- feat(eyetracking): add EYETRACKING data type + getters to dataServiceV3 (5a76c4e3e)
- feat(eyetracking): count calibration+validation events for tab visibility (bf2a93bfd)
- feat(eyetracking): add /api/v3/data/eyetracking routes + mount + docs (e9d59131d)
- fix(eyetracking): guard null timestamps in processor sort (e9c5a80f4)
- feat(eyetracking): add EyeTrackingProcessor reading calibration + validation events (8933457bb)
- feat(calibration): hide accuracyThreshold field in validate mode (256edd153)
- feat(calibration): register calibration focus component (V1 + V2 + designer) (a95ab168b)
- test(calibration): cover log-only completion path (no LSL, no apply) (2ed6b0211)
- feat(calibration): add CalibrationComponent focus wrapper with live/log-only modes (e78aa6723)
- fix(calibration): guard residualError.toFixed against undefined in result panel (8d1f34d4e)
- feat(calibration): GazeCalibration supports mode/liveGaze/targets/timing + marker log (21f57a47e)
- feat(calibration): add recordEyeTrackingEvent service export (77659835a)
- feat(calibration): add buildEyeTrackingRecord decision logic (95b5cdd24)
- feat(calibration): add computeValidationError for validate mode (be9bddc6e)
- feat(calibration): add generateTargets for 5/9/13-point grids (8f6208816)
- docs(calibration): implementation plan for embeddable calibration focus component (56136030c)
- docs(calibration): model live-LSL vs native-Pupil-recording data split (1d1c90cfc)
- docs(calibration): restore validation mode, drop only pass/fail gating (912a5747b)
- docs(calibration): drop validation mode from spec; calibrate-only first cut (ef82dbd32)
- docs(calibration): spec for embeddable eye-tracking calibration focus component (7d4d07a30)
- Merge remote-tracking branch 'origin/dev' into worktree-prolific-bugfixes (4abdb1cdb)
- fix(prolific): stop clean V2 completions minting ABANDONED + skipping questionnaire (76c22a6be)
- fix(recordings): web download/preview pass disposition; surface preview load errors; restore url guard tests (0cc5dd444)
- fix(recordings): mint download URLs with attachment disposition; 404 on missing object; read room-doc experimentId (ec2ffd1ce)
- docs(recordings): drop stale blob JSDoc + clarify mint route comments (c9078412a)
- fix(recordings): web download/preview use signed URL direct from GCS (no blob) (3aba12373)
- feat(data): getRecordingDownloadUrl mints a signed URL (replaces blob fetch) (175881b58)
- fix(recordings): make audio downloads consistent (legacy audio resolves + downloadPath) (44158e39b)
- fix(recordings): mint signed URL instead of proxying the file stream (95abd111c)
- feat(storage): parameterize signed-URL TTL (default unchanged) (e5541fb59)
- docs(recordings): implementation plan for signed-URL downloads (c4cbdc4b4)
- docs(recordings): clarify signed-URL TTL is a start window; bump to 60min (7b7c3f343)
- docs(recordings): spec for on-demand signed-URL download (web + SDK) (a9bdb4cec)
- fix(devices): anchor experiment.start at synchronized start, not per-participant setup (a405db065)

---

## v0.6.83

Released: 2026-06-23

## What's Changed

## Changes since last production release

- fix(infra): set duplex:half for undici streaming bodies (completes upload fix) (853ba70c5)
- fix(infra): route firebase-admin/gaxios through undici (fixes Google POST 'Premature close') (f43a0549a)
- fix(infra): force IPv4-first DNS resolution (pods have no IPv6 egress) (f8f1f19b3)
- fix(security): approval gate fails CLOSED (addresses review finding) (19ec88e0e)
- fix(security): drop checkRevoked from experimenter auth paths (caused V3/WS 500s) (ce606fea2)
- fix(security): gate unapproved experimenters on every auth path (020f58d7b)
- fix(auth): clear registration rate-limit error + lab-friendlier limit (45120ba4a)
- fix(recordings): leaner download stream + clear error mapping (a7931ba4b)
- feat(recordings): authenticated streaming download instead of signed URLs (ea48f0c4c)
- fix(v2-components): record final component.end at completion (c0fd17b71)
- fix(data): chat tab participant query drops redundant Firestore orderBy (e362512ce)
- test(v2): update stale tests for new V2 recording paths (8b1c6889f)
- fix(v2-components): generate focusComponent id in ensureSession (db92e524d)
- fix(v2-components): read stateIndex inside untrack; test end-event priority/timestamp (1130472c9)
- fix(v2-components): record component.start/end per state in V2 runner (335f78c40)
- fix(v2-chat): reset chat mode unconditionally in disconnect() (eb1b927bf)
- fix(v2-chat): persist chat.message via dataServiceV4 in V2 runner (66a48412a)
- fix(v2-diagnostics): collect + POST client diagnostics from V2 runner (4dea13e3b)
- feat(v4): add POST /session/:token/diagnostics to persist client diagnostics (28f72d6e4)
- fix(v2-sync): record viewer sync.metrics events via dataServiceV4 (4e746e144)
- fix(sync): make experimentId reactive in ShowVideoComponent + log dropped sync metrics (79e72bd3c)
- fix(data): match sessionId-keyed sync metrics in counts + sync tab (mirror legacy-chat fix) (71325380c)
- fix(experiments): ExperimentManager reads unified /api/v3/experiments (drop deprecated /v3/shared) (12aac55a7)
- perf(deployments): project list queries to consumer keep-list (Phase 2 T5) (3a4d247b1)
- docs(data): track deferred data-management bug-hunt fixes + next actions (186fb649d)
- fix(ratings): reset auto-select latch on participant switch + select either populated type (a2f48475f)
- fix(recordings): clamp pagination total so it can't be less than returned rows (e5417bd7c)
- revert(experiments): badges resolve with data-type again (permMap reuse changed semantics) + keep doc fixes (7cc4a556a)
- perf(experiments): reuse access-filter permMap for badges (one resolver call) + doc fixes (494f8e7c0)
- docs(experiments): deprecate internal /v3 + /v3/shared (superseded by unified read path) (a0de0ac5b)
- refactor(data): experiments table reads unified /api/v3/experiments?view=summary (one call, cross-org included) (3f9c33fd5)
- feat(api-v3): support view=summary on experiments list (dashboard-ready shape) (e55b9ef96)
- perf(experiments): summary .select() projection in listExperimentsForUser (T4 partial; full win needs T8 statesCount) (465d6fa5f)
- fix(api-v3): preserve single-experiment response shape (no per-user badges) + restore field-key anchor (565e95940)
- feat(api-v3): auth-conditional per-user permission badges on experiments list (481402a9f)
- feat(experiments): fold cross-org shares into listExperimentsForUser (public endpoint) (c448c221b)
- refactor(experiments): extract public list query into listExperimentsForUser service (edaa4f224)
- docs: revise consolidation plan — D3 secure resolver, D4 converge on public/offset (9ace9d915)
- fix(experiments): restore /admin/all room-count enrich + align withOrgName default (5a03da42e)
- refactor(experiments): extract shared enrichExperiments (no behavior change) (ddd9dd3f9)
- test(experiments): characterization net for the 3 list endpoints before consolidation (bda819301)
- docs: lock decisions + bite-sized TDD task breakdown for experiments read consolidation (d6e737bcd)
- docs: experiments read-path consolidation design (one service, two facades) (b65dc13db)
- docs(perf): correct Phase 2 plan — re-target T4, add statesCount/T8 dependency (5246c3b3c)
- perf(rooms): project list query to mapped fields only (Phase 2 T6) (fe524b2fb)
- fix(data): three data-management refactor bugs found in review pass (6ae8072bc)
- fix(components): render missing component response as NaN (not N/A) (be3c813e3)
- fix(recordings): sign URLs against the file's actual bucket + populate fileSize (7f5ffb086)
- fix(components): include response-only components (no start/end events) instead of dropping them (b559f8f3f)
- fix(rooms): never record EG_ egress identities as participants (keeps count aggregate correct) (b1be86e38)
- chore: untrack force-committed .superpowers scratch reports (76cc5b3a4)
- perf(rooms): count participants via aggregate instead of reading every subcollection doc (035e242ed)
- docs(perf): add perf-t1 batch permission report (7eace2b0f)
- perf(experiments): batch permission resolution to kill serial N+1 in list endpoint (e76b4b6c7)
- perf(deployments): count active sessions via aggregate instead of scanning rooms (34b50698b)
- fix(recordings): mint fresh signed URL from storagePath instead of reusing stale fileUrl (31185f894)
- fix(chat): degrade gracefully when legacy sessionId index isn't built yet (11077daf7)
- fix(chat): match legacy sessionId-keyed chat docs at room/participant scope + counts (c7a3db127)
- fix(recordings): resolve URL from subcollection + skip full-bucket GCS scan on common path (b3e056d3b)
- fix(data): unwrap array-wrapped v3 envelope in getParticipantDataCounts (e28fcee80)
- fix(data): guard ratings badge against NaN + test real _hydratePersistent path (e325c00e4)
- fix(cache): preserve expiry across sessionStorage hydration + never persist empty results (523b7d61e)
- feat(data): show participant data counts on tabs before they're opened (ea3404ec0)
- fix(counts): participant-filter room recordings subcollection count (f143e8a08)
- fix(storage): pass autoPaginate: true to bucket.getFiles for complete listing (4a7fc2cef)
- fix(recordings): primary-source rooms/{roomId}/recordings subcollection for room and participant scopes (a9379f1ee)
- feat(data): wire participant data counts into tab visibility (0556f57fe)
- test(data): per-query scope assertions for CountsProcessor token/participant paths (ce810cf5f)
- feat(data): add GET /api/v3/data/counts/participant/:participantId endpoint (8e58e5719)
- fix(data): DataViewer cancels each lazy-tab query exactly once (e99cb8303)
- fix(experiments): evict SWR cache on org switch (clearCache) + export key constant (54b7a7029)
- fix(data): subscriber-counted cancellation + catch background revalidation rejections (5451ec554)
- perf(experiments): serve experiments table from SWR cache for instant dashboard revisits (29f07afb1)
- fix(data): lazy view uses SWR keys + cancellation; reuse events hover-prefetch; de-flake test (445b3d529)
- feat(dataManagement): lazy per-tab data loading — events-only on participant select (85cbbf8a2)
- test(dataManagement): add lazyTabs test RED->GREEN + update DataViewer tests (c353761b3)
- fix(data): align Rooms→Participants prefetch key + stop stats-bar flicker on revalidation (b33118c8b)
- fix(data): carry-forward fixes in DeploymentsTable (loading prop +  guard) (6ba9fffd3)
- refactor(data): migrate ExperimentParticipantsTable to createQuery SWR pattern (1dd771b18)
- refactor(data): migrate ParticipantsTable to createQuery SWR pattern (1436ce908)
- refactor(data): migrate RoomsTable to createQuery SWR pattern (65feb17bc)
- feat(virtual-table): add onRowHover prop with debounced mouseenter (c3e7e274c)
- feat(ui): skeleton rows in VirtualTable while loading (53c4bc587)
- fix(data): createQuery — cancel each key exactly once on change/teardown (0d4c6afaa)
- feat(data): createQuery reactive SWR helper for Svelte 5 (d9281137a)
- fix(data): harden SWR core — entry-scoped inflight cleanup, prefetch guard, hydrate catch (4fb5bd5a3)
- feat(data): SWR query core in dataServiceV3 (dedup, cancel, subscribe, persist) (a5993b05f)
- feat(cache): sessionStorage persistence tier with size cap + LRU (b4ff7819d)
- feat(cache): add DataCache.peek for stale-while-revalidate reads (26c859a53)
- docs: implementation plan for frontend instant-feel navigation (89e27425d)
- docs: implementation plan for backend Lever 1 query-latency cuts (c3aae0bd1)
- docs: design spec for instant-feel navigation (Phase 1) (41df9f315)

---

## v0.6.82

Released: 2026-06-19

## What's Changed

## Changes since last production release

- Merge fix/data-participant-stale-guard: guard participant-data load against stale responses (f70358dec)
- fix(data): guard participant-data load against stale responses (9b0897d5f)
- Merge branch 'fix/pupil-gaze-already-connected' into dev-integration (a3e3e4b72)
- Merge branch 'feature/pupil-independent-calibration' into dev-integration (4b9b66195)
- Merge branch 'fix/leave-experiment-confirmation' into dev-integration (3dcb8b7fc)
- Merge branch 'fix/v2-preview-trigger-autoadvance' into dev-integration (b652b0d27)
- Merge branch 'feature/account-menu-platform-admin' into dev-integration (ee4eac99a)
- fix(experiment): guard reconnection-overlay leave against double-click re-entrancy (d9bb969a4)
- fix(experiment): confirm before leaving from the reconnection overlay (b928aff77)
- docs(experiment): narrow leave-confirmation spec to overlay-only + add plan (b62f39f93)
- docs(experiment): spec for leave-experiment confirmation guard (b1e4eb9f6)
- feat(experiment): thread pupil calibrationEnabled through DeviceSetupManager + V1/V2 runners (6056a8a6e)
- feat(pupil): allow calibration without the gaze overlay (calibrationEnabled), record transform on completion (ed899fab3)
- feat(pupil): record calibration transform to dataset (recordCalibrationToDataset) (b77eff5d9)
- feat(designer): opt-in 'Enable gaze calibration' for Pupil, nest require-calibration under it (efa11ffa7)
- docs: implementation plan for independent (opt-in) Pupil gaze calibration (9010c9f63)
- docs: design spec for independent (opt-in) Pupil gaze calibration (8009a5d33)
- fix(experiment): auto-advance TTL/Pupil triggers in V2 preview (a57f926bc)
- feat(admin): use shared AccountMenu in platform admin dashboard (ee5e85989)
- fix(devices): recycle a stale Neon gaze inlet on "already connected" (1a69a33ea)

---


[View all v0.6 releases →](/release-notes/v0.6)

## Previous Versions

- [v0.5 releases](/release-notes/v0.5)
- [v0.4 releases](/release-notes/v0.4)
- [v0.3 releases](/release-notes/v0.3)
- [Archived releases](/release-notes/archived)

## Stay Informed

New release notifications are automatically displayed in the experimenter dashboard when you log in. You can dismiss them at any time, and they'll remain in your dashboard history for future reference.
