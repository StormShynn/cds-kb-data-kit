---
name: I_INSPLOTSERIALNUMBERTP_2
description: "INSPLOTSerial NumberTP 2"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - transactional-processing
  - serial-number
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTSERIALNUMBERTP_2

**INSPLOTSerial NumberTP 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `MaintenanceItemObjectList` | ✓ | |  |  |  |  |
| `MaintenanceItemObject` | ✓ | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Serial Number in Inspection Lot - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    dataClass: #TRANSACTIONAL,
    sizeCategory: #M,
    serviceQuality: #C }
}

define view entity I_InspLotSerialNumberTP_2
  as projection on R_InspLotSerialNumberTP as InspLotSerialNumber
{

  key InspectionLot,
  key MaintenanceItemObjectList,
  key MaintenanceItemObject,
  SerialNumber,
      /* Associations */
      _InspectionLot : redirected to parent I_InspectionLotTP_2
}
```
