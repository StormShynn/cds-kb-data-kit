---
name: I_FINANCIALINSTRPRODCATTEXT
description: Financialinstrprodcattext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
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
# I_FINANCIALINSTRPRODCATTEXT

**Financialinstrprodcattext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `FinancialInstrProductCategory` | ✓ | |  | `sanlf` |
| `FinInstrProductCategoryName` |  | |  | `ltx` |
| `_Language` | | ✓ | | |
| `_FinancialInstrProdCat` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.sqlViewName: 'IFININSPRODCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Category - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'FinancialInstrProductCategory'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Metadata.ignorePropagatedAnnotations:true 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'TreasuryProductCategoryText'

define view I_FinancialInstrProdCatText as select from tzaft 
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_FinancialInstrProdCat as _FinancialInstrProdCat on $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                  as Language,  
      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'  
  key sanlf as FinancialInstrProductCategory,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ltx as FinInstrProductCategoryName,
      _Language,
      _FinancialInstrProdCat
}
```
