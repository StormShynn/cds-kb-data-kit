---
name: I_OPENDISPUTECASE
description: Open Dispute Case - Cube
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value
semantic_en: Open Dispute Case - Cube
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
# I_OPENDISPUTECASE

**Open Dispute Case - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` | `CHAR(12)` | Case ID |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` | `CHAR(4)` | Reason for Case |
| `Status` | `CHAR(3)` | Case: System Status |
| `StatusProfile` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` | `NUMC(2)` | Case: Status |
| `CaseType` | `CHAR(4)` | Case Type |
| `DisputeCasePriority` | `NUMC(1)` | Priority |
| `CaseCreationDate` | `DATS(8)` | Created On |
| `DisputedAmount` | `CURR(15)` | Current Disputed Amount |
| `Currency` | `CUKY(5)` | Currency Key |
| `DisputedAmountInDisplayCrcy` | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` | `INT4(10)` | Number of Dispute Cases |
| `DisputeCase` | `CHAR(12)` | Case ID |
