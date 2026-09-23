# WDI-011 review — 21 September 2026

## index.html

A1 Viewport dominance: 4/5
A2 Section rhythm: 4/5
A3 Card justification: 5/5
A4 Type: 4/5
A5 Color: 4/5
A6 Motion: 4/5
A7 Mobile composition: 4/5
Weighted overall: 4.15/5.0
Hard-fails triggered: none
Verdict: PASS

interchangeability=PASS; screenshot=PASS; explanation=PASS

Review evidence: desktop 1440×1000, tablet 834×1112, mobile 390×844 operated in the Codex in-app browser. Local QA captures: desktop-hero.png, desktop-decision.png, desktop-release.png, tablet-hero.png, tablet-decision.png, mobile-hero.png, mobile-decision.png, mobile-release.png in the adjacent private release-evidence directory. The first three are the required distinct crops: editorial thesis with a review trail; dark human-decision form; pale release ledger. Final screenshots and deployment URL are recorded in the release audit.

A1: headline dominates first screen; form outcome dominates workbench; release heading and ledger lead the final action. Compact footer/FAQ receives deliberately lower weight.
A2: asymmetrical intro, evidence definitions, full-width dark workbench, inset file artifact and open release ledger differ in height, measure and density. No alternating zig-zag series.
A3: 0 equal-card sections against budget 1. Content flows as a sequence; the one form is a task surface, not a card collection.
A4: Georgia italics carry the human-judgment voice; sans instructions and monospace record labels distinguish reading, doing and provenance. Main text measures are bounded.
A5: graphite/paper plus review blue; dark workbench inverts the same world. Semantic error is text with a high-contrast tint. No gradients, decorative hues or transparency tricks.
A6: outcome replacement follows user action and focuses its result. No ambient/entrance animation. Reduced-motion override supplied; no-JS retains explanation, while buttons have no submit behavior and the no-JS message explains the unavailable example.
A7: mobile removes the trail rail, moves the pilot boundary before the introduction, stacks full-width actions, moves the export below its explanation, and converts release metadata to vertical definitions. Tablet retains legible two-column reading without overflow.

Signature review: visible 01–03 sequence exposes actual corpus field semantics, source-bound runnable validation, and exporter field/schema vocabulary. No single static image stands in for steps. Zero product screenshots in main. The example is clearly a sample and distinguishes its lack of persistence from the Mac app. Capabilities link to the guide.

Hard-fail review: no card wall, centered blob hero, fake product screenshot, unsourced performance/adoption strip, repeated zig-zags, card-budget overrun, stock-icon grid or testimonials. One page only; HF-9 cross-page test not applicable. No static media in main; favicon is identity outside main.

Interaction checks: blank and short rationale errors; Approve, Reject, Defer outcomes; reset; mobile defer; FAQ expansion; keyboard focus. All visible button/link/summary targets checked at tablet/mobile are ≥44px tall; inline profile target was enlarged after inspection. No horizontal overflow or browser error/warning logs observed. No third-party media or fonts. Desktop link targets verified again after deployment. CSS has no animated behavior to suppress in reduced motion.

Limitations: this is an internal design review, not an independent usability study or formal WCAG certification. Full VoiceOver reading and usability with first-time external customers remain follow-up work.

Detector disposition: the heuristic labels the three action buttons a card-like group. These are semantic controls within one form, not three independent content cards; zero equal-card content sections remains the reviewed count.

## 22 September staging review — index.html

The existing composition remains visually passing at the same 4.15/5.0 score after the private-alpha copy/navigation changes. Re-inspected desktop 1440×1000, tablet 834×1112 and mobile 390×844 in the Codex in-app browser. Application section has no horizontal overflow at those widths. Reviewed three distinct crops: hero, decision workbench, application section. The new access/update disclosures open; the existing blank-rationale error, valid Defer outcome and reset work; no browser warning/error logs observed. The app-scope/guide/update text is consistent with the inspected desktop source.

**Functional release status: HOLD.** The application mailbox has not yet been supplied. The staging page deliberately shows a configuration-pending notice and cannot accept applications. No mailto, inbox receipt, external invitation, hosted private download, or live deployment is claimed. Complete recipient configuration and recheck the primary action before publishing. The composition score and structural verification are not release approval.

interchangeability=PASS; screenshot=PASS; explanation=PASS
