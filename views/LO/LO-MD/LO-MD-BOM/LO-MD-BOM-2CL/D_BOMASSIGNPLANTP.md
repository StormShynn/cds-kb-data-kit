---
name: D_BOMASSIGNPLANTP
description: D Bomassignplantp
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - transactional-processing
  - plant
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Plant
---
# D_BOMASSIGNPLANTP

**D Bomassignplantp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlantToBeAssigned` |  | |  | `werks_d` |
| `BillOfMaterialVariantUsage` |  | |  | `stlan` |

## Source Code

```abap
@EndUserText.label: 'Parameters for Assign Plant'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 }   
define abstract entity D_BOMAssignPlantP 
   {
    
    PlantToBeAssigned : werks_d;
    BillOfMaterialVariantUsage : stlan;
   
}
```
