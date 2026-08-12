---
name: C_FINANCIALPOSITIONQUERY
description: "You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value
semantic_en: "You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?"
semantic_vi: "Financial Status Query — CDS view tiêu dùng dựa trên I_FinancialPositionCube."
keywords:
  - "financial"
  - "status"
  - "query"
  - "company"
  - "code"
  - "country"
  - "treasury"
  - "center"
  - "sort"
  - "sequence"
  - "position"
  - "asset"
  - "liability"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
---
# C_FINANCIALPOSITIONQUERY

**You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CompanyCodeIsTreasuryCenter` |  | |  |  | `CHAR(1)` | Treasury Center Indicator |
| `TreasuryCenterSortSequenceVal` |  | |  |  | `INT2(5)` | Treasury Center Ranking |
| `FinPositionAssetLiabilityCode` |  | |  |  | `CHAR(1)` | Assets or Liabilities |
| `FinancialPositionGroup` |  | |  |  | `CHAR(20)` | Financial Position Group |
| `FinancialPosition` |  | |  |  | `CHAR(20)` | Financial Position |
| `FinancialPositionDataSource` |  | |  |  | `CHAR(35)` | Data Source |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Issuer` |  | |  |  | `CHAR(10)` | Issuer Identity Key |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `TreasuryValuationClass` |  | |  |  | `NUMC(4)` | Valuation Class |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryValuationArea` |  | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DisplayCurrency` |  | |  | `cast (:P_DisplayCurrency as fxm_group_currency preserving type)` | `CUKY(5)` | Display Currency |
| `AmountInTransactionCurrency` |  | |  | `BookValueAmtInPositionCurrency` | `CURR(23)` |  |
| `BookValueAmountInDC` |  | |  | `cast( currency_conversion( amount => BookValueAmtInPositionCurrency, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_book_val_dc preserving type )` | `CURR(23)` | Book Value in Display Currency |
| `NominalAmountInDisplayCurrency` |  | |  | `cast( currency_conversion( amount => NominalAmountInNominalCurrency, source_currency => NominalCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_nominal_amount_dc preserving type )` | `CURR(23)` | Nominal Amount in Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast( currency_conversion( amount => BookValueAmtInPositionCurrency, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_gen_fin_pos_amt_rc preserving type )` | `CURR(23)` | Financial Position Amount in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value)*

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.sqlViewName: 'CFINPOSQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.query: true
@EndUserText.label: 'Financial Status Query'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName: #LOCAL 
define view C_FinancialPositionQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate           : vdm_v_key_date,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType  : kurst

  as select from I_FinancialPositionCube( P_KeyDate: :P_KeyDate )
    
{ 
 
  //Row dimensions
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  CompanyCode,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  Country,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  CompanyCodeIsTreasuryCenter,


  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  TreasuryCenterSortSequenceVal,


  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  FinPositionAssetLiabilityCode,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #TEXT
  FinancialPositionGroup,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #TEXT
  FinancialPosition,
  
  //Free dimensions
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialPositionDataSource,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBank,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBankAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessArea,  
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @Consumption.semanticObject: 'Issuer'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Issuer,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @Consumption.semanticObject: 'Counterparty'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Counterparty,
 
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialInstrumentProductType,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialInstrTransactionType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialTransaction,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  TreasuryValuationClass,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Portfolio,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @Consumption.semanticObject: 'SecurityAccount'
  @AnalyticsDetails.query.display: #KEY_TEXT
  SecurityAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @Consumption.semanticObject: 'SecurityClass'
  @AnalyticsDetails.query.display: #KEY_TEXT
  SecurityClass,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @Consumption.semanticObject: 'TreasuryPositionAccount'
  @AnalyticsDetails.query.display: #KEY_TEXT
  TreasuryPositionAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  TreasuryValuationArea,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Ledger,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FiscalYear,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocumentType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocument,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.totals: #HIDE 
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.totals: #HIDE 
  cast (:P_DisplayCurrency as fxm_group_currency preserving type)                                        as DisplayCurrency,

  //Column dimensions - Amounts showed by default
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.totals: #SHOW
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @DefaultAggregation: #SUM
  BookValueAmtInPositionCurrency                    as AmountInTransactionCurrency,
  
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => BookValueAmtInPositionCurrency,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_book_val_dc preserving type )       as BookValueAmountInDC,
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => NominalAmountInNominalCurrency,
                       source_currency => NominalCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_nominal_amount_dc preserving type )       as NominalAmountInDisplayCurrency,  
  
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => BookValueAmtInPositionCurrency,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_gen_fin_pos_amt_rc preserving type )       as AmountInDisplayCurrency
                      
                      }
```
