---
name: I_SUPLRACTYTASKCONSTCYSTATUS
description: "Suplractytaskconstcystatus"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
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
# I_SUPLRACTYTASKCONSTCYSTATUS

**Suplractytaskconstcystatus**

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
| `_SuplrActyTaskConstcyStatusT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrActyTaskConstcyStatusT` | `I_SuplrActyTaskConstcyStatusT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Consistency Status of Suplr Acty Task' //same as DDL description
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyTaskConsistencyStatus'
@AbapCatalog.sqlViewName: 'ISUPACTTSKCONSST'
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrActyTaskConstcyStatus as select from dd07l
    association [0..*] to I_SuplrActyTaskConstcyStatusT as _SuplrActyTaskConstcyStatusT on $projection.SuplrActyTaskConsistencyStatus = _SuplrActyTaskConstcyStatusT.SuplrActyTaskConsistencyStatus 
 {
  @ObjectModel.text.association: '_SuplrActyTaskConstcyStatusT'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/3val_consistency_stcd preserving type) as SuplrActyTaskConsistencyStatus,
  _SuplrActyTaskConstcyStatusT
 }
 where domname  = '/SRMSMC/3VAL_CONSISTENCY_STCD' 
   and as4local = 'A'
```
