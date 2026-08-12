---
name: I_INACTIVESTATUS
description: "Inactivestatus"
app_component: SLC-SUP
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
  - SLC-SUP
  - interface-view
  - status
  - component:SLC-SUP
  - lob:Other
---
# I_INACTIVESTATUS

**Inactivestatus**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
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
| `PurgCatIsInactive` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/inactive_status preserving type)` |  |  |
| `_InactiveStatusText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InactiveStatusText` | `I_InactiveStatusText` | [0..*] |
| `_Text` | `I_InactiveStatusText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'PurgCatIsInactive'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AbapCatalog.sqlViewName: 'IINACTIVESTATUS'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inactive Status'

define view I_InactiveStatus as select from dd07l
   association [0..*] to I_InactiveStatusText as _InactiveStatusText 
         on $projection.PurgCatIsInactive = _InactiveStatusText.PurgCatIsInactive
   association [0..*] to I_InactiveStatusText as _Text 
         on $projection.PurgCatIsInactive = _Text.PurgCatIsInactive
{

  @ObjectModel.text.association: '_InactiveStatusText'
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/inactive_status preserving type) as PurgCatIsInactive,
  _InactiveStatusText,
  _Text
}
where domname  = '/SRMSMC/INACTIVE_STATUS'
  and as4local = 'A'
```
