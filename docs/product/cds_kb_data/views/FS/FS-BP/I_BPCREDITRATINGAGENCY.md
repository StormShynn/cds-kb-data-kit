---
name: I_BPCREDITRATINGAGENCY
description: "Bpcreditratingagency"
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITRATINGAGENCY

**Bpcreditratingagency**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditRatingAgency` | ✓ | |  | `sol_ins` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCreditRatingAgencyText` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTRATGAGCY',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'CreditRatingAgency',
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
@EndUserText.label: 'Rating Agency of Business Partner'

define view I_BPCreditRatingAgency   
  as select from tp07
   association [0..*] to I_BPCreditRatingAgencyText as _Text               on $projection.CreditRatingAgency = _Text.CreditRatingAgency
   association [0..*] to I_BPCreditWorthiness       as _BPCreditWorthiness on $projection.CreditRatingAgency = _BPCreditWorthiness.CreditRatingAgency
{
      @ObjectModel.text.association: '_Text'
  key tp07.sol_ins as CreditRatingAgency, 

      _Text,
      _BPCreditWorthiness
}
```
