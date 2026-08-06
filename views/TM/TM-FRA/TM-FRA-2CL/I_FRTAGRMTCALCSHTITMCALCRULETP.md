---
name: I_FRTAGRMTCALCSHTITMCALCRULETP
description: Frtagrmtcalcshtitmcalcruletp
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
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTCALCSHTITMCALCRULETP

**Frtagrmtcalcshtitmcalcruletp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspCalcSheetItmCalcRuleUUID` | `TranspCalcSheetItmCalcRuleUUID` |
| `TranspCalcSheetItemUUID` | `TranspCalcSheetItemUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `TransportationCalculationBase` | `TransportationCalculationBase` |
| `TranspChrgCalcRuleUnit` | `TranspChrgCalcRuleUnit` |
| `TranspChrgPricePerQuantity` | `cast( TranspChrgPricePerQuantity as /scmtms/rttable_calcrule_price preserving type )` |
| `I_FreightAgreementTP` | `FrtAgrmtCalcSheetItmCalcRule._FreightAgreement : redirected to I_FreightAgreementTP` |
| `I_FrtAgrmtCalcSheetItemTP` | `FrtAgrmtCalcSheetItmCalcRule._FrtAgrmtCalcSheetItem : redirected to parent I_FrtAgrmtCalcSheetItemTP` |

## Source Code

```abap
@EndUserText.label: 'Frt Agrmt Calc Sheet Item Calc Rule - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtCalcSheetItemCalcRule'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtCalcSheetItmCalcRule_Type'
define view entity I_FrtAgrmtCalcShtItmCalcRuleTP
  as projection on R_FrtAgrmtCalcShtItmCalcRuleTP as FrtAgrmtCalcSheetItmCalcRule
{
  key TranspCalcSheetItmCalcRuleUUID,
      TranspCalcSheetItemUUID,
      TransportationAgreementUUID,
      TransportationCalculationBase,
      TranspChrgCalcRuleUnit,
       @Semantics.quantity.unitOfMeasure: 'TranspChrgCalcRuleUnit'
      cast( TranspChrgPricePerQuantity as /scmtms/rttable_calcrule_price preserving type ) as TranspChrgPricePerQuantity, 
   
      //Association
      FrtAgrmtCalcSheetItmCalcRule._FreightAgreement      : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtCalcSheetItmCalcRule._FrtAgrmtCalcSheetItem : redirected to parent I_FrtAgrmtCalcSheetItemTP
}
```
