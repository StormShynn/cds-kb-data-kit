---
name: I_TRANSPORDITEMBATCH
description: Transporditembatch
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
  - batch
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDITEMBATCH

**Transporditembatch**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemBatchUUID` | `cast(TransportationOrderItemBatch.db_key as /scmtms/vdm_tor_itm_batch_uuid preserving type)` |
| `TransportationOrderUUID` | `cast(TransportationOrderItemBatch.root_key as /scmtms/vdm_tor_db_key preserving type)` |
| `TransportationOrderItemUUID` | `cast(TransportationOrderItemBatch.parent_key as /scmtms/vdm_tor_item_db_key preserving type)` |
| `Batch` | `TransportationOrderItemBatch.batch_id` |
| `BatchBySupplier` | `TransportationOrderItemBatch.batch_id_supplier` |
| `ManufactureDate` | `TransportationOrderItemBatch.manufacture_date` |
| `ShelfLifeExpirationDate` | `TransportationOrderItemBatch.expiration_date` |
| `ProductID` | `TransportationOrderItem.ProductID` |
| `_TransportationOrder` | *Association* |
| `_Batch` | *Association* |
| `_Product` | *Association* |
| `_TransportationOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |
| `_Batch` | `I_BatchDistinct` | [0..1] |
| `_Product` | `I_Product` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Transportation Order Item Batch'

@ObjectModel:   { sapObjectNodeType.name: 'TransportationOrderItemBatch',
                  representativeKey:      'TranspOrdItemBatchUUID',
                  usageType:              { serviceQuality: #A,
                                            sizeCategory:   #L,
                                            dataClass:      #TRANSACTIONAL },
                  supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION],
                  modelingPattern:        #ANALYTICAL_DIMENSION }
                  
@Analytics:     { dataCategory: #DIMENSION,
                  internalName: #LOCAL }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

@VDM:           { viewType:                #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@Metadata:      { ignorePropagatedAnnotations: true,
                  allowExtensions:             true }

define view entity I_TranspOrdItemBatch
  as select from /scmtms/d_toriba            as TransportationOrderItemBatch

    inner join   I_TransportationOrderItem_2 as TransportationOrderItem on TransportationOrderItemBatch.parent_key = TransportationOrderItem.TransportationOrderItemUUID

  association        to parent I_TransportationOrderItem_2 as _TransportationOrderItem on  $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder     on  $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID

  association [0..1] to I_BatchDistinct                    as _Batch                   on  $projection.Batch                 = _Batch.Batch
                                                                                       and _Batch.Plant                      = '' // Plant is always initial in Public Cloud
                                                                                       and TransportationOrderItem.ProductID = _Batch.Material

  association [0..1] to I_Product                          as _Product                 on  $projection.ProductID = _Product.Product

{
      // Attributes
  key cast(TransportationOrderItemBatch.db_key as /scmtms/vdm_tor_itm_batch_uuid preserving type)   as TranspOrdItemBatchUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(TransportationOrderItemBatch.root_key as /scmtms/vdm_tor_db_key preserving type)         as TransportationOrderUUID,

      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(TransportationOrderItemBatch.parent_key as /scmtms/vdm_tor_item_db_key  preserving type) as TransportationOrderItemUUID,

      @ObjectModel.foreignKey.association: '_Batch'
      TransportationOrderItemBatch.batch_id                                                         as Batch,
      TransportationOrderItemBatch.batch_id_supplier                                                as BatchBySupplier,
      TransportationOrderItemBatch.manufacture_date                                                 as ManufactureDate,
      TransportationOrderItemBatch.expiration_date                                                  as ShelfLifeExpirationDate,
      @ObjectModel.foreignKey.association: '_Product'
      TransportationOrderItem.ProductID                                                             as ProductID,

      // Associations
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderItem,
      _Batch,
      _Product


}
```
