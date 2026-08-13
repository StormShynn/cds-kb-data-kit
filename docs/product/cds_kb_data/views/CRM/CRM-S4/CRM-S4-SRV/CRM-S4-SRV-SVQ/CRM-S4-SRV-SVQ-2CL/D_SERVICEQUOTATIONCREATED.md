---
name: D_SERVICEQUOTATIONCREATED
description: "D Servicequotationcreated"
semantic_vi: "Dữ liệu tạo đơn giá trị dịch vụ được lộ diện, hữu ích cho việc theo dõi đơn giá trị dịch vụ và đối tượng quản lý khách hàng liên quan."
keywords:
  - "service quotation"
  - "đơn giá trị dịch vụ"
  - "customer management object"
  - "object type"
  - "service quotation uuid"
  - "service quotation description"
  - "service quotation type"
semantic_en: "Service quotation creation data is exposed, useful for tracking service quotations and their associated customer management objects."
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
# D_SERVICEQUOTATIONCREATED

**D Servicequotationcreated**

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
@EndUserText.label: 'Service Quotation Created'
@Event.description: 'Service Quotation is Created'
@Event: {
   sapObjectNodeType: 'ServiceQuotation',
   implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ServiceQuotationCreated
{  
   
   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceQuotationUUID: crmt_object_guid;
   ServiceQuotationDescription: crmt_process_description;
   ServiceQuotationType: crmt_process_type;
   
}
```
