---
name: D_PCLGSDCITMGETDNGRSGDSDESCSP
description: "D Pclgsdcitmgetdngrsgdsdescsp"
semantic_vi: "Chứa mô tả nhóm sản phẩm cho hàng hóa downstream trong thành phần EHS-SUS-FND-PC, được sử dụng khi truy xuất thông tin nhóm sản phẩm."
keywords:
  - "product group"
  - "nhóm sản phẩm"
  - "downstream goods"
  - "hàng hóa downstream"
  - "ehs-sus-fnd-pc"
  - "component"
  - "cấu phần"
  - "sap"
  - "cds view"
semantic_en: "Exposes product group descriptions for downstream goods in the EHS-SUS-FND-PC component, used when retrieving product group information."
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
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCITMGETDNGRSGDSDESCSP

**D Pclgsdcitmgetdngrsgdsdescsp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutputScenario` |  | |  | `ehdgm_output_scenario` |  |  |

## Source Code

```abap
@EndUserText.label: 'DG Classfctn Get Description Parameters'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcItmGetDngrsGdsDescsP
{  
  OutputScenario                : ehdgm_output_scenario;
}
```
