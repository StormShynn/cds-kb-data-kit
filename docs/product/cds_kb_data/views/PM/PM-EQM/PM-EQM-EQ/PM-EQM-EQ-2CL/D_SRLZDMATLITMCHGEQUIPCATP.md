---
name: D_SRLZDMATLITMCHGEQUIPCATP
description: "D Srlzdmatlitmchgequipcatp"
semantic_vi: "Lịch sử thay đổi loại thiết bị cho vật liệu trong bảo trì nhà máy, được sử dụng để theo dõi các thay đổi về loại thiết bị qua thời gian."
keywords:
  - "equipment category"
  - "equipment category change history"
  - "plant maintenance"
  - "material item"
  - "equipment"
  - "category"
  - "change history"
  - "thay đổi loại thiết bị"
  - "bảo trì nhà máy"
  - "vật liệu"
  - "thiết bị"
semantic_en: "Equipment category change history for material items in plant maintenance, used to track changes to equipment categories over time."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_SRLZDMATLITMCHGEQUIPCATP

**D Srlzdmatlitmchgequipcatp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EquipmentCategory` |  | |  | `eqtyp` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Category Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrlzdMatlItmChgEquipCatP
{
  @Consumption.valueHelpDefinition: [
 { entity:  { 
      name: 'I_EquipmentCategoryStdVH',
      element: 'EquipmentCategory'  },
   useForValidation: true
  }]
 // @ObjectModel.mandatory: true
  @EndUserText.label: 'Category'
  EquipmentCategory : eqtyp;
}
```
