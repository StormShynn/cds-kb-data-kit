---
name: C_FINANCIALSTATUSQUERY
description: "You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY')/$value
semantic_en: "You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency?"
semantic_vi: "Financial Status Query — CDS view tiêu dùng dựa trên I_FinancialStatusCube."
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
---
# C_FINANCIALSTATUSQUERY

**You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY')/$value) |

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
| `CommitmentBusinessPartner` |  | |  |  | `CHAR(10)` | Partner with Whom Commitment Exists |
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
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BankInBankGroup` |  | |  |  | `CHAR(10)` | Bank In Bank Group |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `TrsyPosCustomDiffntnTerm1` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 1 (Value) |
| `TrsyPosCustomDiffntnTerm2` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 2 (Value) |
| `TrsyPosCustomDiffntnTerm3` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 3 (Value) |
| `TrsyPosCustomDiffntnTerm4` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 4 (Value) |
| `TrsyPosCustomDiffntnTerm5` |  | |  |  | `CHAR(20)` | Custom Differentiation Term 5 (Value) |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DisplayCurrency` |  | |  | `cast (:P_DisplayCurrency as fxm_group_currency preserving type)` | `CUKY(5)` | Display Currency |
| `BookValueAmountInDC` |  | |  | `cast( currency_conversion( amount => BookValueAmtInPositionCurrency, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_book_val_dc preserving type )` | `CURR(23)` | Book Value in Display Currency |
| `NominalAmountInDisplayCurrency` |  | |  | `cast( currency_conversion( amount => NominalAmountInNominalCurrency, source_currency => NominalCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_nominal_amount_dc preserving type )` | `CURR(23)` | Nominal Amount in Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  | `cast( currency_conversion( amount => TotalAmountInTransactionCrcy, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_totamtinrepcrcy preserving type )` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` |  | |  | `cast( currency_conversion( amount => UtilizedAmountInTransCrcy, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType ) as ftr_utilamtinrepcrcy preserving type )` | `CURR(17)` | Utilized Amount in Display Currency |
| `FreeCreditLineAmtInDspCrcy` |  | |  | `cast(0 as ftr_availamtinrepcrcy)` | `CURR(17)` | Available Amount in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY')/$value)*

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CFINPOSQX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.query: true
@EndUserText.label: 'Financial Status Query'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName: #LOCAL
// ABAP exit implementation
define view C_FinancialStatusQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_key_date,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst

  as select from I_FinancialStatusCube( P_KeyDate: :P_KeyDate )

{

  //Row dimensions
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  CompanyCode,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  Country,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  CompanyCodeIsTreasuryCenter,


  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
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
  @AnalyticsDetails.query.totals: #SHOW
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

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CommitmentBusinessPartner,

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

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  BankGroup,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  BankInBankGroup,

  //@AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  Fund,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  FundType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantID,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  CostCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  WBSElementExternalID,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  FunctionalArea,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  TrsyPosCustomDiffntnTerm1,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  TrsyPosCustomDiffntnTerm2,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  TrsyPosCustomDiffntnTerm3,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  TrsyPosCustomDiffntnTerm4,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  TrsyPosCustomDiffntnTerm5,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.totals: #HIDE
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.totals: #HIDE
  cast (:P_DisplayCurrency as fxm_group_currency preserving type)                                                as DisplayCurrency,

  //Column dimensions - Amounts showed by default

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
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_fs_nominal_amount_dc preserving type ) as NominalAmountInDisplayCurrency,


  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => TotalAmountInTransactionCrcy,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_totamtinrepcrcy  preserving type )     as TotalAmountInDisplayCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => UtilizedAmountInTransCrcy,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_utilamtinrepcrcy  preserving type )    as UtilizedAmountInDisplayCrcy,

  @DefaultAggregation: #FORMULA
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @AnalyticsDetails.query.formula: '$projection.TotalAmountInDisplayCrcy - $projection.UtilizedAmountInDisplayCrcy'
  cast(0 as ftr_availamtinrepcrcy)                                                                               as FreeCreditLineAmtInDspCrcy

}
```
