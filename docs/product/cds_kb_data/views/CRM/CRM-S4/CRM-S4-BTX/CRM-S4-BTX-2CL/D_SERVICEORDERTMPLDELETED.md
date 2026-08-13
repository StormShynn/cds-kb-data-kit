---
name: D_SERVICEORDERTMPLDELETED
description: "D Service OrderTMPLDELETED"
semantic_vi: "Đại diện cho các mẫu đơn dịch vụ đã bị xóa trong CRM, được sử dụng để theo dõi và quản lý lịch sử xóa mẫu đơn dịch vụ."
keywords:
  - "service order template"
  - "mẫu đơn dịch vụ"
  - "deleted"
  - "xóa"
  - "crm"
  - "service order"
  - "đơn dịch vụ"
  - "template"
  - "mẫu"
  - "deletion history"
  - "lịch sử xóa"
semantic_en: "Represents deleted service order templates in CRM, used to track and manage service order template deletion history."
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
# D_SERVICEORDERTMPLDELETED

**D Service OrderTMPLDELETED**

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
@EndUserText.label: 'Service Order Template Deleted'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderTmplDeleted
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;
}
```
