---
name: I_SUPLRSETTLMTLIST
description: Supplier Settlement List
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value
semantic_en: Supplier Settlement List
keywords:
  - Supplier Settlement List
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRSETTLMTLIST

**Supplier Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` |  | |  |  | `CHAR(10)` | Supplier Settlement List |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SupplierPricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `SuplrSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SupplierTotalGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SupplierTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SupplierTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `SupplierPaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `SupplierCashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `SupplierCashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `SupplierNetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `SupplierCashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `SupplierCashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `SupplierPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrSettlmtListIsCanceled` |  | |  |  | `CHAR(1)` | Supplier Settlement List Is Reversed |
| `CancldSuplrSettlmtList` |  | |  |  | `CHAR(10)` | Reversed Document |
| `SupplierAdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `SupplierFixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SuplrSettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `SupplierVATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `SupplierPaytCurrencyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SuplrSettlmtListIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
