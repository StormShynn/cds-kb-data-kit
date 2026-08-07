---
name: I_FREIGHTAGRMTCALCSHEETTP
description: Freightagrmtcalcsheettp
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
  - freight
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FREIGHTAGRMTCALCSHEETTP

**Freightagrmtcalcsheettp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspCalculationSheetUUID` | ✓ | |  |  |  |  |
| `TransportationCalculationSheet` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `TranspAgreementItemUUID` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FreightAgrmtCalculationSheet._FreightAgreement : redirected to I_FreightAgreementTP` |  |  |
| `I_FrtAgrmtCalcSheetItemTP` |  | |  | `FreightAgrmtCalculationSheet._FrtAgrmtCalcSheetItem : redirected to composition child I_FrtAgrmtCalcSheetItemTP` |  |  |
| `I_FreightAgreementItemTP` |  | |  | `FreightAgrmtCalculationSheet._FreightAgreementItem : redirected to parent I_FreightAgreementItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Calculation Sheet - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #B,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FreightAgrmtCalculationSheet'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FreightAgrmtCalculationSheet_Type'
define view entity I_FreightAgrmtCalcSheetTP
  as projection on R_FreightAgrmtCalcSheetTP as FreightAgrmtCalculationSheet
{
  key TranspCalculationSheetUUID,
      TransportationCalculationSheet,
      TransportationAgreementUUID,
      TranspAgreementItemUUID,
      
      //Association
      FreightAgrmtCalculationSheet._FreightAgreement : redirected to I_FreightAgreementTP,
      
      //To Child
      FreightAgrmtCalculationSheet._FrtAgrmtCalcSheetItem : redirected to composition child I_FrtAgrmtCalcSheetItemTP,
      //To Parent
      FreightAgrmtCalculationSheet._FreightAgreementItem : redirected to parent I_FreightAgreementItemTP
}
```
