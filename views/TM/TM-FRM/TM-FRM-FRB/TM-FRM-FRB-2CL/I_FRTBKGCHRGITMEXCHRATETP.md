---
name: I_FRTBKGCHRGITMEXCHRATETP
description: Frtbkgchrgitmexchratetp
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
# I_FRTBKGCHRGITMEXCHRATETP

**Frtbkgchrgitmexchratetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspChrgExchangeRateUUID` | `TranspChrgExchangeRateUUID` |
| `TranspChargeItemUUID` | `TranspChargeItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `SourceCurrency` | `SourceCurrency` |
| `TargetCurrency` | `TargetCurrency` |
| `TranspChrgExchangeRate` | `TranspChrgExchangeRate` |
| `TranspChrgExchangeRateType` | `TranspChrgExchangeRateType` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `I_FreightBookingChargeItemTP` | `_TranspOrderChargeItem as _FreightBookingChargeItem : redirected to parent I_FreightBookingChargeItemTP` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Chrg Item Exch Rate - TP'
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
   representativeKey: 'TranspChrgExchangeRateUUID',
   sapObjectNodeType.name: 'FrtBkgChrgItmExchRate'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtBkgChrgItmExchRateTP
  as projection on R_TranspOrdChrgItmExchRateTP
{
  key TranspChrgExchangeRateUUID,
      TranspChargeItemUUID,
      TransportationOrderUUID,
      SourceCurrency,
      TargetCurrency,
      TranspChrgExchangeRate,
      TranspChrgExchangeRateType,
      ExchangeRateDate,
      /*Redirections */
      _TranspOrderChargeItem     as _FreightBookingChargeItem : redirected to parent I_FreightBookingChargeItemTP,
      _TransportationOrder       as _FreightBooking           : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
