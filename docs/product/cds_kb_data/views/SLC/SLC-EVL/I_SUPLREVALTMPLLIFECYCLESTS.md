---
name: I_SUPLREVALTMPLLIFECYCLESTS
description: "Suplrevaltmpllifecyclests"
app_component: SLC-EVL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
