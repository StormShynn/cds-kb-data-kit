---
name: D_SRVCQTANAPPRVLWRKFLWSTARTED
description: D Srvcqtanapprvlwrkflwstarted
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `CustMgmtObjectType` | `crmt_subobject_category_db` |
| `ServiceQuotationUUID` | `crmt_object_guid` |
| `ServiceQuotationDescription` | `crmt_process_description` |
| `ServiceQuotationType` | `crmt_process_type` |

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
