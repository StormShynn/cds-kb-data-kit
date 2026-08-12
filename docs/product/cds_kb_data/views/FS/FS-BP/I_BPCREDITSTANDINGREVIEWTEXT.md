---
name: I_BPCREDITSTANDINGREVIEWTEXT
description: "Bpcreditstandingreviewtext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
