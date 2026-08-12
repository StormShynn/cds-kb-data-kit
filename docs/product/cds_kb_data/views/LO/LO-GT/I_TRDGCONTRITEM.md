---
name: I_TRDGCONTRITEM
description: "Trading Contract Item"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEM')/$value
semantic_en: "Trading Contract Item"
semantic_vi: "Trading Contract Item — CDS view tổng hợp dựa trên R_TrdgContrItem."
keywords:
  - "Trading Contract Item"
  - "trading"
  - "contract"
  - "item"
  - "payment"
  - "guarantee"
  - "procedure"
  - "depreciation"
  - "percentage"
  - "supplier"
  - "quotation"
  - "external"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRITEM

**Trading Contract Item**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractItem` | ✓ | |  |  | `NUMC(6)` | Item Number of Trading Contract |
| `PaymentGuaranteeProcedure` |  | |  |  | `CHAR(6)` | Payment Guarantee Procedure |
| `DepreciationPercentage` |  | |  |  | `DEC(5)` | Depreciation percentage for financial document processing |
| `SupplierQuotationExternalID` |  | |  |  | `CHAR(10)` | Supplier Quotation |
| `PurchasingDocumentType` |  | |  |  | `CHAR(4)` | Order Type (Purchasing) |
| `SupplierConfirmationControlKey` |  | |  |  | `CHAR(4)` | Supplier Confirmation Control Key |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Purchase Order Date |
| `CustPurOrdDateByShipToParty` |  | |  |  | `DATS(8)` | Ship-to Party's Customer Reference Date |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Extended Customer Reference |
| `PurchaseOrderByShipToParty` |  | |  |  | `CHAR(35)` | Ship-to Party's Customer Reference |
| `TrdgContrPurgDocCat` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `DownPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date for Down Payment |
| `DownPaymentPercentageOfTotAmt` |  | |  |  | `DEC(5)` | Down Payment Percentage |
| `DownPaymentType` |  | |  |  | `CHAR(4)` | Down Payment Indicator |
| `PurchasingDocumentOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `TrdgContrSlsReqdDeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date for Item Sales |
| `TrdgContrPurgReqdDeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of purchasing item in trading contract |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `TrdgContrPurgShipgInstrn` |  | |  |  | `CHAR(2)` | Purchasing Shipping Instructions |
| `TrdgContrPurgDelivAddrCat` |  | |  |  | `CHAR(1)` | Purchasing Delivery Address |
| `QuotationSubmissionDate` |  | |  |  | `DATS(8)` | Quotation Submission Date |
| `TrdgContrPurgDocExtReference` |  | |  |  | `CHAR(12)` | Purchasing Document External Reference |
| `PurgIncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms Part 1 Purchasing |
| `SlsIncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms Part 1 Sales |
| `TrdgContrPurgIncotermsLoc1Text` |  | |  |  | `CHAR(70)` | Incoterms Location 1 Purchasing |
| `TrdgContrSlsIncotermsLoc1Text` |  | |  |  | `CHAR(70)` | Incoterms Location 1 Sales |
| `PurgIncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms Part 2 Purchasing |
| `SlsIncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms Part 2 Sales |
| `TrdgContrPurgIncotermsLoc2Text` |  | |  |  | `CHAR(70)` | Incoterms Location 2 Purchasing |
| `TrdgContrSlsIncotermsLoc2Text` |  | |  |  | `CHAR(70)` | Incoterms Location 2 Sales |
| `TrdgContrPurgIncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version Purchasing |
| `TrdgContrSalesIncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version Sales |
| `TrdgContrPurgPricingProcedure` |  | |  |  | `CHAR(6)` | Purchasing Pricing Procedure |
| `TrdgContrPurgValidityStartDate` |  | |  |  | `DATS(8)` | Purchasing Validity Start Date |
| `TrdgContrPurgValidityEndDate` |  | |  |  | `DATS(8)` | Purchasing Validity End Date |
| `FixedExchangeRateIsUsed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `TrdgContrPurgExchangeRateType` |  | |  |  | `CHAR(4)` | Purchasing Exchange Rate Type |
| `IsOrderAcknRqd` |  | |  |  | `CHAR(1)` | Order Acknowledgment Requirement |
| `OrderCombinationIsAllowed` |  | |  |  | `CHAR(1)` | Order Combination Indicator |
| `PurgDocOrderAcknNumber` |  | |  |  | `CHAR(20)` | Order Acknowledgment Number |
| `InternalFinancialDocument` |  | |  |  | `CHAR(10)` | Financial doc. processing: Internal financial doc. number |
| `TrdgContrPurgDeliveryDateType` |  | |  |  | `CHAR(1)` | Purchasing Delivery Date Type |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `UnderlyingPurchaseOrderItem` |  | |  |  | `CHAR(6)` | Item Number of the Underlying Purchase Order |
| `TrdgContrMnlPOSplit` |  | |  |  | `CHAR(10)` | Manual Purchase Order Split |
| `TrdgContrSlsDeliveryDateType` |  | |  |  | `CHAR(1)` | Sales Delivery Date Type |
| `TrdgContrPurgPricingDate` |  | |  |  | `DATS(8)` | Purchasing Pricing Date |
| `TrdgContrSalesPricingDate` |  | |  |  | `DATS(8)` | Sales Pricing Date |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `RetentionPercentage` |  | |  |  | `DEC(5)` | Retention in Percent |
| `SupplierPhoneNumber` |  | |  |  | `CHAR(16)` | Supplier Telephone Number |
| `PaymentTermsName` |  | |  |  | `CHAR(80)` | Description of Terms of Payment |
| `TrdgContrPurgExchangeRate` |  | |  |  | `DEC(9)` | Purchasing Exchange Rate |
| `CorrespncInternalReference` |  | |  |  | `CHAR(12)` | Our Reference |
| `TrdgContrPurgFixedValueDate` |  | |  |  | `DATS(8)` | Purchasing Fixed Value Date |
| `TrdgContrSalesFixedValueDate` |  | |  |  | `DATS(8)` | Sales Fixed Value Date |
| `SupplierRespSalesPersonName` |  | |  |  | `CHAR(30)` | Supplier Responsible Salesperson |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `IssuingPlant` |  | |  |  | `CHAR(4)` | Issuing Plant |
| `TrdgContrSalesPaymentMethod` |  | |  |  | `CHAR(1)` | Sales Payment Method |
| `TrdgContrPurgPaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key Purchasing |
| `TrdgContrSalesPaymentTerms` |  | |  |  | `CHAR(4)` | Terms Of Payment Key Sales |
| `TrdgContrPurgDocCndn` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `TradingContractItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `TrdgContrItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `TrdgContrReltdDocItmValnType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `TrdgContrPurgQuantity` |  | |  |  | `QUAN(13)` | Quantity ordered against this purchase requisition |
| `TrdgContrSalesQuantity` |  | |  |  | `QUAN(15)` | Cumulative Order Quantity in Sales Units |
| `TrdgContrPurgQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `TrdgContrSlsQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `TrdgContrSlsToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator (factor) for conversion of sales quantity into SKU |
| `TrdgContrSlsToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Sales Denominator for UoM |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TrdgContrPurgToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Conversion of Order Unit to Base Unit |
| `TrdgContrPurgToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Purchasing Denominator for UoM |
| `TrdgContrPurgToOrdQtyNmrtr` |  | |  |  | `DEC(5)` | Purchasing to Order Quantity Numerator |
| `TrdgContrPurgToOrdQtyDnmntr` |  | |  |  | `DEC(5)` | Purchasing to Order Quantity Denominator |
| `TrdgContrSlsToOrdQtyNmrtr` |  | |  |  | `DEC(5)` | Sales to Order Quantity Numerator |
| `TrdgContrSlsToOrdQtyDnmntr` |  | |  |  | `DEC(5)` | Sales to Order Quantity Denominator |
| `TrdgContrPurgCurrency` |  | |  |  | `CUKY(5)` | Purchasing Currency |
| `TradingContractSalesCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `TrdgContrSlsWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `TrdgContrSlsGrossWeight` |  | |  |  | `QUAN(15)` | Sales Gross Weight |
| `TrdgContrSlsNetWeight` |  | |  |  | `QUAN(15)` | Sales Net Weight |
| `TrdgContrSlsVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `TrdgContrSlsVolume` |  | |  |  | `QUAN(15)` | Sales Item Volume |
| `TrdgContrPurgGrossWeight` |  | |  |  | `QUAN(13)` | Purchasing Gross Weight |
| `TrdgContrPurgNetWeight` |  | |  |  | `QUAN(13)` | Purchasing Net Weight |
| `TrdgContrPurgVolume` |  | |  |  | `QUAN(13)` | Purchasing Volume |
| `TrdgContrSlsPriceUnit` |  | |  |  | `UNIT(3)` | Sales Price Unit |
| `TrdgContrPurgPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `TrdgContrPurgNetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `TrdgContrSlsNetPriceQuantity` |  | |  |  | `DEC(5)` | Sales Net Price Quantity |
| `TrdgContrSalesNetPriceAmount` |  | |  |  | `CURR(11)` | Sales Price of Trading Contract Item |
| `TrdgContrPurgNetPriceAmount` |  | |  |  | `CURR(11)` | Purchase Price of Trading Contract Item |
| `TrdgContrSlsItemNetAmount` |  | |  |  | `CURR(15)` | Net Sales Amount for Item in Document Currency |
| `TrdgContrPurgItemNetAmount` |  | |  |  | `CURR(13)` | Net Order Value in PO Currency |
| `TrdgContrSlsItmNetAmtInSlsCrcy` |  | |  |  | `CURR(15)` | Sales Net Amount |
| `TrdgContrPurgItmNetAmtInPOCrcy` |  | |  |  | `CURR(15)` | Net Purchase Amount of Trading Contract Item in Document Cur |
| `TrdgContrPurgSubtotal1Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 1 Amount |
| `TrdgContrPurgSubtotal2Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 2 Amount |
| `TrdgContrPurgSubtotal3Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 3 Amount |
| `TrdgContrPurgSubtotal4Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 4 Amount |
| `TrdgContrPurgSubtotal5Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 5 Amount |
| `TrdgContrPurgSubtotal6Amount` |  | |  |  | `CURR(13)` | Purchasing Subtotal 6 Amount |
| `TrdgContrSlsSubtotal1Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 1 Amount |
| `TrdgContrSlsSubtotal2Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 2 Amount |
| `TrdgContrSlsSubtotal3Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 3 Amount |
| `TrdgContrSlsSubtotal4Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 4 Amount |
| `TrdgContrSlsSubtotal5Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 5 Amount |
| `TrdgContrSlsSubtotal6Amount` |  | |  |  | `CURR(13)` | Sales Subtotal 6 Amount |
| `SlsUnlmtdOvrdelivIsAllwd` |  | |  |  | `CHAR(1)` | Sales Unlimited Overdelivery Is Allowed |
| `SlsOvrdelivTolLmtRatioInPct` |  | |  |  | `DEC(3)` | Sales Overdelivery Tolerance |
| `SlsUndrdelivTolLmtRatioInPct` |  | |  |  | `DEC(3)` | Underdelivery Tolerance |
| `PurgUnlmtdOvrdelivIsAllwd` |  | |  |  | `CHAR(1)` | Unlimited Overdelivery Is Allowed |
| `PurgOvrdelivTolLmtRatioInPct` |  | |  |  | `DEC(3)` | Purchasing Overdelivery Tolerance |
| `PurgUndrdelivTolLmtRatioInPct` |  | |  |  | `DEC(3)` | Purchasing Underdelivery Tolerance |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `ProductUsedByCustomer` |  | |  |  | `CHAR(35)` | Product Number Used by Customer |
| `ProductTaxClassification1` |  | |  |  | `CHAR(1)` | Product Tax Classification 1 |
| `ProductTaxClassification2` |  | |  |  | `CHAR(1)` | Product Tax Classification 2 |
| `ProductTaxClassification3` |  | |  |  | `CHAR(1)` | Product Tax Classification 3 |
| `ProductTaxClassification4` |  | |  |  | `CHAR(1)` | Product Tax Classification 4 |
| `ProductTaxClassification5` |  | |  |  | `CHAR(1)` | Product Tax Classification 5 |
| `ProductTaxClassification6` |  | |  |  | `CHAR(1)` | Product Tax Classification 6 |
| `ProductTaxClassification7` |  | |  |  | `CHAR(1)` | Product Tax Classification 7 |
| `ProductTaxClassification8` |  | |  |  | `CHAR(1)` | Product Tax Classification 8 |
| `ProductTaxClassification9` |  | |  |  | `CHAR(1)` | Product Tax Classification 9 |
| `InternationalArticleNumber` |  | |  |  | `CHAR(18)` | International Article Number (EAN/UPC) |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales Product Group 5 |
| `ItemBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block for Item |
| `MaxNmbrOfPartialDelivery` |  | |  |  | `DEC(1)` | Maximum Number of Partial Deliveries Allowed Per Item |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Partial Delivery at Item Level |
| `TrdgContrSlsShippingPoint` |  | |  |  | `CHAR(4)` | Sales Shipping Point |
| `TradingDocumentPurchasingRoute` |  | |  |  | `CHAR(6)` | Purchasing Route |
| `TradingDocumentSalesRoute` |  | |  |  | `CHAR(6)` | Sales Route |
| `TrdgContrPurgShippingCondition` |  | |  |  | `CHAR(2)` | Purchasing Shipping Condition |
| `TrdgContrPurgShippingPoint` |  | |  |  | `CHAR(4)` | Purchasing Shipping Point |
| `TrdgContrPurgTaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `ValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `PurchasingDocumentItemCategory` |  | |  |  | `CHAR(1)` | Purchasing Item Category |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `GoodsReceiptLatestCreationDate` |  | |  |  | `DATS(8)` | Latest Possible Goods Receipt |
| `BatchClassification` |  | |  |  | `NUMC(18)` | Internal object number of the batch classification |
| `TrdgContrBusinessItem` |  | |  |  | `NUMC(6)` | Item Number from Business Data |
| `TrdgContrItemIsExtended` |  | |  |  | `CHAR(1)` | Dummy Data Element for Trading Contract Item Extensibility |
| `TrdgContrItemIsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator in Trading Contract |
| `TrdgPortfolioInternalID` |  | |  |  | `CHAR(10)` | Internal Portfolio Number |
| `TrdgContrItmPrtfloDetnDate` |  | |  |  | `DATS(8)` | Date for Portfolio Determination |
| `TrdgContrRefDocument` |  | |  |  | `CHAR(10)` | Reference Document |
| `TrdgContrRefDocItem` |  | |  |  | `NUMC(6)` | Reference Item |
| `TrdgContrReferenceDocumentType` |  | |  |  | `CHAR(4)` | Reference Document Type |
| `TrdgContrAddlRefDocument` |  | |  |  | `CHAR(10)` | Additional Reference Document |
| `TrdgContrAddlRefDocItem` |  | |  |  | `NUMC(6)` | Additional Reference Item |
| `TrdgContrAddlRefDocumentType` |  | |  |  | `CHAR(4)` | Additional Reference Document Type |
| `TrdgContrBusinessScenario` |  | |  |  | `CHAR(2)` | Business Scenario |
| `TrdgContrAssociationGroup` |  | |  |  | `CHAR(4)` | Association Group |
| `SupplierProductID` |  | |  |  | `CHAR(35)` | Product Number Used by Supplier |
| `TrdgContrOriglReqdProd` |  | |  |  | `CHAR(40)` | Requested Product |
| `TrdgContrHigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `TrdgContrPrcDetnIsIncomplete` |  | |  |  | `CHAR(1)` | Incompleteness Price Determination |
| `TrdgContrPurgBOMItmQty` |  | |  |  | `QUAN(13)` | Purchasing BOM Item Quantity |
| `TrdgContrSlsBOMItmQty` |  | |  |  | `QUAN(13)` | Sales BOM Item Quantity |
| `TrdgContrBOMKeyDate` |  | |  |  | `DATS(8)` | Key Date of the Bill of Material |
| `QuantityIsFixed` |  | |  |  | `CHAR(1)` | Quantity is fixed |
| `BillOfMaterialCategory` |  | |  |  | `CHAR(1)` | BOM category |
| `BillOfMaterialVariantUsage` |  | |  |  | `CHAR(1)` | Origin of the bill of material |
| `TrdgContrPrcgRefProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Product |
| `TrdgContrProdUsgeCat` |  | |  |  | `CHAR(3)` | Product Usage Category |
| `TrdgContrSlsItmEffctvAmount` |  | |  |  | `CURR(13)` | Sales Item Effective Amount |
| `TrdgContrPurgItmEffctvAmount` |  | |  |  | `CURR(13)` | Purchasing Item Effective Amount |
| `TrdgContrSlsIsCshDiscGrntd` |  | |  |  | `CHAR(1)` | Sales Cash Discount |
| `TrdgContrPurgIsCshDiscGrntd` |  | |  |  | `CHAR(1)` | Purchasing Cash Discount |
| `TrdgContrPredecessorDocument` |  | |  |  | `CHAR(18)` | Causing Document of Trading Contract Item |
| `TrdgContrPredecessorItem` |  | |  |  | `CHAR(10)` | Causing Item of Trading Contract Item |
| `TrdgContrPrdcssrDocumentType` |  | |  |  | `CHAR(2)` | Preceding Document Type |
| `TrdgContrPurgTaxAmount` |  | |  |  | `CURR(13)` | Purchasing Tax Amount |
| `TrdgContrSlsTaxAmount` |  | |  |  | `CURR(13)` | Sales Tax Amount |
| `TrdgContrHdggRlvt` |  | |  |  | `CHAR(1)` | Position Relevant |
| `TrdgContrCndnCnsldtnCat` |  | |  |  | `CHAR(2)` | Condition Consolidation Category |
| `TrdgContrCndnIsCnsldtd` |  | |  |  | `CHAR(1)` | Item is consolidated |
| `TrdgContrSTOPostingLogic` |  | |  |  | `CHAR(1)` | Posting Logic in the Case of Stock Transfers |
| `TrdgContrSettlementMode` |  | |  |  | `CHAR(1)` | Settlement Mode of  the item |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `TrdgContrPurgTaxJurisdiction` |  | |  |  | `CHAR(15)` | Purchasing Tax Jurisdiction |
| `PaymentGuaranteeForm` |  | |  |  | `CHAR(2)` | Form of payment guarantee |
| `DownPaymentAmount` |  | |  |  | `CURR(11)` | Down Payment Amount in Document Currency |
| `SupplierTotalGrossAmount` |  | |  |  | `CURR(13)` | Gross order value in PO currency |
| `TrdgContrBOMProfile` |  | |  |  | `CHAR(4)` | Profile for BOM Items |
| `AlternativeBillOfMaterial` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `TrdgContrPurgRiskRelevancy` |  | |  |  | `CHAR(1)` | Purchasing Risk Relevancy |
| `TrdgContrSlsRiskRelevancy` |  | |  |  | `CHAR(1)` | Sales Risk Relevancy |
| `TrdgContrSlsClfnObjInternalID` |  | |  |  | `NUMC(18)` | Configuration in the Trading Contract: CUOBJ SD Side |
| `TrdgContrPurgClfnObjInternalID` |  | |  |  | `NUMC(18)` | Configuration in the Trading Contract: CUOBJ MM Side |
| `TrdgContrProdSizeOrDimnDesc` |  | |  |  | `CHAR(32)` | Size/dimensions |
| `TrdgContrItemIsComplete` |  | |  |  | `CHAR(1)` | Item Is Completed |
| `TradingContractInternalOrder` |  | |  |  | `CHAR(12)` | Internal Order |
| `TrdgContrItemBlockCode` |  | |  |  | `CHAR(1)` | Block code of Trading Contract items |
| `TrdgContrPurgTaxCountry` |  | |  |  | `CHAR(3)` | Purchasing Tax Country/Region |
| `TrdgContrPurgTaxDate` |  | |  |  | `DATS(8)` | Date for Determining Tax Rates for Puchasing |
| `TradingContractCurrency` |  | |  |  | `CUKY(5)` | Currency of Trading Contract |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `TrdgContrBillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material in a Trading Document |
| `TrdgContrPurchaseOrderItem` |  | |  |  | `CHAR(6)` | Item Number of the Underlying Purchase Order in a Trdg Doc. |
| `TrdgContrPrcDetnExchRate` |  | |  |  | `DEC(9)` | Sales Exchange Rate for Price Determination in a Trdg Doc. |
| `TrdgContrIsRlvtPoDProcg` |  | |  |  | `CHAR(1)` | Trading Document Relevant for Point of Delivery Processing |
| `_TrdgContr` | | ✓ | | | | |
| `_TrdgContrItemPartner` | | ✓ | | | | |
| `_TrdgContrItmSlsPrcgElmnt` | | ✓ | | | | |
| `_TrdgContrItmPurgPrcgElmnt` | | ✓ | | | | |
| `_TrdgContrScheduleLine` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdgContr` | `I_TrdgContr` | [1..1] |
| `_TrdgContrItemPartner` | `I_TrdgContrItemPartner` | [0..*] |
| `_TrdgContrItmSlsPrcgElmnt` | `I_TrdgContrItmSlsPrcgElmnt` | [0..*] |
| `_TrdgContrItmPurgPrcgElmnt` | `I_TrdgContrItmPurgPrcgElmnt` | [0..*] |
| `_TrdgContrScheduleLine` | `I_TrdgContrScheduleLine` | [0..*] |
| `_TrdgDocItemExtension` | `E_TradingDocumentItem` | [0..1] |
| `_TrdgDocBusDataItemExtension` | `E_TradingDocumentBusinessData` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEM')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Trading Contract Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  semanticKey: ['TradingContractItem', 'TradingContract'],
  representativeKey: 'TradingContractItem',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.allowExtensions:true

define view entity I_TrdgContrItem
  as select from R_TrdgContrItem as TrdgContrItem


  association [1..1] to I_TrdgContr                   as _TrdgContr                   on  $projection.TradingContract = _TrdgContr.TradingContract
  association [0..*] to I_TrdgContrItemPartner        as _TrdgContrItemPartner        on  $projection.TradingContract     = _TrdgContrItemPartner.TradingContract
                                                                                      and $projection.TradingContractItem = _TrdgContrItemPartner.TradingContractItem
  association [0..*] to I_TrdgContrItmSlsPrcgElmnt    as _TrdgContrItmSlsPrcgElmnt    on  $projection.TradingContract     = _TrdgContrItmSlsPrcgElmnt.TradingContract
                                                                                      and $projection.TradingContractItem = _TrdgContrItmSlsPrcgElmnt.TradingContractItem
  association [0..*] to I_TrdgContrItmPurgPrcgElmnt   as _TrdgContrItmPurgPrcgElmnt   on  $projection.TradingContract     = _TrdgContrItmPurgPrcgElmnt.TradingContract
                                                                                      and $projection.TradingContractItem = _TrdgContrItmPurgPrcgElmnt.TradingContractItem
  association [0..*] to I_TrdgContrScheduleLine       as _TrdgContrScheduleLine       on  $projection.TradingContract     = _TrdgContrScheduleLine.TradingContract
                                                                                      and $projection.TradingContractItem = _TrdgContrScheduleLine.TradingContractItem
  association [0..1] to E_TradingDocumentItem         as _TrdgDocItemExtension        on  $projection.TradingContract     = _TrdgDocItemExtension.TradingDocument
                                                                                      and $projection.TradingContractItem = _TrdgDocItemExtension.TradingDocumentItem
  association [0..1] to E_TradingDocumentBusinessData as _TrdgDocBusDataItemExtension on  $projection.TradingContract       = _TrdgDocBusDataItemExtension.TradingDocument
                                                                                      and $projection.TrdgContrBusinessItem = _TrdgDocBusDataItemExtension.TradingDocumentItem

{
      @ObjectModel.foreignKey.association: '_TrdgContr'

  key TradingContract,
  key TradingContractItem,

      PaymentGuaranteeProcedure,
      DepreciationPercentage,
      SupplierQuotationExternalID,
      PurchasingDocumentType,
      SupplierConfirmationControlKey,
      CustomerPurchaseOrderDate,
      CustPurOrdDateByShipToParty,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      TrdgContrPurgDocCat,
      DownPaymentDueDate,
      DownPaymentPercentageOfTotAmt,
      DownPaymentType,
      PurchasingDocumentOrderDate,
      TrdgContrSlsReqdDeliveryDate,
      TrdgContrPurgReqdDeliveryDate,
      PurchasingGroup,
      PurchasingOrganization,
      Supplier,
      TrdgContrPurgShipgInstrn,
      TrdgContrPurgDelivAddrCat,
      QuotationSubmissionDate,
      TrdgContrPurgDocExtReference,
      PurgIncotermsClassification,
      SlsIncotermsClassification,
      TrdgContrPurgIncotermsLoc1Text,
      TrdgContrSlsIncotermsLoc1Text,
      PurgIncotermsTransferLocation,
      SlsIncotermsTransferLocation,
      TrdgContrPurgIncotermsLoc2Text,
      TrdgContrSlsIncotermsLoc2Text,
      TrdgContrPurgIncotermsVersion,
      TrdgContrSalesIncotermsVersion,
      TrdgContrPurgPricingProcedure,
      TrdgContrPurgValidityStartDate,
      TrdgContrPurgValidityEndDate,
      FixedExchangeRateIsUsed,
      TrdgContrPurgExchangeRateType,
      IsOrderAcknRqd,
      OrderCombinationIsAllowed,
      PurgDocOrderAcknNumber,
      InternalFinancialDocument,
      TrdgContrPurgDeliveryDateType,
      SEPAMandate,
      UnderlyingPurchaseOrderItem,
      TrdgContrMnlPOSplit,
      TrdgContrSlsDeliveryDateType,
      TrdgContrPurgPricingDate,
      TrdgContrSalesPricingDate,
      SupplyingPlant,
      RetentionPercentage,
      SupplierPhoneNumber,
      PaymentTermsName,
      TrdgContrPurgExchangeRate,
      CorrespncInternalReference,
      TrdgContrPurgFixedValueDate,
      TrdgContrSalesFixedValueDate,
      SupplierRespSalesPersonName,
      ShippingType,
      IssuingPlant,
      TrdgContrSalesPaymentMethod,
      TrdgContrPurgPaymentTerms,
      TrdgContrSalesPaymentTerms,
      TrdgContrPurgDocCndn,
      TradingContractItemCategory,
      Product,
      TrdgContrItemText,
      ProductGroup,
      TrdgContrReltdDocItmValnType,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Plant', element: 'Plant' }, additionalBinding: [{ element: 'DefaultPurchasingOrganization',
                                     localElement: 'PurchasingOrganization',
                                     usage: #FILTER_AND_RESULT }],
               useForValidation: true }]
      @ObjectModel.text.element: ['Plant']
      @Semantics.text: true
      Plant,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_StorageLocation', element: 'StorageLocation' }, additionalBinding: [{ element: 'Plant',
                            localElement: 'Plant',
                            usage: #FILTER_AND_RESULT }],
      useForValidation: true }]
      @ObjectModel.text.element: ['StorageLocation']
      @Semantics.text: true
      StorageLocation,
      Batch,
      OrganizationDivision,
      BusinessArea,
      CreatedByUser,
      CreationDate,
      CreationTime,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrPurgQuantityUnit'
      TrdgContrPurgQuantity,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsQuantityUnit'
      TrdgContrSalesQuantity,
      TrdgContrPurgQuantityUnit,
      TrdgContrSlsQuantityUnit,
      TrdgContrSlsToBaseQtyNmrtr,
      TrdgContrSlsToBaseQtyDnmntr,
      BaseUnit,
      TrdgContrPurgToBaseQtyNmrtr,
      TrdgContrPurgToBaseQtyDnmntr,
      TrdgContrPurgToOrdQtyNmrtr,
      TrdgContrPurgToOrdQtyDnmntr,
      TrdgContrSlsToOrdQtyNmrtr,
      TrdgContrSlsToOrdQtyDnmntr,
      TrdgContrPurgCurrency,
      TradingContractSalesCurrency,
      TrdgContrSlsWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsWeightUnit'
      TrdgContrSlsGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsWeightUnit'
      TrdgContrSlsNetWeight,
      TrdgContrSlsVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsVolumeUnit'
      TrdgContrSlsVolume,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsWeightUnit'
      TrdgContrPurgGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsWeightUnit'
      TrdgContrPurgNetWeight,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsVolumeUnit'
      TrdgContrPurgVolume,
      TrdgContrSlsPriceUnit,
      TrdgContrPurgPriceUnit,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrPurgPriceUnit'
      TrdgContrPurgNetPriceQuantity,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsPriceUnit'
      TrdgContrSlsNetPriceQuantity,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSalesNetPriceAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgNetPriceAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsItemNetAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgItemNetAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsItmNetAmtInSlsCrcy,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgItmNetAmtInPOCrcy,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal1Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal2Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal3Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal4Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal5Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgSubtotal6Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal1Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal2Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal3Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal4Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal5Amount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsSubtotal6Amount,
      @Semantics.booleanIndicator:true
      SlsUnlmtdOvrdelivIsAllwd,
      SlsOvrdelivTolLmtRatioInPct,
      SlsUndrdelivTolLmtRatioInPct,
      PurgUnlmtdOvrdelivIsAllwd,
      PurgOvrdelivTolLmtRatioInPct,
      PurgUndrdelivTolLmtRatioInPct,
      SalesDocumentRjcnReason,
      ProductHierarchyNode,
      ProductUsedByCustomer,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      InternationalArticleNumber,
      ProfitCenter,
      CostCenter,
      SalesSpcfcProductGroup1,
      SalesSpcfcProductGroup2,
      SalesSpcfcProductGroup3,
      SalesSpcfcProductGroup4,
      SalesSpcfcProductGroup5,
      ItemBillingBlockReason,
      MaxNmbrOfPartialDelivery,
      PartialDeliveryIsAllowed,
      TrdgContrSlsShippingPoint,
      TradingDocumentPurchasingRoute,
      TradingDocumentSalesRoute,
      TrdgContrPurgShippingCondition,
      TrdgContrPurgShippingPoint,
      TrdgContrPurgTaxCode,
      ValuationCategory,
      PurchasingDocumentItemCategory,
      AccountAssignmentCategory,
      GoodsReceiptLatestCreationDate,
      BatchClassification,
      TrdgContrBusinessItem,
      @Semantics.booleanIndicator: true
      TrdgContrItemIsExtended,
      @Semantics.booleanIndicator: true
      TrdgContrItemIsDeleted,
      TrdgPortfolioInternalID,
      TrdgContrItmPrtfloDetnDate,
      TrdgContrRefDocument,
      TrdgContrRefDocItem,
      TrdgContrReferenceDocumentType,
      TrdgContrAddlRefDocument,
      TrdgContrAddlRefDocItem,
      TrdgContrAddlRefDocumentType,
      TrdgContrBusinessScenario,
      TrdgContrAssociationGroup,
      SupplierProductID,
      TrdgContrOriglReqdProd,
      TrdgContrHigherLevelItem,
      @Semantics.booleanIndicator : true
      TrdgContrPrcDetnIsIncomplete,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrPurgQuantityUnit'
      TrdgContrPurgBOMItmQty,
      @Semantics.quantity.unitOfMeasure: 'TrdgContrSlsQuantityUnit'
      TrdgContrSlsBOMItmQty,

      TrdgContrBOMKeyDate,
      @Semantics.booleanIndicator: true
      QuantityIsFixed,
      BillOfMaterialCategory,
      BillOfMaterialVariantUsage,
      TrdgContrPrcgRefProduct,
      TrdgContrProdUsgeCat,
      @Semantics.amount.currencyCode: 'TrdgContrPurgCurrency'
      TrdgContrSlsItmEffctvAmount,
      @Semantics.amount.currencyCode: 'TrdgContrPurgCurrency'
      TrdgContrPurgItmEffctvAmount,
      TrdgContrSlsIsCshDiscGrntd,
      TrdgContrPurgIsCshDiscGrntd,
      TrdgContrPredecessorDocument,
      TrdgContrPredecessorItem,
      TrdgContrPrdcssrDocumentType,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrPurgTaxAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrSlsTaxAmount,
      TrdgContrHdggRlvt,
      TrdgContrCndnCnsldtnCat,
      @Semantics.booleanIndicator : true
      TrdgContrCndnIsCnsldtd,
      TrdgContrSTOPostingLogic,
      TrdgContrSettlementMode,
      IssuingStorageLocation,
      TrdgContrPurgTaxJurisdiction,
      PaymentGuaranteeForm,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      DownPaymentAmount,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      SupplierTotalGrossAmount,
      TrdgContrBOMProfile,
      AlternativeBillOfMaterial,
      TrdgContrPurgRiskRelevancy,
      TrdgContrSlsRiskRelevancy,
      TrdgContrSlsClfnObjInternalID,
      TrdgContrPurgClfnObjInternalID,
      TrdgContrProdSizeOrDimnDesc,
      @Semantics.booleanIndicator: true
      TrdgContrItemIsComplete,
      TradingContractInternalOrder,
      TrdgContrItemBlockCode,
      TrdgContrPurgTaxCountry,
      TrdgContrPurgTaxDate,
      TradingContractCurrency,
      ControllingArea,
      TrdgContrBillOfMaterial,
      TrdgContrPurchaseOrderItem,
      TrdgContrPrcDetnExchRate,
      TrdgContrIsRlvtPoDProcg,

      _TrdgContr,
      _TrdgContrItemPartner,
      _TrdgContrItmPurgPrcgElmnt,
      _TrdgContrItmSlsPrcgElmnt,
      _TrdgContrScheduleLine



}
```
