---
name: I_BPRATINGTREND
description: Bpratingtrend
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
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGTREND

**Bpratingtrend**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRatingTrend` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_tendency )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatingTrendText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATINGTREND',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingTrend',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BusinessPartnerRatingTrendCode',
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
             ignorePropagatedAnnotations: true 
           }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Trend of Business Partner'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPRatingTrend
  as select from dd07l

  association [0..*] to I_BPRatingTrendText as _Text on $projection.BusinessPartnerRatingTrend = _Text.BusinessPartnerRatingTrend
{
     @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_tendency ) as BusinessPartnerRatingTrend,
      _Text
}
where
      dd07l.domname  = 'BP_TENDENCY'
  and dd07l.as4local = 'A'
```
