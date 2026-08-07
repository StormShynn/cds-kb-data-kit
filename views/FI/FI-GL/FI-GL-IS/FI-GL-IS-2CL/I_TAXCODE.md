---
name: I_TAXCODE
description: "Taxcode"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXCODE

**Taxcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxCalculationProcedure` | ✓ | |  | `kalsm` |  |  |
| `TaxCode` | ✓ | |  | `cast(mwskz as fis_mwskz preserving type)` |  |  |
| `TaxType` |  | |  | `mwart` |  |  |
| `TargetTaxCode` |  | |  | `cast(zmwsk as farp_dzmwsk preserving type)` |  |  |
| `EUTaxClassification` |  | |  | `egrkz` |  |  |
| `IsSalesTaxes` |  | |  | `xslta` |  |  |
| `TaxCategory` |  | |  | `cast(txind as smwsk)` |  |  |
| `UnitedStatesTaxCategory` |  | |  | `cast(txind as txind_007a preserving type)` |  |  |
| `TaxReturnCountry` |  | |  | `lstml` |  |  |
| `TaxTolerancePercent` |  | |  | `cast(tolerance as fot_tax_tolerance preserving type)` |  |  |
| `EUAcqnInputTaxCode` |  | |  | `zmwsk_ese` |  |  |
| `EUAcqnOutputTaxCode` |  | |  | `zmwsk_esa` |  |  |
| `TaxCodeIsInactive` |  | |  | `xinact` |  |  |
| `MiniOneStopShopTxRptgCntry` |  | |  | `mossc` |  |  |
| `OneStopShopTaxReportingCountry` |  | |  | `mossc` |  |  |
| `OneStopShopScheme` |  | |  | `oss_classification` |  |  |
| `_Text` | | ✓ | | | | |
| `_TaxType` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TaxCodeText` | [0..*] |
| `_TaxType` | `I_TaxType` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IFITAXCODE'

@EndUserText.label: 'Tax Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TaxCode'
@ObjectModel.sapObjectNodeType.name: 'SalesTaxCode'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_TaxCode
  as select from t007a

  association [0..*] to I_TaxCodeText             as _Text
    on  $projection.TaxCalculationProcedure = _Text.TaxCalculationProcedure
    and $projection.TaxCode                 = _Text.TaxCode

  association [0..1] to I_TaxType                 as _TaxType
    on $projection.TaxType = _TaxType.TaxType

  association [0..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure
    on $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure

{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
  key kalsm                                                as TaxCalculationProcedure,

      /* end suppress warning shlporigin_not_inherited */
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(mwskz as fis_mwskz preserving type)             as TaxCode,

      @ObjectModel.foreignKey.association: '_TaxType'
      mwart                                                as TaxType,

      cast(zmwsk as farp_dzmwsk preserving type)           as TargetTaxCode,
      egrkz                                                as EUTaxClassification,
      xslta                                                as IsSalesTaxes,

      @API.element: { releaseState: #DEPRECATED, successor: 'UnitedStatesTaxCategory' }
      @Consumption.filter.hidden: true
      cast(txind as smwsk)                                 as TaxCategory,

      cast(txind as txind_007a preserving type)            as UnitedStatesTaxCategory,
      /* start suppress warning shlporigin_not_inherited */
      lstml                                                as TaxReturnCountry,
      /* end suppress warning shlporigin_not_inherited */
      cast(tolerance as fot_tax_tolerance preserving type) as TaxTolerancePercent,
      /* start suppress warning shlporigin_not_inherited */
      zmwsk_ese                                            as EUAcqnInputTaxCode,
      zmwsk_esa                                            as EUAcqnOutputTaxCode,
      /* end suppress warning shlporigin_not_inherited */
      xinact                                               as TaxCodeIsInactive,

      @API.element: { releaseState: #DEPRECATED, successor: 'OneStopShopTaxReportingCountry' }
      @Consumption.filter.hidden: true
      mossc                                                as MiniOneStopShopTxRptgCntry,

      mossc                                                as OneStopShopTaxReportingCountry,
      oss_classification                                   as OneStopShopScheme,

      _TaxCalculationProcedure,
      _TaxType,
      _Text
}
```
