---
name: I_BPCRDTWRTHNSSRATINGTEXT
description: "Bpcrdtwrthnssratingtext"
semantic_vi: "View Bpcrdtwrthnssratingtext cung cấp mô tả xếp hạng tín dụng và mã ngôn ngữ tương ứng, có thể được sử dụng để hiển thị xếp hạng tín dụng trong các ngôn ngữ khác nhau."
keywords:
  - "credit standing rating"
  - "mô tả xếp hạng tín dụng"
  - "language code"
  - "mã ngôn ngữ"
  - "sap cds view"
  - "view bpcrdtwrthnssratingtext"
  - "fs-bp"
  - "interface view"
  - "text view"
semantic_en: "The Bpcrdtwrthnssratingtext view provides credit standing rating descriptions and their corresponding language codes, which can be used to display credit standing ratings in different languages."
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
# I_BPCRDTWRTHNSSRATINGTEXT

**Bpcrdtwrthnssratingtext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `BPCreditStandingRating` | ✓ | |  | `rating` |  |  |
| `BPCreditStandingRatingDesc` |  | |  | `xrating` |  |  |
| `_BPCreditWorthinessRating` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditWorthinessRating` | `I_BPCreditWorthinessRating` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTRATGTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPCreditStandingRating',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Credit Worthiness Rating of BP - Text'

define view I_BPCrdtWrthnssRatingText
  as select from tp06t
  association [0..1] to I_BPCreditWorthinessRating as _BPCreditWorthinessRating on $projection.BPCreditStandingRating = _BPCreditWorthinessRating.BPCreditStandingRating
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tp06t.langu   as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPCreditWorthinessRating'
  key tp06t.rating  as BPCreditStandingRating,

      @Semantics.text: true
      tp06t.xrating as BPCreditStandingRatingDesc,

      _BPCreditWorthinessRating,
      _Language
}
```
