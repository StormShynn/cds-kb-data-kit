---
name: D_BILLOFMATERIALUNASSIGNPLANTR
description: D Bill of MaterialUNASSIGNPLANTR
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
  - material
  - plant
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
  - bo:Plant
---
# D_BILLOFMATERIALUNASSIGNPLANTR

**D Bill of MaterialUNASSIGNPLANTR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BOMIsSuccessfulPlantUnassigned` |  | |  | `boolean` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'BOM unassign plant result'
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER] }   
define abstract entity D_BillOfMaterialUnassignPlantR {
    BOMIsSuccessfulPlantUnassigned :  boolean;   
}
```
