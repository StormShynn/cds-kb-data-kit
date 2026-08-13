---
name: D_SERVICEORDERTMPLCHANGED
description: "D Service OrderTMPLCHANGED"
semantic_vi: "View D_SERVICEORDERTMPLCHANGED hiển thị dữ liệu thay đổi mẫu đơn dịch vụ, có thể sử dụng khi theo dõi thay đổi mẫu đơn dịch vụ trong hệ thống CRM."
keywords:
  - "service order template"
  - "đơn dịch vụ mẫu"
  - "crm"
  - "service order"
  - "đơn dịch vụ"
  - "template change"
  - "thay đổi mẫu"
  - "sap crm"
  - "crm system"
semantic_en: "The D_SERVICEORDERTMPLCHANGED view exposes service order template change data, which can be used when tracking changes to service order templates in the CRM system."
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
# D_SERVICEORDERTMPLCHANGED

**D Service OrderTMPLCHANGED**

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
@EndUserText.label: 'Service Order Template Changed'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderTmplChanged
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;
}
```
