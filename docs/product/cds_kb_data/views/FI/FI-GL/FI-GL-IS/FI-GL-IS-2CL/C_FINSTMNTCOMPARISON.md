---
name: C_FINSTMNTCOMPARISON
description: "Balance Sheet/Income Statement - Multidimensional"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISON')/$value
semantic_en: "Balance Sheet/Income Statement - Multidimensional"
semantic_vi: "Balance Sheet/Income Statement - Multidimensional — CDS view tiêu dùng dựa trên I_FinancialStatementCube."
keywords:
  - "balance"
  - "sheet/income"
  - "statement"
  - "multidimensional"
  - "financial"
  - "leaf"
  - "item"
  - "company"
  - "code"
  - "account"
  - "profit"
  - "center"
  - "segment"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - consumption-view
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - lob:finance
---
# C_FINSTMNTCOMPARISON

**Balance Sheet/Income Statement - Multidimensional**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementLeafItem` |  | |  |  | `CHAR(18)` | Financial Statement Leaf |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AlternativeGLAccountIsUsed` |  | |  |  | `CHAR(1)` | Use Alternative Accounts |
| `PeriodBalanceAmount` |  | |  |  | `CURR(23)` | Period Balance |
| `ComparisonPeriodBalanceAmount` |  | |  |  | `CURR(23)` | Comparison Period Balance |
| `AbsoluteDifferenceAmount` |  | |  | `cast (1 as fis_abs_diff)` | `DEC(28)` | Absolute Difference (Reporting Amount - Comparison Amount) |
| `RelativeDifferenceAmount` |  | |  | `cast (1 as fis_rel_diff)` | `DEC(28)` | Relative Difference (Percentage Difference) |
| `GLAccountHierarchyKeyDate` |  | |  |  | `DATS(8)` | Key Date of the GLAccount Hierarchy |
| `ZeroBalanceAccountIsDisplayed` |  | |  |  | `CHAR(1)` | Accounts with Zero Balance are Displayed |
| `YrEndClsgPostingIsDisplayed` |  | |  |  | `CHAR(1)` | Including Year-End Closing Postings |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `PeriodBalanceSignAdjdAmount` |  | |  | `cast ( 1 as fis_fsv_sa_repo_amount )` | `CURR(23)` | Period Balance with Sign Adjd based on hierarchy definition |
| `ComprnPeriodBalSignAdjdAmount` |  | |  | `cast ( 1 as fis_fsv_sa_comp_amount )` | `CURR(23)` | Comparison Period Balance with sign adjusted bsd on HierDef |
| `AbsltDifferenceSignAdjdAmount` |  | |  | `cast ( 1 as fis_fsv_sa_abs_diff )` | `DEC(28)` | Absolute Difference Sign Adjd (Reporting - Comparison Amt) |
| `RelativeDifferenceSignAdjdAmt` |  | |  | `cast ( 1 as fis_fsv_sa_rel_diff )` | `DEC(28)` | Relative Difference Sign Adjusted (Percentage Difference) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialStatementHier` | `I_FinancialStatementHier` | [0..1] |
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_ComparisonLedger` | `I_Ledger` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIFINSTMTCMP'
@EndUserText.label: 'Balance Sheet/Income Statement - Multidimensional'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY] 
                                     
define view C_FinStmntComparison
  with parameters

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                    : sydatum,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                   : sylangu,

    @Consumption.hidden: true
//    @Environment.systemField: #APPLICATION_USER
    @Environment.systemField: #USER
    P_BusinessUser               : syuname,

    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @AnalyticsDetails.query.variableSequence: 10
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Ledger', element: 'Ledger' } } ]    
    P_Ledger                     : fins_ledger,


    @AnalyticsDetails.query.variableSequence: 20
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FinancialStatementHier', element: 'FinancialStatementHierarchy' } } ]    
    @Consumption.derivation: { lookupEntity: 'F_FinStmntVersionUserParam',
          resultElement: 'FinancialStatementHierarchy' }
    P_FinancialStatementVersion  : hryid,

    ------------------------------------------------------------------------------------------------------
    -- Time Parameters
    ------------------------------------------------------------------------------------------------------
    @AnalyticsDetails.query.variableSequence: 30
    @Consumption.hidden: false
    @Consumption.defaultValue: '000'
    P_FromFiscalPeriod           : fis_period_from,

    @AnalyticsDetails.query.variableSequence: 31
    @Consumption.hidden: false
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarMonth', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
    P_ToFiscalPeriod             : fis_period_to,

    @AnalyticsDetails.query.variableSequence: 32
    @Consumption.hidden: false
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
    P_FiscalYear                 : fis_gjahr_no_conv,

    ------------------------------------------------------------------------------------------------------
    -- Time Comparison Parameters
    ------------------------------------------------------------------------------------------------------
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Ledger', element: 'Ledger' } } ]    
    @AnalyticsDetails.query.variableSequence: 40
    P_ComparisonLedger           : fis_ledger_cmp,

    @AnalyticsDetails.query.variableSequence: 41
    @Consumption.hidden: false
    @Consumption.defaultValue: '000'
    P_FromComparisonFiscalPeriod : fis_period_from_cmp,

    @AnalyticsDetails.query.variableSequence: 42
    @Consumption.hidden: false
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarMonth', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }

    P_ToComparisonFiscalPeriod   : fis_period_to_cmp,
    @AnalyticsDetails.query.variableSequence: 43
    //    @EndUserText.label: 'Comparison Fiscal Year'
    @Consumption.hidden: false
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
    P_ComparisonFiscalYear       : fis_gjahr_cmp_no_conv,

    ------------------------------------------------------------------------------------------------------
    -- Other Parameters
    ------------------------------------------------------------------------------------------------------
    @AnalyticsDetails.query.variableSequence: 50
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [{
         entity: { name:    'C_BalanceSheetCurrencyRoleVH', element: 'CurrencyRole' },
          additionalBinding: [{ localParameter: 'P_Ledger', element: 'Ledger' }, 
                              { localElement: 'CompanyCode', element: 'CompanyCode' } ]
                             
                }]
//    @Consumption.valueHelp: '_CurrencyRole' 
    @Consumption.defaultValue: '10'
    P_CurrencyRole               : fins_curtp,

    @AnalyticsDetails.query.variableSequence: 60
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlanningCategory', element: 'PlanningCategory' } } ]    
    @Consumption.defaultValue: 'ACT01'
    P_PlanningCategory           : fcom_category,

    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FromFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval1FromFiscalPeriod : fis_period_from,
  
    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_ToFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval1ToFiscalPeriod : fis_period_to,
  
    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FromComparisonFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval2FromFiscalPeriod : fis_period_from,
  
    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_ToComparisonFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval2ToFiscalPeriod : fis_period_to
  
  as select from I_FinancialStatementCube (P_FinancialStatementVersion:   :P_FinancialStatementVersion,
                                           P_FromFiscalPeriod:            :P_FromFiscalPeriod,
                                           P_ToFiscalPeriod:              :P_ToFiscalPeriod,
                                           P_FiscalYear:                  :P_FiscalYear,
                                           P_FromComparisonFiscalPeriod:  :P_FromComparisonFiscalPeriod,
                                           P_ToComparisonFiscalPeriod:    :P_ToComparisonFiscalPeriod,
                                           P_ComparisonFiscalYear:        :P_ComparisonFiscalYear,
                                           P_Ledger:                      :P_Ledger,
                                           P_ComparisonLedger:            :P_ComparisonLedger,
                                           P_CurrencyRole:                :P_CurrencyRole,
                                           P_PlanningCategory:            :P_PlanningCategory
                 ) as I_FinancialStatementCube

  association [0..1] to I_FinancialStatementHier as _FinancialStatementHier on _FinancialStatementHier.FinancialStatementHierarchy = :P_FinancialStatementVersion
//  association [0..1] to I_FinancialStatementHier as _FinancialStatementHier on _FinancialStatementHier.FinancialStatementHierarchy = $projection.FinancialStatementLeafItem
  association [0..1] to I_CurrencyRole           as _CurrencyRole           on _CurrencyRole.CurrencyRole                          = :P_CurrencyRole
  association [0..1] to I_PlanningCategory       as _PlanningCategory       on _PlanningCategory.PlanningCategory                  = :P_PlanningCategory
  association [0..1] to I_Ledger                 as _Ledger                 on _Ledger.Ledger                                      = :P_Ledger
  association [0..1] to I_Ledger                 as _ComparisonLedger       on _ComparisonLedger.Ledger                            = :P_ComparisonLedger

{
  ------------------------------------------------------------------------------------------------------
  -- ROWS
  ------------------------------------------------------------------------------------------------------
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                          hierarchyBinding : [{type : #PARAMETER, value : 'P_FinancialStatementVersion', variableSequence: 70 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER_ONLY
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FinancialStatementLeafItem,

  ------------------------------------------------------------------------------------------------------
  -- FREE
  ------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @Consumption.derivation: {
      lookupEntity: 'I_UserSettingsForCompanyCode',
      resultElement: 'CompanyCode',
      binding:
      [
        {
          targetElement : 'BusinessUser' ,
          type : #PARAMETER,
          value : 'P_BusinessUser'
        }
      ]
    }
  @AnalyticsDetails.query.variableSequence: 15
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,

  @AnalyticsDetails.query.variableSequence: 80
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @AnalyticsDetails.query.variableSequence: 90
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,

  @AnalyticsDetails.query.variableSequence: 100
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AlternativeGLAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CountryChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CorporateGroupAccount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CorporateGroupChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Currency,

  @AnalyticsDetails.query.variableSequence: 110
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  AlternativeGLAccountIsUsed,
  ------------------------------------------------------------------------------------------------------
  -- MEASURES
  ------------------------------------------------------------------------------------------------------
  @Consumption.dynamicLabel: { label: 'Period Balance &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval1FromFiscalPeriod'}, 
//                                                                              { index: 2, parameter: 'P_FiscalYear'},
                                                                              { index: 3, parameter: 'P_Interval1ToFiscalPeriod'},
                                                                              { index: 4, parameter: 'P_FiscalYear'} ] }
  PeriodBalanceAmount,

  @Consumption.dynamicLabel: { label: 'Comparison Period Balance &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval2FromFiscalPeriod'}, 
//                                                                                 { index: 2, parameter: 'P_FiscalYear'},
                                                                                 { index: 3, parameter: 'P_Interval2ToFiscalPeriod'},
                                                                                 { index: 4, parameter: 'P_ComparisonFiscalYear'} ] }
  ComparisonPeriodBalanceAmount,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PeriodBalanceAmount - $projection.ComparisonPeriodBalanceAmount'
  cast (1 as fis_abs_diff) as AbsoluteDifferenceAmount,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0($projection.AbsoluteDifferenceAmount / $projection.ComparisonPeriodBalanceAmount) * 100'
  cast (1 as fis_rel_diff) as RelativeDifferenceAmount,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  GLAccountHierarchyKeyDate,
  
  @AnalyticsDetails.query.variableSequence: 120
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  ZeroBalanceAccountIsDisplayed,
   
  @AnalyticsDetails.query.variableSequence: 130
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.filter.defaultValue: '#' 
  YrEndClsgPostingIsDisplayed,
  
  @AnalyticsDetails.query.variableSequence: 140
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  BusinessTransactionCategory,
  
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.formula: 'HRY_NODE_SIGN_VALUE($projection.FinancialStatementLeafItem) * $projection.PeriodBalanceAmount'
  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.dynamicLabel: { label: 'Period Balance Sign Adjusted &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval1FromFiscalPeriod'}, 
//                                                                                 { index: 2, parameter: 'P_FiscalYear'},
                                                                                 { index: 3, parameter: 'P_Interval1ToFiscalPeriod'},
                                                                                 { index: 4, parameter: 'P_FiscalYear'} ] }
  cast ( 1 as fis_fsv_sa_repo_amount ) as PeriodBalanceSignAdjdAmount,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.formula: 'HRY_NODE_SIGN_VALUE($projection.FinancialStatementLeafItem) * $projection.ComparisonPeriodBalanceAmount'
  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.dynamicLabel: { label: 'Comparison Balance Sign Adjd &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval2FromFiscalPeriod'}, 
//                                                                                 { index: 2, parameter: 'P_FiscalYear'},
                                                                                 { index: 3, parameter: 'P_Interval2ToFiscalPeriod'},
                                                                                 { index: 4, parameter: 'P_ComparisonFiscalYear'} ] }
  cast ( 1 as fis_fsv_sa_comp_amount ) as ComprnPeriodBalSignAdjdAmount,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.formula: 'HRY_NODE_SIGN_VALUE($projection.FinancialStatementLeafItem) * $projection.AbsoluteDifferenceAmount'
  cast ( 1 as fis_fsv_sa_abs_diff ) as AbsltDifferenceSignAdjdAmount,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.formula: 'HRY_NODE_SIGN_VALUE($projection.FinancialStatementLeafItem) * $projection.RelativeDifferenceAmount'
  cast ( 1 as fis_fsv_sa_rel_diff ) as RelativeDifferenceSignAdjdAmt 

}
```
