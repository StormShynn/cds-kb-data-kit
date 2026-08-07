---
name: I_FINANCIALTRANSACTIONNPVTP
description: Financialtransactionnpvtp
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
  - transactional-processing
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONNPVTP

**Financialtransactionnpvtp**

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
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |
| `_NPVTypeText` | | ✓ | | | | |
| `_NPVCurrency` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Fin Transaction Net Present Value - TP'

@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER,#UI_PROVIDER_PROJECTION_SOURCE],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #M,
                            dataClass:      #TRANSACTIONAL },
               sapObjectNodeType.name: 'FinancialTransactionNPV'}

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'NEX', 
  dataSources: ['FinancialTransactionNPV'],  
  quota: {
    maximumFields: 200,
    maximumBytes: 20000
  }  
}         
@AbapCatalog.extensibility.allowNewCompositions
define root view entity I_FinancialTransactionNPVTP
  provider contract transactional_interface
  as projection on R_FinancialTransactionNPVTP as FinancialTransactionNPV
{
      @ObjectModel.text.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [{ entity :  { name: 'I_CompanyCodeStdVH', element : 'CompanyCode' }, useAsTemplate: true }]
  key CompanyCode,
      @Consumption.valueHelpDefinition: [{ entity :  { name: 'I_FinancialTransactionStdVH', element : 'FinancialTransaction' },
                                           additionalBinding: [{ element: 'CompanyCode', localElement: 'CompanyCode'  }],
                                           useAsTemplate: true }]
  key FinancialTransaction,
      @ObjectModel.text.association: '_NPVTypeText'
      @Consumption.valueHelpDefinition: [{ entity :  { name: 'I_FinancialTransactionNPVType', element : 'FinancialTransactionNPVType' },
                                           useAsTemplate: true }]
  key FinancialTransactionNPVType,
  key NetPresentValueValidityDate,
      @Semantics.amount.currencyCode: 'NetPresentValueCurrency'
      NetPresentValueAmountInNPVCrcy,
      @Consumption.valueHelpDefinition: [{ entity: {name: 'I_CurrencyStdVH',
                                           element: 'Currency'}, useAsTemplate: true }]
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
      _CompanyCode,
      _FinancialTransaction,
      _NPVType,
      _NPVTypeText,
      _NPVCurrency
}
```
