---
name: C_GLINCGSALESORDPRDTVQUERY
description: Incoming Sales Orders – Pred. Accounting
app_component: FI-PRA-PRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value
semantic_en: Incoming Sales Orders – Pred. Accounting
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
  - metadata-only
---
# C_GLINCGSALESORDPRDTVQUERY

**Incoming Sales Orders – Pred. Accounting**

| Property | Value |
|---|---|
| App Component | `FI-PRA-PRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLINCGSALESORDPRDTVQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `JrnlEntrDerivdFiscalYearPeriod` | `NUMC(7)` | Journal Entry Derived Fiscal Year Period |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostOfGoodsSoldAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Total |
| `CreationDate` | `DATS(8)` | Creation Date |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FixedQuantity` | `QUAN(23)` | Fixed Quantity |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `InvertedAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `InvertedAmtInCoCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInFreeDefinedCrcy1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `InvertedAmtInFreeDefinedCrcy2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `InvertedAmtInFreeDefinedCrcy3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `InvertedAmtInFreeDefinedCrcy4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `InvertedAmtInFreeDefinedCrcy5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `InvertedAmtInFreeDefinedCrcy6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `InvertedAmtInFreeDefinedCrcy7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `InvertedAmtInFreeDefinedCrcy8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `InvertedAmtInTransCrcy` | `CURR(23)` | Amount in Transaction Currency |
| `JrnlEntrDerivedFiscalPeriod` | `NUMC(3)` | Journal Entry Derived Fiscal Period |
| `JrnlEntrDerivedFiscalQuarter` | `NUMC(1)` | Journal Entry Derived Fiscal Quarter |
| `JrnlEntrDerivedFiscalYear` | `NUMC(4)` | Journal Entry Derived Fiscal Year |
| `JrnlEntryItemObsoleteReason` | `CHAR(1)` | Reason Item is Obsolete |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group |
| `OperatingConcern` | `CHAR(4)` | Operating Concern |
| `OrderType` | `CHAR(4)` | Sales Document Type |
| `Plant` | `CHAR(4)` | Plant |
| `PostingDate` | `DATS(8)` | Posting Date |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Quantity` | `QUAN(23)` | Quantity |
| `RecognizedCOGSAmtInCCCrcy` | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` | `CURR(23)` | Recognized Margin |
| `RecognizedRevnAmtInCCCrcy` | `CURR(23)` | Recognized Revenue |
| `RecognizedRevnAmtInGlobCrcy` | `CURR(23)` | Recognized Revenue |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `RevenueAmountInCompanyCodeCrcy` | `CURR(23)` | Revenue Amount in Company Code Currency |
| `RevenueInGlobalCurrency` | `CURR(23)` | Revenue Amount in Global Currency |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `SoldMaterial` | `CHAR(40)` | Product Sold |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Document Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
