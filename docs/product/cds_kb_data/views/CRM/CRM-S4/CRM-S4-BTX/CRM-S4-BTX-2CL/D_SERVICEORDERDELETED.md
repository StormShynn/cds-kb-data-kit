---
name: D_SERVICEORDERDELETED
description: "D Service OrderDELETED"
semantic_vi: "View D_SERVICEORDERDELETED CDS hiển thị các đơn đặt hàng dịch vụ đã bị xóa khỏi hệ thống CRM, cung cấp truy cập dữ liệu lịch sử cho phân tích và báo cáo."
keywords:
  - "service order"
  - "đơn đặt hàng dịch vụ"
  - "deleted service order"
  - "đơn đặt hàng dịch vụ đã bị xóa"
  - "crm"
  - "customer relationship management"
  - "sap crm"
  - "service order history"
  - "lịch sử đơn đặt hàng dịch vụ"
semantic_en: "The D_SERVICEORDERDELETED CDS view exposes deleted service orders from the CRM system, providing access to historical data for analysis and reporting."
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
# D_SERVICEORDERDELETED

**D Service OrderDELETED**

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
@EndUserText.label: 'Service Order Deleted'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderDeleted
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;

}
```
