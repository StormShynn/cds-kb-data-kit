---
name: D_BUSSOLNORDFUPTRANSCREATED
description: D Bussolnordfuptranscreated
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# D_BUSSOLNORDFUPTRANSCREATED

**D Bussolnordfuptranscreated**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentItemObjectType` |  | |  | `crmt_swo_objtyp_process_item` |
| `ServiceDocSuccessor` |  | |  | `crmt_object_id_db` |
| `ServiceDocumentSuccessorUUID` |  | |  | `crmt_object_guid` |
| `ServiceDocumentItemSuccessor` |  | |  | `crms4_successor_document` |
| `ServiceDocItmSuccessorUUID` |  | |  | `crmt_pred_item_guid` |
| `BSOrdFollowUpSAPObjectType` |  | |  | `followupsapobjecttype` |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order FUP Created'
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_BusSolnOrdFUPTransCreated
{
  ServiceDocumentItemObjectType : crmt_swo_objtyp_process_item;
  ServiceDocSuccessor           : crmt_object_id_db;
  ServiceDocumentSuccessorUUID  : crmt_object_guid;
  ServiceDocumentItemSuccessor  : crms4_successor_document;
  ServiceDocItmSuccessorUUID    : crmt_pred_item_guid;
  BSOrdFollowUpSAPObjectType    : followupsapobjecttype;
}
```
