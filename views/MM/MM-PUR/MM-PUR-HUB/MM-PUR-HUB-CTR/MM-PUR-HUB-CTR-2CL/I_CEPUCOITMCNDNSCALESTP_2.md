---
name: I_CEPUCOITMCNDNSCALESTP_2
description: Cepucoitmcndnscalestp 2
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
# I_CEPUCOITMCNDNSCALESTP_2

**Cepucoitmcndnscalestp 2**

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
| key `ConditionScaleLine` | `ConditionScaleLine` |
| `ConditionScaleQuantity` | `ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `ConditionScaleAmountCurrency` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionScaleIsDeleted` | `ConditionScaleIsDeleted` |
| `PricingScaleType` | `PricingScaleType` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `_CentralPurchaseContract` | *Association* |
| `_CntrlPurContrItmCndnAmount` | *Association* |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Condition Scales- TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','CentralPurchaseContractItem','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort','ConditionScaleLine' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CePuCoItmCndnScalesTP_2
  as projection on R_CntrlPurContrItmCndnScalesTP
{
      
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionScaleIsDeleted,
      PricingScaleType,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      
      /* Associations */
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrItmCndnAmount : redirected to parent I_CntrlPurContrItmCndnAmtTP_2
}
```
