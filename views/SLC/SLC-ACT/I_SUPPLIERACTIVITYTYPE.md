---
name: I_SUPPLIERACTIVITYTYPE
description: Supplieractivitytype
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
# I_SUPPLIERACTIVITYTYPE

**Supplieractivitytype**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrActyType` | `act_type` |
| `_SupplierActivityTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierActivityTypeText` | `I_SupplierActivityTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Type of Supplier Activity'
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
@ObjectModel.representativeKey: 'SuplrActyType'
@AbapCatalog.sqlViewName: 'ISUPLRACTYTYPE'
define view I_SupplierActivityType as select from /srmsmc/c_acttyp
  association [0..*] to I_SupplierActivityTypeText as _SupplierActivityTypeText   on $projection.SuplrActyType = _SupplierActivityTypeText.SuplrActyType
{
  @ObjectModel.text.association: '_SupplierActivityTypeText'
  key  act_type as SuplrActyType,
    _SupplierActivityTypeText
}
where obsolete  <> 'X'
```
