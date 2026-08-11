---
name: C_CONSOLIDATIONGROUPOVRVIEW10Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Periodic Overview - YTD GC Value — CDS view tiêu dùng dựa trên I_ConsolidationGroupReportC."
keywords:
  - "periodic"
  - "overview"
  - "ytd"
  - "value"
  - "consolidation"
  - "dimension"
  - "unit"
  - "financial"
  - "statement"
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
# C_CONSOLIDATIONGROUPOVRVIEW10Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `YTDAmtInGroupCurrencyForPerd01` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '001' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd02` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '002' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd03` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '003' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd04` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '004' then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd05` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '005' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd06` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '006' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd07` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '007' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd08` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '008' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd09` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '009' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd10` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '010' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd11` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '011' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd12` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft1` |  | |  | `case when FiscalYear = $parameters.P_NextFiscalYear and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft2` |  | |  | `case when FiscalYear = $parameters.P_FiscalYearShift2 and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft3` |  | |  | `case when FiscalYear = $parameters.P_FiscalYearShift3 and FiscalPeriod = '012' and ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `FiscalYear` |  | |  | `:P_FiscalYear` | `NUMC(4)` |  |
| `ConsolidationGroup` |  | |  | `:P_ConsolidationGroup` | `CHAR(18)` |  |
| `NextFiscalYear` |  | |  | `:P_NextFiscalYear` | `NUMC(4)` |  |
| `FiscalYearShift2` |  | |  | `:P_FiscalYearShift2` | `NUMC(4)` |  |
| `FiscalYearShift3` |  | |  | `:P_FiscalYearShift3` | `NUMC(4)` |  |
| `ConsolidationVersion` |  | |  | `:P_ConsolidationVersion` | `CHAR(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  | `:P_ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `_FinStmntItmHierDir` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCGOV10Q'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Periodic Overview - YTD GC Value'
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
define view C_ConsolidationGroupOvrView10Q
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
              value: 'BS'
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
    
    @Consumption.defaultValue: 'Y10'
    @EndUserText.label: 'Budget Version'
    @AnalyticsDetails.query.variableSequence : 06
    /*
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
          resultElement: 'ConsolidationVersion'
         }
    */     
    P_ConsolidationVersion         : fincs_rvers,

    /*   @EndUserText.label: 'Compare Version'
       @AnalyticsDetails.query.variableSequence : 04
       P_ConsolidationVersionVariant  : FINCS_RVERS, */
       
    @EndUserText.label: 'Consolidation Group'
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
    P_FiscalYear             : gjahr,

//    @AnalyticsDetails.query.variableSequence : 07
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
    { targetElement : 'FiscalPeriod', type : #CONSTANT, value : '001' }
    ]
    }        
     
    P_NextFiscalYear         : gjahr,

    @AnalyticsDetails.query.variableSequence : 08
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
            { targetElement   : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
            { targetElement   : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
            { targetElement   : 'FiscalPeriod', type : #CONSTANT, value : '001' }
          ]
         }
    P_FiscalYearShift2       : gjahr,

    @AnalyticsDetails.query.variableSequence : 09
    @Consumption.hidden: true
    @Consumption.derivation: {
//    lookupEntity: 'P_ConsolidationYearCalculator',
//          resultElement: 'FiscalYearShift3',
//          binding: [
//            { targetParameter : 'P_FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' }
//          ]
//         }
          lookupEntity: 'I_ConsolidationYearCalculator',
          resultElement: 'FiscalYearShift3',
          binding: [
           { targetElement  : 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
           { targetElement   : 'FiscalYearVariant', type : #CONSTANT , value :'K4'},
           { targetElement   : 'FiscalPeriod', type : #CONSTANT, value : '001' }
          ]
         }
    P_FiscalYearShift3       : gjahr


  as select from I_ConsolidationGroupReportC
  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = :P_FinancialStatementItemHier
{
      ///////////////////////////////////////////////////////////////////////////////
      // Filter/ Fixed Rows
      ///////////////////////////////////////////////////////////////////////////////

      //_Ledger._Text[1:Language = $parameters.P_Language].ConsolidationLedgerName,


      //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
      //@AnalyticsDetails.query.variableSequence : 15
      //@Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
      //      resultElement: 'ConsolidationChartOfAccounts'
      //     }

      //@AnalyticsDetails.query.axis: #FREE
      //ConsolidationChartOfAccounts,
      //_ChartOfAccounts._Text[1:Language = $parameters.P_Language].ConsolidationChartOfAccountsText,


      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false, hidden:true}
      @AnalyticsDetails.query.variableSequence : 20
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
            resultElement: 'ConsolidationDimension'
           }
      ConsolidationDimension,


      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
//      @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
//            resultElement: 'ConsolidationUnit'
//           }
      @AnalyticsDetails.query: {
      //    variableSequence : 70,
        variableSequence : 08,
        axis: #FREE,
        totals: #SHOW,
        display: #KEY
        }
      ConsolidationUnit,
      //_ConsUnit._Text[1:Language = $parameters.P_Language].ConsUnitShortText,

      @Consumption.filter: {
          hierarchyBinding : [
                              { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                              { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],
      //    defaultHierarchyNode.nodeType: 'FinancialStatementItem',
      //    defaultHierarchyNode.node: [ { element: 'ConsolidationChartOfAccounts' ,value: 'Y1' },
      //                                 { element: 'FinancialStatementItem'     ,value: 'TA0000' } ],
          selectionType: #HIERARCHY_NODE,
      //      selectionType: #RANGE,
          multipleSelections: true,
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

      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 90
      @AnalyticsDetails.query.variableSequence : 09
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      SubItemCategory,

      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
//      @AnalyticsDetails.query.variableSequence : 100
      @AnalyticsDetails.query.variableSequence : 10
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      SubItem,

      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 110
      @AnalyticsDetails.query.variableSequence : 11
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      PartnerConsolidationUnit,

      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 120
      @AnalyticsDetails.query.variableSequence : 12
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.totals: #SHOW
      PostingLevel,

      /*  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
        @AnalyticsDetails.query.variableSequence : 130
        @AnalyticsDetails.query.axis: #FREE
        @AnalyticsDetails.query.display: #KEY
        ConsolidationApportionment, */

      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 140
      @AnalyticsDetails.query.variableSequence : 13
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      CurrencyConversionsDiffType,


      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
      //  @AnalyticsDetails.query.variableSequence : 150
      @AnalyticsDetails.query.variableSequence : 14
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY
      ConsolidationDocumentType,


      /* @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
       @AnalyticsDetails.query.variableSequence : 160
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY
       InvesteeConsolidaitonUnit,*/

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 001'
      case when FiscalYear     = $parameters.P_FiscalYear and
                FiscalPeriod   = '001' and
                ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd01,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 002'
      case when FiscalYear     = $parameters.P_FiscalYear and
                FiscalPeriod   = '002'  and
                ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd02,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 003'
      case when FiscalYear     = $parameters.P_FiscalYear and
                FiscalPeriod   = '003'  and
                ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd03,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 004'
      case when FiscalYear   = $parameters.P_FiscalYear and FiscalPeriod = '004' then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd04,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 005'
      case when FiscalYear     = $parameters.P_FiscalYear and
                FiscalPeriod   = '005'  and
                ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd05,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 006'
      case when FiscalYear     = $parameters.P_FiscalYear and
                FiscalPeriod   = '006'  and
                ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
           else 0
           end
                                            as YTDAmtInGroupCurrencyForPerd06,


      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 007'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '007'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd07,


      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 008'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '008'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd08,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 009'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '009'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd09,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 010'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '010'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd10,


      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 011'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '011'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd11,


      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GroupCurrency'
      @Consumption.hidden: false
      @EndUserText.label: 'Period 012'
      case when FiscalYear     = $parameters.P_FiscalYear and
               FiscalPeriod   = '012'  and
               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
          else 0
          end
                                            as YTDAmtInGroupCurrencyForPerd12,
      /////////////////////////////////////////Top For Period 13-16/////////////////////////////////////////////////
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'GroupCurrency'
//      @Consumption.hidden: false
//      @EndUserText.label: 'Period 013'
//      case when FiscalYear     = $parameters.P_FiscalYear and
//               FiscalPeriod   = '013'  and
//               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
//          else 0
//          end
//                                            as Period13AmountInAddlCrcy,
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'GroupCurrency'
//      @Consumption.hidden: false
//      @EndUserText.label: 'Period 014'
//      case when FiscalYear     = $parameters.P_FiscalYear and
//               FiscalPeriod   = '014'  and
//               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
//          else 0
//          end
//                                            as Period14AmountInAddlCrcy,
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'GroupCurrency'
//      @Consumption.hidden: false
//      @EndUserText.label: 'Period 015'
//      case when FiscalYear     = $parameters.P_FiscalYear and
//               FiscalPeriod   = '015'  and
//               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
//          else 0
//          end
//                                            as Period15AmountInAddlCrcy,
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'GroupCurrency'
//      @Consumption.hidden: false
//      @EndUserText.label: 'Period 016'
//      case when FiscalYear     = $parameters.P_FiscalYear and
//               FiscalPeriod   = '016'  and
//               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
//          else 0
//          end
//                                            as Period16AmountInAddlCrcy,

      /////////////////////////////////////////Bottom For Period 13-16/////////////////////////////////////////////////


      /////////////////////////////////////////Top For Year+1, Year+2, Year+3/////////////////////////////////////////////////
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @DefaultAggregation: #SUM
//      @Semantics.amount.currencyCode: 'GroupCurrency'
//      @Consumption.hidden: false
//      @EndUserText.label: 'Plan - Current Year'
//      case when FiscalYear    = $parameters.P_FiscalYear and
//               FiscalPeriod   = '012'  and
//               ConsolidationVersion = $parameters.P_ConsolidationVersion then YTDAmtInCnsldtnGroupCrcy
//          else 0
//          end
//                                            as Period13AmountInAddlCrcy1,

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
                                            as YTDAmtInGrpCrcyForYrShft1,

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
                                            as YTDAmtInGrpCrcyForYrShft2,

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
                                            as YTDAmtInGrpCrcyForYrShft3,

      /////////////////////////////////////////Bottom For Year+1, Year+2, Year+3/////////////////////////////////////////////////

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      GroupCurrency,
         


      :P_FiscalYear                         as FiscalYear,
      :P_ConsolidationGroup                       as ConsolidationGroup,
      :P_NextFiscalYear                     as NextFiscalYear,
      :P_FiscalYearShift2                   as FiscalYearShift2,
      :P_FiscalYearShift3                   as FiscalYearShift3,
      :P_ConsolidationVersion                     as ConsolidationVersion,
      :P_ConsolidationChartOfAccounts             as ConsolidationChartOfAccounts,
      :P_FinancialStatementItemHier             as FinancialStatementItemHier,
      _FinStmntItmHierDir
}
where
       ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  //  and GLRecordType           = 'R'  //With Reporting Logic
  and(
       FiscalYear             = $parameters.P_FiscalYear
    or FiscalYear             = $parameters.P_NextFiscalYear
    or FiscalYear             = $parameters.P_FiscalYearShift2
    or FiscalYear             = $parameters.P_FiscalYearShift3
    // Said that it was too complex for below where condition
    //    or (FiscalYear           = $parameters.P_NextFiscalYear   and FiscalPeriod = '012' )
    //    or (FiscalYear           = $parameters.P_FiscalYearShift2 and FiscalPeriod = '012' )
    //    or (FiscalYear           = $parameters.P_FiscalYearShift3 and FiscalPeriod = '012' )
  )
  
  and  ConsolidationVersion         = $parameters.P_ConsolidationVersion
  and  ConsolidationGroup           = $parameters.P_ConsolidationGroup
  and  ConsolidationLedger          = $parameters.P_ConsolidationLedger;
```
