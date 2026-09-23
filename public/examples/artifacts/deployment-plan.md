# Deployment Plan & Release Checklist — [release version]

**Status:** Draft / Go / No-go / Completed  
**Release owner:** `[name / role]`  
**Technical owner:** `[name / role]`  
**Change window:** `[start–end, timezone]`  
**Target environment:** `[production URL / environment]`  
**Release artifact:** `[immutable image digest, commit SHA, build URL]`

## 1. Scope, impact, and owners

- **What changes:** `[features, fixes, configuration, infrastructure]`
- **What does not change:** `[explicit boundaries]`
- **Customer / business impact:** `[expected benefit and affected users]`
- **Known risk and mitigation:** `[risk → control]`
- **Dependencies:** `[database migration, vendor, DNS, approval, feature flag]`
- **Communication channel:** `[incident / release channel]`

| Responsibility | Person / role | Contact / backup |
| --- | --- | --- |
| Go / no-go decision | `[role]` | `[role]` |
| Operator | `[role]` | `[role]` |
| Monitoring / verification | `[role]` | `[role]` |
| Customer / support communication | `[role]` | `[role]` |
| Rollback decision | `[role]` | `[role]` |

## 2. Readiness gate

- [ ] PR / change request approved and linked: `[URL]`.
- [ ] CI for the exact release artifact passes: `[URL]`.
- [ ] Unit, integration, E2E/UAT evidence: `[links]`.
- [ ] Security checks and approved exceptions: `[links]`.
- [ ] Migration plan and backup/restore status: `[links or N/A with reason]`.
- [ ] Rollback plan was reviewed or drilled: `[link]`.
- [ ] Dashboard, SLO alerts, and synthetic check are available: `[links]`.
- [ ] Deployment environment approval / secret access configured: `[link]`.

## 3. Execution runbook

| Step | Action / exact command or workflow | Owner | Expected signal | Hold / rollback trigger | Result |
| --- | --- | --- | --- | --- | --- |
| 1 | Announce start in `[channel]` | `[role]` | acknowledgement | critical objection | `[pending]` |
| 2 | Confirm artifact SHA and config version | `[role]` | matches approved release | mismatch | `[pending]` |
| 3 | Run approved migration / pre-deploy task | `[role]` | migration validation passes | see migration plan | `[pending]` |
| 4 | Deploy to `[canary / percentage / region]` | `[role]` | deployment healthy | error/latency threshold | `[pending]` |
| 5 | Run smoke journey `[name]` | `[role]` | expected result | P0 journey fails | `[pending]` |
| 6 | Increase traffic / enable feature flag | `[role]` | metrics stable for `[duration]` | SLO trigger | `[pending]` |
| 7 | Announce completion | `[role]` | support informed | — | `[pending]` |

Use a progressive rollout where the platform supports it. Record actual command/workflow URLs, not only a verbal confirmation.

## 4. Verification and monitoring

| Signal | Baseline / threshold | Watch duration | Dashboard / query | Owner | Actual |
| --- | --- | --- | --- | --- | --- |
| Availability / synthetic journey | `[target]` | `[minutes]` | `[URL]` | `[role]` | `[pending]` |
| Error rate | `≤ [threshold]` | `[minutes]` | `[URL]` | `[role]` | `[pending]` |
| Latency | `p95 ≤ [threshold]` | `[minutes]` | `[URL]` | `[role]` | `[pending]` |
| Business guardrail | `[orders / successful tasks]` | `[minutes]` | `[URL]` | `[role]` | `[pending]` |

## 5. Communication and closeout

**Start message:** `Deploying [release] to [environment] at [time]. Scope: [summary]. Owner: [name]. Rollback: [link].`

**Completion message:** `Release [version] completed at [time]. Verified: [signals]. Known follow-up: [issue or none].`

**Issue message:** `Release [version] is paused / being rolled back because [observable trigger]. Impact: [scope]. Next update: [time]. Owner: [name].`

- [ ] Actual deployment and verification evidence linked.
- [ ] Support / stakeholder update sent.
- [ ] Follow-up issues have owners and due dates.
- [ ] Release log and changelog updated.

**Final decision and approver:** `[Go / No-go / Rolled back, name, UTC time]`
