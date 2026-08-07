---
name: C_CHANGERECORDFLEXIBLEWORKFLOW
description: Change RecordFLEXIBLEWORKFLOW
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
  - change-record
  - workflow
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDFLEXIBLEWORKFLOW

**Change RecordFLEXIBLEWORKFLOW**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |  |  |
| `ChangeRecord` |  | |  |  |  |  |
| `ChangeRecordType` |  | |  |  |  |  |
| `ChangeRecordStatus` |  | |  |  |  |  |
| `ChangeRecordLifecycleStatus` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ChgRecdReasonForChange` |  | |  |  |  |  |
| `ChangeRecordDetailDescription` |  | |  |  |  |  |
| `ChgRecordDescriptionText` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Change Record Flexible Workflow'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ]
@Workflow.enabledFor: [ #RESPONSIBILITY_MANAGEMENT, #CUSTOM_TASK_ATTRIBUTES ]
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType:  #CONSUMPTION
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
}
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
//@VDM.lifecycle.contract.type:#NONE
define view entity C_ChangeRecordFlexibleWorkflow
  as select from R_ChangeRecordHeader
{
      @UI.hidden: true
  key ChangeRecordUUID,
      ChangeRecord,
      ChangeRecordType,

      ChangeRecordStatus,
      ChangeRecordLifecycleStatus,
      CreationDateTime,     
      LastChangeDateTime,
      ChgRecdReasonForChange,
      ChangeRecordDetailDescription,
      ChgRecordDescriptionText


}
```
