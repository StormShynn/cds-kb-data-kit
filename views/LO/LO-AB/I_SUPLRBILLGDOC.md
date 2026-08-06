---
name: I_SUPLRBILLGDOC
description: Supplier Billing Document
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value
semantic_en: Supplier Billing Document
keywords:
  - Supplier Billing Document
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRBILLGDOC

**Supplier Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SuplrBillgDoc` | `CHAR(10)` | Supplier Billing Document Number |
| `SettlmtDocType` | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` | `CHAR(1)` | Settlement Category |
| `PostingDate` | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SupplierPricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `SupplierPricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `InvoicingParty` | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `CreatedByUser` | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` | `DATS(8)` | Date of Document Creation |
| `CreationTime` | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` | `DATS(8)` | Date of Last Document Change |
| `SuplrBillgDocCurrency` | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` | `DATS(8)` | Exchange Rate Date |
| `SupplierTotalGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SupplierTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SupplierTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `SupplierPaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `SupplierCashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `SupplierCashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `SupplierNetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `SupplierCashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `SupplierCashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `SupplierPaymentMethod` | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrBillgDocIsCanceled` | `CHAR(1)` | Supplier Billing Document Is Reversed |
| `CancldSuplrBillgDoc` | `CHAR(10)` | Reversed Document |
| `SupplierAdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `SupplierFixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
| `TaxDepartureCountry` | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SuplrSettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `SupplierVATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `SupplierPaytCurrencyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` | `CHAR(10)` | Address of One-Time Supplier |
| `CndnContrType` | `CHAR(4)` | Condition Contract Type |
| `SettlmtReltdCndnContr` | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `SettlmtReltdTrdgContr` | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` | `DATS(8)` | Rebates: Settlement Date |
| `SuplrBillgDocIncmpltnsRsn` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `SettlmtDocSmmrznCat` | `CHAR(1)` | Document Summarization Category |
| `TrdgExpnSettlmtDoc` | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `SettlmtClassificationCat` | `CHAR(1)` | Settlement Classification Category |
| `TrdgExpnDocSettled` | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnSupplier` | `CHAR(10)` | Trading Expense Supplier |
| `DocIntrastatRelevance` | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IntrastatDeclnGdsFlwCat` | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` | `CHAR(2)` | Use Case Type |
| `SEPAMandate` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
