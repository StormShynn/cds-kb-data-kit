---
name: I_SUPPLIERACTIVITYPRIORITY
description: "Supplieractivitypriority"
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
  - supplier
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERACTIVITYPRIORITY

**Supplieractivitypriority**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyPriority` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as /srmsmc/act_priority )` |  |  |
| `_SupplierActivityPriorityText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierActivityPriorityText` | `I_SupplierActivityPriorityText` | [0..*] |
| `_Text` | `I_SupplierActivityPriorityText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Priority of Supplier Activity'
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
@ObjectModel.representativeKey: 'SuplrActyPriority'
@AbapCatalog.sqlViewName: 'ISUPLRACTPRIO'
define view I_SupplierActivityPriority  as select from dd07l
   association [0..*] to I_SupplierActivityPriorityText as _SupplierActivityPriorityText on $projection.SuplrActyPriority = _SupplierActivityPriorityText.SuplrActyPriority 
   association [0..*] to I_SupplierActivityPriorityText as _Text on $projection.SuplrActyPriority = _Text.SuplrActyPriority 

{
  @ObjectModel.text.association: '_SupplierActivityPriorityText'
  key cast(substring( domvalue_l, 1, 1 ) as /srmsmc/act_priority )  as SuplrActyPriority, 

  _SupplierActivityPriorityText,
  _Text

}
where domname  = '/SRMSMC/ACT_PRIORITY' 
  and as4local = 'A'
```
