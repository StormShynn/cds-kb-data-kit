---
name: D_SRVCORDTMPLRELEASEREVOKED
description: "D Srvcordtmplreleaserevoked"
semantic_vi: "View D_SRVCORDTMPLRELEASEREVOKED hiển thị dữ liệu hủy bỏ việc phát hành mẫu đơn dịch vụ, có liên quan khi quản lý mẫu đơn dịch vụ trong CRM."
keywords:
  - "crm"
  - "lease"
  - "service order template"
  - "dịch vụ"
  - "mẫu đơn dịch vụ"
  - "hủy bỏ"
  - "phát hành"
  - "crm-s4-btx-2cl"
semantic_en: "The D_SRVCORDTMPLRELEASEREVOKED CDS view exposes service order template release revocation data, which is relevant when managing service order templates in CRM."
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - lease
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SRVCORDTMPLRELEASEREVOKED

**D Srvcordtmplreleaserevoked**

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
@EndUserText.label: 'Service Order Template Release Revoked'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrvcOrdTmplReleaseRevoked
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;

}
```
