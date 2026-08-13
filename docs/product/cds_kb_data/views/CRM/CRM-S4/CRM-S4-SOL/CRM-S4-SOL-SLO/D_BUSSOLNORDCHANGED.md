---
name: D_BUSSOLNORDCHANGED
description: "D Bussolnordchanged"
semantic_vi: "View D_BUSSOLNORDCHANGED hiển thị các thay đổi về giải pháp kinh doanh, cung cấp thông tin về loại đối tượng quản lý khách hàng, UUID của đơn hàng giải pháp kinh doanh, loại và mô tả."
keywords:
  - "business solution order"
  - "thay đổi giải pháp kinh doanh"
  - "customer management object"
  - "đơn hàng giải pháp kinh doanh"
  - "crm"
  - "s4-sol-slo"
  - "lob other"
  - "change tracking"
  - "thay đổi theo dõi"
semantic_en: "The D_BUSSOLNORDCHANGED view exposes business solution order changes, providing information on customer management object types, business solution order UUIDs, types, and descriptions. It is used when tracking changes to business solution orders."
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
# D_BUSSOLNORDCHANGED

**D Bussolnordchanged**

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
@EndUserText.label: 'Business Solution Order Changed'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_BusSolnOrdChanged
{
  CustMgmtObjectType        : crmt_subobject_category_db;
  BusinessSolutionOrderUUID : crmt_object_guid;
  BusSolnOrdType            : crmt_process_type_db;
  BusSolnOrdDescription     : crmt_process_description;
}
```
