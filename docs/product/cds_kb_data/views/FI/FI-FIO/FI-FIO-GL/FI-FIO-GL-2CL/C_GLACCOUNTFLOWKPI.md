---
name: C_GLACCOUNTFLOWKPI
description: "KPIs based on G/L Account Flow"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOWKPI')/$value
semantic_en: "KPIs based on G/L Account Flow"
semantic_vi: "KPIs based on G/L Account Flow — CDS view tiêu dùng dựa trên I_GLAccountFlowSemTag."
keywords:
  - "kpis"
  - "based"
  - "g/l"
  - "account"
  - "flow"
  - "hierarchy"
  - "ledger"
  - "company"
  - "code"
  - "planning"
  - "category"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FI
  - account
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_GLACCOUNTFLOWKPI

**KPIs based on G/L Account Flow**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOWKPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` |  |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountTypeFlowType` |  | |  |  | `CHAR(12)` | G/L Account Flow Type For G/L Account Type |
| `GLAccountFlowType` |  | |  |  | `CHAR(10)` | G/L Account Flow Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Global Currency |
| `WorkingCapitalAmtInGlobCrcy` |  | |  | `cast(0 as fis_wrkcptlamt_ksl)` | `CURR(23)` | Working Capital Amount in Global Currency |
| `WorkingCapitalGlobCrcyPercent` |  | |  | `cast(0 as fis_wrkcptlratio_ksl)` | `DEC(10)` | Working Capital Global Currency Percent |
| `CurrentAssetAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Current Asset Amount In Global Currency |
| `CurrentLiabilityAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Current Liability Amount in Global Currency |
| `ShEquityAmtInGlobCrcy` |  | |  | `cast(0 as fis_sheqtyamt_ksl)` | `CURR(23)` | Shareholder Equity Amount In Global Currency |
| `AssetAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Asset Amount in Global Currency |
| `LiabilityEquityAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Liability and Equity Amount In Global Currency |
| `OpgActyCashAmtInGlobCrcy` |  | |  | `cast (0 as fis_cashopg_ksl)` | `CURR(23)` | Operating Cash Flow Amount in Global Currency |
| `GrossMarginGlobCrcyPct` |  | |  | `cast (0 as fis_grossmargin_ksl)` | `DEC(23)` | Gross Margin Global Currency Percent |
| `OpgMargGlobCrcyPercent` |  | |  | `cast (0 as fis_operatingmargin_ksl)` | `DEC(23)` | Operating Margin Global Currency Percent |
| `ProfitMarginGlobCrcyPercent` |  | |  | `cast (0 as fis_profitmargin_ksl)` | `DEC(23)` | Profit Margin Global Currency Percent |
| `ReturnOnEquityGlobCrcyPct` |  | |  | `cast (0 as fis_returnonequity_ksl)` | `DEC(23)` | Return on Equity Global Currency Percent |
| `ReturnOnAssetGlobCrcyPercent` |  | |  | `cast (0 as fis_returnonasset_ksl)` | `DEC(23)` | Return on Asset Global Currency Percent |
| `RetOnInvestmentGlobCrcyPct` |  | |  | `cast (0 as fis_returnoninvest_ksl)` | `DEC(23)` | Return on Investment Global Currency Percent |
| `GrossProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_grossprofit_ksl)` | `CURR(23)` | Gross Profit Amount in Global Currency |
| `OpgProfitAmtInGlobCrcy` |  | |  | `cast (0 as fis_opgprofit_ksl)` | `CURR(23)` | Operating Profit Amount in Global Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost Of Goods Sold Amount In Global Currency |
| `GrossRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Gross Revenue Amount in Global Currency |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount In Global Currency |
| `AssetTurnoverGlobCrcyPercent` |  | |  | `cast (0 as fis_assetturnover_ksl)` | `DEC(23)` | Asset Turnover Global Currency Percent |
| `InvtryTurnoverGlobCrcyPct` |  | |  | `cast (0 as fis_invtryturnover_ksl)` | `DEC(23)` | Inventory Turnover Global Currency Percent |
| `EBTAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebt_ksl)` | `CURR(23)` | EBT Amount in Global Currency |
| `EBITAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebit_ksl)` | `CURR(23)` | EBIT Amount in Global Currency |
| `EBITDAAmountInGlobCrcy` |  | |  | `cast (0 as fis_ebitda_ksl)` | `CURR(23)` | EBITDA Amount in Global Currency |
| `NetIncomeAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Net Income Amount in Global Currency |
| `TotalOpgExpnInGlobCrcy` |  | |  | `cast (0 as fis_toperexp_ksl)` | `CURR(23)` | Total Operating Expense Amount in Global Currency |
| `OpgExpnInGlobCrcy` |  | |  |  | `CURR(23)` | Operating Expense Amount in Global Currency |
| `OthOpgExpnInGlobCrcy` |  | |  |  | `CURR(23)` | Other Operating Expense Amount in Global Currency |
| `StrtgInventoryAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Starting Inventory Amount in Global Currency |
| `ChgsInventoryAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes of Inventory Amount in Global Currency |
| `InventoryAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Inventory Amount in Global Currency |
| `IncomeTaxAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Income Tax Amount in Global Currency |
| `InterestAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Interest Amount in Global Currency |
| `TngblAstDeprAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Tangible Asset Depreciation Amount in Global Currency |
| `IntngblAssetAmtznAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Intangible Asset Amortization Amount in Global Currency |
| `FxdAssetRtrmtAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Fixed Asset Retirement Amount in Global Currency |
| `ChgsProvisionAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes Provision Amount in Global Currency |
| `ProvisionAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Provisions Amount in Global Currency |
| `ChgsAcctsRblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes of Accounts Receivable Amount in Global Currency |
| `AcctsRblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Accounts Receivable Amount in Global Currency |
| `ChgsAcctsOthRblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes of Accounts Other Receivable Amount in Global Crcy |
| `AcctsOthRblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Accounts Other Receivables Amount in Global Currency |
| `ChgsAcctsPyblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes of Accounts Payable Amount in Global Currency |
| `AcctsPyblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Accounts Payable Amount in Global Currency |
| `ChgsAcctsOthPyblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Changes of Accounts Other Payable Amount in Global Crcy |
| `AcctsOthPyblAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Accounts Other Payable Amount in Global Currency |
| `EBITDAMarginGlobCrcyPercent` |  | |  | `cast (0 as fis_ebitda_pct_ksl)` | `DEC(23)` | EBITDA Margin Global Currency Percent |
| `EBITMarginGlobCrcyPercent` |  | |  | `cast (0 as fis_ebit_pct_ksl)` | `DEC(23)` | EBIT Margin Global Currency Percent |
| `RetOnCptlEmployedGlobCrcyPct` |  | |  | `cast (0 as fis_returnoncapempl_ksl)` | `DEC(23)` | Return on Capital Employed Global Currency Percent |
| `DebtToEquityGlobCrcyPercent` |  | |  | `cast (0 as fis_debttoequity_ksl)` | `DEC(23)` | Debt to Equity Global Currency Percent |
| `DebtToAssetGlobCrcyPercent` |  | |  | `cast (0 as fis_debttoasset_ksl)` | `DEC(23)` | Debt to Asset Global Currency Percent |
| `InterestCoverageGlobCrcyPct` |  | |  | `cast (0 as fis_interestcov_ksl)` | `DEC(23)` | Interest Coverage Global Currency Percent |
| `DegOfFinLeverageGlobCrcyRatio` |  | |  | `cast(0 as fis_degoffinlevratio_ksl)` | `DEC(10)` | Degree of Financial Leverage Global Currency Ratio |
| `OpgIncomeAmtInGlobCrcy` |  | |  | `cast(0 as fis_opgincome_ksl)` | `CURR(23)` | Operating Income Amount In Global Currency |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOWKPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOWKPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIGLFLOWKPI'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'KPIs based on G/L Account Flow'

@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics.query: true
@OData.publish: true

//Anpassungen
@Metadata.allowExtensions: true
@AbapCatalog.preserveKey: true
@Analytics.settings.maxProcessingEffort: #HIGH
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY] 
                                     
define view C_GLAccountFlowKPI
  
  as select from I_GLAccountFlowSemTag as I_GLAccountFlowSemTag

{
  @AnalyticsDetails.query.variableSequence: 5
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccountHierarchy,

  @AnalyticsDetails.query.variableSequence: 10
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
  resultElement: 'Ledger', binding: [{ targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Ledger,

  @AnalyticsDetails.query.variableSequence: 25
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,

  @AnalyticsDetails.query.variableSequence: 30
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true , defaultValue: 'ACT01'   }
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #KEY_TEXT
  PlanningCategory,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: false, mandatory: true }
@Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate', 
    resultElement: 'FiscalYearPeriod', 
    binding: [
    { targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' },
    { targetElement : 'FiscalYearVariant' , type : #CONSTANT, value : 'K4' }
             ]
   }    
  @AnalyticsDetails.query.variableSequence:40
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearPeriod,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccountTypeFlowType,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 55
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccountFlowType,
  
  @AnalyticsDetails.query.variableSequence: 60
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,
  
  @AnalyticsDetails.query.variableSequence: 65
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Semantics.currencyCode:true
  GlobalCurrency,

  @AnalyticsDetails.query.display: #KEY_TEXT
  SemanticTag,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Supplier,

  //--------------------------------------------------------------------------------
  // Time Dimensions
  //--------------------------------------------------------------------------------
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearVariant,

//  @AnalyticsDetails.query.display: #KEY_TEXT
//  FiscalYear,
//  @Consumption.filter: { selectionType: #RANGE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearWeek,

//  @AnalyticsDetails.query.display: #KEY_TEXT
//  PostingDate,

  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYear,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearWeek,

  //--------------------------------------------------------------------------------
  // Dimensions needed by CFO Dashboard
  //--------------------------------------------------------------------------------
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,

  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingArea,

  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,

  @AnalyticsDetails.query.display: #KEY_TEXT
  IsBalanceSheetAccount,
  
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocumentCategory,
  
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.display: #KEY
  ActualPlanCode,

  //
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Amounts
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  AmountInGlobalCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  InvertedAmountInGlobalCurrency,

  //  @Semantics.currencyCode:true
  //  CompanyCodeCurrency,
  //  @AnalyticsDetails.query.hidden: true
  //  @AnalyticsDetails.query.axis: #ROWS
  //  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  //  AmountInCompanyCodeCurrency,

  //--------------------------------------------------------------------------------
  // Liquidity
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Working Capital
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.CurrentAssetAmtInGlobCrcy - $projection.CurrentLiabilityAmtInGlobCrcy'
  //  @EndUserText.label: 'Working Capital Amount in Global Crcy'
  cast(0 as fis_wrkcptlamt_ksl)       as WorkingCapitalAmtInGlobCrcy,
  //----------------------------------------
  // Working Capital Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.CurrentAssetAmtInGlobCrcy / $projection.CurrentLiabilityAmtInGlobCrcy) * 100'
  //  @EndUserText.label: 'Working Capital Glob Crcy Percent'
  cast(0 as fis_wrkcptlratio_ksl)     as WorkingCapitalGlobCrcyPercent,

  //----------------------------------------
  // Current Assets
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //  @EndUserText.label: 'Current Asset Amount in Global Crcy'
  //  cast (case when ( SemanticTag = 'CURASSET' ) then AmountInGlobalCurrency else cast( 0 as fis_curast_ksl ) end as fis_curast_ksl preserving type ) as CurrentAssetAmtInGlobCrcy,
  CurrentAssetAmtInGlobCrcy,

  //----------------------------------------
  // Current Liability and Equity
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //  @EndUserText.label: 'Current Liability Amount in Global Crcy'
  //  cast ( case when ( SemanticTag = 'CURLIABEQU' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_curlbty_ksl ) end as fis_curlbty_ksl preserving type ) as CurrentLiabilityAmtInGlobCrcy,
  CurrentLiabilityAmtInGlobCrcy,

  //----------------------------------------
  // Share Holders Equity
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.AssetAmtInGlobCrcy - $projection.LiabilityEquityAmtInGlobCrcy'
  //  @EndUserText.label: 'Shareholders Equity Amount in Global Crcy'
  cast(0 as fis_sheqtyamt_ksl)        as ShEquityAmtInGlobCrcy,

  //----------------------------------------
  // Assets
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //  @EndUserText.label: 'Asset Amount in Global Crcy'
  //  cast ( case when ( SemanticTag = 'ASSET' ) then AmountInGlobalCurrency else cast( 0 as fis_asset_ksl ) end as fis_asset_ksl preserving type ) as AssetAmtInGlobCrcy,
  AssetAmtInGlobCrcy,

  //----------------------------------------
  // Liability and Equity
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //  @EndUserText.label: 'Liability and Equity Amount in Global Crcy'
  //cast (case when ( SemanticTag = 'LIAB_EQUIT' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_liab_equity_ksl ) end as fis_liab_equity_ksl preserving type ) as LiabilityEquityAmtInGlobCrcy,
  LiabilityEquityAmtInGlobCrcy,

  //--------------------------------------
  // Operating Cash Flow
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - $projection.TngblAstDeprAmtInGlobCrcy - $projection.IntngblAssetAmtznAmtInGlobCrcy - $projection.FxdAssetRtrmtAmtInGlobCrcy - $projection.ChgsProvisionAmtInGlobCrcy - $projection.ChgsInventoryAmtInGlobCrcy - $projection.ChgsAcctsRblAmtInGlobCrcy - $projection.ChgsAcctsOthRblAmtInGlobCrcy + $projection.ChgsAcctsPyblAmtInGlobCrcy + $projection.ChgsAcctsOthPyblAmtInGlobCrcy'
  //  @EndUserText.label: 'Operating Cash Flow Amount in Global Crcy'
  cast (0 as fis_cashopg_ksl)         as OpgActyCashAmtInGlobCrcy,

  //--------------------------------------------------------------------------------
  // Profitability
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Gross Margin
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.GrossProfitAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Gross Margin Glob Crcy Percent'
  cast (0 as fis_grossmargin_ksl)     as GrossMarginGlobCrcyPct,

  //----------------------------------------
  // Operating Margin (ROS)
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.OpgProfitAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Operating Margin Glob Crcy Percent'
  cast (0 as fis_operatingmargin_ksl) as OpgMargGlobCrcyPercent,

  //----------------------------------------
  // Profit Margin (Net Profit Margin)     --- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Profit Margin Glob Crcy Percent'
  cast (0 as fis_profitmargin_ksl)    as ProfitMarginGlobCrcyPercent,

  //----------------------------------------
  // Return on Equity (ROE)
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.ShEquityAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Return on Equity Glob Crcy Percent'
  cast (0 as fis_returnonequity_ksl)  as ReturnOnEquityGlobCrcyPct,

  //----------------------------------------
  // Return on Assets (ROA)
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.NetIncomeAmtInGlobCrcy / $projection.AssetAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Return on Assets Glob Crcy Percent'
  cast (0 as fis_returnonasset_ksl)   as ReturnOnAssetGlobCrcyPercent,

  //----------------------------------------
  // Return of Investments (ROI)     --- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.GrossProfitAmtInGlobCrcy / $projection.CostOfGoodsSoldAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Return on Investment Glob Crcy Percent'
  cast (0 as fis_returnoninvest_ksl)  as RetOnInvestmentGlobCrcyPct,

  //----------------------------------------
  // Gross Profit
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedRevnAmtInGlobCrcy + $projection.CostOfGoodsSoldAmtInGlobCrcy'
  //@EndUserText.label: 'Gross Profit Amt in Glob Crcy'
  cast (0 as fis_grossprofit_ksl)     as GrossProfitAmtInGlobCrcy,

  //----------------------------------------
  // Operating Profit
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedRevnAmtInGlobCrcy + $projection.TotalOpgExpnInGlobCrcy'
  //@EndUserText.label: 'Operating Profit Amt in Glob Crcy'
  cast (0 as fis_opgprofit_ksl)       as OpgProfitAmtInGlobCrcy,

  //----------------------------------------
  // Cost of Goods Sold
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Cost Of Goods Sold Amount In Global Crcy'
  //  cast (case when ( SemanticTag = 'RECO_COS' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_cogs_ksl ) end as fis_cogs_ksl preserving type ) as CostOfGoodsSoldAmtInGlobCrcy,
  CostOfGoodsSoldAmtInGlobCrcy,

  //----------------------------------------
  // Gross Revenue     --- not neede as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Gross Revenue Amount in Global Crcy'
  //  cast (case when ( SemanticTag = 'GROSS_REV' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_gross_rev_ksl ) end as fis_gross_rev_ksl preserving type ) as GrossRevenueAmtInGlobCrcy,
  GrossRevenueAmtInGlobCrcy,

  //----------------------------------------
  // Net Revenue / Net Sales / Recognized Revenue
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Recognized Revenue Amount In Global Crcy'
  //  cast (case when ( SemanticTag = 'RECO_REV' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_recrevn ) end as fis_recrevn preserving type ) as RecognizedRevnAmtInGlobCrcy,
  RecognizedRevnAmtInGlobCrcy,

  //--------------------------------------------------------------------------------
  // Efficiency
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // Asset Turnover       --- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.RecognizedRevnAmtInGlobCrcy / $projection.AssetAmtInGlobCrcy) * 100'
  //@EndUserText.label: 'Asset Turnover Glob Crcy Percent'
  cast (0 as fis_assetturnover_ksl)   as AssetTurnoverGlobCrcyPercent,

  //----------------------------------------
  // Inventory Turnover       --- not needed as KPI 
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.RecognizedRevnAmtInGlobCrcy / (( $projection.StrtgInventoryAmtInGlobCrcy + $projection.InventoryAmtInGlobCrcy ) / 2) ) * 100'
  //@EndUserText.label: 'Inventory Turnover Glob Crcy Percent'
  cast (0 as fis_invtryturnover_ksl)  as InvtryTurnoverGlobCrcyPct,

  //--------------------------------------------------------------------------------
  // Equity Structure
  //--------------------------------------------------------------------------------

  //----------------------------------------
  // EBT (Earnings before Taxes)
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - $projection.IncomeTaxAmtInGlobCrcy'
  //  //@EndUserText.label: 'EBT Amt in Glob Crcy'
  cast (0 as fis_ebt_ksl)             as EBTAmountInGlobCrcy,

  //----------------------------------------
  // EBIT (Earnings before Interest and Taxes)
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - ( $projection.IncomeTaxAmtInGlobCrcy + $projection.InterestAmtInGlobCrcy )'
  //@EndUserText.label: 'EBIT Amt in Glob Crcy'
  cast (0 as fis_ebit_ksl)            as EBITAmountInGlobCrcy,

  //----------------------------------------
  // EBITDA ( Earnings before Interest, Taxes, Depreciation and Amortization)
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.NetIncomeAmtInGlobCrcy - ( $projection.IncomeTaxAmtInGlobCrcy + $projection.InterestAmtInGlobCrcy + $projection.TngblAstDeprAmtInGlobCrcy + $projection.IntngblAssetAmtznAmtInGlobCrcy )'
  //@EndUserText.label: 'EBITDA Amt in Glob Crcy'
  cast (0 as fis_ebitda_ksl)          as EBITDAAmountInGlobCrcy,

  //----------------------------------------
  // Net Income Including all Accounts
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Net Profit Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'NTINC_ALAC' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_netincome_ksl ) end as fis_netincome_ksl preserving type ) as NetIncomeAmtInGlobCrcy,
  NetIncomeAmtInGlobCrcy,

  //----------------------------------------
  // Total Operating Expense
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.CostOfGoodsSoldAmtInGlobCrcy + $projection.OpgExpnInGlobCrcy'
  //@EndUserText.label: 'Total Operating Expense Amt in Glob Crcy'
  cast (0 as fis_toperexp_ksl)        as TotalOpgExpnInGlobCrcy,

  //----------------------------------------
  // Operating Expense
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Operating Expense Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'OPEREXP' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_operexp_ksl ) end as fis_operexp_ksl preserving type ) as OpgExpnInGlobCrcy,
  OpgExpnInGlobCrcy,

  //----------------------------------------
  // Other Operating Expense    --- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Other Operating Expense Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'OOPEREXP' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_ooperexp_ksl ) end as fis_ooperexp_ksl preserving type ) as OthOpgExpnInGlobCrcy,
  OthOpgExpnInGlobCrcy,

  //----------------------------------------
  // Starting Inventories      --- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Starting Inventory Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'INVENTORY' ) and (FiscalPeriod = '000') then AmountInGlobalCurrency end as fis_strtginventory_ksl) as StrtgInventoryAmtInGlobCrcy,
  StrtgInventoryAmtInGlobCrcy, //  from I-View and clas

  //----------------------------------------
  // Inventories Changes
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Inventory Changes Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'INVENTORY' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsinventory_ksl) as ChgsInventoryAmtInGlobCrcy,
  ChgsInventoryAmtInGlobCrcy, //  from I-View and clas

  //----------------------------------------
  // Inventories     ---- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Inventories Amount in Global Crcy'
  //  cast (case when ( SemanticTag = 'INVENTORY' ) then AmountInGlobalCurrency else cast( 0 as fis_inventory_ksl ) end as fis_inventory_ksl preserving type ) as InventoryAmtInGlobCrcy,
  InventoryAmtInGlobCrcy, //  from I-View and clas

  //----------------------------------------
  // Income Tax     ---- not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Income Tax Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'INCOMETAX' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_incometax_ksl ) end as fis_incometax_ksl preserving type ) as IncomeTaxAmtInGlobCrcy,
  IncomeTaxAmtInGlobCrcy,

  //----------------------------------------
  // Interest
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Interest Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'INTEREST' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_interest_ksl ) end as fis_interest_ksl preserving type ) as InterestAmtInGlobCrcy,
  InterestAmtInGlobCrcy,

  //----------------------------------------
  // Depreciation of Tangible Assets
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Depreciation of Tangible Assets Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'DPRTASSET' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_tangassets_ksl ) end as fis_tangassets_ksl preserving type ) as TngblAstDeprAmtInGlobCrcy,
  TngblAstDeprAmtInGlobCrcy,

  //----------------------------------------
  // Amortization of Intangible Assets
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Amortization of Intangible Assets Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'AMORINASST' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_itangasset_ksl ) end as fis_itangasset_ksl preserving type ) as IntngblAssetAmtznAmtInGlobCrcy,
  IntngblAssetAmtznAmtInGlobCrcy,

  //----------------------------------------
  // Gain/Loss from Retirement of Fixed Assets    - not needed as KPI
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@EndUserText.label: 'Retirement of Fixed Assets Amt in Glob Crcy'
  //  cast (case when ( SemanticTag = 'CHGFARET' ) then InvertedAmountInGlobalCurrency else cast( 0 as fis_chgfaret_ksl ) end as fis_chgfaret_ksl preserving type ) as FxdAssetRtrmtAmtInGlobCrcy,
  FxdAssetRtrmtAmtInGlobCrcy,

  //----------------------------------------
  // Provisions Changes    - not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Provisions Amt Changes in Glob Crcy'
  //  cast (case when ( SemanticTag = 'PROVISIONS' ) and (FiscalPeriod != '000') then AmountInGlobalCurrency end as fis_chgsprovision_ksl) as ChgsProvisionAmtInGlobCrcy,
  ChgsProvisionAmtInGlobCrcy,

  //----------------------------------------
  // Provisions     - not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Provisions Amt in Glob Crcy'
  ProvisionAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Receivable (Net)
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Receivables Amt Changes in Glob Crcy'
  //  cast (case when ( SemanticTag = 'ACCREC' ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_ksl) as ChgsAcctsRblAmtInGlobCrcy,
  ChgsAcctsRblAmtInGlobCrcy,

  //----------------------------------------
  // Accounts Receivable (Net)
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Receivables Amt in Glob Crcy'
  AcctsRblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Other Receivable     - not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Other Receivables Amt Changes in Glob Crcy'
  //  cast (case when ( SemanticTag = 'ACCREC_OTH' ) and (FiscalPeriod != '000')  then AmountInGlobalCurrency end as fis_chgsaccrec_oth_ksl) as ChgsAcctsOthRblAmtInGlobCrcy,
  ChgsAcctsOthRblAmtInGlobCrcy,

  //----------------------------------------
  // Accounts Other Receivable     - not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Other Receivables Amt in Glob Crcy'
  AcctsOthRblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Accounts Payable
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Payables Amt Changes in Glob Crcy'
  //  cast (case when ( SemanticTag = 'ACCPAY' ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_ksl) as ChgsAcctsPyblAmtInGlobCrcy,
  ChgsAcctsPyblAmtInGlobCrcy,

  //----------------------------------------
  // Accounts Payable
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Payables Amt in Glob Crcy'
  AcctsPyblAmtInGlobCrcy,

  //----------------------------------------
  // Increase (Decrease) in Other Payables   ---- not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Other Payables Amt Changes in Glob Crcy'
  //  cast (case when ( SemanticTag = 'ACCPAY_OTH' ) and (FiscalPeriod != '000')  then InvertedAmountInGlobalCurrency end as fis_chgsaccpay_oth_ksl) as ChgsAcctsOthPyblAmtInGlobCrcy,
  ChgsAcctsOthPyblAmtInGlobCrcy,

  //----------------------------------------
  // Other Payables   ---- not needed as KPI
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  //@EndUserText.label: 'Other Payables Amt in Glob Crcy'
  AcctsOthPyblAmtInGlobCrcy,

  //----------------------------------------
  // EBITDA ( Earnings before Interest, Taxes, Depreciation and Amortization) Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.EBITDAAmountInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy ) * 100'
  //@EndUserText.label: 'EBITDA Margin Glob Crcy Percent'
  cast (0 as fis_ebitda_pct_ksl)      as EBITDAMarginGlobCrcyPercent,

  //----------------------------------------
  // EBIT (Earnings before Taxes) Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.EBITAmountInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy ) * 100'
  //@EndUserText.label: 'EBIT Margin Glob Crcy Percent'
  cast (0 as fis_ebit_pct_ksl)        as EBITMarginGlobCrcyPercent,

  //----------------------------------------
  // Return on Capital Employed (ROCE) Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.EBITAmountInGlobCrcy / ( $projection.AssetAmtInGlobCrcy - $projection.CurrentLiabilityAmtInGlobCrcy ) ) * 100'
  //@EndUserText.label: 'Return on Capital Employed Glob Crcy Percent'
  cast (0 as fis_returnoncapempl_ksl) as RetOnCptlEmployedGlobCrcyPct,

  //----------------------------------------
  // Debt to Equity Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.CurrentLiabilityAmtInGlobCrcy / $projection.ShEquityAmtInGlobCrcy ) * 100'
  //@EndUserText.label: 'Debt To Equity Glob Crcy Percent'
  cast (0 as fis_debttoequity_ksl)    as DebtToEquityGlobCrcyPercent,

  //----------------------------------------
  // Debt to Asset Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.CurrentLiabilityAmtInGlobCrcy / $projection.CurrentAssetAmtInGlobCrcy ) * 100'
  //@EndUserText.label: 'Debt To Asset Glob Crcy Percent'
  cast (0 as fis_debttoasset_ksl)     as DebtToAssetGlobCrcyPercent,

  //----------------------------------------
  // Interest Coverage Percent
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.EBITAmountInGlobCrcy / $projection.InterestAmtInGlobCrcy ) * 100'
  //@EndUserText.label: 'Interest Coverage Glob Crcy Percent'
  cast (0 as fis_interestcov_ksl)     as InterestCoverageGlobCrcyPct,

  //----------------------------------------
  // Degree of Financial Leverage Ratio
  @AnalyticsDetails.query.axis: #ROWS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.EBITAmountInGlobCrcy / ( $projection.EBITAmountInGlobCrcy  - $projection.InterestAmtInGlobCrcy  ) )'
  //@EndUserText.label: 'Degree of Financial Leverage Glob Crcy Ratio'
  cast(0 as fis_degoffinlevratio_ksl) as DegOfFinLeverageGlobCrcyRatio,

  //----------------------------------------
  // Operating Income
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.OpgProfitAmtInGlobCrcy - $projection.TngblAstDeprAmtInGlobCrcy - $projection.IntngblAssetAmtznAmtInGlobCrcy'
  //@EndUserText.label: 'Operating Income Amount In Global Currency'
  cast(0 as fis_opgincome_ksl)        as OpgIncomeAmtInGlobCrcy,
  
  
//@Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
//@AnalyticsDetails.query.variableSequence: 35
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.display: #KEY_TEXT  
@Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate', 
    resultElement: 'FiscalYear', 
    binding: [
    { targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' },
    { targetElement : 'FiscalYearVariant' , type : #CONSTANT, value : 'K4' }
             ]
   }    
  LedgerFiscalYear

}
```
