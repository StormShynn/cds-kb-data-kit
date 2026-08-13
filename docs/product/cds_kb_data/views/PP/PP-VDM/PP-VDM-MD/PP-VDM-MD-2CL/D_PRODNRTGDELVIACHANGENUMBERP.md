---
name: D_PRODNRTGDELVIACHANGENUMBERP
description: "D Prodnrtgdelviachangenumberp"
semantic_vi: "Cung cấp số hiệu thay đổi tuyến đường sản xuất cho việc xóa bỏ, được sử dụng để theo dõi các thay đổi trong tuyến đường sản xuất."
keywords:
  - "production routing"
  - "sản xuất tuyến đường"
  - "change number"
  - "số hiệu thay đổi"
  - "deletion"
  - "xóa bỏ"
  - "sap pp-vdm"
  - "pp-vdm-md-2cl"
  - "manufacturing"
  - "chế tạo"
semantic_en: "Provides production routing change numbers for deletion, used to track changes in production routing."
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# D_PRODNRTGDELVIACHANGENUMBERP

**D Prodnrtgdelviachangenumberp**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` |  | |  | `aennr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Delete Prodn Rtg with Chg Nmbr'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ProdnRtgDelViaChangeNumberP
{
    ChangeNumber : aennr;
}
```
