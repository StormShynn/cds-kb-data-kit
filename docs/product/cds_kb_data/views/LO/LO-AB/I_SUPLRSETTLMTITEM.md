---
name: I_SUPLRSETTLMTITEM
description: "Supplier Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEM')/$value
semantic_en: "Supplier Settlement Item"
semantic_vi: "Supplier Settlement Item — CDS view cơ bản dựa trên R_SuplrSettlmtItem."
keywords:
  - "Supplier Settlement Item"
  - "supplier"
  - "settlement"
  - "item"
  - "suplr"
  - "settlmt"
  - "currency"
  - "pricing"
  - "document"
  - "product"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTITEM

**Supplier Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement |
| `SuplrSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SuplrSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `SupplierPricingDocument` |  | |  | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SupplierTaxCode` |  | |  | `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
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
| `SupplierItemGrossAmount` |  | |  | `SuplrSettlmtItemGrossAmount` | `CURR(15)` | Gross Amount of Item in Document Currency |
| `SupplierItemNetAmount` |  | |  | `SuplrSettlmtItemNetAmount` | `CURR(15)` | Net Amount of Item in Document Currency |
| `SupplierItemTaxAmount` |  | |  | `SuplrSettlmtItemTaxAmount` | `CURR(13)` | Item Tax Amount in Document Currency |
| `SupplierSubtotal1Amount` |  | |  | `SuplrSettlmtSubtotal1Amount` | `CURR(13)` | Subtotal 1 Amount |
| `SupplierSubtotal2Amount` |  | |  | `SuplrSettlmtSubtotal2Amount` | `CURR(13)` | Subtotal 2 Amount |
| `SupplierSubtotal3Amount` |  | |  | `SuplrSettlmtSubtotal3Amount` | `CURR(13)` | Subtotal 3 Amount |
| `SupplierSubtotal4Amount` |  | |  | `SuplrSettlmtSubtotal4Amount` | `CURR(13)` | Subtotal 4 Amount |
| `SupplierSubtotal5Amount` |  | |  | `SuplrSettlmtSubtotal5Amount` | `CURR(13)` | Subtotal 5 Amount |
| `SupplierSubtotal6Amount` |  | |  | `SuplrSettlmtSubtotal6Amount` | `CURR(13)` | Subtotal 6 Amount |
| `SupplierRebateBasisAmount` |  | |  | `SuplrSettlmtRebateBasisAmount` | `CURR(13)` | Rebate Basis Amount |
| `SupplierEffectiveItemAmount` |  | |  | `SuplrSettlmtEffctvItemAmount` | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `SuplrItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SettlmtItmStatisticalPrpty` |  | |  | `SuplrSettlmtItmStstclPrpty` | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount is Deductible |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SettlmtItemActivityReason` |  | |  | `SuplrSettlmtItmActivityReason` | `CHAR(3)` | Activity Reason for Document Creation |
| `SuplrSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `SuplrSettlmtBusinessArea` |  | |  | `BusinessArea` | `CHAR(4)` | Business Area |
| `SuplrSettlmtControllingArea` |  | |  | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `SuplrSettlmtCostCenter` |  | |  | `CostCenter` | `CHAR(10)` | Cost Center |
| `SuplrSettlmtProfitCenter` |  | |  | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `SuplrSettlmtWBSElmntInternalID` |  | |  | `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SettlmtMgmtOrder` |  | |  | `SupplierSettlementOrder` | `CHAR(12)` | Order for Account Assignment in Settlement Management |
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
| `SuplrSettlmtItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `SuplrSettlmtItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `SuplrSettlmtItmCancld` |  | |  | `SuplrSettlmtItemReversed` | `CHAR(1)` | Item Was Canceled |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `SuplrSettlmtCompanyCode` |  | |  | `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SupplierProductID` |  | |  |  | `CHAR(35)` | Material Number Used by Supplier |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
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
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 5 |
| `_SuplrSettlmt` | | ✓ | | | | |
| `_SuplrSettlmtItmPlainLongText` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_SettlmtItmStatisticalPrpty` | | ✓ | | | | |
| `_SettlmtItemActivityReason` | | ✓ | | | | |
| `_SupplierPricingElement` | | ✓ | | | | |
| `_SuplrSettlmtItmCancld` | | ✓ | | | | |
| `_SuplrSettlmtCompanyCode` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_SuplrSettlmtBusinessArea` | | ✓ | | | | |
| `_SuplrSettlmtControllingArea` | | ✓ | | | | |
| `_SuplrSettlmtCostCenter` | | ✓ | | | | |
| `_SuplrSettlmtProfitCenter` | | ✓ | | | | |
| `_SuplrSettlmtWBSElmntBasicData` | | ✓ | | | | |
| `_SettlmtMgmtOrder` | | ✓ | | | | |
| `_SettlmtItemReltdCndnContr` | | ✓ | | | | |
| `_SettlmtRefDocCat` | | ✓ | | | | |
| `_SettlmtAddlRefDocCat` | | ✓ | | | | |
| `_SuplrSettlmtCurrency` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ProductPurchasePointsQtyUnit` | | ✓ | | | | |
| `_SettlmtQuantityUnit` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SettlmtSourceDocCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtPrecdgDocCat` | | ✓ | | | | |
| `_SuplrSettlmtItmCat` | | ✓ | | | | |
| `_SuplrSettlmtItemStatus` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
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
| `_SuplrSettlmt` | `I_SuplrSettlmt` | [1..1] |
| `_SuplrSettlmtItmPlainLongText` | `I_SuplrSettlmtItmPlainLongText` | [0..*] |
| `_Partner` | `I_SuplrSettlmtItemPartner` | [0..*] |
| `_SettlmtItmStatisticalPrpty` | `I_SettlmtItmStatisticalPrpty` | [0..1] |
| `_SettlmtItemActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_SupplierPricingElement` | `I_SuplrSettlmtItmPrcgElmnt` | [0..*] |
| `_SuplrSettlmtItmCancld` | `I_SettlmtMgmtDocItemCancld` | [0..1] |
| `_SuplrSettlmtCompanyCode` | `I_CompanyCode` | [0..1] |
| `_HigherLevelItem` | `I_SuplrSettlmtItem` | [0..1] |
| `_SuplrSettlmtBusinessArea` | `I_BusinessArea` | [0..1] |
| `_SuplrSettlmtControllingArea` | `I_ControllingArea` | [0..1] |
| `_SuplrSettlmtCostCenter` | `I_CostCenter` | [0..1] |
| `_SuplrSettlmtProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_SuplrSettlmtWBSElmntBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_SettlmtMgmtOrder` | `I_InternalOrder` | [0..1] |
| `_SettlmtItemReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_SettlmtRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_SettlmtAddlRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEM')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Item'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey:        'SuplrSettlmtItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities :   [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
    usageType.serviceQuality: #A,
    usageType.dataClass:      #TRANSACTIONAL,
    usageType.sizeCategory:   #XXL
    }
@Analytics: {
   dataCategory: #DIMENSION,
   dataExtraction.enabled: false,
   internalName: #LOCAL
   }
@Analytics.technicalName: 'IWLFSUPLRSMTITM'
@VDM: { 
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SuplrSettlmtItem
  as select from R_SuplrSettlmtItem

  association [1..1] to I_SuplrSettlmt                 as _SuplrSettlmt                  on  $projection.SuplrSettlmt = _SuplrSettlmt.SuplrSettlmt
  association [0..*] to I_SuplrSettlmtItmPlainLongText as _SuplrSettlmtItmPlainLongText  on  $projection.SuplrSettlmt     = _SuplrSettlmtItmPlainLongText.SuplrSettlmt
                                                                                         and $projection.SuplrSettlmtItem = _SuplrSettlmtItmPlainLongText.SuplrSettlmtItem
  association [0..*] to I_SuplrSettlmtItemPartner      as _Partner                       on  $projection.SuplrSettlmt     = _Partner.SuplrSettlmt
                                                                                         and $projection.SuplrSettlmtItem = _Partner.SuplrSettlmtItem

  association [0..1] to I_SettlmtItmStatisticalPrpty   as _SettlmtItmStatisticalPrpty    on  $projection.SettlmtItmStatisticalPrpty = _SettlmtItmStatisticalPrpty.SettlmtItmStatisticalPrpty
  association [0..1] to I_SettlmtActivityReasonCode    as _SettlmtItemActivityReason     on  $projection.SettlmtItemActivityReason = _SettlmtItemActivityReason.SettlmtActivityReason

  association [0..*] to I_SuplrSettlmtItmPrcgElmnt     as _SupplierPricingElement        on  $projection.SuplrSettlmt     = _SupplierPricingElement.SuplrSettlmt
                                                                                         and $projection.SuplrSettlmtItem = _SupplierPricingElement.SuplrSettlmtItem
  association [0..1] to I_SettlmtMgmtDocItemCancld     as _SuplrSettlmtItmCancld         on  $projection.SuplrSettlmtItmCancld = _SuplrSettlmtItmCancld.SettlmtMgmtDocItemCancld
  association [0..1] to I_CompanyCode                  as _SuplrSettlmtCompanyCode       on  $projection.SuplrSettlmtCompanyCode = _SuplrSettlmtCompanyCode.CompanyCode
  association [0..1] to I_SuplrSettlmtItem             as _HigherLevelItem               on  $projection.SuplrSettlmt    = _HigherLevelItem.SuplrSettlmt
                                                                                         and $projection.HigherLevelItem = _HigherLevelItem.SuplrSettlmtItem

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

  association [0..1] to I_ConditionContract            as _SettlmtItemReltdCndnContr     on  $projection.SettlmtItemReltdCndnContr = _SettlmtItemReltdCndnContr.ConditionContract

  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtRefDocCat              on  $projection.SettlmtRefDocCat = _SettlmtRefDocCat.SettlmtPrecdgDocCat
  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtAddlRefDocCat          on  $projection.SettlmtAddlRefDocCat = _SettlmtAddlRefDocCat.SettlmtPrecdgDocCat

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocItem           as _Extension                     on  $projection.SuplrSettlmt     = _Extension.SettlmtMgmtDoc
                                                                                         and $projection.SuplrSettlmtItem = _Extension.SettlmtMgmtDocItem

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtStdVH', element: 'SuplrSettlmt' } }]
      }
  key SuplrSettlmt,
  key SuplrSettlmtItem,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtCurrency'
      SuplrSettlmtCurrency,
      PricingDocument               as SupplierPricingDocument,

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
      TaxCode                       as SupplierTaxCode,
      TaxCountry,
      TaxJurisdiction,

      /* Units and Amounts */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SettlmtQuantity,
      @ObjectModel.foreignKey.association: '_SettlmtQuantityUnit'
      SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
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
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtItemGrossAmount   as SupplierItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtItemNetAmount     as SupplierItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtItemTaxAmount     as SupplierItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal1Amount   as SupplierSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal2Amount   as SupplierSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal3Amount   as SupplierSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal4Amount   as SupplierSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal5Amount   as SupplierSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtSubtotal6Amount   as SupplierSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtRebateBasisAmount as SupplierRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrSettlmtEffctvItemAmount  as SupplierEffectiveItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      SuplrItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'SuplrSettlmtCurrency'
      NonDeductibleInputTaxAmount,

      @ObjectModel.foreignKey.association: '_SettlmtItmStatisticalPrpty'
      SuplrSettlmtItmStstclPrpty    as SettlmtItmStatisticalPrpty,
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
      SuplrSettlmtItmActivityReason as SettlmtItemActivityReason,
      SuplrSettlmtItemText,

      @ObjectModel.foreignKey.association: '_SuplrSettlmtBusinessArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } }]
      }
      BusinessArea                  as SuplrSettlmtBusinessArea,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtControllingArea'
      ControllingArea               as SuplrSettlmtControllingArea,
      CostCenter                    as SuplrSettlmtCostCenter,
      ProfitCenter                  as SuplrSettlmtProfitCenter,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtWBSElmntBasicData'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } }]
      }
      WBSElementInternalID          as SuplrSettlmtWBSElmntInternalID,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtOrder'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_InternalOrderStdVH', element: 'InternalOrder' } }]
      }
      SupplierSettlementOrder       as SettlmtMgmtOrder,

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

      /* Precending Document */
      SettlmtPrecdgDoc,
      SettlmtPrecdgDocItem,
      @ObjectModel.foreignKey.association: '_SettlmtPrecdgDocCat'
      SettlmtPrecdgDocCat,
      SettlmtPrecdgDocFiscalYear,

      @ObjectModel.foreignKey.association: '_SuplrSettlmtItmCat'
      SuplrSettlmtItmCat,

      /* Settlement Item Related Condition Contract */
      @ObjectModel.foreignKey.association: '_SettlmtItemReltdCndnContr'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtItemReltdCndnContr,

      @ObjectModel.foreignKey.association: '_SuplrSettlmtItemStatus'
      SuplrSettlmtItemStatus,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtItmCancld'
      SuplrSettlmtItemReversed      as SuplrSettlmtItmCancld,
      ServicesRenderedDate,

      SettlementFiscalYear,
      @ObjectModel.foreignKey.association: '_SuplrSettlmtCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode                   as SuplrSettlmtCompanyCode,
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH', element: 'GLAccount' } }]
      }
      GLAccount,
      SupplierProductID,
      @ObjectModel.foreignKey.association: '_PriorSupplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      PriorSupplier,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtItemStdVH', element: 'SuplrSettlmtItem' } }]
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
      SupplierSubrange,
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


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmt,
      _SuplrSettlmtItmPlainLongText,
      _Partner,
      _SupplierPricingElement,
      _SuplrSettlmtCurrency,
      _Product,
      //      _ProductGroup                                                                                            ,
      _Plant,
      _InventoryValuationType,
      _ProductPurchasePointsQtyUnit,
      _SettlmtQuantityUnit,
      _NetPriceQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SettlmtItmStatisticalPrpty,
      _SettlmtSourceDocCat,
      _SettlmtItemActivityReason,
      _SuplrSettlmtBusinessArea,
      _SuplrSettlmtControllingArea,
      _SuplrSettlmtCostCenter,
      _SuplrSettlmtProfitCenter,
      _SuplrSettlmtWBSElmntBasicData,
      _SettlmtMgmtOrder,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtPrecdgDocCat,
      _SuplrSettlmtItmCat,
      _SuplrSettlmtItemStatus,
      _SuplrSettlmtItmCancld,
      _SuplrSettlmtCompanyCode,
      _GLAccountInCompanyCode,
      _PriorSupplier,
      _HigherLevelItem,
      _ItemDistributionStatus,
      _SettlmtRefDocLogicalSyst,
      _SettlmtRefDocCat,
      _ItemIntrastatRelevance,
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
