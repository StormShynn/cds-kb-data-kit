---
name: I_FRTBKGCHRGCALCBASETP
description: Frtbkgchrgcalcbasetp
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FRTBKGCHRGCALCBASETP

**Frtbkgchrgcalcbasetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspChrgCalcBaseUUID` | `TranspChrgCalcBaseUUID` |
| `TranspChargeItemElementUUID` | `TranspChargeItemElementUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspChrgCalculationBase` | `TranspChrgCalculationBase` |
| `TranspScaleItemQuantityUnit` | `TranspScaleItemQuantityUnit` |
| `TranspScaleItemQuantity` | `TranspScaleItemQuantity` |
| `TranspScaleItemCurrency` | `TranspScaleItemCurrency` |
| `TranspScaleItemAmount` | `TranspScaleItemAmount` |
| `TranspScaleItemValueChar` | `TranspScaleItemValueChar` |
| `TranspDataSourceQtyUnit` | `TranspDataSourceQtyUnit` |
| `TranspDataSourceQuantity` | `TranspDataSourceQuantity` |
| `TranspDataSourceCurrency` | `TranspDataSourceCurrency` |
| `TranspDataSourceAmount` | `TranspDataSourceAmount` |
| `TranspDataSourceValueChar` | `TranspDataSourceValueChar` |
| `I_FrtBkgChrgElementTP` | `_TranspOrdChrgElmnt as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Charge Calc Base - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
  serviceQuality: #B,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
   },
   representativeKey: 'TranspChrgCalcBaseUUID',
   sapObjectNodeType.name: 'FrtBkgChrgCalcBase'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtBkgChrgCalcBaseTP
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
      _TranspOrdChrgElmnt        as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP,
      _TransportationOrder       as _FreightBooking          : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
