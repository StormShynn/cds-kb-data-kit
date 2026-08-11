---
name: I_DEPRECIATIONAREAFORLEDGER
description: "This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?"
semantic_vi: "Depreciation Area — CDS view giao diện dựa trên faac_cmp_da0."
keywords:
  - "depreciation"
  - "area"
  - "company"
  - "code"
  - "ledger"
  - "asset"
  - "valuation"
  - "view"
  - "fiscal"
  - "year"
  - "variant"
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
---
# I_DEPRECIATIONAREAFORLEDGER

**This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` | ✓ | |  | `cast (depr_area as afaber)` | `NUMC(2)` | Depreciation Area Real or Derived |
| `AssetValuationView` |  | |  | `valview` | `CHAR(12)` | Valuation View |
| `FiscalYearVariant` |  | |  | `depr_fisc_year_var` | `CHAR(2)` | Fiscal Year Variant |
| `ValidityStartFiscalYear` |  | |  | `fisc_year_from` | `NUMC(4)` | Fiscal Year for Start of Validity |
| `ValidityEndFiscalYear` |  | |  | `fisc_year_to` | `NUMC(4)` | Fiscal Year for End of Validity |
| `ChartOfDepreciation` |  | |  | `cast('' as afapl)` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `AssetRealDepreciationArea1` |  | |  | `cast('00' as afabe_d)` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea2` |  | |  | `cast('00' as afabe_d)` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea3` |  | |  | `cast('00' as afabe_d)` | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea4` |  | |  | `cast('00' as afabe_d)` | `NUMC(2)` | Real depreciation area |
| `AccountingPrinciple` |  | |  | `cast('' as accounting_principle)` | `CHAR(4)` | Accounting Principle |
| `AssetGLPostingMethod` |  | |  | `cast('' as buhbkt)` | `CHAR(1)` | Post to G/L Account |
| `DerivedDeprAreaValCalcFactor1` |  | |  | `cast('0' as anteil)` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor2` |  | |  | `cast('0' as anteil)` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor3` |  | |  | `cast('0' as anteil)` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor4` |  | |  | `cast('0' as anteil)` | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcSign1` |  | |  | `cast('' as abvorz)` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign2` |  | |  | `cast('' as abvorz)` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign3` |  | |  | `cast('' as abvorz)` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign4` |  | |  | `cast('' as abvorz)` | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `AcquisitionValueCalcSign` |  | |  | `cast('' as vzansw)` | `CHAR(1)` | +/- Sign for Acquisition Value |
| `LedgerGroup` |  | |  | `cast('' as fagl_target_ldgrp)` | `CHAR(4)` | Target Ledger Group |
| `IsRealDepreciationArea` |  | |  | `cast('X' as xstore)` | `CHAR(1)` | Indicator: Store Real Depreciation Area |
| `IsRepresentativeLedger` |  | |  | `cast('X' as fagl_represent)` | `CHAR(1)` | Representative Ledger in Group |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_AssetValuationView` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_AssetValuationView` | `I_AssetValuationView` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_Text` | `I_DeprAreaForLedgerText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREAFORLEDGER')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIDEPRAREALDGR', preserveKey: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Depreciation Area'
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'AssetDepreciationArea',
                usageType.serviceQuality: #B,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_DepreciationAreaForLedger
  as select from faac_cmp_da0

  association [1..1] to I_CompanyCode           as _CompanyCode        on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Ledger                as _Ledger             on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_AssetValuationView    as _AssetValuationView on  $projection.AssetValuationView = _AssetValuationView.AssetValuationView
  association [0..1] to I_FiscalYearVariant     as _FiscalYearVariant  on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..*] to I_DeprAreaForLedgerText as _Text               on  $projection.CompanyCode           = _Text.CompanyCode
                                                                       and $projection.Ledger                = _Text.Ledger
                                                                       and $projection.AssetDepreciationArea = _Text.AssetDepreciationArea
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key comp_code as CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
  key ledger as Ledger,
      @ObjectModel.text.association: '_Text'
  key cast (depr_area as afaber) as AssetDepreciationArea,

      @ObjectModel.foreignKey.association: '_AssetValuationView'
      valview as AssetValuationView,

      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      depr_fisc_year_var as FiscalYearVariant,
      fisc_year_from as ValidityStartFiscalYear,
      fisc_year_to as ValidityEndFiscalYear,

      //Deprecated fields of I_DepreciationArea which are only added for compatibility reasons here (_DepreciationArea is used in released CUBE views)
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as afapl)                as ChartOfDepreciation,

      @VDM.lifecycle.status: #DEPRECATED
      cast('00' as afabe_d)            as AssetRealDepreciationArea1,
      @VDM.lifecycle.status: #DEPRECATED
      cast('00' as afabe_d)            as AssetRealDepreciationArea2,
      @VDM.lifecycle.status: #DEPRECATED
      cast('00' as afabe_d)            as AssetRealDepreciationArea3,
      @VDM.lifecycle.status: #DEPRECATED
      cast('00' as afabe_d)            as AssetRealDepreciationArea4,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as accounting_principle) as AccountingPrinciple,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as buhbkt)               as AssetGLPostingMethod,
      @VDM.lifecycle.status: #DEPRECATED
      cast('0' as anteil)              as DerivedDeprAreaValCalcFactor1,
      @VDM.lifecycle.status: #DEPRECATED
      cast('0' as anteil)              as DerivedDeprAreaValCalcFactor2,
      @VDM.lifecycle.status: #DEPRECATED
      cast('0' as anteil)              as DerivedDeprAreaValCalcFactor3,
      @VDM.lifecycle.status: #DEPRECATED
      cast('0' as anteil)              as DerivedDeprAreaValCalcFactor4,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as abvorz)               as DerivedDeprAreaValCalcSign1,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as abvorz)               as DerivedDeprAreaValCalcSign2,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as abvorz)               as DerivedDeprAreaValCalcSign3,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as abvorz)               as DerivedDeprAreaValCalcSign4,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as vzansw)               as AcquisitionValueCalcSign,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as fagl_target_ldgrp)    as LedgerGroup,
      cast('X' as xstore) as IsRealDepreciationArea,
      cast('X' as fagl_represent) as IsRepresentativeLedger,

      /* Associations */
      _CompanyCode,
      _Ledger,
      _AssetValuationView,
      _FiscalYearVariant,
      _Text
}
```
