---
name: C_CHANGERECORDFLEXIBLEWORKFLOW
description: "Change RecordFLEXIBLEWORKFLOW"
semantic_vi: "View Change Record Flexible Workflow cung cấp truy cập dữ liệu thay đổi ghi chép, bao gồm trạng thái luồng làm việc và trạng thái vòng đời, để sử dụng trong việc quản lý ghi chép thay đổi trong ứng dụng PLM-CR-2CL."
keywords:
  - "change record"
  - "thay đổi ghi chép"
  - "workflow"
  - "vòng đời"
  - "plm-cr-2cl"
  - "plm"
  - "thay đổi"
  - "ghi chép"
  - "luồng làm việc"
semantic_en: "The Change Record Flexible Workflow view provides access to change record data, including workflow status and lifecycle status, for use in managing change records in PLM-CR-2CL applications."
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
