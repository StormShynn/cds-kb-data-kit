---
name: I_OPENCLOSEDDISPUTECASE
description: Open and Closed Dispute Cases - Cube
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value
semantic_en: Open and Closed Dispute Cases - Cube
tags:
  - FIN
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_OPENCLOSEDDISPUTECASE

**Open and Closed Dispute Cases - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` | `CHAR(12)` | Case ID |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` | `CHAR(4)` | Reason for Case |
| `Status` | `CHAR(3)` | Case: System Status |
| `StatusProfile` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` | `NUMC(2)` | Case: Status |
| `CaseType` | `CHAR(4)` | Case Type |
| `DisputeCasePriority` | `NUMC(1)` | Priority |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `CaseCreationDate` | `DATS(8)` |  |
| `CaseClosingDate` | `DATS(8)` |  |
| `CurrentDay` | `INT4(10)` | Current Day |
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
