---
name: I_BPLEGALPROCEEDINGSTSTEXT
description: Bplegalproceedingststext
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
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPLEGALPROCEEDINGSTSTEXT

**Bplegalproceedingststext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `fsbpcc_lgl_proct.langu` |
| key `BPLegalProceedingStatus` | `fsbpcc_lgl_proct.lgl_proc` |
| `BPLegalProceedingStatusDesc` | `fsbpcc_lgl_proct.lgl_proc_t` |
| `_BPLegalProceedingStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPLegalProceedingStatus` | `I_BPLegalProceedingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLPROCSTSTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPLegalProceedingStatus',
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
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Legal Proceedings Status of BP - Text'

define view I_BPLegalProceedingStsText
  as select from fsbpcc_lgl_proct
  association [0..1] to I_BPLegalProceedingStatus as _BPLegalProceedingStatus on $projection.BPLegalProceedingStatus = _BPLegalProceedingStatus.BPLegalProceedingStatus
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key fsbpcc_lgl_proct.langu      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPLegalProceedingStatus'
  key fsbpcc_lgl_proct.lgl_proc   as BPLegalProceedingStatus,

      @Semantics.text: true
      fsbpcc_lgl_proct.lgl_proc_t as BPLegalProceedingStatusDesc,

      _BPLegalProceedingStatus,
      _Language
}
```
