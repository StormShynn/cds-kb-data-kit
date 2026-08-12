---
name: I_INSPQLTYSCOREPROCEDURETXT
description: "Inspqltyscoreproceduretxt"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspQualityScoreProcedure` | ✓ | |  | `qkzverf` |  |  |
| `InspQltyScoreProcedureTxt` |  | |  | `qkz_text` |  |  |
| `_InspQualityScoreProcedure` | | ✓ | | | | |

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
