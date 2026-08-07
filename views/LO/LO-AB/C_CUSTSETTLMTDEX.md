---
name: C_CUSTSETTLMTDEX
description: "Customer Settlement Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTDEX')/$value
semantic_en: "Customer Settlement Extraction"
semantic_vi: "Customer Settlement Extraction — CDS view tiêu dùng dựa trên R_CustSettlmtDEX."
keywords:
  - "customer"
  - "settlement"
  - "extraction"
  - "cust"
  - "settlmt"
  - "item"
  - "type"
  - "process"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - consumption-view
  - customer
  - LO-AB
  - lob:logistics general
---
# C_CUSTSETTLMTDEX

**Customer Settlement Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  |  | `CHAR(10)` | Customer Settlement |
| `CustSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CustSettlmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `CustSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `CustSettlmtTotalGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `CustSettlmtTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `CustSettlmtTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `CustSettlmtIsReversed` |  | |  |  | `CHAR(1)` | Customer Settlement Is Reversed |
| `ReversedCustomerSettlement` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Currency of Credit Control Area |
| `ReleasedCreditAmount` |  | |  |  | `CURR(15)` | Released credit amount |
| `CustSettlmtActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CustSettlmtPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CustSettlmtPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` |  | |  |  | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `CustSettlmtIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
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
| `CustSettlmtItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `CustSettlmtItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `CustSettlmtItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount in Document Currency |
| `CustSettlmtSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `CustSettlmtSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `CustSettlmtSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `CustSettlmtSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `CustSettlmtSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `CustSettlmtSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `CustSettlmtRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `CustSettlmtEffectiveItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `CustItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `CustSettlmtItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `CustSettlmtItmActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `CustSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `CustomerSettlementOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination is Incomplete |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `CustSettlmtItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `CustSettlmtItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `CustSettlmtItemReversed` |  | |  |  | `CHAR(1)` | Item Was Canceled |
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
| `_BillToParty` |  | |  |  |  |  |
| `_BillToPartyCompany` |  | |  |  |  |  |
| `_PayerParty` |  | |  |  |  |  |
| `_PayerPartyCompany` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTSETTLMTDEX')/$value)*

```abap
@EndUserText.label: 'Customer Settlement Extraction'
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
    sapObjectNodeType.name: 'CustomerSettlement'  
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
                        viewElement: ['CustSettlmt', 'CustSettlmtItem'],
                        tableElement: ['wbeln', 'posnr']
                    },
                    {
                        table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: [ 'CustSettlmt'],
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

define view entity C_CustSettlmtDEX
  as select from R_CustSettlmtDEX as CustSettlmtDEX
{
  key CustSettlmt,
  key CustSettlmtItem,

      CustSettlmtDEX.SettlmtDocType               as SettlmtDocType,
      CustSettlmtDEX.SettlmtDocCat,
      CustSettlmtDEX.SettlmtProcessType,
      CustSettlmtDEX.LogisticsDataEntryCat,
      CustSettlmtDEX.SettlmtCat,
      CustSettlmtDEX.PostingDate,
      CustSettlmtDEX.CustSettlmtAcctgTransfSts,
      CustSettlmtDEX.DocumentDate,
      CustSettlmtDEX.DocumentReferenceID,
      CustSettlmtDEX.AssignmentReference,
      CustSettlmtDEX.SettlmtApplSts,
      CustSettlmtDEX.SettlmtApplStsGrp,
      CustSettlmtDEX.PricingProcedure,
      CustSettlmtDEX.PricingDocument,
      CustSettlmtDEX.BillToParty,
      CustSettlmtDEX.PayerParty,
      CustSettlmtDEX.CompanyCode                  as CompanyCode,
      CustSettlmtDEX.SalesOrganization,
      CustSettlmtDEX.DistributionChannel,
      CustSettlmtDEX.Division,
      CustSettlmtDEX.SalesOffice,
      CustSettlmtDEX.SalesGroup,
      CustSettlmtDEX.CreatedByUser,
      CustSettlmtDEX.CreationDate,
      CustSettlmtDEX.CreationTime,
      CustSettlmtDEX.LastChangeDate               as LastChangeDate,
      CustSettlmtDEX.CustSettlmtCurrency          as CustSettlmtCurrency,
      CustSettlmtDEX.ExchangeRate,
      CustSettlmtDEX.ExchangeRateType,
      CustSettlmtDEX.ExchangeRateIsFixed,
      CustSettlmtDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtTotalTaxAmount,
      CustSettlmtDEX.PaymentTerms,
      CustSettlmtDEX.CashDiscount1Days,
      CustSettlmtDEX.CashDiscount2Days,
      CustSettlmtDEX.NetPaymentDays,
      CustSettlmtDEX.CashDiscount1Percent,
      CustSettlmtDEX.CashDiscount2Percent,
      CustSettlmtDEX.PaymentMethod,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustTotEligibleAmtForCshDisc,
      CustSettlmtDEX.CustSettlmtIsReversed,
      CustSettlmtDEX.ReversedCustomerSettlement,
      CustSettlmtDEX.AdditionalValueDays,
      CustSettlmtDEX.FixedValueDate,
      CustSettlmtDEX.TaxDepartureCountry,
      CustSettlmtDEX.TaxDestinationCountry,
      CustSettlmtDEX.IsEUTriangularDeal,
      CustSettlmtDEX.SettlmtCoCodeTaxCountry,
      CustSettlmtDEX.VATRegistration,
      CustSettlmtDEX.CreditControlArea,
      CustSettlmtDEX.CreditControlAreaCurrency    as CreditControlAreaCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CreditControlAreaCurrency'
      CustSettlmtDEX.ReleasedCreditAmount,
      CustSettlmtDEX.CustSettlmtActivityReason,
      CustSettlmtDEX.PaymentReference,
      CustSettlmtDEX.CustSettlmtPaymentCurrency,
      CustSettlmtDEX.CustSettlmtPaytCrcyExchRate,
      CustSettlmtDEX.OneTimeCustomerAddressID,
      CustSettlmtDEX.SettlmtReltdCndnContr,
      CustSettlmtDEX.CndnContrType,
      CustSettlmtDEX.FiscalPeriod,
      CustSettlmtDEX.SettlmtDateCat,
      CustSettlmtDEX.ActualSettlmtDate,
      CustSettlmtDEX.SettlmtDateSequentialID,
      CustSettlmtDEX.SettlmtDate,
      CustSettlmtDEX.CustSettlmtIncmpltnsRsn,
      CustSettlmtDEX.DocIntrastatRelevance,
      CustSettlmtDEX.IntrastatDeclnGdsFlwCat,
      CustSettlmtDEX.IncotermsVersion,
      CustSettlmtDEX.IncotermsClassification,
      CustSettlmtDEX.IncotermsTransferLocation,
      CustSettlmtDEX.IncotermsLocation1,
      CustSettlmtDEX.IncotermsLocation2,
      CustSettlmtDEX.SettlmtBusProcVar,
      CustSettlmtDEX.SettlmtBusProcCat,
      CustSettlmtDEX.SEPAMandate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      CustSettlmtDEX.TotalSettlmtQuantity,
      CustSettlmtDEX.TotalSettlmtQuantityUnit     as TotalSettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      CustSettlmtDEX.TotalSettlmtNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      CustSettlmtDEX.TotalSettlmtGrossWeight,
      CustSettlmtDEX.TotalSettlmtWeightUnit       as TotalSettlmtWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      CustSettlmtDEX.TotalSettlmtVolume,
      CustSettlmtDEX.TotalSettlmtVolumeUnit       as TotalSettlmtVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtPointsQtyUnit'
      CustSettlmtDEX.TotalSettlmtPointsQty,
      CustSettlmtDEX.TotalSettlmtPointsQtyUnit    as TotalSettlmtPointsQtyUnit,
      CustSettlmtDEX.SettlmtPeriodStartDate,
      CustSettlmtDEX.SettlmtPeriodEndDate,
      CustSettlmtDEX.CndnContrProcessCategory,

      /* Item */
      CustSettlmtDEX.Product,
      CustSettlmtDEX.ProductGroup,
      CustSettlmtDEX.Plant,
      CustSettlmtDEX.InventoryValuationType,
      CustSettlmtDEX.PricingDate,
      CustSettlmtDEX.TaxCode,
      CustSettlmtDEX.TaxCountry,
      CustSettlmtDEX.TaxJurisdiction,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      CustSettlmtDEX.SettlmtQuantity,
      CustSettlmtDEX.SettlmtQuantityUnit          as SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      CustSettlmtDEX.NetPriceQuantity,
      CustSettlmtDEX.NetPriceQuantityUnit         as NetPriceQuantityUnit,
      CustSettlmtDEX.SettlmtToBaseQuantityNmrtr,
      CustSettlmtDEX.SettlmtToBaseQuantityDnmntr,
      CustSettlmtDEX.SettlmtToNetPriceQtyNmrtr,
      CustSettlmtDEX.SettlmtToNetPriceQtyDnmntr,
      CustSettlmtDEX.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CustSettlmtDEX.ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CustSettlmtDEX.ItemGrossWeight,
      CustSettlmtDEX.ItemWeightUnit               as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      CustSettlmtDEX.ItemVolume,
      CustSettlmtDEX.ItemVolumeUnit               as ItemVolumeUnit,
      CustSettlmtDEX.ProductPurchasePointsQtyUnit as ProductPurchasePointsQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      CustSettlmtDEX.ProductPurchasePointsQty,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustSettlmtEffectiveItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.CustItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtDEX.NonDeductibleInputTaxAmount,
      CustSettlmtDEX.CustSettlmtItmStstclPrpty,
      CustSettlmtDEX.CashDiscountIsDeductible,
      CustSettlmtDEX.SettlmtSourceDoc,
      CustSettlmtDEX.SettlmtSourceDocItem,
      CustSettlmtDEX.SettlmtSourceDocCat,
      CustSettlmtDEX.SettlmtSourceDocFiscalYear,
      CustSettlmtDEX.CustSettlmtItmActivityReason,
      CustSettlmtDEX.CustSettlmtItemText,
      CustSettlmtDEX.BusinessArea,
      CustSettlmtDEX.ControllingArea,
      CustSettlmtDEX.CostCenter,
      CustSettlmtDEX.ProfitCenter,
      CustSettlmtDEX.WBSElementInternalID,
      CustSettlmtDEX.CustomerSettlementOrder,
      CustSettlmtDEX.Batch,
      CustSettlmtDEX.PrcDetnIsIncmplt,

      CustSettlmtDEX.SettlmtPrecdgDoc,
      CustSettlmtDEX.SettlmtPrecdgDocItem,
      CustSettlmtDEX.SettlmtPrecdgDocCat,

      CustSettlmtDEX.SettlmtPrecdgDocFiscalYear,

      CustSettlmtDEX.CustSettlmtItmCat,

      CustSettlmtDEX.SettlmtItemReltdCndnContr,
      
      CustSettlmtDEX.CustSettlmtItemStatus,
      CustSettlmtDEX.CustSettlmtItemReversed,
      CustSettlmtDEX.ServicesRenderedDate,
      CustSettlmtDEX.SettlementFiscalYear,
      CustSettlmtDEX.HigherLevelItem,
      CustSettlmtDEX.LowerLevelItemExists,
      CustSettlmtDEX.ItemDistributionStatus,
      CustSettlmtDEX.SettlmtRefDocType,
      CustSettlmtDEX.SettlmtRefDoc,
      CustSettlmtDEX.SettlmtRefDocFiscalYear,
      CustSettlmtDEX.SettlmtRefDocLogicalSyst,
      CustSettlmtDEX.SettlmtRefDocItem,
      CustSettlmtDEX.SettlmtRefDocCat,
      CustSettlmtDEX.ItemIntrastatRelevance,
      CustSettlmtDEX.SettlmtAddlRefDocType,
      CustSettlmtDEX.SettlmtAddlRefDoc,
      CustSettlmtDEX.SettlmtAddlRefDocFiscalYear,
      CustSettlmtDEX.SettlmtAddlRefDocLogicalSyst,
      CustSettlmtDEX.SettlmtAddlRefDocItem,
      CustSettlmtDEX.SettlmtAddlRefDocCat,
      CustSettlmtDEX.CustomerSettlmtRecipient,
      CustSettlmtDEX.ProductHierarchy,
      CustSettlmtDEX.SalesSpcfcProductGroup1,
      CustSettlmtDEX.SalesSpcfcProductGroup2,
      CustSettlmtDEX.SalesSpcfcProductGroup3,
      CustSettlmtDEX.SalesSpcfcProductGroup4,
      CustSettlmtDEX.SalesSpcfcProductGroup5,


      /* Associations */
      @Consumption.hidden: true
      CustSettlmtDEX._BillToParty                 as _BillToParty,
      @Consumption.hidden: true
      CustSettlmtDEX._BillToPartyCompany          as _BillToPartyCompany,
      @Consumption.hidden: true
      CustSettlmtDEX._PayerParty                  as _PayerParty,
      @Consumption.hidden: true
      CustSettlmtDEX._PayerPartyCompany           as _PayerPartyCompany
}
```
