---
name: D_EMRKDFNDSCRTEDFLTIMPRTP
description: "D Emrkdfndscrtedfltimprtp"
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - transactional-processing
  - component:PSM
  - lob:Other
---
# D_EMRKDFNDSCRTEDFLTIMPRTP

**D Emrkdfndscrtedfltimprtp**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  | `bukrs` |  |  |

## Source Code

```abap
@EndUserText.label: 'Actn Imprt Param wth Create Default Val'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE  ]
define abstract entity D_EmrkdFndsCrteDfltImprtP
{

  CompanyCode : bukrs;

}
```
