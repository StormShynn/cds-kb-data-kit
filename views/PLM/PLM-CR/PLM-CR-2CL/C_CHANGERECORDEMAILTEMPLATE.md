---
name: C_CHANGERECORDEMAILTEMPLATE
description: Change RecordEMAILTEMPLATE
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |
| `ProcessRouteTask` | ✓ | | `_ProcessRouteTask` | `ProcessRouteTask` |
| `ChangeRecord` |  | |  |  |
| `ProcessRoute` |  | |  |  |
| `ProcessRouteActivityArea` |  | |  |  |
| `ChgRecordDescriptionText` |  | |  |  |
| `ChangeRecordType` |  | |  |  |
| `ChangeRecordTypeDesc` |  | | `_ChangeRecordTypeVH` | `ChangeRecordTypeDesc` |
| `ChangeRecordStatus` |  | |  |  |
| `ChangeRecordStatusDescription` |  | | `_UserStatusVH` | `ChangeRecordStatusDescription` |
| `PersonFullName` |  | | `_ChangeRecordContactPerson` | `PersonFullName` |
| `ChgRecdExpectedCompletionDate` |  | |  |  |
| `ChgRecdAddlAttribDetailDesc` |  | |  | `ChangeRecordDetailDescription` |
| `Partner` |  | |  |  |
| `_ChangeRecordType` | | ✓ | | |
| `_ChangeRecordTypeVH` | | ✓ | | |
| `_UserStatusVH` | | ✓ | | |
| `_ChangeRecordContactPerson` | | ✓ | | |

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
