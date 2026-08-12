---
name: I_SUPLREVALTMPLLIFECYCLESTS
description: "Suplrevaltmpllifecyclests"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SUPLREVALTMPLLIFECYCLESTS

**Suplrevaltmpllifecyclests**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalTemplateLifecycleSts` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/sep_lifecycle_stat_cd preserving type )` |  |  |
| `_SuplrEvalTmplLifecycleStsT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrEvalTmplLifecycleStsT` | `I_SuplrEvalTmplLifecycleStsT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Suplr Eval Template'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrEvalTemplateLifecycleSts'
@AbapCatalog.sqlViewName: 'ISEPLFCST'
define view I_SuplrEvalTmplLifecycleSts as select from dd07l
  association [0..*] to I_SuplrEvalTmplLifecycleStsT as _SuplrEvalTmplLifecycleStsT on $projection.SuplrEvalTemplateLifecycleSts = _SuplrEvalTmplLifecycleStsT.SuplrEvalTemplateLifecycleSts 
{
    
  @ObjectModel.text.association: '_SuplrEvalTmplLifecycleStsT'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/sep_lifecycle_stat_cd preserving type ) as SuplrEvalTemplateLifecycleSts, 
  _SuplrEvalTmplLifecycleStsT
}
where domname  = '/SRMSMC/SEP_LIFECYCLE_STAT_CD' 
  and as4local = 'A'
```
