---
name: D_SERVICEORDERCREATED
description: D Service OrderCREATED
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
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
# D_SERVICEORDERCREATED

**D Service OrderCREATED**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustMgmtObjectType` | `crmt_subobject_category_db` |
| `ServiceOrderUUID` | `crmt_object_guid` |
| `ServiceOrderDescription` | `crmt_process_description` |
| `ServiceOrderType` | `crmt_process_type` |

## Source Code

```abap
@EndUserText.label: 'Service Order Created'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderCreated 
{

   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceOrderUUID: crmt_object_guid;
   ServiceOrderDescription: crmt_process_description;
   ServiceOrderType: crmt_process_type;
    
}
```
