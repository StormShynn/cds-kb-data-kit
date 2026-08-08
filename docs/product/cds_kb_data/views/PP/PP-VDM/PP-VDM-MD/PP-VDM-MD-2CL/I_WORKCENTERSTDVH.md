---
name: I_WORKCENTERSTDVH
description: "Work CenterSTDVH"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
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
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERSTDVH

**Work CenterSTDVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  |  |  |
| `WorkCenterTypeCode` | ✓ | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:E6ExH29r7kU{rc1Uxl{1wW
@AbapCatalog.sqlViewName: 'IWC__VH2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'WorkCenterInternalID'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Work Center'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterStdVH as select from I_WorkCenter {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key WorkCenterInternalID,
  @ObjectModel.foreignKey.association: '_WorkCenterType'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  key WorkCenterTypeCode,

  _Text,
  @Consumption.hidden: true
  Plant,
  @Consumption.hidden: true  
  WorkCenter,
  @Consumption.hidden: true
  WorkCenterCategoryCode,

  @Consumption.hidden: true
  _WorkCenterType
}
```
