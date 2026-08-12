---
name: I_DEPRECIATIONAREA
description: "Depreciation Area"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREA')/$value
semantic_en: "Depreciation Area"
semantic_vi: "Depreciation Area — CDS view giao diện dựa trên I_DepreciationAreaForLedger."
keywords:
  - "depreciation"
  - "area"
  - "company"
  - "code"
  - "ledger"
  - "asset"
  - "chart"
  - "real"
  - "area1"
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
# I_DEPRECIATIONAREA

**Depreciation Area**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` | ✓ | |  |  | `NUMC(2)` | Depreciation Area Real or Derived |
| `ChartOfDepreciation` |  | |  |  | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `AssetRealDepreciationArea1` |  | |  |  | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea2` |  | |  |  | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea3` |  | |  |  | `NUMC(2)` | Real depreciation area |
| `AssetRealDepreciationArea4` |  | |  |  | `NUMC(2)` | Real depreciation area |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `AssetGLPostingMethod` |  | |  |  | `CHAR(1)` | Post to G/L Account |
| `DerivedDeprAreaValCalcFactor1` |  | |  |  | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor2` |  | |  |  | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor3` |  | |  |  | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcFactor4` |  | |  |  | `NUMC(1)` | Proportion of Real Depreciation Area in Derived Dep.Area |
| `DerivedDeprAreaValCalcSign1` |  | |  |  | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign2` |  | |  |  | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign3` |  | |  |  | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `DerivedDeprAreaValCalcSign4` |  | |  |  | `CHAR(1)` | +/- Sgn of Real Dep. Area in Screen Layout Rule of Der. Area |
| `AcquisitionValueCalcSign` |  | |  |  | `CHAR(1)` | +/- Sign for Acquisition Value |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Target Ledger Group |
| `IsRealDepreciationArea` |  | |  |  | `CHAR(1)` | Indicator: Store Real Depreciation Area |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_LedgerGroup` | | ✓ | | | | |
| `_RealDepreciationArea1` | | ✓ | | | | |
| `_RealDepreciationArea2` | | ✓ | | | | |
| `_RealDepreciationArea3` | | ✓ | | | | |
| `_RealDepreciationArea4` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [1] |
| `_LedgerGroup` | `I_LedgerGroup` | [0..1] |
| `_RealDepreciationArea1` | `I_RealDepreciationArea` | [0..1] |
| `_RealDepreciationArea2` | `I_RealDepreciationArea` | [0..1] |
| `_RealDepreciationArea3` | `I_RealDepreciationArea` | [0..1] |
| `_RealDepreciationArea4` | `I_RealDepreciationArea` | [0..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONAREA')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IDEPRAREA', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Depreciation Area'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetDepreciationArea',
                usageType.serviceQuality: #B,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

/********************************************************************************/
/* Used for compatbilty reasons:                                                */
/* Foreign Key Association to I_DepreciationArea is used in released CUBE views */
/* -> Key is adapted to new asset config. desgin                                */
/********************************************************************************/
define view I_DepreciationArea
  as select from I_DepreciationAreaForLedger

  association [1]    to I_ChartOfDepreciation  as _ChartOfDepreciation   on  $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..1] to I_LedgerGroup          as _LedgerGroup           on  $projection.LedgerGroup = _LedgerGroup.LedgerGroup
  association [0..1] to I_RealDepreciationArea as _RealDepreciationArea1 on  $projection.ChartOfDepreciation        = _RealDepreciationArea1.ChartOfDepreciation
                                                                         and $projection.AssetRealDepreciationArea1 = _RealDepreciationArea1.AssetRealDepreciationArea
  association [0..1] to I_RealDepreciationArea as _RealDepreciationArea2 on  $projection.ChartOfDepreciation        = _RealDepreciationArea2.ChartOfDepreciation
                                                                         and $projection.AssetRealDepreciationArea2 = _RealDepreciationArea2.AssetRealDepreciationArea
  association [0..1] to I_RealDepreciationArea as _RealDepreciationArea3 on  $projection.ChartOfDepreciation        = _RealDepreciationArea3.ChartOfDepreciation
                                                                         and $projection.AssetRealDepreciationArea3 = _RealDepreciationArea3.AssetRealDepreciationArea
  association [0..1] to I_RealDepreciationArea as _RealDepreciationArea4 on  $projection.ChartOfDepreciation        = _RealDepreciationArea4.ChartOfDepreciation
                                                                         and $projection.AssetRealDepreciationArea4 = _RealDepreciationArea4.AssetRealDepreciationArea
  association [0..1] to I_AccountingPrinciple  as _AccountingPrinciple   on  $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.text.association: '_Text'
  key AssetDepreciationArea,

      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
      ChartOfDepreciation,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_RealDepreciationArea1'
      @Consumption: {filter.hidden: true, hidden: true}
      AssetRealDepreciationArea1,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_RealDepreciationArea2'
      @Consumption: {filter.hidden: true, hidden: true}
      AssetRealDepreciationArea2,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_RealDepreciationArea3'
      @Consumption: {filter.hidden: true, hidden: true}
      AssetRealDepreciationArea3,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_RealDepreciationArea4'
      @Consumption: {filter.hidden: true, hidden: true}
      AssetRealDepreciationArea4,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      AccountingPrinciple,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      AssetGLPostingMethod,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcFactor1,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcFactor2,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcFactor3,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcFactor4,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcSign1,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcSign2,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcSign3,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      DerivedDeprAreaValCalcSign4,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      AcquisitionValueCalcSign,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_LedgerGroup'
      @Consumption: {filter.hidden: true, hidden: true}
      LedgerGroup,
      @VDM.lifecycle.status: #DEPRECATED
      @Consumption: {filter.hidden: true, hidden: true}
      IsRealDepreciationArea,

      _CompanyCode,
      _Ledger,
      @VDM.lifecycle.status: #DEPRECATED
      _ChartOfDepreciation,
      @VDM.lifecycle.status: #DEPRECATED
      _LedgerGroup,
      @VDM.lifecycle.status: #DEPRECATED
      _RealDepreciationArea1,
      @VDM.lifecycle.status: #DEPRECATED
      _RealDepreciationArea2,
      @VDM.lifecycle.status: #DEPRECATED
      _RealDepreciationArea3,
      @VDM.lifecycle.status: #DEPRECATED
      _RealDepreciationArea4,
      @VDM.lifecycle.status: #DEPRECATED
      _AccountingPrinciple,
      _Text
}
```
