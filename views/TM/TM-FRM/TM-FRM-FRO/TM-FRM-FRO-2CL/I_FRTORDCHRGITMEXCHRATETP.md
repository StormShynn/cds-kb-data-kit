---
name: I_FRTORDCHRGITMEXCHRATETP
description: Frtordchrgitmexchratetp
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
# I_FRTORDCHRGITMEXCHRATETP

**Frtordchrgitmexchratetp**

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
| `TranspChargeItemUUID` | `TranspChargeItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `SourceCurrency` | `SourceCurrency` |
| `TargetCurrency` | `TargetCurrency` |
| `TranspChrgExchangeRate` | `TranspChrgExchangeRate` |
| `TranspChrgExchangeRateType` | `TranspChrgExchangeRateType` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `I_FreightOrderChargeItemTP` | `_TranspOrderChargeItem as _FreightOrderChargeItem : redirected to parent I_FreightOrderChargeItemTP` |
| `I_FreightOrderTP` | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge Item Exch Rate - TP'
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
   sapObjectNodeType.name: 'FrtOrdChrgItmExchRate'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtOrdChrgItmExchRateTP
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
      /* Redirections */
      _TranspOrderChargeItem as _FreightOrderChargeItem : redirected to parent I_FreightOrderChargeItemTP,
      _TransportationOrder   as _FreightOrder           : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
