---
name: C_SUPLRSETTLMTDEX
description: "Supplier Settlement Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTDEX')/$value
semantic_en: "Supplier Settlement Extraction"
semantic_vi: "Supplier Settlement Extraction — CDS view tiêu dùng dựa trên R_SuplrSettlmtDEX."
keywords:
  - "supplier"
  - "settlement"
  - "extraction"
  - "suplr"
  - "settlmt"
  - "item"
  - "type"
  - "process"
tags:
  - LO
  - component:LO-AB
  - consumption-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# C_SUPLRSETTLMTDEX

**Supplier Settlement Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement |
| `SuplrSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SuplrSettlmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
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
| `SuplrSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `SuplrSettlmtTotalGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `SuplrSettlmtTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `SuplrSettlmtTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SuplrTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `SuplrSettlmtIsReversed` |  | |  |  | `CHAR(1)` | Supplier Settlement Is Reversed |
| `ReversedSupplierSettlement` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Currency of Credit Control Area |
| `ReleasedCreditAmount` |  | |  |  | `CURR(15)` | Released credit amount |
| `SuplrSettlmtActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `SuplrSettlmtPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `SuplrSettlmtPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeSupplierAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Supplier |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` |  | |  |  | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SuplrSettlmtIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `SettlmtPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Settlement Period |
| `SettlmtPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Settlement Period |
| `CndnContrProcessCategory` |  | |  |  | `CHAR(2)` | Process Category of a Condition Contract |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
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
| `SuplrSettlmtItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount in Document Currency |
| `SuplrSettlmtItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `SuplrSettlmtItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `SuplrSettlmtSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `SuplrSettlmtSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `SuplrSettlmtSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `SuplrSettlmtSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `SuplrSettlmtSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `SuplrSettlmtSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `SuplrSettlmtRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `SuplrSettlmtEffctvItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `SuplrItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SuplrSettlmtItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SuplrSettlmtItmActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `SuplrSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SupplierSettlementOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination is Incomplete |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `SuplrSettlmtItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `SuplrSettlmtItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `SuplrSettlmtItemReversed` |  | |  |  | `CHAR(1)` | Item Was Canceled |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRSETTLMTDEX')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    compositionRoot: true,
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
    usageType: {
       dataClass:      #MIXED,
       serviceQuality: #D,
       sizeCategory:   #XXL
       },
    sapObjectNodeType.name: 'SupplierSettlement'
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
                          viewElement: ['SuplrSettlmt', 'SuplrSettlmtItem'],
                          tableElement: ['wbeln', 'posnr']
                      },
                      {
                          table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                          viewElement: ['SuplrSettlmt'],
                          tableElement: ['wbeln']
                      }
                      ]
                }
            }
        }
    }

@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false 
    }

define view entity C_SuplrSettlmtDEX
  as select from R_SuplrSettlmtDEX as SuplrSettlmtDEX
{
  key SuplrSettlmt,
  key SuplrSettlmtItem,

      SuplrSettlmtDEX.SettlmtDocType               as SettlmtDocType,
      SuplrSettlmtDEX.SettlmtDocCat,
      SuplrSettlmtDEX.SettlmtProcessType,
      SuplrSettlmtDEX.LogisticsDataEntryCat,
      SuplrSettlmtDEX.SettlmtCat,
      SuplrSettlmtDEX.PostingDate,
      SuplrSettlmtDEX.SuplrSettlmtAcctgTransfSts,
      SuplrSettlmtDEX.DocumentDate,
      SuplrSettlmtDEX.DocumentReferenceID,
      SuplrSettlmtDEX.AssignmentReference,
      SuplrSettlmtDEX.StateCentralBankPaymentReason,
      SuplrSettlmtDEX.SettlmtApplSts,
      SuplrSettlmtDEX.SettlmtApplStsGrp,
      SuplrSettlmtDEX.PricingProcedure,
      SuplrSettlmtDEX.PricingDocument,
      SuplrSettlmtDEX.InvoicingParty,
      SuplrSettlmtDEX.PayeeParty,
      SuplrSettlmtDEX.AlternativeInvoicingParty,
      SuplrSettlmtDEX.CompanyCode                  as CompanyCode,
      SuplrSettlmtDEX.PurchasingOrganization,
      SuplrSettlmtDEX.PurchasingGroup,
      SuplrSettlmtDEX.CreatedByUser,
      SuplrSettlmtDEX.CreationDate,
      SuplrSettlmtDEX.CreationTime,
      SuplrSettlmtDEX.LastChangeDate               as LastChangeDate,
      SuplrSettlmtDEX.SuplrSettlmtCurrency         as SuplrSettlmtCurrency,
      SuplrSettlmtDEX.ExchangeRate,
      SuplrSettlmtDEX.ExchangeRateType,
      SuplrSettlmtDEX.ExchangeRateIsFixed,
      SuplrSettlmtDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtTotalTaxAmount,
      SuplrSettlmtDEX.PaymentTerms,
      SuplrSettlmtDEX.CashDiscount1Days,
      SuplrSettlmtDEX.CashDiscount2Days,
      SuplrSettlmtDEX.NetPaymentDays,
      SuplrSettlmtDEX.CashDiscount1Percent,
      SuplrSettlmtDEX.CashDiscount2Percent,
      SuplrSettlmtDEX.PaymentMethod,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrTotEligibleAmtForCshDisc,
      SuplrSettlmtDEX.SuplrSettlmtIsReversed,
      SuplrSettlmtDEX.ReversedSupplierSettlement,
      SuplrSettlmtDEX.AdditionalValueDays,
      SuplrSettlmtDEX.FixedValueDate,
      SuplrSettlmtDEX.SupplyingCountry,
      SuplrSettlmtDEX.TaxDepartureCountry,
      SuplrSettlmtDEX.TaxDestinationCountry,
      SuplrSettlmtDEX.IsEUTriangularDeal,
      SuplrSettlmtDEX.SettlmtCoCodeTaxCountry,
      SuplrSettlmtDEX.VATRegistration,
      SuplrSettlmtDEX.CreditControlArea,
      SuplrSettlmtDEX.CreditControlAreaCurrency    as CreditControlAreaCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CreditControlAreaCurrency'
      SuplrSettlmtDEX.ReleasedCreditAmount,
      SuplrSettlmtDEX.SuplrSettlmtActivityReason,
      SuplrSettlmtDEX.PaymentReference,
      SuplrSettlmtDEX.SuplrSettlmtPaymentCurrency,
      SuplrSettlmtDEX.SuplrSettlmtPaytCrcyExchRate,
      SuplrSettlmtDEX.OneTimeSupplierAddressID,
      SuplrSettlmtDEX.SettlmtReltdCndnContr,
      SuplrSettlmtDEX.CndnContrType,
      SuplrSettlmtDEX.FiscalPeriod,
      SuplrSettlmtDEX.SettlmtDateCat,
      SuplrSettlmtDEX.ActualSettlmtDate,
      SuplrSettlmtDEX.SettlmtDateSequentialID,
      SuplrSettlmtDEX.SettlmtDate,
      SuplrSettlmtDEX.SuplrSettlmtIncmpltnsRsn,
      SuplrSettlmtDEX.DocIntrastatRelevance,
      SuplrSettlmtDEX.IntrastatDeclnGdsFlwCat,
      SuplrSettlmtDEX.IncotermsVersion,
      SuplrSettlmtDEX.IncotermsClassification,
      SuplrSettlmtDEX.IncotermsTransferLocation,
      SuplrSettlmtDEX.IncotermsLocation1,
      SuplrSettlmtDEX.IncotermsLocation2,
      SuplrSettlmtDEX.SettlmtBusProcVar,
      SuplrSettlmtDEX.SettlmtBusProcCat,
      SuplrSettlmtDEX.SEPAMandate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      SuplrSettlmtDEX.TotalSettlmtQuantity,
      SuplrSettlmtDEX.TotalSettlmtQuantityUnit     as TotalSettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      SuplrSettlmtDEX.TotalSettlmtNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      SuplrSettlmtDEX.TotalSettlmtGrossWeight,
      SuplrSettlmtDEX.TotalSettlmtWeightUnit       as TotalSettlmtWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      SuplrSettlmtDEX.TotalSettlmtVolume,
      SuplrSettlmtDEX.TotalSettlmtVolumeUnit       as TotalSettlmtVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtPointsQtyUnit'
      SuplrSettlmtDEX.TotalSettlmtPointsQty,
      SuplrSettlmtDEX.TotalSettlmtPointsQtyUnit    as TotalSettlmtPointsQtyUnit,
      SuplrSettlmtDEX.SettlmtPeriodStartDate,
      SuplrSettlmtDEX.SettlmtPeriodEndDate,
      SuplrSettlmtDEX.CndnContrProcessCategory,

      /* Items */
      SuplrSettlmtDEX.Product,
      SuplrSettlmtDEX.ProductGroup,
      SuplrSettlmtDEX.Plant,
      SuplrSettlmtDEX.InventoryValuationType,
      SuplrSettlmtDEX.PricingDate,
      SuplrSettlmtDEX.TaxCode,
      SuplrSettlmtDEX.TaxCountry,
      SuplrSettlmtDEX.TaxJurisdiction,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SuplrSettlmtDEX.SettlmtQuantity,
      SuplrSettlmtDEX.SettlmtQuantityUnit          as SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      SuplrSettlmtDEX.NetPriceQuantity,
      SuplrSettlmtDEX.NetPriceQuantityUnit         as NetPriceQuantityUnit,
      SuplrSettlmtDEX.SettlmtToBaseQuantityNmrtr,
      SuplrSettlmtDEX.SettlmtToBaseQuantityDnmntr,
      SuplrSettlmtDEX.SettlmtToNetPriceQtyNmrtr,
      SuplrSettlmtDEX.SettlmtToNetPriceQtyDnmntr,
      SuplrSettlmtDEX.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SuplrSettlmtDEX.ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SuplrSettlmtDEX.ItemGrossWeight,
      SuplrSettlmtDEX.ItemWeightUnit               as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SuplrSettlmtDEX.ItemVolume,
      SuplrSettlmtDEX.ItemVolumeUnit               as ItemVolumeUnit,
      SuplrSettlmtDEX.ProductPurchasePointsQtyUnit as ProductPurchasePointsQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      SuplrSettlmtDEX.ProductPurchasePointsQty,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrSettlmtEffctvItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.SuplrItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtDEX.NonDeductibleInputTaxAmount,
      SuplrSettlmtDEX.SuplrSettlmtItmStstclPrpty,
      SuplrSettlmtDEX.CashDiscountIsDeductible,
      SuplrSettlmtDEX.SettlmtSourceDoc,
      SuplrSettlmtDEX.SettlmtSourceDocItem,
      SuplrSettlmtDEX.SettlmtSourceDocCat,
      SuplrSettlmtDEX.SettlmtSourceDocFiscalYear,
      SuplrSettlmtDEX.SuplrSettlmtItmActivityReason,
      SuplrSettlmtDEX.SuplrSettlmtItemText,
      SuplrSettlmtDEX.BusinessArea,
      SuplrSettlmtDEX.ControllingArea,
      SuplrSettlmtDEX.CostCenter,
      SuplrSettlmtDEX.ProfitCenter,
      SuplrSettlmtDEX.WBSElementInternalID,
      SuplrSettlmtDEX.SupplierSettlementOrder,
      SuplrSettlmtDEX.Batch,
      SuplrSettlmtDEX.PrcDetnIsIncmplt,
      
      SuplrSettlmtDEX.SettlmtPrecdgDoc,
      SuplrSettlmtDEX.SettlmtPrecdgDocItem,
      SuplrSettlmtDEX.SettlmtPrecdgDocCat,
      
      SuplrSettlmtDEX.SettlmtPrecdgDocFiscalYear,
      
      SuplrSettlmtDEX.SuplrSettlmtItmCat,
      
      SuplrSettlmtDEX.SettlmtItemReltdCndnContr,
      SuplrSettlmtDEX.SuplrSettlmtItemStatus,
      SuplrSettlmtDEX.SuplrSettlmtItemReversed,
      SuplrSettlmtDEX.ServicesRenderedDate,
      SuplrSettlmtDEX.SettlementFiscalYear,
      SuplrSettlmtDEX.HigherLevelItem,
      SuplrSettlmtDEX.LowerLevelItemExists,
      SuplrSettlmtDEX.ItemDistributionStatus,
      SuplrSettlmtDEX.SettlmtRefDocType,
      SuplrSettlmtDEX.SettlmtRefDoc,
      SuplrSettlmtDEX.SettlmtRefDocFiscalYear,
      SuplrSettlmtDEX.SettlmtRefDocLogicalSyst,
      SuplrSettlmtDEX.SettlmtRefDocItem,
      SuplrSettlmtDEX.SettlmtRefDocCat,
      SuplrSettlmtDEX.ItemIntrastatRelevance,
      SuplrSettlmtDEX.SettlmtAddlRefDocType,
      SuplrSettlmtDEX.SettlmtAddlRefDoc,
      SuplrSettlmtDEX.SettlmtAddlRefDocFiscalYear,
      SuplrSettlmtDEX.SettlmtAddlRefDocLogicalSyst,
      SuplrSettlmtDEX.SettlmtAddlRefDocItem,
      SuplrSettlmtDEX.SettlmtAddlRefDocCat,
      SuplrSettlmtDEX.CustomerSettlmtRecipient,
      SuplrSettlmtDEX.ProductHierarchy,
      SuplrSettlmtDEX.SalesSpcfcProductGroup1,
      SuplrSettlmtDEX.SalesSpcfcProductGroup2,
      SuplrSettlmtDEX.SalesSpcfcProductGroup3,
      SuplrSettlmtDEX.SalesSpcfcProductGroup4,
      SuplrSettlmtDEX.SalesSpcfcProductGroup5,
      SuplrSettlmtDEX.SupplierProductID,
      SuplrSettlmtDEX.PriorSupplier,
      SuplrSettlmtDEX.GLAccount,
      SuplrSettlmtDEX.SupplierSubrange,

      /* Associations */
      @Consumption.hidden: true
      SuplrSettlmtDEX._AlternativeInvoicingParty   as _AlternativeInvoicingParty,
      @Consumption.hidden: true
      SuplrSettlmtDEX._AltvInvoicingPartyCompany   as _AltvInvoicingPartyCompany,
      @Consumption.hidden: true
      SuplrSettlmtDEX._InvoicingParty              as _InvoicingParty,
      @Consumption.hidden: true
      SuplrSettlmtDEX._InvoicingPartyCompany       as _InvoicingPartyCompany,
      @Consumption.hidden: true
      SuplrSettlmtDEX._PayeeParty                  as _PayeeParty,
      @Consumption.hidden: true
      SuplrSettlmtDEX._PayeePartyCompany           as _PayeePartyCompany      
}
```
