---
name: C_DISPUTECASESITUATIONTEMPLATE
description: Dispute Case Situation Template
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value
semantic_en: Dispute Case Situation Template
tags:
  - FIN
  - component:FIN-FIO-CCD-COL-2CL
  - consumption-view
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# C_DISPUTECASESITUATIONTEMPLATE

**Dispute Case Situation Template**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DISPUTECASESITUATIONTEMPLATE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `CaseProcessingDeadlineDate` | `DATS(8)` | Processing Deadline |
| `OriginalAmount` | `CURR(15)` | Original Disputed Amount |
| `DisputedAmount` | `CURR(15)` | Current Disputed Amount |
| `PaidAmount` | `CURR(15)` | Amount Paid |
| `CreditedAmount` | `CURR(15)` | Amount Credited |
| `WriteOffAmount` | `CURR(15)` | Amount Cleared Manually |
| `ManuallyClearedAmount` | `CURR(15)` | Automatically Written Off |
| `CaseID` | `CHAR(12)` | Case ID |
| `DisputeCaseCurrency` | `CUKY(5)` | Currency of Dispute Case |
| `CustomerDisputedAmount` | `CURR(15)` | Customer Disputed Amount |
| `CustomerDisputedCurrency` | `CUKY(5)` | Currency of Customer-Disputed Amount |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `DisputeCaseExternalApplication` | `CHAR(4)` | Processing by External Application |
| `CaseType` | `CHAR(4)` | Case Type |
| `CaseExternalReference` | `CHAR(30)` | External Reference |
| `CaseCreatedBy` | `CHAR(12)` | Created By |
| `CaseCreatedOn` | `DEC(15)` | Created At |
| `CaseLastChangedBy` | `CHAR(12)` | Last Changed By |
| `CaseLastChangedOn` | `DEC(15)` | Last Changed At |
| `CaseClosedBy` | `CHAR(12)` | Closed by User |
| `CaseClosedTime` | `DEC(15)` | Closed At |
| `CasePlannedCloseDate` | `DATS(8)` | Planned Close Date |
| `CaseProcessor` | `CHAR(12)` | Processor |
| `CaseResponsible` | `CHAR(12)` | Person Responsible |
| `CaseEscalationReason` | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` | `CHAR(4)` | Category |
| `CasePriority` | `NUMC(1)` | Priority |
| `CaseStatus` | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` | `CHAR(3)` | Case: System Status |
| `CaseReason` | `CHAR(4)` | Reason for Case |
