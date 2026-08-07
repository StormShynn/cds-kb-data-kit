---
name: I_CEPUCOHDRCNDNSCALESTP_2
description: "Cepucohdrcndnscalestp 2"
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
# I_CEPUCOHDRCNDNSCALESTP_2

**Cepucohdrcndnscalestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |  |  |
| `ConditionScaleLine` | ✓ | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionScaleIsDeleted` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `_CentralPurchaseContract` | | ✓ | | | | |
| `_CntrlPurContrHdrCndnAmount` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Header Condition Scales - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort','ConditionScaleLine' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CePuCoHdrCndnScalesTP_2
  as projection on R_CntrlPurContrHdrCndnScalesTP
{
  key CentralPurchaseContract,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionRateValueunit'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionScaleIsDeleted,
      PricingScaleType,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,   
     
      /* Associations  */
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrHdrCndnAmount : redirected to parent I_CntrlPurContrHdrCndnAmtTP_2
}
```
