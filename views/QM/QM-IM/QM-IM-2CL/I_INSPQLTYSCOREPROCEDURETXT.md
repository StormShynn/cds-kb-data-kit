---
name: I_INSPQLTYSCOREPROCEDURETXT
description: Inspqltyscoreproceduretxt
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPQLTYSCOREPROCEDURETXT

**Inspqltyscoreproceduretxt**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |
| `InspQualityScoreProcedure` | ✓ | |  | `qkzverf` |
| `InspQltyScoreProcedureTxt` |  | |  | `qkz_text` |
| `_InspQualityScoreProcedure` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspQualityScoreProcedure` | `I_InspQualityScoreProcedure` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
    usageType: {
        dataClass:#CUSTOMIZING,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
}
@EndUserText.label: 'Quality Score Procedure - Text'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
define view entity I_InspQltyScoreProcedureTxt
  as select from tq06t
  association [0..1] to I_InspQualityScoreProcedure as _InspQualityScoreProcedure on $projection.InspQualityScoreProcedure = _InspQualityScoreProcedure.InspQualityScoreProcedure
{
      @Semantics.language: true
  key sprache  as Language,
  key qkzverf  as InspQualityScoreProcedure,
      @Semantics.text: true
      @Search : { defaultSearchElement: true,
                      fuzzinessThreshold: 0.8 }
      qkz_text as InspQltyScoreProcedureTxt,
      
      _InspQualityScoreProcedure
}
```
