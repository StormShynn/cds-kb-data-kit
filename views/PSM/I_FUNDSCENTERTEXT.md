---
name: I_FUNDSCENTERTEXT
description: Funds Center - Text
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value
semantic_en: Funds Center - Text
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_FUNDSCENTERTEXT

**Funds Center - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Funds Center Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funds Center Validity Start Date |
| `FundsCenterName` |  | |  |  | `CHAR(20)` | Funds Center Name |
| `FundsCenterDescription` |  | |  |  | `CHAR(40)` | Funds Center Description |
| `FundsCenterSearchTerm` |  | |  |  | `CHAR(20)` | Search Term for Matchcode Search |
