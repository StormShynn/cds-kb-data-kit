---
name: C_CONSOLIDATIONMATRIXRPT10Q
description: "The primary purpose of this CDS view is to provide a structured and flexible framework for analyzing consolidated financial data. It aggregates and presents financial information from different organizational units, profit centers, segments, and other financial dimensions, enabling users to gain insights into the financial health and performance of a group or organization. This CDS view provides the data to answer the following business questions: Financial performance analysis: How is the financial performance of different consolidation units, profit centers, and segments within the organization? Period comparison: How do financial results compare across different fiscal years and periods? Currency impact: What is the impact of currency fluctuations on financial results when viewed in transaction, local, and group currencies? Hierarchy-based analysis: How do financial results vary across different levels of financial statement item hierarchies? Intercompany transactions: What are the details of intercompany transactions and eliminations within the consolidation process? Adhoc reporting: How can specific financial items or sets be analyzed on an ad-hoc basis for deeper insights? Document and transaction tracking: What are the details of specific consolidation documents, posting items, and related transactions? Investment and acquisition analysis: How do investments and acquisitions impact the consolidated financial statements over different periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT10Q')/$value
semantic_en: "The primary purpose of this CDS view is to provide a structured and flexible framework for analyzing consolidated financial data. It aggregates and presents financial information from different organizational units, profit centers, segments, and other financial dimensions, enabling users to gain insights into the financial health and performance of a group or organization. This CDS view provides the data to answer the following business questions: Financial performance analysis: How is the financial performance of different consolidation units, profit centers, and segments within the organization? Period comparison: How do financial results compare across different fiscal years and periods? Currency impact: What is the impact of currency fluctuations on financial results when viewed in transaction, local, and group currencies? Hierarchy-based analysis: How do financial results vary across different levels of financial statement item hierarchies? Intercompany transactions: What are the details of intercompany transactions and eliminations within the consolidation process? Adhoc reporting: How can specific financial items or sets be analyzed on an ad-hoc basis for deeper insights? Document and transaction tracking: What are the details of specific consolidation documents, posting items, and related transactions? Investment and acquisition analysis: How do investments and acquisitions impact the consolidated financial statements over different periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Local/Group Data Analysis Query — CDS view tiêu dùng dựa trên I_MatrixConsolidationReportC."
keywords:
  - "Local/Group Data Analysis Query"
  - "local/group"
  - "data"
  - "analysis"
  - "query"
  - "consolidation"
  - "version"
  - "element"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FIN
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
# C_CONSOLIDATIONMATRIXRPT10Q

**The primary purpose of this CDS view is to provide a structured and flexible framework for analyzing consolidated financial data. It aggregates and presents financial information from different organizational units, profit centers, segments, and other financial dimensions, enabling users to gain insights into the financial health and performance of a group or organization. This CDS view provides the data to answer the following business questions: Financial performance analysis: How is the financial performance of different consolidation units, profit centers, and segments within the organization? Period comparison: How do financial results compare across different fiscal years and periods? Currency impact: What is the impact of currency fluctuations on financial results when viewed in transaction, local, and group currencies? Hierarchy-based analysis: How do financial results vary across different levels of financial statement item hierarchies? Intercompany transactions: What are the details of intercompany transactions and eliminations within the consolidation process? Adhoc reporting: How can specific financial items or sets be analyzed on an ad-hoc basis for deeper insights? Document and transaction tracking: What are the details of specific consolidation documents, posting items, and related transactions? Investment and acquisition analysis: How do investments and acquisitions impact the consolidated financial statements over different periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT10Q')/$value) |

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
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_trans_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_local_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_group_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Group Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(23)` | Quantity |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  | `cast ( 1 as fincs_sign_adjd_qty_base_unit )` | `QUAN(29)` | Sign-Adjusted Quantity |
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
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `MatchingReasonCode` |  | |  |  | `CHAR(6)` | Reason Code |
| `OriginType` |  | |  |  | `CHAR(3)` | Origin Type |
| `OriginReference` |  | |  |  | `CHAR(30)` | Origin Reference |
| `CnsldtnGroupJrnlEntryBundle` |  | |  |  | `CHAR(13)` | Document Bundle Number |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `ConsolidationUnitHierarchy` |  | |  | `:P_ConsolidationUnitHierarchy` | `CHAR(40)` |  |
| `ConsolidationSegmentHierarchy` |  | |  | `:P_ConsolidationSegmentHier` | `CHAR(40)` |  |
| `ConsolidationPrftCtrHierarchy` |  | |  | `:P_ConsolidationPrftCtrHier` | `CHAR(40)` |  |
| `KeyDate` |  | |  | `:P_KeyDate` | `DATS(8)` |  |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `_FinStmntItmHierDir` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT10Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT10Q')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'CCSMATRIXRPT10Q',
    compiler.compareFilter: true,
    buffering.status:  #NOT_ALLOWED
}
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
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
@Analytics: {
    query: true
}
@VDM: {
    viewType: #CONSUMPTION
}
@EndUserText.label: 'Local/Group Data Analysis Query' // The  @EndUserText: {label: ......'} format leads to issue when using the Key User Tools

define view C_ConsolidationMatrixRpt10Q
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

    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 210
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                      : vdm_v_key_date,

    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
    resultElement: 'ConsolidationVersion'
    }
    @Consumption.hidden: true
    P_ConsolidationVersion         : fincs_rvers,

    @AnalyticsDetails.query.variableSequence : 30
    P_FiscalYear                   : gjahr,

    @AnalyticsDetails.query.variableSequence : 40
    P_FiscalPeriod                 : fincs_poper,

    @AnalyticsDetails.query.variableSequence : 60
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_FinStmntItmHierDirVH',
                element: 'FinancialStatementItemHier' }
    }]
    P_FinancialStatementItemHier   : fincs_ithry,

    @AnalyticsDetails.query.variableSequence : 52
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 80
    P_ConsolidationLedger          : fincs_rldnr,

    @AnalyticsDetails.query.variableSequence : 220
    @Consumption.defaultValue: 'Y1'
    @Consumption.hidden: true
    P_ConsolidationDimension       : fc_dimen

  as select from I_MatrixConsolidationReportC
                  ( P_ConsolidationUnitHierarchy:   $parameters.P_ConsolidationUnitHierarchy,
                    P_ConsolidationPrftCtrHier:     $parameters.P_ConsolidationPrftCtrHier,
                    P_ConsolidationSegmentHier:     $parameters.P_ConsolidationSegmentHier,
                    P_KeyDate:                      $parameters.P_KeyDate ) as MatrixConsolidationReportC

  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  $projection.ConsolidationChartOfAccounts       = _FinStmntItmHierDir.ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = $parameters.P_FinancialStatementItemHier
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
                        { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    mandatory:          false
    }
  @AnalyticsDetails.query: {
      variableSequence :  70,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 2
      }
  @Consumption.semanticObject: 'ConsolidationFinanceSItem'
  FinancialStatementItem,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 10
  ConsolidationGroup,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 130,
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
  variableSequence : 195,
  axis: #FREE,
  display: #KEY
  }
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  ConsolidationSegmentForElim,

  ConsolidationLedger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 90
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

  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInTransCrcy else $projection.CnsldtnIntSignAmtInTransCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_trans_crcy ) as CnsldtnSignAdjdAmtInTransCrcy,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  AmountInLocalCurrency,

  @Semantics.amount.currencyCode: 'LocalCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInLocalCrcy else $projection.CnsldtnIntSignAmtInLocalCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_local_crcy ) as CnsldtnSignAdjdAmtInLocalCrcy,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  AmountInGroupCurrency,

  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInGroupCrcy else $projection.CnsldtnIntSignAmtInGroupCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_group_crcy ) as CnsldtnSignAdjdAmtInGroupCrcy,

  // Release CE 2008 Deprecation of QuantityInBaseUnit
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  @API.element.releaseState:    #DEPRECATED
  @API.element.successor: 'CnsldtnQuantityInBaseUnit'
  QuantityInBaseUnit,

  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  CnsldtnQuantityInBaseUnit,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignQtyInBaseUnit else $projection.CnsldtnIntSignQtyInBaseUnit * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_qty_base_unit )  as CnsldtnSignAdjdQtyInBaseUnit,

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

  ConsolidationDimension,

  //Additional Fields - ICMR
  MatchingReasonCode,
  OriginType,
  OriginReference,

  CnsldtnGroupJrnlEntryBundle,

  :P_FinancialStatementItemHier                as FinancialStatementItemHier,
  //-----------------------------------------------------------------------------
  // the following parameters can be deleted in successor versions
  :P_ConsolidationUnitHierarchy                as ConsolidationUnitHierarchy,
  :P_ConsolidationSegmentHier                  as ConsolidationSegmentHierarchy,
  :P_ConsolidationPrftCtrHier                  as ConsolidationPrftCtrHierarchy,
  :P_KeyDate                                   as KeyDate,
  //-----------------------------------------------------------------------------

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @Consumption.hidden: true
  CnsldtnIntSignAmtInTransCrcy,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  @Consumption.hidden: true
  CnsldtnIntSignAmtInLocalCrcy,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  @Consumption.hidden: true
  CnsldtnIntSignAmtInGroupCrcy,

  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  @Consumption.hidden: true
  CnsldtnIntSignQtyInBaseUnit,

  _FinStmntItmHierDir,
  _ControllingArea,
  _TransactionCurrency,
  _GroupCurrency,
  _LocalCurrency,
  _BaseUnit,
  _SubItemCategory,
  _SubItem
}
where
      ConsolidationChartOfAccounts = $parameters.P_ConsolidationChartOfAccounts
  and ConsolidationDimension       = $parameters.P_ConsolidationDimension
  and GLRecordType                 <> 'R'
```
