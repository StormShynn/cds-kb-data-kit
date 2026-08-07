---
name: I_WRKCTRBYSEMANTICKEYSTDVH
description: Wrkctrbysemantickeystdvh
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WRKCTRBYSEMANTICKEYSTDVH

**Wrkctrbysemantickeystdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `WorkCenter` | ✓ | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `_WorkCenterTextBySemanticKey` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:E6ExH29r7kU{rc1Uxl{1wW
@AbapCatalog.sqlViewName: 'IWCBSK__VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'WorkCenter'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Work Center By Semantic Key'
define view I_WrkCtrBySemanticKeyStdVH as select from I_WorkCenterBySemanticKey{
  @ObjectModel.foreignKey.association: '_Plant'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key Plant,
  @ObjectModel.text.association: '_WorkCenterTextBySemanticKey'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.7
  key WorkCenter,

  _WorkCenterTextBySemanticKey,
  @Consumption.hidden: true
  WorkCenterCategoryCode,
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  WorkCenterInternalID,
  @Consumption.hidden: true
  WorkCenterTypeCode,

  @Consumption.hidden: true
  _Plant  
}
```
