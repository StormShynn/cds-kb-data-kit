---
name: I_SERIALNUMBERSALESORDER
description: "Serial NumberSales Order"
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
  - sales-order
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
  - bo:SalesOrder
---
# I_SERIALNUMBERSALESORDER

**Serial NumberSales Order**

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
| `SalesOrder` | ✓ | | `_MaintObjListSalesOrder` | `SalesOrder` |  |  |
| `SalesOrderItem` | ✓ | | `_MaintObjListSalesOrder` | `SalesOrderItem` |  |  |
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

@EndUserText.label: 'Serial Number in Sales Order'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberSalesOrder
  as select from I_MaintObjListSalesOrder as _MaintObjListSalesOrder
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListSalesOrder.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_SalesOrder'
  key _MaintObjListSalesOrder.SalesOrder,
  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key _MaintObjListSalesOrder.SalesOrderItem,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListSalesOrder._SalesOrder,
  _MaintObjListSalesOrder._SalesOrderItem,
  _MaintenanceObjectListItem._Product
}
```
