---
name: I_PRODUCTIONLINESTDVH
description: "Productionlinestdvh"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - value-help
  - standard-value-help
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONLINESTDVH

**Productionlinestdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionLine` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `_WorkCenterTextBySemanticKey` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IPL__VH'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionLine'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Production Line'
define view entity I_ProductionLineStdVH as select from I_ProductionLine {
  @ObjectModel.text.association: '_WorkCenterTextBySemanticKey'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key ProductionLine,
  @ObjectModel.foreignKey.association: '_Plant'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key Plant,

  // Associations
  _WorkCenterTextBySemanticKey,
  @Consumption.hidden: true
  _Plant
}
```
