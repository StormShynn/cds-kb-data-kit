---
name: I_SAMPLEDETERMINATIONRULETEXT
description: "Sampledeterminationruletext"
app_component: QM-PT-2CL
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
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLEDETERMINATIONRULETEXT

**Sampledeterminationruletext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `SampleDeterminationRule` | ✓ | |  | `fbkey` |  |  |
| `SampleDeterminationRuleTxt` |  | |  | `cast( qdfbt.kurztext as vdm_qfbkey_text preserving type )` |  |  |
| `_SampleDeterminationRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SampleDeterminationRule` | `I_SampleDeterminationRule` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sample Determination Rule - Text' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISMPLDETNRULET'
@ObjectModel.representativeKey: 'SampleDeterminationRule'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SampleDeterminationRuleText
   as select from qdfbt

   association [1..1] to I_SampleDeterminationRule as _SampleDeterminationRule
     on $projection.SampleDeterminationRule = _SampleDeterminationRule.SampleDeterminationRule
     
   association [0..1] to I_Language as _Language
     on $projection.Language = _Language.Language
     
{
   @Semantics.language: true
   key qdfbt.sprache    as Language, 
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdfbt.fbkey      as SampleDeterminationRule, 
   
   @Semantics.text: true
   @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
   cast( qdfbt.kurztext as vdm_qfbkey_text preserving type )  as SampleDeterminationRuleTxt,
   
   /* Associations */
   _SampleDeterminationRule,
   _Language
   
}
```
