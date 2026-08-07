---
name: I_WORKASSGMTDETSDEX_1
description: "Workforce Person Assignment Details"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value
semantic_en: "Workforce Person Assignment Details"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKASSGMTDETSDEX_1

**Workforce Person Assignment Details**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTDETSDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` |  |
| `WorkforceAssignmentIsPrimary` |  | |  |  | `CHAR(1)` | Primary Employment Indicator |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SupervisorWorkAssignmentExtID` |  | |  |  | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WorkforcePersonJobTitle` |  | |  |  | `CHAR(256)` | Job Title |
| `WorkforcePersonJobCode` |  | |  |  | `CHAR(128)` | Job Code |
| `WeeklyWorkingHours` |  | |  |  | `DEC(5)` | Working Hours in a Week |
| `WeeklyWorkingDays` |  | |  |  | `DEC(4)` | Working Days in a Week |
| `EmploymentPercent` |  | |  |  | `DEC(5)` | Employment Percentage |
| `WorkAssignmentStatus` |  | |  |  | `CHAR(1)` | Employment Status |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
