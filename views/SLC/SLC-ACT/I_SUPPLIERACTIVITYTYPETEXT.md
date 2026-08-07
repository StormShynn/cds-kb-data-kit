---
name: I_SUPPLIERACTIVITYTYPETEXT
description: Supplieractivitytypetext
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
# I_SUPPLIERACTIVITYTYPETEXT

**Supplieractivitytypetext**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrActyType` | ✓ | |  | `act_type` |
| `Language` | ✓ | |  | `langu` |
| `SuplrActyTypeName` |  | |  | `description` |
| `_Language` | | ✓ | | |
| `_SupplierActivityType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SupplierActivityType` | `I_SupplierActivityType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Type of Supplier Activity - Text'
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
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyType'
@AbapCatalog.sqlViewName: 'ISUPLRACTYTYPET'
@Search.searchable: true
define view I_SupplierActivityTypeText as select from /srmsmc/c_acttyt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SupplierActivityType as _SupplierActivityType  on $projection.SuplrActyType = _SupplierActivityType.SuplrActyType
{
  key act_type as SuplrActyType,

  @Semantics.language
  key langu as Language,

  @Semantics.text
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  description as SuplrActyTypeName, 

  _SupplierActivityType,
_Language 
}
```
