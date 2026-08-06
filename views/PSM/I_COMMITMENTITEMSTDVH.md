---
name: I_COMMITMENTITEMSTDVH
description: Commitment Item
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value
semantic_en: Commitment Item
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_COMMITMENTITEMSTDVH

**Commitment Item**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `CommitmentItem` | `CHAR(24)` | Commitment Item |
| `CmtmtItemFinMgmtAreaForAuthzn` | `CHAR(4)` | FM Area for Auth Grp for Commitment Item |
| `CommitmentItemAuthznGrp` | `CHAR(10)` | Authorization Group for Commitment Item |
| `CommitmentItemName` | `CHAR(20)` | Commitment Item Name |
| `CommitmentItemDescription` | `CHAR(50)` | Commitment Item Description |
| `ValidityEndDate` | `DATS(8)` | Commitment Item Validity End Date |
| `ValidityStartDate` | `DATS(8)` | Commitment Item Validity Start Date |
