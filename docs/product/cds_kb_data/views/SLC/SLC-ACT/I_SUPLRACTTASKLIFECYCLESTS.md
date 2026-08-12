---
name: I_SUPLRACTTASKLIFECYCLESTS
description: "Suplracttasklifecyclests"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTTASKLIFECYCLESTS

**Suplracttasklifecyclests**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyTaskLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/tsk_lifecycle_stat_cd preserving type)` |  |  |
| `_SuplrActTaskLifecycleStsText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrActTaskLifecycleStsText` | `I_SuplrActTaskLifecycleStsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Suplr Acty Task'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyTaskLifecycleStatus'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.sqlViewName: 'ISUPACTTSKLFS'
define view I_SuplrActTaskLifecycleSts as select from dd07l
  association [0..*] to I_SuplrActTaskLifecycleStsText as _SuplrActTaskLifecycleStsText on $projection.SuplrActyTaskLifecycleStatus = _SuplrActTaskLifecycleStsText.SuplrActyTaskLifecycleStatus 
{
  @ObjectModel.text.association: '_SuplrActTaskLifecycleStsText'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/tsk_lifecycle_stat_cd preserving type) as SuplrActyTaskLifecycleStatus, 
  _SuplrActTaskLifecycleStsText
}
where domname  = '/SRMSMC/TSK_LIFECYCLE_STAT_CD' 
  and as4local = 'A'
```
