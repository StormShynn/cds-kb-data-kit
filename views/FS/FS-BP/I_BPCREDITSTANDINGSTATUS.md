---
name: I_BPCREDITSTANDINGSTATUS
description: Bpcreditstandingstatus
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
  - status
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITSTANDINGSTATUS

**Bpcreditstandingstatus**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BPCreditStandingStatus` | `cast ( dd07l.domvalue_l as bp_sol_inf )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCrdtStandingStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTANSTS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPCreditStandingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },  
                sapObjectNodeType.name: 'BPCreditStandingStatusCode',
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
@EndUserText.label: 'Credit Standing Status of BP'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCreditStandingStatus 
  as select from dd07l

  association [0..*] to I_BPCrdtStandingStatusText as _Text on $projection.BPCreditStandingStatus = _Text.BPCreditStandingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_sol_inf ) as BPCreditStandingStatus,
      _Text
}
where
      dd07l.domname  = 'BP_SOL_INF'
  and dd07l.as4local = 'A'
```
