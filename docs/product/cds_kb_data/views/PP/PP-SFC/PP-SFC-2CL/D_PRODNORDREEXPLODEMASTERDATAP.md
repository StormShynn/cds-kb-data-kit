---
name: D_PRODNORDREEXPLODEMASTERDATAP
description: "D Prodnordreexplodemasterdatap"
semantic_vi: "View D_PRODNORDREEXPLODEMASTERDATAP hiển thị dữ liệu cơ bản về đơn đặt hàng sản xuất có thể được sử dụng để phân tích và báo cáo về đơn đặt hàng sản xuất. Nó thường được sử dụng trong bối cảnh lập kế hoạch và thực hiện sản xuất trong quá trình sản xuất."
keywords:
  - "production order"
  - "đơn đặt hàng sản xuất"
  - "production planning"
  - "lập kế hoạch sản xuất"
  - "manufacturing process"
  - "quá trình sản xuất"
  - "production execution"
  - "thực hiện sản xuất"
  - "sap pp-sfc"
  - "component pp-sfc-2cl"
  - "lob manufacturing"
semantic_en: "The D_PRODNORDREEXPLODEMASTERDATAP view exposes production order master data that can be used to analyze and report on production orders. It is typically used in the context of production planning and execution in the manufacturing process."
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDREEXPLODEMASTERDATAP

**D Prodnordreexplodemasterdatap**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionVersion` |  | |  | `char4` |  |  |

## Source Code

```abap
@EndUserText.label: 'ReexplodeMasterData Prodn Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProdnOrdReexplodeMasterDataP
{
  ProductionVersion : char4;
}
```
