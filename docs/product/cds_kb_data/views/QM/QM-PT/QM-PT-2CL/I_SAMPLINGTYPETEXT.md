---
name: I_SAMPLINGTYPETEXT
description: "Samplingtypetext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLINGTYPETEXT

**Samplingtypetext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `SamplingType` | ✓ | |  | `stichprart` |  |  |
| `SamplingTypeText` |  | |  | `kurztext` |  |  |
| `_SamplingType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingType` | `I_SamplingType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sampling Type - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISMPLGTYPET'
@ObjectModel.representativeKey: 'SamplingType'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SamplingTypeText
   as select from qdsat

   association [1..1] to I_SamplingType as _SamplingType
     on $projection.SamplingType = _SamplingType.SamplingType
     
   association [0..1] to I_Language as _Language
     on $projection.Language = _Language.Language
     
{
   @Semantics.language: true
   key qdsat.sprache      as Language, 
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdsat.stichprart   as SamplingType, 
   
   @Semantics.text: true
   @EndUserText.label: 'Sampling Type Text'
   @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
   qdsat.kurztext         as SamplingTypeText,
       
   /* Associations */
   _SamplingType,
   _Language
   
}
```
