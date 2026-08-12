---
name: I_FISCALPERIODVALUELIST
description: "Fiscalperiodvaluelist"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCALPERIODVALUELIST

**Fiscalperiodvaluelist**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalPeriod` | ✓ | |  |  |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Period Value List'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalPeriod'
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFISCPERDVL'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@Analytics.internalName:#LOCAL 
                                     
define view entity I_FiscalPeriodValueList as select from I_FiscalYearPeriod as I_FiscalYearPeriod
{
key I_FiscalYearPeriod.FiscalPeriod

} group by I_FiscalYearPeriod.FiscalPeriod
union select from I_FiscalYearPeriod as I_FiscalYearPeriod
{
  key cast( '000' as fins_fiscalperiod preserving type ) as FiscalPeriod
}
```
