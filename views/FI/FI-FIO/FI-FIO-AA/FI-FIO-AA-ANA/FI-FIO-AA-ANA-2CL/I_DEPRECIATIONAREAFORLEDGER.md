---
name: I_DEPRECIATIONAREAFORLEDGER
description: This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DEPRECIATIONAREAFORLEDGER

**This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` | `NUMC(2)` | Depreciation Area Real or Derived |
| `AssetValuationView` | `CHAR(12)` | Valuation View |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `ValidityStartFiscalYear` | `NUMC(4)` | Fiscal Year for Start of Validity |
| `ValidityEndFiscalYear` | `NUMC(4)` | Fiscal Year for End of Validity |
| `ChartOfDepreciation` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `AssetRealDepreciationArea1` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea2` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea3` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea4` | `NUMC(2)` | Real depreciation area |
| `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `AssetGLPostingMethod` | `CHAR(1)` | Post to G/L Account |
| `DerivedDeprAreaValCalcFactor1` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor2` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor3` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor4` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcSign1` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign2` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign3` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign4` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `AcquisitionValueCalcSign` | `CHAR(1)` | +/- Sign for Acquisition Value |
| `LedgerGroup` | `CHAR(4)` | Target Ledger Group |
| `IsRealDepreciationArea` | `CHAR(1)` | Indicator: Store Real Depreciation Area |
| `IsRepresentativeLedger` | `CHAR(1)` | Representative Ledger in Group |
