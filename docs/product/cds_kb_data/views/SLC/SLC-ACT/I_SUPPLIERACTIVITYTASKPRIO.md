---
name: I_SUPPLIERACTIVITYTASKPRIO
description: "Supplieractivitytaskprio"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyTaskPriority` | ✓ | |  | `cast(substring( domvalue_l, 1, 1) as /srmsmc/tsk_priority)` |  |  |
| `_SupplierActivityTaskPrioText` | | ✓ | | | | |

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
