---
name: I_TRANSPCHARGECALCRULE
description: "Transpchargecalcrule"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCRULE

**Transpchargecalcrule**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChrgCalcRuleUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tcc_calc_rule_uuid preserving type )` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )` |  |  |
| `TranspChargeElementUUID` |  | |  | `cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type )` |  |  |
| `TransportationCalculationBase` |  | |  | `calc_base_code` |  |  |
| `TranspChrgCalcRuleUnit` |  | |  | `qty_unit_c` |  |  |
| `TranspChrgPricePerQuantity` |  | |  | `cast(qty_value as /scmtms/vdm_tcc_qty_val preserving type)` |  |  |
| `TranspChrgDataSourceQuantity` |  | |  | `cast(quantity as /scmtms/vdm_tcc_dsrc_qty preserving type)` |  |  |
| `_TransportationCharge` | | ✓ | | | | |
| `_TranspCalculationBase` | | ✓ | | | | |
| `_TranspChrgCalcRuleQtyUnit` | | ✓ | | | | |
| `_TransportationChargeElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationCharge` | `I_TransportationCharge` | [1..1] |
| `_TranspCalculationBase` | `I_TranspCalculationBase` | [0..1] |
| `_TranspChrgCalcRuleQtyUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #PRIVILEGED_ONLY,
                 personalData.blocking:  #('TRANSACTIONAL_DATA'),
                 privilegedAssociations:['_TransportationCharge','_TransportationChargeElement']}
@EndUserText:   {label:              'Transportation Charge Calculation Rule'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChrgCalcRuleUUID',
                 usageType:          { serviceQuality: #A,
                                       sizeCategory:   #L,
                                       dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TranspChargeCalculationRule',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {viewType:          #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChargeCalcRule
  as select from /scmtms/d_tcrule
  /*Business Object realated node Composition*/
  association        to parent I_TransportationChargeElement as _TransportationChargeElement on $projection.TranspChargeElementUUID = _TransportationChargeElement.TranspChargeElementUUID
  /* Business Object Root Node Associations*/
  association [1..1] to I_TransportationCharge               as _TransportationCharge        on $projection.TransportationChargeUUID = _TransportationCharge.TransportationChargeUUID
  /* Business Object Related Node Associations*/
  association [0..1] to I_TranspCalculationBase              as _TranspCalculationBase       on $projection.TransportationCalculationBase = _TranspCalculationBase.TransportationCalculationBase
  association [0..1] to I_UnitOfMeasure                      as _TranspChrgCalcRuleQtyUnit   on $projection.TranspChrgCalcRuleUnit = _TranspChrgCalcRuleQtyUnit.UnitOfMeasure
{
  key  cast(db_key as /scmtms/vdm_tcc_calc_rule_uuid preserving type )    as TranspChrgCalcRuleUUID,
       @ObjectModel.foreignKey.association: '_TransportationCharge'
       cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )   as TransportationChargeUUID,
       @ObjectModel.foreignKey.association: '_TransportationChargeElement'
       cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type ) as TranspChargeElementUUID,
       @ObjectModel.foreignKey.association: '_TranspCalculationBase'
       calc_base_code                                                     as TransportationCalculationBase,
       @ObjectModel.foreignKey.association: '_TranspChrgCalcRuleQtyUnit'
       qty_unit_c                                                         as TranspChrgCalcRuleUnit,
       @Semantics.quantity.unitOfMeasure: 'TranspChrgCalcRuleUnit'
       cast(qty_value as /scmtms/vdm_tcc_qty_val preserving type)         as TranspChrgPricePerQuantity,
       @Semantics.quantity.unitOfMeasure: 'TranspChrgCalcRuleUnit'
       cast(quantity as /scmtms/vdm_tcc_dsrc_qty preserving type)         as TranspChrgDataSourceQuantity,
       /* Associations */
       _TranspChrgCalcRuleQtyUnit,
       _TranspCalculationBase,
       _TransportationCharge,
       _TransportationChargeElement
}
```
