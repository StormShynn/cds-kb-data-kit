---
name: I_CASHJOURNALDOCUMENT_2
description: Cash Journal Document
app_component: FI-BL-PT-CJ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value
semantic_en: Cash Journal Document
tags:
  - FI
  - component:FI-BL-PT-CJ-2CL
  - document
  - FI-BL
  - FI-BL-PT
  - FI-BL-PT-CJ
  - FI-BL-PT-CJ-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CASHJOURNALDOCUMENT_2

**Cash Journal Document**

| Property | Value |
|---|---|
| App Component | `FI-BL-PT-CJ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CashJournal` | `CHAR(4)` | Cash Journal Number |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `CashJournalDocumentInternalID` | `CHAR(10)` | Cash Journal Document Number |
| `Language` | `LANG(1)` | Language Key |
| `Currency` | `CUKY(5)` | Currency Key |
| `DocumentDate` | `DATS(8)` | Document Date in Document |
| `TaxAmountInTransCrcy` | `CURR(23)` | Tax Amount in Document Currency |
| `CashJournalDocumentNetAmount` | `CURR(23)` | Cash Journal Document Net Amount - Document Currency |
| `WhldgTaxDeductedNetPaymentAmt` | `CURR(23)` | Net Payment Amount (Withholding Tax Deducted) |
| `CashJournalReceiptAmount` | `CURR(23)` | Cash Journal Amount Field with +/- Sign |
| `CashJournalPaymentAmount` | `CURR(23)` | Cash Journal Amount Field with +/- Sign |
| `AmountInTransactionCurrency` | `CURR(24)` |  |
| `ReceiptRecipientName` | `CHAR(35)` | Name of Receipt Recipient |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CashJournalDocument` | `CHAR(10)` | Cash Journal Document Number for Display |
| `AccountingDocExternalReference` | `CHAR(16)` | Reference Document Number |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `CashJournalDocumentStatus` | `CHAR(2)` | Cash Journal Entry Document Status |
| `CreatedByUser` | `CHAR(12)` | User Name |
| `CashJournalIsPrinted` | `CHAR(1)` | Cash Journal Print Indicator |
| `TaxRate` | `DEC(7)` | Tax rate |
| `CashJournalDocumentText1` | `CHAR(100)` | Additional Field 1 for Cash Journal Document Header |
| `CashJournalDocumentText2` | `CHAR(30)` | Additional Field 2 for Cash Journal Document Header |
| `Cheque` | `CHAR(13)` | Check number |
| `CashJournalChequeIssuer` | `CHAR(14)` | Check Issuer (Cash Journal) |
| `BankKey` | `CHAR(15)` | Bank Keys |
| `BankAccount` | `CHAR(18)` | Bank Account Number |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `CashJournalChequeLot` | `CHAR(8)` | Number of Check Lot in Cash Journal |
| `CashJournalChequePostingSts` | `CHAR(1)` | Posting Status for Checks in Cash Journal |
| `CashJournalReversalDocument` | `CHAR(10)` | Reversal Document Number for Cash Journal Document |
| `ExchangeRate` | `DEC(9)` | Exchange Rate |
| `BusinessPlace` | `CHAR(4)` | Business Place |
| `BusinessSectionCode` | `CHAR(4)` | Section Code |
| `CashJournalDocumentIsSplit` | `CHAR(1)` | Split Information for Cash Journal Document |
| `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `ChequeLotFiscalYear` | `NUMC(4)` | Check Lot Fiscal Year |
| `ValueDate` | `DATS(8)` | Value Date |
| `TaxReportingDate` | `DATS(8)` | Tax Reporting Date |
