---
name: C_CHANGERECORDDEX
description: "Change RecordDEX"
semantic_vi: "View Change RecordDEX hiển thị danh sách toàn diện các bản ghi thay đổi, cung cấp thông tin chính như UUID bản ghi thay đổi, loại và trạng thái. Nó được sử dụng để trích xuất và phân tích các bản ghi thay đổi trong thành phần PLM-CR-2CL."
keywords:
  - "change record"
  - "bản ghi thay đổi"
  - "plm-cr-2cl"
  - "change record uuid"
  - "thay đổi"
  - "trạng thái"
  - "loại"
  - "uuid"
  - "plm"
  - "cr"
semantic_en: "The Change RecordDEX view exposes a comprehensive list of change records, providing key information such as change record UUID, type, and status. It is used to extract and analyze change records in the PLM-CR-2CL component."
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
  - data-extraction
  - change-record
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDDEX

**Change RecordDEX**

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
| `ChangeRecord` |  | |  |  |  |  |
| `ChangeRecordType` |  | |  |  |  |  |
| `ParentChangeRecordUUID` |  | |  |  |  |  |
| `RootChangeRecordUUID` |  | |  |  |  |  |
| `ChangeRecordPriority` |  | |  |  |  |  |
| `ChangeRecordStatus` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ChangeRecordCategory` |  | |  |  |  |  |
| `ChgRecordApplication` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ChangeRecordLifecycleStatus` |  | |  |  |  |  |
| `ChgRecdDigitalSignatureStatus` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #L}
@ObjectModel :{
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }
@EndUserText.label: 'Data Extraction for Change Record Header'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

// CDC Annotation for DATA extraction

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}
@AccessControl.authorizationCheck: #MANDATORY
define view entity C_ChangeRecordDEX
  as select from I_ChgRecHeader
{
            @Semantics.uuid: true
  key       ChangeRecordUUID,
            ChangeRecord,
            ChangeRecordType,
            @Semantics.uuid: true
            ParentChangeRecordUUID,
            @Semantics.uuid: true
            RootChangeRecordUUID,
            ChangeRecordPriority,
            ChangeRecordStatus,
            ChangeNumber,
            ChangeRecordCategory,
            ChgRecordApplication,
            CreatedByUser,
            CreationDateTime,
            LastChangedByUser,
            LastChangeDateTime,
            ChangeRecordLifecycleStatus,
            ChgRecdDigitalSignatureStatus
}
```
