---
name: C_PRASMMRYTAXPYBLQRY
description: PRA Summary Taxes Payable Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value
semantic_en: PRA Summary Taxes Payable Query
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRASMMRYTAXPYBLQRY

**PRA Summary Taxes Payable Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | `CHAR(2)` | Primary Geographical Location |
| `SalesDate` | `DATS(8)` | Sales Date / Month |
| `Product` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | `CHAR(5)` | Division of Interest (DOI) |
| `SeveranceTaxType` | `CHAR(2)` | Severance Tax Type |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `UnitJointVenture` | `CHAR(6)` | Unit Venture |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `TaxPyblStatus` | `CHAR(2)` | Taxes Payable Status |
| `StatusLastChangedByUser` | `CHAR(12)` | Taxes Payable Status User |
| `WriteOffResponsibleUser` | `CHAR(12)` | Taxes Payable Writeoff User |
| `BalAmtAgeCode` | `CHAR(3)` | Taxes Payable Write-off Age |
| `AgingPeriod` | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `TargetDate` | `ACCP(6)` | Fiscal Period |
| `BalAmtInCompanyCodeCrcy` | `CURR(13)` | Current Balance |
| `StatusAmtInCompanyCodeCrcy` | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` | `CURR(13)` | Write Off Amount |
