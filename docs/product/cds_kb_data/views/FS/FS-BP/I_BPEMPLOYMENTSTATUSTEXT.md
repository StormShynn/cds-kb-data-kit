---
name: I_BPEMPLOYMENTSTATUSTEXT
description: "Bpemploymentstatustext"
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
  - status
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENTSTATUSTEXT

**Bpemploymentstatustext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `BPEmploymentStatus` | ✓ | |  | `employment` |  |  |
| `BPEmploymentStatusDescription` |  | |  | `employm_t` |  |  |
| `_BPEmploymentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPEmploymentStatus` | `I_BPEmploymentStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLSTATTEXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPEmploymentStatus',
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
@EndUserText.label: 'Employment Status of BP - Text'

define view I_BPEmploymentStatusText
  as select from tp11t
  association [0..1] to I_BPEmploymentStatus as _BPEmploymentStatus on $projection.BPEmploymentStatus = _BPEmploymentStatus.BPEmploymentStatus
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tp11t.langu      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPEmploymentStatus'
  key tp11t.employment as BPEmploymentStatus,

      @Semantics.text: true
      tp11t.employm_t  as BPEmploymentStatusDescription,

      _BPEmploymentStatus,
      _Language
}
```
