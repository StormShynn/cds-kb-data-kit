---
name: C_CNSLDTNGRPFCSTCOMPRN20Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN20Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Forecast Variance – Periodic GC Value — CDS view tiêu dùng dựa trên I_ConsolidationGroupReportC."
keywords:
  - "forecast"
  - "variance"
  - "periodic"
  - "value"
  - "financial"
  - "statement"
  - "item"
  - "consolidation"
  - "dimension"
  - "unit"
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
---
# C_CNSLDTNGRPFCSTCOMPRN20Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN20Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ActualYTDAmountInGroupCrcy1` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualYTDAmountInGroupCrcy2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualAmountInGroupCrcy` |  | |  | `1` | `INT1(3)` |  |
| `BudgetYTDAmountInGrpCurrency1` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetYTDAmountInGrpCurrency2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetAmountInGroupCurrency` |  | |  | `1` | `INT1(3)` |  |
| `OverAllVarianceAmountInGrpCrcy` |  | |  | `1` | `INT1(3)` |  |
| `AmtInCnsldtnYrFcstGrpCrcy` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `AmtInCnsldtnYrBdgtGrpCrcy` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `AnnualBasedVarcAmtInGrpCrcy` |  | |  | `1` | `INT1(3)` |  |
| `AnnualVarianceRate` |  | |  | `1` | `INT1(3)` |  |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalYear` |  | |  | `:P_FiscalYear` | `NUMC(4)` |  |
| `FiscalPeriod` |  | |  | `:P_FiscalPeriod` | `NUMC(3)` |  |
| `ConsolidationVersion` |  | |  | `:P_ConsolidationVersion` | `CHAR(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  | `:P_ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `PreviousPeriodBackShift1` |  | |  | `:P_PreviousPeriod` | `NUMC(3)` |  |
| `_FinStmntItmHierDir` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN20Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN20Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCGFC20Q'
@EndUserText.label: 'Forecast Variance – Periodic GC Value'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
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
define view C_CnsldtnGrpFcstComprn20Q
  with parameters

    @AnalyticsDetails.query.variableSequence : 01
    @Consumption.valueHelpDefinition: [{ 
         entity: {
                   name: 'I_FinStmntItmHierDirVH',
                   element: 'FinancialStatementItemHier'  }
    }]
    @Consumption.derivation: { lookupEntity: 'I_FinStmntItmHierDir',
          binding: [{
              targetElement: 'ConsolidationChartOfAccounts',
              type: #PARAMETER,
              value: 'P_ConsolidationChartOfAccounts'
            },{
              targetElement: 'FinancialStatementItemHier',
              type: #CONSTANT,
              value: 'PL'
            }],
          resultElement: 'FinancialStatementItemHier'
         }
    P_FinancialStatementItemHier : fincs_ithry,

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

    @EndUserText.label: 'Forecast Version'
    @Consumption.defaultValue: 'YF6'
    @AnalyticsDetails.query.variableSequence : 09
    P_ConsolidationVersionVariant2 : fincs_rvers,

    @AnalyticsDetails.query.variableSequence : 10
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationGroup'
         }
    */
    @Consumption.defaultValue: 'CG2'
    P_ConsolidationGroup           : fincs_congr

  as select from I_ConsolidationGroupReportC
  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = :P_FinancialStatementItemHier
{
  @Consumption.filter: {
      hierarchyBinding : [
                          { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                          { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],
      selectionType: #HIERARCHY_NODE,
      multipleSelections: true,
      mandatory:          false
      }
  @AnalyticsDetails.query: {
      variableSequence :  02,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 2

      }
  FinancialStatementItem,


  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false, hidden:true}
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
        resultElement: 'ConsolidationDimension'
       }
  ConsolidationDimension,

  //  @AnalyticsDetails.query.axis: #FREE
  //  @AnalyticsDetails.query.totals: #SHOW
  //  GroupCurrency,




  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  //  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //        resultElement: 'ConsolidationUnit'
  //       }
  @AnalyticsDetails.query: {
    variableSequence : 70,
    axis: #FREE,
    totals: #SHOW,
    display: #KEY
    }
  ConsolidationUnit,




  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 90
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItemCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 100
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItem,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 110
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  PartnerConsolidationUnit,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 120
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.totals: #SHOW
  PostingLevel,


  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 140
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  CurrencyConversionsDiffType,


  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 150
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationDocumentType,

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
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Overall Variance'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.ActualAmountInGroupCrcy - $projection.BudgetAmountInGroupCurrency'
  1                                       as     OverAllVarianceAmountInGrpCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Annual Forecast'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '012' and
            ConsolidationVersion = $parameters.P_ConsolidationVersionVariant2 then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     AmtInCnsldtnYrFcstGrpCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Annual Budget'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '012' and
            ConsolidationVersion = $parameters.P_ConsolidationVersionVariant1 then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                          as     AmtInCnsldtnYrBdgtGrpCrcy,
  //Annual Variance = Annual Forecast - Annual Budget
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Annual Variance'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.AmtInCnsldtnYrFcstGrpCrcy - $projection.AmtInCnsldtnYrBdgtGrpCrcy'
  1                                       as     AnnualBasedVarcAmtInGrpCrcy,


  //Annual Variance Rate= Annual Variance/Annual Budget
  @AnalyticsDetails.query.axis: #COLUMNS
  @Consumption.hidden: false
  @EndUserText.label: 'Annual Variance(%)'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( $projection.AnnualBasedVarcAmtInGrpCrcy / $projection.AmtInCnsldtnYrBdgtGrpCrcy)'
  1                                       as     AnnualVarianceRate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  GroupCurrency,

  @Consumption.hidden: true
  ConsolidationGroup,

  :P_FiscalYear                           as     FiscalYear,
  :P_FiscalPeriod                         as     FiscalPeriod,
  :P_ConsolidationVersion                       as     ConsolidationVersion,
  :P_ConsolidationChartOfAccounts               as     ConsolidationChartOfAccounts,
  :P_FinancialStatementItemHier               as     FinancialStatementItemHier,
  :P_PreviousPeriod                       as     PreviousPeriodBackShift1,
  _FinStmntItmHierDir
}
where
       ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
  //  and GLRecordType           = 'R'  //With Reporting Logic
  and(
       FiscalYear             = $parameters.P_FiscalYear

  )
  and(
       FiscalPeriod           = $parameters.P_FiscalPeriod
    or FiscalPeriod           = $parameters.P_PreviousPeriod
  )
  and  ConsolidationLedger          = :P_ConsolidationLedger
  and  ConsolidationGroup           = :P_ConsolidationGroup;
```
