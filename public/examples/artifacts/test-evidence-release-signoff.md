# Test Evidence & Release Sign-off — [release version]

**Status:** Draft / Ready for decision / Go / No-go  
**Release artifact:** `[commit SHA, image digest, build URL]`  
**Environment:** `[staging / production]`  
**Release owner:** `[name / role]`  
**Decision deadline:** `[date and timezone]`

## 1. Scope and change identity

- **Included changes:** `[PRs, tickets, migrations, flags]`
- **Excluded / deferred changes:** `[items and reasons]`
- **Target audience / impact:** `[who is affected]`
- **Known risks:** `[risk, mitigation, owner]`
- **Requirements / acceptance criteria:** `[PRD or issue link]`

## 2. Test execution record

| Layer | Plan / case ID | Build and environment | Command or workflow | Result | Report / artifact | Executor / reviewer |
| --- | --- | --- | --- | --- | --- | --- |
| Unit | `[UT-01…]` | `[SHA / CI]` | `[URL]` | Pass / Fail | `[URL]` | `[name]` |
| Integration | `[IT-01…]` | `[environment]` | `[URL]` | Pass / Fail | `[URL]` | `[name]` |
| E2E / UAT | `[case]` | `[environment]` | `[URL]` | Pass / Fail | `[URL]` | `[name]` |
| Security | `[check]` | `[environment]` | `[URL]` | Pass / Fail | `[URL]` | `[name]` |
| Performance / accessibility | `[check]` | `[environment]` | `[URL]` | Pass / Fail / N/A | `[URL]` | `[name]` |

Link output that is accessible to a reviewer and redact secrets, tokens, or personal data. A green summary without its source report is not sufficient evidence.

## 3. Defect and exception register

| ID | Severity | Description / impact | Current status | Release decision | Owner | Target date |
| --- | --- | --- | --- | --- | --- | --- |
| `[BUG-123]` | P0–P3 | `[observable behavior]` | Open / fixed / verified | Block / accepted / deferred | `[role]` | `[date]` |

For every accepted exception, include the explicit residual risk, compensating control, expiry date, and person authorized to accept it.

## 4. Operational readiness evidence

- [ ] Deployment Plan: `[link]`
- [ ] Rollback Plan and drill / test: `[link]`
- [ ] Migration and backup/restore evidence: `[link or N/A with reason]`
- [ ] Dashboard / alert / synthetic check: `[links]`
- [ ] Support and customer communication plan: `[link]`
- [ ] Security or privacy approval where required: `[link]`

## 5. Go / no-go decision

| Role | Decision | Name | Date/time (UTC) | Conditions / comments |
| --- | --- | --- | --- | --- |
| Product owner | Go / No-go | `[name]` | `[time]` | `[comment]` |
| Engineering owner | Go / No-go | `[name]` | `[time]` | `[comment]` |
| QA owner | Go / No-go | `[name]` | `[time]` | `[comment]` |
| Security / operations, if applicable | Go / No-go | `[name]` | `[time]` | `[comment]` |

**Final release decision:** `[Go / No-go / Go with explicit conditions]`  
**Decision owner:** `[name]`  
**Follow-up review date:** `[YYYY-MM-DD]`
