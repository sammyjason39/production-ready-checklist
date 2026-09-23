---
name: production-readiness-evidence
description: Gather user-authorized external project documents through MCP or connected tools and normalize them for a Production Ready Checklist repository scan. Use for Jira, ClickUp, Notion, Drive, or similar documentation sources.
---

# Production Readiness Evidence

Use this skill only after the user has authorized access to the external source. Its job is to build a small, traceable document index for `production-readiness-scan` and the dashboard's local document reader; it does not copy credentials into the repository.

## Gather through MCP

1. Use the connected MCP tool appropriate to the authorized source (for example Jira, ClickUp, Notion, Google Drive, or GitHub).
2. Search only the project, space, folder, or issue range that the user named.
3. Read documents that substantively support a checklist artifact: PRD, ADR, architecture diagram, test plan, release plan, runbook, roadmap, decision log, or review record.
4. Record only a short factual excerpt or summary needed for scanning. Retain the canonical URL and access timestamp. Never export credentials, private tokens, or unrelated document contents.

## Write the local source index

Create `.production-ready/documents.json` inside the target repository using this shape:

```json
{
  "schemaVersion": "1.0",
  "documents": [
    {
      "title": "Checkout PRD v2",
      "checklistId": "DES-001",
      "artifactCode": "PRO-004",
      "type": "link",
      "location": { "type": "online", "url": "https://example.atlassian.net/wiki/…" },
      "status": "approved",
      "updatedAt": "2026-09-23",
      "tags": ["prd", "acceptance criteria", "checkout"],
      "summary": "Scope, non-scope, owners, acceptance criteria, and launch metric are defined."
    }
  ]
}
```

For a local repository document, use `"location": { "type": "repository", "path": "docs/product/prd.md" }`. Supported viewer types are `markdown`, `pdf`, `docx`, and `link`. Start from `.production-ready/documents.example.json`.

Then run `node scripts/scan-repository.mjs --root /path/to/target-repository`. Import `documents.json` in the dashboard to browse its locations, then import `audit.json` for candidate evidence.

## Integrity rules

- A missing document stays missing. Do not create evidence from an assumption.
- Keep links canonical and accessible to the intended reviewer.
- If a connector cannot access a source, report that limitation and list what connection or permission is needed.
- When documents conflict, preserve both references and flag the conflict for the owner.
