---
name: I_STOSUBCONTRACTINGCOMPONENTTP
description: Stosubcontractingcomponenttp
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
  - contract
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOSUBCONTRACTINGCOMPONENTTP

**Stosubcontractingcomponenttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StockTransportOrder` | `StockTransportOrder` |
| key `StockTransportOrderItem` | `StockTransportOrderItem` |
| key `ScheduleLine` | `ScheduleLine` |
| key `ReservationItem` | `ReservationItem` |
| key `RecordType` | `RecordType` |
| `Reservation` | `Reservation` |
| `Product` | `Product` |
| `BaseUnit` | `BaseUnit` |
| `RequiredQuantity` | `RequiredQuantity` |
| `RequirementDate` | `RequirementDate` |
| `RequirementTime` | `RequirementTime` |
| `Plant` | `Plant` |
| `LatestRequirementDate` | `LatestRequirementDate` |
| `OrderLevelValue` | `OrderLevelValue` |
| `OrderPathValue` | `OrderPathValue` |
| `BillOfMaterialItemNumber` | `BillOfMaterialItemNumber` |
| `BOMItemCategory` | `BOMItemCategory` |
| `MaterialComponentIsPhantomItem` | `MaterialComponentIsPhantomItem` |
| `IsBulkMaterialComponent` | `IsBulkMaterialComponent` |
| `AccountAssignmentCategory` | `AccountAssignmentCategory` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `DebitCreditCode` | `DebitCreditCode` |
| `ReservationIsFinallyIssued` | `ReservationIsFinallyIssued` |
| `QuantityInEntryUnit` | `QuantityInEntryUnit` |
| `EntryUnit` | `EntryUnit` |
| `MaterialQtyToBaseQtyNmrtr` | `MaterialQtyToBaseQtyNmrtr` |
| `MaterialQtyToBaseQtyDnmntr` | `MaterialQtyToBaseQtyDnmntr` |
| `WithdrawnQuantity` | `WithdrawnQuantity` |
| `QuantityIsFixed` | `QuantityIsFixed` |
| `ComponentScrapInPercent` | `ComponentScrapInPercent` |
| `OperationScrapInPercent` | `OperationScrapInPercent` |
| `IsNetScrap` | `IsNetScrap` |
| `LeadTimeOffset` | `LeadTimeOffset` |
| `QuantityDistributionKey` | `QuantityDistributionKey` |
| `MaterialRevisionLevel` | `MaterialRevisionLevel` |
| `MaterialCompIsVariableSized` | `MaterialCompIsVariableSized` |
| `VariableSizeComponentQuantity` | `VariableSizeComponentQuantity` |
| `VariableSizeComponentUnit` | `VariableSizeComponentUnit` |
| `UnitOfMeasureForSize1To3` | `UnitOfMeasureForSize1To3` |
| `Size1` | `Size1` |
| `Size2` | `Size2` |
| `Size3` | `Size3` |
| `FormulaKey` | `FormulaKey` |
| `StorageLocation` | `StorageLocation` |
| `ProductionSupplyArea` | `ProductionSupplyArea` |
| `Batch` | `Batch` |
| `BOMItemDescription` | `BOMItemDescription` |
| `BOMItemText2` | `BOMItemText2` |
| `ChangeNumber` | `ChangeNumber` |
| `_ScheduleLine` | *Association* |
| `_StockTransportOrderItem` | *Association* |
| `_StockTransportOrder` | *Association* |
| `_Material` | *Association* |
| `_VariableSize1To3Unit` | *Association* |
| `_Product` | *Association* |
| `_BaseUnit` | *Association* |
| `_EntryUnit` | *Association* |
| `_ProductText` | *Association* |
| `_BaseUnitText` | *Association* |
| `_EntryUnitText` | *Association* |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem', 'ScheduleLine', 'ReservationItem', 'RecordType'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Subcontracting Component for STO - TP'

define view entity I_STOSubcontractingComponentTP
  as projection on R_STOSubcontractingComponentTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
  key ScheduleLine,
  key ReservationItem,
  key RecordType,
      Reservation,
      @ObjectModel.text.association: '_ProductText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true }]       //CustomUI
      Product,
      @ObjectModel.text.association: '_BaseUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequiredQuantity,
      RequirementDate,
      RequirementTime,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,
      LatestRequirementDate,
      OrderLevelValue,
      OrderPathValue,
      BillOfMaterialItemNumber,
      BOMItemCategory,
      MaterialComponentIsPhantomItem,
      IsBulkMaterialComponent,
      AccountAssignmentCategory,
      InventorySpecialStockType,
      ConsumptionPosting,
      InventorySpecialStockValnType,
      DebitCreditCode,
      ReservationIsFinallyIssued,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      QuantityInEntryUnit,
      @ObjectModel.text.association: '_EntryUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      EntryUnit,
      MaterialQtyToBaseQtyNmrtr,
      MaterialQtyToBaseQtyDnmntr,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      WithdrawnQuantity,
      QuantityIsFixed,
      ComponentScrapInPercent,
      OperationScrapInPercent,
      IsNetScrap,
      LeadTimeOffset,
      QuantityDistributionKey,
      MaterialRevisionLevel,
      MaterialCompIsVariableSized,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      VariableSizeComponentQuantity,
      VariableSizeComponentUnit,
      UnitOfMeasureForSize1To3,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size1,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size2,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size3,
      FormulaKey,
      StorageLocation,
      ProductionSupplyArea,
      Batch,
      BOMItemDescription,
      BOMItemText2,
      ChangeNumber,

      /* Composition */
      _ScheduleLine            : redirected to parent I_STOScheduleLineTP,
      _StockTransportOrderItem : redirected to I_StockTransportOrderItemTP,
      _StockTransportOrder     : redirected to I_StockTransportOrderTP,

      _Material,
      _VariableSize1To3Unit,
      _Product,
      _BaseUnit,
      _EntryUnit,
      
      /* Text associations for CustomUI */
      _ProductText,
      _BaseUnitText,
      _EntryUnitText
}
```
