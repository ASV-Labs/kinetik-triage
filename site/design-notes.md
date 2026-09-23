# Kinetik alpha — design note

## index.html

Project/topic: Kinetik Triage desktop alpha, a public software-change review pilot.
Page or site type: software-product.
Site type: software-product.
Primary audience / Audience: Mac users evaluating software changes, including founders and team members unfamiliar with GitHub.
Primary user action / Primary action: understand the pilot scope and apply by email for invitation-only access.
Secondary user action: try the local-decision example and read the guide.
Emotional tone / Tone: precise, calm, trustworthy, practical.
Content density: sparse introduction, medium walkthrough, compact release details.
Device priority: desktop discovery and installation; mobile understanding and later handoff.
Interaction level: one runnable local-decision form and native disclosures.
Motion level: only state feedback; no entrance or ambient animation.
Trust requirement: very high; distinguish sample public corpus, local decisions, distribution readiness and future scope.
Conversion pressure: low; manual email applications, no payment and no automatic admission.
Implementation stack: static semantic HTML, CSS and vanilla JavaScript on GitHub Pages. No tracking or third-party fonts.

Experience thesis: Visitors understand that Kinetik gathers public software work into a review queue, helps them inspect its evidence, and keeps a written local decision. They feel oriented, believe the narrow alpha promise, and know exactly where to get the matching guide and release.

Creative concept: **The review trail.** A blue rule runs from public change, through human judgment, to a portable record. This follows the app's actual information flow instead of a generic feature taxonomy.
Subject cues: (1) repository / proposed change / local review vocabulary translated beside its technical term; (2) visible Approve / Reject / Defer choices with a required written reason; (3) a report extract and device-only boundary; (4) fixed P0GL0L sample scope next to the release action.
Selected composition: product-walkthrough.
Why this composition fits: the product is a sequence of evidence and decisions. An ordered spine lets a novice understand that sequence before installing.
Style atlas match: SaaS or Technical Product, precise + trustworthy.

Visual grammar: warm paper (#f5f4ef), graphite (#202523), review blue (#155ac8). Editorial Georgia display makes the change-review promise readable and distinct; system sans handles instructions; monospace labels identify records. Large left-aligned thesis, narrow numbered rail, full-width dark decision workbench, compact lined report extract, and an open release ledger. Square edges, hairline divisions, no floating bubble decorations. Body measure ≤68ch. No imagery ratios needed: no static product media.

Section narrative:
- Introduction / index.html: What is this? Plain-language product intent and alpha boundary. Asymmetric headline and small review-trail index; leads directly into the sequence. Mobile removes the side rail and places the boundary before the action.
- 01 Read / index.html: Where does the information come from? Named public profile and actual corpus field labels (state, coverage, source). Open editorial row with glossary disclosure; mobile turns the annotated field list into a two-column definition list.
- 02 Decide / index.html: What does clicking Approve do? Runnable form adapted from the desktop validation and local action labels; explicitly labeled sample, nothing saved. Dark full-bleed workbench distinguishes human action from incoming evidence. Mobile puts the explanation before the form and makes actions full-width.
- 03 Keep / index.html: What do I leave with? Exact analytics field names and export filename pattern from the desktop implementation. A narrow report ledger, not a fabricated app window. Mobile shows a vertical file record, never horizontal code overflow.
- Release / index.html: Is it ready for my Mac? Version/build, architecture, fixed-profile restriction, notarization status, release/guide/feedback links. A deliberate honesty band with the main action. Mobile labels the action as viewing release details, since installation is on Mac.
- FAQ / index.html: What might I misunderstand? Native details on local approval, sample scope, offline behavior, data handling. Inline privacy and guide links. Keyboard/no-JS operable.

Signature conformance: numbered 01–03 spine; each step exposes its own real artifact (corpus field vocabulary, source-bound decision form, export schema/filename), no repeated static screenshot. All capability claims point to the guide. The trial form is explicitly an example, not a live account connection.
Reference/pattern moves borrowed (max 3): numbered-spine (sequence comprehension; fails for unordered catalogs), honesty-band (scope beside action; fails if hidden as fine print), subject-shaped-ia (Read/Decide/Keep; fails if these actions are aspirational). No external site identity, assets, claims, or page copied.
Card budget / cards used: 1 / 0. No equal-card sections; the workbench is one functional form.

Forbidden defaults rejected:
- equal-height card wall: review is sequential, not a catalog.
- three columns under a centered hero: it obscures the actual workflow and scope.
- fake dashboard screenshot: a functioning, labeled form demonstrates the real interaction.
- pointless KPI strip: no invented adoption or speed claims.
- stock-icon feature grid: the artifacts themselves explain the actions.
- repeated two-column zig-zag: incoming evidence, judgment and report need different emphasis.
- unearned gradient blob background: no relationship to the review trail.
- giant testimonial card row: no customer testimony has been substantiated.

Product imagery provenance: none
Visitor-facing product proof: runnable program/DOM slice @ demo.js (desktop decision validation, 0.9.5/build 4)
Static product screenshots in visitor-facing content: none
Motion behavior: instant form outcome, focus moves to feedback, no loops; reduced-motion disables optional smooth behavior.
Responsive behavior (mobile composed, not squeezed): side index removed, decision form takes full width, action stack, release metadata becomes definitions; no horizontal overflow.
Accessibility fallback (reduced-motion, keyboard, no-JS): semantic landmarks/headings, visible focus, ≥44px controls, polite outcome and alert errors; source workflow explanation remains complete without JavaScript and noscript states example requires JS. No timed UI.
Performance risk: minimal; static files and system fonts, no remote media or framework.
Authorship review plan: test interchangeability against unrelated storage/accounting products (sequence must fail transplant); review hero/workbench/release crops for one visual world and distinct compositions; justify each major decision against the visitor questions above. Inspect 1440×1000, 834×1112 and 390×844 and operate all links/form/disclosures.


21 September follow-up: update the candidate label to 0.9.6/build 5 and Actions copy to include local Library organization. No composition or interaction changes; the decision example remains sourced from its documented 0.9.5 validation baseline.

## 22 September private-alpha application revision (before implementation)

Page: index.html; all classification and product-walkthrough choices above remain in force.
The alpha section becomes the application destination at #alpha. The primary action is an ordinary email link with a fixed subject and a short application outline. The applicant reviews and sends their own email; the site never claims that opening a draft submits an application. The owner's confirmed inbox is required before publication. A visible address is a fallback for webmail/no default mail app.

The page explains: apply → owner reviews → approved tester receives private installation instructions once the package is verified. No instant access, public binary, invented acceptance date or installed-app account gate. The candidate ledger remains adjacent to that action. Scope is Apple silicon/macOS 13+, fixed public sample corpus, local decisions.

The primary header/hero action points to #alpha; the existing walkthrough remains as the secondary action. The application section stays an open two-column composition on desktop and a single-column, full-width mail action on mobile. A short FAQ explains manual release updates and invitation-only distribution. No new route, field widget, animation, card, screenshot or external service is introduced. Privacy copy distinguishes the in-page demo from email sent voluntarily by the applicant.

Signature conformance, zero-card use, the eight rejected defaults, provenance and performance decisions are unchanged. Authorship review will revisit hero, decision workbench and application section at the three required viewports and validate the exact mailto recipient/subject/body without sending a real application. Email inbox receipt remains a separate proof.
