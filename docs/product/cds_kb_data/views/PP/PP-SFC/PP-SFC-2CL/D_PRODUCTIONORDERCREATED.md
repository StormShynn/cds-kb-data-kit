---
name: D_PRODUCTIONORDERCREATED
description: "D Production OrderCREATED"
semantic_vi: "View D_PRODUCTIONORDERCREATED hiển thị dữ liệu tạo đơn đặt hàng sản xuất, có thể được sử dụng để theo dõi và phân tích sự kiện tạo đơn đặt hàng sản xuất trong quy trình sản xuất."
keywords:
  - "production order"
  - "đơn đặt hàng sản xuất"
  - "manufacturing"
  - "sản xuất"
  - "pp"
  - "pp-sfc"
  - "sap"
  - "cds view"
  - "view"
  - "d_productionsordercreated"
  - "manufacturing order"
  - "production order type"
semantic_en: "The D_PRODUCTIONORDERCREATED view exposes production order creation data, which can be used to track and analyze production order creation events in the manufacturing process."
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
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# D_PRODUCTIONORDERCREATED

**D Production OrderCREATED**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` |  | |  | `manufacturingorder` |  |  |
| `ProductionOrderType` |  | |  | `aufart` |  |  |
| `ProductionPlant` |  | |  | `werks_d` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
@EndUserText.label: 'Production Order Created'
define abstract entity D_ProductionOrderCreated 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProductionOrderType         : aufart;
      ProductionPlant             : werks_d;
}
```
