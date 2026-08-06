---
name: I_SUPLRSETTLMT
description: Supplier Settlement
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMT')/$value
semantic_en: Supplier Settlement
keywords:
  - Supplier Settlement
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRSETTLMT

**Supplier Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SuplrSettlmt` | `CHAR(10)` | Supplier Settlement |
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
| `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
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
| `SuplrSettlmtCurrency` | `CUKY(5)` | Currency of Settlement Document |
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
| `SuplrSettlmtIsCanceled` | `CHAR(1)` | Supplier Settlement Is Reversed |
| `CancldSuplrSettlmt` | `CHAR(10)` | Reversed Document |
| `SupplierAdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `SupplierFixedValueDate` | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SuplrSettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `SupplierVATRegistration` | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `CreditControlAreaCurrency` | `CUKY(5)` | Currency of Credit Control Area |
| `ReleasedCreditAmount` | `CURR(15)` | Released credit amount |
| `SettlmtDocActivityReason` | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` | `CUKY(5)` | Payment Currency |
| `SupplierPaytCurrencyExchRate` | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` | `CHAR(10)` | Address of One-Time Supplier |
| `CndnContrType` | `CHAR(4)` | Condition Contract Type |
| `SettlmtReltdCndnContr` | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `SettlmtDateCat` | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDate` | `DATS(8)` | Rebates: Settlement Date |
| `SuplrSettlmtIncmpltnsRsn` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `TotalSettlmtQuantity` | `QUAN(15)` | Total Quantity of the Business Volume in a Settlement Run |
| `TotalSettlmtQuantityUnit` | `UNIT(3)` | Unit of Measure for Total Quantity |
| `TotalSettlmtNetWeight` | `QUAN(15)` | Total Net Weight of the Business Volume in a Settlement Run |
| `TotalSettlmtGrossWeight` | `QUAN(15)` | Total Gross Weight of the Bus Volume in a Settlement Run |
| `TotalSettlmtWeightUnit` | `UNIT(3)` | Unit of Weight for Total Weight |
| `TotalSettlmtVolume` | `QUAN(15)` | Total Volume of the Business Volume in a Settlement Run |
| `TotalSettlmtVolumeUnit` | `UNIT(3)` | Volume Unit for Total Volume |
| `TotalSettlmtPointsQty` | `QUAN(15)` | Total Points of the Business Volume in a Settlement Run |
| `TotalSettlmtPointsQtyUnit` | `UNIT(3)` | Points Unit for Total Points |
| `SettlmtPeriodStartDate` | `DATS(8)` | Start Date of Settlement Period |
| `SettlmtPeriodEndDate` | `DATS(8)` | End Date of Settlement Period |
| `CndnContrProcessCategory` | `CHAR(2)` | Process Category of a Condition Contract |
