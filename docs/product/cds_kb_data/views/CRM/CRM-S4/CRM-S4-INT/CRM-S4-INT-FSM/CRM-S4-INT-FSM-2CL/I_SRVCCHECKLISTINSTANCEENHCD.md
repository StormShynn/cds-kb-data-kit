---
name: I_SRVCCHECKLISTINSTANCEENHCD
description: "Checklist Instance Enhanced"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTINSTANCEENHCD')/$value
semantic_en: "Checklist Instance Enhanced"
semantic_vi: "Checklist Instance Enhanced — CDS view tổng hợp dựa trên I_ServiceChecklistInstance."
keywords:
  - "checklist"
  - "instance"
  - "enhanced"
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
# I_SRVCCHECKLISTINSTANCEENHCD

**Checklist Instance Enhanced**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTINSTANCEENHCD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistInstance` | ✓ | |  |  | `CHAR(10)` | Instance ID |
| `ServiceChecklistTemplate` |  | |  |  | `CHAR(10)` | Template ID |
| `SrvcChklstLanguage` |  | |  |  | `LANG(1)` | Language |
| `SrvcChklstInstceStatus` |  | |  |  | `CHAR(1)` | Instance Status |
| `SrvcChklstInstceDeltnReason` |  | |  |  | `CHAR(2)` | Checklist Instance Deletion Reason |
| `SrvcChklstCreationDateTime` |  | |  |  | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` |  | |  |  | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `SrvcChklstInstceLinkedObject` |  | |  |  | `CHAR(40)` | Linked Object ID |
| `SrvcChklstInstceLinkdObjType` |  | |  |  | `CHAR(20)` | Linked Object's Obj. Type |
| `FSMChecklistInstanceUUID` |  | |  |  | `RAW(16)` | FSM Instance ID |
| `FSMChklstInstanceResponsible` |  | |  |  | `CHAR(20)` | FSM Checklist Instance Responsible |
| `_InstanceValue` | | ✓ | | | | |
| `_SrvcChklstInstceText` | | ✓ | | | | |
| `_SrvcChklstInstceDeltnReason` | | ✓ | | | | |
| `_InstanceValueDetail` | | ✓ | | | | |
| `_SrvcChklstInstceStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InstanceValue` | `I_SrvcChklstInstceValue` | [1..*] |
| `_SrvcChklstInstceText` | `I_SrvcChklstInstceText` | [0..*] |
| `_SrvcChklstInstanceExtn` | `E_ServiceChecklistInstance` | [0..1] |
| `_SrvcChklstInstceDeltnReason` | `I_SrvcChklstInstceDeltnReason` | [0..1] |
| `_InstanceValueDetail` | `I_SrvcChklstInstceDetail` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTINSTANCEENHCD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTINSTANCEENHCD')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Checklist Instance Enhanced'
@VDM: {
  viewType: #COMPOSITE,
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

define view entity I_SrvcChecklistInstanceEnhcd
  as select from I_ServiceChecklistInstance
  association [1..*] to I_SrvcChklstInstceValue    as _InstanceValue          on  $projection.ServiceChecklistInstance = _InstanceValue.ServiceChecklistInstance
  association [0..*] to I_SrvcChklstInstceText     as _SrvcChklstInstceText   on  $projection.ServiceChecklistInstance = _SrvcChklstInstceText.ServiceChecklistInstance
  association [0..1] to E_ServiceChecklistInstance as _SrvcChklstInstanceExtn on  $projection.ServiceChecklistInstance = _SrvcChklstInstanceExtn.ServiceChecklistInstance
  association [0..1] to I_SrvcChklstInstceDeltnReason as _SrvcChklstInstceDeltnReason on $projection.SrvcChklstInstceDeltnReason = _SrvcChklstInstceDeltnReason.SrvcChklstInstceDeltnReason
  association [1..*] to I_SrvcChklstInstceDetail   as _InstanceValueDetail    on  $projection.ServiceChecklistInstance = _InstanceValueDetail.ServiceChecklistInstance
                                                                              and $projection.ServiceChecklistTemplate = _InstanceValueDetail.ServiceChecklistTemplate
{
  key ServiceChecklistInstance,
      ServiceChecklistTemplate,
      SrvcChklstLanguage,
      SrvcChklstInstceStatus,
      SrvcChklstInstceDeltnReason,
      SrvcChklstCreationDateTime,
      SrvcChklstCreatedByUser,
      SrvcChklstChangedDateTime,
      SrvcChklstChangedByUser,
      SrvcChklstInstceLinkedObject,
      SrvcChklstInstceLinkdObjType,
      FSMChecklistInstanceUUID,
      FSMChklstInstanceResponsible,

      //Associations
      _InstanceValue,
      _SrvcChklstInstceStatus,
      _SrvcChklstInstceText,
      _SrvcChklstInstceDeltnReason,
      _InstanceValueDetail
}
```
