---
name: I_SERVICECHECKLISTINSTANCE
description: "Checklist Instance"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value
semantic_en: "Checklist Instance"
semantic_vi: "Checklist Instance — CDS view cơ bản dựa trên crmd_fsm_in_hdr."
keywords:
  - "Checklist Instance"
  - "checklist"
  - "instance"
  - "service"
  - "template"
  - "srvc"
  - "chklst"
  - "language"
  - "instce"
  - "status"
  - "deltn"
  - "reason"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SERVICECHECKLISTINSTANCE

**Checklist Instance**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistInstance` | ✓ | |  | `instance_id` | `CHAR(10)` | Instance ID |
| `ServiceChecklistTemplate` |  | |  | `template_id` | `CHAR(10)` | Template ID |
| `SrvcChklstLanguage` |  | |  | `source_language` | `LANG(1)` | Language |
| `SrvcChklstInstceStatus` |  | |  | `status` | `CHAR(1)` | Instance Status |
| `SrvcChklstInstceDeltnReason` |  | |  | `del_reason` | `CHAR(2)` | Checklist Instance Deletion Reason |
| `SrvcChklstCreationDateTime` |  | |  | `created_at` | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` |  | |  | `last_changed_at` | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Last Changed By |
| `FSMChecklistRequest` |  | |  | `requestuuid` | `CHAR(40)` | Request ID |
| `SrvcChklstInstceLinkedObject` |  | |  | `linked_obj_ext_id` | `CHAR(40)` | Linked Object ID |
| `SrvcChklstInstceLinkdObjType` |  | |  | `linked_obj_type` | `CHAR(20)` | Linked Object's Obj. Type |
| `FSMChecklistInstanceUUID` |  | |  | `fsm_instanceuuid` | `RAW(16)` | FSM Instance ID |
| `SrvcChklstInstceSourceSystem` |  | |  | `source_system` | `CHAR(2)` | Source System |
| `FSMChklstInstanceResponsible` |  | |  | `responsible` | `CHAR(20)` | FSM Checklist Instance Responsible |
| `_SrvcChklstInstceStatus` | | ✓ | | | | |
| `_SrvcChklstInstceDeltnReason` | | ✓ | | | | |
| `_SrvcChklstInstceText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcChklstInstceStatus` | `I_SrvcChklstInstceStatus` | [0..1] |
| `_SrvcChklstInstceDeltnReason` | `I_SrvcChklstInstceDeltnReason` | [0..1] |
| `_SrvcChklstInstceText` | `I_SrvcChklstInstceText` | [0..*] |
| `_SrvcChklstInstanceExtn` | `E_ServiceChecklistInstance` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value)*

```abap
@EndUserText.label: 'Checklist Instance'

@AccessControl.authorizationCheck: #CHECK

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #B,
        sizeCategory: #L,
        dataClass: #TRANSACTIONAL
    }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceChecklistInstance
  as select from crmd_fsm_in_hdr
  association [0..1] to I_SrvcChklstInstceStatus      as _SrvcChklstInstceStatus      on $projection.SrvcChklstInstceStatus = _SrvcChklstInstceStatus.SrvcChklstInstceStatus
  association [0..1] to I_SrvcChklstInstceDeltnReason as _SrvcChklstInstceDeltnReason on $projection.SrvcChklstInstceDeltnReason = _SrvcChklstInstceDeltnReason.SrvcChklstInstceDeltnReason
  association [0..*] to I_SrvcChklstInstceText        as _SrvcChklstInstceText        on $projection.ServiceChecklistInstance = _SrvcChklstInstceText.ServiceChecklistInstance
  association [0..1] to E_ServiceChecklistInstance    as _SrvcChklstInstanceExtn      on $projection.ServiceChecklistInstance = _SrvcChklstInstanceExtn.ServiceChecklistInstance
{
  key instance_id       as ServiceChecklistInstance,
      template_id       as ServiceChecklistTemplate,
      source_language   as SrvcChklstLanguage,
      @ObjectModel.foreignKey.association: '_SrvcChklstInstceStatus'
      status            as SrvcChklstInstceStatus,
      @ObjectModel.foreignKey.association: '_SrvcChklstInstceDeltnReason'
      del_reason        as SrvcChklstInstceDeltnReason,
      created_at        as SrvcChklstCreationDateTime,
      created_by        as SrvcChklstCreatedByUser,
      last_changed_at   as SrvcChklstChangedDateTime,
      last_changed_by   as SrvcChklstChangedByUser,
      requestuuid       as FSMChecklistRequest,
      linked_obj_ext_id as SrvcChklstInstceLinkedObject,
      linked_obj_type   as SrvcChklstInstceLinkdObjType,
      fsm_instanceuuid  as FSMChecklistInstanceUUID,
      source_system     as SrvcChklstInstceSourceSystem,
      responsible       as FSMChklstInstanceResponsible,

      // Association
      _SrvcChklstInstceStatus,
      _SrvcChklstInstceDeltnReason,
      _SrvcChklstInstceText
}
```
