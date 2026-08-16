---
name: I_BPRATINGPROCEDUREGRADEVH
description: "Bpratingproceduregradevh"
semantic_vi: "Chỉ ra các mức độ và thứ hạng xếp hạng đối tác kinh doanh trong ứng dụng FS-BP."
keywords:
  - "business partner rating"
  - "procedure grade"
  - "ranking"
  - "fs-bp"
  - "component"
  - "lob other"
  - "interface view"
  - "value help"
semantic_en: "Exposes business partner rating procedure grades and rankings for use in FS-BP component applications."
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
  - value-help
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDUREGRADEVH

**Bpratingproceduregradevh**

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
| `BusinessPartnerRatingProcedure` | ✓ | |  |  |  |  |
| `BusinessPartnerRatingGrade` | ✓ | |  |  |  |  |
| `BusinessPartnerRatingRanking` |  | |  |  |  |  |
| `_RatingProcedure` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RatingProcedure` | `I_BPRatingProcedure` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGGRADEVH',
                compiler.compareFilter: true
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingGrade',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S                           
               },
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'BusinessPartnerRatingGradeCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #VALUE_HELP_PROVIDER                           
               }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions:true
           }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }                         
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@Search.searchable: true
@EndUserText.label: 'Rating Procedure Grade of BP'

define view I_BPRatingProcedureGradeVH   
  as select from I_BPRatingProcedureGrade
  association [0..1] to I_BPRatingProcedure          as _RatingProcedure on  $projection.BusinessPartnerRatingProcedure = _RatingProcedure.BusinessPartnerRatingProcedure 
{
      @ObjectModel.text.element: [ 'BusinessPartnerRatingGradeDesc' ]
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_RatingProcedure'
  key BusinessPartnerRatingProcedure,
  key BusinessPartnerRatingGrade,
      BusinessPartnerRatingRanking,

      _RatingProcedure,
      _Text,
      @Semantics.text: true
      _Text[1:Language = $session.system_language ].BusinessPartnerRatingGradeDesc
}
```
