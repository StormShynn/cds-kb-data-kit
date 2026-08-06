---
name: I_SUPPLIERACTIVITYTASKPRIO
description: Supplieractivitytaskprio
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
  - supplier
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERACTIVITYTASKPRIO

**Supplieractivitytaskprio**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrActyTaskPriority` | `cast(substring( domvalue_l, 1, 1) as /srmsmc/tsk_priority)` |
| `_SupplierActivityTaskPrioText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierActivityTaskPrioText` | `I_SupplierActivityTaskPrioText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLACTTSKPRIO'
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
@ObjectModel.representativeKey: 'SuplrActyTaskPriority'
@EndUserText.label: 'Priority of Supplier Activity Task'
@Metadata.ignorePropagatedAnnotations: true

define view I_SupplierActivityTaskPrio  as select from dd07l
   association [0..*] to I_SupplierActivityTaskPrioText as _SupplierActivityTaskPrioText on $projection.SuplrActyTaskPriority = _SupplierActivityTaskPrioText.SuplrActyTaskPriority 
{
  @ObjectModel.text.association: '_SupplierActivityTaskPrioText'
  key  cast(substring( domvalue_l, 1, 1) as /srmsmc/tsk_priority)  as SuplrActyTaskPriority,

  _SupplierActivityTaskPrioText

}
where domname  = '/SRMSMC/TSK_PRIORITY' 
  and as4local = 'A'
```
