---
name: I_SALESORDERITEM
description: Sales OrderITEM
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - item-level
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEM

**Sales OrderITEM**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `cast(SalesDocument as vdm_sales_order preserving type)` |
| key `SalesOrderItem` | `cast(SalesDocumentItem as sales_order_item preserving type)` |
| `SalesOrderItemUUID` | `SalesDocumentItemUUID` |
| `SalesOrderItemCategory` | `SalesDocumentItemCategory` |
| `SalesOrderItemType` | `SalesDocumentItemType` |
| `IsReturnsItem` | `IsReturnsItem` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `Division` | `Division` |
| `Material` | `Material` |
| `Product` | `Product` |
| `OriginallyRequestedMaterial` | `OriginallyRequestedMaterial` |
| `MaterialByCustomer` | `MaterialByCustomer` |
| `InternationalArticleNumber` | `InternationalArticleNumber` |
| `Batch` | `}] Batch` |
| `ProductHierarchyNode` | `ProductHierarchyNode` |
| `ProductCatalog` | `ProductCatalog` |
| `MaterialSubstitutionReason` | `MaterialSubstitutionReason` |
| `MaterialGroup` | `MaterialGroup` |
| `ProductGroup` | `ProductGroup` |
| `MaterialPricingGroup` | `MaterialPricingGroup` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `Plant` | `Plant` |
| `OriginalPlant` | `OriginalPlant` |
| `TransitPlant` | `TransitPlant` |
| `StorageLocation` | `StorageLocation` |
| `DeliveryGroup` | `DeliveryGroup` |
| `ProductConfiguration` | `ProductConfiguration` |
| `BOMExplosionDate` | `BOMExplosionDate` |
| `MRPArea` | `MRPArea` |
| `SalesOrderItemText` | `SalesDocumentItemText` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `PurchaseOrderByShipToParty` | `PurchaseOrderByShipToParty` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `UnderlyingPurchaseOrderItem` | `UnderlyingPurchaseOrderItem` |
| `UndrlgPurOrdItmByShipToParty` | `UndrlgPurOrdItmByShipToParty` |
| `CorrespncExternalReference` | `CorrespncExternalReference` |
| `CorrespncExtRefByShipToParty` | `CorrespncExtRefByShipToParty` |
| `ExternalItemID` | `ExternalItemID` |
| `OrderQuantity` | `OrderQuantity` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `OrderToBaseQuantityDnmntr` | `OrderToBaseQuantityDnmntr` |
| `OrderToBaseQuantityNmrtr` | `OrderToBaseQuantityNmrtr` |
| `TargetQuantity` | `TargetQuantity` |
| `TargetQuantityUnit` | `TargetQuantityUnit` |
| `TargetToBaseQuantityDnmntr` | `TargetToBaseQuantityDnmntr` |
| `TargetToBaseQuantityNmrtr` | `TargetToBaseQuantityNmrtr` |
| `ConfdDelivQtyInOrderQtyUnit` | `ConfdDelivQtyInOrderQtyUnit` |
| `TargetDelivQtyInOrderQtyUnit` | `TargetDelivQtyInOrderQtyUnit` |
| `ConfdDeliveryQtyInBaseUnit` | `ConfdDeliveryQtyInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `CommittedDelivQtyInOrdQtyUnit` | `CommittedDelivQtyInOrdQtyUnit` |
| `CommittedDelivCreationDate` | `CommittedDelivCreationDate` |
| `CommittedDeliveryDate` | `CommittedDeliveryDate` |
| `RequestedQuantity` | `RequestedQuantity` |
| `RequestedQuantityUnit` | `RequestedQuantityUnit` |
| `RequestedQuantityInBaseUnit` | `RequestedQuantityInBaseUnit` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `SalesDistrict` | `SalesDistrict` |
| `SalesDeal` | `SalesDeal` |
| `SalesPromotion` | `SalesPromotion` |
| `RetailPromotion` | `RetailPromotion` |
| `CustomerGroup` | `CustomerGroup` |
| `SalesDocumentRjcnReason` | `SalesDocumentRjcnReason` |
| `RequirementSegment` | `RequirementSegment` |
| `SlsDocIsRlvtForProofOfDeliv` | `SlsDocIsRlvtForProofOfDeliv` |
| `SalesDocItemSupplyBlockReason` | `SalesDocItemSupplyBlockReason` |
| `NetAmount` | `NetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PricingDate` | `PricingDate` |
| `PricingReferenceMaterial` | `PricingReferenceMaterial` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `NetPriceAmount` | `NetPriceAmount` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `NetPriceQuantityUnit` | `NetPriceQuantityUnit` |
| `StatisticalValueControl` | `StatisticalValueControl` |
| `SalesDocumentItemProcgCode` | `SalesDocumentItemProcgCode` |
| `DownPaymentProcessingVariant` | `DownPaymentProcessingVariant` |
| `TaxAmount` | `TaxAmount` |
| `ProductTaxClassification1` | `ProductTaxClassification1` |
| `ProductTaxClassification2` | `ProductTaxClassification2` |
| `ProductTaxClassification3` | `ProductTaxClassification3` |
| `ProductTaxClassification4` | `ProductTaxClassification4` |
| `ProductTaxClassification5` | `ProductTaxClassification5` |
| `ProductTaxClassification6` | `ProductTaxClassification6` |
| `ProductTaxClassification7` | `ProductTaxClassification7` |
| `ProductTaxClassification8` | `ProductTaxClassification8` |
| `ProductTaxClassification9` | `ProductTaxClassification9` |
| `MatlAccountAssignmentGroup` | `MatlAccountAssignmentGroup` |
| `CostAmount` | `CostAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `SalesOrderCondition` | `SalesDocumentCondition` |
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `ShippingPoint` | `ShippingPoint` |
| `ShippingType` | `ShippingType` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `DeliveryPriority` | `DeliveryPriority` |
| `Route` | `Route` |
| `DeliveryDateQuantityIsFixed` | `DeliveryDateQuantityIsFixed` |
| `DeliveryDateTypeRule` | `DeliveryDateTypeRule` |
| `PartialDeliveryIsAllowed` | `PartialDeliveryIsAllowed` |
| `MaxNmbrOfPartialDelivery` | `MaxNmbrOfPartialDelivery` |
| `UnlimitedOverdeliveryIsAllowed` | `UnlimitedOverdeliveryIsAllowed` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `MinDeliveryQtyInBaseUnit` | `MinDeliveryQtyInBaseUnit` |
| `OpenDeliveryLeadingUnitCode` | `OpenDeliveryLeadingUnitCode` |
| `ItemIsDeliveryRelevant` | `ItemIsDeliveryRelevant` |
| `ReceivingPoint` | `ReceivingPoint` |
| `IncotermsVersion` | `IncotermsVersion` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `OrderCombinationIsAllowed` | `SalesDocumentItem.OrderCombinationIsAllowed` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `FixedValueDate` | `FixedValueDate` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `ProductSeasonYear` | `ProductSeasonYear` |
| `ProductSeason` | `ProductSeason` |
| `ProductCollection` | `ProductCollection` |
| `ProductTheme` | `ProductTheme` |
| `FashionCancelDate` | `FashionCancelDate` |
| `ProductCharacteristic1` | `ProductCharacteristic1` |
| `ProductCharacteristic2` | `ProductCharacteristic2` |
| `ProductCharacteristic3` | `ProductCharacteristic3` |
| `ShippingGroupNumber` | `ShippingGroupNumber` |
| `ShippingGroupRule` | `ShippingGroupRule` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `ItemIsBillingRelevant` | `ItemIsBillingRelevant` |
| `ItemBillingBlockReason` | `ItemBillingBlockReason` |
| `BillingPlan` | `BillingPlan` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `CustomerAccountAssignmentGroup` | `CustomerAccountAssignmentGroup` |
| `BusinessArea` | `BusinessArea` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElement` | `WBSElement` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `OrderID` | `OrderID` |
| `ControllingObject` | `ControllingObject` |
| `ProfitabilitySegment` | `ProfitabilitySegment` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `OriginSDDocument` | `OriginSDDocument` |
| `OriginSDDocumentItem` | `OriginSDDocumentItem` |
| `AccountingExchangeRate` | `AccountingExchangeRate` |
| `ContractAccount` | `ContractAccount` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `HigherLevelItem` | `HigherLevelItem` |
| `HigherLevelItemUsage` | `HigherLevelItemUsage` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `BusSolnOrdItemBundleItem` | `BusSolnOrdItemBundleItem` |
| `SlsContrAutoAssgmtIDForSlsOrd` | `SlsContrAutoAssgmtIDForSlsOrd` |
| `SDProcessStatus` | `SDProcessStatus` |
| `DeliveryConfirmationStatus` | `DeliveryConfirmationStatus` |
| `PurchaseConfirmationStatus` | `PurchaseConfirmationStatus` |
| `TotalDeliveryStatus` | `TotalDeliveryStatus` |
| `DeliveryStatus` | `DeliveryStatus` |
| `DeliveryBlockStatus` | `DeliveryBlockStatus` |
| `OrderRelatedBillingStatus` | `OrderRelatedBillingStatus` |
| `BillingBlockStatus` | `BillingBlockStatus` |
| `ItemGeneralIncompletionStatus` | `ItemGeneralIncompletionStatus` |
| `ItemBillingIncompletionStatus` | `ItemBillingIncompletionStatus` |
| `PricingIncompletionStatus` | `PricingIncompletionStatus` |
| `ItemDeliveryIncompletionStatus` | `ItemDeliveryIncompletionStatus` |
| `SDDocReferenceStatus` | `SDDocReferenceStatus` |
| `SDDocumentRejectionStatus` | `SDDocumentRejectionStatus` |
| `TotalSDDocReferenceStatus` | `TotalSDDocReferenceStatus` |
| `ChmlCmplncStatus` | `ChmlCmplncStatus` |
| `DangerousGoodsStatus` | `DangerousGoodsStatus` |
| `SafetyDataSheetStatus` | `SafetyDataSheetStatus` |
| `SlsOrderItemDownPaymentStatus` | `ContractItemDownPaymentStatus` |
| `TrdCmplncEmbargoSts` | `TrdCmplncEmbargoSts` |
| `TrdCmplncSnctndListChkSts` | `TrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `OvrlTrdCmplncLegalCtrlChkSts` |
| `AltvBsdConfSubstitutionStatus` | `AltvBsdConfSubstitutionStatus` |
| `SlsDocItmOvrlSupplyBlockStatus` | `SlsDocItmOvrlSupplyBlockStatus` |
| `OmniChannelSalesPromotion` | `OmniChannelSalesPromotion` |
| `OmniChannelSalesPromotionRule` | `OmniChannelSalesPromotionRule` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `CappedNetAmount` | `CappedNetAmount` |
| `CappedNetAmtAlertThldInPct` | `CappedNetAmtAlertThldInPct` |
| `TotalStandAloneSellingPrice` | `SalesDocumentItem.TotalStandAloneSellingPrice` |
| `SalesOrderType` | `cast( SalesDocumentType as sales_order_type preserving type )` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SoldToParty` | `SoldToParty` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SalesOrderDate` | `SalesDocumentDate` |
| `SDDocumentReason` | `SDDocumentReason` |
| `RequestedDeliveryDate` | `RequestedDeliveryDate` |
| `ShippingCondition` | `ShippingCondition` |
| `ShipToParty` | `ShipToParty` |
| `PayerParty` | `PayerParty` |
| `BillToParty` | `BillToParty` |
| `SalesEmployee` | `SalesEmployee` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `SalesEmployeeWorkAgreement` | `SalesEmployeeWorkAgreement` |
| `ResponsibleEmployeeWorkAgrmt` | `ResponsibleEmployeeWorkAgrmt` |
| `_ItemDownPaymentStatus` | `_ContractItemDownPaymentStatus` |
| `_BusinessAreaText` | *Association* |
| `_MaterialText` | *Association* |
| `_ProductText` | *Association* |
| `_OrigMaterialText` | *Association* |
| `_ShippingPointText` | *Association* |
| `_SalesOrder` | *Association* |
| `_SalesOrderType` | *Association* |
| `_ScheduleLine` | *Association* |
| `_Partner` | *Association* |
| `_PricingElement` | *Association* |
| `_HigherLevelItem` | *Association* |
| `_ItemBillingPlan` | *Association* |
| `_PrecedingProcFlowDocItem` | *Association* |
| `_SubsequentProcFlowDocItem` | *Association* |
| `_ItemCategory` | *Association* |
| `_CreatedByUser` | *Association* |
| `_Division` | *Association* |
| `_Material` | *Association* |
| `_Product` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_MaterialPlant` | *Association* |
| `_Batch` | *Association* |
| `_ProductHierarchyNode` | *Association* |
| `_MaterialSubstitutionReason` | *Association* |
| `_MaterialGroup` | *Association* |
| `_ProductGroup` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_MatlAccountAssignmentGroup` | *Association* |
| `_Plant` | *Association* |
| `_OriginalPlant` | *Association* |
| `_TransitPlant` | *Association* |
| `_StorageLocation` | *Association* |
| `_OrderQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_TargetQuantityUnit` | *Association* |
| `_RequestedQuantityUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_SalesDistrict` | *Association* |
| `_SalesDeal` | *Association* |
| `_CustomerGroup` | *Association* |
| `_CustomerPriceGroup` | *Association* |
| `_SalesDocumentRjcnReason` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_NetPriceQuantityUnit` | *Association* |
| `_StatisticalValueControl` | *Association* |
| `_DownPaymentProcessingVariant` | *Association* |
| `_ShippingPoint` | *Association* |
| `_ShippingType` | *Association* |
| `_DeliveryPriority` | *Association* |
| `_DeliveryDateTypeRule` | *Association* |
| `_PartialDeliveryItem` | *Association* |
| `_Route` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_ItemIsBillingRelevant` | *Association* |
| `_ItemBillingBlockReason` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_BusinessArea` | *Association* |
| `_ProfitCenter` | *Association* |
| `_SlsDocItemSupplyBlockReason` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_WBSElementBasicData_2` | *Association* |
| `_ProfitabilitySegment` | *Association* |
| `_ReferenceSDDocument` | *Association* |
| `_ReferenceSDDocumentItem` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SolutionOrder` | *Association* |
| `_SolutionOrderItem` | *Association* |
| `_SolutionOrderBundleItem` | *Association* |
| `_SDProcessStatus` | *Association* |
| `_DeliveryConfirmationStatus` | *Association* |
| `_PurchaseConfirmationStatus` | *Association* |
| `_TotalDeliveryStatus` | *Association* |
| `_DeliveryStatus` | *Association* |
| `_DeliveryBlockStatus` | *Association* |
| `_OrderRelatedBillingStatus` | *Association* |
| `_BillingBlockStatus` | *Association* |
| `_ItemGeneralIncompletionStatus` | *Association* |
| `_ItemBillingIncompletionStatus` | *Association* |
| `_PricingIncompletionStatus` | *Association* |
| `_ItemDelivIncompletionSts` | *Association* |
| `_SDDocReferenceStatus` | *Association* |
| `_SDDocumentRejectionStatus` | *Association* |
| `_TotalSDDocReferenceStatus` | *Association* |
| `_ChmlCmplncStatus` | *Association* |
| `_DangerousGoodsStatus` | *Association* |
| `_SafetyDataSheetStatus` | *Association* |
| `_OvrlTrdCmplncLegalCtrlChkSts` | *Association* |
| `_AltvBsdConfSubstitutionSts` | *Association* |
| `_TrdCmplncSnctndListChkSts` | *Association* |
| `_TrdCmplncEmbargoSts` | *Association* |
| `_SlsDocItmOvrlSupplyBlockSts` | *Association* |
| `_MRPArea` | *Association* |
| `_BillingPlan` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SoldToParty` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SDDocumentReason` | *Association* |
| `_ShippingCondition` | *Association* |
| `_ShipToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_BillToParty` | *Association* |
| `_SalesEmployee` | *Association* |
| `_ResponsibleEmployee` | *Association* |
| `_ConsumptionPosting` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_OrigMaterialText` | `I_MaterialText` | [0..*] |
| `_ShippingPointText` | `I_ShippingPointText` | [0..*] |
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |
| `_ScheduleLine` | `I_SalesOrderScheduleLine` | [0..*] |
| `_Partner` | `I_SalesOrderItemPartner` | [0..*] |
| `_PricingElement` | `I_SalesOrderItemPricingElement` | [0..*] |
| `_HigherLevelItem` | `I_SalesOrderItem` | [0..1] |
| `_ItemBillingPlan` | `I_SalesOrderItemBillingPlan` | [0..1] |
| `_PrecedingProcFlowDocItem` | `I_SalesOrderItmPrecdgProcFlow` | [0..*] |
| `_SubsequentProcFlowDocItem` | `I_SalesOrderItmSubsqntProcFlow` | [0..*] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order Item'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_BusinessAreaText','_MaterialText','_ProductText','_OrigMaterialText','_ShippingPointText' ]
}
@AbapCatalog: {
  sqlViewName:            'ISDSLSORDERITEM',
  compiler.compareFilter: true
}
@ObjectModel: {
  representativeKey: 'SalesOrderItem',
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #XL
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'SalesOrderItem'

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesOrder', 'SalesOrderItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrder'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrder', 'SalesOrderItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrder', 'SalesOrderItem'],
                    tableElement: ['vbeln', 'vposn']
                }
            ]
        }
    }
 }

define view I_SalesOrderItem
  as select from I_SalesDocumentItem as SalesDocumentItem

  //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText          on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_MaterialText                 as _MaterialText              on  $projection.Material = _MaterialText.Material
  association [0..*] to I_ProductText                  as _ProductText               on  $projection.Product = _ProductText.Product
  association [0..*] to I_MaterialText                 as _OrigMaterialText          on  $projection.OriginallyRequestedMaterial = _OrigMaterialText.Material
  association [0..*] to I_ShippingPointText            as _ShippingPointText         on  $projection.ShippingPoint = _ShippingPointText.ShippingPoint
  // ]--GENERATED
  association [1..1] to I_SalesOrder                   as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderType               as _SalesOrderType            on  $projection.SalesOrderType = _SalesOrderType.SalesOrderType
  association [0..*] to I_SalesOrderScheduleLine       as _ScheduleLine              on  $projection.SalesOrder     = _ScheduleLine.SalesOrder
                                                                                     and $projection.SalesOrderItem = _ScheduleLine.SalesOrderItem
  association [0..*] to I_SalesOrderItemPartner        as _Partner                   on  $projection.SalesOrder     = _Partner.SalesOrder
                                                                                     and $projection.SalesOrderItem = _Partner.SalesOrderItem
  association [0..*] to I_SalesOrderItemPricingElement as _PricingElement            on  $projection.SalesOrder     = _PricingElement.SalesOrder
                                                                                     and $projection.SalesOrderItem = _PricingElement.SalesOrderItem
  association [0..1] to I_SalesOrderItem               as _HigherLevelItem           on  $projection.SalesOrder      = _HigherLevelItem.SalesOrder
                                                                                     and $projection.HigherLevelItem = _HigherLevelItem.SalesOrderItem
  association [0..1] to I_SalesOrderItemBillingPlan    as _ItemBillingPlan           on  $projection.SalesOrder     = _ItemBillingPlan.SalesOrder
                                                                                     and $projection.SalesOrderItem = _ItemBillingPlan.SalesOrderItem
                                                                                     and $projection.BillingPlan    = _ItemBillingPlan.BillingPlan

  association [0..*] to I_SalesOrderItmPrecdgProcFlow  as _PrecedingProcFlowDocItem  on  _PrecedingProcFlowDocItem.SalesOrder     = $projection.SalesOrder
                                                                                     and _PrecedingProcFlowDocItem.SalesOrderItem = $projection.SalesOrderItem


  association [0..*] to I_SalesOrderItmSubsqntProcFlow as _SubsequentProcFlowDocItem on  _SubsequentProcFlowDocItem.SalesOrder     = $projection.SalesOrder
                                                                                     and _SubsequentProcFlowDocItem.SalesOrderItem = $projection.SalesOrderItem

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic       as _Extension                 on  SalesDocumentItem.SalesDocument     = _Extension.SalesDocument
                                                                                     and SalesDocumentItem.SalesDocumentItem = _Extension.SalesDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_SalesOrder'
  key cast(SalesDocument as vdm_sales_order preserving type)        as SalesOrder,
      @ObjectModel.text.element: 'SalesOrderItemText'
  key cast(SalesDocumentItem as sales_order_item preserving type)   as SalesOrderItem,
      SalesDocumentItemUUID                                         as SalesOrderItemUUID,

      // Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory                                     as SalesOrderItemCategory,
      SalesDocumentItemType                                         as SalesOrderItemType,
      IsReturnsItem,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Org
      @ObjectModel.foreignKey.association: '_Division'
      Division,

      //Product
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Product'
      Product,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_OrigMaterialText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BatchStdVH',
                     element: 'Batch' },
          additionalBinding: [{ localElement: 'Plant',
                                element: 'Plant' },
                              { localElement: 'Material',
                                element: 'Material' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Batch'
      Batch,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      ProductHierarchyNode,
      ProductCatalog,
      @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
      MaterialSubstitutionReason,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Analytics.internalName: #LOCAL
      ProductGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      MaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_OriginalPlant'
      OriginalPlant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TransitPlant'
      TransitPlant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      DeliveryGroup,
      ProductConfiguration,
      BOMExplosionDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MRPArea'
      MRPArea,

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                                         as SalesOrderItemText,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      @Analytics.internalName: #LOCAL
      CustomerPurchaseOrderDate,
      UnderlyingPurchaseOrderItem,
      UndrlgPurOrdItmByShipToParty,
      CorrespncExternalReference,
      CorrespncExtRefByShipToParty,
      ExternalItemID,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      TargetQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      TargetQuantityUnit,
      TargetToBaseQuantityDnmntr,
      TargetToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      CommittedDelivQtyInOrdQtyUnit,
      CommittedDelivCreationDate,
      CommittedDeliveryDate,
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      RequestedQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      RequestedQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantityInBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDealStdVH',
                     element: 'SalesDeal' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesDeal'
      SalesDeal,
      SalesPromotion,
      RetailPromotion,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,
      RequirementSegment,

      SlsDocIsRlvtForProofOfDeliv,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItemSupplyBlockReason'
      SalesDocItemSupplyBlockReason,

      // Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      PricingDate,
      PricingReferenceMaterial,
      ExchangeRateDate,
      PriceDetnExchangeRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,

      SalesDocumentItemProcgCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DownPaymentProcessingVariant'
      DownPaymentProcessingVariant,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      MatlAccountAssignmentGroup,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      SalesDocumentCondition                                        as SalesOrderCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,

      //Shipping
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ShippingPointStdVH',
                     element: 'ShippingPoint' }
        }]
      @ObjectModel.text.association: '_ShippingPointText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      ShippingPoint,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      DeliveryPriority,
      @ObjectModel.foreignKey.association: '_Route'
      Route,
      DeliveryDateQuantityIsFixed,
      DeliveryDateTypeRule,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartialDeliveryItem'
      PartialDeliveryIsAllowed,
      MaxNmbrOfPartialDelivery,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinDeliveryQtyInBaseUnit,
      OpenDeliveryLeadingUnitCode,
      ItemIsDeliveryRelevant,
      ReceivingPoint,

      //Incoterms
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      SalesDocumentItem.OrderCombinationIsAllowed,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,

      //Fashion
      ProductSeasonYear,
      ProductSeason,
      ProductCollection,
      ProductTheme,
      FashionCancelDate,
      ProductCharacteristic1,
      ProductCharacteristic2,
      ProductCharacteristic3,
      ShippingGroupNumber,
      ShippingGroupRule,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,
      BillingPlan,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @Analytics.internalName: #LOCAL
      ControllingArea,
      @Analytics.internalName: #LOCAL
      ProfitCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData_2'
      WBSElementInternalID,
      OrderID,
      ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProfitabilitySegment'
      ProfitabilitySegment_2,
      OriginSDDocument,
      OriginSDDocumentItem,
      AccountingExchangeRate,
      ContractAccount,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Analytics.internalName: #LOCAL
      HigherLevelItem,
      HigherLevelItemUsage,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      BusinessSolutionOrderItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrderBundleItem'
      BusSolnOrdItemBundleItem,

      SlsContrAutoAssgmtIDForSlsOrd,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
      DeliveryConfirmationStatus,
      @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
      PurchaseConfirmationStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocReferenceStatus'
      SDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      TotalSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      ChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      SafetyDataSheetStatus,
      @ObjectModel.foreignKey.association: '_ItemDownPaymentStatus'
      ContractItemDownPaymentStatus                                 as SlsOrderItemDownPaymentStatus,
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      TrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      @ObjectModel.foreignKey.association: '_AltvBsdConfSubstitutionSts'
      AltvBsdConfSubstitutionStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItmOvrlSupplyBlockSts'
      SlsDocItmOvrlSupplyBlockStatus,

      @API.element.releaseState: #DEPRECATED
      OmniChannelSalesPromotion,
      @API.element.releaseState: #DEPRECATED
      OmniChannelSalesPromotionRule,

      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      ConsumptionPosting,

      //PBS
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CappedNetAmount,
      CappedNetAmtAlertThldInPct,
      //this field is relevant only for PBS scenario
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.TotalStandAloneSellingPrice,

      //_ANA Fields
      @ObjectModel.foreignKey.association: '_SalesOrderType'
      cast( SalesDocumentType as sales_order_type preserving type ) as SalesOrderType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      SalesDocumentDate                                             as SalesOrderDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      // Analytics partner fields
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      ResponsibleEmployee,
      SalesEmployeeWorkAgreement,
      ResponsibleEmployeeWorkAgrmt,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _SalesOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ItemBillingPlan,
      _ItemCategory,
      _CreatedByUser,
      _Division,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _MaterialPlant,
      _Batch,
      _ProductHierarchyNode,
      _MaterialSubstitutionReason,
      _MaterialGroup,
      _ProductGroup,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _MatlAccountAssignmentGroup,
      _Plant,
      _OriginalPlant,
      _TransitPlant,
      _StorageLocation,
      _OrderQuantityUnit,
      _BaseUnit,
      _TargetQuantityUnit,
      _RequestedQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _SalesDeal,
      _CustomerGroup,
      _CustomerPriceGroup,
      _SalesDocumentRjcnReason,
      _TransactionCurrency,
      _NetPriceQuantityUnit,
      _StatisticalValueControl,
      _DownPaymentProcessingVariant,
      _ShippingPoint,
      _ShippingType,
      _DeliveryPriority,
      _DeliveryDateTypeRule,
      _PartialDeliveryItem,
      _Route,
      _IncotermsClassification,
      _IncotermsVersion,
      _ItemIsBillingRelevant,
      _ItemBillingBlockReason,
      _CustomerPaymentTerms,
      //PaymentMethod,
      _CustomerAccountAssgmtGroup,
      _BusinessArea,
      @Consumption.filter.businessDate.at: true
      _ProfitCenter,
      _SlsDocItemSupplyBlockReason,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData_2'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WBSElementBasicData_2'
      _WBSElementBasicData,
      _WBSElementBasicData_2,
      _ProfitabilitySegment,
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _ReferenceSDDocumentCategory,
      _HigherLevelItem,
      _SolutionOrder,
      _SolutionOrderItem,
      @Analytics.hidden: true
      _SolutionOrderBundleItem,
      _SDProcessStatus,
      _DeliveryConfirmationStatus,
      _PurchaseConfirmationStatus,
      _TotalDeliveryStatus,
      _DeliveryStatus,
      _DeliveryBlockStatus,
      _ContractItemDownPaymentStatus                                as _ItemDownPaymentStatus,
      _OrderRelatedBillingStatus,
      _BillingBlockStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _SDDocReferenceStatus,
      _SDDocumentRejectionStatus,
      _TotalSDDocReferenceStatus,
      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _SafetyDataSheetStatus,
      _OvrlTrdCmplncLegalCtrlChkSts,
      _AltvBsdConfSubstitutionSts,
      _TrdCmplncSnctndListChkSts,
      _TrdCmplncEmbargoSts,
      _SlsDocItmOvrlSupplyBlockSts,
      _MRPArea,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ItemBillingPlan'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ItemBillingPlan'
      _BillingPlan,
      _PrecedingProcFlowDocItem,
      _SubsequentProcFlowDocItem,

      //_ANA associations
      _SalesOrderType,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesOffice,
      _SalesGroup,
      _SoldToParty,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDDocumentReason,
      _ShippingCondition,
      _ShipToParty,
      _PayerParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee,

      _ConsumptionPosting,
      //--[ GENERATED:012:GFBfhxvv7jY4otz}RhcFP0
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _OrigMaterialText,
      @Consumption.hidden: true
      _ShippingPointText
      // ]--GENERATED

}
where
  SalesDocumentItem.SDDocumentCategory = 'C';
```
