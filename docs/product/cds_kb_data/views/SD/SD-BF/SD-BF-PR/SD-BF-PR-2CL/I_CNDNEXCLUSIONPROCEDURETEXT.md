---
name: I_CNDNEXCLUSIONPROCEDURETEXT
description: "Cndnexclusionproceduretext"
app_component: SD-BF-PR-2CL
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
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CNDNEXCLUSIONPROCEDURETEXT

**Cndnexclusionproceduretext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ConditionExclusionProcedure` | ✓ | |  | `cast( dd07t.domvalue_l as kauvf )` |  |  |
| `CndnExclusionProcedureText` |  | |  | `cast( dd07t.ddtext as ddtext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ConditionExclusionProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXCLNPROCT'
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@EndUserText.label: 'Condition Exclusion Procedure - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionExclusionProcedure'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CndnExclusionProcedureText
  as select from dd07t 

    association to parent I_ConditionExclusionProcedure as _ConditionExclusionProcedure
    on $projection.ConditionExclusionProcedure = _ConditionExclusionProcedure.ConditionExclusionProcedure
    
     association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 

  key cast( dd07t.domvalue_l as kauvf ) as ConditionExclusionProcedure,
      @Semantics.text: true
      cast( dd07t.ddtext as ddtext preserving type ) as CndnExclusionProcedureText,
      _ConditionExclusionProcedure,
      _Language
} 
where dd07t.domname  = 'KAUVF'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
