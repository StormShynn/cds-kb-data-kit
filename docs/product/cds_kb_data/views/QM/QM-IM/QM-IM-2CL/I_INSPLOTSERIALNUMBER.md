---
name: I_INSPLOTSERIALNUMBER
description: "INSPLOTSerial Number"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
