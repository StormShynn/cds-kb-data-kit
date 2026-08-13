---
name: D_PRFTCTRCHANGEVALIDITYPERIODP
description: "D Prftctrchangevalidityperiodp"
semantic_vi: "View D_PRFTCTRCHANGEVALIDITYPERIODP cung cấp dữ liệu về khoảng thời gian có hiệu lực của thay đổi trung tâm lợi nhuận, có thể được sử dụng khi phân tích hoặc báo cáo về các thay đổi trong cài đặt trung tâm lợi nhuận theo thời gian."
keywords:
  - "profit center"
  - "thay đổi trung tâm lợi nhuận"
  - "validity period"
  - "khoảng thời gian có hiệu lực"
  - "change management"
  - "quản lý thay đổi"
  - "sap cds"
  - "cds view"
  - "ekko"
  - "eca-pca-md-2cl"
semantic_en: "The D_PRFTCTRCHANGEVALIDITYPERIODP view provides data on the validity period of profit center changes, which can be used when analyzing or reporting on changes to profit center settings over time."
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - component:EC-PCA-MD-2CL
  - lob:Other
---
# D_PRFTCTRCHANGEVALIDITYPERIODP

**D Prftctrchangevalidityperiodp**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NewValidityStartDate` |  | |  | `datab` |  |  |
| `NewValidityEndDate` |  | |  | `datbi` |  |  |

## Source Code

```abap
@EndUserText.label: 'Change Validity Period Parameter'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PrftCtrChangeValidityPeriodP
{
  NewValidityStartDate : datab;
  NewValidityEndDate   : datbi;
}
```
