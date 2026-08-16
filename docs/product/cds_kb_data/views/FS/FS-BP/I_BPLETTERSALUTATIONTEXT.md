---
name: I_BPLETTERSALUTATIONTEXT
description: "Bplettersalutationtext"
semantic_vi: "View I_BPLETTERSALUTATIONTEXT cung cấp các văn bản chào trong thư kinh doanh bằng các ngôn ngữ khác nhau. Nó được sử dụng để lấy văn bản chào trong thư kinh doanh."
keywords:
  - "business letter"
  - "văn bản thư kinh doanh"
  - "salutation text"
  - "văn bản chào"
  - "language"
  - "ngôn ngữ"
  - "sap"
  - "fs-bp"
  - "interface view"
  - "text view"
semantic_en: "The I_BPLETTERSALUTATIONTEXT view provides business letter salutation texts in different languages. It is used to retrieve salutation texts for business letters."
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
# I_BPLETTERSALUTATIONTEXT

**Bplettersalutationtext**

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
| `BPLetterSalutation` | ✓ | |  | `title_let` |  |  |
| `BPLetterSalutationDescription` |  | |  | `title_le_t` |  |  |
| `_BPLetterSalutation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPLetterSalutation` | `I_BPLetterSalutation` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPSALUTATIONTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPLetterSalutation',
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
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@Search.searchable: true
@EndUserText.label: 'Letter Salutation of BP - Text'

define view I_BPLetterSalutationText   
  as select from tp02t  
  association [0..1] to I_BPLetterSalutation as _BPLetterSalutation on $projection.BPLetterSalutation = _BPLetterSalutation.BPLetterSalutation
  association [0..1] to I_Language           as _Language           on $projection.Language           = _Language.Language
{   
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tp02t.langu      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPLetterSalutation'
  key tp02t.title_let  as BPLetterSalutation,

      @Semantics.text: true
      tp02t.title_le_t as BPLetterSalutationDescription,

      _BPLetterSalutation,
      _Language
}
```
