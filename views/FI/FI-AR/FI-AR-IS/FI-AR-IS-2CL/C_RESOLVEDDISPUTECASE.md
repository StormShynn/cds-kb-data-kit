---
name: C_RESOLVEDDISPUTECASE
description: Resolved Dispute Case
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value
semantic_en: Resolved Dispute Case
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
# C_RESOLVEDDISPUTECASE

**Resolved Dispute Case**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  |  | `CHAR(60)` | Text Field of Length 60 |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  |  | `CHAR(40)` | Short Text for Case Type |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` |  | |  |  | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  |  | `CHAR(40)` | Case: System Status Description |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  |  | `CHAR(40)` | Text, 40 Characters Long |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  |  | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `IsSolvedCurrentYear` |  | |  |  | `INT4(10)` | Solved in current year |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `IsSolvedLastMonth` |  | |  |  | `INT4(10)` | Solved in Last Month |
| `IsSolvedLastQuarter` |  | |  |  | `INT4(10)` | Solved in Last Quarter |
| `IsSolvedLast12Months` |  | |  |  | `INT4(10)` | Solved in last 12 months |
| `Last12MonthsResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last 12 Months for solving Dispute Cases |
| `CurrentMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Month for solving Dispute Cases |
| `LastMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Month for solving Dispute Cases |
| `CurrentYearResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Year for solving Dispute Cases |
| `LastQuarterResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Quarter for solving Dispute Cases |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `Last12MnthsSlvdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount in Last 12 Months |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
| `LastMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Month |
| `CurYearSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Year |
| `LastQuartSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Quarter |
| `Last12MonthsAvgReslnDays` |  | |  |  | `INT1(3)` |  |
| `CurrentMonthAvgReslnDays` |  | |  |  | `INT1(3)` |  |
| `LastMonthAvgReslnDays` |  | |  |  | `INT1(3)` |  |
| `CurrentYearAvgReslnDays` |  | |  |  | `INT1(3)` |  |
| `LastQuarterAvgReslnDays` |  | |  |  | `INT1(3)` |  |
