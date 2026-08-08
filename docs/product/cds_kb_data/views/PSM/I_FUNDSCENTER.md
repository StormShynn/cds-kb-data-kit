---
name: I_FUNDSCENTER
description: "Funds Center"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value
semantic_en: "Funds Center"
keywords:
  - "Funds Center"
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_FUNDSCENTER

**Funds Center**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Funds Center Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funds Center Validity Start Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Funds Center Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Funds Center Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Funds Center Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Funds Center Last Changed on Date |
| `FundsCenterExpirationDate` |  | |  |  | `DATS(8)` | Funds Center Expiration Date |
| `FundsCenterResponsible` |  | |  |  | `CHAR(12)` | Funds Center Manager in Organization Model |
| `FundsCenterManager` |  | |  |  | `CHAR(12)` | Funds Center Manager |
| `FundsCenterResponsibleName` |  | |  |  | `CHAR(20)` | Name of Person Responsible |
| `FundsCenterDefaultFund` |  | |  |  | `CHAR(10)` | Default Fund Value in a Funds Center |
| `FundsCenterAuthznGrp` |  | |  |  | `CHAR(10)` | Funds Center Authorization Group |
| `FndsCenterFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Funds Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
