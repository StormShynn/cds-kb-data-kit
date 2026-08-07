---
name: I_PRAACCTGDOCSMMRYTAXPYBL
description: Production Revenue Accounting Accounting Document Summary Tax Payable
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value
semantic_en: Production Revenue Accounting Accounting Document Summary Tax Payable
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRAACCTGDOCSMMRYTAXPYBL

**Production Revenue Accounting Accounting Document Summary Tax Payable**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYTAXPYBL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `SeveranceTaxType` |  | |  |  | `CHAR(2)` | Severance Tax Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `TaxPyblStatus` |  | |  |  | `CHAR(2)` | Taxes Payable Status |
| `StatusLastChangedByUser` |  | |  |  | `CHAR(12)` | Taxes Payable Status User |
| `WriteOffResponsibleUser` |  | |  |  | `CHAR(12)` | Taxes Payable Writeoff User |
| `BalAmtAgeCode` |  | |  |  | `CHAR(3)` | Taxes Payable Write-off Age |
| `AgingPeriod` |  | |  |  | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `TargetDate` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `BalAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Current Balance |
| `StatusAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Write Off Amount |
