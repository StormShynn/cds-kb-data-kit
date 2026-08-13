---
name: D_BUSSOLNORDFUPTRANSCREATED
description: "D Bussolnordfuptranscreated"
semantic_vi: "View D_BUSSOLNORDFUPTRANSCREATED hiển thị dữ liệu giao dịch theo dõi sau khi dịch vụ, có liên quan khi theo dõi thay đổi của các mục đơn dịch vụ hoặc người kế nhiệm của chúng."
keywords:
  - "service document"
  - "đơn dịch vụ"
  - "follow-up transaction"
  - "transaction data"
  - "service document item"
  - "đơn dịch vụ mục"
  - "successor"
  - "kế nhiệm"
  - "service document follow-up"
  - "crm"
  - "sap"
  - "cds view"
semantic_en: "The D_BUSSOLNORDFUPTRANSCREATED view exposes service document follow-up transaction data, which is relevant when tracking changes to service document items or their successors."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentItemObjectType` |  | |  | `crmt_swo_objtyp_process_item` |  |  |
| `ServiceDocSuccessor` |  | |  | `crmt_object_id_db` |  |  |
| `ServiceDocumentSuccessorUUID` |  | |  | `crmt_object_guid` |  |  |
| `ServiceDocumentItemSuccessor` |  | |  | `crms4_successor_document` |  |  |
| `ServiceDocItmSuccessorUUID` |  | |  | `crmt_pred_item_guid` |  |  |
| `BSOrdFollowUpSAPObjectType` |  | |  | `followupsapobjecttype` |  |  |

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
