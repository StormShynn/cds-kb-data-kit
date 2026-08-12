---
name: I_FININSTRACTIVITYCATEGORY
description: "Fininstractivitycategory"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININSTRACTIVITYCATEGORY

**Fininstractivitycategory**

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
| `FinancialInstrProductCategory` | ✓ | |  | `sanlfor` |  |  |
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` |  |  |
| `FinancialInstrActivityCategory` | ✓ | |  | `sfgzustt` |  |  |
| `FinTransGenActivityCategory` |  | |  | `cast(svgtyp as ftr_gen_activity_category)` |  |  |
| `_ProductCategory` | | ✓ | | | | |
| `_TransactionCategory` | | ✓ | | | | |
| `_ActivityCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCategory` | `I_FinancialInstrProdCat` | [0..1] |
| `_TransactionCategory` | `I_FinInstrTransCat` | [0..1] |
| `_ActivityCategoryText` | `I_FinInstrActivityCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFININSTRACTCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Instrument Activity Category'
@ObjectModel.representativeKey: 'FinancialInstrActivityCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC 
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrumentActivityCategory'

define view I_FinInstrActivityCategory
  as select from at02
  association [0..1] to I_FinancialInstrProdCat        as _ProductCategory      on  $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_FinInstrTransCat             as _TransactionCategory  on  $projection.FinancialInstrProductCategory = _TransactionCategory.FinancialInstrProductCategory
                                                                                and $projection.FinInstrTransactionCategory   = _TransactionCategory.FinInstrTransactionCategory
  association [0..*] to I_FinInstrActivityCategoryText as _ActivityCategoryText on  $projection.FinancialInstrProductCategory  = _ActivityCategoryText.FinancialInstrProductCategory
                                                                                and $projection.FinInstrTransactionCategory    = _ActivityCategoryText.FinInstrTransactionCategory
                                                                                and $projection.FinancialInstrActivityCategory = _ActivityCategoryText.FinancialInstrActivityCategory

{
      @ObjectModel.foreignKey.association: '_ProductCategory'  
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @UI.lineItem:[{ position : 2 }]  
  key sanlfor                                   as FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association: '_TransactionCategory' 
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @UI.lineItem:[{ position : 3 }]  
  key sfgtyp                                    as FinInstrTransactionCategory,
      @ObjectModel.text.association: '_ActivityCategoryText' 
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem:[{ position : 1 }]  
  key sfgzustt                                  as FinancialInstrActivityCategory,

      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @UI.lineItem:[{ position : 4 }]  
      cast(svgtyp as ftr_gen_activity_category) as FinTransGenActivityCategory,

      @Consumption.filter.hidden: true  
      _ProductCategory,
      @Consumption.filter.hidden: true
      _TransactionCategory,
      @Consumption.filter.hidden: true
      _ActivityCategoryText
}
```
