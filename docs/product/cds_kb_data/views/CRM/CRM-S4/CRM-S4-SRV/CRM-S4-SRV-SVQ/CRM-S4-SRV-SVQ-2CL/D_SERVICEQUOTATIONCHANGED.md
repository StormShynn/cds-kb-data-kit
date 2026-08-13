---
name: D_SERVICEQUOTATIONCHANGED
description: "D Servicequotationchanged"
semantic_vi: "View D_SERVICEQUOTATIONCHANGED hiển thị dữ liệu thay đổi của đề xuất dịch vụ, có thể được sử dụng để theo dõi các thay đổi của đề xuất dịch vụ trong CRM."
keywords:
  - "service quotation"
  - "đề xuất dịch vụ"
  - "crm"
  - "service quotation change"
  - "thay đổi đề xuất dịch vụ"
  - "sap"
  - "crm-s4-srv-svq-2cl"
  - "lob:other"
  - "service quotation type"
  - "service quotation description"
  - "service quotation uuid"
  - "custmgmtobjecttype"
semantic_en: "The D_SERVICEQUOTATIONCHANGED view exposes service quotation change data, which can be used to track changes to service quotations in CRM."
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# D_SERVICEQUOTATIONCHANGED

**D Servicequotationchanged**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` |  | |  | `crmt_subobject_category_db` |  |  |
| `ServiceQuotationUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceQuotationDescription` |  | |  | `crmt_process_description` |  |  |
| `ServiceQuotationType` |  | |  | `crmt_process_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Changed'
@Event.description: 'Service Quotation is Changed'
@Event: {
   sapObjectNodeType: 'ServiceQuotation',
   implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ServiceQuotationChanged
{
   
   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceQuotationUUID: crmt_object_guid;
   ServiceQuotationDescription: crmt_process_description;
   ServiceQuotationType: crmt_process_type;
   
}
```
