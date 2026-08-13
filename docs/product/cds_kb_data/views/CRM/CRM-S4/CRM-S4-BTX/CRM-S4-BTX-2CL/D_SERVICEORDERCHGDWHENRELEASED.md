---
name: D_SERVICEORDERCHGDWHENRELEASED
description: "D Service OrderCHGDWHENRELEASED"
semantic_vi: "View D_SERVICEORDERCHGDWHENRELEASED hiển thị dữ liệu lịch sử thay đổi đơn hàng dịch vụ khi đơn hàng dịch vụ được phát hành. Nó cung cấp các trường khóa chính để xác định đơn hàng dịch vụ và các thay đổi liên quan."
keywords:
  - "service order"
  - "đơn hàng dịch vụ"
  - "crm"
  - "service"
  - "lease"
  - "change history"
  - "lịch sử thay đổi"
  - "service order change"
  - "đơn hàng dịch vụ thay đổi"
  - "released"
  - "phát hành"
semantic_en: "The D_SERVICEORDERCHGDWHENRELEASED view exposes service order change history data when a service order is released. It provides key fields for identifying service orders and their associated changes."
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - service-order
  - lease
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICEORDERCHGDWHENRELEASED

**D Service OrderCHGDWHENRELEASED**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` |  | |  | `crmt_subobject_category_db` |  |  |
| `ServiceOrderUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceOrderDescription` |  | |  | `crmt_process_description` |  |  |
| `ServiceOrderType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Order Changed When Released'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderChgdWhenReleased
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;
}
```
