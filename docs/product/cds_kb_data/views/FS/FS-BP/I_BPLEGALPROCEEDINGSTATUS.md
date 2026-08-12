---
name: I_BPLEGALPROCEEDINGSTATUS
description: "Bplegalproceedingstatus"
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
  - status
  - component:FS-BP
  - lob:Other
---
# I_BPLEGALPROCEEDINGSTATUS

**Bplegalproceedingstatus**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPLegalProceedingStatus` | ✓ | |  | `lgl_proc` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPCreditWorthiness` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPLegalProceedingStsText` | [0..*] |
| `_BPCreditWorthiness` | `I_BPCreditWorthiness` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLPROCSTS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPLegalProceedingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BPLegalProceedingStatusCode',
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
@EndUserText.label: 'Legal Proceedings Status of BP'

define view I_BPLegalProceedingStatus
  as select from fsbpcc_lgl_proc
  association [0..*] to I_BPLegalProceedingStsText as _Text               on $projection.BPLegalProceedingStatus = _Text.BPLegalProceedingStatus
  association [0..*] to I_BPCreditWorthiness       as _BPCreditWorthiness on $projection.BPLegalProceedingStatus = _BPCreditWorthiness.BPLegalProceedingStatus

{
      @ObjectModel.text.association: '_Text'
  key fsbpcc_lgl_proc.lgl_proc as BPLegalProceedingStatus,
  
      _Text,
      _BPCreditWorthiness
}
```
