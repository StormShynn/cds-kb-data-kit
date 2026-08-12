---
name: I_SMPLGPROCEDMLTPLSAMPLESTEXT
description: "Smplgprocedmltplsamplestext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SMPLGPROCEDMLTPLSAMPLESTEXT

**Smplgprocedmltplsamplestext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingProcedureMltplSamples` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as qkzumfs preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SmplgProcedureMltplSamplesText` |  | |  | `cast( ddtext as vdm_qkzumfs_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SmplgProcedMltplSamples` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SmplgProcedMltplSamples` | `I_SmplgProcedMltplSamples` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Usage of Multiple Samples - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISMPPRCMLTPSMPLT'
@ObjectModel.representativeKey: 'SamplingProcedureMltplSamples'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #C } // as function substring is used but #A and #B must not contain functions
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SmplgProcedMltplSamplesText as select from dd07t

   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   
   association [1..1] to I_SmplgProcedMltplSamples as _SmplgProcedMltplSamples 
      on $projection.SamplingProcedureMltplSamples = _SmplgProcedMltplSamples.SamplingProcedureMltplSamples

{
    key cast ( substring( domvalue_l, 1, 1 ) as qkzumfs preserving type ) as SamplingProcedureMltplSamples,
    @Semantics.language: true
    key ddlanguage                                                        as Language,

    @Semantics.text: true
    cast( ddtext as vdm_qkzumfs_text preserving type )                    as SmplgProcedureMltplSamplesText, 

    /* Associations */
    _SmplgProcedMltplSamples,
    _Language 
}
where domname = 'QKZUMFS' and as4local = 'A'
```
