---
name: I_SUPPLIERACTIVITYPRIORITYTEXT
description: "Supplieractivityprioritytext"
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
  - supplier
  - text
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERACTIVITYPRIORITYTEXT

**Supplieractivityprioritytext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SuplrActyPriorityName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_SupplierActivityPriority` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SupplierActivityPriority` | `I_SupplierActivityPriority` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Priority of Supplier Activity - Text'
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
@ObjectModel.representativeKey: 'SuplrActyPriority'
@AbapCatalog.sqlViewName: 'ISUPLRACTYPRIOT'
define view I_SupplierActivityPriorityText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SupplierActivityPriority as _SupplierActivityPriority on $projection.SuplrActyPriority = _SupplierActivityPriority.SuplrActyPriority
{
  key cast(substring( domvalue_l, 1, 1 ) as /srmsmc/act_priority )  as SuplrActyPriority,

  @Semantics.language
  key ddlanguage as Language,

  @Semantics.text
  ddtext as SuplrActyPriorityName, 
  
  _SupplierActivityPriority, 
  _Language 
}
where domname = '/SRMSMC/ACT_PRIORITY' and as4local = 'A'
```
