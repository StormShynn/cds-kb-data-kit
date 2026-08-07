---
name: I_SUPLREVALTMPLLIFECYCLESTST
description: Suplrevaltmpllifecyclestst
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALTMPLLIFECYCLESTST

**Suplrevaltmpllifecyclestst**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalTemplateLifecycleSts` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/sep_lifecycle_stat_cd preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `SuplrEvalTmplLifecycleStsName` |  | |  | `cast(ddtext as /srmsmc/status_descr preserving type)` |
| `_Language` | | ✓ | | |
| `_SuplrEvalTmplLifecycleSts` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SuplrEvalTmplLifecycleSts` | `I_SuplrEvalTmplLifecycleSts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEPLFCSTT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrEvalTemplateLifecycleSts'
@EndUserText.label: 'Lifecycle Sts of Suplr Eval Tmpl - Text'
define view I_SuplrEvalTmplLifecycleStsT as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_SuplrEvalTmplLifecycleSts as _SuplrEvalTmplLifecycleSts on $projection.SuplrEvalTemplateLifecycleSts = _SuplrEvalTmplLifecycleSts.SuplrEvalTemplateLifecycleSts 
{
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/sep_lifecycle_stat_cd preserving type) as SuplrEvalTemplateLifecycleSts,
  
  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/status_descr preserving type) as SuplrEvalTmplLifecycleStsName,

  _SuplrEvalTmplLifecycleSts, 
  _Language
}
where domname = '/SRMSMC/SEP_LIFECYCLE_STAT_CD' and as4local = 'A'
```
