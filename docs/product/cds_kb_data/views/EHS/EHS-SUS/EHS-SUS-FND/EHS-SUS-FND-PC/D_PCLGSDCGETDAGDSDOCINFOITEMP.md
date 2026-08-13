---
name: D_PCLGSDCGETDAGDSDOCINFOITEMP
description: "D Pclgsdcgetdagdsdocinfoitemp"
semantic_vi: "Chứa thông tin chi tiết về tài liệu mua hàng ở cấp độ vật tư trong EHS-SUS-FND-PC, hữu ích cho việc lấy dữ liệu chi tiết về vật tư."
keywords:
  - "item-level"
  - "document information"
  - "procurement document"
  - "ehs-sus-fnd-pc"
  - "dữ liệu vật tư"
  - "thông tin tài liệu"
  - "đơn mua hàng"
  - "ekko"
  - "cấp độ vật tư"
semantic_en: "Exposes item-level document information for procurement documents in EHS-SUS-FND-PC, useful for retrieving detailed item data."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDAGDSDOCINFOITEMP

**D Pclgsdcgetdagdsdocinfoitemp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Item` |  | |  | `ehfnd_log_doc_posnr` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Get DG Document Info Items Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsDocInfoItemP
{
  Item  : ehfnd_log_doc_posnr;                          // Item position number
  _Root : association to parent D_PCLgsDcGetDngrsGdsDocInfoP;
}
```
