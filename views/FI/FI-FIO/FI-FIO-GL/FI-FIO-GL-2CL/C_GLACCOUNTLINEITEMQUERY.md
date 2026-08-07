---
name: C_GLACCOUNTLINEITEMQUERY
description: The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value
semantic_en: The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Journal Entry Analyzer Query
  - Journal Entry Analyzer Query
  - Journal Entry Analyzer Query
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-FIO-GL-2CL
  - consumption-view
  - customer
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - supplier
  - transaction
  - metadata-only
---
# C_GLACCOUNTLINEITEMQUERY

**The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInTransactionCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInGlobalCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInFunctionalCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInBalanceTransacCrcy` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInGlobalCrcy` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInGlobalCrcy` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy1` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy1` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy2` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy2` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy3` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy3` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy4` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy4` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy5` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy5` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy6` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy6` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy7` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy7` |  | |  |  | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy8` |  | |  |  | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy8` |  | |  |  | `DECF(34)` |  |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
