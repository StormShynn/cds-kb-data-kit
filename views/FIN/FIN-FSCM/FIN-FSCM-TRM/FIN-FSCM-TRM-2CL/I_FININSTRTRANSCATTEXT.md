---
name: I_FININSTRTRANSCATTEXT
description: Fininstrtranscattext
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
# I_FININSTRTRANSCATTEXT

**Fininstrtranscattext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `FinancialInstrProductCategory` | `sanlfor` |
| key `FinInstrTransactionCategory` | `sfgtyp` |
| `FinInstrTransCategoryName` | `xtext` |
| `_Language` | *Association* |
| `_FinancialInstrProdCat` | *Association* |
| `_FinInstrTransCat` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_FinInstrTransCat` | `I_FinInstrTransCat` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.preserveKey // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IFININSTRANSCATT'  
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Transaction Category - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'FinInstrTransactionCategory' 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC 
@Search.searchable: true
@Consumption.ranked: true
@Analytics.dataExtraction.enabled: true 
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrTransCategoryText'

define view I_FinInstrTransCatText as select from at01t 
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_FinancialInstrProdCat     as _FinancialInstrProdCat     on $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat          as _FinInstrTransCat          on 
         $projection.FinancialInstrProductCategory = _FinInstrTransCat.FinancialInstrProductCategory and
         $projection.FinInstrTransactionCategory = _FinInstrTransCat.FinInstrTransactionCategory
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras as  Language, 
  @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
  key sanlfor as FinancialInstrProductCategory, 
  key sfgtyp as FinInstrTransactionCategory, 
  @Semantics.text:true  
  @Search.defaultSearchElement: true 
  @Search.ranking: #LOW
  xtext as FinInstrTransCategoryName,
  _FinancialInstrProdCat,
  _FinInstrTransCat,
  _Language 
}
```
