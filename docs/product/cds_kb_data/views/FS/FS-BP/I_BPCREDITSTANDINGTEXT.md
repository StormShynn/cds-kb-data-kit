---
name: I_BPCREDITSTANDINGTEXT
description: "Bpcreditstandingtext"
semantic_vi: "Chứa dữ liệu văn bản về tình trạng tín dụng của một phần kinh doanh và ngôn ngữ, được sử dụng để lấy và hiển thị mô tả tình trạng tín dụng."
keywords:
  - "credit standing"
  - "tình trạng tín dụng"
  - "business part"
  - "phần kinh doanh"
  - "language"
  - "ngôn ngữ"
  - "description"
  - "mô tả"
  - "fs-bp"
  - "ekko"
semantic_en: "Exposes business credit standing text data for a specific business part and language, used to retrieve and display credit standing descriptions."
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
# I_BPCREDITSTANDINGTEXT

**Bpcreditstandingtext**

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
| `BusPartCreditStanding` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_solvncy )` |  |  |
| `BPCreditStandingDescription` |  | |  | `ddtext` |  |  |
| `_BPCreditStanding` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditStanding` | `I_BPCreditStanding` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTNDGTEXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusPartCreditStanding',
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
@EndUserText.label: 'Credit Standing of BP - Text'

/*+[hideWarning] { "IDS" :  [ "KEY_CHECK" ] } */
define view I_BPCreditStandingText

  as select from dd07t
  association [0..1] to I_BPCreditStanding as _BPCreditStanding on $projection.BusPartCreditStanding = _BPCreditStanding.BusPartCreditStanding
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: 'BPCreditStandingDescription'
      @ObjectModel.foreignKey.association: '_BPCreditStanding'
      
  key cast ( dd07t.domvalue_l as bp_solvncy ) as BusPartCreditStanding,
  
      @Semantics.text: true
      dd07t.ddtext     as BPCreditStandingDescription,
      
      _BPCreditStanding,
      _Language

}
where
      dd07t.domname  = 'BP_SOLVNCY'
  and dd07t.as4local = 'A'
```
