---
name: D_MODPRODSPECADDITEMP
description: D Modprodspecadditemp
app_component: MM-PUR-MPS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-MPS
  - item-level
  - component:MM-PUR-MPS-2CL
  - lob:Sourcing & Procurement
---
# D_MODPRODSPECADDITEMP

**D Modprodspecadditemp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-MPS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ModProdSpecItemType` | `mmpur_mps_item_type` |
| `ModProdSpecSelectedItemUUID` | `mmpur_mps_selected_item_uuid` |
| `ModProdSpecItemIsSubitem` | `mmpur_mps_item_is_subitem` |

## Source Code

```abap
@EndUserText.label: 'Model Product Specification Item Type for Add Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_ModProdSpecAddItemP
{
  ModProdSpecItemType         : mmpur_mps_item_type;
  ModProdSpecSelectedItemUUID : mmpur_mps_selected_item_uuid;
  ModProdSpecItemIsSubitem    : mmpur_mps_item_is_subitem;
}
```
