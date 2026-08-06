---
name: I_SLSPRCGCNDNRECORDSCALETP_2
description: Slsprcgcndnrecordscaletp 2
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
# I_SLSPRCGCNDNRECORDSCALETP_2

**Slsprcgcndnrecordscaletp 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionRecord` | `ConditionRecord` |
| key `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| key `ConditionScaleLine` | `ConditionScaleLine` |
| `ConditionScaleQuantity` | `ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `ConditionScaleAmountCurrency` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionCurrency` | `ConditionCurrency` |
| `_ConditionRecord` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Pricing Scale of Condition Record in Sales - TP'

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

define view entity I_SlsPrcgCndnRecordScaleTP_2
  as projection on R_SlsPrcgCndnRecordScaleTP as SlsPrcgConditionRecordScale
  {
    key ConditionRecord,
  key ConditionSequentialNumber,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
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
      _ConditionRecord : redirected to parent I_SlsPrcgConditionRecordTP_2
  }
```
