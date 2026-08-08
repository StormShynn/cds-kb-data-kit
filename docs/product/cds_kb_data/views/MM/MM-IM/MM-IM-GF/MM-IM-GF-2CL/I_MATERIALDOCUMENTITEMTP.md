---
name: I_MATERIALDOCUMENTITEMTP
description: "Materialdocumentitemtp"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - transactional-processing
  - material
  - document
  - item-level
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTITEMTP

**Materialdocumentitemtp**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `MaterialDocumentLine` |  | |  |  |  |  |
| `MaterialDocumentParentLine` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `MaterialBaseUnit` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `InventoryStockType` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `ReversedMaterialDocumentYear` |  | |  |  |  |  |
| `ReversedMaterialDocument` |  | |  |  |  |  |
| `ReversedMaterialDocumentItem` |  | |  |  |  |  |
| `GoodsMovementIsCancelled` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `IsAutomaticallyCreated` |  | |  |  |  |  |
| `MaterialDocumentPostingType` |  | |  |  |  |  |
| `ReservationItemRecordType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `IssgOrRcvgMaterial` |  | |  |  |  |  |
| `IssuingOrReceivingPlant` |  | |  |  |  |  |
| `IssuingOrReceivingStorageLoc` |  | |  |  |  |  |
| `IssgOrRcvgBatch` |  | |  |  |  |  |
| `IssgOrRcvgSpclStockInd` |  | |  |  |  |  |
| `IssuingOrReceivingValType` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `GoodsMovementRefDocType` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `SerialNumbersAreCreatedAutomly` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderItem` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  |  |  |
| `MaterialDocumentItemText` |  | |  |  |  |  |
| `GdsMvtExtAmtInCoCodeCrcy` |  | |  |  |  |  |
| `ProductStandardID` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `ReferenceDocumentFiscalYear` |  | |  |  |  |  |
| `InvtryMgmtRefDocumentItem` |  | |  |  |  |  |
| `InvtryMgmtReferenceDocument` |  | |  |  |  |  |
| `_GoodsMovementType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_GoodsMovementReasonCode` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_MaterialBaseUnit` | | ✓ | | | | |
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_SerialNumber` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Material Document Item - TP'
@ObjectModel.usageType: {
    serviceQuality: #C,
    sizeCategory  : #XXL,
    dataClass     : #TRANSACTIONAL }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@Metadata.ignorePropagatedAnnotations: true
define view entity I_MaterialDocumentItemTP
  as projection on R_MaterialDocumentItemTP as _MaterialDocumentItem
{
  key MaterialDocumentYear,
  key MaterialDocument,
  key MaterialDocumentItem,


      MaterialDocumentLine,
      MaterialDocumentParentLine,

      GoodsMovementType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
      Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true } ]
      StorageLocation,

      InventoryUsabilityCode,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      QuantityInEntryUnit, // todo: check if they can differ
      EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      QuantityInBaseUnit, //todo: check if they can differ
      MaterialBaseUnit,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' },
                                      additionalBinding: [{ element: 'Material', localElement: 'Material' },
                                                          { element: 'Plant', localElement: 'Plant' } ], useAsTemplate: true } ]
      Batch,
      ShelfLifeExpirationDate,
      ManufactureDate,
      InventorySpecialStockType,

      @Consumption.valueHelpDefinition: [{entity: { name: 'I_Customer_VH', element: 'Customer' }, useAsTemplate: true } ]
      Customer,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true } ]
      Supplier,

      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      InventoryStockType,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      InventoryValuationType,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      AccountAssignmentCategory,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      ReversedMaterialDocumentYear,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      ReversedMaterialDocument,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      ReversedMaterialDocumentItem,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      GoodsMovementIsCancelled,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      FiscalYearPeriod,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      FiscalYearVariant,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      @Semantics.booleanIndicator: true
      IsAutomaticallyCreated,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      MaterialDocumentPostingType,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      ReservationItemRecordType,
      @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
      DebitCreditCode,
      
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      IssgOrRcvgMaterial,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
      IssuingOrReceivingPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true,
      additionalBinding: [{ element: 'Plant', localElement: 'IssuingOrReceivingPlant' }]
      } ]
      IssuingOrReceivingStorageLoc,
      IssgOrRcvgBatch,
      IssgOrRcvgSpclStockInd,
      IssuingOrReceivingValType,

      WBSElementInternalID,
      Reservation,
      ReservationItem,

      GoodsMovementRefDocType, // todo: check if can be determined based on goodsmvtcode
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GoodsMovementReasonCode', element: 'GoodsMovementReasonCode' },useAsTemplate: true, additionalBinding: [{ element: 'GoodsMovementType', localElement: 'GoodsMovementType' }] } ]
      GoodsMovementReasonCode,

      PurchaseOrder,
      PurchaseOrderItem,
      IsCompletelyDelivered,

      SerialNumbersAreCreatedAutomly,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' }, useAsTemplate: true } ]
      CostCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true } ]
      GLAccount,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' },useAsTemplate: true } ]
      ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' },useAsTemplate: true } ]
      SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' }, additionalBinding: [{ localElement: 'SalesOrder', element: 'SalesOrder' }],useAsTemplate: true } ]
      SalesOrderItem,
      SalesOrderScheduleLine,
      @Consumption.valueHelpDefinition: [ { entity:  { name: 'I_DeliveryDocumentStdVH', element: 'DeliveryDocument' }, useAsTemplate: true }]
      DeliveryDocument,
      DeliveryDocumentItem,
      GoodsRecipientName,
      UnloadingPointName,
      ReservationIsFinallyIssued,
      ManufacturingOrder,
      ManufacturingOrderItem,

      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,

      MaterialDocumentItemText,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GdsMvtExtAmtInCoCodeCrcy,
      ProductStandardID,
      CompanyCodeCurrency,

      ReferenceDocumentFiscalYear,
      InvtryMgmtRefDocumentItem,
      InvtryMgmtReferenceDocument,

      //Associations
      _GoodsMovementType,
      _Product,
      _Plant,
      _StorageLocation,
      _GoodsMovementReasonCode,
      _EntryUnit,
      _MaterialBaseUnit,


      _MaterialDocumentHeader : redirected to parent I_MaterialDocumentTP,
      _SerialNumber           : redirected to composition child I_MaterialDocItemSerialNoTP

      //      HierarchyNodeLevel, //todo: check if needed, ATC
      //      StorageType, todo: check old wm still supported
      //      StorageBin,  todo: check old wm still supported
      //      IssgOrRcvgStockSegment,
      //      StockSegment,
      //      ProfitabilitySegment, ATC
      //      CostObject, // todo: check if needed
      //      BusinessArea,
}
```
