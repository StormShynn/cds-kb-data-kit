---
name: I_PURCONTRITEMCNDNAMOUNTTP
description: Purcontritemcndnamounttp
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRITEMCNDNAMOUNTTP

**Purcontritemcndnamounttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionTextID` |  | |  |  |  |  |
| `ConditionCalculationTypeShort` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ConditionLowerLimit` |  | |  |  |  |  |
| `ConditionUpperLimit` |  | |  |  |  |  |
| `ConditionLowerLimitAmount` |  | |  |  |  |  |
| `ConditionLowerLimitRatio` |  | |  |  |  |  |
| `ConditionUpperLimitAmount` |  | |  |  |  |  |
| `ConditionUpperLimitRatio` |  | |  |  |  |  |
| `ConditionAlternativeCurrency` |  | |  |  |  |  |
| `ConditionExclusion` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CndnMaxNumberOfSalesOrders` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `PricingScaleBasis` |  | |  |  |  |  |
| `PricingScaleLine` |  | |  |  |  |  |
| `ConditionHasScales` |  | |  |  |  |  |
| `PricingScaleCheckingRule` |  | |  |  |  |  |
| `MinimumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionAmount` |  | |  |  |  |  |
| `ConditionReleaseStatus` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurContrItemCndnValdty` | | ✓ | | | | |
| `_PurContract` | | ✓ | | | | |
| `_PurContrItmScales` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Item Cnd Amt - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem','ConditionRecord',
                             'ConditionValidityEndDate','ConditionSequentialNumberShort' ]

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurContrItemCndnAmountTP
  as projection on R_PurContrItemCndnAmountTP
{
  key PurchaseContract,
  key PurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
      ConditionValidityStartDate,
      ConditionApplication,
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
      
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ConditionLowerLimitAmount'
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
     
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ConditionUpperLimitAmount'
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,

      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      @OData.v2.amount.noDecimalShift: true
      ConditionLowerLimitAmount,
      ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      @OData.v2.amount.noDecimalShift: true
      ConditionUpperLimitAmount,
      ConditionUpperLimitRatio,  
      ConditionAlternativeCurrency,
      ConditionExclusion,
      ConditionIsDeleted,
      AdditionalValueDays,
      FixedValueDate,
      PaymentTerms,
      CndnMaxNumberOfSalesOrders,
      
      PricingScaleType,
      PricingScaleBasis,
      PricingScaleLine,
      ConditionHasScales,
      PricingScaleCheckingRule,
         
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      MaximumConditionAmount,
      ConditionReleaseStatus,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurContrItemCndnValdty          : redirected to parent I_PurContrItemCndnValdtyTP,
      _PurContract                     : redirected to I_PurchaseContractTP,
      _PurContrItmScales               : redirected to composition child I_PurContrItemCndnScaleTP
      
}
```
