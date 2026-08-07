---
name: D_LGLCNTNTMDOCLINKOBJKEYCRTEP
description: D Lglcntntmdoclinkobjkeycrtep
app_component: CM-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-INT
  - component:CM-INT-2CL
  - lob:Other
---
# D_LGLCNTNTMDOCLINKOBJKEYCRTEP

**D Lglcntntmdoclinkobjkeycrtep**

| Property | Value |
|---|---|
| App Component | `CM-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMDocument` |  | |  | `lcm_document_id` |

## Source Code

```abap
@EndUserText.label: 'Generate linked object key'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglCntntMDocLinkObjKeyCrteP
{
    LglCntntMDocument  : lcm_document_id ;
   
}
```
