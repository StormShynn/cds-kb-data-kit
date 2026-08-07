---
name: I_SLCCONSISTENCYSTATUS
description: "Slcconsistencystatus"
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
  - status
  - component:SLC-SUP
  - lob:Other
---
# I_SLCCONSISTENCYSTATUS

**Slcconsistencystatus**

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
| `_SLCConsistencyStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCConsistencyStatusText` | `I_SLCConsistencyStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Consistency Status'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCConsistencyStatus'
@AbapCatalog.sqlViewName: 'ISLCCONSSTS'
define view I_SLCConsistencyStatus
  as select from dd07l
  association [0..*] to I_SLCConsistencyStatusText as _SLCConsistencyStatusText on $projection.SLCConsistencyStatus = _SLCConsistencyStatusText.SLCConsistencyStatus
{
      @ObjectModel.text.association: '_SLCConsistencyStatusText'
  key  cast( domvalue_l as /srmsmc/consistency_stcd ) as SLCConsistencyStatus,

      /* Associations */
      _SLCConsistencyStatusText
}
where
      domname  = '/SRMSMC/3VAL_CONSISTENCY_STCD'
  and as4local = 'A'
```
