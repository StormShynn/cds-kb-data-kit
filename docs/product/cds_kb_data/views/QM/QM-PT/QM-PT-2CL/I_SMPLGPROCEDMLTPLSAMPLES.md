---
name: I_SMPLGPROCEDMLTPLSAMPLES
description: "Smplgprocedmltplsamples"
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SMPLGPROCEDMLTPLSAMPLES

**Smplgprocedmltplsamples**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SmplgProcedMltplSamplesText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Usage of Multiple Samples' //same as DDL description
@Analytics.dataCategory:#DIMENSION
@Analytics.technicalName: 'ISMPPRCMLTPSMPL' 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.representativeKey: 'SamplingProcedureMltplSamples'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #C } // as function substring is used but #A and #B must not contain functions
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SmplgProcedMltplSamples as select from dd07l
   
   association [0..*] to I_SmplgProcedMltplSamplesText as _Text 
      on $projection.SamplingProcedureMltplSamples = _Text.SamplingProcedureMltplSamples 
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as qkzumfs preserving type ) as SamplingProcedureMltplSamples

    /* Associations */
    , _Text
}
where domname  = 'QKZUMFS' 
  and as4local = 'A'
```
