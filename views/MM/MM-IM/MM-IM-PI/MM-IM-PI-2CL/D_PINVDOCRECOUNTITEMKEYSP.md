---
name: D_PINVDOCRECOUNTITEMKEYSP
description: D Pinvdocrecountitemkeysp
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - item-level
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVDOCRECOUNTITEMKEYSP

**D Pinvdocrecountitemkeysp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PhysicalInventoryDocumentItem` | `pi_item_number` |
| `_RecountSettings` | *Association* |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Phys Inv Items to be recounted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_PInvDocRecountItemKeysP {
  PhysicalInventoryDocumentItem : pi_item_number;
  
  _RecountSettings : association to parent D_PInvRecountPhysInvtryDocItmP;
}
```
