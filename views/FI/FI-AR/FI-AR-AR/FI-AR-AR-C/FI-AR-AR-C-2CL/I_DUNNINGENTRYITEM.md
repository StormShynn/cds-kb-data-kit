---
name: I_DUNNINGENTRYITEM
description: Dunning Entry Item
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value
semantic_en: Dunning Entry Item
tags:
  - FI
  - component:FI-AR-AR-C-2CL
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-C
  - FI-AR-AR-C-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DUNNINGENTRYITEM

**Dunning Entry Item**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRYITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DunningRunDate` | `DATS(8)` | Dunning Run Date |
| `DunningRun` | `CHAR(6)` | Dunning Run Identification |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Supplier |
| `OneTimeAcctBankAccount` | `CHAR(18)` | Bank Account Number |
| `CustomerHeadOffice` | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `GroupingDunningArea` | `CHAR(2)` | Dunning Area |
| `GroupingDunningLevel` | `NUMC(1)` | Dunning Level |
| `ReferenceDocumentCompanyCode` | `CHAR(4)` | Company Code |
| `JournalEntry` | `CHAR(10)` | Journal Entry |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `JournalEntryItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `DocumentReferenceID` | `CHAR(16)` | Reference Document Number |
| `PostingDate` | `DATS(8)` | Posting Date |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentCreationDate` | `DATS(8)` | Accounting Document Entry Date |
| `DueCalculationBaseDate` | `DATS(8)` | Baseline Date for Due Date Calculation |
| `NetDueDate` | `DATS(8)` | Due Date for Net Payment |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `DunningKey` | `CHAR(1)` | Dunning Key |
| `DunningBlockingReason` | `CHAR(1)` | Dunning Block |
| `DunningArea` | `CHAR(2)` | Dunning Area |
| `LastDunningDate` | `DATS(8)` | Date of Last Dunning Notice |
| `OldDunningLevel` | `NUMC(1)` | Old Dunning Level |
| `DunningLevel` | `NUMC(1)` | Dunning Level |
| `PaymentBlockingReason` | `CHAR(1)` | Payment Block on Item |
| `DunningItemIsPayable` | `CHAR(1)` | Items Not to be Dunned |
| `NetDueArrearsDays` | `DEC(5)` | Days in Arrears by Net Due Date |
| `SpecialGLTransactionType` | `CHAR(1)` | Special G/L Transaction Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `BranchAccount` | `CHAR(10)` | Account Number of the Branch |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `TreasuryContract` | `CHAR(13)` | Contract Number |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `SupplierPaymentMethod` | `CHAR(1)` | Payment Method |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
