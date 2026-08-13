---
name: D_BUSSOLNORDITMCREATED
description: "D Bussolnorditmcreated"
semantic_vi: "View D_BUSSOLNORDITMCREATED hiển thị dữ liệu tạo đơn hàng giải pháp kinh doanh, hữu ích khi theo dõi các mục mới được thêm vào đơn hàng giải pháp kinh doanh."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "order item creation"
  - "tạo đơn hàng"
  - "crm"
  - "sap"
  - "solution order item"
  - "đơn hàng giải pháp"
  - "item creation"
semantic_en: "The D_BUSSOLNORDITMCREATED view exposes business solution order item creation data, useful when tracking new items added to a business solution order."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# D_BUSSOLNORDITMCREATED

**D Bussolnorditmcreated**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrderItemUUID` |  | |  | `crmt_object_guid` |  |  |
| `BusSolnOrdItmCategory` |  | |  | `crmt_item_type_db` |  |  |
| `BusSolnOrdItmDescription` |  | |  | `crms4_solo_item_desc` |  |  |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Item Created'
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_BusSolnOrdItmCreated
{
  BusinessSolutionOrderItemUUID : crmt_object_guid;
  BusSolnOrdItmCategory         : crmt_item_type_db;
  BusSolnOrdItmDescription      : crms4_solo_item_desc;
}
```
