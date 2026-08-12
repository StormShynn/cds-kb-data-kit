---
name: I_TRSYMKTRSKKEYFIGVALUECUBE
description: "This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value
semantic_en: "This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?"
semantic_vi: "Treasury Market Risk Key Figure Value - Cube — CDS view giao diện dựa trên I_TrsyMktRskKeyFigValue."
keywords:
  - "treasury"
  - "market"
  - "risk"
  - "key"
  - "figure"
  - "value"
  - "cube"
  - "validity"
  - "date"
  - "financial"
  - "object"
  - "company"
  - "code"
  - "contract"
  - "type"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-MR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-MR
  - FIN-FSCM-TRM-MR-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_TRSYMKTRSKKEYFIGVALUECUBE

**This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValidityDate` | ✓ | |  |  | `DATS(8)` | Key Date in Results Databases |
| `MarketRiskKeyFigureSet` | ✓ | |  |  | `CHAR(6)` | Market Risk Key Figure Set |
| `TreasuryFinancialObject` | ✓ | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `CompanyCode` |  | | `_FinancialObject` | `CompanyCode` | `CHAR(4)` | Company Code |
| `TreasuryContractType` |  | | `_FinancialObject` | `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | | `_FinancialObject` | `FinancialInstrProductCategory` | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | | `_FinancialObject` | `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `Portfolio` |  | | `_FinancialObject` | `Portfolio` | `CHAR(10)` | Portfolio |
| `FinancialTransaction` |  | | `_FinancialObject` | `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `SecurityClass` |  | | `_FinancialObject` | `SecurityClass` | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | | `_FinancialObject` | `SecurityAccount` | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | | `_FinancialObject` | `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | | `_FinancialObject` | `FinancialExposurePosition` | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | | `_FinancialObject` | `LoanContract` | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | | `_FinancialObject` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | | `_FinancialObject` | `MktRiskCharacteristicCurrency` | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | | `_FinancialObject` | `Country` | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | | `_FinancialObject` | `FinancialInstrCharacteristic` | `CHAR(25)` | Characteristics |
| `NetPresentValueSign` |  | |  |  | `CHAR(1)` | Sign of Net Present Value |
| `NetPresentValueInEvalCrcy` |  | |  |  | `CURR(23)` | Net Present Value in Evaluation Currency |
| `NetPresentValueInDisplayCrcy` |  | |  | `cast(currency_conversion( amount => NetPresentValueInEvalCrcy, source_currency => EvaluationCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType, error_handling => 'SET_TO_NULL') as ftr_mra_npv_in_dspcrcy preserving type )` | `CURR(23)` | Net Present Value in Display Currency |
| `NetPresentValue` |  | |  |  | `FLTP(16)` | Net Present Value |
| `DurationNetPresentValue` |  | |  |  | `FLTP(16)` | Net Present Value Used for Duration Calculation |
| `CleanPriceAmountInEvalCrcy` |  | |  |  | `CURR(23)` | Clean Price in Evaluation Currency |
| `CleanPriceAmountInDisplayCrcy` |  | |  | `cast(currency_conversion( amount => CleanPriceAmountInEvalCrcy, source_currency => EvaluationCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType, error_handling => 'SET_TO_NULL') as ftr_mra_cleanprice_in_dspcrcy preserving type )` | `CURR(23)` | Clean Price in Display Currency |
| `NgtvIntRateShiftNetPresentVal` |  | |  |  | `FLTP(16)` | Net Present Value of Symmetric Negative Interest Rate Shift |
| `PstvIntRateShiftNetPresentVal` |  | |  |  | `FLTP(16)` | Net Present Value of Symmetric Positive Interest Rate Shift |
| `BasePointValueAmountInEvalCrcy` |  | |  |  | `CURR(23)` | Basis Point Value in Evaluation Currency |
| `BasePointValueAmountInDspCrcy` |  | |  | `cast(currency_conversion( amount => BasePointValueAmountInEvalCrcy, source_currency => EvaluationCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType, error_handling => 'SET_TO_NULL') as ftr_mra_basepointvalue_in_dc preserving type )` | `CURR(23)` | Basis Point Value in Display Currency |
| `MacaulayDurnWgtdNetPresentVal` |  | |  |  | `FLTP(16)` |  |
| `ModifiedDurnWgtdNetPresentVal` |  | |  |  | `FLTP(16)` |  |
| `OptionDeltaValue` |  | |  |  | `FLTP(16)` | Option Delta |
| `YieldToMaturityRate` |  | |  |  | `FLTP(16)` | Yield to Maturity |
| `NumberOfRecords` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `EvaluationCurrency` |  | |  |  | `CUKY(5)` | Evaluation Currency |
| `DisplayCurrency` |  | |  | `cast( $parameters.P_DisplayCurrency as vdm_v_display_currency preserving type )` | `CUKY(5)` | Display Currency |
| `_KeyFigureSet` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_ValidityDate` | | ✓ | | | | |
| `_FinancialObject` | | ✓ | | | | |
| `_EvaluationCurrency` | | ✓ | | | | |
| `_CalcParam` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KeyFigureSet` | `I_TrsyMktRskKeyFigureSet` | [1..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_ValidityDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'ITRSYMRKFVALC',
                compiler.compareFilter: true,
                preserveKey:            true }

@AccessControl: { authorizationCheck:    #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { usageType.dataClass:      #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #XL,
                representativeKey:        'TreasuryFinancialObject',
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_CUBE  }

@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Treasury Market Risk Key Figure Value - Cube'

define view I_TrsyMktRskKeyFigValueCube with parameters
    P_DisplayCurrency      : vdm_v_display_currency,
    P_ExchangeRateType     : kurst
  as select from I_TrsyMktRskKeyFigValue
  association [1..1] to I_TrsyMktRskKeyFigureSet as _KeyFigureSet on _KeyFigureSet.MarketRiskKeyFigureSet = $projection.MarketRiskKeyFigureSet
  association [1..1] to I_Currency as _DisplayCurrency on $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_CalendarDate as _ValidityDate on $projection.ValidityDate = _ValidityDate.CalendarDate
{
      @ObjectModel.foreignKey.association: '_ValidityDate'
  key ValidityDate,
      @ObjectModel.foreignKey.association: '_KeyFigureSet'  
  key MarketRiskKeyFigureSet,
      @ObjectModel.foreignKey.association: '_FinancialObject'  
  key TreasuryFinancialObject, 
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _FinancialObject.CompanyCode, 
      @ObjectModel.foreignKey.association: '_ContractType'
      _FinancialObject.TreasuryContractType, 
      @ObjectModel.foreignKey.association: '_ProductCategory'
      _FinancialObject.FinancialInstrProductCategory, 
      @ObjectModel.foreignKey.association: '_ProductType'
      _FinancialObject.FinancialInstrumentProductType, 
      @ObjectModel.foreignKey.association: '_Portfolio'
      _FinancialObject.Portfolio, 
      _FinancialObject.FinancialTransaction, 
      @ObjectModel.foreignKey.association: '_SecurityClass'
      _FinancialObject.SecurityClass, 
      @ObjectModel.foreignKey.association: '_SecurityAccount'
      _FinancialObject.SecurityAccount,
      _FinancialObject.TreasuryPositionAccount,
      _FinancialObject.FinancialExposurePosition,
      _FinancialObject.LoanContract,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      _FinancialObject.BusinessPartner, 
      @ObjectModel.foreignKey.association: '_CharacteristicCurrency'
      _FinancialObject.MktRiskCharacteristicCurrency,  
      @ObjectModel.foreignKey.association: '_Country'
      _FinancialObject.Country, 
      _FinancialObject.FinancialInstrCharacteristic, 
      NetPresentValueSign,
      
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      NetPresentValueInEvalCrcy,
      
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      cast(currency_conversion( amount             => NetPresentValueInEvalCrcy,
                                source_currency    => EvaluationCurrency,
                                target_currency    => $parameters.P_DisplayCurrency,
                                exchange_rate_date => ValidityDate,
                                exchange_rate_type => $parameters.P_ExchangeRateType,
                                error_handling     => 'SET_TO_NULL') as ftr_mra_npv_in_dspcrcy preserving type )   as NetPresentValueInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      NetPresentValue,

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      DurationNetPresentValue,

      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      CleanPriceAmountInEvalCrcy,
      
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      cast(currency_conversion( amount             => CleanPriceAmountInEvalCrcy,
                                source_currency    => EvaluationCurrency,
                                target_currency    => $parameters.P_DisplayCurrency,
                                exchange_rate_date => ValidityDate,
                                exchange_rate_type => $parameters.P_ExchangeRateType,
                                error_handling     => 'SET_TO_NULL') as ftr_mra_cleanprice_in_dspcrcy preserving type )   as CleanPriceAmountInDisplayCrcy,
      

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      NgtvIntRateShiftNetPresentVal,

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      PstvIntRateShiftNetPresentVal,

      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      BasePointValueAmountInEvalCrcy,
      
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      cast(currency_conversion( amount             => BasePointValueAmountInEvalCrcy,
                                source_currency    => EvaluationCurrency,
                                target_currency    => $parameters.P_DisplayCurrency,
                                exchange_rate_date => ValidityDate,
                                exchange_rate_type => $parameters.P_ExchangeRateType,
                                error_handling     => 'SET_TO_NULL') as ftr_mra_basepointvalue_in_dc preserving type )   as BasePointValueAmountInDspCrcy,

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      MacaulayDurnWgtdNetPresentVal,

      @DefaultAggregation: #SUM
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      ModifiedDurnWgtdNetPresentVal,

      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']
      OptionDeltaValue,
    
      @Aggregation.exception: #NHA
      @Aggregation.referenceElement: ['MarketRiskKeyFigureSet']      
      YieldToMaturityRate,
     
//      @Consumption.hidden: true // would be needed in case we cast OptionDeltaValue to DEC-type ftr_mra_optiondelta in Query
//      fltp_to_dec( 0.0 as ftr_mra_keyfig_zero_value ) as MarketRiskKeyFigureZeroValue,

      @Consumption.hidden: true
      @DefaultAggregation: #SUM
      cast( 1 as abap.int4 ) as NumberOfRecords,

      @Semantics.currencyCode: true
      EvaluationCurrency,  
      
      @Semantics.currencyCode: true
      cast( $parameters.P_DisplayCurrency as vdm_v_display_currency preserving type )                              as DisplayCurrency, 

      /* Associations */
      _KeyFigureSet,
      _FinancialObject,
      _EvaluationCurrency, 
      _DisplayCurrency, 
      _ValidityDate,
      _CalcParam,
      _FinancialObject._CompanyCode,
      _FinancialObject._ProductCategory,
      _FinancialObject._Portfolio,
      _FinancialObject._ContractType,
      _FinancialObject._ProductType,
      _FinancialObject._SecurityClass,
      _FinancialObject._SecurityAccount,
      _FinancialObject._BusinessPartner,
      _FinancialObject._CharacteristicCurrency,
      _FinancialObject._Country 
}
```
