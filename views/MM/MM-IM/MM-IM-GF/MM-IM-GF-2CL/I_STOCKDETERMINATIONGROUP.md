---
name: I_STOCKDETERMINATIONGROUP
description: Stockdeterminationgroup
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKDETERMINATIONGROUP

**Stockdeterminationgroup**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |
| `StockDeterminationGroup` | ✓ | |  | `eprio` |
| `_Plant` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_StockDeterminationGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Stock Determination Group'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                dataCategory: #VALUE_HELP,
                compositionRoot: true,
                representativeKey: 'StockDeterminationGroup',
                usageType: {
                             serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING
                           },
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
         lifecycle.contract.type: #PUBLIC_LOCAL_API,
         viewType: #BASIC
       }
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              technicalName: 'ISTCKKDETERGRP'
            }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
define view entity I_StockDeterminationGroup
  as select from t434g
  association [1..1] to I_Plant                       as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_StockDeterminationGroupText as _Text  on  $projection.Plant                   = _Text.Plant
                                                                and $projection.StockDeterminationGroup = _Text.StockDeterminationGroup
{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key eprio as StockDeterminationGroup,
      _Plant,
      _Text
}
```
