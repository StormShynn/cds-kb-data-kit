---
name: D_HIERMOVEPRODTOANOTHERNDEP
description: D Hiermoveprodtoanotherndep
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# D_HIERMOVEPRODTOANOTHERNDEP

**D Hiermoveprodtoanotherndep**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductHierarchyTargetNode` |  | |  | `parnode` |

## Source Code

```abap
@EndUserText.label: 'ActionParameter:ProdHier MoveProduct'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_HierMoveProdToAnotherNdeP
{
  ProductHierarchyTargetNode : parnode;  
}
```
