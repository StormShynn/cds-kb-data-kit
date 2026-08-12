---
name: I_FINANCIALINSTRTRANSTYPE
description: "Financialinstrtranstype"
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
# I_FINANCIALINSTRTRANSTYPE

**Financialinstrtranstype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
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
