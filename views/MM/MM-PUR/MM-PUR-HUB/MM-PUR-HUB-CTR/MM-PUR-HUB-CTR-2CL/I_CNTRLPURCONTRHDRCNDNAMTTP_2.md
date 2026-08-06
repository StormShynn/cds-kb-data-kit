---
name: I_CNTRLPURCONTRHDRCNDNAMTTP_2
description: Cntrlpurcontrhdrcndnamttp 2
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRHDRCNDNAMTTP_2

**Cntrlpurcontrhdrcndnamttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralPurchaseContract` | `CentralPurchaseContract` |
| key `ConditionRecord` | `ConditionRecord` |
| key `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| key `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ConditionType` | `ConditionType` |
| `ConditionTextID` | `ConditionTextID` |
| `ConditionCalculationTypeShort` | `ConditionCalculationTypeShort` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `ConditionLowerLimit` | `ConditionLowerLimit` |
| `ConditionUpperLimit` | `ConditionUpperLimit` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionAlternativeCurrency` | `ConditionAlternativeCurrency` |
| `ConditionExclusion` | `ConditionExclusion` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `FixedValueDate` | `FixedValueDate` |
| `PaymentTerms` | `PaymentTerms` |
| `CndnMaxNumberOfSalesOrders` | `CndnMaxNumberOfSalesOrders` |
| `MinimumConditionBasisValue` | `MinimumConditionBasisValue` |
| `MaximumConditionBasisValue` | `MaximumConditionBasisValue` |
| `MaximumConditionAmount` | `MaximumConditionAmount` |
| `ConditionReleaseStatus` | `ConditionReleaseStatus` |
| `ConditionChangeReason` | `ConditionChangeReason` |
| `CmmdtyPricingEngineIsEnabled` | `CmmdtyPricingEngineIsEnabled` |
| `PricingScaleCheckingRule` | `PricingScaleCheckingRule` |
| `PricingScaleType` | `PricingScaleType` |
| `PricingScaleBasisShort` | `PricingScaleBasisShort` |
| `PricingScaleLine` | `PricingScaleLine` |
| `ConditionHasScales` | `ConditionHasScales` |
| `_CntrlPurContrHdrCndnScales` | *Association* |
| `_CntrlPurContrHdrCndnValdty` | *Association* |
| `_CentralPurchaseContract` | *Association* |

## Source Code

```abap
@EndUserText.label: 'CCTR Header Condition Amount - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlPurContrHdrCndnAmtTP_2
  as projection on R_CntrlPurContrHdrCndnAmountTP
{
    
  key CentralPurchaseContract,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
      ConditionValidityStartDate,
      ConditionType,
      ConditionTextID,
      ConditionCalculationTypeShort,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
      
      ConditionCurrency, 
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
      ConditionReleaseStatus,
      ConditionChangeReason,
      @Semantics.booleanIndicator: true
      CmmdtyPricingEngineIsEnabled,
      PricingScaleCheckingRule,
      PricingScaleType,
      PricingScaleBasisShort,
      PricingScaleLine,
      ConditionHasScales,
      
      
      /* Associations */
      _CntrlPurContrHdrCndnScales : redirected to composition child I_CePuCoHdrCndnScalesTP_2,
      _CntrlPurContrHdrCndnValdty : redirected to parent I_CePuCoHdrCndnValdtyTP_2,
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2


}
```
