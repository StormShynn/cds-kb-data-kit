---
name: I_EXPNSETTLMT
description: Expense Settlement
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value
semantic_en: Expense Settlement
keywords:
  - Expense Settlement
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMT

**Expense Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ExpnSettlmt` | `CHAR(10)` | Document Number of Expense Settlement |
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
| `CustomerPricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `CustomerPricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `BillToParty` | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` | `CHAR(10)` | Payer |
| `CustSettlmtCompanyCode` | `CHAR(4)` | Company Code |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `CreatedByUser` | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` | `DATS(8)` | Date of Document Creation |
| `CreationTime` | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` | `DATS(8)` | Date of Last Document Change |
| `ExpnSettlmtCurrency` | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` | `DATS(8)` | Exchange Rate Date |
| `CustomerTotalGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustomerTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustomerTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `CustomerPaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `CustomerCashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `CustomerCashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `CustomerNetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `CustomerCashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `CustomerCashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `CustomerPaymentMethod` | `CHAR(1)` | Payment Method |
| `CustTotEligibleAmtForCshDisc` | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `ExpnSettlmtIsCanceled` | `CHAR(1)` | Expense Settlement Is Reversed |
| `CancldExpnSettlmt` | `CHAR(10)` | Reversed Document |
| `CustomerAdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `CustomerFixedValueDate` | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `CustSettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `CustomerVATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` | `CHAR(30)` | Payment Reference |
| `CustomerPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `CustomerPaytCurrencyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` | `CHAR(10)` | Address of One-Time Customer |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` | `DATS(8)` | Rebates: Settlement Date |
| `ExpnSettlmtIncmpltnsRsn` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `IntrastatDeclnGdsFlwCat` | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `DocIntrastatRelevance` | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IncotermsVersion` | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` | `CHAR(2)` | Use Case Type |
| `SEPAMandate` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SettlmtReltdTrdgContr` | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `TrdgExpnSettlmtDoc` | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `SettlmtDocSmmrznCat` | `CHAR(1)` | Document Summarization Category |
| `TrdgExpnDocSettled` | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnCustomer` | `CHAR(10)` | Trading Expense Customer |
