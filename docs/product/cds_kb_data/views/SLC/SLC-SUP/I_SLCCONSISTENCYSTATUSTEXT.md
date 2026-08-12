---
name: I_SLCCONSISTENCYSTATUSTEXT
description: "Slcconsistencystatustext"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SLCCONSISTENCYSTATUSTEXT

**Slcconsistencystatustext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCConsistencyStatus` | ✓ | |  | `cast( domvalue_l as /srmsmc/consistency_stcd )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCConsistencyStatusName` |  | |  | `cast(ddtext as /srmsmc/status_descr preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCConsistencyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCConsistencyStatus` | `I_SLCConsistencyStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Consistency Status - Text'
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
@ObjectModel.representativeKey: 'SLCConsistencyStatus'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISLCCONSSTSTEXT'
define view I_SLCConsistencyStatusText
  as select from dd07t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [1..1]    to I_SLCConsistencyStatus as _SLCConsistencyStatus on $projection.SLCConsistencyStatus = _SLCConsistencyStatus.SLCConsistencyStatus
{
      @ObjectModel.text.element:  [ 'SLCConsistencyStatus' ]
  key cast( domvalue_l as /srmsmc/consistency_stcd )                       as SLCConsistencyStatus,
      @Semantics.language: true
  key ddlanguage                                                          as Language,

      @Semantics.text: true
      cast(ddtext as /srmsmc/status_descr preserving type)                                as SLCConsistencyStatusName,


      _SLCConsistencyStatus,
      _Language
}
where
      domname  = '/SRMSMC/3VAL_CONSISTENCY_STCD'
  and as4local = 'A'
```
