---
name: D_BUSSOLNORDCREATED
description: "D Bussolnordcreated"
semantic_vi: "View D_BUSSOLNORDCREATED hiển thị dữ liệu tạo đơn hàng giải pháp kinh doanh trong hệ thống CRM, hữu ích cho việc theo dõi và phân tích sự kiện tạo đơn hàng."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "crm"
  - "order creation"
  - "tạo đơn hàng"
  - "s4hana"
  - "sap"
  - "crm-s4-sol-slo"
semantic_en: "The D_BUSSOLNORDCREATED view exposes business solution order creation data in the CRM system, useful for tracking and analyzing order creation events."
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
# D_BUSSOLNORDCREATED

**D Bussolnordcreated**

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
@EndUserText.label: 'Business Solution Order Created'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_BusSolnOrdCreated
{
  CustMgmtObjectType        : crmt_subobject_category_db;
  BusinessSolutionOrderUUID : crmt_object_guid;
  BusSolnOrdType            : crmt_process_type_db;
  BusSolnOrdDescription     : crmt_process_description;
}
```
