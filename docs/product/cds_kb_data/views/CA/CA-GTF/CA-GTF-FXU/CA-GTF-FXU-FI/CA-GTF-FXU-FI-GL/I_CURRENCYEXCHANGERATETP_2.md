---
name: I_CURRENCYEXCHANGERATETP_2
description: "CURRENCYExchange RateTP 2"
app_component: CA-GTF-FXU-FI-GL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - currency
  - exchange-rate
  - component:CA-GTF-FXU-FI-GL
  - lob:Cross-Application Components
---
# I_CURRENCYEXCHANGERATETP_2

**CURRENCYExchange RateTP 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-GL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  |  |  |  |
| `SourceCurrency` | ✓ | |  |  |  |  |
| `TargetCurrency` | ✓ | |  |  |  |  |
| `ExchangeRateEffectiveDate` | ✓ | |  |  |  |  |
| `ExchangeRateTypeForEdit` |  | |  |  |  |  |
| `SourceCurrencyForEdit` |  | |  |  |  |  |
| `TargetCurrencyForEdit` |  | |  |  |  |  |
| `ExchangeRateEffectiveDateFoEd` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `AlternativeExchangeRateType` |  | |  |  |  |  |
| `NumberOfSourceCurrencyUnits` |  | |  |  |  |  |
| `NumberOfTargetCurrencyUnits` |  | |  |  |  |  |
| `ExchangeRateQuotation` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `DirectQuotedEffectiveExchRate` |  | |  |  |  |  |
| `IndirectQuotedEffctvExchRate` |  | |  |  |  |  |
| `CurrencyPair` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Currency Exchange Rate - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'ExchangeRate', 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
define root view entity I_CurrencyExchangeRateTP_2 provider contract transactional_interface
  as projection on R_CurrencyExchangeRateTP
{
  key ExchangeRateType,

  key SourceCurrency,

  key TargetCurrency,

  key ExchangeRateEffectiveDate,
  
      @ObjectModel.editableFieldFor: 'ExchangeRateType'
      ExchangeRateTypeForEdit,
      
      @ObjectModel.editableFieldFor: 'SourceCurrency'
      SourceCurrencyForEdit,
          
      @ObjectModel.editableFieldFor: 'TargetCurrency'
      TargetCurrencyForEdit,
      
      @ObjectModel.editableFieldFor: 'ExchangeRateEffectiveDate'
      ExchangeRateEffectiveDateFoEd,
      
      ExchangeRate,
      
      AlternativeExchangeRateType,

      NumberOfSourceCurrencyUnits,

      NumberOfTargetCurrencyUnits,
      
      ExchangeRateQuotation,
      
      AbsoluteExchangeRate,
      
      DirectQuotedEffectiveExchRate,

      IndirectQuotedEffctvExchRate,
      
      CurrencyPair
  
}
```
