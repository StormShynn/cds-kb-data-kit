---
name: C_EXPNSETTLMTDEX
description: "Expense Settlement Extraction"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EXPNSETTLMTDEX')/$value
semantic_en: "Expense Settlement Extraction"
semantic_vi: "Expense Settlement Extraction — CDS view tiêu dùng dựa trên R_ExpnSettlmtDEX."
keywords:
  - "expense"
  - "settlement"
  - "extraction"
  - "expn"
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
---
# C_EXPNSETTLMTDEX

**Expense Settlement Extraction**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EXPNSETTLMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ExpnSettlmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
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
| `ExpnSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `ExpnSettlmtTotalGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `ExpnSettlmtTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `ExpnSettlmtTotalTaxAmount` |  | |  |  | `CURR(13)` | Total Tax Amount in Document Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CustTotEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Total Amount eligible for cash discount in document currency |
| `ExpenseSettlementIsReversed` |  | |  |  | `CHAR(1)` | Expense Settlement Is Reversed |
| `ReversedExpenseSettlement` |  | |  |  | `CHAR(10)` | Reversed Document |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `TaxDestinationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `SettlmtCoCodeTaxCountry` |  | |  |  | `CHAR(3)` | Tax Country/Region Company Code |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `ExpnSettlmtActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `ExpnSettlmtPaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `ExpnSettlmtPaytCrcyExchRate` |  | |  |  | `DEC(9)` | Exchange Rate of Payment Currency (not converted) |
| `OneTimeCustomerAddressID` |  | |  |  | `CHAR(10)` | Address of One-Time Customer |
| `SettlmtReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract in Settlement Management |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `ExpnSettlmtIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `TrdgExpnSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document of planned Trading Expenses |
| `SettlmtDocSmmrznCat` |  | |  |  | `CHAR(1)` | Document Summarization Category |
| `TrdgExpnDocSettled` |  | |  |  | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `TrdgExpnCurrency` |  | |  |  | `CUKY(5)` | Ref. Field for Trading Expenses Ref. Value (Crcy, %, Unit) |
| `TrdgExpnAmount` |  | |  |  | `CURR(11)` | Reference Value for Trading Expenses |
| `TrdgExpnCustomer` |  | |  |  | `CHAR(10)` | Trading Expense Customer |
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
| `ExpenseSettlementItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount in Document Currency |
| `ExpnSettlmtItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `ExpenseSettlementItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `ExpnSettlmtSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `ExpnSettlmtSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `ExpnSettlmtSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `ExpnSettlmtSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `ExpnSettlmtSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `ExpnSettlmtSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `ExpnSettlmtRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `ExpnSettlmtEffectiveItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `CustItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `ExpnSettlmtItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `ExpnSettlmtItemActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `ExpnSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `ExpenseSettlementOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination is Incomplete |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `ExpnSettlmtItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContrItem` |  | |  |  | `NUMC(6)` | Related Trading Contract Item of a Settlmt Mgmt Item |
| `ExpnSettlmtItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `ExpenseSettlementItemReversed` |  | |  |  | `CHAR(1)` | Item Was Canceled |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EXPNSETTLMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EXPNSETTLMTDEX')/$value)*

```abap
@EndUserText.label: 'Expense Settlement Extraction'
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
    sapObjectNodeType.name: 'ExpenseSettlement'
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
                        viewElement: ['ExpnSettlmt', 'ExpnSettlmtItem'],
                        tableElement: ['wbeln', 'posnr']
                    },
                    {
                        table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['ExpnSettlmt'],
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

define view entity C_ExpnSettlmtDEX
  as select from R_ExpnSettlmtDEX as ExpnSettlmtDEX
{
  key ExpnSettlmt,
  key ExpnSettlmtItem,
  
      ExpnSettlmtDEX.SettlmtDocType               as SettlmtDocType,
      ExpnSettlmtDEX.SettlmtDocCat,
      ExpnSettlmtDEX.SettlmtProcessType,
      ExpnSettlmtDEX.LogisticsDataEntryCat,
      ExpnSettlmtDEX.SettlmtCat,
      ExpnSettlmtDEX.PostingDate,
      ExpnSettlmtDEX.ExpnSettlmtAcctgTransfSts,
      ExpnSettlmtDEX.DocumentDate,
      ExpnSettlmtDEX.DocumentReferenceID,
      ExpnSettlmtDEX.AssignmentReference,
      ExpnSettlmtDEX.SettlmtApplSts,
      ExpnSettlmtDEX.SettlmtApplStsGrp,
      ExpnSettlmtDEX.PricingProcedure,
      ExpnSettlmtDEX.PricingDocument,
      ExpnSettlmtDEX.BillToParty,
      ExpnSettlmtDEX.PayerParty,
      ExpnSettlmtDEX.CompanyCode                  as CompanyCode,
      ExpnSettlmtDEX.SalesOrganization,
      ExpnSettlmtDEX.DistributionChannel,
      ExpnSettlmtDEX.Division,
      ExpnSettlmtDEX.SalesOffice,
      ExpnSettlmtDEX.SalesGroup,
      ExpnSettlmtDEX.CreatedByUser,
      ExpnSettlmtDEX.CreationDate,
      ExpnSettlmtDEX.CreationTime,
      ExpnSettlmtDEX.LastChangeDate               as LastChangeDate,
      ExpnSettlmtDEX.ExpnSettlmtCurrency          as ExpnSettlmtCurrency,
      ExpnSettlmtDEX.ExchangeRate,
      ExpnSettlmtDEX.ExchangeRateType,
      ExpnSettlmtDEX.ExchangeRateIsFixed,
      ExpnSettlmtDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtTotalGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtTotalNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtTotalTaxAmount,
      ExpnSettlmtDEX.PaymentTerms,
      ExpnSettlmtDEX.CashDiscount1Days,
      ExpnSettlmtDEX.CashDiscount2Days,
      ExpnSettlmtDEX.NetPaymentDays,
      ExpnSettlmtDEX.CashDiscount1Percent,
      ExpnSettlmtDEX.CashDiscount2Percent,
      ExpnSettlmtDEX.PaymentMethod,
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.CustTotEligibleAmtForCshDisc,
      ExpnSettlmtDEX.ExpenseSettlementIsReversed,
      ExpnSettlmtDEX.ReversedExpenseSettlement,
      ExpnSettlmtDEX.AdditionalValueDays,
      ExpnSettlmtDEX.FixedValueDate,
      ExpnSettlmtDEX.TaxDepartureCountry,
      ExpnSettlmtDEX.TaxDestinationCountry,
      ExpnSettlmtDEX.IsEUTriangularDeal,
      ExpnSettlmtDEX.SettlmtCoCodeTaxCountry,
      ExpnSettlmtDEX.VATRegistration,
      ExpnSettlmtDEX.CreditControlArea,
      ExpnSettlmtDEX.ExpnSettlmtActivityReason,
      ExpnSettlmtDEX.PaymentReference,
      ExpnSettlmtDEX.ExpnSettlmtPaymentCurrency,
      ExpnSettlmtDEX.ExpnSettlmtPaytCrcyExchRate,
      ExpnSettlmtDEX.OneTimeCustomerAddressID,
      ExpnSettlmtDEX.SettlmtReltdTrdgContr,
      ExpnSettlmtDEX.FiscalPeriod,
      ExpnSettlmtDEX.SettlmtDate,
      ExpnSettlmtDEX.ExpnSettlmtIncmpltnsRsn,
      ExpnSettlmtDEX.TrdgExpnSettlmtDoc,
      ExpnSettlmtDEX.SettlmtDocSmmrznCat,
      ExpnSettlmtDEX.TrdgExpnDocSettled,
      ExpnSettlmtDEX.TrdgExpnCurrency,
      @Semantics.amount.currencyCode: 'TrdgExpnCurrency'
      ExpnSettlmtDEX.TrdgExpnAmount,
      ExpnSettlmtDEX.TrdgExpnCustomer,
      ExpnSettlmtDEX.DocIntrastatRelevance,
      ExpnSettlmtDEX.IntrastatDeclnGdsFlwCat,
      ExpnSettlmtDEX.IncotermsVersion,
      ExpnSettlmtDEX.IncotermsClassification,
      ExpnSettlmtDEX.IncotermsTransferLocation,
      ExpnSettlmtDEX.IncotermsLocation1,
      ExpnSettlmtDEX.IncotermsLocation2,
      ExpnSettlmtDEX.SettlmtBusProcVar,
      ExpnSettlmtDEX.SettlmtBusProcCat,
      ExpnSettlmtDEX.SEPAMandate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      ExpnSettlmtDEX.TotalSettlmtQuantity,
      ExpnSettlmtDEX.TotalSettlmtQuantityUnit     as TotalSettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      ExpnSettlmtDEX.TotalSettlmtNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      ExpnSettlmtDEX.TotalSettlmtGrossWeight,
      ExpnSettlmtDEX.TotalSettlmtWeightUnit       as TotalSettlmtWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      ExpnSettlmtDEX.TotalSettlmtVolume,
      ExpnSettlmtDEX.TotalSettlmtVolumeUnit       as TotalSettlmtVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtPointsQtyUnit'
      ExpnSettlmtDEX.TotalSettlmtPointsQty,
      ExpnSettlmtDEX.TotalSettlmtPointsQtyUnit    as TotalSettlmtPointsQtyUnit,
      
      /* Item */
      ExpnSettlmtDEX.Product,
      ExpnSettlmtDEX.ProductGroup,
      ExpnSettlmtDEX.Plant,
      ExpnSettlmtDEX.InventoryValuationType,
      ExpnSettlmtDEX.PricingDate,
      ExpnSettlmtDEX.TaxCode,
      ExpnSettlmtDEX.TaxCountry,
      ExpnSettlmtDEX.TaxJurisdiction,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      ExpnSettlmtDEX.SettlmtQuantity,
      ExpnSettlmtDEX.SettlmtQuantityUnit          as SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      ExpnSettlmtDEX.NetPriceQuantity,
      ExpnSettlmtDEX.NetPriceQuantityUnit         as NetPriceQuantityUnit,
      ExpnSettlmtDEX.SettlmtToBaseQuantityNmrtr,
      ExpnSettlmtDEX.SettlmtToBaseQuantityDnmntr,
      ExpnSettlmtDEX.SettlmtToNetPriceQtyNmrtr,
      ExpnSettlmtDEX.SettlmtToNetPriceQtyDnmntr,
      ExpnSettlmtDEX.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ExpnSettlmtDEX.ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ExpnSettlmtDEX.ItemGrossWeight,
      ExpnSettlmtDEX.ItemWeightUnit               as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ExpnSettlmtDEX.ItemVolume,
      ExpnSettlmtDEX.ItemVolumeUnit               as ItemVolumeUnit,
      ExpnSettlmtDEX.ProductPurchasePointsQtyUnit as ProductPurchasePointsQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      ExpnSettlmtDEX.ProductPurchasePointsQty,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpenseSettlementItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpenseSettlementItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.ExpnSettlmtEffectiveItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.CustItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ExpnSettlmtCurrency'
      ExpnSettlmtDEX.NonDeductibleInputTaxAmount,
      ExpnSettlmtDEX.ExpnSettlmtItmStstclPrpty,
      ExpnSettlmtDEX.CashDiscountIsDeductible,
      ExpnSettlmtDEX.SettlmtSourceDoc,
      ExpnSettlmtDEX.SettlmtSourceDocItem,
      ExpnSettlmtDEX.SettlmtSourceDocCat,
      ExpnSettlmtDEX.SettlmtSourceDocFiscalYear,
      ExpnSettlmtDEX.ExpnSettlmtItemActivityReason,
      ExpnSettlmtDEX.ExpnSettlmtItemText,
      ExpnSettlmtDEX.BusinessArea,
      ExpnSettlmtDEX.ControllingArea,
      ExpnSettlmtDEX.CostCenter,
      ExpnSettlmtDEX.ProfitCenter,
      ExpnSettlmtDEX.WBSElementInternalID,
      ExpnSettlmtDEX.ExpenseSettlementOrder,
      ExpnSettlmtDEX.Batch,
      ExpnSettlmtDEX.PrcDetnIsIncmplt,
      
      ExpnSettlmtDEX.SettlmtPrecdgDoc,
      ExpnSettlmtDEX.SettlmtPrecdgDocItem,
      ExpnSettlmtDEX.SettlmtPrecdgDocCat,
      
      ExpnSettlmtDEX.SettlmtPrecdgDocFiscalYear,
      
      ExpnSettlmtDEX.ExpnSettlmtItmCat,
      
      ExpnSettlmtDEX.SettlmtItemReltdTrdgContr,
      ExpnSettlmtDEX.SettlmtItemReltdTrdgContrItem,
      
      ExpnSettlmtDEX.ExpnSettlmtItemStatus,
      ExpnSettlmtDEX.ExpenseSettlementItemReversed,
      ExpnSettlmtDEX.ServicesRenderedDate,
      ExpnSettlmtDEX.SettlementFiscalYear,
      ExpnSettlmtDEX.HigherLevelItem,
      ExpnSettlmtDEX.LowerLevelItemExists,
      ExpnSettlmtDEX.ItemDistributionStatus,
      ExpnSettlmtDEX.SettlmtRefDocType,
      ExpnSettlmtDEX.SettlmtRefDoc,
      ExpnSettlmtDEX.SettlmtRefDocFiscalYear,
      ExpnSettlmtDEX.SettlmtRefDocLogicalSyst,
      ExpnSettlmtDEX.SettlmtRefDocItem,
      ExpnSettlmtDEX.SettlmtRefDocCat,
      ExpnSettlmtDEX.ItemIntrastatRelevance,
      ExpnSettlmtDEX.SettlmtAddlRefDocType,
      ExpnSettlmtDEX.SettlmtAddlRefDoc,
      ExpnSettlmtDEX.SettlmtAddlRefDocFiscalYear,
      ExpnSettlmtDEX.SettlmtAddlRefDocLogicalSyst,
      ExpnSettlmtDEX.SettlmtAddlRefDocItem,
      ExpnSettlmtDEX.SettlmtAddlRefDocCat,
      ExpnSettlmtDEX.CustomerSettlmtRecipient,
      ExpnSettlmtDEX.ProductHierarchy,
      ExpnSettlmtDEX.SalesSpcfcProductGroup1,
      ExpnSettlmtDEX.SalesSpcfcProductGroup2,
      ExpnSettlmtDEX.SalesSpcfcProductGroup3,
      ExpnSettlmtDEX.SalesSpcfcProductGroup4,
      ExpnSettlmtDEX.SalesSpcfcProductGroup5,


      /* Associations */
      @Consumption.hidden: true
      ExpnSettlmtDEX._BillToParty                 as _BillToParty,
      @Consumption.hidden: true
      ExpnSettlmtDEX._BillToPartyCompany          as _BillToPartyCompany,
      @Consumption.hidden: true
      ExpnSettlmtDEX._PayerParty                  as _PayerParty,
      @Consumption.hidden: true
      ExpnSettlmtDEX._PayerPartyCompany           as _PayerPartyCompany
}
```
