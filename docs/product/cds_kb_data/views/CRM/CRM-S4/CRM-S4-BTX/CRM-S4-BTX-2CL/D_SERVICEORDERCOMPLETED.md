---
name: D_SERVICEORDERCOMPLETED
description: "D Service OrderCOMPLETED"
semantic_vi: "View D_SERVICEORDERCOMPLETED hiển thị dữ liệu đơn đặt hàng dịch vụ đã hoàn thành, có thể được sử dụng để theo dõi trạng thái đơn đặt hàng dịch vụ trong hệ thống CRM."
keywords:
  - "service order"
  - "đơn đặt hàng dịch vụ"
  - "crm"
  - "service order completed"
  - "d_serviceordercompleted"
  - "completed service order"
  - "service order status"
  - "đơn đặt hàng dịch vụ đã hoàn thành"
  - "crm system"
semantic_en: "The D_SERVICEORDERCOMPLETED CDS view exposes completed service order data, which can be used to track the status of service orders in the CRM system."
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
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICEORDERCOMPLETED

**D Service OrderCOMPLETED**

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
@EndUserText.label: 'Service Order Completed'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderCompleted
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;

}
```
