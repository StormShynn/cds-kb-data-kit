---
name: C_SOLVEDDSPUTCASESTSDURNQ
description: Solved Dispute Case Status Durn - Query
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value
semantic_en: Solved Dispute Case Status Durn - Query
tags:
  - FI
  - bo:salesorder
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_SOLVEDDSPUTCASESTSDURNQ

**Solved Dispute Case Status Durn - Query**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCaseStatusDurnInDays` |  | |  |  | `INT4(10)` | Solved Case Status Duration in Days |
| `DisputeCaseStatusAvgDurnInDays` |  | |  |  | `INT1(3)` |  |
