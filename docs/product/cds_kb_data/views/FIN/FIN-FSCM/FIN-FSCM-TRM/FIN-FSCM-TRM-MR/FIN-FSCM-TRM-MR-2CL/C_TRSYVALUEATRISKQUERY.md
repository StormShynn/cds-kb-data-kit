---
name: C_TRSYVALUEATRISKQUERY
description: "This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value
semantic_en: "This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?"
semantic_vi: "Treasury Value At Risk Query — CDS view tiêu dùng dựa trên I_TrsyValueAtRiskCube."
keywords:
  - "treasury"
  - "value"
  - "risk"
  - "query"
  - "validity"
  - "date"
  - "financial"
  - "object"
  - "market"
  - "figure"
  - "company"
  - "code"
  - "contract"
  - "type"
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
---
# C_TRSYVALUEATRISKQUERY

**This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValidityDate` | ✓ | |  |  | `DATS(8)` | Key Date in Results Databases |
| `TreasuryFinancialObject` | ✓ | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `MarketRiskKeyFigureSet` | ✓ | |  |  | `CHAR(6)` | Market Risk Key Figure Set |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | |  |  | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | |  |  | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | |  |  | `CHAR(25)` | Characteristics |
| `ValueAtRiskInDisplayCurrency` |  | |  | `cast(currency_conversion( amount => ValueAtRiskInEvaluationCrcy, source_currency => EvaluationCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_mra_var_in_dspcrcy preserving type )` | `CURR(23)` | Value at Risk in Display Currency |
| `MeanExcessLossAmtInDisplayCrcy` |  | |  | `cast(currency_conversion( amount => MeanExcessLossAmtInEvalCrcy, source_currency => EvaluationCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_mra_mel_in_dspcrcy preserving type )` | `CURR(23)` | Mean Excess Loss in Display Currency |
| `DisplayCurrency` |  | |  | `cast( $parameters.P_DisplayCurrency as vdm_v_display_currency preserving type )` | `CUKY(5)` | Display Currency |
| `ValueAtRiskInEvaluationCrcy` |  | |  | `cast( ValueAtRiskInEvaluationCrcy as ftr_mra_var_in_evalcrcy preserving type )` | `CURR(23)` | Value at Risk in Evaluation Currency |
| `MeanExcessLossAmtInEvalCrcy` |  | |  | `cast( MeanExcessLossAmtInEvalCrcy as ftr_mra_mel_in_evalcrcy preserving type )` | `CURR(23)` | Mean Excess Loss in Evaluation Currency |
| `EvaluationCurrency` |  | |  |  | `CUKY(5)` | Evaluation Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'CTRVARQ',
                compiler.compareFilter: true,
                preserveKey:            true }

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
                modelingPattern: #ANALYTICAL_QUERY  }

@OData.publish: true

@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Treasury Value At Risk Query'
define view C_TrsyValueAtRiskQuery
  with parameters
    @Consumption.defaultValue: '95.0'
    P_ConfidenceLevelInPercent  : ftr_mra_confidence_level,
    @Environment.systemField: #SYSTEM_DATE
    P_ValidityDate     : vdm_v_key_date, 
    P_DisplayCurrency  : vdm_v_display_currency,
    //@Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst
  as select from I_TrsyValueAtRiskCube( P_ConfidenceLevelInPercent :  $parameters.P_ConfidenceLevelInPercent )
{
  key ValidityDate,
  key TreasuryFinancialObject,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT      
      @Consumption.filter: { selectionType:   #RANGE  ,
                          multipleSelections:  true,
                          mandatory:          false,
                          hidden:             false }
  key MarketRiskKeyFigureSet,     
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
      FinancialTransaction,
      SecurityClass,
      SecurityAccount,
      TreasuryPositionAccount,
      FinancialExposurePosition,
      LoanContract,
      BusinessPartner,
      MktRiskCharacteristicCurrency,
      Country,
      FinancialInstrCharacteristic,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(currency_conversion(   amount             => ValueAtRiskInEvaluationCrcy,
                                  source_currency    => EvaluationCurrency,
                                  target_currency    => $parameters.P_DisplayCurrency,
                                  exchange_rate_date => ValidityDate,
                                  exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_mra_var_in_dspcrcy preserving type ) as ValueAtRiskInDisplayCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(currency_conversion(   amount             => MeanExcessLossAmtInEvalCrcy,
                                  source_currency    => EvaluationCurrency,
                                  target_currency    => $parameters.P_DisplayCurrency,
                                  exchange_rate_date => ValidityDate,
                                  exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_mra_mel_in_dspcrcy preserving type ) as MeanExcessLossAmtInDisplayCrcy,                            
      cast( $parameters.P_DisplayCurrency as vdm_v_display_currency preserving type )                                                as DisplayCurrency,
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      cast(  ValueAtRiskInEvaluationCrcy as ftr_mra_var_in_evalcrcy preserving type )                                                as ValueAtRiskInEvaluationCrcy,
      @Semantics.amount.currencyCode: 'EvaluationCurrency'
      cast(  MeanExcessLossAmtInEvalCrcy as ftr_mra_mel_in_evalcrcy preserving type )                                                as MeanExcessLossAmtInEvalCrcy,
      EvaluationCurrency
}
where
  ValidityDate = $parameters.P_ValidityDate
```
