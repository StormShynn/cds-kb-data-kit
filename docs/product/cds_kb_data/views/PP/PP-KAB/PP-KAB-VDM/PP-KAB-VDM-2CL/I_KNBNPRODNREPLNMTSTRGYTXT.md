---
name: I_KNBNPRODNREPLNMTSTRGYTXT
description: "Knbnprodnreplnmtstrgytxt"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_KNBNPRODNREPLNMTSTRGYTXT

**Knbnprodnreplnmtstrgytxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `InHouseProductionReplnmtStrgy` | ✓ | |  | `pksts` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `InhProdnReplnmtStrgyName` |  | |  | `pksbz` |  |  |
| `_KnbnProdnReplnmtStrgy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnProdnReplnmtStrgy` | `I_KnbnProdnReplnmtStrgy` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNPRODSTRTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Knbn Cntrl Cyc In House Prodn Strat - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'InHouseProductionReplnmtStrgy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KnbnProdnReplnmtStrgyTxt
  as select from tpk1t
  association [1..1] to I_KnbnProdnReplnmtStrgy as _KnbnProdnReplnmtStrgy on  $projection.InHouseProductionReplnmtStrgy = _KnbnProdnReplnmtStrgy.InHouseProductionReplnmtStrgy
                                                                          and $projection.Plant                         = _KnbnProdnReplnmtStrgy.Plant

  association [0..1] to I_Language              as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_Plant                 as _Plant                 on  $projection.Plant = _Plant.Plant


{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.foreignKey.association: '_KnbnProdnReplnmtStrgy'
  key pksts as InHouseProductionReplnmtStrgy,
      @Semantics.language: true
  key spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      pksbz as InhProdnReplnmtStrgyName,

      _KnbnProdnReplnmtStrgy,
      _Language,
      _Plant

}
```
