---
name: I_SUPLRACTLIFECYCLESTATUSTEXT
description: "Suplractlifecyclestatustext"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - text-view
  - text
  - status
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTLIFECYCLESTATUSTEXT

**Suplractlifecyclestatustext**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/act_lifecycle_stat_cd preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SuplrActyLifecycleStatusName` |  | |  | `cast(ddtext as /srmsmc/status_descr)` |  |  |
| `_Language` | | ✓ | | | | |
| `_SuplrActLifecycleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SuplrActLifecycleStatus` | `I_SuplrActLifecycleStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Suplr Acty - Text' 
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISUPACTLFSTST'
define view I_SuplrActLifecycleStatusText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SuplrActLifecycleStatus as _SuplrActLifecycleStatus on $projection.SuplrActyLifecycleStatus = _SuplrActLifecycleStatus.SuplrActyLifecycleStatus
{
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/act_lifecycle_stat_cd preserving type) as SuplrActyLifecycleStatus,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/status_descr) as SuplrActyLifecycleStatusName,

  _SuplrActLifecycleStatus, 
  _Language
}
where domname = '/SRMSMC/ACT_LIFECYCLE_STAT_CD' and as4local = 'A'
```
