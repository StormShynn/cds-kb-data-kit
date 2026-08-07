---
name: I_BPEMPLOYMENTSTATUS
description: Bpemploymentstatus
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
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENTSTATUS

**Bpemploymentstatus**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPEmploymentStatus` | ✓ | |  | `employment` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPEmployment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPEmploymentStatusText` | [0..*] |
| `_BPEmployment` | `I_BPEmployment` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLSTAT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPEmploymentStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BPEmploymentStatusCode',
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
@EndUserText.label: 'Employment Status of Business Partner'

define view I_BPEmploymentStatus
  as select from tp11
  association [0..*] to I_BPEmploymentStatusText as _Text         on $projection.BPEmploymentStatus = _Text.BPEmploymentStatus
  association [0..*] to I_BPEmployment           as _BPEmployment on $projection.BPEmploymentStatus = _BPEmployment.BPEmploymentStatus
{
      @ObjectModel.text.association: '_Text'
  key tp11.employment as BPEmploymentStatus,

     _Text,
     _BPEmployment
}
```
