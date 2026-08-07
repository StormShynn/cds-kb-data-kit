---
name: I_KNBNSTKTRANSFREPLNMTSTRGYVH
description: Knbnstktransfreplnmtstrgyvh
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
# I_KNBNSTKTRANSFREPLNMTSTRGYVH

**Knbnstktransfreplnmtstrgyvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransferReplnmtStrategy` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKTRANSFSTRGYVH'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Replenishment Strategy for Stock Transfer'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text']
@ObjectModel.representativeKey: 'StockTransferReplnmtStrategy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true

define view I_KnbnStkTransfReplnmtStrgyVH as select from I_KnbnStkTransfReplnmtStrgy
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key StockTransferReplnmtStrategy,
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key Plant,
      
      _Text,
      @Consumption.hidden: true
      _Plant
}
```
