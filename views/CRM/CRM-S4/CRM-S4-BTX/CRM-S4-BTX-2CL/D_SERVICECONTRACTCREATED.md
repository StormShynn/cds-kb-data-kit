---
name: D_SERVICECONTRACTCREATED
description: D Servicecontractcreated
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
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
# D_SERVICECONTRACTCREATED

**D Servicecontractcreated**

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
| `ServiceContractUUID` | `crmt_object_guid` |
| `ServiceContractType` | `crmt_process_type` |

## Source Code

```abap
@EndUserText.label: 'Service Contract Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractCreated 
{
    CustMgmtObjectType : crmt_subobject_category_db;
    ServiceContractUUID : crmt_object_guid;
    ServiceContractType : crmt_process_type; 
}
```
