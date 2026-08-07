---
name: I_TRANSPRATECALCRULE
description: Transpratecalcrule
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
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPRATECALCRULE

**Transpratecalcrule**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateCalculationRuleUUID` | ✓ | |  | `cast(db_key as /scmtms/transprt_cal_rule_uuid preserving type)` |  |  |
| `TranspRateValidityUUID` |  | |  | `cast(parent_key as /scmtms/transprate_val_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast(root_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TranspRateCalculationBase` |  | |  | `cast(calc_base_code as /scmtms/vdm_rt_calc_base preserving type)` |  |  |
| `TranspRateCalcRuleQtyUnit` |  | |  | `cast(qty_unit_c as /scmtms/vdm_tcc_calc_rule_unit preserving type)` |  |  |
| `TranspRateCalcRuleQuantity` |  | |  | `cast(qty_value as /scmtms/vdm_rt_clcrl_qty preserving type)` |  |  |
| `_TransportationRate` | | ✓ | | | | |
| `_TranspRateCalcRuleQtyUnit` | | ✓ | | | | |
| `_TranspRateCalculationBase` | | ✓ | | | | |
| `_TransportationRateValidity` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationRate` | `I_TransportationRate` | [1..1] |
| `_TranspRateCalcRuleQtyUnit` | `I_UnitOfMeasure` | [1..1] |
| `_TranspRateCalculationBase` | `I_TranspCalculationBase` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA') }
@Analytics.technicalName: 'ITRATERULE'
@EndUserText: {label: 'Transportation Rate Calculation Rule'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableCalcRule',
               representativeKey: 'TranspRateCalculationRuleUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateCalcRule
  as select from /scmtms/d_tcrtcr as TranspRateCalculationRule
  association to parent I_TransportationRateValidity_2 as _TransportationRateValidity on $projection.TranspRateValidityUUID = _TransportationRateValidity.TranspRateValidityUUID
  
  association [1..1] to I_TransportationRate           as _TransportationRate         on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
  association [1..1] to I_UnitOfMeasure                as _TranspRateCalcRuleQtyUnit  on $projection.TranspRateCalcRuleQtyUnit = _TranspRateCalcRuleQtyUnit.UnitOfMeasure
  association [1..1] to I_TranspCalculationBase        as _TranspRateCalculationBase  on $projection.TranspRateCalculationBase = _TranspRateCalculationBase.TransportationCalculationBase
{
  key cast(db_key as /scmtms/transprt_cal_rule_uuid preserving type)     as TranspRateCalculationRuleUUID,
      @ObjectModel.foreignKey.association: '_TransportationRateValidity'
      cast(parent_key as /scmtms/transprate_val_uuid preserving type)    as TranspRateValidityUUID,
      @ObjectModel.foreignKey.association: '_TransportationRate'
      cast(root_key as /scmtms/transpratetable_uuid preserving type)     as TransportationRateUUID,
      @ObjectModel.foreignKey.association: '_TranspRateCalculationBase'
      cast(calc_base_code as /scmtms/vdm_rt_calc_base preserving type)   as TranspRateCalculationBase,
      @ObjectModel.foreignKey.association: '_TranspRateCalcRuleQtyUnit'
      cast(qty_unit_c as /scmtms/vdm_tcc_calc_rule_unit preserving type) as TranspRateCalcRuleQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspRateCalcRuleQtyUnit'
      cast(qty_value as /scmtms/vdm_rt_clcrl_qty preserving type)        as TranspRateCalcRuleQuantity,

      /*Associations*/
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationRate,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationRateValidity,
      
      _TranspRateCalcRuleQtyUnit,
      _TranspRateCalculationBase
}
```
