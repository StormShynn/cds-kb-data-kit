---
name: I_POSUBCONTRACTINGCOMPTP_2
description: "Posubcontractingcomptp 2"
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
# I_POSUBCONTRACTINGCOMPTP_2

**Posubcontractingcomptp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `IsMaterialProvision` |  | |  |  |  |  |
| `MaterialProvisionType` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `MaterialCompIsVariableSized` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `RequirementDate` |  | |  |  |  |  |
| `RequirementTime` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `VariableSizeItemQuantity` |  | |  |  |  |  |
| `VariableSizeItemUnit` |  | |  |  |  |  |
| `VariableSizeComponentUnit` |  | |  |  |  |  |
| `VariableSizeComponentQuantity` |  | |  |  |  |  |
| `UnitOfMeasureForSize1To3` |  | |  |  |  |  |
| `Size1` |  | |  |  |  |  |
| `Size2` |  | |  |  |  |  |
| `Size3` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LatestRequirementDate` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `MatlCompFreeDefinedAttribute` |  | |  |  |  |  |
| `BOMItemCategory` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `WithdrawnQuantity` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `FormulaKey` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMItemText2` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `_ScheduleLine` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_VariableSize1To3Unit` | | ✓ | | | | |
| `_VariableSizeCompUnit` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'PO Subcontracting Components Projection'
@AccessControl: { authorizationCheck: #CHECK }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_POSubcontractingCompTP_2
  as projection on R_POSubcontractingComponentTP
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key ScheduleLine,
  key ReservationItem,
  key RecordType,

      Material,
      @Semantics.booleanIndicator: true
      IsMaterialProvision,
      MaterialProvisionType,
      MaterialQtyToBaseQtyNmrtr,
      MaterialQtyToBaseQtyDnmntr,
      MaterialRevisionLevel,
      MaterialCompIsVariableSized,
      MaterialComponentIsPhantomItem,
      Reservation,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequiredQuantity,
      RequirementDate,
      RequirementTime,
      ReservationIsFinallyIssued,
      BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      QuantityInEntryUnit,
      EntryUnit,
  
      @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
      VariableSizeItemQuantity,
      VariableSizeItemUnit,
      VariableSizeComponentUnit,

      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      VariableSizeComponentQuantity,
      UnitOfMeasureForSize1To3,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size1,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size2,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
      Size3,
      Plant,
      LatestRequirementDate,
      OrderLevelValue,
      OrderPathValue,
      BillOfMaterialItemNumber,
      MatlCompFreeDefinedAttribute,
      BOMItemCategory,
      IsBulkMaterialComponent,
      AccountAssignmentCategory,
      InventorySpecialStockType,
      ConsumptionPosting,
      InventorySpecialStockValnType,
      SalesOrder,
      SalesOrderItem,
      WBSElementInternalID,
      DebitCreditCode,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      WithdrawnQuantity,
      QuantityIsFixed,
      ComponentScrapInPercent,
      OperationScrapInPercent,
      IsNetScrap,
      LeadTimeOffset,
      QuantityDistributionKey,
      FormulaKey,
      StorageLocation,
      ProductionSupplyArea,
      Batch,
      BOMItemDescription,
      BOMItemText2,
      ChangeNumber,

      /* Composition */
      _ScheduleLine      : redirected to parent I_PurchaseOrdScheduleLineTP_2,
      _PurchaseOrder     : redirected to I_PurchaseOrderTP_2,
      _PurchaseOrderItem : redirected to I_PurchaseOrderItemTP_2,

      /* Associations */
      _BaseUnit,
      _EntryUnit,
      _Material,
      _Product,
      _VariableSize1To3Unit,
      _VariableSizeCompUnit
}
```
