---
name: C_LIQUIDITYPOSITIONQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?"
semantic_vi: "Cash Position and Liquidity Forecast Query — CDS view tiêu dùng dựa trên I_LiquidityPositionCube."
keywords:
  - "cash"
  - "position"
  - "and"
  - "liquidity"
  - "forecast"
  - "query"
  - "company"
  - "code"
  - "transaction"
  - "date"
  - "financial"
  - "data"
  - "source"
  - "bank"
  - "account"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_LIQUIDITYPOSITIONQUERY

**This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionDate` |  | |  |  | `DATS(8)` | Key Date |
| `FinancialPositionDataSource` |  | |  |  | `CHAR(10)` | Data Source of Liquidity Position |
| `BankAccount` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `Bank` |  | |  |  | `CHAR(15)` |  |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `LiquidityItem` |  | |  |  | `CHAR(16)` | Liquidity Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DisplayCurrency` |  | |  | `cast (:P_DisplayCurrency as vdm_v_display_currency preserving type)` | `CUKY(5)` | Display Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` |  |
| `AmountInDisplayCurrency` |  | |  | `currency_conversion( amount => AmountInTransactionCurrency, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_KeyDate )` | `CURR(23)` |  |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LIQUIDITYPOSITIONQUERY')/$value)*

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #XXL
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.sqlViewName: 'CLPOSQ'
@OData.publish: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:   #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true  
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'Cash Position and Liquidity Forecast Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_LiquidityPositionQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate           : vdm_v_key_date,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType  : kurst,
    @Consumption.defaultValue: 'CP_GEN'
--    P_CashPoolBalCalcPrfl : fclm_balc_prof_name,
    P_CashPoolBalCalcPrfl   : fclm_cashpool_prf_name,
    @Consumption.defaultValue: 'CP_GEN'
--    P_ForecastCalcPrfl : fclm_balc_prof_name
    P_ForecastCalcPrfl      : fclm_forecast_prf_name

as select from I_LiquidityPositionCube( P_KeyDate: :P_KeyDate, P_CashPoolBalCalcPrfl: :P_CashPoolBalCalcPrfl, P_ForecastCalcPrfl: :P_ForecastCalcPrfl) 
{
  // Row dimensions
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  @EndUserText.label: 'Company Code'
  CompanyCode,

 
//  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.totals: #HIDE
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  HouseBank,
  // Free dimensions
  
  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Transaction Date'
  TransactionDate,

  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Financial Position DataSource'
  FinancialPositionDataSource,

  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Bank Account'
  BankAccount,
 
  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT   
  @EndUserText.label: 'Bank Key' 
  Bank,
  
  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Bank Country/Region' 
  BankCountry,
    
  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Liquidity Item'
  LiquidityItem,

  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.totals: #HIDE 
  @EndUserText.label: 'Transaction Currency'
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.totals: #HIDE 
  @EndUserText.label: 'Display Currency'
  cast (:P_DisplayCurrency as vdm_v_display_currency preserving type)                                        as DisplayCurrency,

  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @EndUserText.label: 'Transaction Currency'
  AmountInTransactionCurrency,

--  @Semantics.amount.currencyCode: 'DisplayCurrency'
  currency_conversion( amount => AmountInTransactionCurrency,
                       source_currency => TransactionCurrency,
                       target_currency => $parameters.P_DisplayCurrency,
                       exchange_rate_type => $parameters.P_ExchangeRateType,
                       exchange_rate_date => $parameters.P_KeyDate ) as AmountInDisplayCurrency,
 -- cast( as ftr_gen_fin_pos_amt_rc preserving type )                      
 
  //@Consumption.hidden: true
  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Bank Account Description'
  BankAccountDescription
    
}
```
