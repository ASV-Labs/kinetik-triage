# Alpha release status

Updated 21 September 2026.

**Public website and documentation: available. Public Mac download: pending Apple notarization.**

## Current candidate

| Item | Value |
| --- | --- |
| App | Kinetik Triage |
| Version / build | 0.9.6 / 5 |
| Source revision | `e3163b342b0de476da84da4d38b849ffb7c2574a` |
| Architecture | arm64 (Apple silicon) |
| Minimum OS | macOS 13.0, as declared by the packaged app |
| Build metadata | Clean source tree; built 21 September 2026 |
| App signature | Developer ID; hardened runtime; deep/strict verification passes |
| Notarization | Pending |
| Distribution | Draft candidate; not a notarized public release |

## Verification performed

- Library Archive/Delete/Restore verified in the signed app; deleted state survives restart.
- Archiving another row preserves the reading selection. Archiving a reviewed case preserves its decision, and Analytics identifies archived/deleted counts.
- Full-width reading layout inspected at normal and enlarged text sizes; badge alignment and logo verified.

- All 27 desktop source tests pass (session rules, corpus handling, process bridge and URL policy).
- Signed package launches on the MacBook and loads real public P0GL0L data.
- Existing local review state restores; a fresh local decision can be recorded and exported.
- The packaged build manifest identifies source `e3163b342b0d`. Source handoff was verified during the preceding 0.9.5 audit; that implementation is unchanged.
- Signed application Analytics export succeeds with 12 cases and the persisted local decision.
- Bundled Help opens the 0.9.6/build 5 guide.
- Existing session/corpus/bridge tests plus seven Library regressions cover decision versioning, persistence, refresh gaps, restoration, write-failure rollback and selection. The earlier 0.9.5 packaged backend matrix remains separate evidence.
- The signed 0.9.6 package is built and its signature verifies. Final downloaded/notarized DMG installation remains pending.
- Landing page reviewed at desktop, tablet and mobile sizes. Blank/short rationale handling, all example outcomes, reset, disclosure and keyboard focus work. WDI gate verification passes; internal WDI-011 score 4.15/5.

The 0.9.6 UI check loaded 12 public cases and exported the report after a local decision was archived. Earlier 0.9.5 performance observations are not a benchmark for this build.

## What remains before the public DMG

1. Supply Apple notarization credentials locally to the authorized build operator.
2. Submit the exact candidate, obtain Accepted status, staple the app and rebuilt DMG, and verify Gatekeeper acceptance.
3. Test the final downloaded, quarantined package on a clean user account/Mac; verify guide/build identity and first-use flow.
4. Publish the final notarized assets, their new checksums, and the final manifest. Mark that GitHub release as a prerelease.

The signed but unnotarized candidate is intentionally not presented as a normal public download. The checksum below identifies the current internal candidate and will change after stapling/repackaging:

`804664d629e4f318836fe3bdc293fc7010bd4af46b272897afef7e05d93d4b23`

## Alpha limitations

The pilot profile is fixed to P0GL0L public activity. There is no private-repository connection, team sync, general decision edit/undo, or deployment/publishing action. The guide's screenshots are explicitly identified as the preceding 0.9.4 workflow; current build controls and links are described in text. Full VoiceOver qualification and external first-time-user testing remain follow-up work. App Store distribution is a separate release path.
