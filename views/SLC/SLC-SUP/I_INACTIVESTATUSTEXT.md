---
name: I_INACTIVESTATUSTEXT
description: Inactivestatustext
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - status
  - component:SLC-SUP
  - lob:Other
---
# I_INACTIVESTATUSTEXT

**Inactivestatustext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PurgCatIsInactiveName` |  | |  | `cast( ddtext as /srmsmc/status_descr preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_InactiveStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InactiveStatus` | `I_InactiveStatus` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINACTIVESTATUST'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'PurgCatIsInactive'
@EndUserText.label: 'Inactive Status - Text'
@Search.searchable: true
define view I_InactiveStatusText as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [1..1] to I_InactiveStatus as _InactiveStatus on $projection.PurgCatIsInactive = _InactiveStatus.PurgCatIsInactive
{
    key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/inactive_status preserving type) as PurgCatIsInactive,

    @Semantics.language: true
    key ddlanguage             as Language,
  
    @Search.defaultSearchElement: true
    @Semantics.text: true
    cast( ddtext as /srmsmc/status_descr preserving type) as PurgCatIsInactiveName, 

    _InactiveStatus,
    _Language
    
}
where domname = '/SRMSMC/INACTIVE_STATUS'
  and as4local = 'A'
```
