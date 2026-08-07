---
name: I_FINANCIALTRANSACTIONNPV
description: Financialtransactionnpv
app_component: FIN-FSCM-TRM-MR-2CL
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
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONNPV

**Financialtransactionnpv**

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
| `NetPresentValueAmountInNPVCrcy` |  | |  |  |  |  |
| `NetPresentValueCurrency` |  | |  |  |  |  |
| `IntrinsicValueAmountInNPVCrcy` |  | |  |  |  |  |
| `TimeValueAmountInNPVCrcy` |  | |  |  |  |  |
| `CleanPriceAmountInNPVCrcy` |  | |  |  |  |  |
| `IncomingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `OutgoingNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `RiskFreeNPVAmountInNPVCrcy` |  | |  |  |  |  |
| `CreditValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `DebitValueAdjmtAmtInNPVCrcy` |  | |  |  |  |  |
| `_FinancialTransaction` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Transaction Net Present Value'
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL }
@ObjectModel.modelingPattern: #ANALYTICAL_FACT  
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]  
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinancialTransactionNPV
  as select from R_FinancialTransactionNPV
 
{
  key CompanyCode,
  key FinancialTransaction,
  key FinancialTransactionNPVType,
  key NetPresentValueValidityDate,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      NetPresentValueAmountInNPVCrcy,
      NetPresentValueCurrency,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      IntrinsicValueAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      TimeValueAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      CleanPriceAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      IncomingNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      OutgoingNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      RiskFreeNPVAmountInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      CreditValueAdjmtAmtInNPVCrcy,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      DebitValueAdjmtAmtInNPVCrcy,
      _FinancialTransaction,
      _NPVType,
      _CompanyCode 
}
```
