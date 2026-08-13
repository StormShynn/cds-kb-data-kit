---
name: C_CHANGEMASTERSTATUSDEX
description: "Change MasterERSTATUSDEX"
semantic_vi: "View Change Master ER STATUS DEX cung cấp dữ liệu về trạng thái thay đổi chủ, bao gồm thay đổi được cho phép, trạng thái khóa phân phối và ngày thay đổi được cho phép. Nó được sử dụng để trích xuất và phân tích dữ liệu trạng thái thay đổi chủ."
keywords:
  - "change master"
  - "status"
  - "change"
  - "distribution"
  - "lock"
  - "plm"
  - "plm-wui"
  - "plm-wui-obj"
  - "ecn"
  - "change-number-status"
  - "change-is-allowed"
  - "date-change-is-allowed"
semantic_en: "The Change Master ER STATUS DEX view provides data on change master status, including allowed changes, distribution lock status, and dates when changes are allowed. It is used to extract and analyze change master status data."
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
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMASTERSTATUSDEX

**Change MasterERSTATUSDEX**

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
| `ChangeIsAllowed` |  | |  |  |  |  |
| `DateChangeIsAllowed` |  | |  |  |  |  |
| `DistributionIsLocked` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Change Master Status'
@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.semanticKey: [ 'ChangeNumberStatus' ]
@ObjectModel.sapObjectNodeType.name: 'ChangeMasterStatus'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Analytics:{
    dataCategory: #DIMENSION,
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'T419S',
              role: #MAIN,
              viewElement: ['ChangeNumberStatus'],
              tableElement: ['AENST'] }
          ]
        }
    }
}

define view entity C_ChangeMasterStatusDEX
  as select from I_ChangeMasterStatus
{
  key ChangeNumberStatus,
      @Semantics.booleanIndicator: true
      ChangeIsAllowed,
      @Semantics.booleanIndicator: true
      DateChangeIsAllowed,
      @Semantics.booleanIndicator: true
      DistributionIsLocked,
      /* Associations */
      _Text
}
```
