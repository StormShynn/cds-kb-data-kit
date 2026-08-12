---
name: I_FINTRANSACTIONNPVCUBE
description: "Fintransactionnpvcube"
app_component: FIN-FSCM-TRM-MR-2CL
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
  - analytical
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_FINTRANSACTIONNPVCUBE

**Fintransactionnpvcube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FinancialTransaction` | ✓ | |  |  |  |  |
| `FinancialTransactionNPVType` | ✓ | |  |  |  |  |
| `NetPresentValueValidityDate` | ✓ | |  |  |  |  |
| `Counterparty` |  | | `_FinancialTransaction` | `Counterparty` |  |  |
| `FinancialInstrProductCategory` |  | | `_FinancialTransaction` | `FinancialInstrProductCategory` |  |  |
| `FinancialInstrumentProductType` |  | | `_FinancialTransaction` | `FinancialInstrumentProductType` |  |  |
| `FinancialInstrTransactionType` |  | | `_FinancialTransaction` | `FinancialInstrTransactionType` |  |  |
| `NetPresentValueAmountInNPVCrcy` |  | |  |  |  |  |
| `IntrinsicValueAmountInNPVCrcy` |  | |  |  |  |  |
| `TimeValueAmountInNPVCrcy` |  | |  |  |  |  |
| `CleanPriceAmountInNPVCrcy` |  | |  |  |  |  |
| `IncomingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `OutgoingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `RiskFreeNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `CreditValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `DebitValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `NetPresentValueCurrency` |  | |  |  |  |  |
| `_Counterparty` |  | | `_FinancialTransaction` | `_Counterparty` |  |  |
| `_FinancialInstrProdCat` |  | | `_FinancialTransaction` | `_FinancialInstrProdCat` |  |  |
| `_FinancialInstrProdType` |  | | `_FinancialTransaction` | `_FinancialInstrProdType` |  |  |
| `_FinancialInstrTransType` |  | | `_FinancialTransaction` | `_FinancialInstrTransType` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED } // Treasury Counterparty is never a natural person

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }

@EndUserText.label: 'Financial Transaction NPV - Cube'

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@ObjectModel: { usageType:{ serviceQuality: #D,
                            sizeCategory: #L,
                            dataClass: #MIXED },
                modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities:[ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
}

@VDM.viewType: #COMPOSITE

define view entity I_FinTransactionNPVCube
  as select from I_FinancialTransactionNPV
{
      // Dimensions
      @ObjectModel.foreignKey.association:'_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association:'_FinancialTransaction'
  key FinancialTransaction,
      @ObjectModel.foreignKey.association:'_NPVType'
  key FinancialTransactionNPVType,
  key NetPresentValueValidityDate,
      @ObjectModel.foreignKey.association:'_Counterparty'
      _FinancialTransaction.Counterparty                                                                                                           as Counterparty,
      @ObjectModel.foreignKey.association:'_FinancialInstrProdCat'
      _FinancialTransaction.FinancialInstrProductCategory                                                                                          as FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association:'_FinancialInstrProdType'
      _FinancialTransaction.FinancialInstrumentProductType                                                                                         as FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association:'_FinancialInstrTransType'
      _FinancialTransaction.FinancialInstrTransactionType                                                                                          as FinancialInstrTransactionType,

      // Measures in NPV Currency
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      NetPresentValueAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      IntrinsicValueAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      TimeValueAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      CleanPriceAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      IncomingNPVAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      OutgoingNPVAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      RiskFreeNPVAmountInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      CreditValueAdjmtAmtInNPVCrcy,
      @Aggregation.default: #SUM
      @Aggregation.exception: #LAST
      @Aggregation.referenceElement: ['NetPresentValueValidityDate']    
      @Semantics.amount.currencyCode:'NetPresentValueCurrency'
      DebitValueAdjmtAmtInNPVCrcy,
      NetPresentValueCurrency,

      // Associations
      _CompanyCode,
      _FinancialTransaction,
      _NPVType,
      _FinancialTransaction._Counterparty                                                                                                          as _Counterparty,
      _FinancialTransaction._FinancialInstrProdCat                                                                                                 as _FinancialInstrProdCat,
      _FinancialTransaction._FinancialInstrProdType                                                                                                as _FinancialInstrProdType,
      _FinancialTransaction._FinancialInstrTransType                                                                                               as _FinancialInstrTransType
}
```
