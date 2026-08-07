---
name: C_FININVOICEITEMFDP
description: Corr Type SAP21 Invc itm
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value
semantic_en: Corr Type SAP21 Invc itm
keywords:
  - Correspondence - Invoice document - items
  - Correspondence - Invoice document - items
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
# C_FININVOICEITEMFDP

**Corr Type SAP21 Invc itm**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FININVOICEITEMFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentItemType` |  | |  |  | `CHAR(1)` | Identification of the Line Item |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `PostingKeyName` |  | |  |  | `CHAR(20)` | Posting Key Name |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerFullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
| `IsOneTimeAccount` |  | |  |  | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `AlternativePayerAccount` |  | |  |  | `CHAR(10)` | Account Number of an Alternative Payer |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `SupplierFullName` |  | |  |  | `CHAR(220)` | Supplier Full Name |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `UnitOfMeasure_E` |  | |  |  | `CHAR(3)` | External Commercial Unit of Measurement (3-Character Format) |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `DueCalculationBaseDate` |  | |  |  | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PaymentIsInstallment` |  | |  |  | `CHAR(1)` | Indicator: Term for Installment Payment |
| `PaymentTermsName` |  | |  |  | `CHAR(30)` | Description of terms of payment |
| `PaymentTermsDescription` |  | |  |  | `CHAR(1024)` | Payment Terms Description |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | |  |  | `DATS(8)` | Cash Discount 2 Due Date |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `NetDueDate` |  | |  |  | `DATS(8)` | Due Date for Net Payment |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `GoodsMovementEntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(23)` | Quantity in Entry Unit |
| `DelivOfGoodsDestCountry` |  | |  |  | `CHAR(3)` | Country/Region of Destination for Delivery of Goods |
| `DelivOfGoodsOriginCountry` |  | |  |  | `CHAR(3)` | Delivery Of Goods Origin Country/Region |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxType` |  | |  |  | `CHAR(1)` | Tax Type |
| `TaxItemGroup` |  | |  |  | `NUMC(3)` | Group Indicator for Tax Line Items |
| `TaxRateValidityStartDate` |  | |  |  | `DATS(8)` | Tax Rate Validity Start Date |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determination of Tax Rates |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `OriglTaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Base Amount of Original Tax in Company Code Currency |
| `OriginalTaxBaseAmount` |  | |  |  | `CURR(23)` | Original Tax Base Amount in Transaction Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `TaxAmount` |  | |  |  | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `TaxBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `WithholdingTaxBaseAmount` |  | |  |  | `CURR(23)` | Withholding Tax Base Amount |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `IsSalesRelated` |  | |  |  | `CHAR(1)` | Is Sales Related |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `AddressAndBankIsSetManually` |  | |  |  | `CHAR(1)` | Address and Bank Data is Set Manually |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
