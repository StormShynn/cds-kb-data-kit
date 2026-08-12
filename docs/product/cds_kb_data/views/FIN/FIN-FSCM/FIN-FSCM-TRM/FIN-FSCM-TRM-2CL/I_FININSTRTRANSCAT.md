---
name: I_FININSTRTRANSCAT
description: "Fininstrtranscat"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININSTRTRANSCAT

**Fininstrtranscat**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrProductCategory` | ✓ | |  | `sanlfor` |  |  |
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` |  |  |
| `_Text` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinInstrTransCatText` | [0..*] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IFINSTTC'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Transaction Category'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FinInstrTransactionCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrTransactionCategory'

define view I_FinInstrTransCat as select from at01 
  association [0..*] to I_FinInstrTransCatText as _Text on 
     $projection.FinancialInstrProductCategory = _Text.FinancialInstrProductCategory and
     $projection.FinInstrTransactionCategory = _Text.FinInstrTransactionCategory
  association [0..1] to  I_FinancialInstrProdCat as _FinancialInstrProdCat on 
     $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory 
{
  //AT01 
  @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'   
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8 
  key sanlfor as FinancialInstrProductCategory,  
  @ObjectModel.text.association: '_Text'  
  @Search.defaultSearchElement: true 
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8 
  key sfgtyp as FinInstrTransactionCategory,
  @Consumption.filter.hidden: true
  _FinancialInstrProdCat,
  _Text
}
```
