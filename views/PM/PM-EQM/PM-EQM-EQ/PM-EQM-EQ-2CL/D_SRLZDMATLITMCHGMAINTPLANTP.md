---
name: D_SRLZDMATLITMCHGMAINTPLANTP
description: "D Srlzdmatlitmchgmaintplantp"
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
  - plant
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
  - bo:Plant
---
# D_SRLZDMATLITMCHGMAINTPLANTP

**D Srlzdmatlitmchgmaintplantp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlant` |  | |  | `swerk` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Maint. Plant Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrlzdMatlItmChgMaintPlantP
{
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_PlantStdVH',
                 element: 'Plant' },
      useForValidation: true           
    }]
  @EndUserText.label: 'Maintenance Plant'
  //@ObjectModel.mandatory: true
  MaintenancePlant : swerk;
}
```
