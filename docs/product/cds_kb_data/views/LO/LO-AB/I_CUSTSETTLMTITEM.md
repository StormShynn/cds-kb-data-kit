---
name: I_CUSTSETTLMTITEM
description: "Customer Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEM')/$value
semantic_en: "Customer Settlement Item"
semantic_vi: "Customer Settlement Item — CDS view cơ bản dựa trên R_CustSettlmtItem."
keywords:
  - "Customer Settlement Item"
  - "customer"
  - "settlement"
  - "item"
  - "cust"
  - "settlmt"
  - "currency"
  - "pricing"
  - "document"
  - "product"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTITEM

**Customer Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  |  | `CHAR(10)` | Customer Settlement |
| `CustSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustSettlmtCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `CustomerPricingDocument` |  | |  | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `CustomerTaxCode` |  | |  | `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
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
| `CustomerItemGrossAmount` |  | |  | `CustSettlmtItemGrossAmount` | `CURR(15)` | Gross Amount of Item in Document Currency |
| `CustomerItemNetAmount` |  | |  | `CustSettlmtItemNetAmount` | `CURR(15)` | Net Amount of Item in Document Currency |
| `CustomerItemTaxAmount` |  | |  | `CustSettlmtItemTaxAmount` | `CURR(13)` | Item Tax Amount in Document Currency |
| `CustomerSubtotal1Amount` |  | |  | `CustSettlmtSubtotal1Amount` | `CURR(13)` | Subtotal 1 Amount |
| `CustomerSubtotal2Amount` |  | |  | `CustSettlmtSubtotal2Amount` | `CURR(13)` | Subtotal 2 Amount |
| `CustomerSubtotal3Amount` |  | |  | `CustSettlmtSubtotal3Amount` | `CURR(13)` | Subtotal 3 Amount |
| `CustomerSubtotal4Amount` |  | |  | `CustSettlmtSubtotal4Amount` | `CURR(13)` | Subtotal 4 Amount |
| `CustomerSubtotal5Amount` |  | |  | `CustSettlmtSubtotal5Amount` | `CURR(13)` | Subtotal 5 Amount |
| `CustomerSubtotal6Amount` |  | |  | `CustSettlmtSubtotal6Amount` | `CURR(13)` | Subtotal 6 Amount |
| `CustomerRebateBasisAmount` |  | |  | `CustSettlmtRebateBasisAmount` | `CURR(13)` | Rebate Basis Amount |
| `CustomerEffectiveItemAmount` |  | |  | `CustSettlmtEffectiveItemAmount` | `CURR(13)` | Effective Amount of Item (Supplier-Side) |
| `CustItmEligibleAmtForCshDisc` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non Deductible Input Tax Amount |
| `SettlmtItmStatisticalPrpty` |  | |  | `CustSettlmtItmStstclPrpty` | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `CashDiscountIsDeductible` |  | |  | `cast( CashDiscountIsDeductible as wlf_sktof preserving type )` | `CHAR(1)` | Cash Discount is Deductible |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `SettlmtItemActivityReason` |  | |  | `CustSettlmtItmActivityReason` | `CHAR(3)` | Activity Reason for Document Creation |
| `CustSettlmtItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `CustSettlmtBusinessArea` |  | |  | `BusinessArea` | `CHAR(4)` | Business Area |
| `CustSettlmtControllingArea` |  | |  | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CustSettlmtCostCenter` |  | |  | `CostCenter` | `CHAR(10)` | Cost Center |
| `CustSettlmtProfitCenter` |  | |  | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CustSettlmtWBSElmntInternalID` |  | |  | `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `SettlmtMgmtOrder` |  | |  | `CustomerSettlementOrder` | `CHAR(12)` | Order for Account Assignment in Settlement Management |
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
| `CustSettlmtItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `CustSettlmtItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `CustSettlmtItmCancld` |  | |  | `CustSettlmtItemReversed` | `CHAR(1)` | Item Was Canceled |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `LowerLevelItemExists` |  | |  |  | `CHAR(1)` | Subitems Exist |
| `ItemDistributionStatus` |  | |  |  | `CHAR(1)` | Distribution Status of Settlement Item |
| `SettlmtRefDoc` |  | |  |  | `CHAR(20)` | Reference Document for Settlement Management |
| `SettlmtRefDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of Reference Document |
| `SettlmtRefDocLogicalSyst` |  | |  |  | `CHAR(10)` | Logical System of Reference Document for Smt Mgmt |
| `SettlmtRefDocItem` |  | |  |  | `NUMC(10)` | Reference Document Item for Settlement Management Document |
| `SettlmtRefDocCat` |  | |  |  | `CHAR(2)` | Reference Document Category in Settlement Management |
| `ItemIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document Item Is Relevant for Intrastat Declarations |
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
| `_CustSettlmt` | | ✓ | | | | |
| `_CustSettlmtItemPlainLongText` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_SettlmtItmStatisticalPrpty` | | ✓ | | | | |
| `_SettlmtItemActivityReason` | | ✓ | | | | |
| `_CustomerPricingElement` | | ✓ | | | | |
| `_CustSettlmtItmCancld` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_CustSettlmtBusinessArea` | | ✓ | | | | |
| `_CustSettlmtControllingArea` | | ✓ | | | | |
| `_CustSettlmtCostCenter` | | ✓ | | | | |
| `_CustSettlmtProfitCenter` | | ✓ | | | | |
| `_CustSettlmtWBSElmntBasicData` | | ✓ | | | | |
| `_SettlmtMgmtOrder` | | ✓ | | | | |
| `_SettlmtItemReltdCndnContr` | | ✓ | | | | |
| `_SettlmtRefDocCat` | | ✓ | | | | |
| `_SettlmtAddlRefDocCat` | | ✓ | | | | |
| `_CustSettlmtCurrency` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_SettlmtQuantityUnit` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_ProductPurchasePointsQtyUnit` | | ✓ | | | | |
| `_SettlmtSourceDocCat` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SettlmtPrecdgDocCat` | | ✓ | | | | |
| `_CustSettlmtItmCat` | | ✓ | | | | |
| `_CustSettlmtItemStatus` | | ✓ | | | | |
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
| `_CustSettlmt` | `I_CustSettlmt` | [1..1] |
| `_CustSettlmtItemPlainLongText` | `I_CustSettlmtItemPlainLongText` | [0..*] |
| `_Partner` | `I_CustSettlmtItemPartner` | [0..*] |
| `_SettlmtItmStatisticalPrpty` | `I_SettlmtItmStatisticalPrpty` | [0..1] |
| `_SettlmtItemActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_CustomerPricingElement` | `I_CustSettlmtItmPrcgElmnt` | [0..*] |
| `_CustSettlmtItmCancld` | `I_SettlmtMgmtDocItemCancld` | [0..1] |
| `_HigherLevelItem` | `I_CustSettlmtItem` | [0..1] |
| `_CustSettlmtBusinessArea` | `I_BusinessArea` | [0..1] |
| `_CustSettlmtControllingArea` | `I_ControllingArea` | [0..1] |
| `_CustSettlmtCostCenter` | `I_CostCenter` | [0..1] |
| `_CustSettlmtProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CustSettlmtWBSElmntBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_SettlmtMgmtOrder` | `I_InternalOrder` | [0..1] |
| `_SettlmtItemReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_SettlmtRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_SettlmtAddlRefDocCat` | `I_SettlmtPrecdgDocCat` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEM')/$value)*

```abap
@ObjectModel: {
  representativeKey:      'CustSettlmtItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #A,
  usageType.dataClass:    #TRANSACTIONAL,
  usageType.sizeCategory: #XXL
 }

@Analytics: {
   dataCategory: #DIMENSION,
   dataExtraction.enabled: false }
@Analytics.technicalName: 'IWLFCUSTSMTITM' 
@Analytics.internalName:           #LOCAL


@VDM: {
   viewType: #BASIC,
   lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck:      #MANDATORY,
  personalData.blocking:   #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Customer Settlement Item'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustSettlmtItem
  as select from R_CustSettlmtItem

  association [1..1] to I_CustSettlmt                  as _CustSettlmt                  on  $projection.CustSettlmt = _CustSettlmt.CustSettlmt
  association [0..*] to I_CustSettlmtItemPlainLongText as _CustSettlmtItemPlainLongText on  $projection.CustSettlmt     = _CustSettlmtItemPlainLongText.CustSettlmt
                                                                                        and $projection.CustSettlmtItem = _CustSettlmtItemPlainLongText.CustSettlmtItem
  association [0..*] to I_CustSettlmtItemPartner       as _Partner                      on  $projection.CustSettlmt     = _Partner.CustSettlmt
                                                                                        and $projection.CustSettlmtItem = _Partner.CustSettlmtItem

  association [0..1] to I_SettlmtItmStatisticalPrpty   as _SettlmtItmStatisticalPrpty   on  $projection.SettlmtItmStatisticalPrpty = _SettlmtItmStatisticalPrpty.SettlmtItmStatisticalPrpty
  association [0..1] to I_SettlmtActivityReasonCode    as _SettlmtItemActivityReason    on  $projection.SettlmtItemActivityReason = _SettlmtItemActivityReason.SettlmtActivityReason

  association [0..*] to I_CustSettlmtItmPrcgElmnt      as _CustomerPricingElement       on  $projection.CustSettlmt     = _CustomerPricingElement.CustSettlmt
                                                                                        and $projection.CustSettlmtItem = _CustomerPricingElement.CustSettlmtItem

  association [0..1] to I_SettlmtMgmtDocItemCancld     as _CustSettlmtItmCancld         on  $projection.CustSettlmtItmCancld = _CustSettlmtItmCancld.SettlmtMgmtDocItemCancld
  association [0..1] to I_CustSettlmtItem              as _HigherLevelItem              on  $projection.CustSettlmt     = _HigherLevelItem.CustSettlmt
                                                                                        and $projection.HigherLevelItem = _HigherLevelItem.CustSettlmtItem

  association [0..1] to I_BusinessArea                 as _CustSettlmtBusinessArea      on  $projection.CustSettlmtBusinessArea = _CustSettlmtBusinessArea.BusinessArea
  association [0..1] to I_ControllingArea              as _CustSettlmtControllingArea   on  $projection.CustSettlmtControllingArea = _CustSettlmtControllingArea.ControllingArea
  association [0..1] to I_CostCenter                   as _CustSettlmtCostCenter        on  $projection.CustSettlmtCostCenter        = _CustSettlmtCostCenter.CostCenter
                                                                                        and $projection.CustSettlmtControllingArea   = _CustSettlmtCostCenter.ControllingArea
                                                                                        and _CustSettlmtCostCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                        and _CustSettlmtCostCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_ProfitCenter                 as _CustSettlmtProfitCenter      on  $projection.CustSettlmtProfitCenter        = _CustSettlmtProfitCenter.ProfitCenter
                                                                                        and $projection.CustSettlmtControllingArea     = _CustSettlmtProfitCenter.ControllingArea
                                                                                        and _CustSettlmtProfitCenter.ValidityEndDate   >= $projection.CreationDate
                                                                                        and _CustSettlmtProfitCenter.ValidityStartDate <= $projection.CreationDate
  association [0..1] to I_WBSElementBasicData          as _CustSettlmtWBSElmntBasicData on  $projection.CustSettlmtWBSElmntInternalID = _CustSettlmtWBSElmntBasicData.WBSElementInternalID
  association [0..1] to I_InternalOrder                as _SettlmtMgmtOrder             on  $projection.SettlmtMgmtOrder = _SettlmtMgmtOrder.InternalOrder

  association [0..1] to I_ConditionContract            as _SettlmtItemReltdCndnContr    on  $projection.SettlmtItemReltdCndnContr = _SettlmtItemReltdCndnContr.ConditionContract

  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtRefDocCat             on  $projection.SettlmtRefDocCat = _SettlmtRefDocCat.SettlmtPrecdgDocCat
  association [0..1] to I_SettlmtPrecdgDocCat          as _SettlmtAddlRefDocCat         on  $projection.SettlmtAddlRefDocCat = _SettlmtAddlRefDocCat.SettlmtPrecdgDocCat

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocItem           as _Extension                    on  $projection.CustSettlmt     = _Extension.SettlmtMgmtDoc
                                                                                        and $projection.CustSettlmtItem = _Extension.SettlmtMgmtDocItem

{
      @ObjectModel.foreignKey.association: '_CustSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
  key CustSettlmt,
  key CustSettlmtItem,
      @ObjectModel.foreignKey.association: '_CustSettlmtCurrency'
      CustSettlmtCurrency,
      PricingDocument                                               as CustomerPricingDocument,

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
      TaxCode                                                       as CustomerTaxCode,
      TaxCountry,
      TaxJurisdiction,

      /* Units and Amounts */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SettlmtQuantity,
      @ObjectModel.foreignKey.association: '_SettlmtQuantityUnit'
      SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
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
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtItemGrossAmount                                    as CustomerItemGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtItemNetAmount                                      as CustomerItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtItemTaxAmount                                      as CustomerItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal1Amount                                    as CustomerSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal2Amount                                    as CustomerSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal3Amount                                    as CustomerSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal4Amount                                    as CustomerSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal5Amount                                    as CustomerSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtSubtotal6Amount                                    as CustomerSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtRebateBasisAmount                                  as CustomerRebateBasisAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustSettlmtEffectiveItemAmount                                as CustomerEffectiveItemAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      CustItmEligibleAmtForCshDisc,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CustSettlmtCurrency'
      NonDeductibleInputTaxAmount,
      @ObjectModel.foreignKey.association: '_SettlmtItmStatisticalPrpty'
      CustSettlmtItmStstclPrpty                                     as SettlmtItmStatisticalPrpty,
      cast( CashDiscountIsDeductible as wlf_sktof preserving type ) as CashDiscountIsDeductible,

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
      CustSettlmtItmActivityReason                                  as SettlmtItemActivityReason,
      CustSettlmtItemText,

      @ObjectModel.foreignKey.association: '_CustSettlmtBusinessArea'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } }]
      }
      BusinessArea                                                  as CustSettlmtBusinessArea,
      @ObjectModel.foreignKey.association: '_CustSettlmtControllingArea'
      ControllingArea                                               as CustSettlmtControllingArea,
      CostCenter                                                    as CustSettlmtCostCenter,
      ProfitCenter                                                  as CustSettlmtProfitCenter,
      @ObjectModel.foreignKey.association: '_CustSettlmtWBSElmntBasicData'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } }]
      }
      WBSElementInternalID                                          as CustSettlmtWBSElmntInternalID,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtOrder'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_InternalOrderStdVH', element: 'InternalOrder' } }]
      }
      CustomerSettlementOrder                                       as SettlmtMgmtOrder,

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

      @ObjectModel.foreignKey.association: '_CustSettlmtItmCat'
      CustSettlmtItmCat,

      /* Settlement Item Related Condition Contract */
      @ObjectModel.foreignKey.association: '_SettlmtItemReltdCndnContr'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtItemReltdCndnContr,

      @ObjectModel.foreignKey.association: '_CustSettlmtItemStatus'
      CustSettlmtItemStatus,
      @ObjectModel.foreignKey.association: '_CustSettlmtItmCancld'
      CustSettlmtItemReversed                                       as CustSettlmtItmCancld,
      ServicesRenderedDate,

      SettlementFiscalYear,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtItemStdVH', element: 'CustSettlmtItem' } }]
      }
      HigherLevelItem,
      LowerLevelItemExists,
      @ObjectModel.foreignKey.association: '_ItemDistributionStatus'
      ItemDistributionStatus,

      /* Reference Document*/
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


      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmt,
      _CustSettlmtItemPlainLongText,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      _CustSettlmtCurrency,
      _SettlmtItmStatisticalPrpty,
      _SettlmtItemActivityReason,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CustomerPricingElement,
      _Product,
      //      _ProductGroup                                                                                              ,
      _Plant,
      _InventoryValuationType,
      _SettlmtQuantityUnit,
      _NetPriceQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _ProductPurchasePointsQtyUnit,
      _SettlmtSourceDocCat,
      _CustSettlmtBusinessArea,
      _CustSettlmtControllingArea,
      _CustSettlmtCostCenter,
      _CustSettlmtProfitCenter,
      _CustSettlmtWBSElmntBasicData,
      _SettlmtMgmtOrder,
      _IncotermsVersion,
      _IncotermsClassification,
      _SettlmtPrecdgDocCat,
      _CustSettlmtItmCat,
      _SettlmtItemReltdCndnContr,
      _CustSettlmtItemStatus,
      _CustSettlmtItmCancld,
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
      _SalesSpcfcProductGroup5

}
```
