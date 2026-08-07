---
name: C_SETTLMTDOCDEX
description: This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for settlement documents. Providing all relevant settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which settled documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCDEX')/$value
semantic_en: This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for settlement documents. Providing all relevant settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which settled documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - consumption-view
  - document
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# C_SETTLMTDOCDEX

**This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for settlement documents. Providing all relevant settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which settled documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SETTLMTDOCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` |  | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `SettlmtProcessCat` |  | |  |  | `CHAR(1)` | Settlement Process Category |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `SupplierPricingProcedure` |  | |  |  | `CHAR(6)` | Supplier Related Pricing Procedure |
| `CustomerPricingProcedure` |  | |  |  | `CHAR(6)` | Customer Related Pricing Procedure |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SettlmtMgmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SuplrSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Supplier Company Code |
| `CustSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Customer Company Code |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SupplierTotalGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Amount for Supplier in Document Currency |
| `SupplierTotalNetAmount` |  | |  |  | `CURR(15)` | Total Net Amount for Supplier in Document Currency |
| `CustomerTotalGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Amount for Customer in Document Currency |
| `CustomerTotalNetAmount` |  | |  |  | `CURR(15)` | Total Net Amount for Customer in Document Currency |
| `SupplierPaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key for Supplier |
| `SupplierCashDiscount1Days` |  | |  |  | `DEC(3)` | Supplier Cash Discount First Payment in Days |
| `SupplierCashDiscount2Days` |  | |  |  | `DEC(3)` | Supplier Cash Discount Second Payment in Days |
| `SupplierNetPaymentDays` |  | |  |  | `DEC(3)` | Supplier Cash Discount Days |
| `SupplierCashDiscount1Percent` |  | |  |  | `DEC(5)` | Supplier Cash Discount for First Payment in % |
| `SupplierCashDiscount2Percent` |  | |  |  | `DEC(5)` | Supplier Cash Discount for Second Payment in % |
| `SupplierPaymentMethod` |  | |  |  | `CHAR(1)` | Supplier Payment Method |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key for Customer |
| `CustomerCashDiscount1Days` |  | |  |  | `DEC(3)` | Customer Cash Discount First Payment in Days |
| `CustomerCashDiscount2Days` |  | |  |  | `DEC(3)` | Customer Cash Discount Second Payment in Days |
| `CustomerNetPaymentDays` |  | |  |  | `DEC(3)` | Customer Cash Discount Days |
| `CustomerCashDiscount1Percent` |  | |  |  | `DEC(5)` | Customer Cash Discount for First Payment in % |
| `CustomerCashDiscount2Percent` |  | |  |  | `DEC(5)` | Custromer Cash Discount for Second Payment in % |
| `CustomerPaymentMethod` |  | |  |  | `CHAR(1)` | Customer Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount Eligible for Cash Discount of Supplier |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount Eligible for Cash Discount of Customer |
| `SettlmtDocIsCanceled` |  | |  |  | `CHAR(1)` | Settlement Document is Reversed |
| `CanceledSettlmtDoc` |  | |  |  | `CHAR(10)` | Reversed Document |
| `SupplierPricingDocument` |  | |  |  | `CHAR(10)` | Supplier Document Condition of Settlement Document |
| `CustomerPricingDocument` |  | |  |  | `CHAR(10)` | Customer Document Condition of Settlement Document |
| `SupplierAdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days for Supplier |
| `SupplierFixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date for Supplier |
| `CustomerAdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days for Customer |
| `CustomerFixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date for Customer |
| `SupplierTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount for Supplier in Document Currency |
| `CustomerTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount for Customer in Document Currency |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SettlmtDocActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SupplierPaymentCurrency` |  | |  |  | `CUKY(5)` | Supplier Payment Currency for Automatic Payment |
| `SupplierPaytCurrencyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Supplier Payment Currency (Not Converted) |
| `CustomerPaymentCurrency` |  | |  |  | `CUKY(5)` | Customer Payment Currency for Automatic Payment |
| `CustomerPaytCurrencyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Customer Payment Currency (Not Converted) |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `SettlmtReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `SettlmtReltdPurgDoc` |  | |  |  | `CHAR(10)` | Related Purchasing Document in Settlement Management |
| `SettlmtReltdBillgDoc` |  | |  |  | `CHAR(10)` | Related Billing Document in Settlement Management |
| `SettlmtDocSmmrznCat` |  | |  |  | `CHAR(1)` | Document Summarization Category |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Currency of Credit Control Area |
| `ReleasedCreditAmount` |  | |  |  | `CURR(15)` | Released Credit Value of the Document |
| `SettlmtClassificationCat` |  | |  |  | `CHAR(1)` | Settlement Classification Category |
| `SettlmtPartnerCat` |  | |  |  | `CHAR(1)` | Settlement Partner Category |
| `SupplierSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Supplier |
| `CustomerSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Customer |
| `SupplierSettlmtDocCat` |  | |  |  | `CHAR(1)` | Settlement Document Type - Supplier |
| `CustomerSettlmtDocCat` |  | |  |  | `CHAR(1)` | Settlement Document Type - Customer |
| `SupplierSettlmtBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Supplier Settlement Block |
| `CustomerSettlmtBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Customer Settlement Block |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `TrdgExpnDocSettled` |  | |  |  | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` |  | |  |  | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` |  | |  |  | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnSupplier` |  | |  |  | `CHAR(10)` | Trading Expense Supplier |
| `TrdgExpnCustomer` |  | |  |  | `CHAR(10)` | Trading Expense Customer |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` |  | |  |  | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDocIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `CombinedSettlmtPostgSts` |  | |  |  | `CHAR(1)` | Posting Status for Combined Settlement |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SupplierVATRegistration` |  | |  |  | `CHAR(20)` | Supplier VAT Registration Number |
| `CustomerVATRegistration` |  | |  |  | `CHAR(20)` | Customer VAT Registration Number |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtDocCollSts` |  | |  |  | `CHAR(1)` | Collective Settlement Status of Settlement Documents |
| `SettlmtDocIsCollvDoc` |  | |  |  | `CHAR(1)` | Indicator that Document is a Collective Document |
| `CollSettlmtBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Collective Settlement Block |
| `SuplrSettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `CustSettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code Customer |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `TotalSettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Total Quantity |
| `TotalSettlmtQuantity` |  | |  |  | `QUAN(15)` | Total Quantity of the Business Volume in a Settlement Run |
| `TotalSettlmtWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight for Total Weight |
| `TotalSettlmtNetWeight` |  | |  |  | `QUAN(15)` | Total Net Weight of the Business Volume in a Settlement Run |
| `TotalSettlmtGrossWeight` |  | |  |  | `QUAN(15)` | Total Gross Weight of the Bus Volume in a Settlement Run |
| `TotalSettlmtVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit for Total Volume |
| `TotalSettlmtVolume` |  | |  |  | `QUAN(15)` | Total Volume of the Business Volume in a Settlement Run |
| `TotalSettlmtPointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit for Total Points |
| `TotalSettlmtPointsQty` |  | |  |  | `QUAN(15)` | Total Points of the Business Volume in a Settlement Run |
| `PostingPartnerCat` |  | |  |  | `CHAR(1)` | Posting Partner |
| `SettlmtPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Settlement Period |
| `SettlmtPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Settlement Period |
| `CndnContrProcessCategory` |  | |  |  | `CHAR(2)` | Process Category of a Condition Contract |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SettlmtDocAuthznCat` |  | |  |  | `CHAR(1)` | Authorization Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SupplierTaxCode` |  | |  |  | `CHAR(2)` | Supplier Tax Code |
| `CustomerTaxCode` |  | |  |  | `CHAR(2)` | Customer Tax Code |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SettlmtQuantity` |  | |  |  | `QUAN(13)` | Quantity of Settlement Management Document Item |
| `SettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure of Settlement Management Doc Item Quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Document Currency |
| `NetPriceQuantityUnit` |  | |  |  | `UNIT(3)` | Settlement Management Document Item Price Unit |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit of Settlement Management Document Item |
| `SettlmtToBaseQuantityNmrtr` |  | |  |  | `DEC(5)` | Numerator Converting Qty in Settlement Document to Base Unit |
| `SettlmtToBaseQuantityDnmntr` |  | |  |  | `DEC(5)` | Denominator Converting Qty in Settlement Doc. to Base Unit |
| `SettlmtToNetPriceQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Converting Settl. UoM to Settl. Price UoM |
| `SettlmtToNetPriceQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Converting Settl. UoM to Settl. Price UoM |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemNetWeight` |  | |  |  | `QUAN(15)` | Net Weight |
| `ItemGrossWeight` |  | |  |  | `QUAN(15)` | Gross Weight |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume |
| `SupplierItemGrossAmount` |  | |  |  | `CURR(15)` | Item Gross Amount for Supplier in Document Currency |
| `SupplierItemNetAmount` |  | |  |  | `CURR(15)` | Item Net Amount for Supplier in Document Currency |
| `SupplierSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 from Prcg. Proced. for Condition of Supplier |
| `SupplierSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 from Prcg. Proced. for Condition of Supplier |
| `SupplierSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 from Prcg. Proced. for Condition of Supplier |
| `SupplierSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 from Prcg. Proced. for Condition of Supplier |
| `SupplierSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 from Prcg. Proced. for Condition of Supplier |
| `SupplierSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 from Prcg. Proced. for Condition of Supplier |
| `SupplierRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis of Supplier |
| `SupplierEffectiveItemAmount` |  | |  |  | `CURR(13)` | Supplier Effective Item Amount |
| `SuplrItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Cash Discount Base Amount for Item (Supplier-Side) |
| `SupplierItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount of Supplier in Document Currency |
| `CustomerItemGrossAmount` |  | |  |  | `CURR(15)` | Item Gross Amount for Customer in Document Currency |
| `CustomerItemNetAmount` |  | |  |  | `CURR(15)` | Item Net Amount for Customer in Document Currency |
| `CustomerSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 from Prcg. Proced. for Condition of Customer |
| `CustomerSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 from Prcg. Proced. for Condition of Customer |
| `CustomerSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 from Prcg. Proced. for Condition of Customer |
| `CustomerSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 from Prcg. Proced. for Condition of Customer |
| `CustomerSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 from Prcg. Proced. for Condition of Customer |
| `CustomerSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 from Prcg. Proced. for Condition of Customer |
| `CustomerRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis of Customer |
| `CustomerEffectiveItemAmount` |  | |  |  | `CURR(13)` | Customer Effective Item Amount in Document Currency |
| `CustItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Cash Discount Base Amount for Item (Customer-Side) |
| `CustomerItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount of Customer in Document Currency |
| `SettlmtItmStatisticalPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount Indicator |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SettlmtItemActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `SettlmtDocItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `SupplierProductID` |  | |  |  | `CHAR(35)` | Material Number Used by Supplier |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `ProductPurchasePointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit |
| `ProductPurchasePointsQty` |  | |  |  | `QUAN(13)` | Number of Points |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `SuplrSettlmtBusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CustSettlmtBusinessArea` |  | |  |  | `CHAR(4)` | Customer Business Area |
| `SuplrSettlmtControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `SuplrSettlmtCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SuplrSettlmtProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CustSettlmtControllingArea` |  | |  |  | `CHAR(4)` | Customer Controlling Area |
| `CustSettlmtCostCenter` |  | |  |  | `CHAR(10)` | Customer Cost Center |
| `CustSettlmtProfitCenter` |  | |  |  | `CHAR(10)` | Alternative Customer Profit Center |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `SupplierPrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Item Pricing Incompleteness Indicator for Supplier |
| `CustomerPrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Item Pricing Incompleteness Indicator for Customer |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `SettlmtDocItemCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContrItem` |  | |  |  | `NUMC(6)` | Related Trading Contract Item of a Settlmt Mgmt Item |
| `SettlmtItemReltdPurgDoc` |  | |  |  | `CHAR(10)` | Related Purchasing Document of a Settlement Management Item |
| `SettlmtItemReltdPurgDocItem` |  | |  |  | `NUMC(5)` | Related Purchasing Document Item of a Settlmt Mgmt Item |
| `SettlmtItemReltdBillgDoc` |  | |  |  | `CHAR(10)` | Related Billing Document of a Settlement Management Item |
| `SettlmtItemReltdBillgDocItem` |  | |  |  | `NUMC(6)` | Related Billing Document Item of a Settlmt Mgmt Item |
| `SettlmtDocItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `SettlmtDocItemCancld` |  | |  |  | `CHAR(1)` | Item Was Canceled |
| `SupplierSettlementOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment |
| `SupplierItemSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Item - Supplier |
| `CustomerItemSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Item - Customer |
| `SupplierItemSettlmtBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Supplier Settlement Block at Item |
| `CustomerItemSettlmtBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Customer Settlement Block at Item |
| `ItemSettlmtRelevance` |  | |  |  | `CHAR(1)` | Item Settlement Relevance |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `LowerLevelItemExists` |  | |  |  | `CHAR(1)` | Subitems Exist |
| `ItemDistributionStatus` |  | |  |  | `CHAR(1)` | Distribution Status of Settlement Item |
| `SettlmtRefDoc` |  | |  |  | `CHAR(20)` | Reference Document for Settlement Management |
| `SettlmtRefDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of Reference Document |
| `SettlmtRefDocLogicalSyst` |  | |  |  | `CHAR(10)` | Logical System of Reference Document for Smt Mgmt |
| `SettlmtRefDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Reference Document for Settlement Management |
| `SettlmtRefDocItem` |  | |  |  | `NUMC(10)` | Reference Document Item for Settlement Management Document |
| `SettlmtRefDocCat` |  | |  |  | `CHAR(2)` | Reference Document Category in Settlement Management |
| `ItemIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document Item Is Relevant for Intrastat Declarations |
| `CustomerSettlementOrder` |  | |  |  | `CHAR(12)` | Order for Customer-Related Account Assignment |
| `SuplrSettlmtWBSElmntInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `CustSettlmtWBSElmntInternalID` |  | |  |  | `NUMC(8)` | Cust Work Breakdown Struct Elmnt (WBS Element) not converted |
| `SettlmtDocItemCollSts` |  | |  |  | `CHAR(1)` | Status for Collection of Settlement Document Item |
| `CollSettlmtItemBlkgReason` |  | |  |  | `CHAR(2)` | Reason for Collective Settlement Item Block |
| `ItmSettlmtDocCollRelevance` |  | |  |  | `CHAR(1)` | Collective Settlement Relevance of Settlement Documents |
| `SettlmtAddlRefDoc` |  | |  |  | `CHAR(20)` | Additional Reference Document for Settlement Management |
| `SettlmtAddlRefDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of Additional Reference Document |
| `SettlmtAddlRefDocLogicalSyst` |  | |  |  | `CHAR(10)` | Logical System of Additional Reference Document for Smt Mgmt |
| `SettlmtAddlRefDocItem` |  | |  |  | `NUMC(10)` | Additional Reference Doc Item for Settlement Mgmt. Document |
| `SettlmtAddlRefDocCat` |  | |  |  | `CHAR(2)` | Additional Reference Document Category |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 5 |
| `BusVolDocSalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization In a Business Volume Document |
| `BusVolDocDistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel In a Business Volume Document |
| `BusVolDocDivision` |  | |  |  | `CHAR(2)` | Division In a Business Volume Document |
| `ProductCommissionGroup` |  | |  |  | `CHAR(2)` | Commission Group |
| `PriceSpecificationProductGroup` |  | |  |  | `CHAR(2)` | Product Pricing Group |
| `SalesVolumeRebateGroup` |  | |  |  | `CHAR(2)` | Sales Volume Rebate Group |
