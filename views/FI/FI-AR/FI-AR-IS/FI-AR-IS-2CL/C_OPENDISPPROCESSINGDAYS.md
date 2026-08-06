---
name: C_OPENDISPPROCESSINGDAYS
description: Open Dispute Processing Days
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value
semantic_en: Open Dispute Processing Days
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
# C_OPENDISPPROCESSINGDAYS

**Open Dispute Processing Days**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value) |

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
| `DisputeCaseReason` | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` | `CHAR(60)` | Text Field of Length 60 |
| `CaseType` | `CHAR(4)` | Case Type |
| `CaseTypeName` | `CHAR(40)` | Short Text for Case Type |
| `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` | `CHAR(80)` | Full Name of Person |
| `Status` | `CHAR(3)` | Case: System Status |
| `StatusName` | `CHAR(40)` | Case: System Status Description |
| `DisputeCasePriority` | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` | `CHAR(40)` | Text, 40 Characters Long |
| `CaseProcessingStatus` | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `Interval1NumberOfCases` | `INT4(10)` | Case is Processed Since Today |
| `Interval2NumberOfCases` | `INT4(10)` | Case is Processed for 1-2 Days |
| `Interval3NumberOfCases` | `INT4(10)` | Case is Processed for 3-5 Days |
| `Interval4NumberOfCases` | `INT4(10)` | Case is Processed for 6-10 Days |
| `Interval5NumberOfCases` | `INT4(10)` | Case is Processed for 11-20 Days |
| `Interval6NumberOfCases` | `INT4(10)` | Case is Processed for 21-50 Days |
| `Interval7NumberOfCases` | `INT4(10)` | Case is Processed for More than 50 Days |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `DisputedAmountInDisplayCrcy` | `CURR(23)` | Current Disputed Amount in Display Currency |
| `NumberOfDisputeCases` | `INT4(10)` | Number of Dispute Cases |
| `CaseCreationDate` | `DATS(8)` | Created On |
| `ProcessingDays` | `INT4(10)` | Processing Days of Open Disputes |
| `ProcessingDaysText` | `CHAR(10)` | Processing Time of a Claification Case in Days |
| `OpenDisputesAvgProcgDays` | `INT1(3)` |  |
| `Interval1DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount Since Today |
| `Interval2DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 1-2 Days |
| `Interval3DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 3-5 Days |
| `Interval4DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 6-10 Days |
| `Interval5DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 11-20 Days |
| `Interval6DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 21-50 Days |
| `Interval7DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for More than 50 Days |
