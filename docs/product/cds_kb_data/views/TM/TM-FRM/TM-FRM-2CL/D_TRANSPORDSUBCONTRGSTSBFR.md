---
name: D_TRANSPORDSUBCONTRGSTSBFR
description: "D Transpordsubcontrgstsbfr"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDSUBCONTRGSTSBFR

**D Transpordsubcontrgstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrderSubcontrgSts` |  | |  | `/scmtms/tor_subcontr_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdSubcontrgStsBfr
{
  TranspOrderSubcontrgSts : /scmtms/tor_subcontr_status;
  _DummyAssociation       : association to parent D_TranspOrdSubcontrgStsChgd;
}
```
