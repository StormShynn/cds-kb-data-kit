---
name: I_BPEMPLOYMENTINDUSTRYTEXT
description: "Bpemploymentindustrytext"
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
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENTINDUSTRYTEXT

**Bpemploymentindustrytext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BusPartEmplrIndstryCode` | ✓ | |  | `ind_sector` |  |  |
| `BPEmploymentIndustryDesc` |  | |  | `text` |  |  |
| `BPEmploymentIndustryShortDesc` |  | |  | `text_short` |  |  |
| `_BPEmploymentIndustry` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPEmploymentIndustry` | `I_BPEmploymentIndustry` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLINDUSTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusPartEmplrIndstryCode',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Employment Industry of BP - Text'

define view I_BPEmploymentIndustryText
  as select from tb038b
     inner join tb038 on tb038b.istype = tb038.istype and tb038.istdef = 'X'
  association [0..1] to I_BPEmploymentIndustry as _BPEmploymentIndustry on $projection.BusPartEmplrIndstryCode = _BPEmploymentIndustry.BusPartEmplrIndstryCode
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tb038b.spras      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPEmploymentIndustry'
  key tb038b.ind_sector as BusPartEmplrIndstryCode,

      @Semantics.text: true
      tb038b.text       as BPEmploymentIndustryDesc,
      
      @Semantics.text: true
      tb038b.text_short as BPEmploymentIndustryShortDesc,
      
      _BPEmploymentIndustry,
      _Language
}
```
