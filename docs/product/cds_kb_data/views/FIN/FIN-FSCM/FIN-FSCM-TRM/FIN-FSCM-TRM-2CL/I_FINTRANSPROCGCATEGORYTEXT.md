---
name: I_FINTRANSPROCGCATEGORYTEXT
description: "Fintransprocgcategorytext"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSPROCGCATEGORYTEXT

**Fintransprocgcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `FinancialInstrProductCategory` | ✓ | |  | `sanlf` |  |  |
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` |  |  |
| `FinTransProcessingCategory` | ✓ | |  | `abwtyp` |  |  |
| `FinTransProcessingCategoryName` |  | |  | `xabrbez` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProductCategory` | | ✓ | | | | |
| `_TransactionCategory` | | ✓ | | | | |
| `_ProcessingCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_TransactionCategory` | `I_FinInstrTransCat` | [0..1] |
| `_ProcessingCategory` | `I_FinTransProcgCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFINTRANSPROCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Processing Category - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE,  #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ] 
@ObjectModel.representativeKey: 'FinTransProcessingCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
define view I_FinTransProcgCategoryText 
  as select from at05t 
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_FinancialInstrProdCat as _ProductCategory       on $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat      as _TransactionCategory   on $projection.FinancialInstrProductCategory = _TransactionCategory.FinancialInstrProductCategory
                                                                         and $projection.FinInstrTransactionCategory   = _TransactionCategory.FinInstrTransactionCategory
  association [0..1] to I_FinTransProcgCategory as _ProcessingCategory    on $projection.FinancialInstrProductCategory = _ProcessingCategory.FinancialInstrProductCategory
                                                                         and $projection.FinInstrTransactionCategory   = _ProcessingCategory.FinInstrTransactionCategory
                                                                         and $projection.FinTransProcessingCategory    = _ProcessingCategory.FinTransProcessingCategory
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,
  @ObjectModel.foreignKey.association: '_ProductCategory'
  key sanlf  as FinancialInstrProductCategory,
  @ObjectModel.foreignKey.association: '_TransactionCategory'
  key sfgtyp as FinInstrTransactionCategory,
  @ObjectModel.foreignKey.association: '_ProcessingCategory'
  key abwtyp as FinTransProcessingCategory,

  @Semantics.text: true
  xabrbez    as FinTransProcessingCategoryName,
  
  _Language,
  _ProductCategory,
  _TransactionCategory,
  _ProcessingCategory
}
```
