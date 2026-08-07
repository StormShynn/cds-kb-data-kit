---
name: I_BPOCCUPATIONGROUP
description: Bpoccupationgroup
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
# I_BPOCCUPATIONGROUP

**Bpoccupationgroup**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartnerOccupationGroup` | ✓ | |  | `jobgr` |
| `_Text` | | ✓ | | |
| `_BPEmployment` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPOccupationGroupText` | [0..*] |
| `_BPEmployment` | `I_BPEmployment` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLOCCUP',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerOccupationGroup',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BusinessPartnerOccupation',
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
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Occupation Group of Business Partner'

define view I_BPOccupationGroup
  as select from tb028
  association [0..*] to I_BPOccupationGroupText as _Text         on $projection.BusinessPartnerOccupationGroup = _Text.BusinessPartnerOccupationGroup
  association [0..*] to I_BPEmployment          as _BPEmployment on $projection.BusinessPartnerOccupationGroup = _BPEmployment.BusinessPartnerOccupationGroup
{
      @ObjectModel.text.association: '_Text'
  key tb028.jobgr   as BusinessPartnerOccupationGroup,

     _Text,
     _BPEmployment
}
```
