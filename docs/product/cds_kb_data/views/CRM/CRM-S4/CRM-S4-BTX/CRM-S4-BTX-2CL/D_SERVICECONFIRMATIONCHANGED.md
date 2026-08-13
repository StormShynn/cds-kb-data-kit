---
name: D_SERVICECONFIRMATIONCHANGED
description: "D Serviceconfirmationchanged"
semantic_vi: "View này hiển thị dữ liệu xác nhận dịch vụ đã thay đổi, cho phép các nhà phát triển theo dõi các bản cập nhật của xác nhận dịch vụ trong CRM."
keywords:
  - "service confirmation"
  - "dịch vụ xác nhận"
  - "crm"
  - "service confirmation changed"
  - "xác nhận dịch vụ đã thay đổi"
  - "sap cds"
  - "cds view"
  - "crm service"
  - "dịch vụ crm"
semantic_en: "This view exposes service confirmation data that has changed, allowing developers to track updates to service confirmations in CRM."
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
# D_SERVICECONFIRMATIONCHANGED

**D Serviceconfirmationchanged**

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
@EndUserText.label: 'Service Confirmation Changed'
@Event:{
    sapObjectNodeType: 'ServiceConfirmation',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceConfirmationChanged
{
  CustMgmtObjectType             : crmt_subobject_category_db;
  ServiceConfirmationUUID        : crmt_object_guid;
  ServiceConfirmationDescription : crmt_process_description;
  ServiceConfirmationType        : crmt_process_type;

}
```
