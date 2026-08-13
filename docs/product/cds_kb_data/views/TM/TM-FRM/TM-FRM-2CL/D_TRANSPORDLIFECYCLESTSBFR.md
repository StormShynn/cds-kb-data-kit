---
name: D_TRANSPORDLIFECYCLESTSBFR
description: "D Transpordlifecyclestsbfr"
semantic_vi: "View D_TRANSPORDLIFECYCLESTSBFR hiển thị dữ liệu trạng thái vòng đời vận chuyển, có liên quan khi theo dõi trạng thái đơn vận chuyển trong thành phần TM-FRM-2CL."
keywords:
  - "transportation lifecycle"
  - "transportation order"
  - "tm-frm-2cl"
  - "vòng đời vận chuyển"
  - "đơn vận chuyển"
  - "sap tm"
  - "sap tm-frm"
semantic_en: "The D_TRANSPORDLIFECYCLESTSBFR view exposes transportation lifecycle status data, which is relevant when tracking the status of transportation orders in the TM-FRM-2CL component."
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDLIFECYCLESTSBFR

**D Transpordlifecyclestsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdLifeCycleStatus` |  | |  | `/scmtms/tor_lc_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdLifecycleStsBfr
{
  TranspOrdLifeCycleStatus : /scmtms/tor_lc_status;
  _DummyAssociation        : association to parent D_TranspOrdLifecycleStsChgd;
}
```
