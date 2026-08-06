---
name: I_FREIGHTBOOKINGCHARGETP
description: Freightbookingchargetp
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
  - freight
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGCHARGETP

**Freightbookingchargetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationChargesObjUUID` | `TransportationChargesObjUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspChargeDocumentCurrency` | `TranspChargeDocumentCurrency` |
| `TranspChrgTotalAmtInDocCrcy` | `TranspChrgTotalAmtInDocCrcy` |
| `TranspChargeLocalCurrency` | `TranspChargeLocalCurrency` |
| `TranspChrgTotalAmtInLoclCrcy` | `TranspChrgTotalAmtInLoclCrcy` |
| `TranspChargeCalculationDateTme` | `TranspChargeCalculationDateTme` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `TranspChargePostingStatus` | `TranspChargePostingStatus` |
| `TranspChargeCalcStatus` | `TranspChargeCalcStatus` |
| `I_FreightBookingTP` | `_TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |
| `I_FreightBookingChargeItemTP` | `_TranspOrderChargeItem as _FreightBookingChargeItem : redirected to composition child I_FreightBookingChargeItemTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Charge - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
  serviceQuality: #B,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
   },
   representativeKey: 'TransportationChargesObjUUID',
   sapObjectNodeType.name: 'FreightBookingCharge'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FreightBookingChargeTP
  as projection on R_TransportationOrderChargeTP
{
  key TransportationChargesObjUUID,
      TransportationOrderUUID,
      TranspChargeDocumentCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeDocumentCurrency'
      TranspChrgTotalAmtInDocCrcy,
      TranspChargeLocalCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeLocalCurrency'
      TranspChrgTotalAmtInLoclCrcy,
      TranspChargeCalculationDateTme,
      ExchangeRateDate,
      TranspChargePostingStatus,
      TranspChargeCalcStatus,

      /* Redirections */
      _TransportationOrder    as _FreightBooking           : redirected to parent I_FreightBookingTP,
      _TranspOrderChargeItem  as _FreightBookingChargeItem : redirected to composition child I_FreightBookingChargeItemTP
}
where
  TransportationOrderCategory = 'BO'
```
