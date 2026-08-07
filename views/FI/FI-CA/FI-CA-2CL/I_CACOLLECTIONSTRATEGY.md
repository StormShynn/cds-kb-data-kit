---
name: I_CACOLLECTIONSTRATEGY
description: Cacollectionstrategy
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - collection
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACOLLECTIONSTRATEGY

**Cacollectionstrategy**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACollectionStrategy` | ✓ | |  | `strat` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACollectionStrategyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Collection Strategy'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACollectionStrategy',
                sapObjectNodeType.name: 'ContrAcctgCollectionStrategy',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } } 

@VDM.viewType: #BASIC

define view entity I_CACollectionStrategy
  as select from tfk047x

  association [0..*] to I_CACollectionStrategyText as _Text on $projection.CACollectionStrategy = _Text.CACollectionStrategy

{
      @ObjectModel.text.association: '_Text'
  key strat as CACollectionStrategy,

      _Text
}
```
