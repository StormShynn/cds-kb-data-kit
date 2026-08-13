---
name: D_PROCESSORDERCHANGED
description: "D Processorderchanged"
semantic_vi: "View D_ProcessOrderChanged hiển thị các thay đổi trong quá trình sản xuất, hữu ích cho việc theo dõi và phân tích các bản cập nhật của đơn đặt hàng sản xuất."
keywords:
  - "process order"
  - "đơn đặt hàng sản xuất"
  - "manufacturing"
  - "production order"
  - "thay đổi"
  - "cập nhật"
  - "sản xuất"
  - "process order changed"
  - "d_processorderchanged"
  - "pp"
  - "pp-pi"
  - "pp-pi-por"
semantic_en: "The D_ProcessOrderChanged view exposes process order changes in manufacturing, useful for tracking and analyzing production order updates."
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
# D_PROCESSORDERCHANGED

**D Processorderchanged**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` |  | |  | `manufacturingorder` |  |  |
| `ProcessOrderType` |  | |  | `aufart` |  |  |
| `ProductionPlant` |  | |  | `pwwrk` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'ProcessOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
@EndUserText.label: 'Process Order Changed'
define abstract entity D_ProcessOrderChanged 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProcessOrderType            : aufart;
      ProductionPlant             : pwwrk;
}
```
