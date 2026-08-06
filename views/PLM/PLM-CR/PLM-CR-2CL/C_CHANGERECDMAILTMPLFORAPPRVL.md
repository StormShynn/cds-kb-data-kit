---
name: C_CHANGERECDMAILTMPLFORAPPRVL
description: Changerecdmailtmplforapprvl
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
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECDMAILTMPLFORAPPRVL

**Changerecdmailtmplforapprvl**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowTaskInternalID` | `Task.WorkflowTaskInternalID` |
| `ChangeRecordUUID` | `Header.ChangeRecordUUID` |
| `ChgRecordDescriptionText` | `_Text[1:Language = $session.system_language].ChgRecordDescriptionText` |
| `ChangeRecord` | `Header.ChangeRecord` |
| `ChangeRecordType` | `Header.ChangeRecordType` |
| `ParentChangeRecordUUID` | `Header.ParentChangeRecordUUID` |
| `RootChangeRecordUUID` | `Header.RootChangeRecordUUID` |
| `ChangeRecordPriority` | `cast ('' as /iam/priority )` |
| `ChangeRecordStatus` | `Header.ChangeRecordStatus` |
| `ChangeNumber` | `Header.ChangeNumber` |
| `ChangeRecordCategory` | `Header.ChangeRecordCategory` |
| `ChgRecordApplication` | `Header.ChgRecordApplication` |
| `CreatedByUser` | `Header.CreatedByUser` |
| `CreationDateTime` | `Header.CreationDateTime` |
| `LastChangedByUser` | `Header.LastChangedByUser` |
| `LastChangeDateTime` | `Header.LastChangeDateTime` |
| `ChangeRecordLifecycleStatus` | `Header.ChangeRecordLifecycleStatus` |
| `ChgRecdAuthGroup` | `Header.ChgRecdAuthGroup` |
| `_TaskRecipient` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaskRecipient` | `I_WorkflowTaskRecipient` | [0..*] |
| `_Text` | `I_ChangeRecordText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Email Template for Approval'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType: { serviceQuality: #D,
                          dataClass: #MIXED,
                          sizeCategory: #XL }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #KEY_USER_COPYING_TEMPLATE ]
@VDM.viewType: #CONSUMPTION
define view entity C_ChangeRecdMailTmplForApprvl
  as select from I_WorkflowTask           as Task


    inner join   I_WorkflowTaskApplObject as TaskApplicationObject on TaskApplicationObject.WorkflowTaskInternalID = Task.WorkflowTaskInternalID

    inner join   I_ChangeRecordWorkFlow_2   as Header                on TaskApplicationObject.TechnicalWrkflwObject = bintohex(
      Header.ChangeRecordUUID
    )

  association [0..*] to I_WorkflowTaskRecipient as _TaskRecipient on  Task.WorkflowTaskInternalID                 = _TaskRecipient.WorkflowTaskInternalID
                                                                  and _TaskRecipient.WorkflowTaskIsVisibleInInbox = 'X'
  association [0..*] to I_ChangeRecordText      as _Text          on  $projection.ChangeRecordUUID = _Text.ChangeRecordUUID

{
  key Task.WorkflowTaskInternalID,
      Header.ChangeRecordUUID,
      _Text[1:Language = $session.system_language].ChgRecordDescriptionText as ChgRecordDescriptionText,
      Header.ChangeRecord,
      Header.ChangeRecordType,
      Header.ParentChangeRecordUUID,
      Header.RootChangeRecordUUID,
      cast ('' as /iam/priority )                                                                    as ChangeRecordPriority,
      Header.ChangeRecordStatus,
      Header.ChangeNumber,
      Header.ChangeRecordCategory,
      Header.ChgRecordApplication,
      Header.CreatedByUser,
      Header.CreationDateTime,
      Header.LastChangedByUser,
      Header.LastChangeDateTime,
      Header.ChangeRecordLifecycleStatus,
      Header.ChgRecdAuthGroup,
      _TaskRecipient,
      _Text
}
where
     Task.WorkflowTaskStatus = 'READY'
  or Task.WorkflowTaskStatus = 'SELECTED'
  or Task.WorkflowTaskStatus = 'STARTED'
  or Task.WorkflowTaskStatus = 'COMMITTED'
```
