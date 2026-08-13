---
name: C_CHANGERECORDEMAILTEMPLATE
description: "Change RecordEMAILTEMPLATE"
semantic_vi: "View thay đổi hồ sơ EMAILTEMPLATE cung cấp truy cập vào các mẫu email liên quan đến hồ sơ thay đổi trong thành phần PLM-CR-2CL. Nó được sử dụng để truy xuất và quản lý các mẫu email cho hồ sơ thay đổi."
keywords:
  - "change record"
  - "email template"
  - "plm-cr-2cl"
  - "thay đổi hồ sơ"
  - "mẫu email"
  - "thành phần plm-cr-2cl"
  - "hồ sơ thay đổi"
  - "sap plm"
  - "thay đổi hồ sơ email"
semantic_en: "The Change Record EMAILTEMPLATE view provides access to email templates associated with change records in the PLM-CR-2CL component. It is used to retrieve and manage email templates for change records."
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - workflow
  - change-record
  - email
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDEMAILTEMPLATE

**Change RecordEMAILTEMPLATE**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |  |  |
| `ProcessRouteTask` | ✓ | | `_ProcessRouteTask` | `ProcessRouteTask` |  |  |
| `ChangeRecord` |  | |  |  |  |  |
| `ProcessRoute` |  | |  |  |  |  |
| `ProcessRouteActivityArea` |  | |  |  |  |  |
| `ChgRecordDescriptionText` |  | |  |  |  |  |
| `ChangeRecordType` |  | |  |  |  |  |
| `ChangeRecordTypeDesc` |  | | `_ChangeRecordTypeVH` | `ChangeRecordTypeDesc` |  |  |
| `ChangeRecordStatus` |  | |  |  |  |  |
| `ChangeRecordStatusDescription` |  | | `_UserStatusVH` | `ChangeRecordStatusDescription` |  |  |
| `PersonFullName` |  | | `_ChangeRecordContactPerson` | `PersonFullName` |  |  |
| `ChgRecdExpectedCompletionDate` |  | |  |  |  |  |
| `ChgRecdAddlAttribDetailDesc` |  | |  | `ChangeRecordDetailDescription` |  |  |
| `Partner` |  | |  |  |  |  |
| `_ChangeRecordType` | | ✓ | | | | |
| `_ChangeRecordTypeVH` | | ✓ | | | | |
| `_UserStatusVH` | | ✓ | | | | |
| `_ChangeRecordContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeRecordType` | `I_ChangeRecordType` | [1..1] |
| `_ChangeRecordTypeVH` | `C_ChangeRecordTypeVH` | [0..1] |
| `_UserStatusVH` | `C_UserStatusVH` | [0..1] |
| `_ChangeRecordContactPerson` | `I_ChangeRecordContactPerson` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CHGRECPREMAIL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Change record email template helper'
@ObjectModel.usageType: { serviceQuality: #D,
                          dataClass: #MIXED,
                          sizeCategory: #XL }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #KEY_USER_COPYING_TEMPLATE ]
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@UI.headerInfo: {
        typeName: 'ChangeRecord',
        typeNamePlural: 'ChangeRecord',
        title: {
            type: #STANDARD,
            label: 'Change Record',
            value: 'ChgRecordDescriptionText'
        },
        description: {
            type: #STANDARD,
//            label: 'Change Record Description',
            value: 'ChangeRecord'
        }
}
define view C_ChangeRecordEmailTemplate
  as select from P_ChangeRecordMyInboxTask 
  association [1..1] to I_ChangeRecordType          as _ChangeRecordType          on  $projection.ChangeRecordType = _ChangeRecordType.ChangeRecordType
  association [0..1] to C_ChangeRecordTypeVH        as _ChangeRecordTypeVH        on  $projection.ChangeRecordType = _ChangeRecordTypeVH.ChangeRecordType
  association [0..1] to C_UserStatusVH              as _UserStatusVH              on  $projection.ChangeRecordType   = _UserStatusVH.ChangeRecordType
                                                                                  and $projection.ChangeRecordStatus = _UserStatusVH.ChangeRecordStatus
  association [0..1] to I_ChangeRecordContactPerson as _ChangeRecordContactPerson on  $projection.Partner = _ChangeRecordContactPerson.Partner
{
      @Consumption.semanticObject: 'ChangeRecord'
  key P_ChangeRecordMyInboxTask.ChangeRecordUUID,
  key _ProcessRouteTask.ProcessRouteTask,
      P_ChangeRecordMyInboxTask.ChangeRecord,
      ProcessRoute,
      ProcessRouteActivityArea,
      P_ChangeRecordMyInboxTask.ChgRecordDescriptionText,

      @ObjectModel.text.element: ['ChangeRecordTypeDesc']
      P_ChangeRecordMyInboxTask.ChangeRecordType,
      _ChangeRecordTypeVH.ChangeRecordTypeDesc,

      @ObjectModel.text.element: ['ChangeRecordStatusDescription']
      P_ChangeRecordMyInboxTask.ChangeRecordStatus,
      _UserStatusVH.ChangeRecordStatusDescription,


      _ChangeRecordContactPerson.PersonFullName,



      ChgRecdExpectedCompletionDate,
      ChangeRecordDetailDescription   as ChgRecdAddlAttribDetailDesc,
      P_ChangeRecordMyInboxTask.Partner,

//      _ProcessRouteTask.WorkflowTaskInternalID as WorkflowTaskInternalID,
//      _ProcessRouteTask._WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as WorkflowTaskName,
//      _ProcessRouteTask._WorkflowTask._TaskPriority._Text[1:Language=$session.system_language].WorkflowTaskPriorityDesc as WorkflowTaskPriorityDesc,
//      P_ChangeRecordMyInboxTask.ChangeRecordUUID,

      _ChangeRecordType,
      
      _ChangeRecordTypeVH,
      _UserStatusVH,
      _ChangeRecordContactPerson
}
```
