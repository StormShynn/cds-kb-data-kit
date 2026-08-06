---
name: C_SUPLRSETTLMTLISTDEX
description: Supplier Settlement List Extraction
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTLISTDEX')/$value
semantic_en: Supplier Settlement List Extraction
tags:
  - LO
  - component:LO-AB
  - consumption-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# C_SUPLRSETTLMTLISTDEX

**Supplier Settlement List Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTLISTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SuplrSettlmtList` | `CHAR(10)` | Supplier Settlement List |
| `SuplrSettlmtListItem` | `NUMC(6)` | Item in List |
| `SettlmtDocType` | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` | `CHAR(1)` | Entry Category for Logistics Data |
| `PostingDate` | `DATS(8)` | Posting Date |
| `SuplrSetlLstAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` | `CHAR(18)` | Assignment Number |
| `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
| `SettlmtApplSts` | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` | `CHAR(6)` | Pricing Procedure |
| `InvoicingParty` | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` | `CHAR(10)` | Alternative Supplier |
| `BillToParty` | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` | `CHAR(10)` | Payer |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `CreatedByUser` | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` | `DATS(8)` | Date of Document Creation |
| `CreationTime` | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` | `DATS(8)` | Date of Last Document Change |
| `SuplrSettlmtListCurrency` | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` | `DATS(8)` | Exchange Rate Date |
| `SuplrSettlmtListTotGrossAmount` | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SuplrSettlmtListTotalNetAmount` | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SuplrSettlmtListTotalTaxAmount` | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrSettlmtListIsReversed` | `CHAR(1)` | Supplier Settlement List Is Reversed |
| `RvsdSuplrSettlmtList` | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `PaymentReference` | `CHAR(30)` | Payment Reference |
| `SuplrSettlmtListActyReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `SuplrSettlmtListPaytCurrency` | `CUKY(5)` | Payment Currency |
| `SuplrSetlLstPaytCrcyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` | `CHAR(10)` | Address of One-Time Supplier |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` | `DATS(8)` | Rebates: Settlement Date |
| `SuplrSettlmtListIncmpltnsRsn` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `RefSettlmtDoc` | `CHAR(10)` | Settlement Document Number |
| `SuplrSettlmtListItemNetAmount` | `CURR(15)` | Net Amount of a List Item |
| `SuplrSettlmtListItemTaxAmount` | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` | `CURR(13)` | Tax of Settlement Document List Conditions |
| `SuplrSettlmtListItemIsReversed` | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
