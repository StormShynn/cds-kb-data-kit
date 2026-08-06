---
name: I_FRTBKGCHRGELMNTEXCHRATETP
description: Frtbkgchrgelmntexchratetp
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
# I_FRTBKGCHRGELMNTEXCHRATETP

**Frtbkgchrgelmntexchratetp**

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
| `TranspChargeItemElementUUID` | `TranspChargeItemElementUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `SourceCurrency` | `SourceCurrency` |
| `TargetCurrency` | `TargetCurrency` |
| `TranspChrgExchangeRate` | `TranspChrgExchangeRate` |
| `TranspChrgExchangeRateType` | `TranspChrgExchangeRateType` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `TranspExchRateDateIsMnllyChgd` | `TranspExchRateDateIsMnllyChgd` |
| `TranspExchRateIsManuallyChgd` | `TranspExchRateIsManuallyChgd` |
| `I_FrtBkgChrgElementTP` | `_TranspOrdChrgElmnt as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Chrg Elmnt Exch Rate - TP'
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
   sapObjectNodeType.name: 'FrtBkgChrgElmntExchRate'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtBkgChrgElmntExchRateTP
  as projection on R_TranspOrdChrgElmntExchRateTP
{
  key TranspChrgExchangeRateUUID,
      TranspChargeItemElementUUID,
      TransportationOrderUUID,
      SourceCurrency,
      TargetCurrency,
      TranspChrgExchangeRate,
      TranspChrgExchangeRateType,
      ExchangeRateDate,
      TranspExchRateDateIsMnllyChgd,
      TranspExchRateIsManuallyChgd,

      /*Redirections */
      _TranspOrdChrgElmnt        as _FreightBookingChrgElmnt : redirected to parent I_FrtBkgChrgElementTP,
      _TransportationOrder       as _FreightBooking          : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
