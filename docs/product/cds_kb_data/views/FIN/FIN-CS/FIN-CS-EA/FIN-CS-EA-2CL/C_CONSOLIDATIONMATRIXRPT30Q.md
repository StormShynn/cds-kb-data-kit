---
name: C_CONSOLIDATIONMATRIXRPT30Q
description: "The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value
semantic_en: "The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Local/Group Data Analysis Query with Reporting Rules — CDS view tiêu dùng dựa trên I_MatrixConsolidationRptEnhcdC."
keywords:
  - "Local/Group Data Analysis Query with Reporting Rules"
  - "local/group"
  - "data"
  - "analysis"
  - "query"
  - "with"
  - "reporting"
  - "rules"
  - "consolidation"
  - "version"
  - "element"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - document
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - transaction
  - bo:purchaseorder
---
# C_CONSOLIDATIONMATRIXRPT30Q

**The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(28)` |  |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
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
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
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
| `CnsldtnAdhocItem` |  | |  |  | `CHAR(30)` | Ad Hoc Item |
| `CnsldtnAdhocSet` |  | |  |  | `CHAR(30)` | Ad Hoc Set |
| `CnsldtnAdhocSetItem` |  | |  |  | `NUMC(8)` | Ad Hoc Set Item |
| `MatchingReasonCode` |  | |  |  | `CHAR(6)` | Reason Code |
| `OriginType` |  | |  |  | `CHAR(3)` | Origin Type |
| `OriginReference` |  | |  |  | `CHAR(30)` | Origin Reference |
| `CnsldtnGroupJrnlEntryBundle` |  | |  |  | `CHAR(13)` | Document Bundle Number |
| `ConsolidationDimension` |  | |  | `:P_ConsolidationDimension` | `CHAR(2)` |  |
| `ConsolidationUnitHierarchy` |  | |  | `:P_ConsolidationUnitHierarchy` | `CHAR(40)` |  |
| `ConsolidationSegmentHierarchy` |  | |  | `:P_ConsolidationSegmentHier` | `CHAR(40)` |  |
| `ConsolidationPrftCtrHierarchy` |  | |  | `:P_ConsolidationPrftCtrHier` | `CHAR(40)` |  |
| `KeyDate` |  | |  | `:P_KeyDate` | `DATS(8)` |  |
| `ConsolidationReportingRuleID` |  | |  | `:P_ConsolidationRptgRuleID` | `CHAR(3)` |  |
| `ConsolidationReportingItemHier` |  | |  | `:P_ConsolidationRptgItemHier` | `CHAR(10)` |  |
| `_RptgItmHierDir` | | ✓ | | | | |
| `_RptgRuleVarAssgmt` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RptgItmHierDir` | `I_CnsldtnRptgItmHierDir` | [0..1] |
| `_RptgRuleVarAssgmt` | `I_CnsldtnRptgRuleVarAssgmt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'CCSMATRIXRPT30Q',
    compiler.compareFilter: true,
    buffering.status:  #NOT_ALLOWED
}
@EndUserText.label: 'Local/Group Data Analysis Query with Reporting Rules' // The  @EndUserText: {label: ......'} format leads to issue when using the Key User Tools
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY
}
@VDM: {
    viewType: #CONSUMPTION
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@Analytics: {
    query: true
}
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

define view C_ConsolidationMatrixRpt30Q
  with parameters
    @AnalyticsDetails.query.variableSequence : 150
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_CnsldtnUnitHierDirVH',
                element: 'ConsolidationUnitHierarchy' }
    }]
    P_ConsolidationUnitHierarchy   : fincs_hryid_consunit,

    @AnalyticsDetails.query.variableSequence : 170
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_CnsldtnSegmentHierDirVH',
                element: 'ConsolidationSegmentHierarchy' }
    }]
    P_ConsolidationSegmentHier     : fincs_hryid_segment,

    @AnalyticsDetails.query.variableSequence : 190
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name: 'I_CnsldtnProfitCenterHierDirVH',
                element: 'AdditionalMasterDataHierarchy' }
    }]
    P_ConsolidationPrftCtrHier     : fincs_hryid_profitcenter,

    @AnalyticsDetails.query.variableSequence : 81
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_CnsldtnRptgRuleVarVH',
        element: 'ConsolidationReportingRuleID'
            }
    }]
    P_ConsolidationRptgRuleID      : fincs_rptid,

    @AnalyticsDetails.query.variableSequence : 61
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_CnsldtnRptgItmHierDirVH',
        element: 'ConsolidationReportingItemHier'
            }
    }]
    P_ConsolidationRptgItemHier    : fincs_rihry,

    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 210
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                      : vdm_v_key_date,

    @AnalyticsDetails.query.variableSequence : 20
    P_ConsolidationVersion         : fincs_rvers,

    @AnalyticsDetails.query.variableSequence : 30
    P_FiscalYear                   : gjahr,

    @AnalyticsDetails.query.variableSequence : 40
    P_FiscalPeriod                 : fincs_poper,

    @AnalyticsDetails.query.variableSequence : 52
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 9
    P_ConsolidationLedger          : fincs_rldnr,

    @AnalyticsDetails.query.variableSequence : 220
    @Consumption.defaultValue: 'Y1'
    P_ConsolidationDimension       : fc_dimen

  as select from I_MatrixConsolidationRptEnhcdC
                  ( P_ConsolidationUnitHierarchy:   $parameters.P_ConsolidationUnitHierarchy,
                    P_ConsolidationPrftCtrHier:     $parameters.P_ConsolidationPrftCtrHier,
                    P_ConsolidationSegmentHier:     $parameters.P_ConsolidationSegmentHier,
                    P_KeyDate:                      $parameters.P_KeyDate,
                    P_ConsolidationRptgItemHier:    $parameters. P_ConsolidationRptgItemHier,
                    P_ConsolidationRptgRuleID:      $parameters.P_ConsolidationRptgRuleID
                  ) as MatrixConsolidationRptEnhcdC

  association [0..1] to I_CnsldtnRptgItmHierDir    as _RptgItmHierDir    on  $projection.ConsolidationChartOfAccounts       = _RptgItmHierDir.ConsolidationChartOfAccounts
                                                                         and _RptgItmHierDir.ConsolidationReportingItemHier = $parameters.P_ConsolidationRptgItemHier
  association [0..1] to I_CnsldtnRptgRuleVarAssgmt as _RptgRuleVarAssgmt on  $projection.ConsolidationChartOfAccounts          = _RptgRuleVarAssgmt.ConsolidationChartOfAccounts
                                                                         and _RptgRuleVarAssgmt.ConsolidationReportingItemHier = $parameters.P_ConsolidationRptgItemHier
                                                                         and _RptgRuleVarAssgmt.ConsolidationReportingRuleID   = $parameters.P_ConsolidationRptgRuleID
{

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 20
  ConsolidationVersion,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  ConsolidationVersionElement,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 30
  FiscalYear,

  @AnalyticsDetails.query.variableSequence : 40
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  FiscalPeriod,

  @AnalyticsDetails.query.variableSequence : 50
  FiscalYearPeriod,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.variableSequence : 51
  @Consumption.filter.defaultValue: 'PER'
  PeriodMode,

  @AnalyticsDetails.query.variableSequence : 60
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  ConsolidationChartOfAccounts,

  @Consumption.filter: {
  hierarchyBinding : [
                      { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                      { type : #PARAMETER, value : 'P_ConsolidationRptgItemHier'}],
  selectionType: #HIERARCHY_NODE,
  multipleSelections: true,
  mandatory:          false
   }
  @AnalyticsDetails.query: {
      variableSequence :  70,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 02
      }
  ConsolidationReportingItem,

  @Consumption.filter: {
  selectionType: #SINGLE,
  multipleSelections: true,
  mandatory: false
  }
  @AnalyticsDetails.query: {
  variableSequence : 120,
  axis: #FREE,
  display: #KEY_TEXT
  }
  @Consumption.semanticObject: 'ConsolidationFinanceSItem'
  FinancialStatementItem,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 10
  ConsolidationGroup,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 160,
  axis: #FREE,
  display: #KEY
  }
  @Consumption.semanticObject: 'ConsolidationOrgUnit'
  ConsolidationUnit,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #KEY
  ConsolidationUnitForElim,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 200,
  axis: #FREE,
  display: #KEY
  }
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  ConsolidationPrftCtrForElim,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 180,
  axis: #FREE,
  display: #KEY
  }
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  ConsolidationSegmentForElim,

  ConsolidationLedger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 100
  @Consumption.hidden: false
  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_GroupCurrency'
  GroupCurrency,

  @ObjectModel.foreignKey.association: '_SubItemCategory'
  SubItemCategory,

  @ObjectModel.foreignKey.association: '_SubItem'
  SubItem,

  ConsolidationDocumentType,
  PostingLevel,
  PartnerConsolidationUnit,
  PartnerProfitCenter,
  PartnerSegment,

  @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,

  CostCenter,
  FinancialTransactionType,
  FunctionalArea,
  CurrencyConversionsDiffType,

  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  TransactionCurrency,

  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_LocalCurrency'
  LocalCurrency,

  @Semantics.unitOfMeasure: true
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,

  //  Measures
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  AmountInTransactionCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  AmountInLocalCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  AmountInGroupCurrency,

  // Release CE 2008 Deprecation of QuantityInBaseUnit
  @AnalyticsDetails.query.hidden: true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  @API.element.releaseState:    #DEPRECATED
  @API.element.successor: 'CnsldtnQuantityInBaseUnit'
  @EndUserText.label: 'Quantity'
  QuantityInBaseUnit,

  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  @EndUserText.label: 'Quantity'
  CnsldtnQuantityInBaseUnit,

  ConsolidationDocumentNumber, //Successor should be CnsldtnGroupJrnlEntry
  ConsolidationPostingItem,
  GLRecordType,
  FiscalYearVariant,
  DebitCreditCode,
  Company,
  CompanyCode,
  ConsolidationApportionment,
  ConsolidationAcquisitionYear,
  ConsolidationAcquisitionPeriod,
  InvesteeConsolidationUnit,
  DocumentItemText,
  ConsolidationPostgItemAutoFlag,
  BusinessTransactionType,
  PostingDate,
  CurrencyTranslationDate,
  RefConsolidationDocumentNumber,
  ReferenceFiscalYear,
  RefConsolidationPostingItem,
  RefConsolidationDocumentType,
  RefBusinessTransactionType,
  CreationDate,
  CreationTime,
  UserID,
  ReverseDocument,
  ReversedDocument,
  InvestmentActivityType,
  InvestmentActivity,
  ConsolidationDocReversalYear,
  ReferenceDocumentType,
  ReferenceDocumentContext,
  LogicalSystem,
  ChartOfAccounts,
  GLAccount,
  AssignmentReference,
  BusinessArea,
  PartnerCostCenter,
  PartnerFunctionalArea,
  PartnerBusinessArea,
  PartnerCompany,
  OrderID,
  Customer,
  Supplier,
  Material,
  Plant,
  WBSElementInternalID,
  WBSElementExternalID,
  Project,
  BillingDocumentType,
  SalesOrganization,
  DistributionChannel,
  OrganizationDivision,
  MaterialGroup,
  SoldProduct,
  SoldProductGroup,
  CustomerGroup,
  CustomerSupplierCountry,
  CustomerSupplierIndustry,
  SalesDistrict,
  BillToParty,
  ShipToParty,
  CustomerSupplierCorporateGroup,

  //Additional Fields: Adhoc Items
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocItem,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocSet,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocSetItem,

  //Additional Fields - ICMR
  MatchingReasonCode,
  OriginType,
  OriginReference,

  CnsldtnGroupJrnlEntryBundle,

  //------------------------------------------------------------------------------------------
  // the following parameters can be deleted in successor versions
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 19
  @Consumption.defaultValue: 'Y1'
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.hidden: true
  :P_ConsolidationDimension     as ConsolidationDimension,
  :P_ConsolidationUnitHierarchy as ConsolidationUnitHierarchy,
  :P_ConsolidationSegmentHier   as ConsolidationSegmentHierarchy,
  :P_ConsolidationPrftCtrHier   as ConsolidationPrftCtrHierarchy,
  :P_KeyDate                    as KeyDate,
  //------------------------------------------------------------------------------------------
  :P_ConsolidationRptgRuleID    as ConsolidationReportingRuleID,
  :P_ConsolidationRptgItemHier  as ConsolidationReportingItemHier,

  _ControllingArea,
  _TransactionCurrency,
  _LocalCurrency,
  _BaseUnit,
  _SubItemCategory,
  _SubItem,
  _RptgItmHierDir,
  _RptgRuleVarAssgmt,
  _GroupCurrency
}
where
      ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  and GLRecordType                 <> 'R'
```
