---
name: C_FINANCIALSTATUSQUERY_2
description: "You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value
semantic_en: "You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Financial Status 2 — CDS view tiêu dùng dựa trên I_FinancialStatusCube."
keywords:
  - "financial"
  - "status"
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
# C_FINANCIALSTATUSQUERY_2

**You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value)*

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.sqlViewName: 'CFINPQXLF'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true  
@Analytics.query: true
@EndUserText.label: 'Financial Status 2'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName: #LOCAL 
// ABAP exit implementation
define view C_FinancialStatusQuery_2
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate           : vdm_v_key_date,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType  : kurst

  as select from I_FinancialStatusCube( P_KeyDate: :P_KeyDate )
    
{   //Row dimensions

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  CompanyCode,  
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  Country,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY 
  CompanyCodeIsTreasuryCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  TreasuryCenterSortSequenceVal,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  FinPositionAssetLiabilityCode,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #TEXT
  FinancialPositionGroup,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #TEXT
  FinancialPosition,
  
  //Free dimensions
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialPositionDataSource,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBank,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  HouseBankAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessArea,  
  
  @Consumption.semanticObject: 'Issuer'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Issuer,
  
  @Consumption.semanticObject: 'Counterparty'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Counterparty,
 
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialInstrumentProductType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialInstrTransactionType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialTransaction,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  TreasuryValuationClass,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Portfolio,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @Consumption.semanticObject: 'SecurityAccount'
  @AnalyticsDetails.query.display: #KEY_TEXT
  SecurityAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @Consumption.semanticObject: 'SecurityClass'
  @AnalyticsDetails.query.display: #KEY_TEXT
  SecurityClass,

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
  cast( currency_conversion( amount => TotalAmountInTransactionCrcy,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_totamtinrepcrcy  preserving type )       as TotalAmountInDisplayCrcy,
                       
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount => UtilizedAmountInTransCrcy,
                       source_currency => TransactionCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType ) as ftr_utilamtinrepcrcy  preserving type )     as UtilizedAmountInDisplayCrcy,
                       
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'DisplayCurrency'
@AnalyticsDetails.query.formula: '$projection.TotalAmountInDisplayCrcy - $projection.UtilizedAmountInDisplayCrcy' 
cast(0 as ftr_availamtinrepcrcy) as FreeCreditLineAmtInDspCrcy }
```
