---
name: D_PINVDOCPRINTITEMKEYSP
description: "D Pinvdocprintitemkeysp"
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
# D_PINVDOCPRINTITEMKEYSP

**D Pinvdocprintitemkeysp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocument` |  | |  | `pi_item_document` |  |  |
| `PhysicalInventoryDocumentItem` |  | |  | `pi_item_number` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `_PrintSettings` | | ✓ | | | | |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Phys Inv Items to be printed'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PInvDocPrintItemKeysP {
  PhysicalInventoryDocument             : pi_item_document ;
  PhysicalInventoryDocumentItem : pi_item_number;
  FiscalYear: gjahr ;
  
  _PrintSettings : association to parent D_PInvPrintPInvItemsP;
}
```
