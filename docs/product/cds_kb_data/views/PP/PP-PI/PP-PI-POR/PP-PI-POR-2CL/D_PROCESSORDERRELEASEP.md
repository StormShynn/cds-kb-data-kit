---
name: D_PROCESSORDERRELEASEP
description: "D Processorderreleasep"
semantic_vi: "View D_PROCESSORDERRELEASEP hiển thị dữ liệu phát hành đơn đặt hàng quy trình, có liên quan khi quản lý đơn đặt hàng quy trình trong thành phần lập kế hoạch và thực hiện sản xuất."
keywords:
  - "process order"
  - "đơn đặt hàng quy trình"
  - "production planning"
  - "thành phần lập kế hoạch sản xuất"
  - "process order release"
  - "phát hành đơn đặt hàng quy trình"
  - "pp-pi-por"
  - "pp-pi"
  - "pp"
  - "manufacturing"
  - "sản xuất"
semantic_en: "The D_PROCESSORDERRELEASEP view exposes process order release data, which is relevant when managing process orders in the production planning and execution component."
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
  - lease
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCESSORDERRELEASEP

**D Processorderreleasep**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrdRelIsPmtdDsptMisgParts` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'Release Process Order Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcessOrderReleaseP
{
  OrdRelIsPmtdDsptMisgParts : abap_boolean;
}
```
