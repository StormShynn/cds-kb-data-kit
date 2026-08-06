---
name: I_FRTAGRMTRATETABLECALCRULETP
description: Frtagrmtratetablecalcruletp
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
# I_FRTAGRMTRATETABLECALCRULETP

**Frtagrmtratetablecalcruletp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspRateTableCalcRuleUUID` | `TranspRateTableCalcRuleUUID` |
| `TranspRateTableValidityUUID` | `TranspRateTableValidityUUID` |
| `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `TransportationCalculationBase` | `TransportationCalculationBase` |
| `TranspRateTableCalcRuleQtyUnit` | `TranspRateTableCalcRuleQtyUnit` |
| `TranspRateCalcRulePricePerQty` | `cast( TranspRateCalcRulePricePerQty as /scmtms/rttable_calcrule_price preserving type )` |
| `I_FreightAgreementTP` | `FrtAgrmtRateTableCalcRule._FreightAgreement : redirected to I_FreightAgreementTP` |
| `I_FrtAgrmtRateTableValidityTP` | `FrtAgrmtRateTableCalcRule._FrtAgrmtRateTableValidity : redirected to parent I_FrtAgrmtRateTableValidityTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Agrmt Rate Table Calc Rule - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #S,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtRateTableCalcRule'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtRateTableCalcRule_Type'
define view entity I_FrtAgrmtRateTableCalcRuleTP
  as projection on R_FrtAgrmtRateTableCalcRuleTP as FrtAgrmtRateTableCalcRule
{
  key TranspRateTableCalcRuleUUID,
      TranspRateTableValidityUUID,
      TransportationRateTableUUID,
      TransportationAgreementUUID,
      TransportationCalculationBase,
      TranspRateTableCalcRuleQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspRateTableCalcRuleQtyUnit'
      cast( TranspRateCalcRulePricePerQty as /scmtms/rttable_calcrule_price preserving type ) as TranspRateCalcRulePricePerQty, 
      
      //Association
      FrtAgrmtRateTableCalcRule._FreightAgreement          : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtRateTableCalcRule._FrtAgrmtRateTableValidity : redirected to parent I_FrtAgrmtRateTableValidityTP
}
```
