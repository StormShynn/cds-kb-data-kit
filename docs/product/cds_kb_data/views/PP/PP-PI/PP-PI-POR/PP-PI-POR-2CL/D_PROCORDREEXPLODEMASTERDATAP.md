---
name: D_PROCORDREEXPLODEMASTERDATAP
description: "D Procordreexplodemasterdatap"
semantic_vi: "View D_Procordreexplodemasterdatap hiển thị dữ liệu đơn hàng sản xuất, cụ thể là dữ liệu cơ bản liên quan đến đơn hàng sản xuất, có thể được sử dụng để phân tích và quản lý đơn hàng sản xuất trong hệ thống SAP."
keywords:
  - "production order"
  - "đơn hàng sản xuất"
  - "master data"
  - "sap"
  - "pp"
  - "pp-pi"
  - "pp-pi-por"
  - "component:pp-pi-por-2cl"
  - "manufacturing"
  - "production version"
semantic_en: "The D_Procordreexplodemasterdatap view exposes production order data, specifically master data related to production orders, which can be used to analyze and manage production orders in the SAP system."
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCORDREEXPLODEMASTERDATAP

**D Procordreexplodemasterdatap**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionVersion` |  | |  | `char4` |  |  |

## Source Code

```abap
@EndUserText.label: 'ReexplodeMasterData Proc Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcOrdReexplodeMasterDataP
{
  ProductionVersion : char4;
}
```
