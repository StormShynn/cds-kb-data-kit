---
name: I_SERIALNUMBERMANUFACTURINGORD
description: Serial NumberMANUFACTURINGORD
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
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERMANUFACTURINGORD

**Serial NumberMANUFACTURINGORD**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Equipment` | ✓ | | `_MaintenanceObjectListItem` | `Equipment` |
| `ManufacturingOrder` | ✓ | | `_MaintObjListManufacturingOrd` | `ManufacturingOrder` |
| `ManufacturingOrderItem` | ✓ | | `_MaintObjListManufacturingOrd` | `ManufacturingOrderItem` |
| `Material` |  | | `_MaintenanceObjectListItem` | `Material` |
| `SerialNumber` |  | | `_MaintenanceObjectListItem` | `SerialNumber` |

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

@EndUserText.label: 'Serial Number in Manufacturing Order'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberManufacturingOrd
  as select from I_MaintObjListManufacturingOrd as _MaintObjListManufacturingOrd
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListManufacturingOrd.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_ManufacturingOrder'
  key _MaintObjListManufacturingOrd.ManufacturingOrder,
  @ObjectModel.foreignKey.association: '_ManufacturingOrderItem'
  key _MaintObjListManufacturingOrd.ManufacturingOrderItem,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListManufacturingOrd._ManufacturingOrder,
  _MaintObjListManufacturingOrd._ManufacturingOrderItem,
  _MaintenanceObjectListItem._Product
}
```
