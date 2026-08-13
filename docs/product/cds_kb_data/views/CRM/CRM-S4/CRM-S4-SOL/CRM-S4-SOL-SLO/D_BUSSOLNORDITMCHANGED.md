---
name: D_BUSSOLNORDITMCHANGED
description: "D Bussolnorditmchanged"
semantic_vi: "View D_BUSSOLNORDITMCHANGED hiển thị các thay đổi trong đơn hàng giải pháp kinh doanh, có thể được sử dụng để theo dõi các thay đổi trong các đơn hàng của giải pháp kinh doanh."
keywords:
  - "business solution"
  - "order item"
  - "change"
  - "tracking"
  - "crm"
  - "sap"
  - "solution"
  - "order"
  - "item"
  - "modification"
  - "thay đổi"
  - "đơn hàng"
semantic_en: "The D_BUSSOLNORDITMCHANGED view exposes business solution order item changes, which can be used to track modifications to order items in a business solution."
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
# D_BUSSOLNORDITMCHANGED

**D Bussolnorditmchanged**

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
@EndUserText.label: 'Business Solution Order Item Changed'
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@VDM.usage.type: [#EVENT_SIGNATURE] 
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_BusSolnOrdItmChanged
{
  BusinessSolutionOrderItemUUID : crmt_object_guid;
  BusSolnOrdItmCategory         : crmt_item_type_db;
  BusSolnOrdItmDescription      : crms4_solo_item_desc;
}
```
