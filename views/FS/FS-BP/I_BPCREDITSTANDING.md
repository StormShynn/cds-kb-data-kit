---
name: I_BPCREDITSTANDING
description: Bpcreditstanding
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
# I_BPCREDITSTANDING

**Bpcreditstanding**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusPartCreditStanding` | `cast ( dd07l.domvalue_l as bp_solvncy)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCreditStandingText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCREDSTANDING',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusPartCreditStanding',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BPCreditStandingCode',
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
@EndUserText.label: 'Credit Standing of Business Partner'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCreditStanding
  as select from dd07l
  association [0..*] to I_BPCreditStandingText as _Text on $projection.BusPartCreditStanding = _Text.BusPartCreditStanding

{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_solvncy) as BusPartCreditStanding,
      _Text
}
where
      dd07l.domname  = 'BP_SOLVNCY'
  and dd07l.as4local = 'A'
```
