---
name: D_SERVICECONFIRMATIONDELETED
description: "D Serviceconfirmationdeleted"
semantic_vi: "View D_SERVICECONFIRMATIONDELETED CDS hiển thị các xác nhận dịch vụ đã bị xóa khỏi hệ thống CRM, có thể được sử dụng để theo dõi và quản lý lịch sử xác nhận dịch vụ."
keywords:
  - "service confirmation"
  - "xác nhận dịch vụ"
  - "deleted"
  - "xóa"
  - "crm"
  - "dịch vụ"
  - "service"
  - "confirmation"
  - "history"
  - "lịch sử"
semantic_en: "The D_SERVICECONFIRMATIONDELETED CDS view exposes deleted service confirmations from the CRM system, which can be used to track and manage service confirmation history."
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
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICECONFIRMATIONDELETED

**D Serviceconfirmationdeleted**

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
| `ServiceConfirmationUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceConfirmationDescription` |  | |  | `crmt_process_description` |  |  |
| `ServiceConfirmationType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Deleted'
@Event:{
    sapObjectNodeType: 'ServiceConfirmation',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceConfirmationDeleted
{
  CustMgmtObjectType             : crmt_subobject_category_db;
  ServiceConfirmationUUID        : crmt_object_guid;
  ServiceConfirmationDescription : crmt_process_description;
  ServiceConfirmationType        : crmt_process_type;

}
```
