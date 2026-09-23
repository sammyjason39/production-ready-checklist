---
name: production-readiness-scan
description: Scan a software repository and its approved document index for production-readiness evidence, then generate an importable checklist report. Use when auditing a repository against the Production Ready Checklist.
---

# Production Readiness Scan

Use this skill to collect evidence from a repository without treating a filename or keyword as approval. The scanner only produces **candidate evidence**; the project owner decides whether an item is done.

## Run

From this project's root:

```bash
node scripts/scan-repository.mjs --root /path/to/target-repository
```

The default output is `/path/to/target-repository/.production-ready/audit.json`. Import that file through **Import scan** in the local dashboard.

The report includes repository facts that the dashboard can show: Git branch and commit count, latest commit, source/test file counts, detected languages, and an **evidence progress indicator**. That indicator measures checklist areas with candidate evidence; it is not an effort estimate or a production approval.

## Add an agent project summary

After collecting the approved repository and connected-document evidence, write `<repo>/.production-ready/agent-summary.json` using the shape in `.production-ready/agent-summary.example.json`, then rerun the scanner. The dashboard imports it into **Agent Project Intelligence**.

- `overview`: concise factual description of the project, grounded in cited/known sources.
- `capabilities`: what the project demonstrably does today; do not list planned features as present capability.
- `currentFocus`: the most important delivery focus inferred from the audit.
- `risks`: material gaps, uncertainty, or dependencies that need human review.
- `implementationProgress`: optional percentage comparing a named plan/acceptance criteria with implementation evidence. Include the method in `basis`, completed and remaining scope, and state uncertainty. Never derive this number from line count or commit count alone.
- `sources`: repository paths or authorized canonical document URLs used for the summary.

Do not include source code dumps, credentials, personal data, or invented project facts. The real `agent-summary.json` is ignored by Git by default; the example is safe to commit.

## Include approved external documents

If PRDs, runbooks, Jira tickets, ClickUp docs, or similar sources are outside the repository, first create `.production-ready/sources.json` using the companion `production-readiness-evidence` skill. Then run the scanner again with the same repository root.

## Review behavior

- Read `project`, `summary`, and every finding that has candidate evidence.
- Preserve source URLs and paths in the report.
- Do not mark a checklist item done from a scan alone. The dashboard imports candidates as **Sedang dikerjakan** and attaches them as evidence.
- For each missing item, provide a concrete next artifact or verification step. Use the item-specific AI prompt in the dashboard when assistance is requested.
