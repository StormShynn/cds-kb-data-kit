---
name: I_FINANCIALINSTRTRANSTYPE
description: "Financialinstrtranstype"
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
# I_FINANCIALINSTRTRANSTYPE

**Financialinstrtranstype**

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
| `FinancialInstrTransactionType` | ✓ | |  | `cast(FinancialInstrTransType.sfhaart as ftr_gen_transaction_type preserving type)` |  |  |
| `FinancialInstrumentProductType` | ✓ | |  | `sgsart` |  |  |
| `FinInstrTransactionCategory` |  | |  | `sfgtyp` |  |  |
| `TreasuryContractType` |  | |  | `rantyp` |  |  |
| `_Text` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialInstrTransTypeText` | [0..*] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IFININSTRTP'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Transaction Type'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FinancialInstrTransactionType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'FinancialInstrTransactionType'

define view I_FinancialInstrTransType
  as select from at10 as FinancialInstrTransType

  association [0..*] to I_FinancialInstrTransTypeText as _Text                      on  $projection.FinancialInstrTransactionType  = _Text.FinancialInstrTransactionType
                                                                                    and $projection.FinancialInstrumentProductType = _Text.FinancialInstrumentProductType

  association        to I_FinancialinstrProductType   as _FinancialInstrProductType on  $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key cast(FinancialInstrTransType.sfhaart as ftr_gen_transaction_type preserving type) as FinancialInstrTransactionType,
      @Search.ranking: #LOW
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key FinancialInstrTransType.sgsart                                    as FinancialInstrumentProductType,
      @Search.ranking: #LOW
      @Search.defaultSearchElement: true
      FinancialInstrTransType.sfgtyp                                    as FinInstrTransactionCategory,
      @Search.ranking: #LOW
      @Search.defaultSearchElement: true
      rantyp                                                            as TreasuryContractType,      
      _Text,
      @Consumption.filter.hidden: true
      _FinancialInstrProductType
}
```
