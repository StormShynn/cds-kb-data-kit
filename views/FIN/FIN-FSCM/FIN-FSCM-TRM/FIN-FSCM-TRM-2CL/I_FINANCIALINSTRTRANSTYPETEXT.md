---
name: I_FINANCIALINSTRTRANSTYPETEXT
description: Financialinstrtranstypetext
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
# I_FINANCIALINSTRTRANSTYPETEXT

**Financialinstrtranstypetext**

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
| `FinancialInstrumentProductType` | ✓ | |  | `sgsart` |
| `FinancialInstrTransactionType` | ✓ | |  | `cast(FinancialInstrTransTypeText.sfhaart as ftr_gen_transaction_type preserving type)` |
| `FinancialInstrTransTypeName` |  | |  | `cast(FinancialInstrTransTypeText.xtext as ftr_gen_transaction_type_name preserving type)` |
| `_FinancialInstrTransType` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_Financialinstrproducttype` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Financialinstrproducttype` | `I_FinancialinstrProductType` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFININSTRTPTXT' 
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Transaction Type - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'FinancialInstrTransactionType'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC 
@Search.searchable: true
@Consumption.ranked: true
@Analytics.dataExtraction.enabled: true 
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@ObjectModel.sapObjectNodeType.name: 'FinInstrTransactionTypeText'

define view I_FinancialInstrTransTypeText
  as select from at10t as FinancialInstrTransTypeText

  association [0..1] to I_FinancialInstrTransType   as _FinancialInstrTransType   on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                  and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType
  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association        to I_FinancialinstrProductType as _Financialinstrproducttype on  $projection.FinancialInstrumentProductType = _Financialinstrproducttype.FinancialInstrumentProductType
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key FinancialInstrTransTypeText.spras                                        as Language,
      @ObjectModel.foreignKey.association: '_Financialinstrproducttype'
  key FinancialInstrTransTypeText.sgsart                                       as FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
  key cast(FinancialInstrTransTypeText.sfhaart as ftr_gen_transaction_type preserving type)    as FinancialInstrTransactionType,

      @Semantics.text: true 
      @Search.defaultSearchElement: true 
      @Search.ranking: #LOW
      cast(FinancialInstrTransTypeText.xtext as ftr_gen_transaction_type_name preserving type) as FinancialInstrTransTypeName,

      _FinancialInstrTransType,
      _Language,
      _Financialinstrproducttype
}
```
