---
name: C_TRSYMKTRSKKEYFIGVALUEQRY
description: "This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume."
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value
semantic_en: "This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume."
semantic_vi: "Treasury Market Risk Key Figure Value Query — CDS view tiêu dùng dựa trên I_TrsyMktRskKeyFigValueCube."
keywords:
  - "treasury"
  - "market"
  - "risk"
  - "key"
  - "figure"
  - "value"
  - "query"
  - "validity"
  - "date"
  - "financial"
  - "object"
  - "transaction"
  - "company"
  - "code"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-MR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-MR
  - FIN-FSCM-TRM-MR-2CL
  - lob:finance
  - product
  - transaction
---
# C_TRSYMKTRSKKEYFIGVALUEQRY

**This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarketRiskKeyFigureSet` | ✓ | |  |  | `CHAR(6)` | Market Risk Key Figure Set |
| `ValidityDate` | ✓ | |  |  | `DATS(8)` | Key Date in Results Databases |
| `TreasuryFinancialObject` | ✓ | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | |  |  | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | |  |  | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | |  |  | `CHAR(25)` | Characteristics |
| `NetPresentValueSign` |  | |  |  | `CHAR(1)` | Sign of Net Present Value |
| `NetPresentValueInDisplayCrcy` |  | |  | `cast( 0 as ftr_mra_npv_in_dspcrcy )` | `CURR(23)` | Net Present Value in Display Currency |
| `CleanPriceAmountInDisplayCrcy` |  | |  | `cast( 0 as ftr_mra_cleanprice_in_dspcrcy )` | `CURR(23)` | Clean Price in Display Currency |
| `BasePointValueAmountInDspCrcy` |  | |  | `cast( 0 as ftr_mra_basepointvalue_in_dc )` | `CURR(23)` | Basis Point Value in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NetPresentValueInEvalCrcy` |  | |  | `cast( 0 as ftr_mra_npv_in_evalcrcy )` | `CURR(23)` | Net Present Value in Evaluation Currency |
| `CleanPriceAmountInEvalCrcy` |  | |  | `cast( 0 as ftr_mra_cleanprice_in_evalcrcy )` | `CURR(23)` | Clean Price in Evaluation Currency |
| `BasePointValueAmountInEvalCrcy` |  | |  | `cast( 0 as ftr_mra_basepointvalue_in_ec )` | `CURR(23)` | Basis Point Value in Evaluation Currency |
| `EvaluationCurrency` |  | |  |  | `CUKY(5)` | Evaluation Currency |
| `MktRskKeyFigMacaulayDuration` |  | |  | `cast( 0 as ftr_mra_macaulay_duration_fltp )` | `FLTP(16)` | Macaulay Duration |
| `MktRskKeyFigModifiedDuration` |  | |  | `cast( 0 as ftr_mra_modified_duration_fltp )` | `FLTP(16)` | Modified Duration |
| `MktRskKeyFigFisherWeilDuration` |  | |  | `cast( 0 as ftr_mra_fisherweilduration )` | `FLTP(16)` | Fisher-Weil Duration Value |
| `NetPresentValueConvexityValue` |  | |  | `cast( 0 as ftr_mra_convexity )` | `FLTP(16)` | Convexity |
| `OptionDeltaValue` |  | |  | `cast( case NumberOfRecords when 1 then OptionDeltaValue else 0.0 end as ftr_mra_option_delta_fltp preserving type )` | `FLTP(16)` | Option Delta |
| `YieldToMaturityRate` |  | |  | `cast( case NumberOfRecords when 1 then YieldToMaturityRate else 0.0 end as ftr_mra_yieldtomaturity_fltp preserving type )` | `FLTP(16)` | Yield to Maturity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'CTRSYMRKFVALQ',
                compiler.compareFilter: true }

@AccessControl: { authorizationCheck:    #PRIVILEGED_ONLY,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { query:        true,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:             false,
             ignorePropagatedAnnotations: true }

@ObjectModel: { usageType.dataClass:      #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #XL,
                supportedCapabilities: [ #ANALYTICAL_QUERY  ],
                modelingPattern: #ANALYTICAL_QUERY }

@OData.publish: true
@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Treasury Market Risk Key Figure Value Query'

define view C_TrsyMktRskKeyFigValueQry
  with parameters
    //@Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    //@Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst

  as select from I_TrsyMktRskKeyFigValueCube( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                              P_ExchangeRateType : $parameters.P_ExchangeRateType   )
{

      @Consumption.filter: { selectionType:      #INTERVAL,
                             multipleSelections: true,
                             mandatory:          false,
                             hidden:             false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
  key MarketRiskKeyFigureSet,

      @Consumption.filter: { selectionType:      #INTERVAL,
                           multipleSelections: false,
                           mandatory:          true,
                           hidden:             false }
      @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                                 resultElement:     'ShiftedCalendarDate',
                                 resultElementHigh: 'CalendarDate',
                                 binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '-3' },
                                            { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'M' },
                                            { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
      @AnalyticsDetails.query.axis: #ROWS
  key ValidityDate,
      // We need the FO number 
      //  1. to guarantee a stable key for the C1-released query even in case of addition of new analysis characteristics
      //  2. to allow for drilldown: in particular, OptionDelta and YieldToMaturity are only defined on single record level
      // However, customers with large number of FOs must be very cautious regarding performance and data volume when using this characteristic!
  key TreasuryFinancialObject,
      // also performance critical, but if we expose the FinancialObject, it makes no sense to hide the FinancialTransaction
      FinancialTransaction,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      TreasuryContractType,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialInstrProductCategory,
      FinancialInstrumentProductType,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      Portfolio, 
      SecurityClass,
      SecurityAccount,
      TreasuryPositionAccount,
      FinancialExposurePosition,
      LoanContract,
      BusinessPartner,
      MktRiskCharacteristicCurrency,
      Country,
      FinancialInstrCharacteristic,
      NetPresentValueSign,

      --  Net Present Value
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'NetPresentValueInDisplayCrcy'
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( 0 as ftr_mra_npv_in_dspcrcy )                                                                                                           as NetPresentValueInDisplayCrcy,

      -- Clean Price
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'CleanPriceAmountInDisplayCrcy'
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( 0 as ftr_mra_cleanprice_in_dspcrcy )                                                                                                    as CleanPriceAmountInDisplayCrcy,

      -- Base Point Shift
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'BasePointValueAmountInDspCrcy'
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( 0 as ftr_mra_basepointvalue_in_dc )                                                                                                     as BasePointValueAmountInDspCrcy,

      @Semantics.currencyCode: true
      DisplayCurrency,
      
      --  Net Present Value
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'NetPresentValueInEvalCrcy'
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      cast( 0 as ftr_mra_npv_in_evalcrcy )                                                                                                          as NetPresentValueInEvalCrcy,

      -- Clean Price
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'CleanPriceAmountInEvalCrcy'
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      cast( 0 as ftr_mra_cleanprice_in_evalcrcy )                                                                                                   as CleanPriceAmountInEvalCrcy,

      -- Base Point Shift
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'BasePointValueAmountInEvalCrcy'
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      cast( 0 as ftr_mra_basepointvalue_in_ec )                                                                                                     as BasePointValueAmountInEvalCrcy,

      EvaluationCurrency,

      -- Macaulay Duration
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'ndiv0( MacaulayDurnWgtdNetPresentVal / DurationNetPresentValue )'
      cast( 0 as ftr_mra_macaulay_duration_fltp )                                                                                                   as MktRskKeyFigMacaulayDuration,

      -- Modified Duration
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'ndiv0( ModifiedDurnWgtdNetPresentVal / DurationNetPresentValue )'
      cast( 0 as ftr_mra_modified_duration_fltp )                                                                                                   as MktRskKeyFigModifiedDuration,

      -- Fisher-Weil-Duration
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'ndiv0( 10000.0 * ( NgtvIntRateShiftNetPresentVal - PstvIntRateShiftNetPresentVal ) / ( 2.0 * NetPresentValue ) )'
      cast( 0 as ftr_mra_fisherweilduration  )                                                                                                      as MktRskKeyFigFisherWeilDuration,

      -- Convexity
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      @AnalyticsDetails.query.formula: 'ndiv0( 1000000.0 * ( NgtvIntRateShiftNetPresentVal + PstvIntRateShiftNetPresentVal - 2.0 * NetPresentValue ) / NetPresentValue )'
      cast( 0 as ftr_mra_convexity  )                                                                                                               as NetPresentValueConvexityValue,

      --- Option Delta (Greeks)
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      cast( case NumberOfRecords when 1 then OptionDeltaValue else 0.0 end as ftr_mra_option_delta_fltp preserving type )                           as OptionDeltaValue,
  
      --- Yield to Maturity
      @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior:#LAST , exceptionAggregationElements: [ 'ValidityDate' ]  }] 
      cast( case NumberOfRecords when 1 then YieldToMaturityRate else 0.0 end as ftr_mra_yieldtomaturity_fltp preserving type )                     as YieldToMaturityRate                                                                                      


}
```
