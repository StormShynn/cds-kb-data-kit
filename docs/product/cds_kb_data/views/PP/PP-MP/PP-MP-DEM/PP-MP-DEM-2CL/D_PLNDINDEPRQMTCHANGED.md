---
name: D_PLNDINDEPRQMTCHANGED
description: "D Plndindeprqmtchanged"
semantic_vi: "View D Plndindeprqmtchanged hiển thị các thay đổi yêu cầu độc lập trong kế hoạch sản xuất, hữu ích cho việc theo dõi cập nhật dữ liệu kế hoạch sản xuất."
keywords:
  - "independent requirements"
  - "production planning"
  - "thay đổi yêu cầu độc lập"
  - "kế hoạch sản xuất"
  - "planning data"
  - "dữ liệu kế hoạch"
  - "pp"
  - "pp-mp"
  - "pp-mp-dem"
  - "component:pp-mp-dem-2cl"
  - "lob:manufacturing"
semantic_en: "The D Plndindeprqmtchanged view exposes independent requirements changes in production planning, useful for tracking updates to production planning data."
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
---
# D_PLNDINDEPRQMTCHANGED

**D Plndindeprqmtchanged**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlndIndepRqmtCllgAppl` |  | |  | `pph_pir_calling_appl` |  |  |
| `PlndIndepRqmtLastChangedBy` |  | |  | `aenam` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'PlannedIndependentRequirement'
@Metadata.allowExtensions: true
@EndUserText.label: 'Planned Independent Requirement Changed'
define abstract entity D_PlndIndepRqmtChanged
{
  PlndIndepRqmtCllgAppl      : pph_pir_calling_appl;
  PlndIndepRqmtLastChangedBy : aenam;
}
```
