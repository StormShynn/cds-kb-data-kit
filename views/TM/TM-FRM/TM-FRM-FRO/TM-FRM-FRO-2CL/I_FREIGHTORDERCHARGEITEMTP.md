---
name: I_FREIGHTORDERCHARGEITEMTP
description: Freightorderchargeitemtp
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
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERCHARGEITEMTP

**Freightorderchargeitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeItemUUID` | ✓ | |  |  |  |  |
| `TransportationChargesObjUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspChargeCalcLevelRefUUID` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `BusinessPartnerUUID` |  | |  |  |  |  |
| `TranspChargeCalcLevel` |  | |  |  |  |  |
| `TranspChargePostingStatus` |  | |  |  |  |  |
| `TranspChrgItemDocCurrency` |  | |  |  |  |  |
| `TranspChrgItmTotAmtInDocCrcy` |  | |  |  |  |  |
| `TranspChrgItemLoclCurrency` |  | |  |  |  |  |
| `TranspChrgItmTotAmtInLoclCrcy` |  | |  |  |  |  |
| `TranspChargeItemCalcDateTme` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `TranspChargePostingDate` |  | |  |  |  |  |
| `TranspChrgCalcDteTmeIsChanged` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderChargeTP` |  | |  | `_TransportationOrderCharge as _FreightOrderCharge : redirected to parent I_FreightOrderChargeTP` |  |  |
| `I_FrtOrdChrgElementTP` |  | |  | `_TranspOrdChrgElmnt as _FrtOrdChrgElement : redirected to composition child I_FrtOrdChrgElementTP` |  |  |
| `I_FrtOrdChrgItmExchRateTP` |  | |  | `_TranspOrdChrgItmExchRate as _FrtOrdChrgItmExchRate : redirected to composition child I_FrtOrdChrgItmExchRateTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge Item - TP'
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
   representativeKey: 'TranspChargeItemUUID',
   sapObjectNodeType.name: 'FreightOrderChargeItem'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FreightOrderChargeItemTP
  as projection on R_TranspOrderChargeItemTP
{
  key TranspChargeItemUUID,
      TransportationChargesObjUUID,
      TransportationOrderUUID,
      TranspChargeCalcLevelRefUUID,
      TransportationAgreementUUID,
      BusinessPartnerUUID,
      TranspChargeCalcLevel,
      TranspChargePostingStatus,
      TranspChrgItemDocCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemDocCurrency'
      TranspChrgItmTotAmtInDocCrcy,
      TranspChrgItemLoclCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemLoclCurrency'
      TranspChrgItmTotAmtInLoclCrcy,
      TranspChargeItemCalcDateTme,
      ExchangeRateDate,
      TranspChargePostingDate,
      TranspChrgCalcDteTmeIsChanged,
      PaymentTerms,
      /* Redirections */
      _TransportationOrder       as _FreightOrder          : redirected to I_FreightOrderTP,
      _TransportationOrderCharge as _FreightOrderCharge    : redirected to parent I_FreightOrderChargeTP,
      _TranspOrdChrgElmnt        as _FrtOrdChrgElement     : redirected to composition child I_FrtOrdChrgElementTP,
      _TranspOrdChrgItmExchRate  as _FrtOrdChrgItmExchRate : redirected to composition child I_FrtOrdChrgItmExchRateTP
}
where
  TransportationOrderCategory = 'TO'
```
