# Alpha release status

Updated 22 September 2026.

**Public documentation: available. Private-alpha email applications: configured for the published ASV Labs business inbox. Mac package: notarized and stapled, staged for invitation-only testing.**

## Current candidate

| Item | Value |
| --- | --- |
| App | Kinetik Triage |
| Version / build | 0.9.6 / 5 |
| Source revision | `499b9d62d31f4692390184852b68122e27e9db8d` |
| Architecture | arm64 (Apple silicon) |
| Minimum OS | macOS 13.0, as declared by the packaged app |
| Build metadata | Corrected source; signed candidate built 22 September 2026 |
| App signature | Developer ID; hardened runtime; deep/strict verification passes |
| Notarization | Accepted for app and DMG; both stapled and validated |
| Distribution | Notarized private staging candidate; email applications configured |

## Verification of the corrected candidate

The About panel now derives its build number from the same generated metadata as the package. Bundled installation instructions now describe private invitations and manual updates. All 27 desktop source tests and desktop TypeScript checks were independently rerun and pass. The freshly built app passes Developer ID deep/strict signature verification and its Info.plist reports 0.9.6/build 5. Apple accepted the app and DMG submissions; both stapling validations pass. Gatekeeper accepts the app as Notarized Developer ID. Final corrected-package runtime/installation checks are recorded separately from the preceding candidate.

Cursor Mac verification of the final mounted installer: Gatekeeper accepted, Alpha copy launched with isolated data, About showed 0.9.6/build 5/source 499b9d62d31f, invitation-only Help opened, live Queue loaded and the app quit cleanly. The existing installed app was preserved. Final decision/export/relaunch proof is being collected separately.

## Previous candidate verification (21 September; historical evidence)

- Library Archive/Delete/Restore verified in the signed app; deleted state survives restart.
- Archiving another row preserves the reading selection. Archiving a reviewed case preserves its decision, and Analytics identifies archived/deleted counts.
- Full-width reading layout inspected at normal and enlarged text sizes; badge alignment and logo verified.

- All 27 desktop source tests pass (session rules, corpus handling, process bridge and URL policy).
- Signed package launches on the MacBook and loads real public P0GL0L data.
- Existing local review state restores; a fresh local decision can be recorded and exported.
- The packaged build manifest identifies source `f1e07f46c8c4`. Source handoff was verified during the preceding 0.9.5 audit; this is historical evidence, not a final-candidate identity claim.
- Signed application Analytics export succeeds with 12 cases and the persisted local decision.
- Bundled Help opens the 0.9.6/build 5 guide.
- Existing session/corpus/bridge tests plus seven Library regressions cover decision versioning, persistence, refresh gaps, restoration, write-failure rollback and selection. The earlier 0.9.5 packaged backend matrix remains separate evidence.
- The signed 0.9.6 package is built and its signature verifies. Final downloaded/notarized DMG installation remains pending.
- Landing page reviewed at desktop, tablet and mobile sizes. Blank/short rationale handling, all example outcomes, reset, disclosure and keyboard focus work. WDI gate verification passes; internal WDI-011 score 4.15/5.

The 0.9.6 UI check loaded 12 public cases and exported the report after a local decision was archived. Earlier 0.9.5 performance observations are not a benchmark for this build.

## Notarization and private staging

Apple app submission: `6e145d4d-1bd2-4a12-b53a-68ce9e813b80` — Accepted.
Apple DMG submission: `257a9328-97dc-4941-a073-bdca40bbedc7` — Accepted.
App and DMG stapling validates; app Gatekeeper assessment is accepted / Notarized Developer ID. Source tree and packaged build metadata are clean at the revision above.

Final stapled DMG SHA-256:

`2bbbea50aad96816dbd0ebad8ceef6dbbe4205a59363cf3790b67038461d788c`

The public-repository release drafts from 21 September identify older candidates and remain unpublished. They are not tester download links. The corrected installer is privately staged; it must not be published as a public release.

## What remains before invitations

1. Review applications received at SaltyEngineer@ASVLabs.com and approve the initial cohort. An application is not an invitation; no applications or invitations were sent by this verification task.
2. Complete an external first-time-user pilot before broader distribution. Local isolated-data launch, About, Help and live Queue were checked; they are separate from clean-account/customer acceptance.
3. Configure and verify recipient-restricted delivery for approved testers, with the final checksum, manifest, release notes and guide. No invitations have been sent.

## Alpha limitations

The pilot profile is fixed to P0GL0L public activity. There is no private-repository connection, team sync, general decision edit/undo, or deployment/publishing action. The guide includes current 0.9.6 reading-workspace and Library screenshots; remaining walkthrough images are explicitly identified as the preceding 0.9.4 workflow. Full VoiceOver qualification and external first-time-user testing remain follow-up work. App Store distribution is a separate release path.
