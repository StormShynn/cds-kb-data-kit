---
name: C_FININVOICEHEADERFDP
description: Corr Type SAP21 Invc Hdr
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value
semantic_en: Corr Type SAP21 Invc Hdr
tags:
  - FI
  - bo:billingdocument
  - component:FI-FIO-AR-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - lob:finance
  - metadata-only
---
# C_FININVOICEHEADERFDP

**Corr Type SAP21 Invc Hdr**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEHEADERFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AbsoluteExchangeRate` | `DEC(9)` | Absolute Exchange Rate |
| `ExchangeRateDate` | `DATS(8)` | Exchange Rate Date |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentTypeName` | `CHAR(20)` | Name of Object Type |
| `OriginalReferenceDocument` | `CHAR(20)` | Object key |
| `Reference1InDocumentHeader` | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `TaxIsCalculatedAutomatically` | `CHAR(1)` | Tax Is Automatically Calculated |
| `TaxBaseAmountIsNetAmount` | `CHAR(1)` | Tax Base Amount is Net Amount |
| `TaxReportingDate` | `DATS(8)` | Tax Reporting Date |
| `TaxFulfillmentDate` | `DATS(8)` | Tax Fulfillment Date |
| `TaxExchangeRate` | `DEC(9)` | Tax Conversion Rate (Not Converted) |
| `IsDiscountDocument` | `CHAR(1)` | Indicator: entry represents a discount document |
| `Ledger` | `CHAR(2)` | Ledger |
| `LedgerGroup` | `CHAR(4)` | Ledger Group |
| `DocumentReferenceID` | `CHAR(16)` | Document Reference ID |
| `ReverseDocument` | `CHAR(10)` | Reverse Document |
| `ReverseDocumentFiscalYear` | `NUMC(4)` | Reverse Document Fiscal Year |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReason` | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal: Reference Organizations of Document to Be Reversed |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal: Reference Document No. of Document to Be Reversed |
| `TransactionCode` | `CHAR(20)` | Transaction Code |
| `InvoiceHasMultiplePaymentTerms` | `CHAR(1)` | Invoice has Multiple Payment Terms |
| `NetAmountInCoCodeCurrency` | `CURR(23)` | Amount in document currency |
| `NetAmountInTransacCurrency` | `CURR(23)` | Amount in document currency |
| `InvoiceAlreadyPaidAmtInCCCrcy` | `CURR(23)` | Amount in document currency |
| `TotalAmountInCoCodeCrcy` | `CURR(23)` | Amount in document currency |
| `TotalAmountInTransactionCrcy` | `CURR(23)` | Amount in document currency |
| `OpenAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in document currency |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
