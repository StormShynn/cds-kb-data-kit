---
name: C_SUPLRBILLGDOCDEX
description: "Supplier Billing Document Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRBILLGDOCDEX')/$value
semantic_en: "Supplier Billing Document Extraction"
semantic_vi: "Supplier Billing Document Extraction — CDS view tiêu dùng dựa trên R_SuplrBillgDocDEX."
keywords:
  - "supplier"
  - "billing"
  - "document"
  - "extraction"
  - "suplr"
  - "billg"
  - "item"
  - "settlmt"
  - "type"
  - "process"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - consumption-view
  - document
  - LO-AB
  - lob:logistics general
  - supplier
---
# C_SUPLRBILLGDOCDEX

**Supplier Billing Document Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRBILLGDOCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SuplrBillgDocAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `SuplrBillgDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SuplrBillgDocTotalGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SuplrBillgDocTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SuplrBillgDocTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrBillgDocIsReversed` |  | |  |  | `CHAR(1)` | Supplier Billing Document Is Reversed |
| `RvsdSuplrBillgDoc` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SuplrBillgDocActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SuplrBillgDocPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `SuplrBillgDocPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `SettlmtReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SuplrBillgDocIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `IntrastatDeclnGdsFlwCat` |  | |  |  | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `TotalSettlmtQuantity` |  | |  |  | `QUAN(15)` | Total Quantity of the Business Volume in a Settlement Run |
| `TotalSettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Total Quantity |
| `TotalSettlmtNetWeight` |  | |  |  | `QUAN(15)` | Total Net Weight of the Business Volume in a Settlement Run |
| `TotalSettlmtGrossWeight` |  | |  |  | `QUAN(15)` | Total Gross Weight of the Bus Volume in a Settlement Run |
| `TotalSettlmtWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight for Total Weight |
| `TotalSettlmtVolume` |  | |  |  | `QUAN(15)` | Total Volume of the Business Volume in a Settlement Run |
| `TotalSettlmtVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit for Total Volume |
| `TotalSettlmtPointsQty` |  | |  |  | `QUAN(15)` | Total Points of the Business Volume in a Settlement Run |
| `TotalSettlmtPointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit for Total Points |
| `SettlmtDocSmmrznCat` |  | |  |  | `CHAR(1)` | Document Summarization Category |
| `SettlmtClassificationCat` |  | |  |  | `CHAR(1)` | Settlement Classification Category |
| `TrdgExpnSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `TrdgExpnDocSettled` |  | |  |  | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnAmount` |  | |  |  | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnCurrency` |  | |  |  | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnSupplier` |  | |  |  | `CHAR(10)` | Trading Expense Supplier |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `SettlmtQuantity` |  | |  |  | `QUAN(13)` | Quantity of Settlement Management Document Item |
| `SettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure of Settlement Management Doc Item Quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Document Currency |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit of Settlement Management Document Item |
| `NetPriceQuantityUnit` |  | |  |  | `UNIT(3)` | Settlement Management Document Item Price Unit |
| `SettlmtToBaseQuantityNmrtr` |  | |  |  | `DEC(5)` | Numerator Converting Qty in Settlement Document to Base Unit |
| `SettlmtToBaseQuantityDnmntr` |  | |  |  | `DEC(5)` | Denominator Converting Qty in Settlement Doc. to Base Unit |
| `SettlmtToNetPriceQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Converting Settl. UoM to Settl. Price UoM |
| `SettlmtToNetPriceQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Converting Settl. UoM to Settl. Price UoM |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ItemNetWeight` |  | |  |  | `QUAN(15)` | Net Weight |
| `ItemGrossWeight` |  | |  |  | `QUAN(15)` | Gross Weight |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ProductPurchasePointsQtyUnit` |  | |  |  | `UNIT(3)` | Quantity Unit of Purchase Points of a Product |
| `ProductPurchasePointsQty` |  | |  |  | `QUAN(13)` | Purchase Points Quantity of a Product |
| `SuplrBillgDocItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount in Document Currency |
| `SuplrBillgDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `SuplrBillgDocItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `SuplrBillgDocSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `SuplrBillgDocSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `SuplrBillgDocSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `SuplrBillgDocSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `SuplrBillgDocSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `SuplrBillgDocSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `SuplrBillgDocRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `SuplrBillgDocEffctvItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `SuplrItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SuplrBillgDocItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SuplrBillgDocItmActyReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `SuplrBillgDocItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SupplierBillingDocumentOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination is Incomplete |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `SuplrBillgDocItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContrItem` |  | |  |  | `NUMC(6)` | Related Trading Contract Item of a Settlmt Mgmt Item |
| `SuplrBillgDocItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `SuplrBillgDocItmReversed` |  | |  |  | `CHAR(1)` | Item Was Canceled |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `LowerLevelItemExists` |  | |  |  | `CHAR(1)` | Subitems Exist |
| `ItemDistributionStatus` |  | |  |  | `CHAR(1)` | Distribution Status of Settlement Item |
| `SettlmtRefDocType` |  | |  |  | `CHAR(4)` | Type of Reference Document for Settlement Management |
| `SettlmtRefDoc` |  | |  |  | `CHAR(20)` | Reference Document for Settlement Management |
| `SettlmtRefDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of Reference Document |
| `SettlmtRefDocLogicalSyst` |  | |  |  | `CHAR(10)` | Logical System of Reference Document for Smt Mgmt |
| `SettlmtRefDocItem` |  | |  |  | `NUMC(10)` | Reference Document Item for Settlement Management Document |
| `SettlmtRefDocCat` |  | |  |  | `CHAR(2)` | Reference Document Category in Settlement Management |
| `ItemIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document Item Is Relevant for Intrastat Declarations |
| `SettlmtAddlRefDocType` |  | |  |  | `CHAR(4)` | Type of Additional Reference Document for Settlmt Mgmt |
| `SettlmtAddlRefDoc` |  | |  |  | `CHAR(20)` | Additional Reference Document for Settlement Management |
| `SettlmtAddlRefDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of Additional Reference Document |
| `SettlmtAddlRefDocLogicalSyst` |  | |  |  | `CHAR(10)` | Logical System of Additional Reference Document for Smt Mgmt |
| `SettlmtAddlRefDocItem` |  | |  |  | `NUMC(10)` | Additional Reference Doc Item for Settlement Mgmt. Document |
| `SettlmtAddlRefDocCat` |  | |  |  | `CHAR(2)` | Additional Reference Document Category |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 5 |
| `SupplierProductID` |  | |  |  | `CHAR(35)` | Material Number Used by Supplier |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `_AlternativeInvoicingParty` |  | |  |  |  |  |
| `_AltvInvoicingPartyCompany` |  | |  |  |  |  |
| `_InvoicingParty` |  | |  |  |  |  |
| `_InvoicingPartyCompany` |  | |  |  |  |  |
| `_PayeeParty` |  | |  |  |  |  |
| `_PayeePartyCompany` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRBILLGDOCDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRBILLGDOCDEX')/$value)*

```abap
@ObjectModel: {
   compositionRoot: true,
   modelingPattern:#ANALYTICAL_FACT,
   supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   sapObjectNodeType.name: 'SupplierBillingDocument'
}

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta: {
              changeDataCapture: {
                          mapping:[
                              {
                                  table: 'wbrp', role: #MAIN,
                                  viewElement: ['SuplrBillgDoc', 'SuplrBillgDocItem'],
                                  tableElement: ['wbeln', 'posnr']
                              },
                              {
                                  table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                                  viewElement: ['SuplrBillgDoc'],
                                  tableElement: ['wbeln']
                              }
                         ]
        }
      }
    }
 }


@VDM.viewType: #CONSUMPTION

@AccessControl: {
  authorizationCheck:      #MANDATORY,
  personalData.blocking:   #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Supplier Billing Document Extraction'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false 
    }

define view entity C_SuplrBillgDocDEX
  as select from R_SuplrBillgDocDEX as SuplrBillgDocDEX
{
  key SuplrBillgDoc,
  key SuplrBillgDocItem,

      SuplrBillgDocDEX.SettlmtDocType               as SettlmtDocType,
      SuplrBillgDocDEX.SettlmtDocCat,
      SuplrBillgDocDEX.SettlmtProcessType,
      SuplrBillgDocDEX.LogisticsDataEntryCat,
      SuplrBillgDocDEX.SettlmtCat,
      SuplrBillgDocDEX.PostingDate,
      SuplrBillgDocDEX.SuplrBillgDocAcctgTransfSts,
      SuplrBillgDocDEX.DocumentDate,
      SuplrBillgDocDEX.DocumentReferenceID,
      SuplrBillgDocDEX.AssignmentReference,
      SuplrBillgDocDEX.SettlmtApplSts,
      SuplrBillgDocDEX.SettlmtApplStsGrp,
      SuplrBillgDocDEX.PricingProcedure,
      SuplrBillgDocDEX.PricingDocument,
      SuplrBillgDocDEX.InvoicingParty,
      SuplrBillgDocDEX.PayeeParty,
      SuplrBillgDocDEX.AlternativeInvoicingParty,
      SuplrBillgDocDEX.CompanyCode                  as CompanyCode,
      SuplrBillgDocDEX.PurchasingOrganization,
      SuplrBillgDocDEX.PurchasingGroup,
      SuplrBillgDocDEX.CreatedByUser,
      SuplrBillgDocDEX.CreationDate,
      SuplrBillgDocDEX.CreationTime,
      SuplrBillgDocDEX.LastChangeDate               as LastChangeDate,
      SuplrBillgDocDEX.SuplrBillgDocCurrency        as SuplrBillgDocCurrency,
      SuplrBillgDocDEX.ExchangeRate,
      SuplrBillgDocDEX.ExchangeRateType,
      SuplrBillgDocDEX.ExchangeRateIsFixed,
      SuplrBillgDocDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocTotalTaxAmount,
      SuplrBillgDocDEX.PaymentTerms,
      SuplrBillgDocDEX.CashDiscount1Days,
      SuplrBillgDocDEX.CashDiscount2Days,
      SuplrBillgDocDEX.NetPaymentDays,
      SuplrBillgDocDEX.CashDiscount1Percent,
      SuplrBillgDocDEX.CashDiscount2Percent,
      SuplrBillgDocDEX.PaymentMethod,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrTotEligibleAmtForCshDisc,
      SuplrBillgDocDEX.SuplrBillgDocIsReversed,
      SuplrBillgDocDEX.RvsdSuplrBillgDoc,
      SuplrBillgDocDEX.AdditionalValueDays,
      SuplrBillgDocDEX.FixedValueDate,
      SuplrBillgDocDEX.SupplyingCountry,
      SuplrBillgDocDEX.StateCentralBankPaymentReason,
      SuplrBillgDocDEX.TaxDepartureCountry,
      SuplrBillgDocDEX.TaxDestinationCountry,
      SuplrBillgDocDEX.IsEUTriangularDeal,
      SuplrBillgDocDEX.SettlmtCoCodeTaxCountry,
      SuplrBillgDocDEX.VATRegistration,
      SuplrBillgDocDEX.CreditControlArea,
      SuplrBillgDocDEX.SuplrBillgDocActivityReason,
      SuplrBillgDocDEX.PaymentReference,
      SuplrBillgDocDEX.SuplrBillgDocPaymentCurrency,
      SuplrBillgDocDEX.SuplrBillgDocPaytCrcyExchRate,
      SuplrBillgDocDEX.OneTimeSupplierAddressID,
      SuplrBillgDocDEX.SettlmtReltdCndnContr,
      SuplrBillgDocDEX.SettlmtReltdTrdgContr,
      SuplrBillgDocDEX.CndnContrType,
      SuplrBillgDocDEX.FiscalPeriod,
      SuplrBillgDocDEX.SettlmtDate,
      SuplrBillgDocDEX.SuplrBillgDocIncmpltnsRsn,
      SuplrBillgDocDEX.DocIntrastatRelevance,
      SuplrBillgDocDEX.IntrastatDeclnGdsFlwCat,
      SuplrBillgDocDEX.IncotermsVersion,
      SuplrBillgDocDEX.IncotermsClassification,
      SuplrBillgDocDEX.IncotermsTransferLocation,
      SuplrBillgDocDEX.IncotermsLocation1,
      SuplrBillgDocDEX.IncotermsLocation2,
      SuplrBillgDocDEX.SettlmtBusProcVar,
      SuplrBillgDocDEX.SettlmtBusProcCat,
      SuplrBillgDocDEX.SEPAMandate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      SuplrBillgDocDEX.TotalSettlmtQuantity,
      SuplrBillgDocDEX.TotalSettlmtQuantityUnit     as TotalSettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      SuplrBillgDocDEX.TotalSettlmtNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      SuplrBillgDocDEX.TotalSettlmtGrossWeight,
      SuplrBillgDocDEX.TotalSettlmtWeightUnit       as TotalSettlmtWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      SuplrBillgDocDEX.TotalSettlmtVolume,
      SuplrBillgDocDEX.TotalSettlmtVolumeUnit       as TotalSettlmtVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtPointsQtyUnit'
      SuplrBillgDocDEX.TotalSettlmtPointsQty,
      SuplrBillgDocDEX.TotalSettlmtPointsQtyUnit    as TotalSettlmtPointsQtyUnit,
      SuplrBillgDocDEX.SettlmtDocSmmrznCat,
      SuplrBillgDocDEX.SettlmtClassificationCat,
      SuplrBillgDocDEX.TrdgExpnSettlmtDoc,
      SuplrBillgDocDEX.TrdgExpnDocSettled,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TrdgExpnCurrency'
      SuplrBillgDocDEX.TrdgExpnAmount,
      SuplrBillgDocDEX.TrdgExpnCurrency             as TrdgExpnCurrency,
      SuplrBillgDocDEX.TrdgExpnSupplier,

      /* Items */
      SuplrBillgDocDEX.Product,
      SuplrBillgDocDEX.ProductGroup,
      SuplrBillgDocDEX.Plant,
      SuplrBillgDocDEX.InventoryValuationType,
      SuplrBillgDocDEX.PricingDate,
      SuplrBillgDocDEX.TaxCode,
      SuplrBillgDocDEX.TaxJurisdiction,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SuplrBillgDocDEX.SettlmtQuantity,
      SuplrBillgDocDEX.SettlmtQuantityUnit          as SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      SuplrBillgDocDEX.NetPriceQuantity,
      SuplrBillgDocDEX.NetPriceQuantityUnit         as NetPriceQuantityUnit,
      SuplrBillgDocDEX.SettlmtToBaseQuantityNmrtr,
      SuplrBillgDocDEX.SettlmtToBaseQuantityDnmntr,
      SuplrBillgDocDEX.SettlmtToNetPriceQtyNmrtr,
      SuplrBillgDocDEX.SettlmtToNetPriceQtyDnmntr,
      SuplrBillgDocDEX.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SuplrBillgDocDEX.ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SuplrBillgDocDEX.ItemGrossWeight,
      SuplrBillgDocDEX.ItemWeightUnit               as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SuplrBillgDocDEX.ItemVolume,
      SuplrBillgDocDEX.ItemVolumeUnit               as ItemVolumeUnit,
      SuplrBillgDocDEX.ProductPurchasePointsQtyUnit as ProductPurchasePointsQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      SuplrBillgDocDEX.ProductPurchasePointsQty,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrBillgDocEffctvItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.SuplrItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocDEX.NonDeductibleInputTaxAmount,
      SuplrBillgDocDEX.SuplrBillgDocItmStstclPrpty,
      SuplrBillgDocDEX.CashDiscountIsDeductible,
      SuplrBillgDocDEX.SettlmtSourceDoc,
      SuplrBillgDocDEX.SettlmtSourceDocItem,
      SuplrBillgDocDEX.SettlmtSourceDocCat,
      SuplrBillgDocDEX.SettlmtSourceDocFiscalYear,
      SuplrBillgDocDEX.SuplrBillgDocItmActyReason,
      SuplrBillgDocDEX.SuplrBillgDocItemText,
      SuplrBillgDocDEX.BusinessArea,
      SuplrBillgDocDEX.ControllingArea,
      SuplrBillgDocDEX.CostCenter,
      SuplrBillgDocDEX.ProfitCenter,
      SuplrBillgDocDEX.WBSElementInternalID,
      SuplrBillgDocDEX.SupplierBillingDocumentOrder,
      SuplrBillgDocDEX.Batch,
      SuplrBillgDocDEX.PrcDetnIsIncmplt,
      SuplrBillgDocDEX.SettlmtPrecdgDoc,
      SuplrBillgDocDEX.SettlmtPrecdgDocItem,
      SuplrBillgDocDEX.SettlmtPrecdgDocCat,
      SuplrBillgDocDEX.SettlmtPrecdgDocFiscalYear,
      SuplrBillgDocDEX.SuplrBillgDocItmCat,
      SuplrBillgDocDEX.SettlmtItemReltdCndnContr,
      SuplrBillgDocDEX.SettlmtItemReltdTrdgContr,
      SuplrBillgDocDEX.SettlmtItemReltdTrdgContrItem,
      SuplrBillgDocDEX.SuplrBillgDocItemStatus,
      SuplrBillgDocDEX.SuplrBillgDocItmReversed,
      SuplrBillgDocDEX.ServicesRenderedDate,
      SuplrBillgDocDEX.SettlementFiscalYear,
      SuplrBillgDocDEX.HigherLevelItem,
      SuplrBillgDocDEX.LowerLevelItemExists,
      SuplrBillgDocDEX.ItemDistributionStatus,
      SuplrBillgDocDEX.SettlmtRefDocType,
      SuplrBillgDocDEX.SettlmtRefDoc,
      SuplrBillgDocDEX.SettlmtRefDocFiscalYear,
      SuplrBillgDocDEX.SettlmtRefDocLogicalSyst,
      SuplrBillgDocDEX.SettlmtRefDocItem,
      SuplrBillgDocDEX.SettlmtRefDocCat,
      SuplrBillgDocDEX.ItemIntrastatRelevance,
      SuplrBillgDocDEX.SettlmtAddlRefDocType,
      SuplrBillgDocDEX.SettlmtAddlRefDoc,
      SuplrBillgDocDEX.SettlmtAddlRefDocFiscalYear,
      SuplrBillgDocDEX.SettlmtAddlRefDocLogicalSyst,
      SuplrBillgDocDEX.SettlmtAddlRefDocItem,
      SuplrBillgDocDEX.SettlmtAddlRefDocCat,
      SuplrBillgDocDEX.CustomerSettlmtRecipient,
      SuplrBillgDocDEX.ProductHierarchy,
      SuplrBillgDocDEX.SalesSpcfcProductGroup1,
      SuplrBillgDocDEX.SalesSpcfcProductGroup2,
      SuplrBillgDocDEX.SalesSpcfcProductGroup3,
      SuplrBillgDocDEX.SalesSpcfcProductGroup4,
      SuplrBillgDocDEX.SalesSpcfcProductGroup5,
      SuplrBillgDocDEX.SupplierProductID,
      SuplrBillgDocDEX.PriorSupplier,
      SuplrBillgDocDEX.GLAccount,
      SuplrBillgDocDEX.SupplierSubrange,


      /* Associations */
      @Consumption.hidden: true
      SuplrBillgDocDEX._AlternativeInvoicingParty   as _AlternativeInvoicingParty,
      @Consumption.hidden: true
      SuplrBillgDocDEX._AltvInvoicingPartyCompany   as _AltvInvoicingPartyCompany,
      @Consumption.hidden: true
      SuplrBillgDocDEX._InvoicingParty              as _InvoicingParty,
      @Consumption.hidden: true
      SuplrBillgDocDEX._InvoicingPartyCompany       as _InvoicingPartyCompany,
      @Consumption.hidden: true
      SuplrBillgDocDEX._PayeeParty                  as _PayeeParty,
      @Consumption.hidden: true
      SuplrBillgDocDEX._PayeePartyCompany           as _PayeePartyCompany
}
```
