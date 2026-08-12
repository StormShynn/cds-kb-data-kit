---
name: I_BPRATINGPROCEDUREVH
description: "Bpratingprocedurevh"
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
  - value-help
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDUREVH

**Bpratingprocedurevh**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRatingProcedure` | ✓ | |  |  |  |  |
| `BPRatingIsRequired` |  | |  |  |  |  |
| `BusinessPartnerRatingIsDefault` |  | |  |  |  |  |
| `BPRatingStandardAccessDays` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCVH',
                compiler.compareFilter: true
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingProcedure',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S                           
               },
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'BPRatingProcedureCode',
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
@EndUserText.label: 'Rating Procedure of Business Partner'

define view I_BPRatingProcedureVH 
  as select from I_BPRatingProcedure 
{
      @ObjectModel.text.element: ['BPRatingProcedureDescription']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8   
  key BusinessPartnerRatingProcedure,
      BPRatingIsRequired,
      BusinessPartnerRatingIsDefault,
      BPRatingStandardAccessDays,

      _Text,
      @Semantics.text: true
      _Text[1:Language = $session.system_language ].BPRatingProcedureDescription
}
```
