---
name: I_SUPLRBILLGDOCITEM
description: "Supplier Billing Document Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEM')/$value
semantic_en: "Supplier Billing Document Item"
semantic_vi: "Supplier Billing Document Item — CDS view cơ bản dựa trên R_SuplrBillgDocItem."
keywords:
  - "Supplier Billing Document Item"
  - "supplier"
  - "billing"
  - "document"
  - "item"
  - "suplr"
  - "billg"
  - "currency"
  - "pricing"
  - "product"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCITEM

**Supplier Billing Document Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SuplrBillgDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `SupplierPricingDocument` |  | |  | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SupplierTaxCode` |  | |  | `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
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
| `SupplierItemGrossAmount` |  | |  | `SuplrBillgDocItemGrossAmount` | `CURR(15)` | Gross Amount of Item in Document Currency |
| `SupplierItemNetAmount` |  | |  | `SuplrBillgDocItemNetAmount` | `CURR(15)` | Net Amount of Item in Document Currency |
| `SupplierItemTaxAmount` |  | |  | `SuplrBillgDocItemTaxAmount` | `CURR(13)` | Item Tax Amount in Document Currency |
| `SupplierSubtotal1Amount` |  | |  | `SuplrBillgDocSubtotal1Amount` | `CURR(13)` | Subtotal 1 Amount |
| `SupplierSubtotal2Amount` |  | |  | `SuplrBillgDocSubtotal2Amount` | `CURR(13)` | Subtotal 2 Amount |
| `SupplierSubtotal3Amount` |  | |  | `SuplrBillgDocSubtotal3Amount` | `CURR(13)` | Subtotal 3 Amount |
| `SupplierSubtotal4Amount` |  | |  | `SuplrBillgDocSubtotal4Amount` | `CURR(13)` | Subtotal 4 Amount |
| `SupplierSubtotal5Amount` |  | |  | `SuplrBillgDocSubtotal5Amount` | `CURR(13)` | Subtotal 5 Amount |
| `SupplierSubtotal6Amount` |  | |  | `SuplrBillgDocSubtotal6Amount` | `CURR(13)` | Subtotal 6 Amount |
| `SupplierRebateBasisAmount` |  | |  | `SuplrBillgDocRebateBasisAmount` | `CURR(13)` | Rebate Basis Amount |
| `SupplierEffectiveItemAmount` |  | |  | `SuplrBillgDocEffctvItemAmount` | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `SuplrItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SettlmtItmStatisticalPrpty` |  | |  | `SuplrBillgDocItmStstclPrpty` | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SettlmtItemActivityReason` |  | |  | `SuplrBillgDocItmActyReason` | `CHAR(3)` | Activity Reason for Document Creation |
| `SuplrBillgDocItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `SuplrSettlmtBusinessArea` |  | |  | `BusinessArea` | `CHAR(4)` | Business Area |
| `SuplrSettlmtControllingArea` |  | |  | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `SuplrSettlmtCostCenter` |  | |  | `CostCenter` | `CHAR(10)` | Cost Center |
| `SuplrSettlmtProfitCenter` |  | |  | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `SuplrSettlmtWBSElmntInternalID` |  | |  | `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SettlmtMgmtOrder` |  | |  | `SupplierBillingDocumentOrder` | `CHAR(12)` | Order for Account Assignment in Settlement Management |
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
| `SuplrBillgDocItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContr` |  | |  |  | `CHAR(10)` | Related Trading Contract of a Settlement Management Item |
| `SettlmtItemReltdTrdgContrItem` |  | |  |  | `NUMC(6)` | Related Trading Contract Item of a Settlmt Mgmt Item |
| `SuplrBillgDocItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `SuplrBillgDocItmCancld` |  | |  | `SuplrBillgDocItmReversed` | `CHAR(1)` | Item Was Canceled |
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
| `SuplrSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `_SuplrBillgDoc` | | ✓ | | | | |
| `_SuplrBillgDocItmPlainLongTxt` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_SettlmtItmStatisticalPrpty` | | ✓ | | | | |
| `_SettlmtItemActivityReason` | | ✓ | | | | |
| `_SupplierPricingElement` | | ✓ | | | | |
| `_SuplrBillgDocItmCancld` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_SuplrSettlmtBusinessArea` | | ✓ | | | | |
| `_SuplrSettlmtControllingArea` | | ✓ | | | | |
| `_SuplrSettlmtCostCenter` | | ✓ | | | | |
| `_SuplrSettlmtProfitCenter` | | ✓ | | | | |
| `_SuplrSettlmtWBSElmntBasicData` | | ✓ | | | | |
| `_SettlmtMgmtOrder` | | ✓ | | | | |
| `_SuplrSettlmtCompanyCode` | | ✓ | | | | |
| `_SettlmtItemReltdCndnContr` | | ✓ | | | | |
| `_SettlmtRefDocCat` | | ✓ | | | | |
| `_SettlmtAddlRefDocCat` | | ✓ | | | | |
| `_SuplrBillgDocCurrency` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SettlmtQuantityUnit` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SettlmtSourceDocCat` | | ✓ | | | | |
| `_ProductPurchasePointsQtyUnit` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtPrecdgDocCat` | | ✓ | | | | |
| `_SuplrBillgDocItmCat` | | ✓ | | | | |
| `_SuplrBillgDocItemStatus` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ItemDistributionStatus` | | ✓ | | | | |
| `_SettlmtRefDocLogicalSyst` | | ✓ | | | | |
| `_ItemIntrastatRelevance` | | ✓ | | | | |
| `_SettlmtAddlRefDocLogicalSyst` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |
| `_SalesSpcfcProductGroup1` | | ✓ | | | | |
| `_SalesSpcfcProductGroup2` | | ✓ | | | | |
| `_SalesSpcfcProductGroup3` | | ✓ | | | | |
| `_SalesSpcfcProductGroup4` | | ✓ | | | | |
| `_SalesSpcfcProductGroup5` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrBillgDoc` | `I_SuplrBillgDoc` | [1..1] |
| `_SuplrBillgDocItmPlainLongTxt` | `I_SuplrBillgDocItmPlainLongTxt` | [0..*] |
| `_Partner` | `I_SuplrBillgDocItemPartner` | [0..*] |
| `_SettlmtItmStatisticalPrpty` | `I_SettlmtItmStatisticalPrpty` | [0..1] |
| `_SettlmtItemActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_SupplierPricingElement` | `I_SuplrBillgDocItmPrcgElmnt` | [0..*] |
| `_SuplrBillgDocItmCancld` | `I_SettlmtMgmtDocItemCancld` | [0..1] |
| `_HigherLevelItem` | `I_SuplrBillgDocItem` | [0..1] |
| `_SuplrSettlmtBusinessArea` | `I_BusinessArea` | [0..1] |
| `_SuplrSettlmtControllingArea` | `I_ControllingArea` | [0..1] |
| `_SuplrSettlmtCostCenter` | `I_CostCenter` | [0..1] |
| `_SuplrSettlmtProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_SuplrSettlmtWBSElmntBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_SettlmtMgmtOrder` | `I_InternalOrder` | [0..1] |
| `_SuplrSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_SettlmtItemReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_SettlmtRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_SettlmtAddlRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEM')/$value)*

```abap
@EndUserText.label: 'Supplier Billing Document Item'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey:        'SuplrBillgDocItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET,
                                #SQL_DATA_SOURCE,
                                #CDS_MODELING_DATA_SOURCE,
                                #ANALYTICAL_DIMENSION],
    usageType.serviceQuality: #B,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XXL
    }
@Analytics: {
   dataCategory: #DIMENSION,
   dataExtraction.enabled: false,
   internalName: #LOCAL
   }
@Analytics.technicalName: 'IWLFSUPLRBGDITM'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SuplrBillgDocItem
  as select from R_SuplrBillgDocItem

  association [1..1] to I_SuplrBillgDoc                as _SuplrBillgDoc                 on  $projection.SuplrBillgDoc = _SuplrBillgDoc.SuplrBillgDoc
  association [0..*] to I_SuplrBillgDocItmPlainLongTxt as _SuplrBillgDocItmPlainLongTxt  on  $projection.SuplrBillgDoc     = _SuplrBillgDocItmPlainLongTxt.SuplrBillgDoc
                                                                                         and $projection.SuplrBillgDocItem = _SuplrBillgDocItmPlainLongTxt.SuplrBillgDocItem
  association [0..*] to I_SuplrBillgDocItemPartner     as _Partner                       on  $projection.SuplrBillgDoc     = _Partner.SuplrBillgDoc
                                                                                         and $projection.SuplrBillgDocItem = _Partner.SuplrBillgDocItem

  association [0..1] to I_SettlmtItmStatisticalPrpty   as _SettlmtItmStatisticalPrpty    on  $projection.SettlmtItmStatisticalPrpty = _SettlmtItmStatisticalPrpty.SettlmtItmStatisticalPrpty
  association [0..1] to I_SettlmtActivityReasonCode    as _SettlmtItemActivityReason     on  $projection.SettlmtItemActivityReason = _SettlmtItemActivityReason.SettlmtActivityReason

  association [0..*] to I_SuplrBillgDocItmPrcgElmnt    as _SupplierPricingElement        on  $projection.SuplrBillgDoc     = _SupplierPricingElement.SuplrBillgDoc
                                                                                         and $projection.SuplrBillgDocItem = _SupplierPricingElement.SuplrBillgDocItem

  association [0..1] to I_SettlmtMgmtDocItemCancld     as _SuplrBillgDocItmCancld        on  $projection.SuplrBillgDocItmCancld = _SuplrBillgDocItmCancld.SettlmtMgmtDocItemCancld
  association [0..1] to I_SuplrBillgDocItem            as _HigherLevelItem               on  $projection.SuplrBillgDoc   = _HigherLevelItem.SuplrBillgDoc
                                                                                         and $projection.HigherLevelItem = _HigherLevelItem.SuplrBillgDocItem

  association [0..1] to I_BusinessArea                 as _SuplrSettlmtBusinessArea      on  $projection.SuplrSettlmtBusinessArea = _SuplrSettlmtBusinessArea.BusinessArea
  association [0..1] to I_ControllingArea              as _SuplrSettlmtControllingArea   on  $projection.SuplrSettlmtControllingArea = _SuplrSettlmtControllingArea.ControllingArea
  association [0..1] to I_CostCenter                   as _SuplrSettlmtCostCenter        on  $projection.SuplrSettlmtCostCenter        = _SuplrSettlmtCostCenter.CostCenter
                                                                                         and $projection.SuplrSettlmtControllingArea   = _SuplrSettlmtCostCenter.ControllingArea
                                                                                         and _SuplrSettlmtCostCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                         and _SuplrSettlmtCostCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_ProfitCenter                 as _SuplrSettlmtProfitCenter      on  $projection.SuplrSettlmtProfitCenter        = _SuplrSettlmtProfitCenter.ProfitCenter
                                                                                         and $projection.SuplrSettlmtControllingArea     = _SuplrSettlmtProfitCenter.ControllingArea
                                                                                         and _SuplrSettlmtProfitCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                         and _SuplrSettlmtProfitCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_WBSElementBasicData          as _SuplrSettlmtWBSElmntBasicData on  $projection.SuplrSettlmtWBSElmntInternalID = _SuplrSettlmtWBSElmntBasicData.WBSElementInternalID
  association [0..1] to I_InternalOrder                as _SettlmtMgmtOrder              on  $projection.SettlmtMgmtOrder = _SettlmtMgmtOrder.InternalOrder
  association [0..1] to I_CompanyCode                  as _SuplrSettlmtCompanyCode       on  $projection.SuplrSettlmtCompanyCode = _SuplrSettlmtCompanyCode.CompanyCode
  association [0..1] to I_ConditionContract            as _SettlmtItemReltdCndnContr     on  $projection.SettlmtItemReltdCndnContr = _SettlmtItemReltdCndnContr.ConditionContract

  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtRefDocCat              on  $projection.SettlmtRefDocCat = _SettlmtRefDocCat.SettlmtPrecdgDocCat
  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtAddlRefDocCat          on  $projection.SettlmtAddlRefDocCat = _SettlmtAddlRefDocCat.SettlmtPrecdgDocCat

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocItem           as _Extension                     on  $projection.SuplrBillgDoc     = _Extension.SettlmtMgmtDoc
                                                                                         and $projection.SuplrBillgDocItem = _Extension.SettlmtMgmtDocItem

{
      @ObjectModel.foreignKey.association: '_SuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
  key SuplrBillgDoc,
  key SuplrBillgDocItem,
      @ObjectModel.foreignKey.association: '_SuplrBillgDocCurrency'
      SuplrBillgDocCurrency,
      PricingDocument                as SupplierPricingDocument,

      @ObjectModel.foreignKey.association: '_Product'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' } }]
      }
      Product,
      //      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ProductGroup_2', element: 'ProductGroup' } }]
      }
      ProductGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' } }]
      }
      Plant,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType,
      PricingDate,

      /* Tax */
      TaxCode                        as SupplierTaxCode,
      TaxJurisdiction,

      /* Units and Amounts */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SettlmtQuantity,
      @ObjectModel.foreignKey.association: '_SettlmtQuantityUnit'
      SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,
      SettlmtToBaseQuantityNmrtr,
      SettlmtToBaseQuantityDnmntr,
      SettlmtToNetPriceQtyNmrtr,
      SettlmtToNetPriceQtyDnmntr,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      @ObjectModel.foreignKey.association: '_ProductPurchasePointsQtyUnit'
      ProductPurchasePointsQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      ProductPurchasePointsQty,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocItemGrossAmount   as SupplierItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocItemNetAmount     as SupplierItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocItemTaxAmount     as SupplierItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal1Amount   as SupplierSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal2Amount   as SupplierSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal3Amount   as SupplierSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal4Amount   as SupplierSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal5Amount   as SupplierSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocSubtotal6Amount   as SupplierSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocRebateBasisAmount as SupplierRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrBillgDocEffctvItemAmount  as SupplierEffectiveItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      SuplrItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrBillgDocCurrency'
      NonDeductibleInputTaxAmount,

      @ObjectModel.foreignKey.association: '_SettlmtItmStatisticalPrpty'
      SuplrBillgDocItmStstclPrpty    as SettlmtItmStatisticalPrpty,
      CashDiscountIsDeductible,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,

      /* Source Document */
      SettlmtSourceDoc,
      SettlmtSourceDocItem,
      @ObjectModel.foreignKey.association: '_SettlmtSourceDocCat'
      SettlmtSourceDocCat,
      SettlmtSourceDocFiscalYear,

      @ObjectModel.foreignKey.association: '_SettlmtItemActivityReason'
      SuplrBillgDocItmActyReason     as SettlmtItemActivityReason,
      SuplrBillgDocItemText,



      @ObjectModel.foreignKey.association: '_SuplrSettlmtBusinessArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } }]
      }
      BusinessArea                   as SuplrSettlmtBusinessArea,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtControllingArea'
      ControllingArea                as SuplrSettlmtControllingArea,
      CostCenter                     as SuplrSettlmtCostCenter,
      ProfitCenter                   as SuplrSettlmtProfitCenter,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtWBSElmntBasicData'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } }]
      }
      WBSElementInternalID           as SuplrSettlmtWBSElmntInternalID,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtOrder'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_InternalOrderStdVH', element: 'InternalOrder' } }]
      }
      SupplierBillingDocumentOrder   as SettlmtMgmtOrder,

      /* Incoterms */
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,


      Batch,
      PrcDetnIsIncmplt,

      /* Preceding Document */
      SettlmtPrecdgDoc,
      SettlmtPrecdgDocItem,
      @ObjectModel.foreignKey.association: '_SettlmtPrecdgDocCat'
      SettlmtPrecdgDocCat,
      SettlmtPrecdgDocFiscalYear,

      @ObjectModel.foreignKey.association: '_SuplrBillgDocItmCat'
      SuplrBillgDocItmCat,

      /* Settlement Item Related Condition Contract */
      @ObjectModel.foreignKey.association: '_SettlmtItemReltdCndnContr'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtItemReltdCndnContr,

      /* Settlement Item Related Trading Contract and Item*/
      SettlmtItemReltdTrdgContr,
      SettlmtItemReltdTrdgContrItem,

      @ObjectModel.foreignKey.association: '_SuplrBillgDocItemStatus'
      SuplrBillgDocItemStatus,
      @ObjectModel.foreignKey.association: '_SuplrBillgDocItmCancld'
      SuplrBillgDocItmReversed       as SuplrBillgDocItmCancld,
      ServicesRenderedDate,

      SettlementFiscalYear,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocItemStdVH', element: 'SuplrBillgDocItem' } }]
      }
      HigherLevelItem,
      LowerLevelItemExists,
      @ObjectModel.foreignKey.association: '_ItemDistributionStatus'
      ItemDistributionStatus,

      /* Reference Document*/
      SettlmtRefDocType,
      SettlmtRefDoc,
      SettlmtRefDocFiscalYear,
      @ObjectModel.foreignKey.association: '_SettlmtRefDocLogicalSyst'
      SettlmtRefDocLogicalSyst,
      SettlmtRefDocItem,
      @ObjectModel.foreignKey.association: '_SettlmtRefDocCat'
      SettlmtRefDocCat,

      @ObjectModel.foreignKey.association: '_ItemIntrastatRelevance'
      ItemIntrastatRelevance,

      /* Additional Reference Document */
      SettlmtAddlRefDocType,
      SettlmtAddlRefDoc,
      SettlmtAddlRefDocFiscalYear,
      @ObjectModel.foreignKey.association: '_SettlmtAddlRefDocLogicalSyst'
      SettlmtAddlRefDocLogicalSyst,
      SettlmtAddlRefDocItem,
      @ObjectModel.foreignKey.association: '_SettlmtAddlRefDocCat'
      SettlmtAddlRefDocCat,

      @ObjectModel.foreignKey.association: '_CustomerSettlmtRecipient'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      CustomerSettlmtRecipient,
      ProductHierarchy,
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup1'
      SalesSpcfcProductGroup1,
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup2'
      SalesSpcfcProductGroup2,
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup3'
      SalesSpcfcProductGroup3,
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup4'
      SalesSpcfcProductGroup4,
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup5'
      SalesSpcfcProductGroup5,

      SupplierProductID,
      @ObjectModel.foreignKey.association: '_PriorSupplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      PriorSupplier,

      @ObjectModel.foreignKey.association: '_SuplrSettlmtCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode                    as SuplrSettlmtCompanyCode,
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH', element: 'GLAccount' } }]
      }
      GLAccount,
      SupplierSubrange,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrBillgDoc,
      _Partner,
      _SuplrBillgDocItmPlainLongTxt,
      _SuplrBillgDocCurrency,
      _SupplierPricingElement,
      _Product,
      //      _ProductGroup                                                                                             ,
      _Plant,
      _SettlmtQuantityUnit,
      _NetPriceQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SettlmtItmStatisticalPrpty,
      _SettlmtSourceDocCat,
      _SettlmtItemActivityReason,
      _ProductPurchasePointsQtyUnit,
      _PriorSupplier,
      _InventoryValuationType,
      _SuplrSettlmtBusinessArea,
      _SuplrSettlmtControllingArea,
      _SuplrSettlmtCostCenter,
      _SuplrSettlmtProfitCenter,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtPrecdgDocCat,
      _SuplrBillgDocItmCat,
      _SuplrBillgDocItemStatus,
      _SuplrBillgDocItmCancld,
      _SettlmtMgmtOrder,
      _SuplrSettlmtCompanyCode,
      _GLAccountInCompanyCode,
      _HigherLevelItem,
      _ItemDistributionStatus,
      _SettlmtRefDocLogicalSyst,
      _SettlmtRefDocCat,
      _ItemIntrastatRelevance,
      _SuplrSettlmtWBSElmntBasicData,
      _SettlmtAddlRefDocLogicalSyst,
      _SettlmtAddlRefDocCat,
      _CustomerSettlmtRecipient,
      _SalesSpcfcProductGroup1,
      _SalesSpcfcProductGroup2,
      _SalesSpcfcProductGroup3,
      _SalesSpcfcProductGroup4,
      _SalesSpcfcProductGroup5,
      _SettlmtItemReltdCndnContr

}
```
