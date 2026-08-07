---
name: D_PINVPOSTPINVDIFFERENCEP
description: "D Pinvpostpinvdifferencep"
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVPOSTPINVDIFFERENCEP

**D Pinvpostpinvdifferencep**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `fis_budat` |  |  |
| `ReasonForPhysInvtryDifference` |  | |  | `grdif` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Parameters for post action of item'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PInvPostPInvDifferenceP {
  PostingDate : fis_budat;
  ReasonForPhysInvtryDifference : grdif;
}
```
