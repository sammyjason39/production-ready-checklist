# Database Migration Plan — [change name]

**Status:** Draft / Approved / Executed  
**Migration ID and repository path:** `[identifier and path]`  
**Change owner:** `[name / role]`  
**Database / environment:** `[engine, version, target]`  
**Change window:** `[start–end with timezone]`  
**Related release:** `[link]`

## 1. Change and compatibility

- **Problem / intended outcome:** `[what schema or data must change]`
- **Affected tables, indexes, jobs, APIs, reports:** `[list]`
- **Data classification:** `[public / internal / confidential / restricted]`
- **Expected data size and growth:** `[rows / GB / estimate]`
- **Downtime or lock risk:** `[none / explain measurement and mitigation]`
- **Application versions that must coexist:** `[old version, new version, duration]`

Use an **expand → migrate → contract** sequence when old and new application versions may run together:

1. **Expand:** add backward-compatible schema or feature flag.
2. **Migrate:** deploy readers/writers, backfill in bounded batches, verify.
3. **Contract:** remove old field/code only after no older consumer remains.

## 2. Pre-flight gate

- [ ] Migration was rehearsed in a representative non-production environment.
- [ ] Backup exists, restore was tested on `[date]`, and restore location is `[link]`.
- [ ] Expected duration, lock behavior, and query plan were measured with representative data.
- [ ] Monitoring dashboard and alert owner are ready: `[links]`.
- [ ] On-call, release owner, and database owner are available in `[channel]`.
- [ ] Deployment Plan: `[link]`; Rollback Plan: `[link]`.
- [ ] Approval: `[names / ticket]`.

## 3. Step-by-step runbook

| Step | Action / exact command | Owner | Expected output | Stop / rollback condition | Evidence link |
| --- | --- | --- | --- | --- | --- |
| 1 | `[create backup command or provider snapshot]` | `[role]` | backup ID recorded | backup fails | `[link]` |
| 2 | `[apply versioned migration command]` | `[role]` | migration ID applied | lock/error budget breach | `[link]` |
| 3 | `[run bounded backfill command]` | `[role]` | batch count / checkpoint | error rate or lag threshold | `[link]` |
| 4 | `[run validation query]` | `[role]` | expected count/checksum | mismatch | `[link]` |
| 5 | `[enable new code/flag]` | `[role]` | metric remains healthy | SLO trigger | `[link]` |

Do not use unreviewed manual production SQL. Keep real commands in the repository or runbook, version them with the migration, and record the exact executed version.

## 4. Validation queries and acceptance

| Check | Query / method | Expected value | Sampling / threshold | Result |
| --- | --- | --- | --- | --- |
| Row count | `[read-only query]` | `[value/range]` | `[all / sample]` | `[pending]` |
| Referential integrity | `[query]` | `0 orphan rows` | all rows | `[pending]` |
| Data transform | `[checksum / comparison]` | `[value]` | `[sample plan]` | `[pending]` |
| App behavior | `[integration test / synthetic journey]` | pass | P0 paths | `[pending]` |

## 5. Cutover and rollback

- **Point of no return:** `[specific step; explain why]`
- **Rollback decision owner:** `[role]`
- **Decision deadline:** `[timestamp or max elapsed time]`
- **Rollback document:** `[link to Rollback Plan]`
- **Data handling if rollback occurs after backfill:** `[preserve / compensate / restore; no destructive action without approval]`
- **Customer / stakeholder communication:** `[channel and owner]`

## 6. Execution record

| Actual UTC time | Step | Operator | Result | Dashboard / log / ticket |
| --- | --- | --- | --- | --- |
| `[time]` | `[step]` | `[name]` | Pass / stopped / rolled back | `[URL]` |

## 7. Completion sign-off

- [ ] All validation checks passed and evidence is linked.
- [ ] Release monitoring stayed within agreed thresholds for `[duration]`.
- [ ] Backfill / cleanup follow-up is tracked with owner and date.
- [ ] Documentation, data dictionary, and rollback plan were updated.

**Approved by:** `[database owner]`, `[release owner]`, `[date]`
