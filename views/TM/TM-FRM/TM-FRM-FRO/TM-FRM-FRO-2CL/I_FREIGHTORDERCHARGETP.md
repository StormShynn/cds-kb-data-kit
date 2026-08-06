---
name: I_FREIGHTORDERCHARGETP
description: Freightorderchargetp
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
  - freight
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERCHARGETP

**Freightorderchargetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationChargesObjUUID` | `TransportationChargesObjUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspChargePostingStatus` | `TranspChargePostingStatus` |
| `TranspChargeCalcStatus` | `TranspChargeCalcStatus` |
| `TranspChargeDocumentCurrency` | `TranspChargeDocumentCurrency` |
| `TranspChrgTotalAmtInDocCrcy` | `TranspChrgTotalAmtInDocCrcy` |
| `TranspChargeLocalCurrency` | `TranspChargeLocalCurrency` |
| `TranspChrgTotalAmtInLoclCrcy` | `TranspChrgTotalAmtInLoclCrcy` |
| `TranspChargeCalculationDateTme` | `TranspChargeCalculationDateTme` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `I_FreightOrderTP` | `_TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |
| `I_FreightOrderChargeItemTP` | `_TranspOrderChargeItem as _FreightOrderChargeItem : redirected to composition child I_FreightOrderChargeItemTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
usageType:{
  serviceQuality: #B,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
  },
   representativeKey: 'TransportationChargesObjUUID',
   sapObjectNodeType.name: 'FreightOrderCharge'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FreightOrderChargeTP
  as projection on R_TransportationOrderChargeTP
{
  key TransportationChargesObjUUID,
      TransportationOrderUUID,
      TranspChargePostingStatus,
      TranspChargeCalcStatus,
      TranspChargeDocumentCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeDocumentCurrency'
      TranspChrgTotalAmtInDocCrcy,
      TranspChargeLocalCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeLocalCurrency'
      TranspChrgTotalAmtInLoclCrcy,
      TranspChargeCalculationDateTme,
      ExchangeRateDate,

      /* Redirections */
      _TransportationOrder   as _FreightOrder           : redirected to parent I_FreightOrderTP,
      _TranspOrderChargeItem as _FreightOrderChargeItem : redirected to composition child I_FreightOrderChargeItemTP
}
where
  TransportationOrderCategory = 'TO'
```
