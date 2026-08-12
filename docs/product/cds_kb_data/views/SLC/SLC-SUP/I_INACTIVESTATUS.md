---
name: I_INACTIVESTATUS
description: "Inactivestatus"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
