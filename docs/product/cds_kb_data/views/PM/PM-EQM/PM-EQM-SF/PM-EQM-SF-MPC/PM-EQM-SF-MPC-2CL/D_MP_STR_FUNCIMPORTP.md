---
name: D_MP_STR_FUNCIMPORTP
description: "D MP Str Funcimportp"
semantic_vi: "View D_MP_STR_FUNCIMPORTP CDS hiển thị dữ liệu nhập chức năng cho các loại điểm đo trong bảo trì nhà máy, được sử dụng để lấy hoặc cập nhật thông tin về loại điểm đo."
keywords:
  - "plant maintenance"
  - "measuring point category"
  - "d_mp_str_funcimportp"
  - "pm-eqm-sf-mpc-2cl"
  - "transactional processing"
  - "lob:plant maintenance"
  - "measuring point"
  - "category"
  - "functional import"
  - "data import"
semantic_en: "The D_MP_STR_FUNCIMPORTP CDS view exposes functional import data for measuring point categories in Plant Maintenance, used to retrieve or update measuring point category information."
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - transactional-processing
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# D_MP_STR_FUNCIMPORTP

**D MP Str Funcimportp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasuringPointCategory` |  | |  | `imrc_mptyp` |  |  |

## Source Code

```abap
@EndUserText.label: 'Update Msrgpt Structure'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_Mp_Str_FuncImportP  {

     MeasuringPointCategory : imrc_mptyp;
    
}
```
