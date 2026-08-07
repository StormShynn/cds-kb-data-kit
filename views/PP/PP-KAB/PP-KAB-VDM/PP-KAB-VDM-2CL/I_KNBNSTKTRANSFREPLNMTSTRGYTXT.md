---
name: I_KNBNSTKTRANSFREPLNMTSTRGYTXT
description: Knbnstktransfreplnmtstrgytxt
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
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNSTKTRANSFREPLNMTSTRGYTXT

**Knbnstktransfreplnmtstrgytxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |
| `StockTransferReplnmtStrategy` | ✓ | |  | `pkstu` |
| `Language` | ✓ | |  | `spras` |
| `StkTransfReplnmtStrgyName` |  | |  | `pksbz` |
| `_KnbnStkTransfReplnmtStrgy` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_Plant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnStkTransfReplnmtStrgy` | `I_KnbnStkTransfReplnmtStrgy` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNTRANSTRTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Contrl Cyc Stock Trans Str - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'StockTransferReplnmtStrategy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KnbnStkTransfReplnmtStrgyTxt
  as select from tpk3t
  association [1..1] to I_KnbnStkTransfReplnmtStrgy as _KnbnStkTransfReplnmtStrgy on  $projection.StockTransferReplnmtStrategy = _KnbnStkTransfReplnmtStrgy.StockTransferReplnmtStrategy
                                                                                  and $projection.Plant                        = _KnbnStkTransfReplnmtStrgy.Plant

  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association [0..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant

{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.foreignKey.association: '_KnbnStkTransfReplnmtStrgy'
  key pkstu as StockTransferReplnmtStrategy,
      @Semantics.language: true
  key spras as Language,

      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      pksbz as StkTransfReplnmtStrgyName,

      _KnbnStkTransfReplnmtStrgy,
      _Language,
      _Plant

}
```
