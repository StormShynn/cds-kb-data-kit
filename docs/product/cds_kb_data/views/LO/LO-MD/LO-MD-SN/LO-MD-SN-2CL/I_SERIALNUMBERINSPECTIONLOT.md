---
name: I_SERIALNUMBERINSPECTIONLOT
description: "Serial NumberINSPECTIONLOT"
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
  - inspection
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERINSPECTIONLOT

**Serial NumberINSPECTIONLOT**

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
| `InspectionLot` | ✓ | | `_MaintObjListInspectionLot` | `InspectionLot` |  |  |
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

@EndUserText.label: 'Serial Number in Inspection Lot'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberInspectionLot
  as select from I_MaintObjListInspectionLot as _MaintObjListInspectionLot
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListInspectionLot.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_InspectionLot'
  key _MaintObjListInspectionLot.InspectionLot,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListInspectionLot._InspectionLot,
  _MaintenanceObjectListItem._Product
}
```
