---
name: I_FRTORDCHRGELMNTEXCHRATETP
description: Frtordchrgelmntexchratetp
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
# I_FRTORDCHRGELMNTEXCHRATETP

**Frtordchrgelmntexchratetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FrtOrdChrgElementTP` | `_TranspOrdChrgElmnt as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP` |
| `I_FreightOrderTP` | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Chrg Elmnt Exch Rate - TP'
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
   representativeKey: 'TranspChrgExchangeRateUUID',
   sapObjectNodeType.name: 'FrtOrdChrgElmntExchRate'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtOrdChrgElmntExchRateTP
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
      /* Redirections */
      _TranspOrdChrgElmnt  as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP,
      _TransportationOrder as _FreightOrder      : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
