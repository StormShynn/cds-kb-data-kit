---
name: I_FRTBKGCHRGELEMENTTP
description: "Frtbkgchrgelementtp"
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
# I_FRTBKGCHRGELEMENTTP

**Frtbkgchrgelementtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeItemElementUUID` | ✓ | |  |  |  |  |
| `TranspChargeItemUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TransportationRateUUID` |  | |  |  |  |  |
| `TranspCalculationSheetItem` |  | |  |  |  |  |
| `TranspChargeType` |  | |  |  |  |  |
| `TranspCalcResolutionBase` |  | |  |  |  |  |
| `TranspCalculationDateType` |  | |  |  |  |  |
| `TranspChargeCalculationDateTme` |  | |  |  |  |  |
| `TranspChargeCalculationCrcy` |  | |  |  |  |  |
| `TranspChargeCalcAmtInCalcCrcy` |  | |  |  |  |  |
| `TransportationRateCurrency` |  | |  |  |  |  |
| `TranspRateAmountInRateCrcy` |  | |  |  |  |  |
| `TransportationRatePctUnit` |  | |  |  |  |  |
| `TransportationRateAmountPct` |  | |  |  |  |  |
| `TranspRateAmtIsManuallyChanged` |  | |  |  |  |  |
| `TranspChrgLineNumber` |  | |  |  |  |  |
| `TranspChrgRefFromLineNumber` |  | |  |  |  |  |
| `TranspChrgRefToLineNumber` |  | |  |  |  |  |
| `TranspChargeDocumentCurrency` |  | |  |  |  |  |
| `TranspChrgAmountInDocCurrency` |  | |  |  |  |  |
| `TranspChargeLocalCurrency` |  | |  |  |  |  |
| `TranspChrgAmountInLoclCurrency` |  | |  |  |  |  |
| `TranspIndexRateTableUUID` |  | |  |  |  |  |
| `TransportationRate` |  | |  |  |  |  |
| `TranspChargeIsMandatory` |  | |  |  |  |  |
| `TranspDimnWeightProfile` |  | |  |  |  |  |
| `TranspCalculationMethodType` |  | |  |  |  |  |
| `TranspCalculationMethodName` |  | |  |  |  |  |
| `TranspChargeCalcStatus` |  | |  |  |  |  |
| `TranspChargePostingStatus` |  | |  |  |  |  |
| `I_FreightBookingChargeItemTP` |  | |  | `_TranspOrderChargeItem as _FreightBookingChargeItem : redirected to parent I_FreightBookingChargeItemTP` |  |  |
| `I_FrtBkgChrgCalcBaseTP` |  | |  | `_TranspOrdChrgCalcBase as _FrtBkgChrgCalcBase : redirected to composition child I_FrtBkgChrgCalcBaseTP` |  |  |
| `I_FrtBkgChrgCalcRuleTP` |  | |  | `_TranspOrdChrgCalcRule as _FrtBkgChrgCalcRule : redirected to composition child I_FrtBkgChrgCalcRuleTP` |  |  |
| `I_FrtBkgChrgElmntExchRateTP` |  | |  | `_TranspOrdChrgElmntExchRate as _FrtBkgChrgElmntExchRate : redirected to composition child I_FrtBkgChrgElmntExchRateTP` |  |  |
| `I_FreightBookingTP` |  | |  | `_TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Charge Element - TP'
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
   representativeKey: 'TranspChargeItemElementUUID',
   sapObjectNodeType.name: 'FrtBkgChrgElement'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtBkgChrgElementTP
  as projection on R_TranspOrdChrgElmntTP
{
  key TranspChargeItemElementUUID,
      TranspChargeItemUUID,
      TransportationOrderUUID,
      TransportationRateUUID,
      TranspCalculationSheetItem,
      TranspChargeType,
      TranspCalcResolutionBase,
      TranspCalculationDateType,
      TranspChargeCalculationDateTme,
      TranspChargeCalculationCrcy,
      @Semantics.amount.currencyCode: 'TranspChargeCalculationCrcy'
      TranspChargeCalcAmtInCalcCrcy,
      TransportationRateCurrency,
      @Semantics.amount.currencyCode: 'TransportationRateCurrency'
      TranspRateAmountInRateCrcy,
      TransportationRatePctUnit,
      @Semantics.quantity.unitOfMeasure: 'TransportationRatePctUnit'
      TransportationRateAmountPct,
      TranspRateAmtIsManuallyChanged,
      TranspChrgLineNumber,
      TranspChrgRefFromLineNumber,
      TranspChrgRefToLineNumber,
      TranspChargeDocumentCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeDocumentCurrency'
      TranspChrgAmountInDocCurrency,
      TranspChargeLocalCurrency,
      @Semantics.amount.currencyCode: 'TranspChargeLocalCurrency'
      TranspChrgAmountInLoclCurrency,
      TranspIndexRateTableUUID,
      TransportationRate,
      TranspChargeIsMandatory,
      TranspDimnWeightProfile,
      TranspCalculationMethodType,
      TranspCalculationMethodName,
      TranspChargeCalcStatus,
      TranspChargePostingStatus,

      /* Redirections */
      _TranspOrderChargeItem      as _FreightBookingChargeItem : redirected to parent I_FreightBookingChargeItemTP,
      _TranspOrdChrgCalcBase      as _FrtBkgChrgCalcBase       : redirected to composition child I_FrtBkgChrgCalcBaseTP,
      @Semantics.valueRange.maximum: '1'
      _TranspOrdChrgCalcRule      as _FrtBkgChrgCalcRule       : redirected to composition child I_FrtBkgChrgCalcRuleTP,
      @Semantics.valueRange.maximum: '1'
      _TranspOrdChrgElmntExchRate as _FrtBkgChrgElmntExchRate  : redirected to composition child I_FrtBkgChrgElmntExchRateTP,
      _TransportationOrder        as _FreightBooking           : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
