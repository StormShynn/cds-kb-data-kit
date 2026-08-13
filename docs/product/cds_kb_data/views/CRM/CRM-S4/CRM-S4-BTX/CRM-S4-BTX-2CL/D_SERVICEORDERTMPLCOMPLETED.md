---
name: D_SERVICEORDERTMPLCOMPLETED
description: "D Service OrderTMPLCOMPLETED"
semantic_vi: "View D_SERVICEORDERTMPLCOMPLETED hiển thị các mẫu đơn dịch vụ đã hoàn thành trong CRM, có thể được sử dụng để lấy và phân tích các mẫu đơn dịch vụ đã được hoàn thành."
keywords:
  - "service order template"
  - "mẫu đơn dịch vụ"
  - "crm"
  - "service order"
  - "đơn dịch vụ"
  - "completed"
  - "hoàn thành"
  - "sap"
  - "crm-s4-btx-2cl"
semantic_en: "The D_SERVICEORDERTMPLCOMPLETED view exposes completed service order templates in CRM, which can be used to retrieve and analyze service order templates that have been completed."
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
# D_SERVICEORDERTMPLCOMPLETED

**D Service OrderTMPLCOMPLETED**

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
@EndUserText.label: 'Service Order Template Completed'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderTmplCompleted
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;
}
```
