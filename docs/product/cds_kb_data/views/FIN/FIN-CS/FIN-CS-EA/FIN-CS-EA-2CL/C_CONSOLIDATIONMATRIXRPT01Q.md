---
name: C_CONSOLIDATIONMATRIXRPT01Q
description: "This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value
semantic_en: "This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Local/Group Data Analysis Query — CDS view tiêu dùng dựa trên I_MatrixCnsldtnReport01C."
keywords:
  - "local/group"
  - "data"
  - "analysis"
  - "query"
  - "cnsldtn"
  - "group"
  - "crcy"
  - "transaction"
  - "local"
  - "base"
  - "unit"
  - "consolidation"
  - "version"
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
# C_CONSOLIDATIONMATRIXRPT01Q

**This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `YTDAmtInCnsldtnGroupCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Group Currency |
| `YTDAmtInCnsldtnTransactionCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Transaction Currency |
| `YTDAmtInCnsldtnLocalCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Local Currency |
| `YTDQtyInCnsldtnBaseUnit` |  | |  |  | `QUAN(29)` | YTD Quantity |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
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
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
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
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
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
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `FinancialStatementItemHier` |  | |  | `:P_FinancialStatementItemHier` | `CHAR(10)` |  |
| `KeyDate` |  | |  | `:P_KeyDate` | `DATS(8)` |  |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'CCSMATRIXRPT01Q',
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

define view C_ConsolidationMatrixRpt01Q
  with parameters
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalYear' }
    P_FiscalYear                   : ryear,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalPeriod' }
    P_FiscalPeriod                 : poper,

    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalYearVariant' }
    @Consumption.hidden: true
    P_FiscalYearVariant            : fincs_periv,

    @AnalyticsDetails.query.variableSequence : 10
    @Consumption.defaultValue: 'Y1'
    @Consumption.hidden: true
    P_ConsolidationDimension       : fc_dimen,

    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
        resultElement: 'ConsolidationGroup'
    }
    @AnalyticsDetails.query.variableSequence : 30
    P_ConsolidationGroup           : fc_congr,

    @AnalyticsDetails.query.variableSequence : 70
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_FiscalYear',
                element: 'FiscalYear' },
      distinctValues: true,
      additionalBinding: [
                            { element : 'FiscalYearVariant' , localParameter: 'P_FiscalYearVariant' }
                         ]
    }]
    @EndUserText.label: 'From Fiscal Year'
    P_FromFiscalYear               : fincs_from_fiscal_year,

    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
        resultElement: 'FiscalYearPeriod',
        binding: [
            { targetParameter: 'P_FiscalYear',        type : #PARAMETER, value: 'P_FromFiscalYear' },
            { targetParameter: 'P_FiscalPeriod',      type : #CONSTANT,  value: '000' },
            { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    P_FromFiscalYearPeriod         : fis_jahrper_conv,

    @AnalyticsDetails.query.variableSequence : 80
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_FiscalYearPeriodForVariant',
                element: 'FiscalYearPeriod' },
      additionalBinding: [
                            { element : 'FiscalYearVariant' , localParameter: 'P_FiscalYearVariant' }
                         ]
    }]
    @Semantics.fiscal.yearPeriod: true
    @EndUserText.label: 'To Fiscal Year Period'
    P_ToFiscalYearPeriod           : fis_jahrper_conv,

    @AnalyticsDetails.query.variableSequence : 100
    @Consumption.defaultValue: 'Y1'
    P_ConsolidationChartOfAccounts : fincs_itclg,

    @AnalyticsDetails.query.variableSequence : 110
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:    'I_FinStmntItmHierDirVH',
                element: 'FinancialStatementItemHier' }
    }]
    P_FinancialStatementItemHier   : fincs_ithry,

    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 300
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                      : vdm_v_key_date

  as select from I_MatrixCnsldtnReport01C
                  ( P_ConsolidationGroup:   $parameters.P_ConsolidationGroup,
                    P_FromFiscalYearPeriod: $parameters.P_FromFiscalYearPeriod,
                    P_ToFiscalYearPeriod:   $parameters.P_ToFiscalYearPeriod) as MatrixConsolidationReportC

  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  $projection.ConsolidationChartOfAccounts       = _FinStmntItmHierDir.ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = $parameters.P_FinancialStatementItemHier
{
  //================================================================================
  // Measures and their units
  //================================================================================
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  YTDAmtInCnsldtnGroupCrcy,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  YTDAmtInCnsldtnTransactionCrcy,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  YTDAmtInCnsldtnLocalCrcy,

  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  YTDQtyInCnsldtnBaseUnit,


  //================================================================================
  // Dimensions
  //================================================================================
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 20
  ConsolidationVersion,

  FiscalYear,

  FiscalPeriod,

  @Consumption.filter: {selectionType:#RANGE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 50
  @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                                resultElement: 'FiscalYearPeriod',
                                binding:      [
                                                { targetElement : 'FiscalYear'        , type : #PARAMETER ,  value : 'P_FiscalYear' },
                                                { targetElement : 'FiscalPeriod'      , type : #PARAMETER ,  value : 'P_FiscalPeriod' },
                                                { targetElement : 'FiscalYearVariant' , type : #PARAMETER,   value : 'P_FiscalYearVariant' }
                                              ]
                           }
  FiscalYearPeriod,

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
      variableSequence :  120,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 2
      }
  @Consumption.semanticObject: 'ConsolidationFinanceSItem'
  FinancialStatementItem,

  ConsolidationGroup,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 200,
  axis: #FREE,
  display: #KEY
  }
  @Consumption.semanticObject: 'ConsolidationOrgUnit'
  ConsolidationUnit,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 220,
  axis: #FREE,
  display: #KEY
  }
  ProfitCenter,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 210,
  axis: #FREE,
  display: #KEY
  }
  Segment,

  ConsolidationLedger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 150
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

  ConsolidationDocumentNumber,
  ConsolidationPostingItem,
  GLRecordType,
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

  ConsolidationDimension,

  :P_FinancialStatementItemHier as FinancialStatementItemHier,
  //-----------------------------------------------------------------------------
  // the following parameter can be deleted in successor versions
  :P_KeyDate                    as KeyDate,
  //-----------------------------------------------------------------------------


  //================================================================================
  // Associations
  //================================================================================
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
  and ConsolidationGroup           <> ''
```
