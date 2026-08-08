---
name: I_BPCREDITWORTHINESSRATING
description: "Bpcreditworthinessrating"
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITWORTHINESSRATING

**Bpcreditworthinessrating**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPCreditStandingRating` | ✓ | |  | `rating` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCrdtWrthnssRatingText` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTNDGRATG',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPCreditStandingRating',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                //sapObjectNodeType.name: '',
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
@EndUserText.label: 'Credit Worthiness Rating of BP'

define view I_BPCreditWorthinessRating 
as select from tp06 

  association [0..*] to I_BPCrdtWrthnssRatingText as _Text     on $projection.BPCreditStandingRating = _Text.BPCreditStandingRating
  association [0..*] to I_BPCreditWorthiness as _BPCreditWorthiness  on $projection.BPCreditStandingRating = _BPCreditWorthiness.BPCreditStandingRating
{
      @ObjectModel.text.association: '_Text'
    key tp06.rating as BPCreditStandingRating,

    _Text,
    _BPCreditWorthiness

}
```
