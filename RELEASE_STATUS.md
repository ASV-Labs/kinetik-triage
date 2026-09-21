# Alpha release status

Updated 21 September 2026.

**Public website and documentation: available. Public Mac download: pending Apple notarization.**

## Current candidate

| Item | Value |
| --- | --- |
| App | Kinetik Triage |
| Version / build | 0.9.5 / 4 |
| Source revision | `ae6919708d4dfa45e20f5a1eba7769ab73fafc96` |
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
- Final DMG About confirms source `ae6919708d4d`; clicking Source opens the correct GitHub PR in the default browser.
- Final DMG Analytics export succeeds with 12 cases and the persisted local decision.
- Bundled Help opens the 0.9.5/build 4 guide.
- Packaged backend independently exercises approve, reject and defer with relaunch persistence, plus forced empty-error and cached-error paths.
- The DMG mounts successfully. Its app signature verifies; its application archive matches the signed build's archive byte for byte.
- Landing page reviewed at desktop, tablet and mobile sizes. Blank/short rationale handling, all example outcomes, reset, disclosure and keyboard focus work. WDI gate verification passes; internal WDI-011 score 4.15/5.

The final candidate's observed cache-assisted live run loaded 12 cases, fetched in 126 ms, built the queue in 6 ms and reported 116.0 MB backend RSS with no errors. These are observations from one Mac and request/cache state, not performance guarantees or total app memory.

## What remains before the public DMG

1. Supply Apple notarization credentials locally to the authorized build operator.
2. Submit the exact candidate, obtain Accepted status, staple the app and rebuilt DMG, and verify Gatekeeper acceptance.
3. Test the final downloaded, quarantined package on a clean user account/Mac; verify guide/build identity and first-use flow.
4. Publish the final notarized assets, their new checksums, and the final manifest. Mark that GitHub release as a prerelease.

The signed but unnotarized candidate is intentionally not presented as a normal public download. The checksum below identifies the current internal candidate and will change after stapling/repackaging:

`e7175065594164b72b3f40500c35d4bf44c9d910bac330eba143fa5b4c7f7b8f`

## Alpha limitations

The pilot profile is fixed to P0GL0L public activity. There is no private-repository connection, team sync, general decision edit/undo, or deployment/publishing action. The guide's screenshots are explicitly identified as the preceding 0.9.4 workflow; current build controls and links are described in text. Full VoiceOver qualification and external first-time-user testing remain follow-up work. App Store distribution is a separate release path.
