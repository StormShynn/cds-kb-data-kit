---
name: I_FININSTRACTIVITYCATEGORYTEXT
description: "Fininstractivitycategorytext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININSTRACTIVITYCATEGORYTEXT

**Fininstractivitycategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `FinancialInstrProductCategory` | ✓ | |  | `sanlfor` |  |  |
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` |  |  |
| `FinancialInstrActivityCategory` | ✓ | |  | `sfgzustt` |  |  |
| `FinInstrActivityCategoryName` |  | |  | `xtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProductCategory` | | ✓ | | | | |
| `_TransactionCategory` | | ✓ | | | | |
| `_ActivityCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_TransactionCategory` | `I_FinInstrTransCat` | [0..1] |
| `_ActivityCategory` | `I_FinInstrActivityCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFININSTRACTCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Instrument Activity Category - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'FinancialInstrActivityCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrActivityCategoryText'
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true

define view I_FinInstrActivityCategoryText
  as select from at02t
  association [0..1] to I_Language                 as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_FinancialInstrProdCat    as _ProductCategory       on $projection.FinancialInstrProductCategory  = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat         as _TransactionCategory   on $projection.FinancialInstrProductCategory  = _TransactionCategory.FinancialInstrProductCategory
                                                                            and $projection.FinInstrTransactionCategory    = _TransactionCategory.FinInstrTransactionCategory
  association [0..1] to I_FinInstrActivityCategory as _ActivityCategory      on $projection.FinancialInstrProductCategory  = _ActivityCategory.FinancialInstrProductCategory
                                                                            and $projection.FinInstrTransactionCategory    = _ActivityCategory.FinInstrTransactionCategory
                                                                            and $projection.FinancialInstrActivityCategory = _ActivityCategory.FinancialInstrActivityCategory
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras    as Language,
  @ObjectModel.foreignKey.association: '_ProductCategory'
  key sanlfor  as FinancialInstrProductCategory,
  @ObjectModel.foreignKey.association: '_TransactionCategory'
  key sfgtyp   as FinInstrTransactionCategory,
  @ObjectModel.foreignKey.association: '_ActivityCategory'
  key sfgzustt as FinancialInstrActivityCategory,

  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  xtext        as FinInstrActivityCategoryName,

  _Language,
  _ProductCategory,
  _TransactionCategory,
  _ActivityCategory
}
```
