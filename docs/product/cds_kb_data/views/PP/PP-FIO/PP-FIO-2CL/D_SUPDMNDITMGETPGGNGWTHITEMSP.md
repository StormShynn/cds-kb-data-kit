---
name: D_SUPDMNDITMGETPGGNGWTHITEMSP
description: "D Supdmnditmgetpggngwthitemsp"
semantic_vi: "View D Supdmnditmgetpggngwthitemsp hiển thị dữ liệu vật liệu và kế hoạch sản xuất cho một khu vực và nhà máy cụ thể, có thể được sử dụng để phân tích và quản lý yêu cầu sản xuất."
keywords:
  - "material"
  - "production planning"
  - "plant"
  - "area"
  - "mrp"
  - "pp-fio-2cl"
  - "manufacturing"
  - "sap"
  - "council"
  - "council material"
  - "council production planning"
semantic_en: "The D Supdmnditmgetpggngwthitemsp view exposes material and production planning data for a specific plant and area, which can be used to analyze and manage production requirements."
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# D_SUPDMNDITMGETPGGNGWTHITEMSP

**D Supdmnditmgetpggngwthitemsp**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |
| `MRPPlant` |  | |  | `werks_d` |  |  |
| `MRPArea` |  | |  | `berid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Pegging with Items'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_SupDmndItmGetPggngWthItemsP
{
  Material : matnr;
  MRPPlant : werks_d;
  MRPArea  : berid;
}
```
