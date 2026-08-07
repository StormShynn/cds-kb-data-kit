---
name: I_FRTAGRMTCALCSHEETITEMTP
description: Frtagrmtcalcsheetitemtp
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTCALCSHEETITEMTP

**Frtagrmtcalcsheetitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspCalcSheetItemUUID` | ✓ | |  |  |  |  |
| `TranspCalculationSheetUUID` |  | |  |  |  |  |
| `TranspCalculationSheetItem` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `TranspChargeType` |  | |  |  |  |  |
| `TranspCalcResolutionBase` |  | |  |  |  |  |
| `TransportationRateTableUUID` |  | |  |  |  |  |
| `TranspCalcSheetItemCurrency` |  | |  |  |  |  |
| `TranspCalcSheetItemAmount` |  | |  | `cast( TranspCalcSheetItemAmount as /scmtms/calcsheet_item_amount preserving type )` |  |  |
| `TranspCalcSheetItemPctUnit` |  | |  |  |  |  |
| `TranspCalcSheetItemAmountPct` |  | |  | `cast( TranspCalcSheetItemAmountPct as /scmtms/calcshtitem_amount_pct preserving type )` |  |  |
| `TranspCalculationMethodCode` |  | |  |  |  |  |
| `TranspCalculationDateType` |  | |  |  |  |  |
| `TranspCalcSheetItemIsMandatory` |  | |  |  |  |  |
| `TranspCalcSheetItemRefFromUUID` |  | |  |  |  |  |
| `TranspCalcSheetItemRefToUUID` |  | |  |  |  |  |
| `TranspChargeInstrnType` |  | |  |  |  |  |
| `TranspIndexRateTableUUID` |  | |  |  |  |  |
| `TranspCalcShtItmIdxBaseDteTime` |  | |  |  |  |  |
| `TranspChargeIsDependent` |  | |  |  |  |  |
| `TranspRateTableID` |  | |  |  |  |  |
| `TransportationStageCategory` |  | |  |  |  |  |
| `TranspCalculationMethodName` |  | |  |  |  |  |
| `TranspCalcShtItmIsManualCharge` |  | |  |  |  |  |
| `TranspCalcSheetRefToItem` |  | |  |  |  |  |
| `TranspCalcSheetRefFromItem` |  | |  |  |  |  |
| `TranspIndexRateTable` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FrtAgrmtCalcSheetItem._FreightAgreement : redirected to I_FreightAgreementTP` |  |  |
| `I_FreightAgrmtCalcSheetTP` |  | |  | `FrtAgrmtCalcSheetItem._FreightAgrmtCalculationSheet : redirected to parent I_FreightAgrmtCalcSheetTP` |  |  |
| `I_FreightAgreementRateTableTP` |  | |  | `FrtAgrmtCalcSheetItem._FreightAgreementRateTable : redirected to composition child I_FreightAgreementRateTableTP` |  |  |
| `I_FrtAgrmtCalcShtItmCalcRuleTP` |  | |  | `FrtAgrmtCalcSheetItem._FrtAgrmtCalcShtItmCalcRule : redirected to composition child I_FrtAgrmtCalcShtItmCalcRuleTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agrmt Calc Sheet Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtCalcSheetItem'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtCalcSheetItem_Type'
define view entity I_FrtAgrmtCalcSheetItemTP
  as projection on R_FrtAgrmtCalcSheetItemTP as FrtAgrmtCalcSheetItem
{
  key TranspCalcSheetItemUUID,
      TranspCalculationSheetUUID,
      TranspCalculationSheetItem,
      TransportationAgreementUUID,
      TranspChargeType,
      TranspCalcResolutionBase,
      TransportationRateTableUUID,
      TranspCalcSheetItemCurrency,
      @Semantics.amount.currencyCode: 'TranspCalcSheetItemCurrency'
      cast( TranspCalcSheetItemAmount as /scmtms/calcsheet_item_amount preserving type ) as TranspCalcSheetItemAmount, 
      TranspCalcSheetItemPctUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspCalcSheetItemPctUnit'
      cast( TranspCalcSheetItemAmountPct as /scmtms/calcshtitem_amount_pct preserving type ) as TranspCalcSheetItemAmountPct, 
      TranspCalculationMethodCode,
      TranspCalculationDateType,
      TranspCalcSheetItemIsMandatory,
      TranspCalcSheetItemRefFromUUID,
      TranspCalcSheetItemRefToUUID,
      TranspChargeInstrnType,
      TranspIndexRateTableUUID,
      TranspCalcShtItmIdxBaseDteTime,
      TranspChargeIsDependent,
      TranspRateTableID,
      TransportationStageCategory,
      TranspCalculationMethodName,
      TranspCalcShtItmIsManualCharge,
      TranspCalcSheetRefToItem,
      TranspCalcSheetRefFromItem,
      TranspIndexRateTable,

      //Association
      FrtAgrmtCalcSheetItem._FreightAgreement           : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtCalcSheetItem._FreightAgrmtCalculationSheet      : redirected to parent I_FreightAgrmtCalcSheetTP,

      //To Child
      @Semantics.valueRange.maximum: '1'
      FrtAgrmtCalcSheetItem._FreightAgreementRateTable  : redirected to composition child I_FreightAgreementRateTableTP,
      @Semantics.valueRange.maximum: '1'
      FrtAgrmtCalcSheetItem._FrtAgrmtCalcShtItmCalcRule : redirected to composition child I_FrtAgrmtCalcShtItmCalcRuleTP
}
```
