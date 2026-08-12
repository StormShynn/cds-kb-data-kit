---
name: C_CONSOLIDATIONGROUPOVRVIEW20Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW20Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Periodic Overview – Periodic GC Value — CDS view tiêu dùng dựa trên I_ConsolidationGroupReportC."
keywords:
  - "periodic"
  - "overview"
  - "value"
  - "financial"
  - "statement"
  - "item"
  - "consolidation"
  - "dimension"
  - "group"
  - "currency"
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
# C_CONSOLIDATIONGROUPOVRVIEW20Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW20Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `AmtInLoclCrcyInPrevPerd` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd00` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '000' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd01` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '001' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd01` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd02` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '002' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd02` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd03` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '003' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd03` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd04` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '004' then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd04` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd05` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '005' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd05` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd06` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '006' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd06` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd07` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '007' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd07` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd08` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '008' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd08` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd09` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '009' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd09` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd10` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '010' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd10` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd11` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '011' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd11` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGroupCurrencyForPerd12` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `PeriodicAmtInGrpCrcyForPerd12` |  | |  | `1` | `INT1(3)` |  |
| `YTDAmtInGrpCrcyForYrShft1` |  | |  | `case when FiscalYear = $parameters.P_NextFiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYearShift2 and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft3` |  | |  | `case when FiscalYear = $parameters.P_FiscalYearShift3 and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `FiscalYear` |  | |  | `:P_FiscalYear` | `NUMC(4)` |  |
| `ConsolidationGroup` |  | |  | `:P_ConsolidationGroup` | `CHAR(18)` |  |
| `NextFiscalYear` |  | |  | `:P_NextFiscalYear` | `NUMC(4)` |  |
| `FiscalYearShift2` |  | |  | `:P_FiscalYearShift2` | `NUMC(4)` |  |
| `FiscalYearShift3` |  | |  | `:P_FiscalYearShift3` | `NUMC(4)` |  |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW20Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW20Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCGOV20Q'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Periodic Overview – Periodic GC Value'
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
define view C_ConsolidationGroupOvrView20Q
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
    P_FinancialStatementItemHier   : fincs_ithry,

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
    P_FiscalYear                   : gjahr,



    @EndUserText.label: 'Budget Version'
    @AnalyticsDetails.query.variableSequence : 06
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationVersion'
         }
    */
    @Consumption.defaultValue: 'Y10'
    P_ConsolidationVersion         : fincs_rvers,


    @EndUserText.label: 'Consolidation Group'
    @AnalyticsDetails.query.variableSequence : 07
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationGroup'
         }
    */
    @Consumption.defaultValue: 'CG2'
    P_ConsolidationGroup           : fincs_congr,


    //@AnalyticsDetails.query.variableSequence : 08
    @Consumption.hidden: true
    @Consumption.defaultValue: '012'
    P_FiscalPeriod                 : poper,

    @Consumption.hidden: true
    @Consumption.derivation: {
//          lookupEntity: 'P_ConsolidationPerdCalculator',
//          resultElement: 'PreviousPeriodBackShift1',
//          binding: [
//              { targetParameter : 'P_FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
//           ]
//          }
lookupEntity: 'I_ConsolidationYearCalculator',
    resultElement: 'PreviousPeriodBackShift1',
    binding: [
    { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
    { targetElement : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
    { targetElement : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
    ]
    }
    P_PreviousPeriod               : poper,



    @Consumption.hidden: true
    @Consumption.derivation: {
//          lookupEntity: 'P_ConsolidationYearCalculator',
//          resultElement: 'NextFiscalYear',
//          binding: [
//            { targetParameter : 'P_FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
//          ]
//         }
  lookupEntity: 'I_ConsolidationYearCalculator',
    resultElement: 'NextFiscalYear',
    binding: [
    { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
    { targetElement : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
    { targetElement : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
    ]
    }     
    P_NextFiscalYear               : gjahr,

    //@AnalyticsDetails.query.variableSequence : 09
    @Consumption.hidden: true
    @Consumption.derivation: {
//          lookupEntity: 'P_ConsolidationYearCalculator',
//          resultElement: 'FiscalYearShift2',
//          binding: [
//            { targetParameter : 'P_FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
//          ]
//         }
          lookupEntity: 'I_ConsolidationYearCalculator',
          resultElement: 'FiscalYearShift2',
          binding: [
            { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
            { targetElement   : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
            { targetElement   : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
          ]
         }
    P_FiscalYearShift2             : gjahr,

    //@AnalyticsDetails.query.variableSequence : 10
    @Consumption.hidden: true
    @Consumption.derivation: {
//          lookupEntity: 'P_ConsolidationYearCalculator',
//          resultElement: 'FiscalYearShift3',
//          binding: [
//            { targetParameter : 'P_FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
//          ]
//         }
         lookupEntity: 'I_ConsolidationYearCalculator',
          resultElement: 'FiscalYearShift3',
          binding: [
           { targetElement : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
           { targetElement   : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
           { targetElement   : 'FiscalPeriod', type : #PARAMETER, value : 'P_FiscalPeriod' }
          ]
         }
    P_FiscalYearShift3             : gjahr


  as select from I_ConsolidationGroupReportC
  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier   = :P_FinancialStatementItemHier
{
  ///////////////////////////////////////////////////////////////////////////////
  // Filter/ Fixed Rows
  ///////////////////////////////////////////////////////////////////////////////


  @Consumption.filter: {
    hierarchyBinding : [
                        { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                        { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],
      selectionType: #HIERARCHY_NODE,
      multipleSelections: false,
      mandatory:          false
      }
  @AnalyticsDetails.query: {
        variableSequence :  02,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
  //      displayHierarchy:   #ON,
      hierarchyInitialLevel: 2

      }
  FinancialStatementItem,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false, hidden:true}
  //@AnalyticsDetails.query.variableSequence : 11
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
        resultElement: 'ConsolidationDimension'
       }
  ConsolidationDimension,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  GroupCurrency,



  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  //  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //        resultElement: 'ConsolidationUnit'
  //       }
  @AnalyticsDetails.query: {
    variableSequence : 10,
    axis: #FREE,
    totals: #SHOW,
    display: #KEY
    }
  ConsolidationUnit,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 11
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItemCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 12
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItem,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 13
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  PartnerConsolidationUnit,


  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 14
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.totals: #SHOW
  PostingLevel,



  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 15
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  CurrencyConversionsDiffType,


  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 16
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationDocumentType,

  //Period 0 - YTD
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  // @EndUserText.label: 'Y2016 M11 YTD'
  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  //  @AnalyticsDetails.query.formula: 'AmtNewCnsldtnGrpCrcyNow - AmtNewCnsldtnGrpCrcyTemp'
  case
        when FiscalYear     = $parameters.P_FiscalYear
        and  FiscalPeriod   = $parameters.P_PreviousPeriod
        then YTDAmtInCnsldtnGroupCrcy
        else 0
  //current year previous period YTD amount
  end                                     as     AmtInLoclCrcyInPrevPerd,
    //end                                           as     PrevPerdYTDAmtInGroupCurrency,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 000'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '000'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
  end
  //to do Period13AmountInTransacCrcy
  //  as YTDAmtInGroupCurrencyForPerd00,
  // will change back to YTDAmtInGroupCurrencyForPerd00 when approved
                                                  as     YTDAmtInGroupCurrencyForPerd00,
  //Period 1 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 001'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '001'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
  end
  //current year month 01 YTD amount
                                                  as     YTDAmtInGroupCurrencyForPerd01,


  //Period 1 - Peiordic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 001'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd01 - $projection.YTDAmtInGroupCurrencyForPerd00'
  1                                               as     PeriodicAmtInGrpCrcyForPerd01,

  //Period 2 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 002'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '002'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
  end
                                                  as     YTDAmtInGroupCurrencyForPerd02,

  //Period 2 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 002'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd02 - $projection.YTDAmtInGroupCurrencyForPerd01'
  1                                               as     PeriodicAmtInGrpCrcyForPerd02,

  //Period 3 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 003'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '003'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd03,
  //Period 3 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 003'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd03 - $projection.YTDAmtInGroupCurrencyForPerd02'
  1                                               as     PeriodicAmtInGrpCrcyForPerd03,
  //Period 4 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 004'
  case
      when FiscalYear   = $parameters.P_FiscalYear
      and FiscalPeriod  = '004'
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd04,
  //Period 4 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 004'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd04 - $projection.YTDAmtInGroupCurrencyForPerd03'
  1                                               as     PeriodicAmtInGrpCrcyForPerd04,
  //Period 5 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 005'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '005'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd05,

  //Period 5 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 005'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd05 - $projection.YTDAmtInGroupCurrencyForPerd04'
  1                                               as     PeriodicAmtInGrpCrcyForPerd05,
  //Period 6 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 006'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '006'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd06,

  //Period 6 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 006'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd06 - $projection.YTDAmtInGroupCurrencyForPerd05'
  1                                               as     PeriodicAmtInGrpCrcyForPerd06,

  //Period 7 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 007'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '007'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd07,

  //Period 7 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 007'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd07 - $projection.YTDAmtInGroupCurrencyForPerd06'
  1                                               as     PeriodicAmtInGrpCrcyForPerd07,

  //Period 8 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 008'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '008'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd08,

  //Period 8 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 008'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd08 - $projection.YTDAmtInGroupCurrencyForPerd07'
  1                                               as     PeriodicAmtInGrpCrcyForPerd08,

  //Period 9 -YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 009'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '009'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd09,

  //Period 9 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 009'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd09 - $projection.YTDAmtInGroupCurrencyForPerd08'
  1                                               as     PeriodicAmtInGrpCrcyForPerd09,

  //Period 10 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 010'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '010'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd10,
  //Period 10 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 010'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd10 - $projection.YTDAmtInGroupCurrencyForPerd09'
  1                                               as     PeriodicAmtInGrpCrcyForPerd10,


  //Period 11 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 011'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '011'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd11,
  //Period 11 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 011'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd11 - $projection.YTDAmtInGroupCurrencyForPerd10'
  1                                               as     PeriodicAmtInGrpCrcyForPerd11,

  //Period 12 - YTD
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 012'
  case
      when FiscalYear     = $parameters.P_FiscalYear
      and  FiscalPeriod   = '012'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGroupCurrencyForPerd12,

  //Period 12 - Periodic
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 012'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd12 - $projection.YTDAmtInGroupCurrencyForPerd11'
  1                                               as     PeriodicAmtInGrpCrcyForPerd12,


  //Year +1
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 1)'
  case
      when FiscalYear     = $parameters.P_NextFiscalYear
      and  FiscalPeriod   = '012'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGrpCrcyForYrShft1,
  //Year +2
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 2)'
  case
      when FiscalYear     = $parameters.P_FiscalYearShift2
      and  FiscalPeriod   = '012'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGrpCrcyForYrShft2,
  //Year +3
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 3)'
  case
      when FiscalYear     = $parameters.P_FiscalYearShift3
      and  FiscalPeriod   = '012'
      and  ConsolidationVersion = $parameters.P_ConsolidationVersion
      then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                  as     YTDAmtInGrpCrcyForYrShft3,




  :P_FiscalYear                                   as     FiscalYear,
  :P_ConsolidationGroup                           as     ConsolidationGroup,
  :P_NextFiscalYear                               as     NextFiscalYear,
  :P_FiscalYearShift2                             as     FiscalYearShift2,
  :P_FiscalYearShift3                             as     FiscalYearShift3,
  :P_ConsolidationVersion                         as     ConsolidationVersion,
  :P_ConsolidationChartOfAccounts                 as     ConsolidationChartOfAccounts,
  :P_FinancialStatementItemHier                   as     FinancialStatementItemHier,
  :P_PreviousPeriod                               as     PreviousPeriodBackShift1,
  _FinStmntItmHierDir
}
where
       ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts

  and(
       FiscalYear                   = $parameters.P_FiscalYear
    or FiscalYear                   = $parameters.P_NextFiscalYear
    or FiscalYear                   = $parameters.P_FiscalYearShift2
    or FiscalYear                   = $parameters.P_FiscalYearShift3

  )
  and  ConsolidationVersion         = $parameters.P_ConsolidationVersion
  and  ConsolidationGroup           = $parameters.P_ConsolidationGroup
  and  ConsolidationLedger          = $parameters.P_ConsolidationLedger;
```
