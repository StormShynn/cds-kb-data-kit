---
name: I_STOCKTRANSPORTORDERITEMTP
description: "Stocktransportorderitemtp"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - transport
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKTRANSPORTORDERITEMTP

**Stocktransportorderitemtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `STOItemUniqueID` |  | |  |  |  |  |
| `StockTransportOrderItemText` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `OutwardDeliveryIsComplete` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `RequisitionerName` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `STOItemCategory` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `DeliveryDocumentType` |  | |  |  |  |  |
| `IssuingStorageLocation` |  | |  |  |  |  |
| `IsStatisticalItem` |  | |  |  |  |  |
| `PurchasingParentItem` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `EffectiveAmount` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `PartialInvoiceDistribution` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `GoodsReceiptDurationInDays` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `PurgDocSubitemCategory` |  | |  |  |  |  |
| `StockTransportOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `Subcontractor` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `ValuationCategory` |  | |  |  |  |  |
| `_StockTransportOrder` | | ✓ | | | | |
| `_STOScheduleLine` | | ✓ | | | | |
| `_STOShipping` | | ✓ | | | | |
| `_STOItemNote` | | ✓ | | | | |
| `_STOItemPricingElement` | | ✓ | | | | |
| `_STOAccountAssignment` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ValuationCategoryText` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  sapObjectNodeType: {
     name: 'StockTransportOrderItem'
  },

  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem' ],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Item in Stock Transport Order - TP'

define view entity I_StockTransportOrderItemTP
  as projection on R_StockTransportOrderItemTP as _StockTransportOrderItemTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
      STOItemUniqueID,
      StockTransportOrderItemText,
//      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      DocumentCurrency,
      PurchasingDocumentDeletionCode,
//      @ObjectModel.text.association: '_ProductGroupText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProductGroup_2', element: 'ProductGroup' }, useAsTemplate: true }]       //CustomUI
      ProductGroup,
//      @ObjectModel.text.association: '_ProductText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true }]       //CustomUI
      Product,
//      @ObjectModel.text.association: '_ProductTypeCodeText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Producttypecodevh', element: 'ProductTypeCode' }, useAsTemplate: true }]       //CustomUI
      ProductTypeCode,
//      @ObjectModel.text.association: '_ManufacturerMaterialText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true }]       //CustomUI
      ManufacturerMaterial,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]          //CustomUI
      CompanyCode,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true }]       //CustomUI
      StorageLocation,
//      @ObjectModel.text.association: '_OrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      OrderQuantityUnit,
      IsCompletelyDelivered,
      GoodsReceiptIsExpected,
      OutwardDeliveryIsComplete,
      InvoiceIsExpected,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,
      RequisitionerName,
//      @ObjectModel.text.association: '_BaseUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      BaseUnit,
//      @ObjectModel.text.association: '_STOItemCategoryText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PurgDocumentItemCategory', element: 'PurchasingDocumentItemCategory' }, useAsTemplate: true }]       //CustomUI
      STOItemCategory,
//      @ObjectModel.text.association: '_ItemVolumeUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      ItemVolumeUnit,
//      @ObjectModel.text.association: '_ItemWeightUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      ItemWeightUnit,
      DeliveryDocumentType,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true }]       //CustomUI
      IssuingStorageLocation,
      IsStatisticalItem,
      PurchasingParentItem,
//      @ObjectModel.text.association: '_AcctAssignmentCategoryText'
      AccountAssignmentCategory,
      PurchasingInfoRecord,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      EffectiveAmount,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      
      MultipleAcctAssgmtDistribution,
      PartialInvoiceDistribution,
      
      PartialDeliveryIsAllowed,
      GoodsReceiptDurationInDays,
      InventoryUsabilityCode,
      PurgDocSubitemCategory,
      StockTransportOrderType,
      PurchasingOrganization,
      PurchasingGroup,
//      @ObjectModel.text.association: '_SupplierConfControlKeyText'
      SupplierConfirmationControlKey,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      Subcontractor,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true }]       //CustomUI
      Customer,
      
      Batch,
      ValuationType,
      ValuationCategory,

      /* Composition */
      _StockTransportOrder   : redirected to parent I_StockTransportOrderTP,
      _STOScheduleLine       : redirected to composition child I_STOScheduleLineTP,
      _STOShipping           : redirected to composition child I_STOShippingTP,
      _STOItemNote           : redirected to composition child I_STOItemNoteTP,
      _STOItemPricingElement : redirected to composition child I_STOItemPricingElementTP,
      
//      @Semantics.valueRange.maximum: '1'
      _STOAccountAssignment : redirected to composition child I_STOAccountAssignmentTP,
      
      /* Associations */
      _CompanyCode,
      _Product, // --?
      _ProductGroup,
      _Plant,
      _PurgDocumentItemCategory,
      _StorageLocation,
      _ValuationCategoryText
      
      /* Text associations for CustomUI */
//      _DocumentCurrencyText,
//      _ProductGroupText,
//      _ProductText,
//      _ProductTypeCodeText,
//      _OrderQuantityUnitText,
//      _BaseUnitText,
//      _STOItemCategoryText,
//      _ItemVolumeUnitText,
//      _ItemWeightUnitText,
//      _AcctAssignmentCategoryText,
//      _SupplierConfControlKeyText

}
```
