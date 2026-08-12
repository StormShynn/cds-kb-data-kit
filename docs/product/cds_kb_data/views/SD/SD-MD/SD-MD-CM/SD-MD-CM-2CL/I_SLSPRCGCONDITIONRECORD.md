---
name: I_SLSPRCGCONDITIONRECORD
description: "SLSPRCGCondition Record"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SLSPRCGCONDITIONRECORD

**SLSPRCGCondition Record**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'ISLSPRCGCNDNRECD'` |  | |  | `sqlViewName: 'ISLSPRCGCNDNRECD'` |  |  |
| `true` |  | |  | `compiler.compareFilter: true` |  |  |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'ISLSPRCGCNDNRECD',
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
  serviceQuality: #B,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Record for Pricing in Sales'

//P_SlsPrcgConditionRecord:Get combined Sales Pricing condition data from KONH and KONP which Condition record number equal to 1
define view I_SlsPrcgConditionRecord
  as select from P_SlsPrcgConditionRecord as Record
//     left outer to one join I_SlsPricingConditionType as ConditionType
//                         on Record.ConditionType = ConditionType.ConditionType
  association [0..*] to I_SlsPrcgCndnRecdValidity as _SlsPrcgCndnRecdValidity on  $projection.ConditionRecord = _SlsPrcgCndnRecdValidity.ConditionRecord
  association [0..*] to I_SlsPrcgCndnRecdSuplmnt  as _SlsPrcgCndnRecdSuplmnt  on  $projection.ConditionRecord = _SlsPrcgCndnRecdSuplmnt.ConditionRecord
  association [0..*] to I_SlsPrcgCndnRecordScale  as _SlsPricingCndnRecdScale on  $projection.ConditionRecord           = _SlsPricingCndnRecdScale.ConditionRecord
                                                                              and $projection.ConditionSequentialNumber = _SlsPricingCndnRecdScale.ConditionSequentialNumber
  association [0..*] to I_SlsPrcgConditionRecordText as _SlsPrcgConditionRecordText on  $projection.ConditionRecord     = _SlsPrcgConditionRecordText.ConditionRecord                                                                          
  association [0..1] to I_Currency                as _AlternativeCurrency     on  $projection.ConditionAlternativeCurrency = _AlternativeCurrency.Currency
  association [0..1] to I_Currency                as _RateValueUnit           on  $projection.ConditionRateValueUnit = _RateValueUnit.Currency
  association [0..1] to I_Currency                as _ScaleAmountCurrency     on  $projection.ConditionScaleAmountCurrency = _ScaleAmountCurrency.Currency
  association [0..1] to I_UnitOfMeasure           as _QuantityUnit            on  $projection.ConditionQuantityUnit = _QuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _ScaleQuantityUnit       on  $projection.ConditionScaleQuantityUnit = _ScaleQuantityUnit.UnitOfMeasure
{
  key Record.ConditionRecord,
      Record.ConditionSequentialNumber,
      Record.ConditionTable,
      Record.ConditionApplication,
      Record.ConditionType,
      @Semantics.businessDate.to:true
      Record.ConditionValidityEndDate,
      @Semantics.businessDate.from:true
      Record.ConditionValidityStartDate,
      Record.CreatedByUser,
      Record.CreationDate,
      Record.ConditionSearchTermValue,
      //item
      Record.ConditionTextID,
      Record.PricingScaleType,
      Record.PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      Record.ConditionScaleQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ScaleQuantityUnit'
      Record.ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      Record.ConditionScaleAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ScaleAmountCurrency'
      Record.ConditionScaleAmountCurrency,
      Record.ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Record.ConditionRateValue,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_RateValueUnit'
      Record.ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Record.ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      Record.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      Record.ConditionRateAmount,
      @Semantics.currencyCode: true
      Record.ConditionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      Record.ConditionQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      Record.ConditionQuantityUnit,
      Record.ConditionToBaseQtyNmrtr,
      Record.ConditionToBaseQtyDnmntr,
      Record.BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Record.ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true      
      Record.ConditionLowerLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Record.ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Record.ConditionUpperLimit,
       @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true     
      Record.ConditionUpperLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Record.ConditionUpperLimitRatio,
      
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AlternativeCurrency'
      Record.ConditionAlternativeCurrency,
      Record.ConditionExclusion,
      Record.ConditionIsDeleted,
      Record.AdditionalValueDays,
      Record.FixedValueDate,
      Record.PaymentTerms,
      Record.CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      Record.MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      Record.MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      Record.MaximumConditionAmount,
      Record.IncrementalScale,
      Record.PricingScaleLine,
      Record.ConditionReleaseStatus,
      Record.SalesPriceApprovalRequest,
      Record.ConditionChangeReason,
      Record.PrevApprovedConditionRecord,
      Record.ConditionTaxCode,
      Record.ConditionWithholdingTaxCode,
      Record.TaxExemptionLicense,
      Record.LicenseGrantDate,
      @Semantics.systemDateTime.lastChangedAt: true
      Record.LastChangeDateTime,
      
      SAPObjectNodeType,      
//      ConditionType.ConditionClass,
//      ConditionType.ConditionCategory,
      
      _SlsPrcgCndnRecdValidity,
      _SlsPrcgCndnRecdSuplmnt,
      _SlsPricingCndnRecdScale,
      _SlsPrcgConditionRecordText,
      _AlternativeCurrency,
      _RateValueUnit,
      _ScaleAmountCurrency,
      _QuantityUnit,
      _ScaleQuantityUnit
}
```
