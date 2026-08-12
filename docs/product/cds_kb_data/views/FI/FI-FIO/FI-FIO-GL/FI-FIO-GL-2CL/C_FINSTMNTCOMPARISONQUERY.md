---
name: C_FINSTMNTCOMPARISONQUERY
description: "Financial Statement Comparison Query"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value
semantic_en: "Financial Statement Comparison Query"
semantic_vi: "Financial Statement Comparison Query — CDS view tiêu dùng dựa trên Financial Statement Comparison Query."
keywords:
  - "financial"
  - "statement"
  - "comparison"
  - "query"
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
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_FINSTMNTCOMPARISONQUERY

**Financial Statement Comparison Query**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementLeafItem` |  | |  |  | `CHAR(50)` | Financial Statement Leaf Item |
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
| `AbsoluteDifferenceAmount` |  | |  | `cast( PeriodBalanceAmount - ComparisonPeriodBalanceAmount as fis_abs_diff )` | `DEC(28)` | Absolute Difference (Reporting Amount - Comparison Amount) |
| `RelativeDifferenceAmount` |  | |  | `cast ( ( ( curr_to_decfloat_amount(PeriodBalanceAmount) - curr_to_decfloat_amount(ComparisonPeriodBalanceAmount)) / curr_to_decfloat_amount(ComparisonPeriodBalanceAmount) * 100 ) as fis_rel_diff)` | `DEC(28)` | Relative Difference (Percentage Difference) |
| `GLAccountHierarchyKeyDate` |  | |  |  | `DATS(8)` | Key Date of the GLAccount Hierarchy |
| `ZeroBalanceAccountIsDisplayed` |  | |  |  | `CHAR(1)` | Accounts with Zero Balance are Displayed |
| `YrEndClsgPostingIsDisplayed` |  | |  |  | `CHAR(1)` | Including Year-End Closing Postings |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `fis_perbalsignadjdamtcurrency` |  | |  | `virtual PerdBalSignAdjdAmtCrcy : fis_perbalsignadjdamtcurrency` |  |  |
| `PeriodBalanceSignAdjdAmount` |  | |  | `cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * curr_to_decfloat_amount(PeriodBalanceAmount) ) as fis_fsv_sa_repo_amount )` | `CURR(23)` | Period Balance with Sign Adjd based on hierarchy definition |
| `fis_cmpperbalsignadjdamtcrcy` |  | |  | `virtual ComprnPerdBalSignAdjdAmtCrcy : fis_cmpperbalsignadjdamtcrcy` |  |  |
| `ComprnPeriodBalSignAdjdAmount` |  | |  | `cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * curr_to_decfloat_amount(ComparisonPeriodBalanceAmount) ) as fis_fsv_sa_comp_amount )` | `CURR(23)` | Comparison Period Balance with sign adjusted bsd on HierDef |
| `AbsltDifferenceSignAdjdAmount` |  | |  | `cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * $projection.AbsoluteDifferenceAmount ) as fis_fsv_sa_abs_diff )` | `DEC(28)` | Absolute Difference Sign Adjd (Reporting - Comparison Amt) |
| `RelativeDifferenceSignAdjdAmt` |  | |  | `cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * $projection.RelativeDifferenceAmount ) as fis_fsv_sa_rel_diff )` | `DEC(28)` | Relative Difference Sign Adjusted (Percentage Difference) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSTMNTCOMPARISONQUERY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Financial Statement Comparison Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@Analytics.settings.maxProcessingEffort: #HIGH
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@VDM.viewType: #CONSUMPTION

define transient view entity C_FinStmntComparisonQuery
  provider contract analytical_query
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
    P_LedgerFiscalYear           : fis_gjahr_no_conv,

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
    P_ComparisonLedgerFiscalYear : fis_gjahr_cmp_no_conv,

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
    @Consumption.derivation: { lookupEntity: 'C_BalanceSheetCurrencyRoleVH',
          resultElement: 'CurrencyRole', binding: [
          { targetElement: 'Ledger', type : #PARAMETER, value : 'P_Ledger' },
          { targetElement: 'CompanyCode', type : #ELEMENT, value : 'CompanyCode' },
          { targetElement: 'CurrencyField', type : #CONSTANT, value : 'GC' },
          { targetElement: 'CurrencyRole', type : #CONSTANT, value : '30' } ]
         }
    //    @Consumption.defaultValue: '10'
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
    P_Interval1FromFiscalPeriod  : fis_period_from,

    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_ToFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval1ToFiscalPeriod    : fis_period_to,

    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FromComparisonFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval2FromFiscalPeriod  : fis_period_from,

    @Consumption.derivation: {
      lookupEntity: 'I_FiscalPeriodValueList',
      resultElement: 'FiscalPeriod',
      binding: [ { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_ToComparisonFiscalPeriod' } ]
    }
    @Consumption.hidden: true
    P_Interval2ToFiscalPeriod    : fis_period_to,

    @EndUserText.label: 'Financial Statement Section'
    @Consumption.hidden: false
    @Consumption.defaultValue: '1'
    P_FinancialStatementSection  : fis_financialstatementsection

  as projection on I_FinStmntComparisonCube ( P_FinancialStatementVersion    : $parameters.P_FinancialStatementVersion,
                                                  P_FromFiscalPeriod             : $parameters.P_FromFiscalPeriod,
                                                  P_ToFiscalPeriod               : $parameters.P_ToFiscalPeriod,
                                                  P_LedgerFiscalYear             : $parameters.P_LedgerFiscalYear,
                                                  P_FromComparisonFiscalPeriod   : $parameters.P_FromComparisonFiscalPeriod,
                                                  P_ToComparisonFiscalPeriod     : $parameters.P_ToComparisonFiscalPeriod,
                                                  P_ComparisonLedgerFiscalYear   : $parameters.P_ComparisonLedgerFiscalYear,
                                                  P_Ledger                       : $parameters.P_Ledger,
                                                  P_ComparisonLedger             : $parameters.P_ComparisonLedger,
                                                  P_CurrencyRole                 : $parameters.P_CurrencyRole,
                                                  P_PlanningCategory             : $parameters.P_PlanningCategory,
                                                  P_FinancialStatementSection    : $parameters.P_FinancialStatementSection
                   ) as I_FinStmntComparisonCube
{
          ------------------------------------------------------------------------------------------------------
          -- ROWS
          ------------------------------------------------------------------------------------------------------
          @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                                  hierarchyBinding : [{type : #PARAMETER, value : 'P_FinancialStatementVersion', variableSequence: 70 } ] }
          @AnalyticsDetails.query.displayHierarchy: #FILTER_ONLY
          @AnalyticsDetails.query.axis: #ROWS
          @AnalyticsDetails.query.totals: #HIDE
          @UI.textArrangement: #TEXT_LAST
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
          @UI.textArrangement: #TEXT_LAST
          CompanyCode,

          @AnalyticsDetails.query.variableSequence: 80
          @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          GLAccount,

          @AnalyticsDetails.query.variableSequence: 90
          @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ProfitCenterStdVH',
                         element: 'ProfitCenter' }
            }]
          ProfitCenter,

          @AnalyticsDetails.query.variableSequence: 100
          @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          Segment,

          @AnalyticsDetails.query.axis: #FREE
          @UI.textArrangement: #TEXT_LAST
          ChartOfAccounts,

          @AnalyticsDetails.query.axis: #FREE
          @UI.textArrangement: #TEXT_LAST
          FunctionalArea,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          ControllingArea,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          AlternativeGLAccount,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          CountryChartOfAccounts,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_GLAccountStdVH',
                         element: 'GLAccount' }
            }]
          CorporateGroupAccount,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.textArrangement: #TEXT_LAST
          CorporateGroupChartOfAccounts,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          Currency,

          @Semantics.booleanIndicator: true
          @AnalyticsDetails.query.variableSequence: 110
          @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
          AlternativeGLAccountIsUsed,

          ------------------------------------------------------------------------------------------------------
          -- MEASURES
          ------------------------------------------------------------------------------------------------------
          @Consumption.dynamicLabel: { label: 'Period Balance &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval1FromFiscalPeriod'},
          //                                                                              { index: 2, parameter: 'P_FiscalYear'},
                                                                                      { index: 3, parameter: 'P_Interval1ToFiscalPeriod'},
                                                                                      { index: 4, parameter: 'P_LedgerFiscalYear'} ] }
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'Currency'
          PeriodBalanceAmount,
          @Consumption.dynamicLabel: { label: 'Comparison Period Balance &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval2FromFiscalPeriod'},
                                                                                         { index: 3, parameter: 'P_Interval2ToFiscalPeriod'},
                                                                                         { index: 4, parameter: 'P_ComparisonLedgerFiscalYear'} ] }
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'Currency'
          ComparisonPeriodBalanceAmount                                                                                                                                            as ComparisonPeriodBalanceAmount,

          @Aggregation.default: #FORMULA
          cast( PeriodBalanceAmount - ComparisonPeriodBalanceAmount as fis_abs_diff )                                                                                              as AbsoluteDifferenceAmount,

          @Aggregation.default: #FORMULA
          cast ( ( ( curr_to_decfloat_amount(PeriodBalanceAmount) - curr_to_decfloat_amount(ComparisonPeriodBalanceAmount)) / curr_to_decfloat_amount(ComparisonPeriodBalanceAmount) * 100 ) as fis_rel_diff)                                                       as RelativeDifferenceAmount,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          GLAccountHierarchyKeyDate,

          @Semantics.booleanIndicator: true
          @AnalyticsDetails.query.variableSequence: 120
          @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
          ZeroBalanceAccountIsDisplayed,

          @AnalyticsDetails.query.variableSequence: 130
          @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
          @Consumption.filter.defaultValue: '#'
          @Semantics.booleanIndicator: true
          YrEndClsgPostingIsDisplayed,

          @AnalyticsDetails.query.variableSequence: 140
          @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
          BusinessTransactionCategory,

  virtual PerdBalSignAdjdAmtCrcy       : fis_perbalsignadjdamtcurrency,
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'PerdBalSignAdjdAmtCrcy'
          @Consumption.dynamicLabel: { label: 'Period Balance Sign Adjusted &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval1FromFiscalPeriod'},
                                                                                         { index: 3, parameter: 'P_Interval1ToFiscalPeriod'},
                                                                                         { index: 4, parameter: 'P_LedgerFiscalYear'} ] }
          cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * curr_to_decfloat_amount(PeriodBalanceAmount) ) as fis_fsv_sa_repo_amount )           as PeriodBalanceSignAdjdAmount,

  virtual ComprnPerdBalSignAdjdAmtCrcy : fis_cmpperbalsignadjdamtcrcy,
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'ComprnPerdBalSignAdjdAmtCrcy'
          @Consumption.dynamicLabel: { label: 'Comparison Balance Sign Adjd &1 - &3.&4', binding: [ { index: 1, parameter: 'P_Interval2FromFiscalPeriod'},
                                                                                        { index: 3, parameter: 'P_Interval2ToFiscalPeriod'},
                                                                                         { index: 4, parameter: 'P_ComparisonLedgerFiscalYear'} ] }
          cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * curr_to_decfloat_amount(ComparisonPeriodBalanceAmount) ) as fis_fsv_sa_comp_amount ) as ComprnPeriodBalSignAdjdAmount,

          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.hidden: true
          cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * $projection.AbsoluteDifferenceAmount ) as fis_fsv_sa_abs_diff )                      as AbsltDifferenceSignAdjdAmount,

          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.hidden: true
          cast( ( hry_node_sign_value( dimension => $projection.financialstatementleafitem) * $projection.RelativeDifferenceAmount ) as fis_fsv_sa_rel_diff )                      as RelativeDifferenceSignAdjdAmt
}
```
