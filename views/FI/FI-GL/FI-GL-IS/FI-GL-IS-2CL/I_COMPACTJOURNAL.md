---
name: I_COMPACTJOURNAL
description: Compact Journal
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value
semantic_en: Compact Journal
keywords:
  - Compact Journal
  - Compact Journal
  - Compact Journal
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_COMPACTJOURNAL

**Compact Journal**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `GLDebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Debit Amount in Company Code Currency |
| `AssetDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Debit Amount in Company Code Currency |
| `MaterialDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Debit Amount in Company Code Currency |
| `DebtorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Debit Amount in Company Code Currency |
| `CreditorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Debit Amount in Company Code Currency |
| `GLCreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Credit Amount in Company Code Currency |
| `AssetCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Credit Amount in Company Code Currency |
| `MaterialCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Credit Amount in Company Code Currency |
| `DebtorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Credit Amount in Company Code Currency |
| `CreditorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `AccountingDocumentTypeName` |  | |  |  | `CHAR(20)` | Document Type Name |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `CostCenterHierarchyNode` |  | |  |  | `CHAR(50)` | Cost Center Hierarchy Node |
| `CostCenterHierarchy` |  | |  |  | `CHAR(42)` | Cost Center Hierarchy |
| `GLAccountHierarchyNode` |  | |  |  | `CHAR(50)` | G/L Account Hierarchy Node |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | G/L Account Hierarchy |
| `ProfitCenterHierarchyNode` |  | |  |  | `CHAR(50)` | Cost Center Hierarchy Node |
| `ProfitCenterHierarchy` |  | |  |  | `CHAR(42)` | Profit Center Hierarchy |
