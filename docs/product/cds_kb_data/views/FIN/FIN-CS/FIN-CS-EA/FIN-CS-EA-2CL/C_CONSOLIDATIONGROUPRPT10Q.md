---
name: C_CONSOLIDATIONGROUPRPT10Q
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT10Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidated Balance Sheet — CDS view tiêu dùng dựa trên I_ConsolidationGroupReportC."
keywords:
  - "consolidated"
  - "balance"
  - "sheet"
  - "consolidation"
  - "version"
  - "year"
  - "date"
  - "amount"
  - "crcy"
  - "prev"
  - "group"
  - "fiscal"
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
# C_CONSOLIDATIONGROUPRPT10Q

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT10Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  |  | `CHAR(3)` | Consolidation Version |
| `YearToDateAmountInGrpCrcy` |  | |  | `case when FiscalYear = $parameters.P_FiscalYear then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyInPrevYr` |  | |  | `case when FiscalYear = $parameters.P_PreviousFiscalYear then YTDAmtInCnsldtnGroupCrcy else 0 end` | `CURR(23)` | Cumulative Value in Group Currency |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PreviousFiscalYear` |  | |  | `:P_PreviousFiscalYear` | `NUMC(4)` |  |
| `ConsolidationChartOfAccounts` |  | |  | `:P_ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `_FinStmntItmHierDir` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT10Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT10Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCSBSRPT10Q'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Consolidated Balance Sheet'
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY
}
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status:  #NOT_ALLOWED
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
@OData.publish: true
define view C_ConsolidationGroupRpt10Q
  with parameters
    @EndUserText.label: 'Version'
    @AnalyticsDetails.query.variableSequence : 01
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //          resultElement: 'ConsolidationVersion'
    //         }
    P_ConsolidationVersion         : fincs_rvers,
    @AnalyticsDetails.query.variableSequence : 02
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //          resultElement: 'ConsolidationGroup'
    //         }
    P_ConsolidationGroup           : fincs_congr,
    @AnalyticsDetails.query.variableSequence : 03
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //          resultElement: 'FiscalYear'
    //         }
    P_FiscalYear             : gjahr,
    @AnalyticsDetails.query.variableSequence : 04
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
    { targetElement : 'FiscalPeriod', type : #CONSTANT, value : '001' }
    ]
    }   
    P_PreviousFiscalYear     : gjahr,

    @AnalyticsDetails.query.variableSequence : 05
    //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'FiscalPeriod'
    //    }

    P_FiscalPeriod           : poper,
    @AnalyticsDetails.query.variableSequence : 06
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'ConsolidationLedger'
    //    }
    //    @Consumption.hidden: true
    P_ConsolidationLedger          : fincs_rldnr,

    //currency 07
    @AnalyticsDetails.query.variableSequence : 07
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'GroupCurrency'
    //    }
    @EndUserText.label: 'Group Currency'
    P_GroupCurrency   : waers,

    @AnalyticsDetails.query.variableSequence : 08
    //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //    resultElement: 'ConsolidationChartOfAccounts'
    //    }
    @Consumption.defaultValue : 'Y1'
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 16
    @Consumption.valueHelp: '_FinStmntItmHierDir'
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

    P_FinancialStatementItemHier : fincs_ithry



  //    @AnalyticsDetails.query.variableSequence : 08
  //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //    resultElement: 'ConsolidationLedger'}
  //    //@Consumption.defaultValue : 'Y1'
  //    P_ConsolidationLedger          : FINCS_RLDNR

  as select from I_ConsolidationGroupReportC


  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = :P_FinancialStatementItemHier
{
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 01
  key ConsolidationVersion,
  // Amount in current year
  @AnalyticsDetails.query.axis: #COLUMNS
  //  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @EndUserText.label: 'YTD Amount'
  case
  when FiscalYear = $parameters.P_FiscalYear then YTDAmtInCnsldtnGroupCrcy
  else 0
  end                                   as     YearToDateAmountInGrpCrcy,

  // Amount in previous year
  @AnalyticsDetails.query.axis: #COLUMNS
  //  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GroupCurrency'
  @EndUserText.label: 'Prior Year YTD Amount'
  case
  when FiscalYear = $parameters.P_PreviousFiscalYear then YTDAmtInCnsldtnGroupCrcy
  else 0
  end                                   as     YTDAmtInGrpCrcyInPrevYr,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 02
  ConsolidationGroup,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @EndUserText.label: 'FiscalYear'
  @AnalyticsDetails.query.variableSequence : 03
  FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 04
  FiscalPeriod,
//  @Consumption.filter:{hidden:true,defaultValue:'Y1'}
  @AnalyticsDetails.query.variableSequence : 05
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationDimension,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true,defaultValue:'Y1'}
  @AnalyticsDetails.query.variableSequence : 06
  ConsolidationLedger,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 07
  @EndUserText.label: 'Group Currency'
  GroupCurrency,
//  @AnalyticsDetails.query.axis: #FREE
//  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
//  @EndUserText.label: 'Cons chart of accts'
//  @AnalyticsDetails.query.variableSequence : 08
//  ConsolidationChartOfAccounts ,
  //  @AnalyticsDetails.query.axis: #FREE
  //  @AnalyticsDetails.query.totals: #SHOW
  //  @AnalyticsDetails.query.variableSequence : 08
  //  @EndUserText.label: 'Posting Level'
  //  PostingLevel,
  @AnalyticsDetails.query.variableSequence : 09
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  SubItemCategory,
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
      variableSequence :  15,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
//        displayHierarchy:   #ON,
      hierarchyInitialLevel: 2
      }
  FinancialStatementItem,
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //  @AnalyticsDetails.query.variableSequence : 100
  //  @AnalyticsDetails.query.axis: #FREE
  //  @AnalyticsDetails.query.display: #KEY
  //change label to movement
  @EndUserText.label: 'Movement'
  SubItem,
  @AnalyticsDetails.query: {
  //    variableSequence : 40,
  variableSequence : 11,
  axis: #FREE,
  totals: #SHOW,
  display: #KEY
  }
  ConsolidationUnit,
  @AnalyticsDetails.query.variableSequence : 12
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  PartnerConsolidationUnit,
  @AnalyticsDetails.query.variableSequence : 13
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.totals: #SHOW
  PostingLevel,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.variableSequence : 16
  @EndUserText.label: 'Segment'
  Segment,
  //  :P_FiscalYear                         as     FiscalYear,
  //      :P_ConsolidationDimension                   as     ConsolidationDimension,
  //# to do
  //    :P_FiscalPeriod                       as     FiscalPeriod,
  :P_PreviousFiscalYear                 as     PreviousFiscalYear,
  //  :P_ConsolidationGroup                       as     ConsolidationGroup,
  //    :P_ConsolidationVersion                     as     ConsolidationVersion,
  :P_ConsolidationChartOfAccounts             as     ConsolidationChartOfAccounts,
  :P_FinancialStatementItemHier             as     FinancialStatementItemHier,
  //    :P_GroupCurrency               as     GroupCurrency,
  //  :P_ConsolidationLedger                      as     ConsolidationLedger,
  _FinStmntItmHierDir
}
where
       ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  //  and  GLRecordType             = 'R' //With Reporting Logic
  and(
       //       FiscalYear               = $parameters.P_FiscalYear
       FiscalYear             = $parameters.P_FiscalYear
    or FiscalYear             = $parameters.P_PreviousFiscalYear
  )
  and  ConsolidationDimension       = 'Y1' //Fixed value Y1 hidden
//  and  SubItemCat = '1' //Fixed value hidden
//  and  FiscalPeriod             = $parameters.P_FiscalPeriod
//  and  ConsolidationGroup             = $parameters.P_ConsolidationGroup
//  and  ConsolidationLedger            = $parameters.P_ConsolidationLedger
//  and  ConsolidationVersion           = $parameters.P_ConsolidationVersion
//  and  GroupCurrency     = $parameters.P_GroupCurrency
```
