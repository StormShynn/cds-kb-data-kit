---
name: I_FINTRANSPROCGCATEGORY
description: "Fintransprocgcategory"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSPROCGCATEGORY

**Fintransprocgcategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrProductCategory` | ✓ | |  | `sanlf` |  |  |
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` |  |  |
| `FinTransProcessingCategory` | ✓ | |  | `abwtyp` |  |  |
| `_ProductCategory` | | ✓ | | | | |
| `_TransactionCategory` | | ✓ | | | | |
| `_ProcessingCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_TransactionCategory` | `I_FinInstrTransCat` | [0..1] |
| `_ProcessingCategoryText` | `I_FinTransProcgCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFINTRANSPROCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Processing Category'
@ObjectModel.representativeKey: 'FinTransProcessingCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'TreasuryProductCategory'

define view I_FinTransProcgCategory 
  as select from at05 
  association [0..1] to I_FinancialInstrProdCat     as _ProductCategory        on $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat          as _TransactionCategory    on $projection.FinancialInstrProductCategory = _TransactionCategory.FinancialInstrProductCategory
                                                                              and $projection.FinInstrTransactionCategory   = _TransactionCategory.FinInstrTransactionCategory
  association [0..*] to I_FinTransProcgCategoryText as _ProcessingCategoryText on $projection.FinancialInstrProductCategory = _ProcessingCategoryText.FinancialInstrProductCategory
                                                                              and $projection.FinInstrTransactionCategory   = _ProcessingCategoryText.FinInstrTransactionCategory
                                                                              and $projection.FinTransProcessingCategory    = _ProcessingCategoryText.FinTransProcessingCategory

{
  @ObjectModel.foreignKey.association: '_ProductCategory'
  key sanlf  as FinancialInstrProductCategory,
  @ObjectModel.foreignKey.association: '_TransactionCategory'
  key sfgtyp as FinInstrTransactionCategory,
  @ObjectModel.text.association: '_ProcessingCategoryText'
  key abwtyp as FinTransProcessingCategory,
  
  _ProductCategory,
  _TransactionCategory,
  _ProcessingCategoryText
}
```
