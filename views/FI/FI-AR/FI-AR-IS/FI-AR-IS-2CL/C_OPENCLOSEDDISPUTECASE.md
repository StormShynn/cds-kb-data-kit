---
name: C_OPENCLOSEDDISPUTECASE
description: This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value
semantic_en: This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_OPENCLOSEDDISPUTECASE

**This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value) |

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
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` |  | |  |  | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  |  | `CHAR(60)` | Text Field of Length 60 |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  |  | `CHAR(40)` | Case: System Status Description |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  |  | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  |  | `CHAR(40)` | Short Text for Case Type |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  |  | `CHAR(40)` | Text, 40 Characters Long |
| `IsCreatedToday` |  | |  |  | `INT1(3)` | Created today |
| `IsSolvedToday` |  | |  |  | `INT4(10)` | Solved Today |
| `IsCreatedLast5Days` |  | |  |  | `INT1(3)` | Created in Last 5 Days |
| `IsSolvedLast5Days` |  | |  |  | `INT4(10)` | Solved in Last 5 Days |
| `IsCreatedCurrentMonth` |  | |  |  | `INT4(10)` | Created in Current Month |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `TodayCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Today |
| `TodaySolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved Today |
| `Last5DaysCrtedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount in Last 5 Days |
| `Last5DaysSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved in Last 5 Days |
| `CurMonthCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Current Month |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
| `AvgNumberOfDisputeCasesPerDay` |  | |  |  | `INT1(3)` |  |
| `TodayNumberOfDisputeCases` |  | |  |  | `INT1(3)` |  |
| `Last5DaysNumberOfDisputeCases` |  | |  |  | `INT1(3)` |  |
| `CurMonthNumberOfDisputeCases` |  | |  |  | `INT1(3)` |  |
