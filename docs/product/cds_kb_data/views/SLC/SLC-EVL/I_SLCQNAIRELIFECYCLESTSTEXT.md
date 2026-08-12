---
name: I_SLCQNAIRELIFECYCLESTSTEXT
description: "Slcqnairelifecycleststext"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - text-view
  - text
  - component:SLC-EVL
  - lob:Other
---
# I_SLCQNAIRELIFECYCLESTSTEXT

**Slcqnairelifecycleststext**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCQnaireLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/qnr_lifecycle_stat_cd preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCQnaireLifecycleStatusName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCQnaireLifecycleSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCQnaireLifecycleSts` | `I_SLCQnaireLifecycleSts` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Questionnaire - Text'
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
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SLCQnaireLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISLCQNAIRLFST'
@Search.searchable: true

define view I_SLCQnaireLifecycleStsText as select from dd07t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_SLCQnaireLifecycleSts as _SLCQnaireLifecycleSts on $projection.SLCQnaireLifecycleStatus = _SLCQnaireLifecycleSts.SLCQnaireLifecycleStatus
{
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/qnr_lifecycle_stat_cd preserving type) as SLCQnaireLifecycleStatus,

  @Semantics.language: true
  key ddlanguage as Language,

  @Search.defaultSearchElement: true
  @Semantics.text: true
  ddtext         as SLCQnaireLifecycleStatusName,

  /* Associations */
  _SLCQnaireLifecycleSts,
  _Language

} where domname  = '/SRMSMC/QNR_LIFECYCLE_STAT_CD' and as4local = 'A'
```
