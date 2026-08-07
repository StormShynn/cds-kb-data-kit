---
name: I_BPRATINGTRENDTEXT
description: Bpratingtrendtext
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
# I_BPRATINGTRENDTEXT

**Bpratingtrendtext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BusinessPartnerRatingTrend` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_tendency )` |  |  |
| `BusinessPartnerRatingTrendDesc` |  | |  | `ddtext` |  |  |
| `_BPRatingTrend` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPRatingTrend` | `I_BPRatingTrend` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGTRENDTEXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerRatingTrend',
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
@EndUserText.label: 'Rating Trend of BP - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_BPRatingTrendText

  as select from dd07t
  association [0..1] to I_BPRatingTrend as _BPRatingTrend on $projection.BusinessPartnerRatingTrend = _BPRatingTrend.BusinessPartnerRatingTrend
  association [0..1] to I_Language      as _Language      on $projection.Language                   = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel: { text.element: [ 'BusinessPartnerRatingTrendDesc' ],
                      foreignKey.association: '_BPRatingTrend'
                     }
  key cast ( dd07t.domvalue_l as bp_tendency ) as BusinessPartnerRatingTrend,
      @Semantics.text: true
      
      dd07t.ddtext     as BusinessPartnerRatingTrendDesc,
      
      _BPRatingTrend,
      _Language

}
where
      dd07t.domname  = 'BP_TENDENCY'
  and dd07t.as4local = 'A'
```
