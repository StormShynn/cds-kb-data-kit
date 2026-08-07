---
name: I_COSTANALYSISRESOURCESTDVH
description: Costanalysisresourcestdvh
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COSTANALYSISRESOURCESTDVH

**Costanalysisresourcestdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  |  |  |
| `CostAnalysisResource` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'CostAnalysisResource',
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Analysis Resource'
define view entity I_CostAnalysisResourceStdVH as select from I_CostAnalysisResource as I_CostAnalysisResource {
  @UI.lineItem: [{position:2}]
  @ObjectModel.foreignKey.association: '_ControllingArea'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key I_CostAnalysisResource.ControllingArea,
  @UI.lineItem: [{position:1}]
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_CostAnalysisResource.CostAnalysisResource,
  @Semantics.businessDate.to: true
  key I_CostAnalysisResource.ValidityEndDate,
  @Semantics.businessDate.from: true
  I_CostAnalysisResource.ValidityStartDate,

  I_CostAnalysisResource._Text,

  @Consumption.hidden: true
  I_CostAnalysisResource._ControllingArea
}
```
