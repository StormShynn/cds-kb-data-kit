---
name: I_BPMINIMUMRESERVETEXT
description: "Bpminimumreservetext"
semantic_vi: "View Bpminimumreservetext hiển thị dữ liệu văn bản tối thiểu dự trữ cho đối tác kinh doanh, được sử dụng khi cấu hình cài đặt đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "minimum reserve"
  - "tối thiểu dự trữ"
  - "text data"
  - "dữ liệu văn bản"
  - "business partner settings"
  - "cài đặt đối tác kinh doanh"
  - "fs-bp"
  - "interface-view"
  - "text-view"
semantic_en: "The Bpminimumreservetext view exposes minimum reserve text data for business partners, which is used when configuring business partner settings."
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
# I_BPMINIMUMRESERVETEXT

**Bpminimumreservetext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BPMinimumReserve` | ✓ | |  | `cast ( dd07t.domvalue_l as bnk_min_rsv )` |  |  |
| `BPMinimumReserveDescription` |  | |  | `ddtext` |  |  |
| `_BPMinimumReserve` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPMinimumReserve` | `I_BPMinimumReserve` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPMINRESERVETXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPMinimumReserve',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },     
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT
              }
@Analytics.dataExtraction.enabled: true        
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Subject to min reserve indicator - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPMinimumReserveText
  as select from dd07t
  association [0..1] to I_BPMinimumReserve as _BPMinimumReserve on $projection.BPMinimumReserve = _BPMinimumReserve.BPMinimumReserve
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                         as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: ['BPMinimumReserveDescription']
      @ObjectModel.foreignKey.association: '_BPMinimumReserve'
  key cast ( dd07t.domvalue_l as bnk_min_rsv ) as BPMinimumReserve,
      @Semantics.text: true
      dd07t.ddtext                             as BPMinimumReserveDescription,

      _BPMinimumReserve,
      _Language
}
where
      dd07t.domname  = 'BNK_MIN_RSV'
  and dd07t.as4local = 'A'
```
