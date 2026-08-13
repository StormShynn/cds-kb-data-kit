---
name: D_EMRKDFNDSCRTEDFLTIMPRTP
description: "D Emrkdfndscrtedfltimprtp"
semantic_vi: "Chỉ ra dữ liệu được mã hóa theo công ty cho một khoảng thời gian cụ thể, được sử dụng cho xử lý giao dịch trong thành phần PSM."
keywords:
  - "encrypted data"
  - "transactional processing"
  - "psm component"
  - "company-specific data"
  - "time period"
  - "đữ liệu được mã hóa"
  - "xử lý giao dịch"
  - "thành phần psm"
  - "dữ liệu theo công ty"
  - "khoảng thời gian"
semantic_en: "Exposes company-specific encrypted data for a specific time period, used for transactional processing in the PSM component."
app_component: PSM
software_component: SAPSCORE
release_state: released
atc_state: released
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
