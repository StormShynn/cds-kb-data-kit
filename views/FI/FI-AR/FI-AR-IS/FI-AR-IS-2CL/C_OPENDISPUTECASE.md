---
name: C_OPENDISPUTECASE
description: Open Dispute Case
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value
semantic_en: Open Dispute Case
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
# C_OPENDISPUTECASE

**Open Dispute Case**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  |  | `CHAR(40)` | Short Text for Case Type |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  |  | `CHAR(60)` | Text Field of Length 60 |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  |  | `CHAR(40)` | Case: System Status Description |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  |  | `CHAR(40)` | Case: Status Description |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  |  | `CHAR(40)` | Text, 40 Characters Long |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `DisputedAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` |  | |  |  | `INT4(10)` | Number of Dispute Cases |
| `DisputeCase` |  | |  |  | `CHAR(12)` | Case ID |
