---
name: C_CNSLDTNGRPACTLCOMPRN30Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPACTLCOMPRN30Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Actual & Budget Comparison with Reporting Rule – Periodic GC — CDS view tiêu dùng dựa trên I_ConsolidationGroupRptEnhcdC."
keywords:
  - "actual"
  - "budget"
  - "comparison"
  - "with"
  - "reporting"
  - "rule"
  - "periodic"
  - "consolidation"
  - "dimension"
  - "group"
  - "currency"
  - "unit"
  - "item"
  - "category"
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
  - budget
---
# C_CNSLDTNGRPACTLCOMPRN30Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPACTLCOMPRN30Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ActualYTDAmountInGroupCrcy1` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualYTDAmountInGroupCrcy2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualAmountInGroupCrcy` |  | |  | `1` | `INT1(3)` |  |
| `BudgetYTDAmountInGrpCurrency1` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetYTDAmountInGrpCurrency2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetAmountInGroupCurrency` |  | |  | `1` | `INT1(3)` |  |
| `BdgtExchRateAmtInGrpCurrency1` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BdgtExchRateAmtInGrpCurrency2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BdgtExchRateAmtInGroupCurrency` |  | |  | `1` | `INT1(3)` |  |
| `OverAllVarianceAmountInGrpCrcy` |  | |  | `1` | `INT1(3)` |  |
| `OverAllVarianceRate` |  | |  | `1` | `INT1(3)` |  |
| `ExchRateDrivenVarcAmtInGrpCrcy` |  | |  | `1` | `INT1(3)` |  |
| `ExchangeRateDrivenVarianceRate` |  | |  | `1` | `INT1(3)` |  |
| `OperationalVarcAmtInGrpCrcy` |  | |  | `1` | `INT1(3)` |  |
| `OperationalVarianceRate` |  | |  | `1` | `INT1(3)` |  |
| `FiscalPeriod` |  | |  | `:P_FiscalPeriod` | `NUMC(3)` |  |
| `PreviousPeriodBackShift1` |  | |  | `:P_PreviousPeriod` | `NUMC(3)` |  |
| `FiscalYear` |  | |  | `:P_FiscalYear` | `NUMC(4)` |  |
| `ConsolidationVersion` |  | |  | `:P_ConsolidationVersion` | `CHAR(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  | `:P_ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `ConsolidationReportingRuleID` |  | |  | `:P_ConsolidationRptgRuleID` | `CHAR(3)` |  |
| `ConsolidationReportingItemHier` |  | |  | `:P_ConsolidationRptgItemHier` | `CHAR(10)` |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnRptgItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPACTLCOMPRN30Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPACTLCOMPRN30Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCGAC30Q'  
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Actual & Budget Comparison with Reporting Rule – Periodic GC'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_QUERY ], 
    modelingPattern: #ANALYTICAL_QUERY    
}   
define view C_CnsldtnGrpActlComprn30Q
  with parameters

    @AnalyticsDetails.query.variableSequence : 01
    @Consumption.valueHelp: '_Hierarchy'
    /*
    @Consumption.derivation: { 
//    lookupEntity: 'I_CnsldtnRptgItmHierDir',
          binding: [{
              targetElement: 'ConsolidationChartOfAccounts',
              type: #PARAMETER,
              value: 'P_ConsolidationChartOfAccounts'
            },{
              targetElement: 'ConsolidationReportingItemHier',
              type: #CONSTANT,
              value: 'X4'
            }],
          resultElement: 'ConsolidationReportingItemHier'
         }
         */
    //    @Consumption.hidden: true
    @Consumption.defaultValue: 'X2'
    P_ConsolidationRptgItemHier     : fincs_rihry,
    
    
    @AnalyticsDetails.query.variableSequence : 03
//    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
//          resultElement: 'ConsolidationLedger'
//         }
    @Consumption.defaultValue: 'Y1'
    P_ConsolidationLedger          : fincs_rldnr,


    @AnalyticsDetails.query.variableSequence : 04
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationChartOfAccounts'
         }
    */
    @Consumption.defaultValue: 'Y1'
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 05
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'FiscalYear'
         }
    */
    @Consumption.defaultValue: '2016'
    P_FiscalYear             : gjahr,

    @AnalyticsDetails.query.variableSequence : 06
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'FiscalPeriod'
         }
    */
    @Consumption.defaultValue: '12'
    P_FiscalPeriod           : poper,

    @Consumption.hidden: true
    @Consumption.derivation: {
//    lookupEntity: 'P_ConsolidationPerdCalculator',
//    resultElement: 'PreviousPeriodBackShift1',
//    binding: [
//    { targetParameter : 'P_FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
//    ]
//    }
    lookupEntity: 'I_ConsolidationYearCalculator',
    resultElement: 'PreviousPeriodBackShift1',
    binding: [
    { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
    { targetElement : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
    { targetElement : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
    ]
    }
    P_PreviousPeriod         : poper,

    @EndUserText.label: 'Actual Version'
    @AnalyticsDetails.query.variableSequence : 07
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationVersion'
         }
    */
    @Consumption.defaultValue: 'Y10'
    P_ConsolidationVersion         : fincs_rvers,

    @EndUserText.label: 'Budget Version'
    @AnalyticsDetails.query.variableSequence : 08
    @Consumption.defaultValue: 'YB2'
    P_ConsolidationVersionVariant1 : fincs_rvers,

    @EndUserText.label: 'Actuals Exchange Rate Version'
    @AnalyticsDetails.query.variableSequence : 09
    @Consumption.defaultValue: 'Y11'
    P_ConsolidationVersionVariant2 : fincs_rvers,

    @AnalyticsDetails.query.variableSequence : 10
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationGroup'
         }
    */
    @Consumption.defaultValue: 'CG2'
    P_ConsolidationGroup           : fincs_congr,

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


  //  as select from I_CnsldtnFndnEnhancedCube(P_ConsolidationRptgItemHier: $parameters.P_ConsolidationRptgItemHier, P_ConsolidationRptgRuleID: $parameters.P_ConsolidationRptgRuleID)
  as select from I_ConsolidationGroupRptEnhcdC(P_ConsolidationRptgItemHier: $parameters.P_ConsolidationRptgItemHier, P_ConsolidationRptgRuleID: $parameters.P_ConsolidationRptgRuleID)

  association [1..1] to I_CnsldtnRptgItmHierDir as _Hierarchy on  _Hierarchy.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                              and _Hierarchy.ConsolidationReportingItemHier     = :P_ConsolidationRptgItemHier
{
  ///////////////////////////////////////////////////////////////////////////////
  // Filter/ Fixed Rows
  ///////////////////////////////////////////////////////////////////////////////
  

  
    
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false, hidden:true}
  @AnalyticsDetails.query.variableSequence : 06
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
        resultElement: 'ConsolidationDimension'
       }
  ConsolidationDimension,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  GroupCurrency,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  //    variableSequence : 40,
  variableSequence : 11,
    axis: #FREE,
    totals: #SHOW,
    display: #KEY
    }
  ConsolidationUnit,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 12
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItemCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 13
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItem,
  
    @Consumption.filter: {
      hierarchyBinding : [
                          { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                          { type : #PARAMETER, value : 'P_ConsolidationRptgItemHier'}],
      selectionType: #HIERARCHY_NODE,
      multipleSelections: false,
      mandatory:          false
  //      defaultValue:'Y1'
       }
  @AnalyticsDetails.query: {
      variableSequence :  02,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 02
      }
  @EndUserText.label: 'Reporting Item'
  ConsolidationReportingItem,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 14
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  PartnerConsolidationUnit,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 15
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.totals: #SHOW
  PostingLevel,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 16
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  CurrencyConversionsDiffType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 17
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationDocumentType,
  
  @Consumption.hidden: true
  ConsolidationGroup,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Actuals-Current Period YTD'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_FiscalPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersion
       then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     ActualYTDAmountInGroupCrcy1,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Actuals-Previous Period YTD'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_PreviousPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersion
       then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     ActualYTDAmountInGroupCrcy2,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Actuals'
  @AnalyticsDetails.query.formula: '$projection.ActualYTDAmountInGroupCrcy1 - $projection.ActualYTDAmountInGroupCrcy2'
  1                                       as     ActualAmountInGroupCrcy, 
 
 
 
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Budget-Current Period'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_FiscalPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     BudgetYTDAmountInGrpCurrency1,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Budget-Previous Period'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_PreviousPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1
       then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     BudgetYTDAmountInGrpCurrency2,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Budget'
  @AnalyticsDetails.query.formula: '$projection.BudgetYTDAmountInGrpCurrency1 - $projection.BudgetYTDAmountInGrpCurrency2'
  1                                       as     BudgetAmountInGroupCurrency,




  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Actuals at Budget Exchange Rate-Current Period'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_FiscalPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2
       then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     BdgtExchRateAmtInGrpCurrency1,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Actuals at Budget Exchange Rate-Previous Period'
  case when FiscalYear     = $parameters.P_FiscalYear
       and  FiscalPeriod   = $parameters.P_PreviousPeriod
       and  ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2
       then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     BdgtExchRateAmtInGrpCurrency2,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Actuals at Budget Exchange Rate'
  @AnalyticsDetails.query.formula: '$projection.BdgtExchRateAmtInGrpCurrency1 - $projection.BdgtExchRateAmtInGrpCurrency2'
  1                                       as     BdgtExchRateAmtInGroupCurrency,
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Overall Variance'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.ActualAmountInGroupCrcy - $projection.BudgetAmountInGroupCurrency'
  1                                       as     OverAllVarianceAmountInGrpCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  //@Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Overall Variance Rate(%)'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.OverAllVarianceAmountInGrpCrcy / $projection.BudgetAmountInGroupCurrency )'
  1                                       as     OverAllVarianceRate,
  //Exchange Rate-Driven Variance = Actuals-Actuals at Budget Exchange Rate
  @AnalyticsDetails.query.axis: #COLUMNS
  //@Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label:'Exchange Rate-Driven Variance'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.ActualAmountInGroupCrcy - $projection.BdgtExchRateAmtInGroupCurrency'
  1                                       as     ExchRateDrivenVarcAmtInGrpCrcy,
  //Exchange Rate-Driven Variance(%) = Exchange Rate-Driven Variance/Bugdet
  @AnalyticsDetails.query.axis: #COLUMNS
  //@Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label:'Exchange Rate-Driven Variance(%)'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.ExchRateDrivenVarcAmtInGrpCrcy / $projection.BudgetAmountInGroupCurrency )'
  1                                       as     ExchangeRateDrivenVarianceRate,

  //Operational Variance = Actuals at Budget Exchange Rate - Budget
  @AnalyticsDetails.query.axis: #COLUMNS
  //@Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label:'Operational Variance'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.BdgtExchRateAmtInGroupCurrency - $projection.BudgetAmountInGroupCurrency'
  1                                       as     OperationalVarcAmtInGrpCrcy,

  //Operational Variance Rate = Operational Variance / Budget
  @AnalyticsDetails.query.axis: #COLUMNS
  //@Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label:'Operational Variance(%)'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.OperationalVarcAmtInGrpCrcy / $projection.BudgetAmountInGroupCurrency )'


  1                                       as     OperationalVarianceRate,
  
 

  :P_FiscalPeriod                         as     FiscalPeriod,
  :P_PreviousPeriod                       as     PreviousPeriodBackShift1,
  :P_FiscalYear                           as     FiscalYear,
  :P_ConsolidationVersion                       as     ConsolidationVersion,
  :P_ConsolidationChartOfAccounts               as     ConsolidationChartOfAccounts,
  :P_ConsolidationRptgRuleID                    as     ConsolidationReportingRuleID,
  :P_ConsolidationRptgItemHier                   as     ConsolidationReportingItemHier,
  _Hierarchy  

}
where
       ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts

  and(
       FiscalYear             = $parameters.P_FiscalYear
  )
  and(
       FiscalPeriod           = $parameters.P_FiscalPeriod
    or FiscalPeriod           = $parameters.P_PreviousPeriod
  )
  and  ConsolidationLedger          = :P_ConsolidationLedger
  and  ConsolidationGroup           = :P_ConsolidationGroup

;
```
