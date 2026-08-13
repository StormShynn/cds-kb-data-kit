---
name: D_PROCESSORDERCREATED
description: "D Processordercreated"
semantic_vi: "View D_ProcessOrderCreated hiển thị dữ liệu tạo đơn đặt hàng quy trình, có liên quan khi theo dõi việc khởi tạo quy trình sản xuất trong bối cảnh sản xuất."
keywords:
  - "process order"
  - "đơn đặt hàng quy trình"
  - "manufacturing order"
  - "sản xuất"
  - "production plant"
  - "trạm sản xuất"
  - "sap pp"
  - "pp-pi"
  - "pp-pi-por"
  - "component:pp-pi-por-2cl"
  - "lob:manufacturing"
semantic_en: "The D_ProcessOrderCreated view exposes process order creation data, which is relevant when tracking the initiation of production processes in a manufacturing context."
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
# D_PROCESSORDERCREATED

**D Processordercreated**

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
@EndUserText.label: 'Process Order Created'
define abstract entity D_ProcessOrderCreated 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProcessOrderType            : aufart;
      ProductionPlant             : pwwrk;
}
```
