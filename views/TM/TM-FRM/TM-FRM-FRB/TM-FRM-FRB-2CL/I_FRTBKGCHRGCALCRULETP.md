---
name: I_FRTBKGCHRGCALCRULETP
description: Frtbkgchrgcalcruletp
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
# I_FRTBKGCHRGCALCRULETP

**Frtbkgchrgcalcruletp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspChrgCalcRuleUUID` | ✓ | |  |  |
| `TranspChargeItemElementUUID` |  | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TranspChrgCalculationBase` |  | |  |  |
| `TranspRateCalcRuleQtyUnit` |  | |  |  |
| `TranspRateCalcRuleQuantity` |  | |  |  |
| `TranspChrgDataSourceQuantity` |  | |  |  |
| `I_FrtBkgChrgElementTP` |  | |  | `_TranspOrdChrgElmnt as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP` |
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Charge Calc Rule - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
   },
   representativeKey: 'TranspChrgCalcRuleUUID',
   sapObjectNodeType.name: 'FrtBkgChrgCalcRule'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtBkgChrgCalcRuleTP
  as projection on R_TranspOrdChrgCalcRuleTP
{
  key TranspChrgCalcRuleUUID,
      TranspChargeItemElementUUID,
      TransportationOrderUUID,
      TranspChrgCalculationBase,
      TranspRateCalcRuleQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspRateCalcRuleQtyUnit'
      TranspRateCalcRuleQuantity,
      @Semantics.quantity.unitOfMeasure: 'TranspRateCalcRuleQtyUnit'
      TranspChrgDataSourceQuantity,

      /*Redirections */
      _TranspOrdChrgElmnt        as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP,
      _TransportationOrder       as _FreightBooking          : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
