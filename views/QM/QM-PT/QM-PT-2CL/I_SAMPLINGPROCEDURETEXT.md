---
name: I_SAMPLINGPROCEDURETEXT
description: Samplingproceduretext
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
# I_SAMPLINGPROCEDURETEXT

**Samplingproceduretext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SamplingProcedure` | ✓ | |  | `stichprver` |
| `Language` | ✓ | |  | `sprache` |
| `SamplingProcedureText` |  | |  | `kurztext` |
| `_SamplingProcedure` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingProcedure` | `I_SamplingProcedure` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ISMPLNGPRCDRT',
    preserveKey: true,
    compiler.compareFilter: true,
    buffering: { status: #ACTIVE, type: #FULL }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sampling Procedure - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory:  #M,
        serviceQuality: #B
    },
    dataCategory: #TEXT,
    representativeKey: 'SamplingProcedure'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_SamplingProcedureText as select from qdsvt

  association [1..1] to I_SamplingProcedure as _SamplingProcedure
     on $projection.SamplingProcedure = _SamplingProcedure.SamplingProcedure
     
  association [0..1] to I_Language as _Language
     on $projection.Language = _Language.Language
     
{
   key qdsvt.stichprver as SamplingProcedure,
   @Semantics.language: true
   key qdsvt.sprache as Language,   
   
   @Semantics.text: true
   @EndUserText.label: 'Sampling Procedure Text'
   qdsvt.kurztext as SamplingProcedureText,

   /* Associations */
   _SamplingProcedure,
   _Language
      
}
```
