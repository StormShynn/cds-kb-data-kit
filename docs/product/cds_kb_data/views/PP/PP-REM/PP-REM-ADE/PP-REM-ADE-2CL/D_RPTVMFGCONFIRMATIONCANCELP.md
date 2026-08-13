---
name: D_RPTVMFGCONFIRMATIONCANCELP
description: "D Rptvmfgconfirmationcancelp"
semantic_vi: "View D_RPTVMFGCONFIRMATIONCANCELP cung cấp dữ liệu về việc hủy xác nhận sản xuất, có thể được sử dụng để phân tích và báo cáo về sự kiện hủy xác nhận sản xuất."
keywords:
  - "manufacturing"
  - "confirmation"
  - "cancellation"
  - "production"
  - "reporting"
  - "pp-rem"
  - "pp-rem-ade-2cl"
  - "sap"
  - "cancellation event"
  - "hủy xác nhận sản xuất"
  - "sự kiện hủy xác nhận sản xuất"
semantic_en: "The D_RPTVMFGCONFIRMATIONCANCELP view provides data on manufacturing confirmation cancellations, which can be used to analyze and report on production confirmation cancellation events."
app_component: PP-REM-ADE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-REM
  - PP-REM-ADE
  - component:PP-REM-ADE-2CL
  - lob:Manufacturing
---
# D_RPTVMFGCONFIRMATIONCANCELP

**D Rptvmfgconfirmationcancelp**

| Property | Value |
|---|---|
| App Component | `PP-REM-ADE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `budat` |  |  |
| `PlantDataCollectionID` |  | |  | `sa_bdenr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Input for Rptv Mfg Conf RAP BO Cancel Action'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_RptvMfgConfirmationCancelP
{
  PostingDate           : budat;
  @Consumption.defaultValue: ''
  PlantDataCollectionID : sa_bdenr;
}
```
