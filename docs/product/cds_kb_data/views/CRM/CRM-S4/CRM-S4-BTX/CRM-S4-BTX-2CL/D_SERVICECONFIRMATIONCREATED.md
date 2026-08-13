---
name: D_SERVICECONFIRMATIONCREATED
description: "D Serviceconfirmationcreated"
semantic_vi: "View D_SERVICECONFIRMATIONCREATED hiển thị dữ liệu xác nhận dịch vụ được tạo trong CRM, hữu ích cho việc theo dõi xác nhận dịch vụ và chi tiết liên quan."
keywords:
  - "service confirmation"
  - "xác nhận dịch vụ"
  - "crm"
  - "dịch vụ"
  - "service"
  - "confirmation"
  - "created"
  - "tạo"
  - "crm-s4-btx-2cl"
semantic_en: "The D_SERVICECONFIRMATIONCREATED view exposes service confirmation data created in CRM, useful for tracking service confirmations and their associated details."
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
# D_SERVICECONFIRMATIONCREATED

**D Serviceconfirmationcreated**

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
@EndUserText.label: 'Service Confirmation Created'
@Event:{
    sapObjectNodeType: 'ServiceConfirmation',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceConfirmationCreated
{
  CustMgmtObjectType             : crmt_subobject_category_db;
  ServiceConfirmationUUID        : crmt_object_guid;
  ServiceConfirmationDescription : crmt_process_description;
  ServiceConfirmationType        : crmt_process_type;

}
```
