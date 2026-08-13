---
name: D_SERVICEORDERCHANGED
description: "D Service OrderCHANGED"
semantic_vi: "View D_SERVICEORDERCHANGED hiển thị dữ liệu thay đổi đơn đặt hàng dịch vụ, có ích khi theo dõi thay đổi đơn đặt hàng dịch vụ trong CRM."
keywords:
  - "service order"
  - "đơn đặt hàng dịch vụ"
  - "crm"
  - "service order change"
  - "thay đổi đơn đặt hàng dịch vụ"
  - "sap cds"
  - "crm-s4-btx-2cl"
  - "lob:other"
  - "service order data"
semantic_en: "The D_SERVICEORDERCHANGED view exposes service order change data, which is useful when tracking changes to service orders in CRM."
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
# D_SERVICEORDERCHANGED

**D Service OrderCHANGED**

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
@EndUserText.label: 'Service Order Changed'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderChanged 
{
   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceOrderUUID: crmt_object_guid;
   ServiceOrderDescription: crmt_process_description;
   ServiceOrderType: crmt_process_type;
    
}
```
