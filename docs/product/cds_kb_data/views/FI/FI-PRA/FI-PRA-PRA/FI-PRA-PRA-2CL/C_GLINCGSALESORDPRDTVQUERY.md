---
name: C_GLINCGSALESORDPRDTVQUERY
description: "Incoming Sales Orders – Pred. Accounting"
app_component: FI-PRA-PRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value
semantic_en: "Incoming Sales Orders – Pred. Accounting"
semantic_vi: "Incoming Sales Orders – Pred. Accounting — CDS view tiêu dùng dựa trên I_GLIncgSalesOrdPrdtvCube."
keywords:
  - "incoming"
  - "sales"
  - "orders"
  - "pred."
  - "accounting"
  - "jrnl"
  - "entr"
  - "derivd"
  - "fiscal"
  - "year"
  - "period"
  - "organization"
  - "created"
  - "user"
  - "document"
tags:
  - FI
  - account
  - bo:salesorder
  - component:FI-PRA-PRA-2CL
  - consumption-view
  - FI-PRA
  - FI-PRA-PRA
  - FI-PRA-PRA-2CL
  - lob:finance
  - order
  - sales-order
---
# C_GLINCGSALESORDPRDTVQUERY

**Incoming Sales Orders – Pred. Accounting**

| Property | Value |
|---|---|
| App Component | `FI-PRA-PRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JrnlEntrDerivdFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Journal Entry Derived Fiscal Year Period |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
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
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
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
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
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
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
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
| `JrnlEntrDerivedFiscalPeriod` |  | |  |  | `NUMC(3)` | Journal Entry Derived Fiscal Period |
| `JrnlEntrDerivedFiscalQuarter` |  | |  |  | `NUMC(1)` | Journal Entry Derived Fiscal Quarter |
| `JrnlEntrDerivedFiscalYear` |  | |  |  | `NUMC(4)` | Journal Entry Derived Fiscal Year |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Reason Item is Obsolete |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `OrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
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
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Product Sold |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Document Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `_Customer` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFGLISOPRQUERY'
@AbapCatalog.compiler.compareFilter: true
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
//@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Incoming Sales Orders – Pred. Accounting'

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY


define view C_GLIncgSalesOrdPrdtvQuery
  as select from I_GLIncgSalesOrdPrdtvCube
{
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.variableSequence : 100
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  JrnlEntrDerivdFiscalYearPeriod,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.variableSequence : 30
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,

  AccountingDocCreatedByUser,

  @AnalyticsDetails.query.axis: #ROWS
  AccountingDocument,

  AccountingDocumentCategory,
  AccountingDocumentItem,
  AccountingDocumentType,

  @AnalyticsDetails.query.hidden
  AmountInCompanyCodeCurrency,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency2,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency3,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency4,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency5,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency6,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency7,
  @AnalyticsDetails.query.hidden
  AmountInFreeDefinedCurrency8,

  @AnalyticsDetails.query.axis: #COLUMNS
  AmountInGlobalCurrency,

  @AnalyticsDetails.query.hidden
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

  @AnalyticsDetails.query.variableSequence : 80
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,

  CompanyCodeCurrency,

  @AnalyticsDetails.query.variableSequence : 10
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  ControllingArea,

  ControllingDebitCreditCode,
  CostCenter,
  @AnalyticsDetails.query.hidden
  CostOfGoodsSoldAmtInGlobCrcy,
  CreationDate,

  @AnalyticsDetails.query.variableSequence : 50
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.variableSequence : 40
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,

  CustomerSupplierCountry,
  CustomerSupplierIndustry,
  DebitCreditCode,

  @AnalyticsDetails.query.axis: #ROWS
  DistributionChannel,

  Division,

  @AnalyticsDetails.query.axis: #ROWS
  DocumentDate,

  FinancialAccountType,
  FinancialTransactionType,
  FiscalPeriod,

  @AnalyticsDetails.query.variableSequence : 110
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  FiscalPeriodStartDate,
  FiscalQuarter,

  @AnalyticsDetails.query.axis: #ROWS
  FiscalYear,

  FiscalYearPeriod,
  FiscalYearVariant,
  @AnalyticsDetails.query.hidden
  FixedQuantity,
  FreeDefinedCurrency1,
  FreeDefinedCurrency2,
  FreeDefinedCurrency3,
  FreeDefinedCurrency4,
  FreeDefinedCurrency5,
  FreeDefinedCurrency6,
  FreeDefinedCurrency7,
  FreeDefinedCurrency8,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  @AnalyticsDetails.query.variableSequence : 20
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  GLAccountHierarchy,

  GLAccountType,
  GlobalCurrency,

  @EndUserText.label: 'Inverted Amount in Glob Crcy'
  @AnalyticsDetails.query.hidden
  InvertedAmountInGlobalCurrency,
  @EndUserText.label: 'Inverted Amount in CC Crcy'
  @AnalyticsDetails.query.hidden
  InvertedAmtInCoCodeCurrency,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 1'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy1,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 2'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy2,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 3'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy3,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 4'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy4,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 5'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy5,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 6'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy6,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 7'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy7,
  @EndUserText.label: 'Inverted Amt in FreeDefCrcy 8'
  @AnalyticsDetails.query.hidden
  InvertedAmtInFreeDefinedCrcy8,
  @EndUserText.label: 'Inverted Amount in Trans Crcy'
  @AnalyticsDetails.query.hidden
  InvertedAmtInTransCrcy,

  JrnlEntrDerivedFiscalPeriod,
  JrnlEntrDerivedFiscalQuarter,
  JrnlEntrDerivedFiscalYear,
  JrnlEntryItemObsoleteReason,

  @AnalyticsDetails.query.variableSequence : 5
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.axis: #ROWS
  Ledger,

  LedgerFiscalYear,
  LedgerGLLineItem,

// remove MaterialGroup, associated entity I_MATERIALGROUP has status NOT_TO_BE_RELEASED_STABLE
//  @AnalyticsDetails.query.variableSequence : 60
//  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
//  @AnalyticsDetails.query.axis: #ROWS
//  @AnalyticsDetails.query.display: #KEY_TEXT
  MaterialGroup,

  OperatingConcern,
  OrderType,
  //  OrganizationDivision,
  Plant,
  PostingDate,
  PostingKey,

  @AnalyticsDetails.query.variableSequence : 90
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,

  @AnalyticsDetails.query.hidden
  Quantity,
  @AnalyticsDetails.query.hidden
  RecognizedCOGSAmtInCCCrcy,
  //  RecognizedMarginAmount,
  @AnalyticsDetails.query.hidden
  RecognizedMarginAmtInCCCrcy,
  @AnalyticsDetails.query.hidden
  RecognizedRevnAmtInCCCrcy,
  @AnalyticsDetails.query.hidden
  RecognizedRevnAmtInGlobCrcy,

  ReferenceDocumentType,

  @AnalyticsDetails.query.hidden
  RevenueAmountInCompanyCodeCrcy,
  @AnalyticsDetails.query.hidden
  RevenueInGlobalCurrency,

  SalesDistrict,

  @AnalyticsDetails.query.axis: #ROWS
  SalesOrder,

  SalesOrderItem,

  Segment,

  @AnalyticsDetails.query.variableSequence : 120
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  SemanticTag,

  ShipToParty,

  @AnalyticsDetails.query.variableSequence : 70
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldMaterial,

  SourceLedger,
  SourceReferenceDocument,
  SourceReferenceDocumentItem,
  SourceReferenceDocumentType,
  SpecialGLCode,
  TransactionCurrency,
  TransactionTypeDetermination,

  //  @Consumption.hidden: true
  //  ValidityEndDate,
  //  @Consumption.hidden: true
  //  ValidityStartDate,

//  // Added fields for DCL
//  @Consumption.hidden: true
//  ValuationArea,
//  @Consumption.hidden: true
//  Supplier,
//  @Consumption.hidden: true
//  SalesDocument,
//  @Consumption.hidden: true
//  FixedAsset,
//  @Consumption.hidden: true
//  MasterFixedAsset,
//  @Consumption.hidden: true
//  OrderID,
//  @Consumption.hidden: true
//  OrganizationDivision,
//  @Consumption.hidden: true
//  _Supplier,
//  @Consumption.hidden: true
//  _CurrentCostCenter,
//  @Consumption.hidden: true
//  _SalesDocument,
//  @Consumption.hidden: true
//  _FixedAsset,
//  @Consumption.hidden: true
//  _Order,
//  //

  @Consumption.hidden: true
  _Customer,
  @Consumption.hidden: true
  _AccountingDocumentType,
  @Consumption.hidden: true
  _CurrentProfitCenter,
  @Consumption.hidden: true
  _GLAccountInCompanyCode
}
```
