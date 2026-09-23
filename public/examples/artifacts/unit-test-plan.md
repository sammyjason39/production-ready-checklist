# Unit Test Plan — [feature or module]

**Status:** Draft / In review / Approved  
**Owner:** [name or role]  
**Repository and commit:** [URL and immutable SHA]  
**Last reviewed:** [YYYY-MM-DD]  
**Related PRD / issue:** [link]

## 1. Purpose and risk

Describe the behavior this module must preserve and the user or business impact if it fails.

- **In scope:** [functions, classes, validation rules, transformations]
- **Out of scope:** [browser UI, vendor API, database; link to integration/E2E plan]
- **Highest-risk behavior:** [example: a discount may never make order total negative]
- **Failure impact:** [who is affected and how]

## 2. Unit and behavior map

| Unit | Public behavior / contract | Risk | Owner | Test file |
| --- | --- | --- | --- | --- |
| `[calculateTotal]` | Returns money in smallest unit; never below zero | High | `[role]` | `[path]` |
| `[validateCoupon]` | Rejects expired or unavailable coupon | High | `[role]` | `[path]` |
| `[formatReceipt]` | Produces stable customer-facing text | Medium | `[role]` | `[path]` |

Add every unit with a rule that could cause a harmful result. Avoid testing private implementation details when the observable contract is enough.

## 3. Fixtures and mock boundary

| Dependency | Real, fake, or mock? | Why | Fixture / factory location | Reset rule |
| --- | --- | --- | --- | --- |
| Clock | Fake | Test expiry deterministically | `[path]` | Restore after each test |
| Payment gateway | Mock | Unit test must not make a network call | `[path]` | Clear calls after each test |
| Database repository | Fake | Isolate business rule from persistence | `[path]` | Fresh fixture per test |

Never place production credentials or personal data in fixtures. Every mock must preserve the relevant contract, including error behavior.

## 4. Test case matrix

| ID | Given | When | Then | Priority | Automated? |
| --- | --- | --- | --- | --- |
| UT-01 | Valid cart with two items | calculate total | exact total in smallest unit | P0 | Yes |
| UT-02 | Coupon is expired | validate coupon | typed validation error | P0 | Yes |
| UT-03 | Quantity is zero or negative | add item | request rejected; state unchanged | P0 | Yes |
| UT-04 | Optional field absent | format receipt | safe default, no exception | P1 | Yes |

Add success, boundary, invalid-input, authorization, timeout/error mapping, and idempotency cases where applicable. Link an issue for every deliberate gap.

## 5. Commands and CI gate

```bash
# Replace with the repository's real commands
npm run test:unit
npm run test:unit -- --coverage
```

- CI workflow and job: `[workflow URL / job name]`
- Required branch check: `[check name]`
- Gate: all P0 tests pass; no skipped P0 test; lint/typecheck pass; coverage threshold `[value]` is a signal, not a substitute for cases above.
- Quarantine policy: `[who can approve a temporary quarantine, expiry date, tracking issue]`

## 6. Evidence record

| Run date/time (UTC) | Commit / build | Command | Result | Report / artifact link | Reviewer |
| --- | --- | --- | --- | --- | --- |
| `[YYYY-MM-DD]` | `[SHA]` | `[command]` | Pass / Fail | `[URL]` | `[name]` |

## 7. Approval

- [ ] Test cases cover the stated high-risk behavior.
- [ ] Fixtures contain no credentials or production personal data.
- [ ] CI gate is linked and passing for the release commit.
- [ ] Known gaps are accepted by `[role]` with expiry `[date]`.

**Approved by:** `[name / role, date]`
