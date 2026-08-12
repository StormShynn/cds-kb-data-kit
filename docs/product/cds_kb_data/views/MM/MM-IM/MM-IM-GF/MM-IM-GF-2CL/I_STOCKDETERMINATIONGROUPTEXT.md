---
name: I_STOCKDETERMINATIONGROUPTEXT
description: "Stockdeterminationgrouptext"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - text-view
  - text
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKDETERMINATIONGROUPTEXT

**Stockdeterminationgrouptext**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `StockDeterminationGroup` | ✓ | |  | `eprio` |  |  |
| `StockDeterminationGroupText` |  | |  | `bezei` |  |  |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StockDeterminationGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StockDeterminationGroup` | `I_StockDeterminationGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @ObjectModel: {
                dataCategory: #TEXT,
                representativeKey: 'StockDeterminationGroup',
                usageType: {
                             serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING
                           },
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
              }
@VDM: {
         lifecycle.contract.type: #PUBLIC_LOCAL_API,
         viewType: #BASIC
       }
@EndUserText.label: 'Determination Group for Stock - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Analytics.technicalName: 'ISTCKKDTRGRPTXT'
@Search.searchable: true
define view entity I_StockDeterminationGroupText
  as select from t434h
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language
  association [1..1] to I_Plant                   as _Plant                   on  $projection.Plant = _Plant.Plant
  association [1..1] to I_StockDeterminationGroup as _StockDeterminationGroup on  $projection.Plant                   = _StockDeterminationGroup.Plant
                                                                              and $projection.StockDeterminationGroup = _StockDeterminationGroup.StockDeterminationGroup
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.foreignKey.association: '_StockDeterminationGroup'
      @ObjectModel.text.element: ['StockDeterminationGroupText']
  key eprio as StockDeterminationGroup,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as StockDeterminationGroupText,
      _Language,
      _Plant,
      _StockDeterminationGroup
}
```
