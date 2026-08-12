---
name: I_TRANSPORTATIONSCALEITEM
description: "Transportationscaleitem"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transport
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPORTATIONSCALEITEM

**Transportationscaleitem**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationScaleItemUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_rt_sc_item_uuid preserving type)` |  |  |
| `TransportationScaleUUID` |  | |  | `cast(parent_key as /scmtms/vdm_rate_scale_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | | `_TransportationScale` | `TransportationRateUUID` |  |  |
| `TransportationCalculationType` |  | |  | `cast(calc_typ as /scmtms/vdm_calc_type preserving type)` |  |  |
| `TranspScaleItemQuantityUnit` |  | |  | `cast(uom as /scmtms/vdm_rt_sc_itm_qty_unit preserving type)` |  |  |
| `TranspScaleItemQuantity` |  | |  | `scaval_quan` |  |  |
| `TranspScaleItemCharacterValue` |  | |  | `cast(scaval_char as /scmtms/vdm_sc_itm_char_value preserving type)` |  |  |
| `TranspScaleItemCurrency` |  | |  | `currcode` |  |  |
| `TranspScaleItemAmount` |  | |  | `cast( cast( scaval_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_sc_item_amount )` |  |  |
| `TranspScaleItemRefFieldName` |  | |  | `scaval_ref_field` |  |  |
| `_TranspRateScaleReference` | | ✓ | | | | |
| `_TranspScaleItemQuantityUnit` | | ✓ | | | | |
| `_TranspScaleItemCurrency` | | ✓ | | | | |
| `_TransportationCalculationType` | | ✓ | | | | |
| `_TransportationRate` | | ✓ | | | | |
| `_TransportationScale` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspRateScaleReference` | `I_TranspRateScaleReference` | [1..1] |
| `_TranspScaleItemQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspScaleItemCurrency` | `I_Currency` | [0..1] |
| `_TransportationCalculationType` | `I_TranspScaleCalcType` | [1..1] |
| `_TransportationRate` | `I_TransportationRate` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TransportationScale'] }
@Analytics.technicalName: 'ITSCALE'
@EndUserText: {label: 'Transportation Scale Item'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableScaleItem',
               representativeKey: 'TransportationScaleItemUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TransportationScaleItem
  as select from /scmtms/d_scait2
  /* Business Object related Node Associations*/
  association        to parent I_TransportationScale as _TransportationScale           on $projection.TransportationScaleUUID = _TransportationScale.TransportationScaleUUID

  association [1..1] to I_TranspRateScaleReference   as _TranspRateScaleReference      on $projection.TransportationScaleUUID = _TranspRateScaleReference.TransportationScaleUUID

  /* Foreign Key and Text Associations */
  association [0..1] to I_UnitOfMeasure              as _TranspScaleItemQuantityUnit   on $projection.TranspScaleItemQuantityUnit = _TranspScaleItemQuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _TranspScaleItemCurrency       on $projection.TranspScaleItemCurrency = _TranspScaleItemCurrency.Currency
  association [1..1] to I_TranspScaleCalcType        as _TransportationCalculationType on $projection.TransportationCalculationType = _TransportationCalculationType.TransportationCalculationType
  association [1..1] to I_TransportationRate         as _TransportationRate            on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
{
  key cast(db_key as /scmtms/vdm_rt_sc_item_uuid preserving type)                           as TransportationScaleItemUUID,
      @ObjectModel.foreignKey.association: '_TransportationScale'
      cast(parent_key as /scmtms/vdm_rate_scale_uuid preserving type)                       as TransportationScaleUUID,
      _TransportationScale.TransportationRateUUID                                           as TransportationRateUUID,
      @ObjectModel.foreignKey.association: '_TransportationCalculationType'
      cast(calc_typ as /scmtms/vdm_calc_type preserving type)                               as TransportationCalculationType,
      @ObjectModel.foreignKey.association: '_TranspScaleItemQuantityUnit'
      cast(uom as /scmtms/vdm_rt_sc_itm_qty_unit preserving type)                           as TranspScaleItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspScaleItemQuantityUnit'
      scaval_quan                                                                           as TranspScaleItemQuantity,
      cast(scaval_char as /scmtms/vdm_sc_itm_char_value preserving type)                    as TranspScaleItemCharacterValue,
      @ObjectModel.foreignKey.association: '_TranspScaleItemCurrency'
      currcode                                                                              as TranspScaleItemCurrency,
      @Semantics.amount.currencyCode: 'TranspScaleItemCurrency'
      cast( cast( scaval_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_sc_item_amount ) as TranspScaleItemAmount,
      scaval_ref_field                                                                      as TranspScaleItemRefFieldName,

      /* Associations */
       @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationScale,
      
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationRate,

      _TranspScaleItemQuantityUnit,
      _TranspScaleItemCurrency,
      _TransportationCalculationType,
      _TranspRateScaleReference 
}
```
