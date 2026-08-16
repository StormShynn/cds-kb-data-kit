---
name: I_BPCREDITSTANDINGREVIEWTEXT
description: "Bpcreditstandingreviewtext"
semantic_vi: "View Bpcreditstandingreviewtext cung cấp dữ liệu văn bản liên quan đến đánh giá tình trạng tín dụng, có thể được sử dụng khi phân tích hoặc báo cáo thông tin đánh giá tình trạng tín dụng."
keywords:
  - "credit standing review"
  - "tình trạng tín dụng"
  - "text data"
  - "đánh giá tình trạng tín dụng"
  - "bpcrdtstndgreviewdescription"
  - "bpcrdtstndgreview"
  - "language"
  - "fs-bp"
  - "interface-view"
  - "text-view"
  - "credit"
semantic_en: "The Bpcreditstandingreviewtext view provides text data related to credit standing reviews, which can be used when analyzing or reporting on credit standing review information."
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITSTANDINGREVIEWTEXT

**Bpcreditstandingreviewtext**

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
| `BPCreditStandingReview` | ✓ | |  | `kwg_cre` |  |  |
| `BPCrdtStndgReviewDescription` |  | |  | `kwg_cre_t` |  |  |
| `_BPCreditStandingReview` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditStandingReview` | `I_BPCreditStandingReview` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTNDGTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPCreditStandingReview',
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
                                          #SEARCHABLE_ENTITY               ]
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Credit Standing Review - Text'

define view I_BPCreditStandingReviewText
  as select from tp12t
  association [0..1] to I_BPCreditStandingReview as _BPCreditStandingReview on $projection.BPCreditStandingReview = _BPCreditStandingReview.BPCreditStandingReview
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tp12t.langu     as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPCreditStandingReview'
  key tp12t.kwg_cre   as BPCreditStandingReview,

      @Semantics.text: true
      tp12t.kwg_cre_t as BPCrdtStndgReviewDescription,

      _BPCreditStandingReview,
      _Language
}
```
