---
name: I_FINTRANSACTIVITYCATEGORY
description: Fintransactivitycategory
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSACTIVITYCATEGORY

**Fintransactivitycategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FinancialTransaction` | ✓ | |  |  |  |  |
| `FinancialInstrActivityCategory` | ✓ | |  |  |  |  |
| `FinancialInstrProductCategory` |  | |  |  |  |  |
| `FinInstrTransactionCategory` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_ActivityCategoryText` | | ✓ | | | | |
| `_ProductCategory` | | ✓ | | | | |
| `_TransactionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_ActivityCategoryText` | `I_FinInstrActivityCategoryText` | [0..*] |
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_TransactionCategory` | `I_FinInstrTransCat` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFINTRANSACTCAT'
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Activity Category'
@ObjectModel.representativeKey: 'FinancialInstrActivityCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinInstrumentActivityCategory'
define view I_FinTransActivityCategory 
  as select from I_FinancialTransaction as FinancialTransaction
  inner join I_FinInstrActivityCategory as ActivityCategory on  FinancialTransaction.FinancialInstrProductCategory  = ActivityCategory.FinancialInstrProductCategory
                                                            and FinancialTransaction.FinInstrTransactionCategory    = ActivityCategory.FinInstrTransactionCategory
  
  association [0..1] to I_CompanyCode                  as _CompanyCode          on  $projection.CompanyCode                    = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction         as _FinTrans             on  $projection.CompanyCode                    = _FinTrans.CompanyCode
                                                                                and $projection.FinancialTransaction           = _FinTrans.FinancialTransaction
  association [0..*] to I_FinInstrActivityCategoryText as _ActivityCategoryText on  $projection.FinancialInstrProductCategory  = _ActivityCategoryText.FinancialInstrProductCategory
                                                                                and $projection.FinInstrTransactionCategory    = _ActivityCategoryText.FinInstrTransactionCategory
                                                                                and $projection.FinancialInstrActivityCategory = _ActivityCategoryText.FinancialInstrActivityCategory
  association [0..1] to I_FinancialInstrProdCat        as _ProductCategory      on  $projection.FinancialInstrProductCategory  = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat             as _TransactionCategory  on  $projection.FinancialInstrProductCategory  = _TransactionCategory.FinancialInstrProductCategory
                                                                                and $projection.FinInstrTransactionCategory    = _TransactionCategory.FinInstrTransactionCategory

{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key FinancialTransaction.CompanyCode                 as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key FinancialTransaction.FinancialTransaction        as FinancialTransaction,
  @ObjectModel.text.association: '_ActivityCategoryText'
  key ActivityCategory.FinancialInstrActivityCategory  as FinancialInstrActivityCategory,

  @ObjectModel.foreignKey.association: '_ProductCategory'
  ActivityCategory.FinancialInstrProductCategory   as FinancialInstrProductCategory,
  @ObjectModel.foreignKey.association: '_TransactionCategory'
  ActivityCategory.FinInstrTransactionCategory     as FinInstrTransactionCategory,
 
  _CompanyCode,
  _FinTrans,
  _ActivityCategoryText,
  _ProductCategory,
  _TransactionCategory
}
```
