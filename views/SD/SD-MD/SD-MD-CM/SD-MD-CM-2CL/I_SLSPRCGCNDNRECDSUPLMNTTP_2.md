---
name: I_SLSPRCGCNDNRECDSUPLMNTTP_2
description: Slsprcgcndnrecdsuplmnttp 2
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
  - transactional-processing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_SLSPRCGCNDNRECDSUPLMNTTP_2

**Slsprcgcndnrecdsuplmnttp 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionSequentialNumber` | ✓ | |  |  |  |  |
| `ConditionTable` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityEndDate` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `ConditionTextID` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `PricingScaleBasis` |  | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ConditionLowerLimit` |  | |  |  |  |  |
| `ConditionLowerLimitAmount` |  | |  |  |  |  |
| `ConditionLowerLimitRatio` |  | |  |  |  |  |
| `ConditionUpperLimit` |  | |  |  |  |  |
| `ConditionUpperLimitAmount` |  | |  |  |  |  |
| `ConditionUpperLimitRatio` |  | |  |  |  |  |
| `ConditionAlternativeCurrency` |  | |  |  |  |  |
| `ConditionExclusion` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CndnMaxNumberOfSalesOrders` |  | |  |  |  |  |
| `MinimumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionAmount` |  | |  |  |  |  |
| `IncrementalScale` |  | |  |  |  |  |
| `PricingScaleLine` |  | |  |  |  |  |
| `_SupplementScale` | | ✓ | | | | |
| `_SupplementText` | | ✓ | | | | |
| `_ConditionRecord` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Condition Supplement for Pricing in Sales - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SlsPrcgCndnRecdSuplmntTP_2
  as projection on R_SlsPrcgCndnRecdSuplmntTP as SlsPrcgCndnRecordSupplement
  {
   key ConditionRecord,
   key ConditionSequentialNumber,
      ConditionTable,
      ConditionApplication,
      ConditionType,
      ConditionValidityEndDate,
      ConditionValidityStartDate,
      CreatedByUser,
      CreationDate,
      ConditionTextID,
      PricingScaleType,
      PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,     
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true      
      ConditionLowerLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true     
      ConditionUpperLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionUpperLimitRatio,
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
//      ConditionReleaseStatus,
//      SalesPriceApprovalRequest,
//      ConditionChangeReason,
//      PrevApprovedConditionRecord,
      _SupplementScale : redirected to composition child I_SlsPrcgCndnRecdSuplmntScTP_2,
      _SupplementText   : redirected to composition child I_SlsPrcgCndnSuplmntTextTP_2,
      _ConditionRecord  : redirected to parent I_SlsPrcgConditionRecordTP_2
  }
```
