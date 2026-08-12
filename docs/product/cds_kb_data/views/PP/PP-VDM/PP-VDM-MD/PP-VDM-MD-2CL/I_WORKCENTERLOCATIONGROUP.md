---
name: I_WORKCENTERLOCATIONGROUP
description: "Work CenterLOCATIONGROUP"
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
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERLOCATIONGROUP

**Work CenterLOCATIONGROUP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterPlant` | ✓ | |  | `werks` |  |  |
| `WorkCenterLocationGroup` | ✓ | |  | `ortgr` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_WorkCenterLocationGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWKCLOCATIONGRP'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'WorkCenterLocationGroup'
@ObjectModel.semanticKey: ['WorkCenterPlant', 'WorkCenterLocationGroup']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Location Group'

define view I_WorkCenterLocationGroup
  as select from tc28 as tc28
  association [1..1] to I_Plant                       as _Plant on  $projection.WorkCenterPlant         = _Plant.Plant
  association [0..*] to I_WorkCenterLocationGroupText as _Text  on  $projection.WorkCenterLocationGroup = _Text.WorkCenterLocationGroup
                                                                and $projection.WorkCenterPlant         = _Text.WorkCenterPlant
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
  key tc28.werks as WorkCenterPlant,
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
  key tc28.ortgr as WorkCenterLocationGroup,

      // Associations
      _Plant,
      _Text
};
```
