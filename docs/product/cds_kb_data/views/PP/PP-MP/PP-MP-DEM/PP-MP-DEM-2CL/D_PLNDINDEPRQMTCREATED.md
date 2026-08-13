---
name: D_PLNDINDEPRQMTCREATED
description: "D Plndindeprqmtcreated"
semantic_vi: "View D_PLNDINDEPRQMTCREATED hiển thị dữ liệu tạo yêu cầu độc lập trong SAP PP-MP-DEM-2CL, hữu ích cho việc theo dõi thay đổi của yêu cầu độc lập."
keywords:
  - "independent requirement"
  - "tạo yêu cầu độc lập"
  - "sap pp-mp-dem-2cl"
  - "planning"
  - "manufacturing"
  - "lob:manufacturing"
  - "component:pp-mp-dem-2cl"
  - "pp"
  - "pp-mp"
  - "pp-mp-dem"
  - "plndindeprqmtcreated"
semantic_en: "The D_PLNDINDEPRQMTCREATED view exposes independent requirement creation data in SAP PP-MP-DEM-2CL, useful for tracking changes to independent requirements."
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
# D_PLNDINDEPRQMTCREATED

**D Plndindeprqmtcreated**

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
@EndUserText.label: 'Planned Independent Requirement Created'
define abstract entity D_PlndIndepRqmtCreated
{
  PlndIndepRqmtCllgAppl      : pph_pir_calling_appl;
  PlndIndepRqmtLastChangedBy : aenam;
}
```
