---
name: C_CNSLDTNRULEBSDGRPRPT01Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPRPT01Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Group Reporting Data with Reporting Rules — CDS view tiêu dùng dựa trên I_ConsolidationGroupRptEnhcdC."
keywords:
  - "group"
  - "reporting"
  - "data"
  - "with"
  - "rules"
  - "consolidation"
  - "version"
  - "year"
  - "date"
  - "amount"
  - "crcy"
  - "prev"
  - "perd"
  - "currency"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - bo:purchaseorder
---
# C_CNSLDTNRULEBSDGRPRPT01Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPRPT01Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  |  | `CHAR(3)` | Consolidation Version |
| `YearToDateAmountInGrpCrcy` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PrevPerdYTDAmtInGroupCurrency` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PerdcAmountInGroupCurrency` |  | |  | `1` | `INT1(3)` |  |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PreviousFiscalYear` |  | |  | `:P_PreviousFiscalYear` | `NUMC(4)` |  |
| `PreviousPeriodBackShift1` |  | |  | `:P_PreviousPeriod` | `NUMC(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  | `:P_ConsolidationRptgItemHier` | `CHAR(10)` |  |
| `ConsolidationSimlnRptgRuleID` |  | |  | `:P_ConsolidationSimlnRptgRuleID` | `CHAR(3)` |  |
| `ConsolidationReportingRuleID` |  | |  | `:P_ConsolidationRptgRuleID` | `CHAR(3)` |  |
| `_RuleVarAsg` | | ✓ | | | | |
| `_RptgItmHierDir` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RuleVarAsg` | `I_CnsldtnRptgRuleVarAssgmt` | [0..1] |
| `_RptgItmHierDir` | `I_CnsldtnRptgItmHierDir` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPRPT01Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPRPT01Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRULEBSDGRPT01Q'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Group Reporting Data with Reporting Rules'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Analytics.query: true
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_QUERY ],
    modelingPattern: #ANALYTICAL_QUERY
}
define view C_CnsldtnRuleBsdGrpRpt01Q
  with parameters
    @EndUserText.label: 'Version For Deriving Reporting Rule'
    @AnalyticsDetails.query.variableSequence : 39
    //@Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'ConsolidationVersion'
    //    }
    //@Consumption.hidden: true
    @Consumption.defaultValue: 'Y10'

    P_ConsolidationVersion         : fincs_rvers,

    //    @AnalyticsDetails.query.variableSequence : 02
    //    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    //          resultElement: 'ConsolidationGroup'
    //    //         }
    @EndUserText.label: 'Consolidation Group'
    P_ConsolidationGroup           : fincs_congr,
    @AnalyticsDetails.query.variableSequence : 03
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //          resultElement: 'FiscalYear'
    //         }
    P_FiscalYear                   : gjahr,
    //    @AnalyticsDetails.query.variableSequence : 08
    @Consumption.hidden: true
    @Consumption.derivation: {
//    lookupEntity: 'P_Consolidationyearcalculator',
//    resultElement: 'PreviousFiscalYear',
//    binding: [
//    { targetParameter : 'P_FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
//    ]
//    }
    lookupEntity: 'I_ConsolidationYearCalculator',
    resultElement: 'PreviousFiscalYear',
    binding: [
    { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
    { targetElement : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
    { targetElement : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
    ]
    }
    P_PreviousFiscalYear           : gjahr,

    @AnalyticsDetails.query.variableSequence : 06
    //    @Consumption.hidden: true
    //    @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
    //@Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //resultElement: 'FiscalPeriod'
    //}

    P_FiscalPeriod                 : poper,
    //    @AnalyticsDetails.query.variableSequence : 10
    @Consumption.hidden: true
    @Consumption.derivation: {
//    lookupEntity: 'I_CnsldtnPeriodIndex',
//    lookupEntity: 'P_ConsolidationPerdCalculator',
//    resultElement: 'PreviousPeriodBackShift1',
//    binding: [
//    { targetParameter : 'P_FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
//    ]
//    }


    lookupEntity: 'I_ConsolidationYearCalculator',
    resultElement: 'PreviousPeriodBackShift1',
    binding: [
    { targetElement : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' },
    { targetElement : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
    { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
    ]
    }

    P_PreviousPeriod               : poper,
    @AnalyticsDetails.query.variableSequence : 07
    //    @Consumption.valueHelp: '_RptgItmHierDir'
    // @Consumption.hidden: true
    //@Consumption.derivation: { lookupEntity: 'I_CnsldtnRptgItmHierDir',
    //binding: [{
    //targetElement: 'ConsolidationChartOfAccounts',
    //type: #PARAMETER,
    //value: 'P_ConsolidationChartOfAccounts'
    //},{
    //targetElement: 'ConsolidationReportingItemHier',
    //type: #CONSTANT
    //    value: 'X1'
    //}],
    //resultElement: 'ConsolidationReportingItemHier'
    //}
    @Consumption.valueHelpDefinition: [{entity : { name :  'I_CnsldtnRptgItmHierDir' }}]
    //  @Consumption: { valueHelp: '_RptgItmHierDir.CnsldtnRptgItmHierMDTxt' }
    P_ConsolidationRptgItemHier    : fincs_rihry,

    @AnalyticsDetails.query.variableSequence : 14
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'ConsolidationLedger'
    //    }
    @Consumption.defaultValue: 'Y1'
    //    @Consumption.hidden: true
    P_ConsolidationLedger          : fincs_rldnr,
    //currency 07
    @AnalyticsDetails.query.variableSequence : 16
    //    @EndUserText.label: 'Group Currency'
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'GroupCurrency'
    //    }
    P_GroupCurrency                : waers,

    @AnalyticsDetails.query.variableSequence : 18
    //        @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //        resultElement: 'ConsolidationChartOfAccounts'
    //        }
    @Consumption.defaultValue : 'Y1'
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 40
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [{entity : { name :  'I_CnsldtnRptgRuleVarAssgmt' }}]
    @EndUserText: {
    label: 'Reporting Rule Variant'}
    @Consumption.defaultValue: '-'
    P_ConsolidationSimlnRptgRuleID : fincs_simln_rptgruleid,

    //    @EndUserText.label: 'FS Item Hierarchy'
    //    @AnalyticsDetails.query.variableSequence : 16
    //    @Consumption.valueHelp: '_FinStmntItmHierDir'
    //    @Consumption.derivation: { lookupEntity: 'I_FinStmntItmHierDir',
    //    binding: [{
    //    targetElement: 'ConsolidationChartOfAccounts',
    //    type: #PARAMETER,
    //    value: 'P_ConsolidationChartOfAccounts'
    //    },{
    //    targetElement: 'CnsldtnFinStmntItmHier',
    //    type: #CONSTANT
    ////    ,
    ////    value: 'BS'
    //    }],
    //    resultElement: 'CnsldtnFinStmntItmHier'
    //    }
    //    P_FinancialStatementItemHier : FINCS_ITHRY,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnRptgRuleIdIndex',
          binding: [{
              targetParameter: 'P_FiscalYear',
              type: #PARAMETER,
              value: 'P_FiscalYear'
            },{
            targetParameter: 'P_FiscalPeriod',
              type: #PARAMETER,
              value: 'P_FiscalPeriod'
            },{
            targetParameter: 'P_ConsolidationVersion',
              type: #PARAMETER,
              value: 'P_ConsolidationVersion'
            }],
          resultElement: 'ConsolidationReportingRuleID'
         }
    P_ConsolidationRptgRuleID      : fincs_rptid



  //    @AnalyticsDetails.query.variableSequence : 08
  //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //    resultElement: 'ConsolidationLedger'}
  //    //@Consumption.defaultValue : 'Y1'
  //    P_ConsolidationLedger          : FINCS_RLDNR

  as select from I_ConsolidationGroupRptEnhcdC(P_ConsolidationRptgItemHier: $parameters.P_ConsolidationRptgItemHier, P_ConsolidationRptgRuleID: $parameters.P_ConsolidationRptgRuleID)

  //  association [0..1] to I_FinStmntItmHierDir       as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
  //                                                                          and _FinStmntItmHierDir.CnsldtnFinStmntItmHier = :P_FinancialStatementItemHier

  association [0..1] to I_CnsldtnRptgRuleVarAssgmt as _RuleVarAsg     on  $projection.ConsolidationChartOfAccounts     =  _RuleVarAsg.ConsolidationChartOfAccounts
                                                                      and _RuleVarAsg.ConsolidationReportingItemHier = $parameters.P_ConsolidationRptgItemHier
                                                                      and _RuleVarAsg.ConsolidationReportingRuleID   = $parameters.P_ConsolidationSimlnRptgRuleID

  association [0..1] to I_CnsldtnRptgItmHierDir    as _RptgItmHierDir on  $projection.ConsolidationChartOfAccounts       = _RptgItmHierDir.ConsolidationChartOfAccounts
                                                                      and _RptgItmHierDir.ConsolidationReportingItemHier = $parameters.P_ConsolidationRptgItemHier
//  association [0..1] to C_CnsldtnRptgItmHierDirVH    as _RptgItmHierDir on  _RptgItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
  //                                                                      and _RptgItmHierDir.ConsolidationReportingItemHier     = :P_ConsolidationRptgItemHier
{

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Version'
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
      @AnalyticsDetails.query.variableSequence : 1
      key ConsolidationVersion,

      // Amount in current year
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @EndUserText.label: 'YTD Amount'
      case
      when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then YTDAmtInCnsldtnGroupCrcy
      else 0
      end                                            as     YearToDateAmountInGrpCrcy,

      //  // Amount in previous year
      //  @AnalyticsDetails.query.axis: #COLUMNS
      //  @DefaultAggregation: #SUM
      //  @Semantics.amount.currencyCode: 'GroupCurrency'
      //  @EndUserText.label: 'Prior Year Periodic Amount'
      //  case
      //  when FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then YTDAmtInCnsldtnGroupCrcy
      //  else 0
      //  end                                     as     YTDAmtInGrpCrcyInPrevYr,
      //  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Amount in Current Year Periordic
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      //  @EndUserText.label: 'Y2016 M11 YTD'
      @Consumption.hidden: true
      @DefaultAggregation: #SUM
      //  @AnalyticsDetails.query.formula: 'AmtNewCnsldtnGrpCrcyNow - AmtNewCnsldtnGrpCrcyTemp'
      case
      when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy
      else 0
      end                                            as     PrevPerdYTDAmtInGroupCurrency,
      //
      //
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @EndUserText.label: 'Periodic Amount'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: '$projection.YearToDateAmountInGrpCrcy - $projection.PrevPerdYTDAmtInGroupCurrency'
      // case
      // when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy
      // else 0
      1                                              as     PerdcAmountInGroupCurrency,
      //
      //  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //
      //  //   Amount in Previous year Periordic
      //  @Semantics.amount.currencyCode: 'GroupCurrency'
      //  @AnalyticsDetails.query.axis: #COLUMNS
      //  //  @EndUserText.label: 'Y2015 M11 YTD'
      //  @Consumption.hidden: true
      //  @DefaultAggregation: #SUM
      //  //  @AnalyticsDetails.query.formula: 'CurrentCnsldtnGroupCrcy - AmtOldCnsldtnGroupCrcyTemp'
      //  case
      //  when FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy
      //  else 0
      //  end                                     as     PrevYrPerdYTDAmtInGrpCurrency,
      //
      //  //  @Semantics.amount.currencyCode: 'GroupCurrency'
      //  //  @AnalyticsDetails.query.axis: #COLUMNS
      //  //  @Consumption.hidden: true
      //  ////  @EndUserText.label: 'Y2015 M12 YTD'
      //  //  @DefaultAggregation: #SUM
      //  //  case
      //  //    when FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then YTDAmtInCnsldtnGroupCrcy
      //  //
      //  //    else 0
      //  //    end                                   as     AmtInLoclCrcyInPrevYrPrePerd,
      //
      //  // Amount in Previous Year Periordic
      //  @Semantics.amount.currencyCode: 'GroupCurrency'
      //  @AnalyticsDetails.query.axis: #COLUMNS
      //  @EndUserText.label: 'Prior Year Periodic Amount'
      //  @DefaultAggregation: #FORMULA
      //  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGrpCrcyInPrevYr - $projection.PrevYrPerdYTDAmtInGrpCurrency'
      //  // case
      //  // when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy
      //  // else 0
      //  1                                       as     PreviousYearPerdcAmtInGrpCrcy,

      //  @AnalyticsDetails.query.axis: #FREE
      //  @AnalyticsDetails.query.totals: #SHOW
      //  @EndUserText.label: 'Version'
      //  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
      //  @AnalyticsDetails.query.variableSequence : 01
      //  key ConsolidationVersion,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
      @AnalyticsDetails.query.variableSequence : 02
      ConsolidationGroup,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Fiscal Year'
      @AnalyticsDetails.query.variableSequence : 03
      FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Fiscal Period'
      @AnalyticsDetails.query.variableSequence : 04
      FiscalPeriod,
      @AnalyticsDetails.query.variableSequence : 05
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      ConsolidationDimension,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true,defaultValue:'Y1'}
      //  @AnalyticsDetails.query.variableSequence : 06
      ConsolidationLedger,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Group Currency'
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 11
      GroupCurrency,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Cons chart of accts'
      //  @AnalyticsDetails.query.variableSequence : 13
      ChartOfAccounts,
      @AnalyticsDetails.query.variableSequence : 22
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      SubItemCategory,
      //  @AnalyticsDetails.query.variableSequence : 15
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      SubItem,
      @Consumption.filter: {
       selectionType: #HIERARCHY_NODE,
       multipleSelections: false,
       mandatory: false,
       hierarchyBinding : [
       { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
       { type : #PARAMETER, value : 'P_ConsolidationRptgItemHier'}],
       defaultHierarchyNode.nodeType: 'ConsolidationReportingItem',
       defaultHierarchyNode.node: [ { element: 'ConsolidationChartOfAccounts' },
       { element: 'ConsolidationReportingItem'} ]
      //   , value: 'Y1'
       }
      @AnalyticsDetails.query: {
      // hierarchyBinding : [
      //// { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
      // { type : #PARAMETER, value : 'P_ConsolidationRptgItemHier'}],
       variableSequence : 15,
       axis: #ROWS,
       display: #KEY_TEXT,
       displayHierarchy: #FILTER,
       hierarchyInitialLevel: 3
       }
      @EndUserText.label: 'Reporting Item'
      ConsolidationReportingItem,
      @Consumption.filter: {
      //   selectionType: #HIERARCHY_NODE,
       multipleSelections: true,
       mandatory: false
      //   hierarchyBinding : [
      ////   { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
      //   { type : #USER_INPUT, value : 'USERINPUT_CnsldtnFinStmntItmHier'}],
      //   defaultHierarchyNode.nodeType: 'FinancialStatementItem',
      //   defaultHierarchyNode.node: [ { element: 'ConsolidationChartOfAccounts'},
      //  //    ,value: 'Y1'
      //   { element: 'FinancialStatementItem' } ]
      //  //   ,value: 'T31000',value: 'T31100',value: 'T31200',value: 'T31300',value: 'T31400',value: 'T32000'
       }
      @AnalyticsDetails.query: {
      // hierarchyBinding : [
      // { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
      // { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],

       variableSequence : 28,
       axis: #COLUMNS,
       display: #KEY_TEXT
      //   displayHierarchy: #FILTER,
      //   hierarchyInitialLevel: 3
       }
      FinancialStatementItem,
      @AnalyticsDetails.query: {
      //    variableSequence : 40,
      variableSequence : 24,
      axis: #FREE,
      totals: #SHOW,
      display: #KEY
      }
      ConsolidationUnit,
      @AnalyticsDetails.query.variableSequence : 18
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      PartnerConsolidationUnit,
      @AnalyticsDetails.query.variableSequence : 26
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.totals: #SHOW
      PostingLevel,
      //  @AnalyticsDetails.query.variableSequence : 16
      //  @AnalyticsDetails.query.axis: #FREE
      //  @AnalyticsDetails.query.display: #KEY
      //  Segment,
      //  @AnalyticsDetails.query.variableSequence : 17
      //  @AnalyticsDetails.query.axis: #FREE
      //  @AnalyticsDetails.query.display: #KEY
      //  ProfitCenter,
      @AnalyticsDetails.query.variableSequence : 30
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      Segment,
      @AnalyticsDetails.query.variableSequence : 32
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      ProfitCenter,


      //  :P_FiscalYear                           as     FiscalYear,
      //      :P_ConsolidationDimension                   as     ConsolidationDimension,
      //# to do
      //:P_FiscalPeriod                       as     FiscalPeriod,
      :P_PreviousFiscalYear                          as     PreviousFiscalYear,
      :P_PreviousPeriod                              as     PreviousPeriodBackShift1,
      //  :P_ConsolidationGroup                       as     ConsolidationGroup,
      //    :P_ConsolidationVersion                       as     ConsolidationVersion,
      ConsolidationChartOfAccounts,
      :P_ConsolidationRptgItemHier                   as     ConsolidationReportingItemHier,
      //  :P_FinancialStatementItemHier               as     CnsldtnFinStmntItmHier,
      :P_ConsolidationSimlnRptgRuleID                as     ConsolidationSimlnRptgRuleID,
      :P_ConsolidationRptgRuleID                     as     ConsolidationReportingRuleID,
      //  _FinStmntItmHierDir,
      _RuleVarAsg,
      _RptgItmHierDir
}
where
       ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  //    and  GLRecordType             = 'R' //With Reporting Logic
  and(
       FiscalYear                   = $parameters.P_FiscalYear
    or FiscalYear                   = $parameters.P_PreviousFiscalYear
  )
  and(
       FiscalPeriod                 = $parameters.P_FiscalPeriod
    or FiscalPeriod                 = $parameters.P_PreviousPeriod

  )
  and  ConsolidationDimension       = 'Y1' //Fixed value Y1 hidden
//  and  SubItemCategory = '2' //Fixed value hidden
//  and  FiscalPeriod             = $parameters.P_FiscalPeriod
//  and  ConsolidationGroup             = $parameters.P_ConsolidationGroup
//  and  ConsolidationLedger            = $parameters.P_ConsolidationLedger
//  and  ConsolidationVersion         = $parameters.P_ConsolidationVersion
//  and  GroupCurrency     = $parameters.P_GroupCurrency
```
