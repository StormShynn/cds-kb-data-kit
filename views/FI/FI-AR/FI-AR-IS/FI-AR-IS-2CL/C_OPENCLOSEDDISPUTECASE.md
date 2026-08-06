---
name: C_OPENCLOSEDDISPUTECASE
description: Open and Closed Dispute Cases
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value
semantic_en: Open and Closed Dispute Cases
tags:
  - FI
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_OPENCLOSEDDISPUTECASE

**Open and Closed Dispute Cases**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `CaseID` | `CHAR(12)` | Case ID |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `DisputeCaseProcessor` | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` | `CHAR(80)` | Full Name of Person |
| `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` | `CHAR(80)` | Full Name of Person |
| `DisputeCaseReason` | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` | `CHAR(60)` | Text Field of Length 60 |
| `Status` | `CHAR(3)` | Case: System Status |
| `StatusName` | `CHAR(40)` | Case: System Status Description |
| `CaseProcessingStatus` | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CaseType` | `CHAR(4)` | Case Type |
| `CaseTypeName` | `CHAR(40)` | Short Text for Case Type |
| `DisputeCasePriority` | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` | `CHAR(40)` | Text, 40 Characters Long |
| `IsCreatedToday` | `INT1(3)` | Created today |
| `IsSolvedToday` | `INT4(10)` | Solved Today |
| `IsCreatedLast5Days` | `INT1(3)` | Created in Last 5 Days |
| `IsSolvedLast5Days` | `INT4(10)` | Solved in Last 5 Days |
| `IsCreatedCurrentMonth` | `INT4(10)` | Created in Current Month |
| `IsSolvedCurrentMonth` | `INT4(10)` | Solved in current month |
| `TodayCreatedAmtInDspCrcy` | `CURR(23)` | New Amount, Today |
| `TodaySolvedAmtInDspCrcy` | `CURR(23)` | Amount Solved Today |
| `Last5DaysCrtedAmtInDspCrcy` | `CURR(23)` | New Amount in Last 5 Days |
| `Last5DaysSolvedAmtInDspCrcy` | `CURR(23)` | Amount Solved in Last 5 Days |
| `CurMonthCreatedAmtInDspCrcy` | `CURR(23)` | New Amount, Current Month |
| `CurMonthSolvedAmtInDspCrcy` | `CURR(23)` | Solved Amount Current Month |
| `AvgNumberOfDisputeCasesPerDay` | `INT1(3)` |  |
| `TodayNumberOfDisputeCases` | `INT1(3)` |  |
| `Last5DaysNumberOfDisputeCases` | `INT1(3)` |  |
| `CurMonthNumberOfDisputeCases` | `INT1(3)` |  |
