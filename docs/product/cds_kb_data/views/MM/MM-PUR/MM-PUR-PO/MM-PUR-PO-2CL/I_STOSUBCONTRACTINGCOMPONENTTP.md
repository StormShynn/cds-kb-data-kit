---
name: I_STOSUBCONTRACTINGCOMPONENTTP
description: "Stosubcontractingcomponenttp"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `RequirementDate` |  | |  |  |  |  |
| `RequirementTime` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LatestRequirementDate` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BOMItemCategory` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `WithdrawnQuantity` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `MaterialCompIsVariableSized` |  | |  |  |  |  |
| `VariableSizeComponentQuantity` |  | |  |  |  |  |
| `VariableSizeComponentUnit` |  | |  |  |  |  |
| `UnitOfMeasureForSize1To3` |  | |  |  |  |  |
| `Size1` |  | |  |  |  |  |
| `Size2` |  | |  |  |  |  |
| `Size3` |  | |  |  |  |  |
| `FormulaKey` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMItemText2` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `_ScheduleLine` | | ✓ | | | | |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_VariableSize1To3Unit` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_BaseUnitText` | | ✓ | | | | |
| `_EntryUnitText` | | ✓ | | | | |

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
