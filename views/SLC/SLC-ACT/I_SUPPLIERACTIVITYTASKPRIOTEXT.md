---
name: I_SUPPLIERACTIVITYTASKPRIOTEXT
description: Supplieractivitytaskpriotext
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
  - text-view
  - supplier
  - text
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERACTIVITYTASKPRIOTEXT

**Supplieractivitytaskpriotext**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrActyTaskPriority` | `cast(substring( domvalue_l, 1, 1 ) as /srmsmc/tsk_priority)` |
| key `Language` | `ddlanguage` |
| `SuplrActyTaskPriorityName` | `ddtext` |
| `_Language` | *Association* |
| `_SupplierActivityTaskPrio` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SupplierActivityTaskPrio` | `I_SupplierActivityTaskPrio` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Priority of Supplier Activity Task - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyTaskPriority'
@AbapCatalog.sqlViewName: 'ISUPLACTTSKPRIOT'
@Metadata.ignorePropagatedAnnotations: true

define view I_SupplierActivityTaskPrioText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SupplierActivityTaskPrio as _SupplierActivityTaskPrio on $projection.SuplrActyTaskPriority = _SupplierActivityTaskPrio.SuplrActyTaskPriority
{
  key cast(substring( domvalue_l, 1, 1 ) as /srmsmc/tsk_priority) as SuplrActyTaskPriority,

  @Semantics.language
  key ddlanguage as Language,

  @Semantics.text
  ddtext as SuplrActyTaskPriorityName, 
  
  _SupplierActivityTaskPrio, 
  _Language 
}
where domname = '/SRMSMC/TSK_PRIORITY' and as4local = 'A'
```
