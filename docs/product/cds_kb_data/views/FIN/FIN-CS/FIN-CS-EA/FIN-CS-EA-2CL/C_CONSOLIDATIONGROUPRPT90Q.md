---
name: C_CONSOLIDATIONGROUPRPT90Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT90Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Query for Data Visualization — CDS view tiêu dùng dựa trên I_ConsolidationGroupReportC."
keywords:
  - "query"
  - "for"
  - "data"
  - "visualization"
  - "consolidation"
  - "chart"
  - "accounts"
  - "version"
  - "group"
  - "fiscal"
  - "year"
  - "period"
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
# C_CONSOLIDATIONGROUPRPT90Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT90Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  | `:P_ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Unit |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ConsolidationPostgItemAutoFlag` |  | |  |  | `CHAR(1)` | Indicator: Automatic posting lines |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CurrencyTranslationDate` |  | |  |  | `DATS(8)` | Value Date for Currency Translation |
| `RefConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `ReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Original Fiscal Year |
| `RefConsolidationPostingItem` |  | |  |  | `NUMC(6)` | Six-figure number of line item |
| `RefConsolidationDocumentType` |  | |  |  | `CHAR(1)` | Document Category |
| `RefBusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `UserID` |  | |  |  | `CHAR(12)` | User Name |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document Number |
| `ReversedDocument` |  | |  |  | `CHAR(10)` | Number of Reversed Document |
| `InvestmentActivityType` |  | |  |  | `CHAR(2)` | Consolidation of Investments Activity |
| `InvestmentActivity` |  | |  |  | `CHAR(10)` | Consolidation of Investments Activity Number |
| `ConsolidationDocReversalYear` |  | |  |  | `NUMC(4)` | Year of reversal document or reversed document |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Transaction |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Organizational Units |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ConsolidationRecordNumber` |  | |  |  | `CHAR(18)` | Record number of the line item record |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Industry Key |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `YearToDateAmountInGrpCrcy` |  | |  | `YTDAmtInCnsldtnGroupCrcy` | `CURR(23)` | Cumulative Value in Group Currency |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `_FinStmntItmHierDir` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT90Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT90Q')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCSBSPLRPT90Q'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Query for Data Visualization'
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
define view C_ConsolidationGroupRpt90Q
  with parameters


    P_ConsolidationVersion         : fincs_rvers,


    P_ConsolidationGroup           : fincs_congr,


    P_FiscalYear                   : gjahr,



    //@Consumption.hidden: true
    //    @Consumption.valueHelp: '_FinStmntItmHierDir'
    /*
    @Consumption.derivation: { lookupEntity: 'I_FinStmntItmHierDir',
          binding:
          [
          {
              type: #PARAMETER,
              value: 'P_ConsolidationChartOfAccounts',
              targetElement: 'ConsolidationChartOfAccounts'
            }
            /*
            ,{
              //type: #USER_INPUT,
              type: #PARAMETER,
              value: 'P_FinancialStatementItemHier',
              targetElement: 'FinancialStatementItemHier'
              //value: 'USRIN_FinancialStatementItemHier'
            }*/
    //            ],

    //          resultElement: 'FinancialStatementItemHier'
    //         }
    @AnalyticsDetails.query.variableSequence : 08
    @Consumption.valueHelpDefinition: [{ 
         entity: {
                   name: 'I_FinStmntItmHierDirVH',
                   element: 'FinancialStatementItemHier'  }
    }]
    @EndUserText.label: 'FS Item Hierarchy'
    P_FinancialStatementItemHier   : fincs_ithry,

    @AnalyticsDetails.query.variableSequence : 07
    //     @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    //        resultElement: 'ConsolidationChartOfAccounts'
    //        }
    @EndUserText.label: 'Cons. Chart of Accts'
    P_ConsolidationChartOfAccounts : fincs_itclg



  as select from I_ConsolidationGroupReportC


  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  _FinStmntItmHierDir.ConsolidationChartOfAccounts = :P_ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier   = :P_FinancialStatementItemHier
{
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  //    ConsolidationChartOfAccounts,
  :P_ConsolidationChartOfAccounts                as     ConsolidationChartOfAccounts,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 01
  //  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //    resultElement: 'ConsolidationVersion'
  //    }
  @EndUserText.label: 'Version'

  ConsolidationVersion,



  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 02
  //  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //     resultElement: 'ConsolidationGroup'
  //     }
  @EndUserText.label: 'Consolidation Group'

  ConsolidationGroup,


  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 03
  //  @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //    resultElement: 'FiscalYear'
  //    }
  @EndUserText.label: 'Fiscal Year'

  FiscalYear,


  @AnalyticsDetails.query.variableSequence : 04
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //        @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //        resultElement: 'FiscalPeriod'
  //        }
  @EndUserText.label: 'Period'
  FiscalPeriod,

  @AnalyticsDetails.query.variableSequence : 05
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //    resultElement: 'ConsolidationDimension'
  //    }
  @Consumption.defaultValue: 'Y1'
  @Consumption.hidden: true
  ConsolidationDimension,

  @AnalyticsDetails.query.variableSequence : 06
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  //        @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //        resultElement: 'ConsolidationLedger'
  //        }
  @EndUserText.label: 'Ledger'
  ConsolidationLedger,

  //currency 07

  @AnalyticsDetails.query.variableSequence : 07
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //        @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
  //        resultElement: 'GroupCurrency'
  //        }
  @EndUserText.label: 'Group Currency'
  GroupCurrency,


  @Consumption.filter: {
    hierarchyBinding : [
                        { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
  //                          { type : #USER_INPUT, value : 'USRIN_FinancialStatementItemHier'}],
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
      variableSequence :  09,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
  //      displayHierarchy:   #ON,
      hierarchyInitialLevel: 2

      }
  FinancialStatementItem,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Document Number'
  @AnalyticsDetails.query.variableSequence : 10
  ConsolidationDocumentNumber,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Line Item'
  @AnalyticsDetails.query.variableSequence : 11
  ConsolidationPostingItem,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Transaction currency'
  @AnalyticsDetails.query.variableSequence : 12
  TransactionCurrency,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Local currency'
  @AnalyticsDetails.query.variableSequence : 13
  LocalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Base Unit of Measure'
  @AnalyticsDetails.query.variableSequence : 14
  BaseUnit,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Debit/Credit ind'
  @AnalyticsDetails.query.variableSequence : 15
  DebitCreditCode,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Company'
  @AnalyticsDetails.query.variableSequence : 16
  Company,

  @AnalyticsDetails.query.variableSequence : 17
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Consolidation Unit'
  ConsolidationUnit,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Partner Unit'
  @AnalyticsDetails.query.variableSequence : 18
  PartnerConsolidationUnit,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @EndUserText.label: 'Original comp.code'
  @AnalyticsDetails.query.variableSequence : 19
  CompanyCode,
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Subitem Category'
  SubItemCategory,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Subitem'
  @AnalyticsDetails.query.variableSequence : 21
  SubItem,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Posting Level'
  @AnalyticsDetails.query.variableSequence : 22
  PostingLevel,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Apportionment'
  @AnalyticsDetails.query.variableSequence : 23
  ConsolidationApportionment,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Currency Translation'
  @AnalyticsDetails.query.variableSequence : 24
  CurrencyConversionsDiffType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Document Type'
  @AnalyticsDetails.query.variableSequence : 25
  ConsolidationDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Year of Acquisition'
  @AnalyticsDetails.query.variableSequence : 26
  ConsolidationAcquisitionYear,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Per. of Acquisition'
  @AnalyticsDetails.query.variableSequence : 27
  ConsolidationAcquisitionPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Investee Unit'
  @AnalyticsDetails.query.variableSequence : 28
  InvesteeConsolidationUnit,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Text'
  @AnalyticsDetails.query.variableSequence : 29
  DocumentItemText,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Autom. indicator'
  @AnalyticsDetails.query.variableSequence : 30

  ConsolidationPostgItemAutoFlag,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Business Transaction'
  @AnalyticsDetails.query.variableSequence : 31
  BusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Posting Date'
  @AnalyticsDetails.query.variableSequence : 32
  PostingDate,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Value date'
  @AnalyticsDetails.query.variableSequence : 33
  CurrencyTranslationDate,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Document Number'
  @AnalyticsDetails.query.variableSequence : 34
  RefConsolidationDocumentNumber,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Original Fiscal Year'
  @AnalyticsDetails.query.variableSequence : 35
  ReferenceFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Item'
  @AnalyticsDetails.query.variableSequence : 36
  RefConsolidationPostingItem,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Document Category'
  @AnalyticsDetails.query.variableSequence : 37
  RefConsolidationDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Business Transaction'
  @AnalyticsDetails.query.variableSequence : 38
  RefBusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Entry Date'
  @AnalyticsDetails.query.variableSequence : 39
  CreationDate,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Time of Entry'
  @AnalyticsDetails.query.variableSequence : 40
  CreationTime,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'User Name'
  @AnalyticsDetails.query.variableSequence : 41
  UserID,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Reversed with'
  @AnalyticsDetails.query.variableSequence : 42
  ReverseDocument,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Reversed document'
  @AnalyticsDetails.query.variableSequence : 43
  ReversedDocument,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'C/I Activity'
  @AnalyticsDetails.query.variableSequence : 44
  InvestmentActivityType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Activity Number'
  @AnalyticsDetails.query.variableSequence : 45
  InvestmentActivity,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Year of reversal doc'
  @AnalyticsDetails.query.variableSequence : 46
  ConsolidationDocReversalYear,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Reference Transact.'
  @AnalyticsDetails.query.variableSequence : 47
  ReferenceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Reference org. unit'
  @AnalyticsDetails.query.variableSequence : 48
  ReferenceDocumentContext,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Logical System'
  @AnalyticsDetails.query.variableSequence : 49
  LogicalSystem,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Chart of Accounts'
  @AnalyticsDetails.query.variableSequence : 50
  ChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Account Number'
  @AnalyticsDetails.query.variableSequence : 51
  GLAccount,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Assignment'
  @AnalyticsDetails.query.variableSequence : 52

  AssignmentReference,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Cost Center'
  @AnalyticsDetails.query.variableSequence : 53
  CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Profit Center'
  @AnalyticsDetails.query.variableSequence : 54
  ProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Functional Area'
  @AnalyticsDetails.query.variableSequence : 55
  FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Business Area'
  @AnalyticsDetails.query.variableSequence : 56
  BusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Controlling Area'
  @AnalyticsDetails.query.variableSequence : 57
  ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Segment'
  @AnalyticsDetails.query.variableSequence : 58
  Segment,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Sender cost center'
  @AnalyticsDetails.query.variableSequence : 59
  PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Partner Profit Ctr'
  @AnalyticsDetails.query.variableSequence : 60
  PartnerProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Partner Func. Area'
  @AnalyticsDetails.query.variableSequence : 61
  PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Trading part.BA'
  @AnalyticsDetails.query.variableSequence : 62
  PartnerBusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Trading Partner'
  @AnalyticsDetails.query.variableSequence : 63
  PartnerCompany,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Partner Segment'
  @AnalyticsDetails.query.variableSequence : 64
  PartnerSegment,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Order'
  @AnalyticsDetails.query.variableSequence : 65
  OrderID,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Customer'
  @AnalyticsDetails.query.variableSequence : 66
  Customer,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Supplier'
  @AnalyticsDetails.query.variableSequence : 67
  Supplier,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Material'
  @AnalyticsDetails.query.variableSequence : 68
  Material,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Plant'
  @AnalyticsDetails.query.variableSequence : 69
  Plant,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Transaction type'
  @AnalyticsDetails.query.variableSequence : 70
  FinancialTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'WBS Element'
  @AnalyticsDetails.query.variableSequence : 71
  WBSElement,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Project definition'
  @AnalyticsDetails.query.variableSequence : 72
  Project,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Record number'
  @AnalyticsDetails.query.variableSequence : 73
  ConsolidationRecordNumber,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Billing Type'
  @AnalyticsDetails.query.variableSequence : 74
  BillingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Sales Organization'
  @AnalyticsDetails.query.variableSequence : 75
  SalesOrganization,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Distribution Channel'
  @AnalyticsDetails.query.variableSequence : 76
  DistributionChannel,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Division'
  @AnalyticsDetails.query.variableSequence : 77
  OrganizationDivision,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Material Group'
  @AnalyticsDetails.query.variableSequence : 78
  MaterialGroup,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Product Sold'
  @AnalyticsDetails.query.variableSequence : 79
  SoldProduct,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Product Sold Group'
  @AnalyticsDetails.query.variableSequence : 80
  SoldProductGroup,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Customer Group'
  @AnalyticsDetails.query.variableSequence : 81
  CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.variableSequence : 82
  CustomerSupplierCountry,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Industry'
  @AnalyticsDetails.query.variableSequence : 83
  CustomerSupplierIndustry,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Sales District'
  @AnalyticsDetails.query.variableSequence : 84
  SalesDistrict,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Bill-To Party'
  @AnalyticsDetails.query.variableSequence : 85
  BillToParty,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Ship-To Party'
  @AnalyticsDetails.query.variableSequence : 86
  ShipToParty,
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Group Key'
  @AnalyticsDetails.query.variableSequence : 87
  CustomerSupplierCorporateGroup,


  //@AnalyticsDetails.query.axis: #COLUMN
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'YTD Amount'
  //  YTDAmtInCnsldtnGroupCrcy as YTDAmount,
  YTDAmtInCnsldtnGroupCrcy                       as     YearToDateAmountInGrpCrcy,

  //    :P_ConsolidationVersion                     as     ConsolidationVersion,
  //    :P_ConsolidationGroup                       as     ConsolidationGroup,
  //    :P_FiscalYear                               as     FiscalYear,
  //    :P_FiscalPeriod                             as     FiscalPeriod,
  //    :P_ConsolidationDimension                   as     ConsolidationDimension,
  //    :P_ConsolidationLedger                      as     ConsolidationLedger,
  //    :P_GroupCurrency                            as     GroupCurrency,

  :P_FinancialStatementItemHier                  as     FinancialStatementItemHier,
  //    :P_FinancialStatementItem                   as     FinancialStatementItem,


  _FinStmntItmHierDir
}
where
  //      ConsolidationVersion = $parameters.P_ConsolidationVersion
  //  and ConsolidationGroup = $parameters.P_ConsolidationGroup
  //  and FiscalYear             = $parameters.P_FiscalYear
  //  and
      ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  //  and FiscalPeriod           = $parameters.P_FiscalPeriod
  and ConsolidationDimension       = 'Y1' //Fixed value Y1 hidden
//  and ConsolidationLedger          = $parameters.P_ConsolidationLedger
//  and  GroupCurrency     = $parameters.P_GroupCurrency
//  and FinancialStatementItem = $parameters.P_FinancialStatementItem
```
