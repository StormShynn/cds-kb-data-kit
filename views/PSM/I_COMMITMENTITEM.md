---
name: I_COMMITMENTITEM
description: Commitment Item
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value
semantic_en: Commitment Item
keywords:
  - Commitment Item
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_COMMITMENTITEM

**Commitment Item**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `CommitmentItem` | `CHAR(24)` | Commitment Item |
| `CommitmentItemShortID` | `CHAR(14)` | Commitment Item Short ID |
| `CommitmentItemIsPostingEnabled` | `NUMC(1)` | Postable |
| `CmtmtItmFinancialTransaction` | `NUMC(2)` | Financial transaction |
| `CommitmentItemCategory` | `NUMC(1)` | Commitment Item Category |
| `CommitmentItemType` | `CHAR(3)` | Commitment Item Type |
| `ParentCommitmentItem` | `CHAR(24)` | Superior Commitment Item |
| `CommitmentItemInternalId` | `CHAR(8)` | Internal ID of Commitment Item |
| `FundsCenter` | `CHAR(16)` | Funds Center Default Value |
| `CmtmtItmDefaultFundsCenter` | `CHAR(16)` | Default Funds Center for Commitment Item |
| `CmtmtItmCarryFwdItmCategory` | `CHAR(2)` | Carryforward Item Category for Commitment Item |
| `CommitmentItemIsStatistical` | `CHAR(1)` | Statistical commitment item |
| `CommitmentItemAuthznGrp` | `CHAR(10)` | Authorization Group for Commitment Item |
| `CmtmtItemFinMgmtAreaForAuthzn` | `CHAR(4)` | FM Area for Auth Grp for Commitment Item |
| `ValidityEndDate` | `DATS(8)` | Commitment Item Validity End Date |
| `ValidityStartDate` | `DATS(8)` | Commitment Item Validity Start Date |
| `CommitmentItemExpirationDate` | `DATS(8)` | Commitment Item Expiration Date |
| `CreationDate` | `DATS(8)` | FIFM: Entry Date |
| `CreatedByUser` | `CHAR(12)` | FIFM: Created By |
