---
name: I_PURGPRCGCNDNRECDSUPLMNT
description: "Purgprcgcndnrecdsuplmnt"
app_component: SD-MD-CM-2CL
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
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PURGPRCGCNDNRECDSUPLMNT

**Purgprcgcndnrecdsuplmnt**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
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
| `'IPURGPRCGNCDNSUP'` |  | |  | `sqlViewName: 'IPURGPRCGNCDNSUP'` |  |  |
| `true` |  | |  | `compiler.compareFilter: true` |  |  |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'IPURGPRCGNCDNSUP',
  compiler.compareFilter: true
}
@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}
@VDM:
{
  viewType: #BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@ObjectModel.usageType:
{
  sizeCategory: #XL,
  serviceQuality: #C,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Supplement for Pricing in Purchasing'

//P_PurgPrcgCndnRecdSuplmnt:Get combined Purchasing Pricing condition data from KONH and KONP which Condition record number not equal to 1
define view I_PurgPrcgCndnRecdSuplmnt
  as select from P_PurgPrcgCndnRecdSuplmnt
  association [0..*] to I_PurgPrcgCndnRecdValidity as _PurgPrcgCndnRecdValidity on  $projection.ConditionRecord = _PurgPrcgCndnRecdValidity.ConditionRecord
  association [0..1] to I_PurgPrcgConditionRecord  as _PurgPrcgConditionRecord  on  $projection.ConditionRecord = _PurgPrcgConditionRecord.ConditionRecord
  association [0..*] to I_PurgPrcgCndnRecordScale  as _PurgPrcgCndnRecordScale  on  $projection.ConditionRecord           = _PurgPrcgCndnRecordScale.ConditionRecord
                                                                                and $projection.ConditionSequentialNumber = _PurgPrcgCndnRecordScale.ConditionSequentialNumber
  association [0..1] to I_UnitOfMeasure            as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure            as _ConditionQuantityUnit    on  $projection.ConditionQuantityUnit = _ConditionQuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency                 as _ConditionRateValueUnit   on  $projection.ConditionRateValueUnit = _ConditionRateValueUnit.Currency
  association [0..1] to I_Currency                 as _Currency                 on  $projection.ConditionAlternativeCurrency = _Currency.Currency
{
  key ConditionRecord,
  key ConditionSequentialNumber,
      ConditionTable,
      ConditionApplication,
      ConditionType,
      @Semantics.businessDate.to: true
      ConditionValidityEndDate,      
      @Semantics.businessDate.from: true
      ConditionValidityStartDate,      
      CreatedByUser,
      CreationDate,
      ConditionTextID,
      PricingScaleType,
      PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association:  '_ConditionRateValueUnit'
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      @Semantics.currencyCode: true
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association:  '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
      @Semantics.currencyCode:true
      ConditionAlternativeCurrency,
      ConditionExclusion,
      ConditionIsDeleted,
      AdditionalValueDays,
      FixedValueDate,
      PaymentTerms,
      CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      MaximumConditionAmount,
      IncrementalScale,
      PricingScaleLine,
      ConditionReleaseStatus,

      _PurgPrcgCndnRecdValidity,
      _PurgPrcgConditionRecord,
      _PurgPrcgCndnRecordScale,
      _BaseUnit,
      _ConditionRateValueUnit,
      _ConditionQuantityUnit,
      _Currency
}
```
