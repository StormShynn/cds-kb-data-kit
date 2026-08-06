---
name: I_ACCOUNTINGDOCUMENT
description: Accounting Document
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value
semantic_en: Accounting Document
tags:
  - FI
  - account
  - bo:journalentry
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ACCOUNTINGDOCUMENT

**Accounting Document**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `AccountingDocumentCreationDate` | `DATS(8)` | Accounting Document Entry Date |
| `CreationTime` | `TIMS(6)` | Creation Time |
| `LastChangeDate` | `DATS(8)` | Last Change Date |
| `ExchangeRateDate` | `DATS(8)` | Exchange Rate Date |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `TransactionCode` | `CHAR(20)` | Transaction Code |
| `IntercompanyTransaction` | `CHAR(16)` | Intercompany Transaction Number |
| `DocumentReferenceID` | `CHAR(16)` | Reference Document Number |
| `RecurringAccountingDocument` | `CHAR(10)` | Recurring Journal Entry |
| `ReverseDocument` | `CHAR(10)` | Reverse Document Number |
| `ReverseDocumentFiscalYear` | `NUMC(4)` | Fiscal Year of Reversal Document |
| `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `ExchangeRate` | `DEC(9)` | Exchange Rate |
| `GroupCurrency` | `CUKY(5)` | Currency Key for the Group Currency |
| `AccountingDocumentCategory` | `CHAR(1)` | Document Status |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Category |
| `BatchInputSession` | `CHAR(12)` | Batch Input Session Name |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` | `CHAR(20)` | Object key |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `ReferenceDocumentLogicalSystem` | `CHAR(10)` | Logical System of Reference Document |
| `Branch` | `CHAR(4)` | Branch Number |
| `IsDiscountDocument` | `CHAR(1)` | Indicator: entry represents a discount document |
| `Reference1InDocumentHeader` | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `InvoiceReceiptDate` | `DATS(8)` | Invoice Receipt Date |
| `Ledger` | `CHAR(2)` | Ledger |
| `LedgerGroup` | `CHAR(4)` | Ledger Group |
| `AlternativeReferenceDocument` | `CHAR(26)` | Alternative Reference Number |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `TaxReportingDate` | `DATS(8)` | Tax Reporting Date |
| `ReversalReason` | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `ParkingDate` | `DATS(8)` | Day of Parking of Accounting Document |
| `ParkingTime` | `TIMS(6)` | Time of Parking |
| `Currency` | `CUKY(5)` | Currency Key |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AdditionalCurrency1` | `CUKY(5)` | Additional Currency 1 |
| `AdditionalCurrency2` | `CUKY(5)` | Additional Currency 2 |
| `TaxIsCalculatedAutomatically` | `CHAR(1)` | Calculate Tax Automatically |
| `NmbrOfPages` | `NUMC(3)` | Number of pages of invoice |
