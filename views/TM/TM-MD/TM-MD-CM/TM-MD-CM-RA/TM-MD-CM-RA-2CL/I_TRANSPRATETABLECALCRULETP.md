---
name: I_TRANSPRATETABLECALCRULETP
description: Transpratetablecalcruletp
app_component: TM-MD-CM-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transactional-processing
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPRATETABLECALCRULETP

**Transpratetablecalcruletp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspRateTableCalcRuleUUID` | `TranspRateTableCalcRuleUUID` |
| `TranspRateTableValidityUUID` | `TranspRateTableValidityUUID` |
| `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TransportationCalculationBase` | `TransportationCalculationBase` |
| `TranspRateCalcRulePricePerQty` | `cast( TranspRateCalcRulePricePerQty as /scmtms/rttable_calcrule_price preserving type )` |
| `TranspRateTableCalcRuleQtyUnit` | `TranspRateTableCalcRuleQtyUnit` |
| `I_TransportationRateTableTP` | `TranspRateTableCalcRule._TransportationRateTable : redirected to I_TransportationRateTableTP` |
| `I_TranspRateTableValidityTP` | `TranspRateTableCalcRule._TranspRateTableValidity : redirected to parent I_TranspRateTableValidityTP` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table Calculation Rule - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name: 'TranspRateTableCalcRule'
 }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'TranspRateTableCalcRule_Type'
define view entity I_TranspRateTableCalcRuleTP
  as projection on R_TranspRateTableCalcRuleTP as TranspRateTableCalcRule
{
  key TranspRateTableCalcRuleUUID,
      TranspRateTableValidityUUID,
      TransportationRateTableUUID,
      TransportationCalculationBase,
      @Semantics.quantity.unitOfMeasure: 'TranspRateTableCalcRuleQtyUnit'
      cast( TranspRateCalcRulePricePerQty as /scmtms/rttable_calcrule_price preserving type ) as TranspRateCalcRulePricePerQty, 
      TranspRateTableCalcRuleQtyUnit,

      TranspRateTableCalcRule._TransportationRateTable : redirected to I_TransportationRateTableTP,
      TranspRateTableCalcRule._TranspRateTableValidity : redirected to parent I_TranspRateTableValidityTP
}
```
