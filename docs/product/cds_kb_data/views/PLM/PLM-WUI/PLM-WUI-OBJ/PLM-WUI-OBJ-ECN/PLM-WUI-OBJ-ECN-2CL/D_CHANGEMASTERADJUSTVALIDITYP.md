---
name: D_CHANGEMASTERADJUSTVALIDITYP
description: "D Change MasterERADJUSTVALIDITYP"
semantic_vi: "View D Change Master ER Adjust Validity P hiển thị dữ liệu về thay đổi chủ đạo liên quan đến khoảng thời gian hiệu lực điều chỉnh, có thể được sử dụng để phân tích và quản lý yêu cầu thay đổi trong hệ thống quản lý vòng đời sản phẩm."
keywords:
  - "change master"
  - "adjust validity period"
  - "product lifecycle management"
  - "plm"
  - "change request"
  - "thay đổi chủ đạo"
  - "khoảng thời gian hiệu lực điều chỉnh"
  - "quản lý vòng đời sản phẩm"
  - "yêu cầu thay đổi"
semantic_en: "The D Change Master ER Adjust Validity P view exposes change master data related to adjustment validity periods, which can be used to analyze and manage change requests in a product lifecycle management system."
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# D_CHANGEMASTERADJUSTVALIDITYP

**D Change MasterERADJUSTVALIDITYP**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValidityStartDate` |  | |  | `cc_ccdat` |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Change Master Adjust Validity Date'
define root abstract entity D_ChangeMasterAdjustValidityP
{
  ValidityStartDate : cc_ccdat;
}
```
