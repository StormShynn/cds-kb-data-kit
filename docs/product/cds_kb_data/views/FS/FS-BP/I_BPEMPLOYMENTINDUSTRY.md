---
name: I_BPEMPLOYMENTINDUSTRY
description: "Bpemploymentindustry"
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
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENTINDUSTRY

**Bpemploymentindustry**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusPartEmplrIndstryCode` | ✓ | |  | `ind_sector` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPEmployment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPEmploymentIndustryText` | [0..*] |
| `_BPEmployment` | `I_BPEmployment` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLINDUSTRY',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusPartEmplrIndstryCode',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BusinessPartnerIndustrySector',
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
@EndUserText.label: 'Employment Industry of Business Partner'

define view I_BPEmploymentIndustry
  as select from tb038a 
     inner join tb038 on tb038a.istype = tb038.istype and tb038.istdef = 'X'
  association [0..*] to I_BPEmploymentIndustryText as _Text         on $projection.BusPartEmplrIndstryCode = _Text.BusPartEmplrIndstryCode
  association [0..*] to I_BPEmployment             as _BPEmployment on $projection.BusPartEmplrIndstryCode = _BPEmployment.BusPartEmplrIndstryCode
{
      @ObjectModel.text.association: '_Text'
  key tb038a.ind_sector   as BusPartEmplrIndstryCode,

     _Text,
     _BPEmployment
}
```
