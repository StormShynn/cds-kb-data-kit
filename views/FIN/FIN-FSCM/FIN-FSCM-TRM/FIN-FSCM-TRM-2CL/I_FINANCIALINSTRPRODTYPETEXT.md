---
name: I_FINANCIALINSTRPRODTYPETEXT
description: Financialinstrprodtypetext
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
# I_FINANCIALINSTRPRODTYPETEXT

**Financialinstrprodtypetext**

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
| `FinancialInstrumentProductType` | ✓ | |  | `gsart` |  |  |
| `FinancialInstrProdTypeName` |  | |  | `cast(FinancialInstrProdTypeText.ltx as ftr_gen_product_type_name preserving type)` |  |  |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.sqlViewName: 'IFININSPRODTPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Product Type - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'FinancialInstrumentProductType'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrProductTypeText'

define view I_FinancialInstrProdTypeText
  as select from tzpat as FinancialInstrProdTypeText

  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key FinancialInstrProdTypeText.spras                                  as Language,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key FinancialInstrProdTypeText.gsart                                  as FinancialInstrumentProductType,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(FinancialInstrProdTypeText.ltx as ftr_gen_product_type_name preserving type) as FinancialInstrProdTypeName,
      //  FinancialInstrProdTypeText.ltxkurz,

      _FinancialInstrProductType,
      _Language

}
```
