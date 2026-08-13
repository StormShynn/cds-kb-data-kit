---
name: C_CHANGERECORDDESCDEX
description: "Change RecordDESCDEX"
semantic_vi: "View Change Record DESCDEX cung cấp mô tả của các bản ghi thay đổi trong một ngôn ngữ cụ thể, cho phép các nhà phát triển truy cập và sử dụng thông tin này trong các ứng dụng của họ. View này hữu ích cho việc truy xuất mô tả chi tiết của các bản ghi thay đổi."
keywords:
  - "change record"
  - "change record description"
  - "change record descdex"
  - "change record uuid"
  - "language"
  - "change record text"
  - "plm"
  - "plm-cr"
  - "plm-cr-2cl"
  - "change management"
  - "thay đổi"
  - "bản ghi thay đổi"
semantic_en: "The Change Record DESCDEX view provides a description of change records in a specific language, enabling developers to access and utilize this information in their applications. This view is useful for retrieving detailed descriptions of change records."
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
# C_CHANGERECORDDESCDEX

**Change RecordDESCDEX**

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
| `ChangeRecordUUID` | ✓ | |  | `ChangeRecordReferenceTextUUID` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ChgRecordDescriptionText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Extraction for change record description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}

@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordText'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGRECD_T', role: #MAIN,
              viewElement: ['ChangeRecordUUID', 'Language'],
              tableElement: [ 'DB_KEY','LANGU']
             }
           ]
        }
    }
}

define view entity C_ChangeRecordDescDEX as select from I_ChgRecDescriptionText
//  as select from I_ChgRecDescriptionText_2
{
  key ChangeRecordReferenceTextUUID as ChangeRecordUUID,
  key Language,
      ChgRecordDescriptionText
   
}
```
