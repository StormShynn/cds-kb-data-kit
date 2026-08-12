---
name: I_SUPLRACTYTASKCONSTCYSTATUST
description: "Suplractytaskconstcystatust"
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
  - status
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTYTASKCONSTCYSTATUST

**Suplractytaskconstcystatust**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyTaskConsistencyStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/3val_consistency_stcd preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SuplrActyTskConsistencyStsName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_SuplrActyTaskConstcyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SuplrActyTaskConstcyStatus` | `I_SuplrActyTaskConstcyStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Consistency Sts of Suplr Acty Tsk - Text' //same as DDL description
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyTaskConsistencyStatus'
@AbapCatalog.sqlViewName: 'ISUPACTTSKCONSTT'
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrActyTaskConstcyStatusT as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SuplrActyTaskConstcyStatus as _SuplrActyTaskConstcyStatus 
     on $projection.SuplrActyTaskConsistencyStatus = _SuplrActyTaskConstcyStatus.SuplrActyTaskConsistencyStatus
{
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/3val_consistency_stcd preserving type) as SuplrActyTaskConsistencyStatus,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  ddtext as SuplrActyTskConsistencyStsName, 

  _SuplrActyTaskConstcyStatus, 
  _Language 
}
where domname = '/SRMSMC/3VAL_CONSISTENCY_STCD' and as4local = 'A'
```
