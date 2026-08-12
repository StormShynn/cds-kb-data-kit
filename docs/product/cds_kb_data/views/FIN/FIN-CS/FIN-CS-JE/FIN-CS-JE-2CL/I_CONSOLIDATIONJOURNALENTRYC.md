---
name: I_CONSOLIDATIONJOURNALENTRYC
description: "This CDS view provides access to all details of the journal entries in group reporting that has no consolidation logic applied yet. You can create local reports for consolidation units, such as balance sheets and P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and organizational unit information of my journal entries? What is the fiscal year and period when my journal entries are posted? What is the document number, consolidation financial statement item, posting level, and document type for a certain journal entry? What are the amounts in the transaction currency, local currency, and group currency on journal entry or line item level?"
app_component: FIN-CS-JE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONJOURNALENTRYC')/$value
semantic_en: "This CDS view provides access to all details of the journal entries in group reporting that has no consolidation logic applied yet. You can create local reports for consolidation units, such as balance sheets and P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and organizational unit information of my journal entries? What is the fiscal year and period when my journal entries are posted? What is the document number, consolidation financial statement item, posting level, and document type for a certain journal entry? What are the amounts in the transaction currency, local currency, and group currency on journal entry or line item level?"
semantic_vi: "Group Journal Entries - Cube — CDS view giao diện dựa trên I_CnsldtnFoundation."
keywords:
  - "group"
  - "journal"
  - "entries"
  - "cube"
  - "consolidation"
  - "ledger"
  - "dimension"
  - "fiscal"
  - "year"
  - "document"
  - "number"
  - "posting"
  - "item"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-JE-2CL
  - document
  - FIN-CS
  - FIN-CS-JE
  - FIN-CS-JE-2CL
  - interface-view
  - lob:finance
  - transaction
  - bo:salesorder
---
# I_CONSOLIDATIONJOURNALENTRYC

**This CDS view provides access to all details of the journal entries in group reporting that has no consolidation logic applied yet. You can create local reports for consolidation units, such as balance sheets and P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and organizational unit information of my journal entries? What is the fiscal year and period when my journal entries are posted? What is the document number, consolidation financial statement item, posting level, and document type for a certain journal entry? What are the amounts in the transaction currency, local currency, and group currency on journal entry or line item level?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-JE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONJOURNALENTRYC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `ConsolidationDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` | ✓ | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
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
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
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
| `_Ledger` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |
| `_Version` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FinStmntItm` | | ✓ | | | | |
| `_PartnerUnit` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_DocumentType` | | ✓ | | | | |
| `_PostingLevel` | | ✓ | | | | |
| `_InvesteeUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONJOURNALENTRYC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONJOURNALENTRYC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICCRNLENTRC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Group Journal Entries - Cube'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #CUBE }
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ] 
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view I_ConsolidationJournalEntryC
  as select from I_CnsldtnFoundation
{

  @ObjectModel.foreignKey.association: '_Ledger'
  key ConsolidationLedger,

  @ObjectModel.foreignKey.association: '_Dimension'
  key ConsolidationDimension,

  @Semantics.fiscal.year: true
  key FiscalYear,

  key ConsolidationDocumentNumber,

  key ConsolidationPostingItem,

  @ObjectModel.foreignKey.association: '_Version'
  ConsolidationVersion,

  @Semantics.currencyCode:true
  TransactionCurrency,

  @Semantics.currencyCode:true
  LocalCurrency,

  @Semantics.currencyCode:true
  GroupCurrency,

  @Semantics.unitOfMeasure: true
  BaseUnit,

  @Semantics.fiscal.period: true
  FiscalPeriod,


  DebitCreditCode,

  Company,

  @ObjectModel.foreignKey.association: '_CnsldtnUnit'
  ConsolidationUnit,

  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  ConsolidationChartOfAccounts,

  //Test
  @ObjectModel.foreignKey.association: '_FinStmntItm'
//  @VDM.lifecycle.status: #DEPRECATED 
//  @VDM.lifecycle.successor: 'FSItemNew'
  FinancialStatementItem,
  
//  @ObjectModel.foreignKey.association: '_FSItem'
//  @Analytics.internalName: #LOCAL
//  FinancialStatementItemID,

  @ObjectModel.foreignKey.association: '_PartnerUnit'
  PartnerConsolidationUnit,

  @ObjectModel.foreignKey.association: '_CnsldtnGroup'
  ConsolidationGroup,

  CompanyCode,

  @ObjectModel.foreignKey.association: '_SubItemCategory'
  SubItemCategory,

  @ObjectModel.foreignKey.association: '_SubItem'
  SubItem,

  @ObjectModel.foreignKey.association: '_PostingLevel'
  PostingLevel,

  //_PostingLevel.ConsolidationReportingLevel,

  // @ObjectModel.foreignKey.association: '_Apportionment'
//  ConsolidationApportionment, 
  ConsolidationApportionment,

  // @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
  CurrencyConversionsDiffType,

  @ObjectModel.foreignKey.association: '_DocumentType'
  ConsolidationDocumentType,

  @Semantics.fiscal.year: true
  ConsolidationAcquisitionYear,

  @Semantics.fiscal.period: true
  ConsolidationAcquisitionPeriod,

  @ObjectModel.foreignKey.association: '_InvesteeUnit'
  InvesteeConsolidationUnit,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  AmountInTransactionCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  AmountInLocalCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  AmountInGroupCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  QuantityInBaseUnit,

  DocumentItemText,

  ConsolidationPostgItemAutoFlag,

  BusinessTransactionType,

  PostingDate,

  CurrencyTranslationDate,

  RefConsolidationDocumentNumber,

  @Semantics.fiscal.year: true
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
  
  //ReferenceDocumentNumber,

  AssignmentReference,

  CostCenter,

  ProfitCenter,

  FunctionalArea,

  BusinessArea,

  ControllingArea,

  Segment,

  PartnerCostCenter,

  PartnerProfitCenter,

  PartnerFunctionalArea,

  PartnerBusinessArea,

  PartnerCompany,

  PartnerSegment,

  OrderID,

  Customer,

  Supplier,

  Material,

  Plant,

  FinancialTransactionType,

//  WBSElementInternalID,

  WBSElement,

  Project,

  ConsolidationRecordNumber,

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

  _Ledger,

  _Dimension,

  _Version,

//  _Company,

  _CnsldtnUnit,

  _CnsldtnGroup,

  _ChartOfAccounts,

  //Test
//  @VDM.lifecycle.status: #DEPRECATED 
//  @VDM.lifecycle.successor: '_FSItem'
  _FinStmntItm,
//  _FSItem,

  _PartnerUnit,

  _SubItemCategory,

  _SubItem,

  _DocumentType,

  _PostingLevel,

//  _Apportionment,

//  _CrcyCnvrsnDiffType,

  _InvesteeUnit,

  _TransactionCurrency,

  _LocalCurrency,

  _GroupCurrency,

  _BaseUnit

}
where GLRecordType = '0'
```
