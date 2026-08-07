---
name: I_LOCATIONGROUP
description: "Locationgroup"
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_LOCATIONGROUP

**Locationgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LocationGroup` | ✓ | |  | `ortgr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_LocationGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILOCATIONGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'LocationGroup'
@ObjectModel.semanticKey: ['LocationGroup', 'Plant']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #ORGANIZATIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Location Group Code'

define view I_LocationGroup
  as select from tc28 as tc28
  association [1..1] to I_Plant             as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_LocationGroupText as _Text  on  $projection.LocationGroup = _Text.LocationGroup
                                                      and $projection.Plant = _Text.Plant
{
      @ObjectModel.text.association: '_Text'
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
  key tc28.ortgr as LocationGroup,
      @ObjectModel.foreignKey.association: '_Plant'
  key tc28.werks as Plant,

      // Associations
      _Plant,
      _Text
};
```
