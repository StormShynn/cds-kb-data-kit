---
name: I_FRTORDCHRGELEMENTTP
description: "Frtordchrgelementtp"
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
# I_FRTORDCHRGELEMENTTP

**Frtordchrgelementtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FreightOrderChargeItemTP` |  | |  | `_TranspOrderChargeItem as _FreightOrderChargeItem : redirected to parent I_FreightOrderChargeItemTP` |  |  |
| `I_FrtOrdChrgCalcBaseTP` |  | |  | `_TranspOrdChrgCalcBase as _FrtOrdChrgCalcBase : redirected to composition child I_FrtOrdChrgCalcBaseTP` |  |  |
| `I_FrtOrdChrgCalcRuleTP` |  | |  | `_TranspOrdChrgCalcRule as _FrtOrdChrgCalcRule : redirected to composition child I_FrtOrdChrgCalcRuleTP` |  |  |
| `I_FrtOrdChrgElmntExchRateTP` |  | |  | `_TranspOrdChrgElmntExchRate as _FrtOrdChrgElmntExchRate : redirected to composition child I_FrtOrdChrgElmntExchRateTP` |  |  |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge Element - TP'
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
   representativeKey: 'TranspChargeItemElementUUID',
   sapObjectNodeType.name: 'FrtOrdChrgElement'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtOrdChrgElementTP
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
      _TranspOrderChargeItem      as _FreightOrderChargeItem  : redirected to parent I_FreightOrderChargeItemTP,
      _TranspOrdChrgCalcBase      as _FrtOrdChrgCalcBase      : redirected to composition child I_FrtOrdChrgCalcBaseTP,
      @Semantics.valueRange.maximum: '1'
      _TranspOrdChrgCalcRule      as _FrtOrdChrgCalcRule      : redirected to composition child I_FrtOrdChrgCalcRuleTP,
      @Semantics.valueRange.maximum: '1'
      _TranspOrdChrgElmntExchRate as _FrtOrdChrgElmntExchRate : redirected to composition child I_FrtOrdChrgElmntExchRateTP,
      _TransportationOrder        as _FreightOrder            : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
