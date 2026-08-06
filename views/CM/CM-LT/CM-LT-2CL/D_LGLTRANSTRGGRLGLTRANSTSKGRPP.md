---
name: D_LGLTRANSTRGGRLGLTRANSTSKGRPP
description: D Lgltranstrggrlgltranstskgrpp
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - component:CM-LT-2CL
  - lob:Other
---
# D_LGLTRANSTRGGRLGLTRANSTSKGRPP

**D Lgltranstrggrlgltranstskgrpp**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMTaskGroupUUID` | `lcm_uuid` |
| `LglCntntMWrkflwDocLink` | `lcm_lt_wrkflw_doclink` |
| `LglCntntMContextUUID` | `lcm_uuid` |
| `LegalTransactionUUID` | `lcm_uuid` |

## Source Code

```abap
@EndUserText.label: 'Trigger LegalTrans TaskGroup Actn Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransTrggrLglTransTskGrpP
{
  LglCntntMTaskGroupUUID : lcm_uuid;
  LglCntntMWrkflwDocLink : lcm_lt_wrkflw_doclink;
  LglCntntMContextUUID   : lcm_uuid;
  LegalTransactionUUID   : lcm_uuid;
}
```
