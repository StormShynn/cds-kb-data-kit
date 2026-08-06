---
name: I_BANKACCOUNTREVIEWER
description: Bank Account Reviewer
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value
semantic_en: Bank Account Reviewer
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BANKACCOUNTREVIEWER

**Bank Account Reviewer**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankAccountReviewUUID` | `RAW(16)` | Bank Account Review UUID |
| `BankAccountReviewAreaUUID` | `RAW(16)` | Review Area UUID |
| `BankAccountReviewerUUID` | `RAW(16)` | Reviewer UUID |
| `BankAccountReviewStep` | `INT1(3)` | Review Step |
| `BankAccountReviewerUser` | `CHAR(12)` | Reviewer |
| `BkAccountReviewerReviewResult` | `CHAR(2)` | Review Result |
| `ProcessedByUser` | `CHAR(12)` | Processed By (User ID) |
| `CreatedByUser` | `CHAR(12)` | Bank Account Review: Created By |
| `CreationDateTime` | `DEC(15)` | Bank Account Review: Creation Timestamp |
| `LastChangedByUser` | `CHAR(12)` | Bank Account Review: Changed By |
| `LocalLastChangeDateTime` | `DEC(15)` | Bank Account Review: Local Change Timestamp |
