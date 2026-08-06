---
name: I_FREIGHTORDERITEMBATCHTP
description: Freightorderitembatchtp
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
  - freight
  - batch
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERITEMBATCHTP

**Freightorderitembatchtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemBatchUUID` | `TranspOrdItemBatchUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `Batch` | `Batch` |
| `ProductID` | `ProductID` |
| `BatchBySupplier` | `BatchBySupplier` |
| `ManufactureDate` | `ManufactureDate` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `I_FreightOrderTP` | `FreightOrderItemBatch._TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |
| `I_FreightOrderItemTP` | `FreightOrderItemBatch._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Item Batch - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #B,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['Batch'],
   representativeKey: 'TranspOrdItemBatchUUID',
   sapObjectNodeType.name: 'FreightOrderItemBatch'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity I_FreightOrderItemBatchTP
  as projection on R_TranspOrdItemBatchTP as FreightOrderItemBatch
{
      /* Attributes */
  key TranspOrdItemBatchUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      
      Batch,
      ProductID,
      
      BatchBySupplier,
      ManufactureDate,
      ShelfLifeExpirationDate,

      /* Redirections */
      FreightOrderItemBatch._TransportationOrder     as _FreightOrder     : redirected to        I_FreightOrderTP,
      FreightOrderItemBatch._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP
}
where FreightOrderItemBatch.TransportationOrderCategory = 'TO'
```
