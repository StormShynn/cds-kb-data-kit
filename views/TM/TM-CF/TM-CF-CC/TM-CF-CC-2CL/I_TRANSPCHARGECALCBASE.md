---
name: I_TRANSPCHARGECALCBASE
description: "Transpchargecalcbase"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
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
# I_TRANSPCHARGECALCBASE

**Transpchargecalcbase**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChrgCalcBaseUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tcc_calc_base_uuid preserving type )` |  |  |
| `TranspChrgCalcBaseNodeUUID` |  | |  | `cast(node_key as /scmtms/vdm_tcc_cb_node_uuid preserving type )` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type)` |  |  |
| `TranspChargeElementUUID` |  | |  | `cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type)` |  |  |
| `TransportationCalculationBase` |  | |  | `clcbas_cd025_i` |  |  |
| `TranspScaleItemQuantityUnit` |  | |  | `sitm1_qty_unit_c` |  |  |
| `TranspScaleItemQuantity` |  | |  | `cast(sitm1_qty_value as /scmtms/vdm_tcc_scale_qty preserving type)` |  |  |
| `TranspScaleItemCurrency` |  | |  | `sitm1_currcode016` |  |  |
| `TranspScaleItemAmount` |  | |  | `cast( cast( sitm1_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_sc_item_amount )` |  |  |
| `TranspScaleItemQtyChar` |  | |  | `cast(sitm1_qty_value_chr as /scmtms/vdm_tcc_scale_qty_char preserving type )` |  |  |
| `TranspScaleItemQtyIsNumeric` |  | |  | `cast(sitm1_qty_is_num as /scmtms/vdm_sc_itm_qty_is_num preserving type )` |  |  |
| `TranspScaleItemQtyIsCurrency` |  | |  | `cast(sitm1_qty_is_curr as /scmtms/vdm_sc_itm_qty_is_curr preserving type )` |  |  |
| `TranspDataSourceQtyUnit` |  | |  | `cast(dsrc_qty_unit_c as /scmtms/vdm_tcc_dsrc_qty_unit preserving type )` |  |  |
| `TranspDataSourceQuantity` |  | |  | `cast(dsrc_qty_value as /scmtms/vdm_tcc_dsrc_qty preserving type)` |  |  |
| `TranspDataSourceCurrency` |  | |  | `cast(dsrc_currcode016 as /scmtms/vdm_tcc_dsrc_currency preserving type )` |  |  |
| `TranspDataSourceAmount` |  | |  | `cast( cast( dsrc_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tcc_dsrc_amount )` |  |  |
| `TranspDataSourceQtyChar` |  | |  | `cast(dsrc_qty_value_chr as /scmtms/vdm_tcc_dsrc_qty_char preserving type )` |  |  |
| `TranspDataSourceQtyIsNumeric` |  | |  | `cast(dsrc_qty_is_num as /scmtms/vdm_dsrc_qty_is_num preserving type )` |  |  |
| `TranspDataSourceQtyIsCurrency` |  | |  | `cast(dsrc_qty_is_curr as /scmtms/vdm_dsrc_qty_is_curr preserving type )` |  |  |
| `_TransportationCharge` | | ✓ | | | | |
| `_TranspCalculationBase` | | ✓ | | | | |
| `_TranspScaleItemQuantityUnit` | | ✓ | | | | |
| `_TranspDataSourceQtyUnit` | | ✓ | | | | |
| `_TranspScaleItemCurrency` | | ✓ | | | | |
| `_TranspDataSourceCurrency` | | ✓ | | | | |
| `_TransportationChargeElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationCharge` | `I_TransportationCharge` | [1..1] |
| `_TranspCalculationBase` | `I_TranspCalculationBase` | [0..1] |
| `_TranspScaleItemQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspDataSourceQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspScaleItemCurrency` | `I_Currency` | [0..1] |
| `_TranspDataSourceCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #PRIVILEGED_ONLY,
                 personalData.blocking:  #('TRANSACTIONAL_DATA'),
                 privilegedAssociations:['_TransportationCharge','_TransportationChargeElement']}
@EndUserText:   {label:             'Transportation Charge Calculation Base'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChrgCalcBaseUUID',
                 semanticKey:        [ 'TransportationCalculationBase' ],
                 usageType:          { serviceQuality: #A,
                                       sizeCategory:   #L,
                                       dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TranspChargeCalculationBase',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {viewType:          #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChargeCalcBase 
  as select from /scmtms/d_tcbasi
  /*Business Object related node Composition relation*/ 
  association        to parent I_TransportationChargeElement as _TransportationChargeElement on $projection.TranspChargeElementUUID = _TransportationChargeElement.TranspChargeElementUUID
  /*Business Object Root Node association*/
  association [1..1] to I_TransportationCharge               as _TransportationCharge        on $projection.TransportationChargeUUID = _TransportationCharge.TransportationChargeUUID
  /* Business Object related Node Associations*/
  association [0..1] to I_TranspCalculationBase              as _TranspCalculationBase       on $projection.TransportationCalculationBase = _TranspCalculationBase.TransportationCalculationBase
  association [0..1] to I_UnitOfMeasure                      as _TranspScaleItemQuantityUnit on $projection.TranspScaleItemQuantityUnit = _TranspScaleItemQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                      as _TranspDataSourceQtyUnit     on $projection.TranspDataSourceQtyUnit = _TranspDataSourceQtyUnit.UnitOfMeasure
  association [0..1] to I_Currency                           as _TranspScaleItemCurrency     on $projection.TranspScaleItemCurrency = _TranspScaleItemCurrency.Currency
  association [0..1] to I_Currency                           as _TranspDataSourceCurrency    on $projection.TranspDataSourceCurrency = _TranspDataSourceCurrency.Currency
{
  key cast(db_key as /scmtms/vdm_tcc_calc_base_uuid preserving type )                      as TranspChrgCalcBaseUUID,
      //The DB /scmtms/d_tcbasi has db_key and node_key both maintained as table key, but in Basic view we are maintaining only db_key(TranspChrgCalcBaseUUID) bcz it is more readable and we have provision of only one key maintenance here)
      cast(node_key as /scmtms/vdm_tcc_cb_node_uuid preserving type )                      as TranspChrgCalcBaseNodeUUID,
      @ObjectModel.foreignKey.association: '_TransportationCharge'
      cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type)                      as TransportationChargeUUID,
      @ObjectModel.foreignKey.association: '_TransportationChargeElement'
      cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type)                    as TranspChargeElementUUID,
      @ObjectModel.foreignKey.association: '_TranspCalculationBase'
      clcbas_cd025_i                                                                       as TransportationCalculationBase,
      @ObjectModel.foreignKey.association: '_TranspScaleItemQuantityUnit'
      sitm1_qty_unit_c                                                                     as TranspScaleItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspScaleItemQuantityUnit'
      cast(sitm1_qty_value as /scmtms/vdm_tcc_scale_qty preserving type)                   as TranspScaleItemQuantity,
      @ObjectModel.foreignKey.association: '_TranspScaleItemCurrency'
      sitm1_currcode016                                                                    as TranspScaleItemCurrency,
      @Semantics.amount.currencyCode: 'TranspScaleItemCurrency'
      cast( cast( sitm1_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_sc_item_amount ) as TranspScaleItemAmount,
      cast(sitm1_qty_value_chr as /scmtms/vdm_tcc_scale_qty_char preserving type )         as TranspScaleItemQtyChar,
      cast(sitm1_qty_is_num as /scmtms/vdm_sc_itm_qty_is_num preserving type )             as TranspScaleItemQtyIsNumeric,
      cast(sitm1_qty_is_curr as /scmtms/vdm_sc_itm_qty_is_curr preserving type )           as TranspScaleItemQtyIsCurrency,
      @ObjectModel.foreignKey.association: '_TranspDataSourceQtyUnit'
      cast(dsrc_qty_unit_c as /scmtms/vdm_tcc_dsrc_qty_unit preserving type )              as TranspDataSourceQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspDataSourceQtyUnit'
      cast(dsrc_qty_value as /scmtms/vdm_tcc_dsrc_qty preserving type)                     as TranspDataSourceQuantity,
      @ObjectModel.foreignKey.association: '_TranspDataSourceCurrency'
      cast(dsrc_currcode016 as /scmtms/vdm_tcc_dsrc_currency preserving type )             as TranspDataSourceCurrency,
      @Semantics.amount.currencyCode: 'TranspDataSourceCurrency'
      cast( cast( dsrc_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tcc_dsrc_amount ) as TranspDataSourceAmount,
      cast(dsrc_qty_value_chr as /scmtms/vdm_tcc_dsrc_qty_char preserving type )           as TranspDataSourceQtyChar,
      cast(dsrc_qty_is_num as /scmtms/vdm_dsrc_qty_is_num preserving type )                as TranspDataSourceQtyIsNumeric,
      cast(dsrc_qty_is_curr as /scmtms/vdm_dsrc_qty_is_curr preserving type )              as TranspDataSourceQtyIsCurrency,

      /* Associations */
      _TransportationCharge,
      _TranspCalculationBase,
      _TranspScaleItemQuantityUnit,
      _TranspDataSourceQtyUnit,
      _TranspScaleItemCurrency,
      _TranspDataSourceCurrency,
      _TransportationChargeElement
}
```
