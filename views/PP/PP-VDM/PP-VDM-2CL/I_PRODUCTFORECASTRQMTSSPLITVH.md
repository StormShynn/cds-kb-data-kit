---
name: I_PRODUCTFORECASTRQMTSSPLITVH
description: "Productforecastrqmtssplitvh"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - product
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTFORECASTRQMTSSPLITVH

**Productforecastrqmtssplitvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `ForecastPeriodType` | ✓ | |  |  |  |  |
| `ProdFcstRequirementsSplitCode` | ✓ | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_ForecastPeriodType` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IPRFCSTRQMSPLTVH'
@ObjectModel.representativeKey: 'ProdFcstRequirementsSplitCode'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Product Forecast Requirements Split'

define view entity I_ProductForecastRqmtsSplitVH 
    as select from I_ProdForecastRequirementsSplt
{
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key Plant,
      @ObjectModel.foreignKey.association: '_ForecastPeriodType'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key ForecastPeriodType,  
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key ProdFcstRequirementsSplitCode,
  
      // Associations
      @Consumption.hidden: true
      _Plant,
      _ForecastPeriodType
};
```
