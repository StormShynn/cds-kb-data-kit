---
name: I_TRANSPORDITEMCOMMODITYCODE
description: Transporditemcommoditycode
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
  - commodity
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDITEMCOMMODITYCODE

**Transporditemcommoditycode**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCommodityCodeUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_itm_cc_uuid preserving type)` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(root_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrderItemUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_item_db_key preserving type)` |  |  |
| `TranspOrdItemCommodityCode` |  | |  | `ccode` |  |  |
| `TrOrdItmCmmdtyCodeNmbrngSchm` |  | |  | `cast(stcts as /scmtms/stcts preserving type )` |  |  |
| `_TransportationOrder` | | ✓ | | | | |
| `_NumberingScheme` | | ✓ | | | | |
| `_TransportationOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |
| `_NumberingScheme` | `I_TranspNumberingScheme` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Transp Order Item Commodity Code'
@ObjectModel:       { sapObjectNodeType.name:   'TranspOrdItemCommodityCode',
                      representativeKey:        'TranspOrdItemCommodityCodeUUID',
                      usageType:                { serviceQuality: #A,
                                                  sizeCategory: #XL,
                                                  dataClass: #TRANSACTIONAL },
                      supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                      modelingPattern: #ANALYTICAL_DIMENSION }
@AccessControl: {authorizationCheck:  #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA')}

@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}
@Metadata.ignorePropagatedAnnotations: true                 

define view entity I_TranspOrdItemCommodityCode
  as select from /scmtms/d_torcc
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrderItem_2 as _TransportationOrderItem on $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder     on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [0..1] to I_TranspNumberingScheme            as _NumberingScheme         on $projection.TrOrdItmCmmdtyCodeNmbrngSchm = _NumberingScheme.TrdClassfctnNmbrSchm
{
  key cast(db_key as /scmtms/vdm_tor_itm_cc_uuid preserving type)      as TranspOrdItemCommodityCodeUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(root_key as /scmtms/vdm_tor_db_key preserving type)         as TransportationOrderUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(parent_key as /scmtms/vdm_tor_item_db_key  preserving type) as TransportationOrderItemUUID,

      ccode                                                            as TranspOrdItemCommodityCode,
      @ObjectModel.foreignKey.association: '_NumberingScheme'
      cast(stcts as /scmtms/stcts preserving type )                    as TrOrdItmCmmdtyCodeNmbrngSchm,


      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderItem,
      _NumberingScheme
}
```
