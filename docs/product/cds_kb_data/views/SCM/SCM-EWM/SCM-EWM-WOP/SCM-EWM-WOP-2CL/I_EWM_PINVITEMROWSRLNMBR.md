---
name: I_EWM_PINVITEMROWSRLNMBR
description: "Ewm Pinvitemrowsrlnmbr"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - item-level
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_PINVITEMROWSRLNMBR

**Ewm Pinvitemrowsrlnmbr**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocNumber` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocYear` | ✓ | |  |  |  |  |
| `LineIndexOfPInvItem` | ✓ | |  |  |  |  |
| `PhysicalInventoryItemNumber` | ✓ | |  |  |  |  |
| `EWMPhysInvtrySrlNmbrSqnc` | ✓ | |  |  |  |  |
| `EWMPInvSrlNmbrProcgStatus` | ✓ | |  |  |  |  |
| `EWMSerialNumber` |  | |  |  |  |  |
| `ActivityArea` |  | |  |  |  |  |
| `PhysicalInventoryDocumentUUID` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Serial Number of Whse PInv Item Row'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity I_EWM_PInvItemRowSrlNmbr
  as select from P_EWM_PInvItemRowSrlNmbr04
{
  key EWMWarehouse,
  key PhysicalInventoryDocNumber,
  key PhysicalInventoryDocYear,
  key LineIndexOfPInvItem,
  key PhysicalInventoryItemNumber,
  key EWMPhysInvtrySrlNmbrSqnc,
      //status of the serial number: = means existing one, + means new found one, while - means lost one from original one
  key EWMPInvSrlNmbrProcgStatus,
      _Status._Text[1:Language = $session.system_language].EWMPInvSrlNmbrProcgStatusText,
      EWMSerialNumber,
      ActivityArea,
      PhysicalInventoryDocumentUUID
}
```
