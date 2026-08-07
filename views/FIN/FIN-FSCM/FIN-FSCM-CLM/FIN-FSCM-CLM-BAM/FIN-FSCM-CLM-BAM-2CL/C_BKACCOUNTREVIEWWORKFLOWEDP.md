---
name: C_BKACCOUNTREVIEWWORKFLOWEDP
description: Bank Account Review Email Data Provider
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value
semantic_en: Bank Account Review Email Data Provider
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKACCOUNTREVIEWWORKFLOWEDP

**Bank Account Review Email Data Provider**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `BankAccountReviewArea` |  | |  |  | `CHAR(20)` | Review Area ID |
| `BankAccountReviewAreaName` |  | |  |  | `CHAR(40)` | Bank Account Review Area Description |
| `BkAcctReviewAreaSnapshotDate` |  | |  |  | `DATS(8)` | Bank Account Snapshot Date |
| `BkAcctReviewAreaSnapshotTime` |  | |  |  | `TIMS(6)` | Bank Account Snapshot Time |
| `BankAccountReview` |  | |  |  | `CHAR(20)` | Bank Account Review ID |
| `BankAccountReviewName` |  | |  |  | `CHAR(40)` | Bank Account Review Description |
| `BankAccountReviewDate` |  | |  |  | `DATS(8)` | Bank Account Review - Reference Date |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |
