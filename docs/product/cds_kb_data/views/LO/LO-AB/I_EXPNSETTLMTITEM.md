---
name: I_EXPNSETTLMTITEM
description: "Expense Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEM')/$value
semantic_en: "Expense Settlement Item"
keywords:
  - "Expense Settlement Item"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMTITEM

**Expense Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` |  | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` |  | |  |  | `NUMC(6)` | Document Item |
| `ExpnSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `CustomerPricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `CustomerTaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
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
| `CustomerItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `CustomerItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `CustomerItemTaxAmount` |  | |  |  | `CURR(13)` | Item Tax Amount in Document Currency |
| `CustomerSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `CustomerSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `CustomerSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `CustomerSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `CustomerSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `CustomerSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `CustomerRebateBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `CustomerEffectiveItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `CustItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SettlmtItmStatisticalPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SettlmtItemActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `ExpnSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `CustSettlmtBusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CustSettlmtControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CustSettlmtCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CustSettlmtProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CustSettlmtWBSElmntInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SettlmtMgmtOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
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
| `ExpnSettlmtItmCancld` |  | |  |  | `CHAR(1)` | Item Was Canceled |
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
