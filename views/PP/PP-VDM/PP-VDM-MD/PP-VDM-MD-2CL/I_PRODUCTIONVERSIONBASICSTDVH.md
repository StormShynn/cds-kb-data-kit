---
name: I_PRODUCTIONVERSIONBASICSTDVH
description: Productionversionbasicstdvh
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
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONVERSIONBASICSTDVH

**Productionversionbasicstdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ProductionVersion` | ✓ | |  |  |  |  |
| `ProductionVersionText` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPVB__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionVersion'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Production Version Basic'
define view I_ProductionVersionBasicStdVH as select from I_ProductionVersionBasic {
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
  @ObjectModel.foreignKey.association: '_Product'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  key Product,
  @ObjectModel.foreignKey.association: '_Plant'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  key Plant,
  @ObjectModel.text.element: ['ProductionVersionText']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key ProductionVersion,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  @Semantics.text: true
  ProductionVersionText,
  @Semantics.businessDate.to: true
  ValidityEndDate,
  @Semantics.businessDate.from: true
  ValidityStartDate,

  @Consumption.hidden: true
  _Product,
  @Consumption.hidden: true
  _Plant
};
```
