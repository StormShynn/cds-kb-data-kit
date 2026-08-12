---
name: I_PHYSINVTRYDOCUMENTITEMTP
description: "Physinvtrydocumentitemtp"
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - interface-view
  - transactional-processing
  - document
  - item-level
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCUMENTITEMTP

**Physinvtrydocumentitemtp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocument` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocumentItem` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `PhysicalInventoryStockType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `ScheduleLine` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `StockOwner` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CountedByUser` |  | |  |  |  |  |
| `PhysicalInventoryLastCountDate` |  | |  |  |  |  |
| `AdjustmentPostingMadeByUser` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PhysicalInventoryItemIsCounted` |  | |  |  |  |  |
| `PhysInvtryDifferenceIsPosted` |  | |  |  |  |  |
| `PhysInvtryItemIsRecounted` |  | |  |  |  |  |
| `PhysInvtryItemIsDeleted` |  | |  |  |  |  |
| `IsHandledInAltvUnitOfMsr` |  | |  |  |  |  |
| `BookQtyBfrCountInMatlBaseUnit` |  | |  |  |  |  |
| `PhysicalInventoryItemIsZero` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `MaterialBaseUnit` |  | |  |  |  |  |
| `QuantityInUnitOfEntry` |  | |  |  |  |  |
| `UnitOfEntry` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `PhysInvtryRecountDocument` |  | |  |  |  |  |
| `DifferenceAmountInCoCodeCrcy` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CycleCountType` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `SlsPrcAmtInclVATInCoCodeCrcy` |  | |  |  |  |  |
| `SlsPrcAmtExclVATInCoCodeCrcy` |  | |  |  |  |  |
| `DiffAmountOnCountEntryInCCCrcy` |  | |  |  |  |  |
| `EnteredSlsAmtInCoCodeCrcy` |  | |  |  |  |  |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  |  |  |
| `IsValueOnlyMaterial` |  | |  |  |  |  |
| `PhysInvtryCtAmtInCoCodeCrcy` |  | |  |  |  |  |
| `BookQtyAmountInCoCodeCrcy` |  | |  |  |  |  |
| `ProductCategory` |  | |  |  |  |  |
| `ReasonForPhysInvtryDifference` |  | |  |  |  |  |
| `CrossPlantConfigurableMaterial` |  | |  |  |  |  |
| `PhysInvtryDiffIsDistributed` |  | |  |  |  |  |
| `_PhysicalInventoryDocument` | | ✓ | | | | |
| `_CountSerialNumber` | | ✓ | | | | |
| `_BookSerialNumber` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_CrossPlantConfigProductText` | | ✓ | | | | |
| `_InventorySpecialStockTypeText` | | ✓ | | | | |
| `_PhysInvtryStockTypeText` | | ✓ | | | | |
| `_ProductCategoryText` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlantBasic` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Physical Inventory Document Item - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
      sizeCategory: #XL,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
   }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}


define view entity I_PhysInvtryDocumentItemTP
  as projection on R_PhysInvtryDocumentItemTP
{
  key FiscalYear,
  key PhysicalInventoryDocument,
  key PhysicalInventoryDocumentItem,
      
      @ObjectModel.text.association: '_ProductText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ] }
      Material,
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ] }
      Plant,
       
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' },
                                               additionalBinding: [{ localElement: 'Plant', element: 'Plant'}],
                                               useAsTemplate: true } ] }
      StorageLocation,
      Batch,
      @ObjectModel.text.association: '_InventorySpecialStockTypeText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_InventorySpecialStockType', element: 'InventorySpecialStockType' }, useAsTemplate: true } ] }
      InventorySpecialStockType,
      ValuationType,
      @ObjectModel.text.association: '_PhysInvtryStockTypeText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryStockType', element: 'PhysicalInventoryStockType' }, useAsTemplate: true } ] }
      PhysicalInventoryStockType,

      SalesOrder,
      SalesOrderItem,
      ScheduleLine,
      
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true } ] }
      Supplier,
      
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true } ] }
      Customer,
      StockOwner,
      
      LastChangedByUser,

      LastChangeDate,
      CountedByUser,
      PhysicalInventoryLastCountDate,
      AdjustmentPostingMadeByUser,
      PostingDate,
      PhysicalInventoryItemIsCounted,
      PhysInvtryDifferenceIsPosted,
      PhysInvtryItemIsRecounted,
      PhysInvtryItemIsDeleted,
      IsHandledInAltvUnitOfMsr,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      BookQtyBfrCountInMatlBaseUnit,
      PhysicalInventoryItemIsZero,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      Quantity,
      MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfEntry'
      QuantityInUnitOfEntry,
      UnitOfEntry,
      MaterialDocumentYear,
      MaterialDocument,
      MaterialDocumentItem,
      PhysInvtryRecountDocument,
      @Semantics.amount.currencyCode: 'Currency'
      DifferenceAmountInCoCodeCrcy,
      Currency,
      CycleCountType,
      WBSElementInternalID,
      @Semantics.amount.currencyCode: 'Currency'
      SlsPrcAmtInclVATInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      SlsPrcAmtExclVATInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      DiffAmountOnCountEntryInCCCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      EnteredSlsAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      SlsPriceAmountInCoCodeCrcy,
      IsValueOnlyMaterial,
      @Semantics.amount.currencyCode: 'Currency'
      PhysInvtryCtAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      BookQtyAmountInCoCodeCrcy,
      @ObjectModel.text.association: '_ProductCategoryText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_ProductCategory', element: 'ProductCategory' }, useAsTemplate: true } ] }
      ProductCategory,
      ReasonForPhysInvtryDifference,
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ] }
      CrossPlantConfigurableMaterial,
      PhysInvtryDiffIsDistributed,

      // Association
      _PhysicalInventoryDocument : redirected to parent I_PhysicalInventoryDocumentTP,
      _CountSerialNumber : redirected to composition child I_PhysInvtryCountSerialNmbrTP,
      _BookSerialNumber : redirected to composition child I_PhysInvtryBookSerialNmbrTP,

      // For Authorization
      _Supplier,
      _Customer,
      
      
      _ProductText,
      _CrossPlantConfigProductText,
      _InventorySpecialStockTypeText, 
      _PhysInvtryStockTypeText,
      _ProductCategoryText,


      //      _Material,
      //      _Product,
      //      _CrossPlantConfigurableMatl,
      //      _CrossPlantConfigurableProd,
      //      _LastChangedByUser,
      //      _CountedByUser,
      //      _AdjustmentPostingMadeByUser,
      //      _MaterialBaseUnit,
      //      _Currency,
      //      _SalesOrder,
      //      _SalesOrderItem,
      //      _SalesOrderScheduleLine,
      //      _Plant,
      //      _StorageLocation,
      //      _ProductStorageLocation,
      //      _UnitOfEntry,
      //      _PhysInvtryStatusT,
      //      _PhysInvtryDocHeader,
      //      _PhysicalInventoryStockType,
      //      _InventorySpecialStockType,
      //      _ProductCategory,
      //      _WBSElement,
      //      _PhysInvtryDocFiscalYear,


      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _CustomerCompanyByPlant,

      //Datasource Extensibility
      @Consumption.filter.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ProductPlantBasic'
      _ProductPlant,
      @Consumption.filter.hidden: true
      _ProductPlantBasic,
      @Consumption.filter.hidden: true
      _Batch
}
```
