---
name: C_CHANGERECDMAILTMPLFORAPPRVL
description: "Changerecdmailtmplforapprvl"
semantic_vi: "View này hiển thị các mẫu thư thay đổi bản ghi cho phê duyệt, có thể được sử dụng để quản lý và theo dõi các thay đổi trong vòng đời của sản phẩm. Nó đặc biệt hữu ích cho các nhà phát triển của thành phần PLM-CR-2CL cần tích hợp với các luồng làm việc của bản ghi thay đổi."
keywords:
  - "change record"
  - "thay đổi bản ghi"
  - "approval"
  - "phê duyệt"
  - "plm-cr-2cl"
  - "product lifecycle"
  - "vòng đời sản phẩm"
  - "change record workflow"
  - "luồng làm việc bản ghi thay đổi"
semantic_en: "This view exposes change record mail templates for approval, which can be used to manage and track changes in a product's lifecycle. It is particularly useful for PLM-CR-2CL component developers who need to integrate with change record workflows."
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  |  |  |
| `ChangeRecordUUID` |  | |  |  |  |  |
| `ChgRecordDescriptionText` |  | |  | `_Text[1:Language = $session.system_language].ChgRecordDescriptionText` |  |  |
| `ChangeRecord` |  | |  |  |  |  |
| `ChangeRecordType` |  | |  |  |  |  |
| `ParentChangeRecordUUID` |  | |  |  |  |  |
| `RootChangeRecordUUID` |  | |  |  |  |  |
| `ChangeRecordPriority` |  | |  | `cast ('' as /iam/priority )` |  |  |
| `ChangeRecordStatus` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ChangeRecordCategory` |  | |  |  |  |  |
| `ChgRecordApplication` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ChangeRecordLifecycleStatus` |  | |  |  |  |  |
| `ChgRecdAuthGroup` |  | |  |  |  |  |
| `_TaskRecipient` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

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
