---
name: I_PRODUCTIONVERSIONGROUP
description: Productionversiongroup
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
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONVERSIONGROUP

**Productionversiongroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `Plant` |
| key `ProductionVersionGroup` | `cast(RepetitiveMfgPlanningGroup as pph_mdv preserving type)` |
| `ProductionVersionGroupDesc` | `cast(RepetitiveMfgPlanningGroupText as pph_plid_text preserving type)` |
| `_Plant` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPPRODVERSGRP'
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionVersionGroup'
@ObjectModel.semanticKey: ['Plant', 'ProductionVersionGroup']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Version Group'

define view entity I_ProductionVersionGroup
  as select from I_RepetitiveMfgPlanningGroup
{
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.element: [ 'ProductionVersionGroupDesc']
  key cast(RepetitiveMfgPlanningGroup     as pph_mdv preserving type)       as ProductionVersionGroup,

      @Semantics.text: true
      cast(RepetitiveMfgPlanningGroupText as pph_plid_text preserving type) as ProductionVersionGroupDesc,

      // Associations
      _Plant
};
```
