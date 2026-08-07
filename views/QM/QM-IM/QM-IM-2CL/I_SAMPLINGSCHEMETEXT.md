---
name: I_SAMPLINGSCHEMETEXT
description: Samplingschemetext
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
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_SAMPLINGSCHEMETEXT

**Samplingschemetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `SamplingScheme` | ✓ | |  | `stprplan` |  |  |
| `SamplingSchemeText` |  | |  | `cast( qdpkt.kurztext as vdm_qstprplan_text preserving type )` |  |  |
| `_SamplingScheme` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingScheme` | `I_SamplingScheme` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sampling Scheme - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.technicalName: 'ISMPLGSCHEMET'
@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ],
    dataCategory: #TEXT,
    modelingPattern: #NONE,
    representativeKey: 'SamplingScheme',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view entity I_SamplingSchemeText
  as select from qdpkt

  association [1..1] to I_SamplingScheme as _SamplingScheme on $projection.SamplingScheme = _SamplingScheme.SamplingScheme
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key qdpkt.sprache                                                as Language,
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key qdpkt.stprplan                                               as SamplingScheme,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
      cast( qdpkt.kurztext as vdm_qstprplan_text preserving type ) as SamplingSchemeText,

      /* Associations */
      _SamplingScheme,
      _Language
}
```
