---
name: I_TAXCODERATE
description: "Taxcoderate"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_TAXCODERATE

**Taxcoderate**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  |  |  |  |
| `TaxCalculationProcedure` | ✓ | |  |  |  |  |
| `TaxCode` | ✓ | |  |  |  |  |
| `CndnRecordValidityStartDate` | ✓ | |  |  |  |  |
| `VATConditionType` | ✓ | |  |  |  |  |
| `CndnRecordValidityEndDate` |  | |  |  |  |  |
| `ConditionRateRatio` |  | | `_FinPrcgCndnRecordItem` | `ConditionRateRatio` |  |  |
| `ConditionRateRatioUnit` |  | | `_FinPrcgCndnRecordItem` | `ConditionRateRatioUnit` |  |  |
| `ConditionStep` |  | |  |  |  |  |
| `ConditionFromRefStep` |  | |  |  |  |  |
| `AccountKeyForGLAccount` |  | |  |  |  |  |
| `TaxType` |  | |  |  |  |  |
| `TargetTaxCode` |  | |  |  |  |  |
| `EUTaxClassification` |  | |  |  |  |  |
| `IsSalesTaxes` |  | |  |  |  |  |
| `TaxCategory` |  | |  |  |  |  |
| `UnitedStatesTaxCategory` |  | |  |  |  |  |
| `TaxReturnCountry` |  | |  |  |  |  |
| `TaxTolerancePercent` |  | |  |  |  |  |
| `EUAcqnInputTaxCode` |  | |  |  |  |  |
| `EUAcqnOutputTaxCode` |  | |  |  |  |  |
| `TaxCodeIsInactive` |  | |  |  |  |  |
| `MiniOneStopShopTxRptgCntry` |  | |  |  |  |  |
| `OneStopShopTaxReportingCountry` |  | |  |  |  |  |
| `OneStopShopScheme` |  | |  |  |  |  |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinPrcgCndnRecordItem` | `R_FinPrcgCndnRecordItem` | [1..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_ConditionType` | `I_ConditionType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE] // ????
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Display tax codes along with their rates'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE

//@Analytics: {
//  dataCategory: #DIMENSION,
//  dataExtraction.enabled: true
//}
@AccessControl.personalData.blocking:#BLOCKED_DATA_EXCLUDED
@ObjectModel.representativeKey: 'TaxCode'
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
//@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'SalesTaxCode'
@Search.searchable: true


define view entity I_TaxCodeRate
  as select from            R_TaxCodesPerCountry
    inner join              P_TAXCODECONDITIONRECORDS as TAXCODECONDITIONRECORDS on  R_TaxCodesPerCountry.Country                        = TAXCODECONDITIONRECORDS.Country
                                                                                 and R_TaxCodesPerCountry.TaxCode                        = TAXCODECONDITIONRECORDS.TaxCode
                                                                                 and R_TaxCodesPerCountry.CountryIsTimeDependentTxActive = TAXCODECONDITIONRECORDS.CountryIsTimeDependentTxActive

    left outer to many join R_FinPricingProcedureItem as FinPricingProcedureItem on  TAXCODECONDITIONRECORDS.VATConditionType     = FinPricingProcedureItem.VATConditionType
                                                                                 and R_TaxCodesPerCountry.TaxCalculationProcedure = FinPricingProcedureItem.TaxCalculationProcedure

  association [1..1] to R_FinPrcgCndnRecordItem   as _FinPrcgCndnRecordItem   on  TAXCODECONDITIONRECORDS.ConditionRecord  = _FinPrcgCndnRecordItem.ConditionRecord
                                                                              and TAXCODECONDITIONRECORDS.VATConditionType = _FinPrcgCndnRecordItem.VATConditionType

  association [1..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure

  association [1..1] to I_Country                 as _Country                 on  $projection.Country = _Country.Country

  association [1..1] to I_ConditionType           as _ConditionType           on  $projection.VATConditionType        = _ConditionType.ConditionType
                                                                              and _ConditionType.ConditionApplication = 'TX'
                                                                              and _ConditionType.ConditionUsage       = 'A'

{

      //from T005+T007A+FOT_TDT_ACTVNSTAT
      @ObjectModel.foreignKey.association:'_Country'
  key R_TaxCodesPerCountry.Country                        as Country,
      @ObjectModel.foreignKey.association:'_TaxCalculationProcedure'
  key R_TaxCodesPerCountry.TaxCalculationProcedure        as TaxCalculationProcedure,
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
  key R_TaxCodesPerCountry.TaxCode                        as TaxCode,
      @Semantics.businessDate.from: true
  key TAXCODECONDITIONRECORDS.CndnRecordValidityStartDate as CndnRecordValidityStartDate, // from A003 union A4AV
      @ObjectModel.foreignKey.association:'_ConditionType'
  key TAXCODECONDITIONRECORDS.VATConditionType            as VATConditionType,
      TAXCODECONDITIONRECORDS.CndnRecordValidityEndDate   as CndnRecordValidityEndDate, // from A003 union A4AV
      //   P_TaxCodePricingDetails.TDT_ACTIVE, //to be removed
      //from KONP
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      _FinPrcgCndnRecordItem.ConditionRateRatio           as ConditionRateRatio,
      _FinPrcgCndnRecordItem.ConditionRateRatioUnit       as ConditionRateRatioUnit,
      //from T683S
      FinPricingProcedureItem.ConditionStep               as ConditionStep,
      FinPricingProcedureItem.ConditionFromRefStep        as ConditionFromRefStep,
      FinPricingProcedureItem.AccountKeyForGLAccount      as AccountKeyForGLAccount,
      // from T005+T007A+FOT_TDT_ACTVNSTAT
      R_TaxCodesPerCountry.TaxType                        as TaxType,
      R_TaxCodesPerCountry.TargetTaxCode                  as TargetTaxCode,
      R_TaxCodesPerCountry.EUTaxClassification            as EUTaxClassification,
      R_TaxCodesPerCountry.IsSalesTaxes                   as IsSalesTaxes,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'UnitedStatesTaxCategory'
      @Consumption.filter.hidden: true
      R_TaxCodesPerCountry.TaxCategory                    as TaxCategory,
      R_TaxCodesPerCountry.UnitedStatesTaxCategory        as UnitedStatesTaxCategory,
      R_TaxCodesPerCountry.TaxReturnCountry               as TaxReturnCountry,
      R_TaxCodesPerCountry.TaxTolerancePercent            as TaxTolerancePercent,
      R_TaxCodesPerCountry.EUAcqnInputTaxCode             as EUAcqnInputTaxCode,
      R_TaxCodesPerCountry.EUAcqnOutputTaxCode            as EUAcqnOutputTaxCode,
      R_TaxCodesPerCountry.TaxCodeIsInactive              as TaxCodeIsInactive,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'OneStopShopTaxReportingCountry'
      @Consumption.filter.hidden: true
      R_TaxCodesPerCountry.MiniOneStopShopTxRptgCntry     as MiniOneStopShopTxRptgCntry,
      R_TaxCodesPerCountry.OneStopShopTaxReportingCountry as OneStopShopTaxReportingCountry,
      R_TaxCodesPerCountry.OneStopShopScheme              as OneStopShopScheme,

      _TaxCalculationProcedure,
      _Country,
      _ConditionType
}
```
