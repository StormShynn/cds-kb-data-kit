---
name: D_BUSSOLNORDDELETED
description: "D Bussolnorddeleted"
semantic_vi: "View D_BUSSOLNORDDELETED CDS hiển thị các đơn hàng giải pháp kinh doanh đã bị xóa khỏi hệ thống CRM, cho phép các nhà phát triển truy cập và quản lý dữ liệu đơn hàng lịch sử. Nó được sử dụng khi truy xuất thông tin về các đơn hàng đã bị xóa trước đó."
keywords:
  - "crm"
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "deleted order"
  - "đơn hàng đã bị xóa"
  - "sap cds view"
  - "view d_bussolnorddeleted"
  - "crm-s4-sol-slo"
semantic_en: "The D_BUSSOLNORDDELETED CDS view exposes deleted business solution orders from the CRM system, allowing developers to access and manage historical order data. It is used when retrieving information about previously deleted orders."
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
# D_BUSSOLNORDDELETED

**D Bussolnorddeleted**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` |  | |  | `crmt_subobject_category_db` |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `crmt_object_guid` |  |  |
| `BusSolnOrdType` |  | |  | `crmt_process_type_db` |  |  |
| `BusSolnOrdDescription` |  | |  | `crmt_process_description` |  |  |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Deleted'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_BusSolnOrdDeleted
{
  CustMgmtObjectType        : crmt_subobject_category_db;
  BusinessSolutionOrderUUID : crmt_object_guid;
  BusSolnOrdType            : crmt_process_type_db;
  BusSolnOrdDescription     : crmt_process_description;
}
```
