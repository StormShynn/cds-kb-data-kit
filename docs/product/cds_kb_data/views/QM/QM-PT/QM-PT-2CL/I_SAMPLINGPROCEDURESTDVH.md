---
name: I_SAMPLINGPROCEDURESTDVH
description: "Samplingprocedurestdvh"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - value-help
  - standard-value-help
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLINGPROCEDURESTDVH

**Samplingprocedurestdvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingProcedure` | ✓ | |  |  |  |  |
| `SamplingProcedureText` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:003:GFBfhyK17jU{s1hmKjiD7m
@AbapCatalog.sqlViewName: 'ISP__VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sampling Procedure'
@Search.searchable: true
@Consumption.ranked: true

define view I_SamplingProcedureStdVH as select from I_SamplingProcedureValueHelp {
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key SamplingProcedure,
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  I_SamplingProcedureValueHelp.SamplingProcedureText
}
```
