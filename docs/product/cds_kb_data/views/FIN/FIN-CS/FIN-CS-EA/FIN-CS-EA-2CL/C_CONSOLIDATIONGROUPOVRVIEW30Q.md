---
name: C_CONSOLIDATIONGROUPOVRVIEW30Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW30Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Periodic Overview with Reporting Rule – Periodic GC Value — CDS view tiêu dùng dựa trên I_ConsolidationGroupRptEnhcdC."
keywords:
  - "periodic"
  - "overview"
  - "with"
  - "reporting"
  - "rule"
  - "value"
  - "consolidation"
  - "dimension"
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
---
# C_CONSOLIDATIONGROUPOVRVIEW30Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW30Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
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
| `GroupCurrency` |  | |  | `label: 'Ledger currency' @AnalyticsDetails.query.variableSequence : 30 GroupCurrency` | `CUKY(5)` | Group Currency |
| `ConsolidationGroup` |  | |  | `:P_ConsolidationGroup` | `CHAR(18)` |  |
| `FiscalPeriod` |  | |  | `:P_FiscalPeriod` | `NUMC(3)` |  |
| `PreviousPeriodBackShift1` |  | |  | `:P_PreviousPeriod` | `NUMC(3)` |  |
| `FiscalYear` |  | |  | `:P_FiscalYear` | `NUMC(4)` |  |
| `NextFiscalYear` |  | |  | `:P_NextFiscalYear` | `NUMC(4)` |  |
| `FiscalYearShift2` |  | |  | `:P_FiscalYearShift2` | `NUMC(4)` |  |
| `FiscalYearShift3` |  | |  | `:P_FiscalYearShift3` | `NUMC(4)` |  |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW30Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW30Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCGOV30Q'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Periodic Overview with Reporting Rule – Periodic GC Value'
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
define view C_ConsolidationGroupOvrView30Q
  with parameters

    @AnalyticsDetails.query.variableSequence : 01
    @Consumption.valueHelp: '_Hierarchy'
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnRptgItmHierDir',
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
    P_ConsolidationRptgItemHier    : fincs_rihry,
    @AnalyticsDetails.query.variableSequence : 03
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //          resultElement: 'ConsolidationLedger'
    //         }
    @Consumption.defaultValue: 'Y1'
    P_ConsolidationLedger          : fincs_rldnr,
    @EndUserText.label: 'Budget Version'
    @AnalyticsDetails.query.variableSequence : 06
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationVersion'
         }
    */
    P_ConsolidationVersion         : fincs_rvers,
    @AnalyticsDetails.query.variableSequence : 07
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationGroup'
         }
    */
    @Consumption.defaultValue: 'CG2'
    P_ConsolidationGroup           : fincs_congr,

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

    @AnalyticsDetails.query.variableSequence : 07
    @Consumption.hidden: true
    @Consumption.defaultValue: '012'
    P_FiscalPeriod                 : poper,

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
    P_PreviousPeriod               : poper,

    @AnalyticsDetails.query.variableSequence : 08
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

    @AnalyticsDetails.query.variableSequence : 09
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

    @AnalyticsDetails.query.variableSequence : 10
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
    P_FiscalYearShift3             : gjahr,

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

  association [1..1] to I_CnsldtnRptgItmHierDir as _Hierarchy on  _Hierarchy.ConsolidationChartOfAccounts   = :P_ConsolidationChartOfAccounts
                                                              and _Hierarchy.ConsolidationReportingItemHier = :P_ConsolidationRptgItemHier
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

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  //    variableSequence : 40,
  variableSequence : 08,
    axis: #FREE,
    totals: #SHOW,
    display: #KEY
    }
  ConsolidationUnit,
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 09
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItemCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 10
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItem,
  //  @Consumption.filter: {
  //        selectionType:      #RANGE,
  //        multipleSelections: true,
  //        mandatory:          false
  //        }
  //    @AnalyticsDetails.query: {
  //        variableSequence :  80,
  //        axis:               #ROWS,
  //        display:            #KEY_TEXT
  //        }
  //    FinancialStatementItem,
  // subsitute subitem
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
  @AnalyticsDetails.query.variableSequence : 11
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  PartnerConsolidationUnit,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 12
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.totals: #SHOW
  PostingLevel,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 13
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  CurrencyConversionsDiffType,


  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 14
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationDocumentType,

  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  //  @EndUserText.label: 'Y2016 M11 YTD'
  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  //  @AnalyticsDetails.query.formula: 'AmtNewCnsldtnGrpCrcyNow - AmtNewCnsldtnGrpCrcyTemp'
  case
  when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_PreviousPeriod then YTDAmtInCnsldtnGroupCrcy
  else 0
  end                                       as     AmtInLoclCrcyInPrevPerd,
  //end                                              as     PrevPerdYTDAmtInGroupCurrency,

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
  //#To do
  //  as YTDAmtInGroupCurrencyForPerd00,
  // will change back to YTDAmtInGroupCurrencyForPerd00 when approved
                                                   as     YTDAmtInGroupCurrencyForPerd00,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 001'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '001' and
            ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd01,
  //Period 1
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 001'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd01 - $projection.YTDAmtInGroupCurrencyForPerd00'
  1                                                as     PeriodicAmtInGrpCrcyForPerd01,




  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 002'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '002'  and
            ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd02,

  //Period 2
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 002'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd02 - $projection.YTDAmtInGroupCurrencyForPerd01'
  1                                                as     PeriodicAmtInGrpCrcyForPerd02,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 003'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '003'  and
            ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd03,
  //Period 3
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 003'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd03 - $projection.YTDAmtInGroupCurrencyForPerd02'
  1                                                as     PeriodicAmtInGrpCrcyForPerd03,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 004'
  case when FiscalYear   = $parameters.P_FiscalYear and FiscalPeriod = '004' then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd04,
  //Period 4
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 004'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd04 - $projection.YTDAmtInGroupCurrencyForPerd03'
  1                                                as     PeriodicAmtInGrpCrcyForPerd04,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 005'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '005'  and
            ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd05,

  //Period 5
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 005'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd05 - $projection.YTDAmtInGroupCurrencyForPerd04'
  1                                                as     PeriodicAmtInGrpCrcyForPerd05,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 006'
  case when FiscalYear     = $parameters.P_FiscalYear and
            FiscalPeriod   = '006'  and
            ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
       else 0
       end
                                                   as     YTDAmtInGroupCurrencyForPerd06,

  //Period 6
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 006'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd06 - $projection.YTDAmtInGroupCurrencyForPerd05'
  1                                                as     PeriodicAmtInGrpCrcyForPerd06,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 007'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '007'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd07,

  //Period 7
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 007'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd07 - $projection.YTDAmtInGroupCurrencyForPerd06'
  1                                                as     PeriodicAmtInGrpCrcyForPerd07,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 008'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '008'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd08,

  //Period 8
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 008'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd08 - $projection.YTDAmtInGroupCurrencyForPerd07'
  1                                                as     PeriodicAmtInGrpCrcyForPerd08,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 009'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '009'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd09,

  //Period 9
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 009'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd09 - $projection.YTDAmtInGroupCurrencyForPerd08'
  1                                                as     PeriodicAmtInGrpCrcyForPerd09,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 010'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '010'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd10,
  //Period 10
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 010'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd10 - $projection.YTDAmtInGroupCurrencyForPerd09'
  1                                                as     PeriodicAmtInGrpCrcyForPerd10,



  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 011'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '011'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd11,
  //Period 11
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 011'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd11 - $projection.YTDAmtInGroupCurrencyForPerd10'
  1                                                as     PeriodicAmtInGrpCrcyForPerd11,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: true
  @EndUserText.label: 'Period 012'
  case when FiscalYear     = $parameters.P_FiscalYear and
           FiscalPeriod   = '012'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGroupCurrencyForPerd12,

  //Period 12
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Period 012'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.YTDAmtInGroupCurrencyForPerd12 - $projection.YTDAmtInGroupCurrencyForPerd11'
  1                                                as     PeriodicAmtInGrpCrcyForPerd12,


  //////////////////////////


  //  @AnalyticsDetails.query.axis: #COLUMNS
  //  @DefaultAggregation: #SUM
  //  @Semantics.amount.currencyCode: 'GroupCurrency'
  //  @Consumption.hidden: false
  //  @EndUserText.label: 'Plan - Current Year'
  //  case when FiscalYear    = $parameters.P_FiscalYear and
  //           FiscalPeriod   = '012'  and
  //           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
  //      else 0
  //      end
  //                                          as     Period13AmountInAddlCrcy1,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 1)'
  case when FiscalYear    = $parameters.P_NextFiscalYear  and
           FiscalPeriod   = '012'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGrpCrcyForYrShft1,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 2)'
  case when FiscalYear    = $parameters.P_FiscalYearShift2 and
           FiscalPeriod   = '012'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGrpCrcyForYrShft2,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @Consumption.hidden: false
  @EndUserText.label: 'Plan (Selected Year + 3)'
  case when FiscalYear    = $parameters.P_FiscalYearShift3 and
           FiscalPeriod   = '012'  and
           ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
      else 0
      end
                                                   as     YTDAmtInGrpCrcyForYrShft3,



  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @EndUserText. label: 'Ledger currency'
  @AnalyticsDetails.query.variableSequence : 30
  GroupCurrency,


  :P_ConsolidationGroup                            as     ConsolidationGroup,
  :P_FiscalPeriod                                  as     FiscalPeriod,
  :P_PreviousPeriod                                as     PreviousPeriodBackShift1,
  :P_FiscalYear                                    as     FiscalYear,
  :P_NextFiscalYear                                as     NextFiscalYear,
  :P_FiscalYearShift2                              as     FiscalYearShift2,
  :P_FiscalYearShift3                              as     FiscalYearShift3,
  :P_ConsolidationVersion                          as     ConsolidationVersion,
  :P_ConsolidationChartOfAccounts                  as     ConsolidationChartOfAccounts,
  :P_ConsolidationRptgRuleID                       as     ConsolidationReportingRuleID,
  :P_ConsolidationRptgItemHier                     as     ConsolidationReportingItemHier,

  _Hierarchy

}
where
       ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  and  ConsolidationLedger          = $parameters.P_ConsolidationLedger
  and  ConsolidationVersion         = $parameters.P_ConsolidationVersion
  and  ConsolidationGroup           = $parameters.P_ConsolidationGroup
  //  and  GLRecordType           = 'R' //With Reporting Logic
  and(
       FiscalYear                   = $parameters.P_FiscalYear
    or FiscalYear                   = $parameters.P_NextFiscalYear
    or FiscalYear                   = $parameters.P_FiscalYearShift2
    or FiscalYear                   = $parameters.P_FiscalYearShift3
  )
//  and(
//       FiscalPeriod           = $parameters.P_FiscalPeriod
//    or FiscalPeriod           = $parameters.P_PreviousPeriod
//  )
```
