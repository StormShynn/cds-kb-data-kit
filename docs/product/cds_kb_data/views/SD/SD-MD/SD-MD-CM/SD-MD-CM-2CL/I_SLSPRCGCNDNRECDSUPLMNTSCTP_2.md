---
name: I_SLSPRCGCNDNRECDSUPLMNTSCTP_2
description: "Slsprcgcndnrecdsuplmntsctp 2"
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
# I_SLSPRCGCNDNRECDSUPLMNTSCTP_2

**Slsprcgcndnrecdsuplmntsctp 2**

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
| `ConditionScaleLine` | ✓ | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `_Supplement` | | ✓ | | | | |
| `_ConditionRecord` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Pricing Scale of Condition Supplement in Sales - TP'

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

define view entity I_SlsPrcgCndnRecdSuplmntScTP_2
  as projection on R_SlsPrcgCndnRecdSuplmntScTP as SlsPrcgCndnRecdSupplementScale
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
      _Supplement : redirected to parent I_SlsPrcgCndnRecdSuplmntTP_2,
      _ConditionRecord : redirected to I_SlsPrcgConditionRecordTP_2
  }
```
