---
name: D_SRVCQTANAPPRVLWRKFLWSTARTED
description: "D Srvcqtanapprvlwrkflwstarted"
semantic_vi: "View này hiển thị dữ liệu luồng phê duyệt đơn giá trị dịch vụ, cụ thể là bắt đầu của luồng phê duyệt cho đơn giá trị dịch vụ. Nó được sử dụng khi theo dõi quá trình phê duyệt đơn giá trị dịch vụ."
keywords:
  - "service quotation"
  - "đơn giá trị dịch vụ"
  - "workflow"
  - "luồng phê duyệt"
  - "approval process"
  - "quá trình phê duyệt"
  - "crm"
  - "s4"
  - "sap"
  - "workflow start"
  - "bắt đầu luồng phê duyệt"
semantic_en: "This view exposes service quotation approval workflow data, specifically the start of the workflow for a service quotation. It is used when tracking the approval process for service quotations."
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - workflow
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# D_SRVCQTANAPPRVLWRKFLWSTARTED

**D Srvcqtanapprvlwrkflwstarted**

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
@EndUserText.label: 'Service Quotation start Apprvl Workflow'
@Event.description: 'Start Approval Workflow for Service Quotation'
@Event: {
   sapObjectNodeType: 'ServiceQuotation',
   implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_SrvcQtanApprvlWrkflwStarted
{
   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceQuotationUUID: crmt_object_guid;
   ServiceQuotationDescription: crmt_process_description;
   ServiceQuotationType: crmt_process_type;
}
```
