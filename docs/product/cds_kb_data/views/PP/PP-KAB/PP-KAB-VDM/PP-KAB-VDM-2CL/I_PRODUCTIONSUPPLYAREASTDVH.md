---
name: I_PRODUCTIONSUPPLYAREASTDVH
description: "Productionsupplyareastdvh"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - standard-value-help
  - product
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREASTDVH

**Productionsupplyareastdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionSupplyArea` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSASTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Production Supply Area'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text']
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.representativeKey: 'ProductionSupplyArea'
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true

define view I_ProductionSupplyAreaStdVH
  as select from I_ProductionSupplyArea
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key ProductionSupplyArea,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
  
      _Text,
      @Consumption.hidden: true
      _Plant
}
```
