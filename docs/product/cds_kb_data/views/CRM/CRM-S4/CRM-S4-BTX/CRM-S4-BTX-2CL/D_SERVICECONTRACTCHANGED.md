---
name: D_SERVICECONTRACTCHANGED
description: "D Servicecontractchanged"
semantic_vi: "View D_SERVICECONTRACTCHANGED hiển thị dữ liệu thay đổi hợp đồng dịch vụ, có thể được sử dụng để theo dõi các thay đổi được thực hiện trên hợp đồng dịch vụ trong hệ thống CRM."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "crm"
  - "service contract change"
  - "thay đổi hợp đồng dịch vụ"
  - "sap"
  - "crm-s4-btx-2cl"
  - "lob:other"
  - "contract"
  - "dịch vụ"
semantic_en: "The D_SERVICECONTRACTCHANGED view exposes service contract change data, which can be used to track changes made to service contracts in the CRM system."
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
  - contract
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICECONTRACTCHANGED

**D Servicecontractchanged**

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
| `ServiceContractUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceContractType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Contract Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractChanged
{
    CustMgmtObjectType : crmt_subobject_category_db;
    ServiceContractUUID : crmt_object_guid;
    ServiceContractType : crmt_process_type;  
}
```
