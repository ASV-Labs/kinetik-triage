# Kinetik Triage

### Understand the change. Make the call.

Kinetik is a Mac app that helps you understand software changes before they affect customers. It gathers public work from GitHub into a review queue, highlights what may deserve attention, and lets you record your judgment with a written reason. Your decisions stay on your Mac, ready to revisit or export as a report.

**This alpha is a guided pilot using public activity for P0GL0L. It does not connect to your own account yet.**

[Explore Kinetik](https://asv-labs.github.io/kinetik-triage/) · [Read the illustrated guide](USER_GUIDE.md) · [Release status](RELEASE_STATUS.md) · [Report a problem](https://github.com/ASV-Labs/kinetik-triage/issues)

## What you can do

1. **Read the change.** Browse proposed changes, issues, and repository activity. Inspect the recommendation, risk band, file coverage, and original GitHub source.
2. **Record your judgment.** Approve, reject, or defer an eligible case with a case-specific explanation. Each action records a local advisory decision.
3. **Keep the trail.** Reopen saved decisions, see when an assessment needs a fresh review, and export Analytics & Metrics as JSON and Markdown.

## Try the alpha

**Candidate:** 0.9.5 / build 4 · Apple silicon · macOS 13 or later.

The public DMG is being prepared. Developer ID signing is available; Apple notarization remains pending. Check [Releases](https://github.com/ASV-Labs/kinetik-triage/releases) for an explicitly published, verified package before installing. A draft or missing download means the package is not released.

When a verified release is available:

1. Download its DMG and SHA-256 checksum.
2. Open the DMG and drag **Kinetik Triage** to **Applications**.
3. Open the app and confirm the version/build in **Kinetik Triage → About Kinetik Triage**.
4. Click **Help**, choose a case under **Needs a decision**, read the evidence, and write your reason.
5. Record a local decision, then open **Analytics → Export JSON and Markdown**.

No developer tools, GitHub token, or account signup are needed. If macOS rejects the package, stop and report the message; do not disable Gatekeeper. See the [full guide](USER_GUIDE.md) for screenshots and troubleshooting.

## Know the scope

| Available in this alpha | Outside this alpha |
| --- | --- |
| Public P0GL0L activity, including contributions to other repositories | Account selection and private repositories |
| Local approve / reject / defer records | GitHub approvals, merges, deployments, or publishing |
| Saved review history and changed-assessment re-review | Shared team state and general edit/undo of prior decisions |
| Timestamped JSON and Markdown reports | Hosted dashboards or automatic customer updates |
| Apple silicon Mac package | Intel Mac, Windows, Linux, or App Store distribution |

Risk is a rule-based review signal, not a safety guarantee. Incomplete coverage means evidence is missing. Cached data may be old. There may be no actionable cases in the current public activity; that is a valid queue state.

## Privacy

Public GitHub requests go directly to GitHub, which receives normal network metadata. Kinetik does not send your rationale or local decisions to GitHub. Decisions, cached data, and exports are stored under `~/Library/Application Support/Kinetik Triage/`. Read the [privacy notice](PRIVACY.md) before sharing reports or screenshots.

## Help improve Kinetik

Open a [bug report or feature request](https://github.com/ASV-Labs/kinetik-triage/issues/new/choose). Include the app version/build, macOS version, reproduction steps, and expected versus actual behavior. Reports are public; remove secrets and personal information. See [CONTRIBUTING.md](CONTRIBUTING.md).

## About this repository

This is the public alpha distribution and documentation repository. It contains the website, guide, release information, and feedback templates. The desktop application source and private development history are maintained separately. Public availability is not an open-source license; see [LICENSE](LICENSE).

### Repository map

- [USER_GUIDE.md](USER_GUIDE.md): illustrated first-use walkthrough and reference.
- [RELEASE_STATUS.md](RELEASE_STATUS.md): exact candidate identity and release verification.
- [CHANGELOG.md](CHANGELOG.md): customer-facing changes.
- [PRIVACY.md](PRIVACY.md): desktop and website data handling.
- [site/](site/): static landing page and transparent interactive example.
- [site/design-notes.md](site/design-notes.md): design decisions and evidence.

To preview the website locally: `python3 -m http.server 8876 --directory site`, then open `http://localhost:8876`. It needs no build system or third-party runtime dependencies.

© 2026 ASV Labs.
