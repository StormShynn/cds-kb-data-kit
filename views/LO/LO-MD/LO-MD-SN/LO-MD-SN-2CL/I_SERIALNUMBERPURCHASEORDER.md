---
name: I_SERIALNUMBERPURCHASEORDER
description: Serial NumberPurchase Order
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - purchase-order
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
  - bo:PurchaseOrder
---
# I_SERIALNUMBERPURCHASEORDER

**Serial NumberPurchase Order**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | | `_MaintenanceObjectListItem` | `Equipment` |  |  |
| `PurchaseOrder` | ✓ | | `_MaintObjListPurchaseOrder` | `PurchaseOrder` |  |  |
| `PurchaseOrderItem` | ✓ | | `_MaintObjListPurchaseOrder` | `PurchaseOrderItem` |  |  |
| `Material` |  | | `_MaintenanceObjectListItem` | `Material` |  |  |
| `SerialNumber` |  | | `_MaintenanceObjectListItem` | `SerialNumber` |  |  |

## Source Code

```abap
@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

@VDM.viewType: #COMPOSITE

@ObjectModel: {
                usageType: {
                            serviceQuality: #A,
                            sizeCategory:   #XL,
                            dataClass:      #TRANSACTIONAL
                           },
                 supportedCapabilities: [
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET
                                        ],
                 modelingPattern: #ANALYTICAL_DIMENSION                                  
              }

@EndUserText.label: 'Serial Number in Purchase Order'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberPurchaseOrder
  as select from I_MaintObjListPurchaseOrder as _MaintObjListPurchaseOrder
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListPurchaseOrder.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_PurchaseOrder'
  key _MaintObjListPurchaseOrder.PurchaseOrder,
  @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
  key _MaintObjListPurchaseOrder.PurchaseOrderItem,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListPurchaseOrder._PurchaseOrder,
  _MaintObjListPurchaseOrder._PurchaseOrderItem,
  _MaintenanceObjectListItem._Product
}
```
