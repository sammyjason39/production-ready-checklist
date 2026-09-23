# Agent workflow: repository evidence to checklist

The local dashboard is the review surface. It is deliberately not a credential store or remote document crawler.

1. Install/copy `skills/production-readiness-scan` into the agent's skills directory.
2. Give the agent the target repository path and ask it to run `node scripts/scan-repository.mjs --root <repo>`.
3. If the project records live in Jira, ClickUp, Notion, Drive, or another connected system, install/copy `skills/production-readiness-evidence`. Connect that service through the agent's authorized MCP setup.
4. Ask the agent to write only document metadata, canonical URLs, tags, and short factual summaries into `<repo>/.production-ready/sources.json`. Start from `.production-ready/sources.example.json`.
5. Run the scanner again. It emits `<repo>/.production-ready/audit.json`.
6. In the dashboard, select **Import scan**. Candidate evidence becomes attached to the matching checklist items and incomplete candidates become **Sedang dikerjakan**. Nothing is automatically marked done.
7. Review the evidence, assign owners, and use **Copy prompt** on missing checklist entries to ask an agent to draft the required artifact. Re-scan after the artifact is reviewed and saved.

## Use with Claude, Hermes, Codex, or another agent

Both skill folders use the portable `SKILL.md` convention. Copy or symlink them into the agent environment's skills directory. The only runtime dependency is Node.js 18+ for the scanner.

## Suggested agent request

```text
Use production-readiness-scan to audit /absolute/path/to/repository.
If project documentation is outside the repo, use the authorized MCP connector and
production-readiness-evidence to build .production-ready/sources.json first.
Generate audit.json, summarize the five highest-risk gaps, and do not mark any item
done unless an owner has explicitly approved the linked evidence.
```
