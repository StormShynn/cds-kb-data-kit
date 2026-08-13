---
name: I_AT_BPOENBTARGETGROUPTEXT
description: "AT Bpoenbtargetgrouptext"
semantic_vi: "View I_AT_BPOENBTARGETGROUPTEXT cung cấp mô tả văn bản cho các nhóm mục tiêu BPO eNB, có thể được sử dụng để hiển thị thông tin về các nhóm mục tiêu trong quy trình kinh doanh."
keywords:
  - "bpo"
  - "target group"
  - "mục tiêu"
  - "bpo enb"
  - "description"
  - "mô tả"
  - "text view"
  - "view"
  - "sap"
  - "fs-bp"
  - "interface view"
semantic_en: "The I_AT_BPOENBTARGETGROUPTEXT view provides text descriptions for BPO eNB target groups, which can be used to display information about target groups in business processes."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_AT_BPOENBTARGETGROUPTEXT

**AT Bpoenbtargetgrouptext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(td05t_at_fs.spras as spras preserving type)` |  |  |
| `BPOeNBTargetGroup` | ✓ | |  | `cast(td05t_at_fs.szg_at as vvszg_at_fs preserving type)` |  |  |
| `BPOeNBTargetGroupDescription` |  | |  | `xlbez` |  |  |
| `_AT_BPOeNBTargetGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AT_BPOeNBTargetGroup` | `I_AT_BPOeNBTargetGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group According to OeNB - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPOeNBTargetGroup',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_AT_BPOeNBTargetGroupText
  as select from td05t_at_fs 
  association [0..1] to I_AT_BPOeNBTargetGroup as _AT_BPOeNBTargetGroup on $projection.BPOeNBTargetGroup = _AT_BPOeNBTargetGroup.BPOeNBTargetGroup
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(td05t_at_fs.spras as spras preserving type)              as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_AT_BPOeNBTargetGroup'
  key cast(td05t_at_fs.szg_at as vvszg_at_fs preserving type) as BPOeNBTargetGroup,

      @Semantics.text: true
      td05t_at_fs.xlbez                                        as BPOeNBTargetGroupDescription,

      _AT_BPOeNBTargetGroup,
      _Language
}
```
