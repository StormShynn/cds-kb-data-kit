---
name: I_INSPLOTSERIALNUMBER
description: "INSPLOTSerial Number"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - serial-number
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTSERIALNUMBER

**INSPLOTSerial Number**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | | `_sernum` | `InspectionLot` |  |  |
| `MaintenanceItemObjectList` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `InspectionLotType` |  | | `_sernum._InspectionLot` | `InspectionLotType` |  |  |
| `Plant` |  | | `_sernum._InspectionLot` | `Plant` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Serial Numbers of Inspection Lot'
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #C,
        sizeCategory: #M
    }
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspLotSerialNumber
  as select from I_MaintObjListInspectionLot as _sernum
inner  join  I_MaintenanceItemObject   on  _sernum.MaintenanceObjectList = I_MaintenanceItemObject.MaintenanceItemObjectList

{

  key    _sernum.InspectionLot,
  key    I_MaintenanceItemObject.MaintenanceItemObjectList,
  key    I_MaintenanceItemObject.SerialNumber,
         _sernum._InspectionLot.InspectionLotType,
         _sernum._InspectionLot.Plant,

//         Associations
         _sernum._InspectionLot

}
```
