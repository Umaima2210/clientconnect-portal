# Authentication Regression Test Plan

## Purpose
Verify login, password reset, and logout before version 1.0 UAT.

## Test cases

| ID | Scenario | Expected result | Execution status |
|---|---|---|---|
| AUTH-01 | Log in with valid credentials | Customer reaches the dashboard | Not run |
| AUTH-02 | Log in with an incorrect password | Login is rejected with a clear message | Not run |
| AUTH-03 | Request a password reset | Reset email arrives within 60 seconds | Not run |
| AUTH-04 | Reset password using a valid link | Password is updated successfully | Not run |
| AUTH-05 | Log in with the new password | Login succeeds | Not run |
| AUTH-06 | Log in with the old password after reset | Login is rejected | Not run |
| AUTH-07 | Open an expired reset link | Link is rejected and a new request is offered | Not run |
| AUTH-08 | Log out and revisit a protected page | Customer must log in again | Not run |

## Execution dependency
The password reset email delay issue prevents completion of the
full password reset test cycle.

Independent login and logout tests can proceed once a test
environment and test accounts are available.

## Release gate
UAT approval requires completed authentication regression tests
with recorded results and no unresolved high-priority failures.

## Current status
This document is a proposed test plan.
No test execution results are recorded.
