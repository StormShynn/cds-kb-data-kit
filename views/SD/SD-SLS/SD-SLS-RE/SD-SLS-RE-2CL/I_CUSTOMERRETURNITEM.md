---
name: I_CUSTOMERRETURNITEM
description: Customerreturnitem
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - customer
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNITEM

**Customerreturnitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  | `cast(SalesDocumentItem.SalesDocument as vdm_customer_return preserving type)` |  |  |
| `CustomerReturnItem` | ✓ | |  | `cast(SalesDocumentItem.SalesDocumentItem as vdm_customer_return_item preserving type)` |  |  |
| `CustomerReturnItemUUID` |  | |  | `SalesDocumentItemUUID` |  |  |
| `CustomerReturnItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
| `CustomerReturnItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BOMExplosionDate` |  | |  |  |  |  |
| `CustomerReturnItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `CorrespncExternalReference` |  | |  |  |  |  |
| `CorrespncExtRefByShipToParty` |  | |  |  |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |  |  |
| `UndrlgPurOrdItmByShipToParty` |  | |  |  |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `TargetDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `ConfdDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
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
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `ReturnReason` |  | |  |  |  |  |
| `ReturnsRefundExtent` |  | |  |  |  |  |
| `RetsMgmtProcessingBlock` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
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
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `ItemIsDeliveryRelevant` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `ProductTaxClassification1` |  | |  |  |  |  |
| `ProductTaxClassification2` |  | |  |  |  |  |
| `ProductTaxClassification3` |  | |  |  |  |  |
| `ProductTaxClassification4` |  | |  |  |  |  |
| `ProductTaxClassification5` |  | |  |  |  |  |
| `ProductTaxClassification6` |  | |  |  |  |  |
| `ProductTaxClassification7` |  | |  |  |  |  |
| `ProductTaxClassification8` |  | |  |  |  |  |
| `ProductTaxClassification9` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
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
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `BusSolnOrdItemBundleItem` |  | |  |  |  |  |
| `RetsMgmtProcess` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `PricingIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  | `cast(SalesDocumentItem.SalesDocumentType as vdm_customer_return_type preserving type)` |  |  |
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
| `CustomerReturnDate` |  | |  | `SalesDocumentDate` |  |  |
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
| `CustomerReturnCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `_CustomerReturn` | | ✓ | | | | |
| `_CustomerReturnType` | | ✓ | | | | |
| `_RetsMgmtProcessItem` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerReturn` | `I_CustomerReturn` | [1..1] |
| `_CustomerReturnType` | `I_CustomerReturnType` | [0..1] |
| `_RetsMgmtProcessItem` | `I_RetsMgmtProcessItem` | [0..1] |
| `_ScheduleLine` | `I_CustomerReturnScheduleLine` | [0..*] |
| `_HigherLevelItem` | `I_CustomerReturnItem` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Returns Order Item'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDCUSTRETURNITM',
  preserveKey: true,
  compiler.compareFilter: true
}
@ObjectModel: {
  representativeKey: 'CustomerReturnItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #XL
  }
}
@Analytics.dataCategory: #DIMENSION
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnItem'   

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['CustomerReturn', 'CustomerReturnItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CustomerReturn'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CustomerReturn', 'CustomerReturnItem'],
                    tableElement: ['vbeln', 'posnr']
                },   
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CustomerReturn', 'CustomerReturnItem'],
                    tableElement: ['vbeln', 'vposn']
                }       
            ]
        }
    }
 }

define view I_CustomerReturnItem
  as select from           I_SalesDocumentItem  as SalesDocumentItem
    left outer to one join I_SalesDocumentBasic as SalesDocumentBasic on SalesDocumentItem.SalesDocument = SalesDocumentBasic.SalesDocument

  //Associations
  association [1..1] to I_CustomerReturn             as _CustomerReturn      on  $projection.CustomerReturn     = _CustomerReturn.CustomerReturn
  association [0..1] to I_CustomerReturnType         as _CustomerReturnType  on  $projection.CustomerReturnType = _CustomerReturnType.CustomerReturnType
  association [0..1] to I_RetsMgmtProcessItem        as _RetsMgmtProcessItem on  $projection.RetsMgmtProcess    = _RetsMgmtProcessItem.RetsMgmtProcess
                                                                             and $projection.CustomerReturnItem = _RetsMgmtProcessItem.RetsMgmtProcessItem
  association [0..*] to I_CustomerReturnScheduleLine as _ScheduleLine        on  $projection.CustomerReturn     = _ScheduleLine.CustomerReturn
                                                                             and $projection.CustomerReturnItem = _ScheduleLine.CustomerReturnItem
  
  association [0..1] to I_CustomerReturnItem         as _HigherLevelItem     on  $projection.CustomerReturn     = _HigherLevelItem.CustomerReturn
                                                                             and $projection.HigherLevelItem    = _HigherLevelItem.CustomerReturnItem
  
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic     as _Extension           on  SalesDocumentItem.SalesDocument     = _Extension.SalesDocument
                                                                             and SalesDocumentItem.SalesDocumentItem = _Extension.SalesDocumentItem
{
      //key
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CustomerReturnStdVH',
                     element: 'CustomerReturn' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CustomerReturn'
  key cast(SalesDocumentItem.SalesDocument as vdm_customer_return preserving type)          as CustomerReturn,
      @ObjectModel.text.element: 'CustomerReturnItemText'
  key cast(SalesDocumentItem.SalesDocumentItem as vdm_customer_return_item preserving type) as CustomerReturnItem,

      SalesDocumentItem.SalesDocumentItemUUID                                               as CustomerReturnItemUUID,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItem.SalesDocumentItemCategory                                           as CustomerReturnItemCategory,
      SalesDocumentItem.SalesDocumentItemType                                               as CustomerReturnItemType,
      SalesDocumentItem.IsReturnsItem,

      //Admin
      SalesDocumentItem.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      SalesDocumentItem.CreationDate,
      SalesDocumentItem.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SalesDocumentItem.LastChangeDate,

      //Org
      @ObjectModel.foreignKey.association: '_Division'
      SalesDocumentItem.Division,

      //Product
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      SalesDocumentItem.Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Product'
      SalesDocumentItem._Material,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductVH',
                     element: 'Product' }
        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Product'
      SalesDocumentItem.Product,
      SalesDocumentItem._Product,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      SalesDocumentItem.MaterialGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductGroup'
      SalesDocumentItem._MaterialGroup,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProductGroup'
      SalesDocumentItem.ProductGroup,
      SalesDocumentItem._ProductGroup,

      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      SalesDocumentItem.OriginallyRequestedMaterial,
      SalesDocumentItem.MaterialByCustomer,
      SalesDocumentItem.InternationalArticleNumber,
      SalesDocumentItem.Batch,
      SalesDocumentItem.ProductHierarchyNode,
      SalesDocumentItem.ProductCatalog,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      SalesDocumentItem.AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      SalesDocumentItem.AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      SalesDocumentItem.AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      SalesDocumentItem.AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      SalesDocumentItem.AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      SalesDocumentItem.Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      SalesDocumentItem.StorageLocation,
      SalesDocumentItem.ProductConfiguration,
      SalesDocumentItem.BillOfMaterial,
      SalesDocumentItem.BOMExplosionDate,

      //Sales
      @Semantics.text: true
      SalesDocumentItem.SalesDocumentItemText                                               as CustomerReturnItemText,
      SalesDocumentItem.PurchaseOrderByCustomer,
      SalesDocumentItem.PurchaseOrderByShipToParty,
      SalesDocumentItem.CorrespncExternalReference,
      SalesDocumentItem.CorrespncExtRefByShipToParty,
      SalesDocumentItem.UnderlyingPurchaseOrderItem,
      SalesDocumentItem.UndrlgPurOrdItmByShipToParty,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustPurOrdTypeByShipToParty'
      SalesDocumentItem.CustPurOrdTypeByShipToParty,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      SalesDocumentItem.CustomerPurchaseOrderType,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.OrderQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.ConfdDelivQtyInOrderQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.TargetDelivQtyInOrderQtyUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      SalesDocumentItem.OrderQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.ConfdDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SalesDocumentItem.BaseUnit,
      SalesDocumentItem.OrderToBaseQuantityDnmntr,
      SalesDocumentItem.OrderToBaseQuantityNmrtr,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      SalesDocumentItem.RequestedQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      SalesDocumentItem.RequestedQuantityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.RequestedQuantityInBaseUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesDocumentItem.ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesDocumentItem.ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      SalesDocumentItem.ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesDocumentItem.ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      SalesDocumentItem.ItemVolumeUnit,
      SalesDocumentItem.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDocumentItem.SalesDistrict,
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDealStdVH',
                     element: 'SalesDeal' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesDeal'
      SalesDocumentItem.SalesDeal,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SalesDocumentItem.CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentItem.SalesDocumentRjcnReason,
      @ObjectModel.foreignKey.association: '_ReturnReason'
      SalesDocumentItem.ReturnReason,
      @ObjectModel.foreignKey.association: '_ReturnsRefundExtent'
      SalesDocumentItem.ReturnsRefundExtent,
      SalesDocumentItem.RetsMgmtProcessingBlock,

      //Contract
      //OrderQuantityUnitDcmls,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.NetAmount,
      SalesDocumentItem.PricingDate,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SalesDocumentItem.TransactionCurrency,
      SalesDocumentItem.ExchangeRateDate,
      SalesDocumentItem.PriceDetnExchangeRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      SalesDocumentItem.NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      SalesDocumentItem.NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      SalesDocumentItem.StatisticalValueControl,
      SalesDocumentItem._StatisticalValueControl,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.TaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.CostAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal6Amount,

      //Shipping
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ShippingPointStdVH',
                     element: 'ShippingPoint' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      SalesDocumentItem.ShippingPoint,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ShippingType'
      SalesDocumentItem.ShippingType,
      SalesDocumentItem.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      SalesDocumentItem.DeliveryPriority,
      SalesDocumentItem.Route,
      SalesDocumentItem.DeliveryDateQuantityIsFixed,
      SalesDocumentItem.PartialDeliveryIsAllowed,
      SalesDocumentItem.MaxNmbrOfPartialDelivery,
      SalesDocumentItem.UnlimitedOverdeliveryIsAllowed,
      SalesDocumentItem.OverdelivTolrtdLmtRatioInPct,
      SalesDocumentItem.UnderdelivTolrtdLmtRatioInPct,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.MinDeliveryQtyInBaseUnit,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      SalesDocumentItem.IncotermsClassification,
      SalesDocumentItem.IncotermsTransferLocation,
      SalesDocumentItem.IncotermsLocation1,
      SalesDocumentItem.IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      SalesDocumentItem.IncotermsVersion,
      SalesDocumentItem.ItemIsDeliveryRelevant,

      //Billing
      SalesDocumentItem.BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      SalesDocumentItem.ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      SalesDocumentItem.ItemBillingBlockReason,
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      @Analytics.internalName: #LOCAL
      SalesDocumentItem.MatlAccountAssignmentGroup,
      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SalesDocumentItem.CustomerPaymentTerms,
      SalesDocumentItem.PaymentMethod,
      
      SalesDocumentItem.CustomerPriceGroup,
      SalesDocumentItem.MaterialPricingGroup,
      SalesDocumentItem.FixedValueDate,

      //Tax Classfication
      SalesDocumentItem.ProductTaxClassification1,
      SalesDocumentItem.ProductTaxClassification2,
      SalesDocumentItem.ProductTaxClassification3,
      SalesDocumentItem.ProductTaxClassification4,
      SalesDocumentItem.ProductTaxClassification5,
      SalesDocumentItem.ProductTaxClassification6,
      SalesDocumentItem.ProductTaxClassification7,
      SalesDocumentItem.ProductTaxClassification8,
      SalesDocumentItem.ProductTaxClassification9,

      //Accounting
      SalesDocumentItem.FiscalYear,
      SalesDocumentItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      SalesDocumentItem.CustomerAccountAssignmentGroup,
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      SalesDocumentItem.BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      @Analytics.internalName: #LOCAL
      SalesDocumentItem.ProfitCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_ControllingArea'
      SalesDocumentItem.ControllingArea,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData_2'
      SalesDocumentItem.WBSElementInternalID,
      SalesDocumentItem.OrderID,
      SalesDocumentItem.ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      SalesDocumentItem.ProfitabilitySegment,
      SalesDocumentItem.ProfitabilitySegment_2,
      SalesDocumentItem.OriginSDDocument,
      SalesDocumentItem.OriginSDDocumentItem,

      //Reference
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      SalesDocumentItem.ReferenceSDDocument,
      //--[ GENERATED:012:GFBfhyK17jY4pu9}5ALROG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' },
          additionalBinding: [{ localElement: 'ReferenceSDDocument',
                                element: 'SalesDocument' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      SalesDocumentItem.ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      SalesDocumentItem.ReferenceSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Analytics.internalName: #LOCAL
      HigherLevelItem,
      SalesDocumentItem.BusinessSolutionOrderItem,
      SalesDocumentItem.BusSolnOrdItemBundleItem,
      
      //@ObjectModel.foreignKey.association: '_RetsMgmtProcessItem'
      SalesDocumentBasic.RetsMgmtProcess,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SalesDocumentItem.SDProcessStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      SalesDocumentItem.TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      SalesDocumentItem.DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      SalesDocumentItem.DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      SalesDocumentItem.OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      SalesDocumentItem.BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      SalesDocumentItem.ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      SalesDocumentItem.ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      SalesDocumentItem.PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      SalesDocumentItem.ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SalesDocumentItem.SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      SalesDocumentItem.TotalSDDocReferenceStatus,
      
      //_ANA Fields
      @ObjectModel.foreignKey.association: '_CustomerReturnType'
      cast(SalesDocumentItem.SalesDocumentType as vdm_customer_return_type preserving type) as CustomerReturnType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesDocumentItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SalesDocumentItem.DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      SalesDocumentItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesDocumentItem.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesDocumentItem.SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SalesDocumentItem.SoldToParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      SalesDocumentItem.AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      SalesDocumentItem.AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      SalesDocumentItem.AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      SalesDocumentItem.AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      SalesDocumentItem.AdditionalCustomerGroup5,
      SalesDocumentItem.SalesDocumentDate as CustomerReturnDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SalesDocumentItem.SDDocumentReason,
      SalesDocumentItem.RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      SalesDocumentItem.ShippingCondition,
      // Analytics partner fields
      @ObjectModel.foreignKey.association: '_ShipToParty'
      SalesDocumentItem.ShipToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      SalesDocumentItem.PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      SalesDocumentItem.BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesDocumentItem.SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      SalesDocumentItem.ResponsibleEmployee,
      SalesDocumentItem.SalesEmployeeWorkAgreement,
      SalesDocumentItem.ResponsibleEmployeeWorkAgrmt,
      SalesDocumentItem.SalesDocumentCondition as CustomerReturnCondition,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                     #TO_COMPOSITION_ROOT]
      _CustomerReturn,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine,
      SalesDocumentItem._Partner,

      SalesDocumentItem._ItemCategory,
      SalesDocumentItem._CreatedByUser,
      SalesDocumentItem._Division,

      SalesDocumentItem._OriginallyRequestedMaterial,
      SalesDocumentItem._ProductHierarchyNode,
      SalesDocumentItem._AdditionalMaterialGroup1,
      SalesDocumentItem._AdditionalMaterialGroup2,
      SalesDocumentItem._AdditionalMaterialGroup3,
      SalesDocumentItem._AdditionalMaterialGroup4,
      SalesDocumentItem._AdditionalMaterialGroup5,
      SalesDocumentItem._Plant,
      SalesDocumentItem._StorageLocation,

      SalesDocumentItem._OrderQuantityUnit,
      SalesDocumentItem._BaseUnit,
      SalesDocumentItem._RequestedQuantityUnit,
      SalesDocumentItem._ItemWeightUnit,
      SalesDocumentItem._ItemVolumeUnit,
      SalesDocumentItem._SalesDistrict,
      SalesDocumentItem._SalesDeal,
      SalesDocumentItem._CustomerGroup,
      SalesDocumentItem._SalesDocumentRjcnReason,
      SalesDocumentItem._ReturnReason,
      SalesDocumentItem._ReturnsRefundExtent,

      SalesDocumentItem._NetPriceQuantityUnit,
      SalesDocumentItem._TransactionCurrency,
      SalesDocumentItem._ShippingPoint,
      SalesDocumentItem._ShippingType,
      SalesDocumentItem._DeliveryPriority,
      SalesDocumentItem._IncotermsClassification,
      SalesDocumentItem._IncotermsVersion,
      SalesDocumentItem._ItemBillingBlockReason,
      SalesDocumentItem._ItemIsBillingRelevant,
      SalesDocumentItem._CustomerPaymentTerms,
      // _PaymentMethod,
      SalesDocumentItem._CustomerAccountAssgmtGroup,
      SalesDocumentItem._BusinessArea,
      SalesDocumentItem._WBSElementBasicData_2,
      SalesDocumentItem._MatlAccountAssignmentGroup,
      SalesDocumentItem._ProfitCenter,
      SalesDocumentItem._ControllingArea,

      SalesDocumentItem._ReferenceSDDocument,
      SalesDocumentItem._ReferenceSDDocumentItem,
      SalesDocumentItem._ReferenceSDDocumentCategory,
      _HigherLevelItem,   
      _RetsMgmtProcessItem,

      SalesDocumentItem._SDProcessStatus,
      SalesDocumentItem._TotalDeliveryStatus,
      SalesDocumentItem._DeliveryStatus,
      SalesDocumentItem._DeliveryBlockStatus,
      SalesDocumentItem._OrderRelatedBillingStatus,
      SalesDocumentItem._BillingBlockStatus,
      SalesDocumentItem._ItemGeneralIncompletionStatus,
      SalesDocumentItem._ItemBillingIncompletionStatus,
      SalesDocumentItem._PricingIncompletionStatus,
      SalesDocumentItem._ItemDelivIncompletionSts,
      SalesDocumentItem._SDDocumentRejectionStatus,
      SalesDocumentItem._TotalSDDocReferenceStatus,
      
      //_ANA associations
      _CustomerReturnType,
      SalesDocumentItem._SalesOrganization,
      SalesDocumentItem._DistributionChannel,
      SalesDocumentItem._OrganizationDivision,
      SalesDocumentItem._SalesOffice,
      SalesDocumentItem._SalesGroup,
      SalesDocumentItem._SoldToParty,
      SalesDocumentItem._AdditionalCustomerGroup1,
      SalesDocumentItem._AdditionalCustomerGroup2,
      SalesDocumentItem._AdditionalCustomerGroup3,
      SalesDocumentItem._AdditionalCustomerGroup4,
      SalesDocumentItem._AdditionalCustomerGroup5,
      SalesDocumentItem._SDDocumentReason,
      SalesDocumentItem._ShippingCondition,
      SalesDocumentItem._ShipToParty,
      SalesDocumentItem._PayerParty,
      SalesDocumentItem._BillToParty,
      SalesDocumentItem._SalesEmployee,
      SalesDocumentItem._ResponsibleEmployee,
      SalesDocumentItem._CustomerPurchaseOrderType,
      SalesDocumentItem._CustPurOrdTypeByShipToParty

}
where
  SalesDocumentItem.SDDocumentCategory = 'H';
```
