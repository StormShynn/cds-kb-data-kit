---
name: I_FRTAGRMTRATETABLERATETP
description: "Frtagrmtratetableratetp"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_FRTAGRMTRATETABLERATETP

**Frtagrmtratetableratetp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateTableRateUUID` | ✓ | |  |  |  |  |
| `TranspRateTableValidityUUID` |  | |  |  |  |  |
| `TransportationRateTableUUID` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `TransportationCalcBase01` |  | |  |  |  |  |
| `TransportationCalcBase02` |  | |  |  |  |  |
| `TransportationCalcBase03` |  | |  |  |  |  |
| `TransportationCalcBase04` |  | |  |  |  |  |
| `TransportationCalcBase05` |  | |  |  |  |  |
| `TransportationCalcBase06` |  | |  |  |  |  |
| `TransportationCalcBase07` |  | |  |  |  |  |
| `TransportationCalcBase08` |  | |  |  |  |  |
| `TransportationCalcBase09` |  | |  |  |  |  |
| `TransportationCalcBase10` |  | |  |  |  |  |
| `TransportationCalcBase11` |  | |  |  |  |  |
| `TransportationCalcBase12` |  | |  |  |  |  |
| `TransportationCalcBase13` |  | |  |  |  |  |
| `TransportationCalcBase14` |  | |  |  |  |  |
| `TransportationRateCurrency` |  | |  |  |  |  |
| `TransportationRateAmount` |  | |  | `cast( TransportationRateAmount as /scmtms/rate_amount preserving type )` |  |  |
| `TransportationRatePctUnit` |  | |  |  |  |  |
| `TransportationRateAmountPct` |  | |  | `cast( TransportationRateAmountPct as /scmtms/rate_amount_pct preserving type )` |  |  |
| `TranspRateTableDimensionIndex` |  | |  | `cast( TranspRateTableDimensionIndex as /scmtms/tcm_rate_dimension preserving type )` |  |  |
| `TransportationScaleItem01Value` |  | |  | `cast( TransportationScaleItem01Value as /scmtms/scale_item01_value preserving type )` |  |  |
| `TransportationScaleItem02Value` |  | |  | `cast( TransportationScaleItem02Value as /scmtms/scale_item02_value preserving type )` |  |  |
| `TransportationScaleItem03Value` |  | |  | `cast( TransportationScaleItem03Value as /scmtms/scale_item03_value preserving type )` |  |  |
| `TransportationScaleItem04Value` |  | |  | `cast( TransportationScaleItem04Value as /scmtms/scale_item04_value preserving type )` |  |  |
| `TransportationScaleItem05Value` |  | |  | `cast( TransportationScaleItem05Value as /scmtms/scale_item05_value preserving type )` |  |  |
| `TransportationScaleItem06Value` |  | |  | `cast( TransportationScaleItem06Value as /scmtms/scale_item06_value preserving type )` |  |  |
| `TransportationScaleItem07Value` |  | |  | `cast( TransportationScaleItem07Value as /scmtms/scale_item07_value preserving type )` |  |  |
| `TransportationScaleItem08Value` |  | |  | `cast( TransportationScaleItem08Value as /scmtms/scale_item08_value preserving type )` |  |  |
| `TransportationScaleItem09Value` |  | |  | `cast( TransportationScaleItem09Value as /scmtms/scale_item09_value preserving type )` |  |  |
| `TransportationScaleItem10Value` |  | |  | `cast( TransportationScaleItem10Value as /scmtms/scale_item10_value preserving type )` |  |  |
| `TransportationScaleItem11Value` |  | |  | `cast( TransportationScaleItem11Value as /scmtms/scale_item11_value preserving type )` |  |  |
| `TransportationScaleItem12Value` |  | |  | `cast( TransportationScaleItem12Value as /scmtms/scale_item12_value preserving type )` |  |  |
| `TransportationScaleItem13Value` |  | |  | `cast( TransportationScaleItem13Value as /scmtms/scale_item13_value preserving type )` |  |  |
| `TransportationScaleItem14Value` |  | |  | `cast( TransportationScaleItem14Value as /scmtms/scale_item14_value preserving type )` |  |  |
| `I_FreightAgreementTP` |  | |  | `FrtAgrmtRateTableRate._FreightAgreement : redirected to I_FreightAgreementTP` |  |  |
| `I_FrtAgrmtRateTableValidityTP` |  | |  | `FrtAgrmtRateTableRate._FrtAgrmtRateTableValidity : redirected to parent I_FrtAgrmtRateTableValidityTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Rate Table Rate - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtRateTableRate_Type'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtRateTableRate'
}
define view entity I_FrtAgrmtRateTableRateTP
  as projection on R_FrtAgrmtRateTableRateTP as FrtAgrmtRateTableRate
{
  key TranspRateTableRateUUID,
      TranspRateTableValidityUUID,
      TransportationRateTableUUID,
      TransportationAgreementUUID,
      TransportationCalcBase01,
      TransportationCalcBase02,
      TransportationCalcBase03,
      TransportationCalcBase04,
      TransportationCalcBase05,
      TransportationCalcBase06,
      TransportationCalcBase07,
      TransportationCalcBase08,
      TransportationCalcBase09,
      TransportationCalcBase10,
      TransportationCalcBase11,
      TransportationCalcBase12,
      TransportationCalcBase13,
      TransportationCalcBase14,
      TransportationRateCurrency,
      @Semantics.amount.currencyCode: 'TransportationRateCurrency'
      cast( TransportationRateAmount as /scmtms/rate_amount preserving type ) as TransportationRateAmount,      
      TransportationRatePctUnit,
      @Semantics.quantity.unitOfMeasure: 'TransportationRatePctUnit'
      cast( TransportationRateAmountPct as /scmtms/rate_amount_pct preserving type ) as TransportationRateAmountPct, 
      cast( TranspRateTableDimensionIndex  as /scmtms/tcm_rate_dimension preserving type ) as TranspRateTableDimensionIndex,
      cast( TransportationScaleItem01Value as /scmtms/scale_item01_value preserving type ) as TransportationScaleItem01Value,
      cast( TransportationScaleItem02Value as /scmtms/scale_item02_value preserving type ) as TransportationScaleItem02Value,
      cast( TransportationScaleItem03Value as /scmtms/scale_item03_value preserving type ) as TransportationScaleItem03Value,
      cast( TransportationScaleItem04Value as /scmtms/scale_item04_value preserving type ) as TransportationScaleItem04Value,
      cast( TransportationScaleItem05Value as /scmtms/scale_item05_value preserving type ) as TransportationScaleItem05Value,
      cast( TransportationScaleItem06Value as /scmtms/scale_item06_value preserving type ) as TransportationScaleItem06Value,
      cast( TransportationScaleItem07Value as /scmtms/scale_item07_value preserving type ) as TransportationScaleItem07Value,
      cast( TransportationScaleItem08Value as /scmtms/scale_item08_value preserving type ) as TransportationScaleItem08Value,
      cast( TransportationScaleItem09Value as /scmtms/scale_item09_value preserving type ) as TransportationScaleItem09Value,
      cast( TransportationScaleItem10Value as /scmtms/scale_item10_value preserving type ) as TransportationScaleItem10Value,
      cast( TransportationScaleItem11Value as /scmtms/scale_item11_value preserving type ) as TransportationScaleItem11Value,
      cast( TransportationScaleItem12Value as /scmtms/scale_item12_value preserving type ) as TransportationScaleItem12Value,
      cast( TransportationScaleItem13Value as /scmtms/scale_item13_value preserving type ) as TransportationScaleItem13Value,
      cast( TransportationScaleItem14Value as /scmtms/scale_item14_value preserving type ) as TransportationScaleItem14Value,
       
      //Association
      FrtAgrmtRateTableRate._FreightAgreement          : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtRateTableRate._FrtAgrmtRateTableValidity : redirected to parent I_FrtAgrmtRateTableValidityTP
}
```
