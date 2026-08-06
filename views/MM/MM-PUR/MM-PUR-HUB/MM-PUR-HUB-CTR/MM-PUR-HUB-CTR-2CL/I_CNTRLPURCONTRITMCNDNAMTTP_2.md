---
name: I_CNTRLPURCONTRITMCNDNAMTTP_2
description: Cntrlpurcontritmcndnamttp 2
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
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRITMCNDNAMTTP_2

**Cntrlpurcontritmcndnamttp 2**

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
| key `CentralPurchaseContractItem` | `CentralPurchaseContractItem` |
| key `ConditionRecord` | `ConditionRecord` |
| key `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| key `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ProcmtHubPlantUniqueID` | `ProcmtHubPlantUniqueID` |
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
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionLowerLimit` | `ConditionLowerLimit` |
| `ConditionUpperLimit` | `ConditionUpperLimit` |
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
| `_CentralPurchaseContract` | *Association* |
| `_CntrlPurContrItmCndnValdty` | *Association* |
| `_CntrlPurContrItmScales` | *Association* |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Condition Amount - TP'
@AccessControl.authorizationCheck: #CHECK


@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','CentralPurchaseContractItem','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrItmCndnAmtTP_2
  as projection on R_CntrlPurContrItmCndnAmountTP
{
     
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
      ConditionValidityStartDate,
      ProcmtHubPlantUniqueID,
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
      
      ConditionCurrency,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
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
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrItmCndnValdty : redirected to parent I_CePuCoItmCndnValidityTP_2,
      _CntrlPurContrItmScales     : redirected to composition child I_CePuCoItmCndnScalesTP_2

}
```
