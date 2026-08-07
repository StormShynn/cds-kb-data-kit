---
name: I_PURCONTRITEMCNDNSCALETP
description: "Purcontritemcndnscaletp"
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
# I_PURCONTRITEMCNDNSCALETP

**Purcontritemcndnscaletp**

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
| `ConditionScaleLine` | ✓ | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `CndnScaleQuantityUnitISOCode` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionScaleIsDeleted` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionQuantityUnitISOCode` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurContract` | | ✓ | | | | |
| `_PurContrItemCndnAmount` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Item Cnd Scale - TP' 
@AccessControl.authorizationCheck: #CHECK


@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort','ConditionScaleLine' ]

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurContrItemCndnScaleTP
  as projection on R_PurContrItemCndnScaleTP
{
  key PurchaseContract,
  key PurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      CndnScaleQuantityUnitISOCode,

      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,

      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionCurrency,

      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,

      ConditionScaleIsDeleted,
      PricingScaleType,

      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionQuantityUnitISOCode,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurContract            : redirected to I_PurchaseContractTP,
      _PurContrItemCndnAmount : redirected to parent I_PurContrItemCndnAmountTP
}
```
