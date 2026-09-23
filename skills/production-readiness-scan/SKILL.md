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

## Include approved external documents

If PRDs, runbooks, Jira tickets, ClickUp docs, or similar sources are outside the repository, first create `.production-ready/sources.json` using the companion `production-readiness-evidence` skill. Then run the scanner again with the same repository root.

## Review behavior

- Read `summary` and every finding that has candidate evidence.
- Preserve source URLs and paths in the report.
- Do not mark a checklist item done from a scan alone. The dashboard imports candidates as **Sedang dikerjakan** and attaches them as evidence.
- For each missing item, provide a concrete next artifact or verification step. Use the item-specific AI prompt in the dashboard when assistance is requested.
