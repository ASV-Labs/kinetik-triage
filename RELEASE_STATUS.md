# Alpha release status

Updated 21 September 2026.

**Public website and documentation: available. Public Mac download: pending Apple notarization.**

## Current candidate

| Item | Value |
| --- | --- |
| App | Kinetik Triage |
| Version / build | 0.9.5 / 4 |
| Source revision | `40808a6d3ff0a06a6ba63a6cddf243e336732d01` |
| Architecture | arm64 (Apple silicon) |
| Minimum OS | macOS 13.0, as declared by the packaged app |
| Build metadata | Clean source tree; built 21 September 2026 |
| App signature | Developer ID; hardened runtime; deep/strict verification passes |
| Notarization | Pending |
| Distribution | Draft candidate; not a notarized public release |

## Verification performed

- All 20 desktop source tests pass (session rules, corpus handling, process bridge and URL policy).
- Signed package launches on the MacBook and loads real public P0GL0L data.
- Existing local review state restores; a fresh local decision can be recorded and exported.
- Bundled Help opens the 0.9.5/build 4 guide.
- Packaged backend independently exercises approve, reject and defer with relaunch persistence, plus forced empty-error and cached-error paths.
- The DMG mounts successfully. Its app signature verifies; its application archive matches the signed build's archive byte for byte.
- Landing page reviewed at desktop, tablet and mobile sizes. Blank/short rationale handling, all example outcomes, reset, disclosure and keyboard focus work. WDI gate verification passes; internal WDI-011 score 4.15/5.

A representative final-candidate live run loaded 12 cases, fetched in 1,575 ms, built the queue in 11 ms and reported 104.9 MB backend RSS with no errors. These are observations from one Mac and request/cache state, not performance guarantees or total app memory.

## What remains before the public DMG

1. Supply Apple notarization credentials locally to the authorized build operator.
2. Submit the exact candidate, obtain Accepted status, staple the app and rebuilt DMG, and verify Gatekeeper acceptance.
3. Test the final downloaded, quarantined package on a clean user account/Mac; verify guide/build identity and first-use flow.
4. Publish the final notarized assets, their new checksums, and the final manifest. Mark that GitHub release as a prerelease.

The signed but unnotarized candidate is intentionally not presented as a normal public download. The checksum below identifies the current internal candidate and will change after stapling/repackaging:

`3010429e21f6504f41639acb3be756629e9c5f49c2a3ba43c94b9d07ddfb5678`

## Alpha limitations

The pilot profile is fixed to P0GL0L public activity. There is no private-repository connection, team sync, general decision edit/undo, or deployment/publishing action. The guide's screenshots are explicitly identified as the preceding 0.9.4 workflow; current build controls and links are described in text. Full VoiceOver qualification and external first-time-user testing remain follow-up work. App Store distribution is a separate release path.
