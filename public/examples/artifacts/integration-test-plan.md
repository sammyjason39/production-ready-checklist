# Integration Test Plan & Environment — [journey]

**Status:** Draft / In review / Approved  
**Owner:** [name or role]  
**Related release / PRD:** [link]  
**Environment:** [dedicated integration / staging]  
**Last reviewed:** [YYYY-MM-DD]

## 1. Boundary under test

State the complete user or system journey and the integrations that must work together.

```text
[client] → [API] → [database] → [queue] → [worker] → [vendor / notification]
```

- **Journey:** [example: approved checkout creates order and sends receipt]
- **In scope:** [services, APIs, queues, webhooks, database]
- **Not proved here:** [unit-only behavior, browser-only usability; link to other plan]
- **Risk if it breaks:** [financial / operational / customer impact]

## 2. Dependency and data register

| Dependency | Contract tested | Real / sandbox / fake | Endpoint or version | Test-data owner | Reset / cleanup |
| --- | --- | --- | --- | --- | --- |
| `[Postgres]` | transaction and migration | dedicated real DB | `[version]` | `[role]` | truncate namespace |
| `[payment sandbox]` | authorization callback | vendor sandbox | `[API version]` | `[role]` | provider test account |
| `[email]` | receipt request | fake inbox | `[tool]` | `[role]` | delete after run |

Use only synthetic or approved masked data. Document any dependency that cannot be made real and the contract test that reduces that gap.

## 3. Environment readiness

- [ ] Environment is isolated from production and has a named owner.
- [ ] Secrets come from the test environment, never checked into the repository.
- [ ] Schema version / service versions are recorded: `[links]`.
- [ ] Setup command or workflow: `[command / URL]`.
- [ ] Seed data is reproducible: `[path / command]`.
- [ ] Teardown command removes generated data: `[path / command]`.
- [ ] Logs, traces, and correlation IDs can be accessed by the test owner.

## 4. Scenario matrix

| ID | Setup | Action | Expected cross-system result | Diagnostic evidence | Priority |
| --- | --- | --- | --- | --- | --- |
| IT-01 | Valid synthetic customer | Submit order | one order, one charge, one receipt | request ID + DB row + sandbox event | P0 |
| IT-02 | Vendor timeout | Submit order | retry policy follows contract; no duplicate charge | trace + queue record | P0 |
| IT-03 | Same idempotency key twice | Retry request | same order returned; no duplicate side effect | API response + DB query | P0 |
| IT-04 | Invalid webhook signature | Send callback | rejected and security event recorded | log / alert link | P0 |

Include normal flow, dependency failure, retry, duplicate delivery, authorization, schema mismatch, and data cleanup where relevant.

## 5. Execution and exit criteria

```bash
# Replace with actual commands
npm run test:integration
npm run seed:integration
npm run cleanup:integration
```

- Run cadence: `[per pull request / nightly / before release]`
- CI job and retained artifact: `[URL]`
- Pass rule: all P0 scenarios pass in the release environment; no open severity `[level]` defect without documented acceptance.
- Failure handling: attach correlation ID, logs, trace, request/response redacted of secrets, and create `[issue tracker]` item.

## 6. Evidence and approval

| Run (UTC) | Build / commit | Environment | Result | Report / trace link | Reviewer |
| --- | --- | --- | --- | --- | --- |
| `[date]` | `[SHA]` | `[name]` | Pass / Fail | `[URL]` | `[name]` |

**Approval:** `[QA owner]`, `[engineering owner]`, `[date]`
