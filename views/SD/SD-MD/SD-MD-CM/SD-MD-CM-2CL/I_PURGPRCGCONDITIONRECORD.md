---
name: I_PURGPRCGCONDITIONRECORD
description: "PURGPRCGCondition Record"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PURGPRCGCONDITIONRECORD

**PURGPRCGCondition Record**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'IPURGPRCGCNDNREC'` |  | |  | `sqlViewName: 'IPURGPRCGCNDNREC'` |  |  |
| `true` |  | |  | `compiler.compareFilter: true` |  |  |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'IPURGPRCGCNDNREC',
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
@EndUserText.label: 'Condition Record for Pricing in Purchasing'

//P_PurgPrcgConditionRecord:Get combined Purchasing Pricing condition data from KONH and KONP which Condition record number equal to 1
define view I_PurgPrcgConditionRecord
  as select from P_PurgPrcgConditionRecord
  association [0..*] to I_PurgPrcgCndnRecdValidity as _PurgPrcgCndnRecdValidity on  $projection.ConditionRecord = _PurgPrcgCndnRecdValidity.ConditionRecord
  association [0..*] to I_PurgPrcgCndnRecdSuplmnt  as _PurgPrcgCndnRecdSuplmnt  on  $projection.ConditionRecord = _PurgPrcgCndnRecdSuplmnt.ConditionRecord
  association [0..*] to I_PurgPrcgCndnRecordScale  as _PurgPricingCndnRecdScale on  $projection.ConditionRecord           = _PurgPricingCndnRecdScale.ConditionRecord
                                                                                and $projection.ConditionSequentialNumber = _PurgPricingCndnRecdScale.ConditionSequentialNumber
  association [0..1] to I_Currency                 as _AlternativeCurrency      on  $projection.ConditionAlternativeCurrency = _AlternativeCurrency.Currency
  association [0..1] to I_Currency                 as _RateValueUnit            on  $projection.ConditionRateValueUnit = _RateValueUnit.Currency
  association [0..1] to I_Currency                 as _ScaleAmountCurrency      on  $projection.ConditionScaleAmountCurrency = _ScaleAmountCurrency.Currency
  association [0..1] to I_UnitOfMeasure            as _QuantityUnit             on  $projection.ConditionQuantityUnit = _QuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure            as _ScaleQuantityUnit        on  $projection.ConditionScaleQuantityUnit = _ScaleQuantityUnit.UnitOfMeasure
{
  key ConditionRecord,
      ConditionSequentialNumber,
      ConditionTable,
      ConditionApplication,
      ConditionType,
      @Semantics.businessDate.to:true
      ConditionValidityEndDate,       
      @Semantics.businessDate.from:true
      ConditionValidityStartDate,
      CreatedByUser,
      CreationDate,
      //item
      ConditionTextID,
      PricingScaleType,
      PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ScaleQuantityUnit'
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ScaleAmountCurrency'
      ConditionScaleAmountCurrency,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_RateValueUnit'
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
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency' //Should change to ConditionRateValueUnit, but it`s incompatible change
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true      
      ConditionLowerLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency' //Should change to ConditionRateValueUnit, but it`s incompatible change
      ConditionUpperLimit,
       @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true     
      ConditionUpperLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionUpperLimitRatio,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AlternativeCurrency'
      ConditionAlternativeCurrency,
      ConditionExclusion,
      ConditionIsDeleted,
      AdditionalValueDays,
      FixedValueDate,
      PaymentTerms,
      CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      MaximumConditionAmount,
      IncrementalScale,
      PricingScaleLine,
      ConditionReleaseStatus,

      _PurgPrcgCndnRecdValidity,
      _PurgPrcgCndnRecdSuplmnt,
      _PurgPricingCndnRecdScale,
      _AlternativeCurrency,
      _RateValueUnit,
      _ScaleAmountCurrency,
      _QuantityUnit,
      _ScaleQuantityUnit
}
```
