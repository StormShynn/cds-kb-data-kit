---
name: I_KNBNPRODNREPLNMTSTRGYVH
description: Knbnprodnreplnmtstrgyvh
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNPRODNREPLNMTSTRGYVH

**Knbnprodnreplnmtstrgyvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InHouseProductionReplnmtStrgy` | `InHouseProductionReplnmtStrgy` |
| key `Plant` | `Plant` |
| `_Text` | *Association* |
| `_Plant` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBNPRODSTRGYVH'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Replenishment Strategy for In-House Production'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text']
@ObjectModel.representativeKey: 'InHouseProductionReplnmtStrgy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true

define view I_KnbnProdnReplnmtStrgyVH as select from I_KnbnProdnReplnmtStrgy 
{
      
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key InHouseProductionReplnmtStrgy,
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key Plant,
      
      _Text,
      @Consumption.hidden: true
      _Plant
}
```
