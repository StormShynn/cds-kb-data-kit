---
name: C_JP_ANNEX205APBOOKQUERY
description: This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value
semantic_en: This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:companycode
  - claim
  - component:FI-LOC-FI-JP
  - consumption-view
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - lob:finance
  - lob:logistics general
  - order
  - metadata-only
---
# C_JP_ANNEX205APBOOKQUERY

**This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `JP_Annex205APLeadingAcctgDoc` |  | |  |  | `CHAR(10)` | Japan Annex21(5) Leading Accounting Document Number |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity of Japan Annex21 |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `NetPriceQuantity` |  | |  |  | `QUAN(5)` | Net price quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
