---
name: I_TRANSPORDITEMSEAL
description: Transporditemseal
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDITEMSEAL

**Transporditemseal**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemSealUUID` | `cast(db_key as /scmtms/vdm_tor_itm_seal_uuid preserving type)` |
| `TransportationOrderUUID` | `cast(root_key as /scmtms/vdm_tor_db_key preserving type)` |
| `TransportationOrderItemUUID` | `cast(parent_key as /scmtms/vdm_tor_item_db_key preserving type)` |
| `TranspOrdItemSealNumber` | `seal_number` |
| `TranspOrdItemSealingDateTime` | `cast(sealed_date as /scmtms/vdm_tor_sealing_dt preserving type)` |
| `_TransportationOrder` | *Association* |
| `_TransportationOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |

## Source Code

```abap
@EndUserText.label:     'Transportation Order Item Seal'
@ObjectModel:           {     sapObjectNodeType.name: 'TransportationOrderItemSeal',
                              representativeKey:  'TranspOrdItemSealUUID',
                              usageType:          { serviceQuality: #A,
                                                    sizeCategory: #XL,
                                                    dataClass: #TRANSACTIONAL },
                              supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                              modelingPattern: #ANALYTICAL_DIMENSION }

@AccessControl:         {     authorizationCheck:  #MANDATORY,
                              personalData.blocking:#('TRANSACTIONAL_DATA')}

@VDM:                   {     viewType:           #BASIC,
                              lifecycle.contract.type: #PUBLIC_LOCAL_API}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TranspOrdItemSeal
  as select from /scmtms/d_torsl
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrderItem_2 as _TransportationOrderItem on $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder     on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
{
  key cast(db_key as /scmtms/vdm_tor_itm_seal_uuid preserving type)    as TranspOrdItemSealUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(root_key as /scmtms/vdm_tor_db_key preserving type)         as TransportationOrderUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(parent_key as /scmtms/vdm_tor_item_db_key  preserving type) as TransportationOrderItemUUID,

      seal_number                                                      as TranspOrdItemSealNumber,
      cast(sealed_date as /scmtms/vdm_tor_sealing_dt preserving type)  as TranspOrdItemSealingDateTime,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderItem
}
```
