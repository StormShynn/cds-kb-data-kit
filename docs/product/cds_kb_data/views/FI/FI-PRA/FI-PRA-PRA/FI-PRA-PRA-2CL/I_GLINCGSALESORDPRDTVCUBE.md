---
name: I_GLINCGSALESORDPRDTVCUBE
description: "IncomingSalesOrderforPredictions - Cube"
app_component: FI-PRA-PRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLINCGSALESORDPRDTVCUBE')/$value
semantic_en: "IncomingSalesOrderforPredictions - Cube"
semantic_vi: "IncomingSalesOrderforPredictions - Cube — CDS view giao diện dựa trên I_GLIncgOrdPrdtvAnalysis."
keywords:
  - "incomingsalesorderforpredictions"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - bo:salesorder
  - component:FI-PRA-PRA-2CL
  - FI-PRA
  - FI-PRA-PRA
  - FI-PRA-PRA-2CL
  - interface-view
  - lob:finance
  - order
---
# I_GLINCGSALESORDPRDTVCUBE

**IncomingSalesOrderforPredictions - Cube**

| Property | Value |
|---|---|
| App Component | `FI-PRA-PRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLINCGSALESORDPRDTVCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Total |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `InvertedAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `InvertedAmtInCoCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `InvertedAmtInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `InvertedAmtInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `InvertedAmtInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `InvertedAmtInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `InvertedAmtInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `InvertedAmtInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `InvertedAmtInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `InvertedAmtInTransCrcy` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `JrnlEntrDerivdFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Journal Entry Derived Fiscal Year Period |
| `JrnlEntrDerivedFiscalPeriod` |  | |  |  | `NUMC(3)` | Journal Entry Derived Fiscal Period |
| `JrnlEntrDerivedFiscalQuarter` |  | |  |  | `NUMC(1)` | Journal Entry Derived Fiscal Quarter |
| `JrnlEntrDerivedFiscalYear` |  | |  |  | `NUMC(4)` | Journal Entry Derived Fiscal Year |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Reason Item is Obsolete |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `OrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `RevenueInGlobalCurrency` |  | |  |  | `CURR(23)` | Revenue Amount in Global Currency |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Product Sold |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Document Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_GLAccountLineItemSemTag` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_FinancialStatementHierarchy` | [0..*] |
| `_GLAccountHierarchy` | `I_GLAccountHierarchy` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_GLAccountLineItemSemTag` | `I_GLAccountLineItemSemTag` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLINCGSALESORDPRDTVCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLINCGSALESORDPRDTVCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFGLISOPRCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'IncomingSalesOrderforPredictions - Cube'
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true



define view I_GLIncgSalesOrdPrdtvCube
  as select from I_GLIncgOrdPrdtvAnalysis as _GLPR
  //  association [0..1] to I_ControllingArea             as _ControllingArea   on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_FinancialStatementHierarchy     as _Hierarchy     on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy
  association [0..*] to I_GLAccountHierarchy              as _GLAccountHierarchy  on  $projection.GLAccountHierarchy = _GLAccountHierarchy.GLAccountHierarchy
  //  association [1..1] to I_CompanyCode                 as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_ProfitCenter                    as _ProfitCenter  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  //  association [0..1] to I_SalesOrganization           as _SalesOrganization on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  //  association [0..1] to I_Customer                    as _Customer          on  $projection.Customer = _Customer.Customer
  //  association [0..1] to I_CustomerGroup               as _CustomerGroup     on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  //  association [0..1] to I_Material                    as _SoldMaterial      on  $projection.SoldMaterial = _SoldMaterial.Material

// remove MaterialGroup, associated entity I_MATERIALGROUP has status NOT_TO_BE_RELEASED_STABLE
//  association [0..1] to I_MaterialGroup               as _MaterialGroup on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  //  association [0..1] to I_SemanticTag                 as _SemanticTag       on  $projection.SemanticTag = _SemanticTag.SemanticTag
  //  association [1..1] to I_Ledger                      as _Ledger            on  $projection.Ledger = _Ledger.Ledger
//  association [1..1] to I_GLIncgOrdPrdtvAnalysis as   _GLIncgOrdPrdtvAnalysis on  $projection.Ledger = _GLIncgOrdPrdtvAnalysis.Ledger
//                                                                               and $projection.SourceLedger = _GLIncgOrdPrdtvAnalysis.SourceLedger
//                                                                               and $projection.CompanyCode = _GLIncgOrdPrdtvAnalysis.CompanyCode
//                                                                               and $projection.FiscalYear = _GLIncgOrdPrdtvAnalysis.FiscalYear
//                                                                               and $projection.AccountingDocument = _GLIncgOrdPrdtvAnalysis.AccountingDocument
//                                                                               and $projection.LedgerGLLineItem = _GLIncgOrdPrdtvAnalysis.LedgerGLLineItem
//                                                                               and $projection.GLAccountHierarchy = _GLIncgOrdPrdtvAnalysis.GLAccountHierarchy
//                                                                               and $projection.SemanticTag = _GLIncgOrdPrdtvAnalysis.SemanticTag
//                                                                               and $projection.ValidityEndDate = _GLIncgOrdPrdtvAnalysis.ValidityEndDate
//                                                                               and $projection.ValidityStartDate = _GLIncgOrdPrdtvAnalysis.ValidityStartDate
//  
  association [1..1] to I_GLAccountLineItemSemTag as   _GLAccountLineItemSemTag on  $projection.Ledger = _GLAccountLineItemSemTag.Ledger
                                                                               and $projection.SourceLedger = _GLAccountLineItemSemTag.SourceLedger
                                                                               and $projection.CompanyCode = _GLAccountLineItemSemTag.CompanyCode
                                                                               and $projection.FiscalYear = _GLAccountLineItemSemTag.FiscalYear
                                                                               and $projection.AccountingDocument = _GLAccountLineItemSemTag.AccountingDocument
                                                                               and $projection.LedgerGLLineItem = _GLAccountLineItemSemTag.LedgerGLLineItem
                                                                               and $projection.GLAccountHierarchy = _GLAccountLineItemSemTag.GLAccountHierarchy
                                                                               and $projection.SemanticTag = _GLAccountLineItemSemTag.SemanticTag
                                                                               and $projection.ValidityEndDate = _GLAccountLineItemSemTag.ValidityEndDate
                                                                               and $projection.ValidityStartDate = _GLAccountLineItemSemTag.ValidityStartDate  

{

      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,

      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
  

      AccountingDocCreatedByUser,
      AccountingDocumentCategory,
      AccountingDocumentItem,
      AccountingDocumentType,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AmountInGlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      AssignmentReference,
      BaseUnit,
      BillingDocumentType,
      BillToParty,
      BusinessArea,
      BusinessTransactionType,
      ChartOfAccounts,
      ClearingAccountingDocument,
      ClearingDate,

      @Semantics.currencyCode:true
      CompanyCodeCurrency,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      ControllingDebitCreditCode,
      CostCenter,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      CostOfGoodsSoldAmtInGlobCrcy,
      CreationDate,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,

      CustomerSupplierCountry,
      CustomerSupplierIndustry,
      DebitCreditCode,
      DistributionChannel,
      Division,
      DocumentDate,
      FinancialAccountType,
      FinancialTransactionType,
      FiscalPeriod,
      FiscalPeriodStartDate,
      FiscalQuarter,
      FiscalYearPeriod,
      FiscalYearVariant,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      FixedQuantity,

      @Semantics.currencyCode:true
      FreeDefinedCurrency1,
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,
      @Semantics.currencyCode:true
      FreeDefinedCurrency3,
      @Semantics.currencyCode:true
      FreeDefinedCurrency4,
      @Semantics.currencyCode:true
      FreeDefinedCurrency5,
      @Semantics.currencyCode:true
      FreeDefinedCurrency6,
      @Semantics.currencyCode:true
      FreeDefinedCurrency7,
      @Semantics.currencyCode:true
      FreeDefinedCurrency8,

      GLAccount,

      GLAccountType,

      @Semantics.currencyCode:true
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      InvertedAmountInGlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      InvertedAmtInCoCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      InvertedAmtInFreeDefinedCrcy1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      InvertedAmtInFreeDefinedCrcy2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      InvertedAmtInFreeDefinedCrcy3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      InvertedAmtInFreeDefinedCrcy4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      InvertedAmtInFreeDefinedCrcy5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      InvertedAmtInFreeDefinedCrcy6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      InvertedAmtInFreeDefinedCrcy7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      InvertedAmtInFreeDefinedCrcy8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      InvertedAmtInTransCrcy,


      JrnlEntrDerivdFiscalYearPeriod,
      JrnlEntrDerivedFiscalPeriod,
      JrnlEntrDerivedFiscalQuarter,
      JrnlEntrDerivedFiscalYear,
      JrnlEntryItemObsoleteReason,

      LedgerFiscalYear,

//      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,

      OperatingConcern,
      OrderType,
      OrganizationDivision,
      Plant,
      PostingDate,
      PostingKey,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      RecognizedCOGSAmtInCCCrcy,
      //  RecognizedMarginAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      RecognizedMarginAmtInCCCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      RecognizedRevnAmtInCCCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      RecognizedRevnAmtInGlobCrcy,

      ReferenceDocumentType,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      RevenueAmountInCompanyCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      RevenueInGlobalCurrency,

      SalesDistrict,
      SalesOrder,
      SalesOrderItem,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      Segment,

      ShipToParty,

      @ObjectModel.foreignKey.association: '_SoldMaterial'
      SoldMaterial,

      SourceReferenceDocument,
      SourceReferenceDocumentItem,
      SourceReferenceDocumentType,
      SpecialGLCode,

      @Semantics.currencyCode:true
      TransactionCurrency,

      TransactionTypeDetermination,

//// Added fields for DCL
//
//      ValuationArea,
//      Supplier,
//      SalesDocument,
////      @ObjectModel.foreignKey.association: '_FixedAsset'
//      FixedAsset,
//      MasterFixedAsset,
//      OrderID,
//      _Supplier,
//      _CurrentCostCenter,
//      _SalesDocument,
//      _FixedAsset,
//      _Order,
////       
//      
       FunctionalArea,
      _FiscalYear,
      _ControllingArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccountHierarchy'
      _Hierarchy,
      _GLAccountHierarchy,
      _SalesOrganization,
      _CompanyCode,
      _ProfitCenter,
      _Customer,
      _CustomerGroup,
      _SoldMaterial,
//      _MaterialGroup,
      _SemanticTag,
      _Ledger,
      _AccountingDocumentType,
      _CurrentProfitCenter,
      _GLAccountInCompanyCode,
      _SourceLedger,
      _JournalEntry,
//      _GLIncgOrdPrdtvAnalysis,
      @Consumption.hidden: true
      _GLAccountLineItemSemTag
}
```
