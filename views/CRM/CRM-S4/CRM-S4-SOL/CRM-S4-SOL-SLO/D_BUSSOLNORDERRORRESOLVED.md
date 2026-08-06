---
name: D_BUSSOLNORDERRORRESOLVED
description: D Bussolnorderrorresolved
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# D_BUSSOLNORDERRORRESOLVED

**D Bussolnorderrorresolved**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusSolnOrdDescription` | `crmt_process_description` |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Error Resolved'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE] 
define abstract entity D_BusSolnOrdErrorResolved
{
  BusSolnOrdDescription : crmt_process_description;
}
```
