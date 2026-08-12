---
name: I_BPRATINGPROCEDUREGRADE
description: "Bpratingproceduregrade"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDUREGRADE

**Bpratingproceduregrade**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRatingProcedure` | ✓ | |  | `grade_method` |  |  |
| `BusinessPartnerRatingGrade` | ✓ | |  | `grade` |  |  |
| `BusinessPartnerRatingRanking` |  | |  | `ranking` |  |  |
| `_Text` | | ✓ | | | | |
| `_RatingProcedure` | | ✓ | | | | |
| `_BPRating` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatgProcedureGradeText` | [0..*] |
| `_RatingProcedure` | `I_BPRatingProcedure` | [0..1] |
| `_BPRating` | `I_BusinessPartnerRating` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCGRADE',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingGrade',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BusinessPartnerRatingGradeCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION                
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true // For C1-Release
           }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Procedure Grade of BP'

define view I_BPRatingProcedureGrade
  as select from tpz22

  association [0..*] to I_BPRatgProcedureGradeText   as _Text            on  $projection.BusinessPartnerRatingProcedure = _Text.BusinessPartnerRatingProcedure
                                                                         and $projection.BusinessPartnerRatingGrade     = _Text.BusinessPartnerRatingGrade

  association [0..1] to I_BPRatingProcedure          as _RatingProcedure on  $projection.BusinessPartnerRatingProcedure = _RatingProcedure.BusinessPartnerRatingProcedure

  association [0..*] to I_BusinessPartnerRating      as _BPRating        on  $projection.BusinessPartnerRatingProcedure = _BPRating.BusinessPartnerRatingProcedure
                                                                         and $projection.BusinessPartnerRatingGrade     = _BPRating.BusinessPartnerRatingGrade

{      
      @ObjectModel.foreignKey.association: '_RatingProcedure'
  key tpz22.grade_method as BusinessPartnerRatingProcedure,
      @ObjectModel.text.association: '_Text'
  key tpz22.grade        as BusinessPartnerRatingGrade,

      tpz22.ranking      as BusinessPartnerRatingRanking,

      _BPRating,
      _RatingProcedure,
      _Text
}
```
