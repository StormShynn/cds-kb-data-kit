---
name: I_WORKASSIGNMENTDEX_1
description: Work Assignments
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value
semantic_en: Work Assignments
tags:
  - CA
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKASSIGNMENTDEX_1

**Work Assignments**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSIGNMENTDEX_1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkAssignment` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` | `CHAR(100)` |  |
| `WorkAssignmentStartDate` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` | `DATS(8)` | End Date |
| `IsContingentWorker` | `CHAR(1)` | Contingent Worker Flag |
| `IsBlocked` | `CHAR(1)` | Blocked Indicator |
