---
name: I_OPENDISPUTEPROCESSINGTIME
description: Open Dispute Processing Time - Cube
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value
semantic_en: Open Dispute Processing Time - Cube
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
# I_OPENDISPUTEPROCESSINGTIME

**Open Dispute Processing Time - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value) |

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
| `DisputeCasePriority` | `NUMC(1)` | Priority |
| `StatusProfile` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` | `NUMC(2)` | Case: Status |
| `CaseType` | `CHAR(4)` | Case Type |
| `CaseCreationDate` | `DATS(8)` | Created On |
| `TodayDate` | `DATS(8)` |  |
| `ProcessingDays` | `INT4(10)` | Processing Days of Open Disputes |
| `DisputedAmountInDisplayCrcy` | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` | `INT4(10)` | Number of Dispute Cases |
| `ProcessingDaysText` | `CHAR(10)` | Processing Time of a Claification Case in Days |
| `Interval1NumberOfCases` | `INT4(10)` | Case is Processed Since Today |
| `Interval2NumberOfCases` | `INT4(10)` | Case is Processed for 1-2 Days |
| `Interval3NumberOfCases` | `INT4(10)` | Case is Processed for 3-5 Days |
| `Interval4NumberOfCases` | `INT4(10)` | Case is Processed for 6-10 Days |
| `Interval5NumberOfCases` | `INT4(10)` | Case is Processed for 11-20 Days |
| `Interval6NumberOfCases` | `INT4(10)` | Case is Processed for 21-50 Days |
| `Interval7NumberOfCases` | `INT4(10)` | Case is Processed for More than 50 Days |
| `Interval1DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount Since Today |
| `Interval2DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 1-2 Days |
| `Interval3DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 3-5 Days |
| `Interval4DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 6-10 Days |
| `Interval5DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 11-20 Days |
| `Interval6DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for 21-50 Days |
| `Interval7DisputedAmtInDspCrcy` | `CURR(23)` | Disputed Amount for More than 50 Days |
