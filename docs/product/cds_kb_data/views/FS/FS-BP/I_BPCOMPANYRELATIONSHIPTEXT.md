---
name: I_BPCOMPANYRELATIONSHIPTEXT
description: "Bpcompanyrelationshiptext"
semantic_vi: "Chứa dữ liệu văn bản mối quan hệ công ty cho mối quan hệ đối tác kinh doanh, cung cấp mô tả bằng nhiều ngôn ngữ."
keywords:
  - "company relationship"
  - "mối quan hệ công ty"
  - "business partner"
  - "đối tác kinh doanh"
  - "text data"
  - "dữ liệu văn bản"
  - "language"
  - "ngôn ngữ"
  - "fs-bp"
  - "ekko"
semantic_en: "Exposes company relationship text data for business partner relationships, providing descriptions in different languages."
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
# I_BPCOMPANYRELATIONSHIPTEXT

**Bpcompanyrelationshiptext**

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
| `BPCompanyRelationship` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_comp_re )` |  |  |
| `BPCompanyRelationshipDesc` |  | |  | `ddtext` |  |  |
| `_BPCompanyRelationship` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCompanyRelationship` | `I_BPCompanyRelationship` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCORELSHPTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPCompanyRelationship',
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
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Company Relationship of BP - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_BPCompanyRelationshipText 

  as select from dd07t
  association [0..1] to I_BPCompanyRelationship as _BPCompanyRelationship on $projection.BPCompanyRelationship  = _BPCompanyRelationship.BPCompanyRelationship 
  association [0..1] to I_Language      as _Language      on $projection.Language                   = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel: { text.element: [ 'BPCompanyRelationshipDesc' ],
                      foreignKey.association: '_BPCompanyRelationship'
                    }
  key cast ( dd07t.domvalue_l as bp_comp_re ) as BPCompanyRelationship,
      @Semantics.text: true
      
      dd07t.ddtext     as BPCompanyRelationshipDesc,
      
      _BPCompanyRelationship,
      _Language

}
where
      dd07t.domname  = 'BP_COMP_RE'
  and dd07t.as4local = 'A'
```
