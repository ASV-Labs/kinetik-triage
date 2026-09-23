# Alpha release status

Updated 22 September 2026.

**Public documentation: available. Private-alpha email application flow: being staged. Mac package: invitation-only candidate; notarization and final installation checks pending.**

## Current candidate

| Item | Value |
| --- | --- |
| App | Kinetik Triage |
| Version / build | 0.9.6 / 5 |
| Source revision | `f1e07f46c8c41772ebd1e72d903e712c0883498f` |
| Architecture | arm64 (Apple silicon) |
| Minimum OS | macOS 13.0, as declared by the packaged app |
| Build metadata | Clean source tree; built 21 September 2026 |
| App signature | Developer ID; hardened runtime; deep/strict verification passes |
| Notarization | Pending |
| Distribution | Privately staged candidate; not approved for tester distribution |

## Verification performed

- Library Archive/Delete/Restore verified in the signed app; deleted state survives restart.
- Archiving another row preserves the reading selection. Archiving a reviewed case preserves its decision, and Analytics identifies archived/deleted counts.
- Full-width reading layout inspected at normal and enlarged text sizes; badge alignment and logo verified.

- All 27 desktop source tests pass (session rules, corpus handling, process bridge and URL policy).
- Signed package launches on the MacBook and loads real public P0GL0L data.
- Existing local review state restores; a fresh local decision can be recorded and exported.
- The packaged build manifest identifies source `f1e07f46c8c4`. Source handoff was verified during the preceding 0.9.5 audit; that implementation is unchanged.
- Signed application Analytics export succeeds with 12 cases and the persisted local decision.
- Bundled Help opens the 0.9.6/build 5 guide.
- Existing session/corpus/bridge tests plus seven Library regressions cover decision versioning, persistence, refresh gaps, restoration, write-failure rollback and selection. The earlier 0.9.5 packaged backend matrix remains separate evidence.
- The signed 0.9.6 package is built and its signature verifies. Final downloaded/notarized DMG installation remains pending.
- Landing page reviewed at desktop, tablet and mobile sizes. Blank/short rationale handling, all example outcomes, reset, disclosure and keyboard focus work. WDI gate verification passes; internal WDI-011 score 4.15/5.

The 0.9.6 UI check loaded 12 public cases and exported the report after a local decision was archived. Earlier 0.9.5 performance observations are not a benchmark for this build.

## What remains before invited testers receive the DMG

1. Supply Apple notarization credentials locally to the authorized build operator.
2. Submit the exact candidate, obtain Accepted status, staple the app and rebuilt DMG, and verify Gatekeeper acceptance.
3. Test the final downloaded, quarantined package on a clean user account/Mac; verify guide/build identity and first-use flow.
4. Stage the final notarized assets, regenerated checksums and manifest in private storage. Share only with approved testers. Keep public-repository releases in draft; do not use a public GitHub release as an invitation gate.

The signed but unnotarized candidate is intentionally not presented as a verified tester download. The checksum below identifies the current internal candidate and will change after stapling/repackaging:

`a3d3c05dd14f8c2e9d62f297e942b6460d7b08d8ac27862edb8d9189467434b2`

## Alpha limitations

The pilot profile is fixed to P0GL0L public activity. There is no private-repository connection, team sync, general decision edit/undo, or deployment/publishing action. The guide includes current 0.9.6 reading-workspace and Library screenshots; remaining walkthrough images are explicitly identified as the preceding 0.9.4 workflow. Full VoiceOver qualification and external first-time-user testing remain follow-up work. App Store distribution is a separate release path.
