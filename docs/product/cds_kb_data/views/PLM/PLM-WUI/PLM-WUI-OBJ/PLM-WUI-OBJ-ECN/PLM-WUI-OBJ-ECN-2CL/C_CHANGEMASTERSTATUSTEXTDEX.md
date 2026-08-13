---
name: C_CHANGEMASTERSTATUSTEXTDEX
description: "Change MasterERSTATUSTEXTDEX"
semantic_vi: "View Change Master ER Status Text Dex cung cấp danh sách các bản ghi trạng thái văn bản thay đổi chủ, có thể được sử dụng để lấy trạng thái văn bản cho trạng thái thay đổi chủ cụ thể trong một ngôn ngữ cụ thể. View này hữu ích khi hiển thị thông tin trạng thái thay đổi chủ cho người dùng trong các ngôn ngữ khác nhau."
keywords:
  - "change master"
  - "change master status"
  - "status text"
  - "language"
  - "change number status"
  - "change number status text"
  - "plm"
  - "plm-wui"
  - "plm-wui-obj"
  - "plm-wui-obj-ecn-2cl"
  - "text"
  - "status"
semantic_en: "The Change Master ER Status Text Dex view provides a list of change master status text records, which can be used to retrieve the status text for a specific change master status in a particular language. This view is useful when displaying change master status information to users in different languages."
app_component: PLM-WUI-OBJ-ECN-2CL
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
  - PLM-WUI
  - PLM-WUI-OBJ
  - consumption-view
  - data-extraction
  - change-master
  - text
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMASTERSTATUSTEXTDEX

**Change MasterERSTATUSTEXTDEX**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
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
| `ChangeNumberStatus` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ChangeNumberStatusText` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Master Status - Text'
@ObjectModel.sapObjectNodeType.name: 'ChangeMasterStatusText'
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE ]
@Analytics:{
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'T419T', role: #MAIN,
              viewElement: ['ChangeNumberStatus','Language'],
              tableElement: ['AENST', 'SPRAS'] }
          ]
        }
    }
}
define view entity C_ChangeMasterStatusTextDEX
  as select from I_ChangeMasterStatusText
{
  key ChangeNumberStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.text: true
      ChangeNumberStatusText,
      _Language

}
```
