# Rollback Plan & Drill Evidence — [release version]

**Status:** Draft / Approved / Drilled / Used  
**Release and known-good version:** `[release ID / commit SHA / image digest]`  
**Rollback decision owner:** `[name / role]`  
**Operator:** `[name / role]`  
**Related Deployment Plan:** `[link]`  
**Last drill / review:** `[YYYY-MM-DD]`

## 1. Recovery objective and trigger

- **Objective:** return `[service / journey]` to the known-good state within `[time]` while preserving `[data / customer impact constraint]`.
- **Known-good release:** `[immutable version and where to find it]`.
- **Fix-forward allowed when:** `[specific low-risk condition and decision owner]`.
- **Rollback required when:** `[clear observable conditions]`.

| Trigger | Source | Threshold / condition | Who declares | Deadline |
| --- | --- | --- | --- | --- |
| Error rate | `[dashboard]` | `> [value] for [duration]` | `[role]` | `[minutes]` |
| Critical journey | `[synthetic check]` | `[journey fails]` | `[role]` | immediate |
| Security / data event | `[alert / report]` | `[condition]` | `[role]` | immediate |

## 2. Preconditions

- [ ] Known-good release, configuration, and infrastructure version are identified.
- [ ] Rollback workflow / command has least-privilege access and is tested outside production.
- [ ] Database migration status and recovery option are known: `[link]`.
- [ ] Feature flag / traffic control path is recorded: `[link]`.
- [ ] Monitoring, logs, and stakeholder channel are open.
- [ ] Decision owner and backup are reachable.

## 3. Recovery runbook

Execute in order; record actual times and workflow URLs. Stop if a condition is unsafe and escalate to the decision owner.

| Step | Action / exact command or workflow | Owner | Expected result | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Freeze further deploys and announce incident | `[role]` | no concurrent change | `[URL]` |
| 2 | Reduce traffic / disable risky feature flag | `[role]` | blast radius contained | `[URL]` |
| 3 | Deploy known-good code artifact `[digest]` | `[role]` | deployment accepts artifact | `[URL]` |
| 4 | Restore known-good configuration / infrastructure version | `[role]` | config diff is expected | `[URL]` |
| 5 | Apply database recovery action from migration plan | `[role]` | data state verified | `[URL]` |
| 6 | Run smoke checks and monitor for `[duration]` | `[role]` | SLO / journey healthy | `[URL]` |
| 7 | Communicate recovery / next steps | `[role]` | stakeholders informed | `[URL]` |

## 4. Database and data decision

Describe the action for each migration state. Do not assume application rollback also reverses data.

| Migration state | Data strategy | Approval required | Verification |
| --- | --- | --- | --- |
| Not started | no database action | `[role]` | schema version unchanged |
| Expand only | leave compatible schema in place | `[role]` | old application functions |
| Backfill in progress | stop worker; preserve checkpoint | `[role]` | counts and queue stable |
| Destructive / point of no return | restore or compensating action from approved plan | `[role]` | restore validation query |

## 5. Communication

**Initial:** `We are rolling back [release] at [time] due to [observable trigger]. Impact: [scope]. Next update: [time]. Owner: [name].`

**Recovered:** `Rollback to [known-good version] completed at [time]. Verified: [checks]. Remaining follow-up: [issue / investigation].`

List the customer, support, leadership, and vendor contacts to notify: `[links / names]`.

## 6. Drill or live-use record

| Date (UTC) | Drill or incident | Trigger simulated / observed | Actual recovery time | Result | Gaps and follow-up |
| --- | --- | --- | --- | --- | --- |
| `[date]` | `[drill]` | `[condition]` | `[minutes]` | Pass / Fail | `[issue links]` |

- [ ] Team can locate the plan without relying on one person.
- [ ] Each recovery step has been rehearsed or is linked to an automated workflow.
- [ ] Follow-ups have owner and due date.
- [ ] Plan was reviewed after the release or incident.

**Reviewed by:** `[release owner]`, `[operations owner]`, `[date]`
