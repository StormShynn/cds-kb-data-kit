---
name: C_PRASMMRYACCTSRBLQRY
description: PRA Summary Accounts Receivable Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value
semantic_en: PRA Summary Accounts Receivable Query
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRASMMRYACCTSRBLQRY

**PRA Summary Accounts Receivable Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Remitter` |  | |  |  | `CHAR(10)` | Remitter (Customer) |
| `AccountsReceivableJointVenture` |  | |  |  | `CHAR(6)` | AR Venture |
| `AcctsRblDivisionOfInterest` |  | |  |  | `CHAR(5)` | AR DOI |
| `AcctsRblMeasurementPt` |  | |  |  | `CHAR(20)` | AR MP |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `BalAmtAgeCode` |  | |  |  | `CHAR(3)` | Accounts Receivable Age |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AcctsRblStatus` |  | |  |  | `CHAR(2)` | Accounts Receivable Status |
| `StatusLastChangedByUser` |  | |  |  | `CHAR(12)` | Accounts Receivable Status User |
| `WriteOffResponsibleUser` |  | |  |  | `CHAR(12)` | Accounts Receivable Writeoff User |
| `AgingPeriod` |  | |  |  | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `BalAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Current Balance |
| `ReceivableAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Total Receivable Balance |
| `CashAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Total Cash Received |
| `StatusAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Auto Write Off Amount |
