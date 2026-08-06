---
name: D_SRLZDMATLITMCHGEQUIPCATP
description: D Srlzdmatlitmchgequipcatp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `EquipmentCategory` | `eqtyp` |

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
