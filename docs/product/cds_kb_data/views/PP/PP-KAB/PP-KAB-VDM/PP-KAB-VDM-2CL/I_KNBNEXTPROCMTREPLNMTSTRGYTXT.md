---
name: I_KNBNEXTPROCMTREPLNMTSTRGYTXT
description: "Knbnextprocmtreplnmtstrgytxt"
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
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNEXTPROCMTREPLNMTSTRGYTXT

**Knbnextprocmtreplnmtstrgytxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `ExtProcurementReplnmtStrgy` | ✓ | |  | `pkstf` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ExtProcurementReplnmtStrgyName` |  | |  | `pksbz` |  |  |
| `_KnbnExtProcmtReplnmtStrgy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnExtProcmtReplnmtStrgy` | `I_KnbnExtProcmtReplnmtStrgy` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNPROCSTRTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Control Cyc Ext Proc Strat - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'ExtProcurementReplnmtStrgy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KnbnExtProcmtReplnmtStrgyTxt
  as select from tpk2t
  association [1..1] to I_KnbnExtProcmtReplnmtStrgy as _KnbnExtProcmtReplnmtStrgy on  $projection.ExtProcurementReplnmtStrgy = _KnbnExtProcmtReplnmtStrgy.ExtProcurementReplnmtStrgy
                                                                                  and $projection.Plant                      = _KnbnExtProcmtReplnmtStrgy.Plant

  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association [0..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant

{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.foreignKey.association: '_KnbnExtProcmtReplnmtStrgy'
  key pkstf as ExtProcurementReplnmtStrgy,
      @Semantics.language: true
  key spras as Language,

      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      pksbz as ExtProcurementReplnmtStrgyName,

      _KnbnExtProcmtReplnmtStrgy,
      _Language,
      _Plant

}
```
