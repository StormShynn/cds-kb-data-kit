---
name: I_FRTORDCHRGCALCBASETP
description: "Frtordchrgcalcbasetp"
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FRTORDCHRGCALCBASETP

**Frtordchrgcalcbasetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChrgCalcBaseUUID` | ✓ | |  |  |  |  |
| `TranspChargeItemElementUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspChrgCalculationBase` |  | |  |  |  |  |
| `TranspScaleItemQuantityUnit` |  | |  |  |  |  |
| `TranspScaleItemQuantity` |  | |  |  |  |  |
| `TranspScaleItemCurrency` |  | |  |  |  |  |
| `TranspScaleItemAmount` |  | |  |  |  |  |
| `TranspScaleItemValueChar` |  | |  |  |  |  |
| `TranspDataSourceQtyUnit` |  | |  |  |  |  |
| `TranspDataSourceQuantity` |  | |  |  |  |  |
| `TranspDataSourceCurrency` |  | |  |  |  |  |
| `TranspDataSourceAmount` |  | |  |  |  |  |
| `TranspDataSourceValueChar` |  | |  |  |  |  |
| `I_FrtOrdChrgElementTP` |  | |  | `_TranspOrdChrgElmnt as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP` |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge Calculation Base - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
usageType:{
  serviceQuality: #B,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
  },
   representativeKey: 'TranspChrgCalcBaseUUID',
   sapObjectNodeType.name: 'FrtOrdChrgCalcBase'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtOrdChrgCalcBaseTP
  as projection on R_TranspOrdChrgCalcBaseTP
{
  key TranspChrgCalcBaseUUID,
      TranspChargeItemElementUUID,
      TransportationOrderUUID,
      TranspChrgCalculationBase,
      TranspScaleItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspScaleItemQuantityUnit'
      TranspScaleItemQuantity,
      TranspScaleItemCurrency,
      @Semantics.amount.currencyCode: 'TranspScaleItemCurrency'
      TranspScaleItemAmount,
      TranspScaleItemValueChar,
      TranspDataSourceQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspDataSourceQtyUnit'
      TranspDataSourceQuantity,
      TranspDataSourceCurrency,
      @Semantics.amount.currencyCode: 'TranspDataSourceCurrency'
      TranspDataSourceAmount,
      TranspDataSourceValueChar,
      /* Redirections */
      _TranspOrdChrgElmnt  as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP,
      _TransportationOrder as _FreightOrder      : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
