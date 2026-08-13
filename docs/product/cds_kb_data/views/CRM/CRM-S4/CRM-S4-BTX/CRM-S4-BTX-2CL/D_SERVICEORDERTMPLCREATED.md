---
name: D_SERVICEORDERTMPLCREATED
description: "D Service OrderTMPLCREATED"
semantic_vi: "View D_SERVICEORDERTMPLCREATED hiển thị dữ liệu tạo mẫu đơn dịch vụ, hữu ích khi theo dõi hoặc phân tích sự kiện tạo mẫu đơn dịch vụ."
keywords:
  - "service order"
  - "đơn dịch vụ"
  - "service order template"
  - "mẫu đơn dịch vụ"
  - "crm"
  - "s4-btx-2cl"
  - "lob:other"
  - "service order creation"
  - "tạo đơn dịch vụ"
semantic_en: "The D_SERVICEORDERTMPLCREATED view exposes service order template creation data, useful when tracking or analyzing service order template creation events."
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
# D_SERVICEORDERTMPLCREATED

**D Service OrderTMPLCREATED**

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
| `ServiceOrderTemplateUUID` |  | |  | `crmt_object_guid` |  |  |
| `SrvcOrdTmplDescription` |  | |  | `crmt_process_description` |  |  |
| `ServiceOrderTemplateType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Order Template Created'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderTmplCreated
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;
}
```
