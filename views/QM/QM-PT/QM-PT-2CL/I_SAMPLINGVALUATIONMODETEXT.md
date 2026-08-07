---
name: I_SAMPLINGVALUATIONMODETEXT
description: "Samplingvaluationmodetext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
# I_SAMPLINGVALUATIONMODETEXT

**Samplingvaluationmodetext**

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
| `SamplingValuationMode` | ✓ | |  | `bewertmod` |  |  |
| `SamplingValuationModeText` |  | |  | `cast( qdbmt.kurztext as vdm_qbewmod_text preserving type )` |  |  |
| `_SamplingValuationMode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingValuationMode` | `I_SamplingValuationMode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Valuation Mode for Insp Charc - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISMPLGVALUMODET'
@ObjectModel.representativeKey: 'SamplingValuationMode'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SamplingValuationModeText
   as select from qdbmt

   association [1..1] to I_SamplingValuationMode as _SamplingValuationMode
      on $projection.SamplingValuationMode = _SamplingValuationMode.SamplingValuationMode
      
   association [0..1] to I_Language as _Language
      on $projection.Language = _Language.Language
     
{
   @Semantics.language: true
   key qdbmt.sprache    as Language, 
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdbmt.bewertmod  as SamplingValuationMode,
    
   @Semantics.text: true 
   @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
   cast( qdbmt.kurztext as vdm_qbewmod_text preserving type )   as SamplingValuationModeText,
   
   /* Associations */
   _SamplingValuationMode,
   _Language
   
}
```
