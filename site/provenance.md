# Interactive example provenance

The example is a runnable adaptation of the Kinetik Triage desktop decision form from the 0.9.5/build 4 source baseline `abca0b3`. It uses the desktop action labels, the required rationale rule, minimum length of 12 characters, and the local outcome wording. The example's case description is explicitly illustrative, not fetched public activity or a screenshot.

Differences from the desktop: the browser example does not call Electron IPC, persist decisions, score evidence, connect to GitHub, or reject the desktop's exact example rationale text (that text is not shown here). It cannot validate a current assessment version. The website provides no security or release approval. Everything typed stays in the page memory until reset or navigation.

The source implementation remains private. Website example code is included in this distribution repository for transparency. No private project data or user review records are included.
