---
name: I_BPTARGETGROUPTEXT
description: "Bptargetgrouptext"
semantic_vi: "View I_BPTARGETGROUPTEXT cung cấp mô tả văn bản cho các nhóm đối tác kinh doanh, có thể được sử dụng để hiển thị thông tin chi tiết về các nhóm đối tác trong quản lý đối tác kinh doanh."
keywords:
  - "business partner"
  - "target group"
  - "description"
  - "text view"
  - "interface view"
  - "fs-bp"
  - "sap cds"
  - "business partner management"
  - "đối tác kinh doanh"
  - "nhóm mục tiêu"
semantic_en: "The I_BPTARGETGROUPTEXT view provides text descriptions for business partner target groups, which can be used to display detailed information about target groups in business partner management."
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
# I_BPTARGETGROUPTEXT

**Bptargetgrouptext**

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
| `Language` | ✓ | |  | `cast(tp13t.langu as langu preserving type)` |  |  |
| `BusinessPartnerTargetGroup` | ✓ | |  | `cast(tp13t.group_d as bp_group_d preserving type)` |  |  |
| `BusinessPartnerTargetGroupDesc` |  | |  | `group_d_t` |  |  |
| `_BusinessPartnerTargetGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerTargetGroup` | `I_BusinessPartnerTargetGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group for Business Partner - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerTargetGroup',
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

define view entity I_BPTargetGroupText
  as select from tp13t
  association [0..1] to I_BusinessPartnerTargetGroup as _BusinessPartnerTargetGroup on $projection.BusinessPartnerTargetGroup = _BusinessPartnerTargetGroup.BusinessPartnerTargetGroup
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp13t.langu as langu preserving type)        as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BusinessPartnerTargetGroup'
  key cast(tp13t.group_d as bp_group_d preserving type) as BusinessPartnerTargetGroup,

      @Semantics.text: true
      tp13t.group_d_t                                   as BusinessPartnerTargetGroupDesc,

      _BusinessPartnerTargetGroup,
      _Language
}
```
