---
name: I_BPRATGPROCEDUREGRADETEXT
description: "Bpratgproceduregradetext"
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
  - component:FS-BP
  - lob:Other
---
# I_BPRATGPROCEDUREGRADETEXT

**Bpratgproceduregradetext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessPartnerRatingProcedure` | ✓ | |  | `grade_method` |  |  |
| `BusinessPartnerRatingGrade` | ✓ | |  | `grade` |  |  |
| `BusinessPartnerRatingGradeDesc` |  | |  | `text` |  |  |
| `_BPRatingProcedure` | | ✓ | | | | |
| `_BPRatingProcedureGrade` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPRatingProcedure` | `I_BPRatingProcedure` | [0..1] |
| `_BPRatingProcedureGrade` | `I_BPRatingProcedureGrade` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IPROCEDGRADETXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerRatingGrade',
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
@EndUserText.label: 'Rating Procedure Grade of BP - Text'

define view I_BPRatgProcedureGradeText 
  as select from tpz22t
  association [0..1] to I_BPRatingProcedure      as _BPRatingProcedure      on  $projection.BusinessPartnerRatingProcedure = _BPRatingProcedure.BusinessPartnerRatingProcedure 
  association [0..1] to I_BPRatingProcedureGrade as _BPRatingProcedureGrade on  $projection.BusinessPartnerRatingGrade     = _BPRatingProcedureGrade.BusinessPartnerRatingGrade
                                                                            and $projection.BusinessPartnerRatingProcedure = _BPRatingProcedureGrade.BusinessPartnerRatingProcedure
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tpz22t.spras             as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPRatingProcedure'
  key tpz22t.grade_method      as BusinessPartnerRatingProcedure,

      @ObjectModel.foreignKey.association: '_BPRatingProcedureGrade'
  key tpz22t.grade             as BusinessPartnerRatingGrade,
      
      @Semantics.text: true
      tpz22t.text              as BusinessPartnerRatingGradeDesc,

      _BPRatingProcedure,
      _BPRatingProcedureGrade,
      _Language
}
```
