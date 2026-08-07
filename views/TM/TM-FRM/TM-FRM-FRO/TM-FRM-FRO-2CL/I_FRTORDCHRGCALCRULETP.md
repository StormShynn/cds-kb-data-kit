---
name: I_FRTORDCHRGCALCRULETP
description: Frtordchrgcalcruletp
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
# I_FRTORDCHRGCALCRULETP

**Frtordchrgcalcruletp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspChrgCalcRuleUUID` | ✓ | |  |  |
| `TranspChargeItemElementUUID` |  | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TranspChrgCalculationBase` |  | |  |  |
| `TranspRateCalcRuleQtyUnit` |  | |  |  |
| `TranspRateCalcRuleQuantity` |  | |  |  |
| `TranspChrgDataSourceQuantity` |  | |  |  |
| `I_FrtOrdChrgElementTP` |  | |  | `_TranspOrdChrgElmnt as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP` |
| `I_FreightOrderTP` |  | |  | `_TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Charge Calculation Rule - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
  },
   representativeKey: 'TranspChrgCalcRuleUUID',
   sapObjectNodeType.name: 'FrtOrdChrgCalcRule'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FrtOrdChrgCalcRuleTP
  as projection on R_TranspOrdChrgCalcRuleTP
{
  key TranspChrgCalcRuleUUID,
      TranspChargeItemElementUUID,
      TransportationOrderUUID,
      TranspChrgCalculationBase,
      TranspRateCalcRuleQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspRateCalcRuleQtyUnit'
      TranspRateCalcRuleQuantity,
      @Semantics.quantity.unitOfMeasure: 'TranspRateCalcRuleQtyUnit'
      TranspChrgDataSourceQuantity,
      /* Redirections */
      _TranspOrdChrgElmnt  as _FrtOrdChrgElement : redirected to parent I_FrtOrdChrgElementTP,
      _TransportationOrder as _FreightOrder      : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
