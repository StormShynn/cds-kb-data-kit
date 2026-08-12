---
name: I_SALESORDERWITHOUTCHARGEITEM
description: "Sales OrderWITHOUTCHARGEITEM"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SALESORDERWITHOUTCHARGEITEM

**Sales OrderWITHOUTCHARGEITEM**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  | `cast(SalesDocument as sales_order_without_charge preserving type)` |  |  |
| `SalesOrderWithoutChargeItem` | ✓ | |  | `cast(SalesDocumentItem as sales_order_without_charge_itm preserving type)` |  |  |
| `SlsOrdWthoutChrgItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
| `SalesOrderWthoutChrgItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `CompletionRule` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `MaterialSubstitutionReason` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BOMExplosionDate` |  | |  |  |  |  |
| `ProdAvailabilityCheckGroup` |  | |  |  |  |  |
| `SalesOrderWthoutChrgItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `TargetDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `ConfdDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `CommittedDelivQtyInOrdQtyUnit` |  | |  |  |  |  |
| `CommittedDelivCreationDate` |  | |  |  |  |  |
| `CommittedDeliveryDate` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `TargetToBaseQuantityDnmntr` |  | |  |  |  |  |
| `TargetToBaseQuantityNmrtr` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SalesDeal` |  | |  |  |  |  |
| `SalesPromotion` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `SalesDocItemSupplyBlockReason` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `SalesOrderWthoutChrgCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `OpenDeliveryLeadingUnitCode` |  | |  |  |  |  |
| `ItemIsDeliveryRelevant` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  |  |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `DeliveryConfirmationStatus` |  | |  |  |  |  |
| `PurchaseConfirmationStatus` |  | |  |  |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `SlsDocItmOvrlSupplyBlockStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `PricingIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `ChmlCmplncStatus` |  | |  |  |  |  |
| `DangerousGoodsStatus` |  | |  |  |  |  |
| `SafetyDataSheetStatus` |  | |  |  |  |  |
| `TrdCmplncEmbargoSts` |  | |  |  |  |  |
| `TrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  | `cast( SalesDocumentType as sd_slsord_without_charge_type preserving type )` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SalesOrderWithoutChargeDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `SalesEmployeeWorkAgreement` |  | |  |  |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  |  |  |  |
| `_SalesOrderWithoutChargeType` | | ✓ | | | | |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_MaterialPlant` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialSubstitutionReason` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_MaterialPricingGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_TargetQuantityUnit` | | ✓ | | | | |
| `_RequestedQuantityUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_DeliveryDateTypeRule` | | ✓ | | | | |
| `_PartialDeliveryItem` | | ✓ | | | | |
| `_Route` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_ItemIsBillingRelevant` | | ✓ | | | | |
| `_ItemBillingBlockReason` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SlsDocItemSupplyBlockReason` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicData_2` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSDDocumentItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_DeliveryConfirmationStatus` | | ✓ | | | | |
| `_PurchaseConfirmationStatus` | | ✓ | | | | |
| `_TotalDeliveryStatus` | | ✓ | | | | |
| `_DeliveryStatus` | | ✓ | | | | |
| `_DeliveryBlockStatus` | | ✓ | | | | |
| `_SlsDocItmOvrlSupplyBlockSts` | | ✓ | | | | |
| `_OrderRelatedBillingStatus` | | ✓ | | | | |
| `_BillingBlockStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_PricingIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_SDDocumentRejectionStatus` | | ✓ | | | | |
| `_TotalSDDocReferenceStatus` | | ✓ | | | | |
| `_BillingPlan` | | ✓ | | | | |
| `_ChmlCmplncStatus` | | ✓ | | | | |
| `_DangerousGoodsStatus` | | ✓ | | | | |
| `_SafetyDataSheetStatus` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_TrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_TrdCmplncEmbargoSts` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_OrigMaterialText` | | ✓ | | | | |
| `_ShippingPointText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutChargeType` | `I_SalesOrderWithoutChargeType` | [0..1] |
| `_SalesOrderWithoutCharge` | `I_SalesOrderWithoutCharge` | [1..1] |
| `_ScheduleLine` | `I_SlsOrdWthoutChrgSchedLine` | [0..*] |
| `_Partner` | `I_SlsOrdWthoutChrgItmPartner` | [0..*] |
| `_PricingElement` | `I_SlsOrdWthoutChrgItmPrcgElmnt` | [0..*] |
| `_HigherLevelItem` | `I_SalesOrderWithoutChargeItem` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Item for Sales Order Without Charge'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Partner', '_CreatedByUser', '_ShippingPointText', '_MaterialText', '_ProductText' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSOWTHOCHRGITM',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   representativeKey: 'SalesOrderWithoutChargeItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]   
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'SalesOrderWithoutChargeItem'  

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrderWithoutCharge'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem'],
                    tableElement: ['vbeln', 'posnr']
                },   
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem'],
                    tableElement: ['vbeln', 'vposn']
                }       
            ]
        }
    }
 }

define view I_SalesOrderWithoutChargeItem 
  as select from  I_SalesDocumentItem  as  SalesDocumentItem
  
  //Associations
  association [0..1] to I_SalesOrderWithoutChargeType as _SalesOrderWithoutChargeType on  $projection.SalesOrderWithoutChargeType  = _SalesOrderWithoutChargeType.SalesOrderWithoutChargeType
  association [1..1] to I_SalesOrderWithoutCharge     as _SalesOrderWithoutCharge     on  $projection.SalesOrderWithoutCharge      = _SalesOrderWithoutCharge.SalesOrderWithoutCharge 
  association [0..*] to I_SlsOrdWthoutChrgSchedLine   as _ScheduleLine                on  $projection.SalesOrderWithoutCharge      = _ScheduleLine.SalesOrderWithoutCharge
                                                                                      and $projection.SalesOrderWithoutChargeItem  = _ScheduleLine.SalesOrderWithoutChargeItem
  association [0..*] to I_SlsOrdWthoutChrgItmPartner  as _Partner                     on  $projection.SalesOrderWithoutCharge      = _Partner.SalesOrderWithoutCharge
                                                                                      and $projection.SalesOrderWithoutChargeItem  = _Partner.SalesOrderWithoutChargeItem  
  association [0..*] to I_SlsOrdWthoutChrgItmPrcgElmnt as _PricingElement             on  $projection.SalesOrderWithoutCharge     = _PricingElement.SalesOrderWithoutCharge
                                                                                      and $projection.SalesOrderWithoutChargeItem = _PricingElement.SalesOrderWithoutChargeItem                                                                                                                                                                                                                                                                                                                                                         
  association [0..1] to I_SalesOrderWithoutChargeItem as _HigherLevelItem             on  $projection.SalesOrderWithoutCharge      = _HigherLevelItem.SalesOrderWithoutCharge 
                                                                                      and $projection.HigherLevelItem              = _HigherLevelItem.SalesOrderWithoutChargeItem                                                                                   
                                                                                                                                                                         
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic      as _Extension                   on  $projection.SalesOrderWithoutCharge      = _Extension.SalesDocument
                                                                                      and $projection.SalesOrderWithoutChargeItem  = _Extension.SalesDocumentItem  
{
      //Key
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutCharge'
      key cast(SalesDocument as sales_order_without_charge preserving type)         as SalesOrderWithoutCharge,
      @ObjectModel.text.element: 'SalesOrderWthoutChrgItemText'
      key cast(SalesDocumentItem as sales_order_without_charge_itm preserving type) as SalesOrderWithoutChargeItem,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory             as SlsOrdWthoutChrgItemCategory,
      SalesDocumentItemType                 as SalesOrderWthoutChrgItemType,
      IsReturnsItem,
      CompletionRule,

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
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product' 
      Material,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      DeliveryGroup,
      ProductConfiguration,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_MRPArea'
      MRPArea,
      BillOfMaterial,
      BOMExplosionDate,
      ProdAvailabilityCheckGroup,

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                 as  SalesOrderWthoutChrgItemText,
      PurchaseOrderByCustomer,
      @Analytics.internalName: #LOCAL
      CustomerPurchaseOrderDate,
      UnderlyingPurchaseOrderItem,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdDelivQtyInOrderQtyUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetDelivQtyInOrderQtyUnit,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdDeliveryQtyInBaseUnit,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      
      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      CommittedDelivQtyInOrdQtyUnit,
      CommittedDelivCreationDate,
      CommittedDeliveryDate,
      
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      TargetQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      TargetQuantityUnit,
      TargetToBaseQuantityDnmntr,
      TargetToBaseQuantityNmrtr,
      
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      RequestedQuantity,
      
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      RequestedQuantityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantityInBaseUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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

      //Quotation
      ItemOrderProbabilityInPercent,
      
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
      ExchangeRateDate,
      PriceDetnExchangeRate,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,

      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      SalesDocumentCondition as SalesOrderWthoutChrgCondition,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      
      //Shipping
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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
      @ObjectModel.foreignKey.association: '_DeliveryDateTypeRule'       
      DeliveryDateTypeRule,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartialDeliveryItem'
      PartialDeliveryIsAllowed,
      MaxNmbrOfPartialDelivery,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinDeliveryQtyInBaseUnit,
      
      //Incoterms     
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,       
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      SalesDocumentItem.OrderCombinationIsAllowed,
      OpenDeliveryLeadingUnitCode,
      ItemIsDeliveryRelevant,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,
      BillingPlan,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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
      @ObjectModel.foreignKey.association: '_ProfitCenter'      
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
      ProfitabilitySegment_2,
      OriginSDDocument,
      OriginSDDocumentItem,

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
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SlsDocItmOvrlSupplyBlockSts'
      SlsDocItmOvrlSupplyBlockStatus,
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
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      TotalSDDocReferenceStatus,
      //Product compliance fields
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      ChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      SafetyDataSheetStatus,
      //International Trade compliance fields
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      TrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'            
      OvrlTrdCmplncLegalCtrlChkSts,   
           
      //_ANA Fields
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutChargeType'
      cast( SalesDocumentType as sd_slsord_without_charge_type preserving type )  as SalesOrderWithoutChargeType,
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
      SalesDocumentDate as SalesOrderWithoutChargeDate,
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
      _SalesOrderWithoutCharge,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine, 
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,       
      _ItemCategory,
      _CreatedByUser,
      _Division,
      
      //Product
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
      _Plant,
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
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _ReferenceSDDocumentCategory,
      _HigherLevelItem, 
           
      _SDProcessStatus,
      _DeliveryConfirmationStatus,
      _PurchaseConfirmationStatus,
      _TotalDeliveryStatus,
      _DeliveryStatus,
      _DeliveryBlockStatus,
      _SlsDocItmOvrlSupplyBlockSts,  
      _OrderRelatedBillingStatus,
      _BillingBlockStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _SDDocumentRejectionStatus,
      _TotalSDDocReferenceStatus,
      _BillingPlan,
      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _SafetyDataSheetStatus,
      _OvrlTrdCmplncLegalCtrlChkSts,
      _TrdCmplncSnctndListChkSts,
      _TrdCmplncEmbargoSts, 
      _MRPArea,  
           
      //_ANA associations
      _SalesOrderWithoutChargeType,
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
      
     //--[ GENERATED:012:GFBfhyK17kY4ofNN1pz{RG
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
where SalesDocumentItem.SDDocumentCategory = 'I';
```
