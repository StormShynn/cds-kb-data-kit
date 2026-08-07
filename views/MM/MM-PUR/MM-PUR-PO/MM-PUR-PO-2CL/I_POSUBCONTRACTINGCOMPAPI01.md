---
name: I_POSUBCONTRACTINGCOMPAPI01
description: Posubcontractingcompapi 01
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
  - contract
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_POSUBCONTRACTINGCOMPAPI01

**Posubcontractingcompapi 01**

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
| `PurchaseOrderScheduleLine` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `WithdrawnQuantity` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `RequirementDate` |  | |  |  |  |  |
| `RequirementTime` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LatestRequirementDate` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  | `cast (BillOfMaterialItemNumber as aposn preserving type )` |  |  |
| `BillOfMaterialItemNumber_2` |  | |  | `BillOfMaterialItemNumber` |  |  |
| `SortField` |  | |  |  |  |  |
| `BOMItemCategory` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `IsMaterialProvision` |  | |  |  |  |  |
| `MaterialProvisionType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  | `cast (MaterialRevisionLevel as revlv preserving type )` |  |  |
| `MaterialRevisionLevel_2` |  | |  | `MaterialRevisionLevel` |  |  |
| `MaterialCompIsVariableSized` |  | |  |  |  |  |
| `NumberOfVariableSizeComponents` |  | |  |  |  |  |
| `VariableSizeItemUnit` |  | |  |  |  |  |
| `VariableSizeItemQuantity` |  | |  |  |  |  |
| `VariableSizeComponentUnit` |  | |  |  |  |  |
| `VariableSizeComponentQuantity` |  | |  |  |  |  |
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
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_VariableSize1To3Unit` | | ✓ | | | | |
| `_VariableSizeCompUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |
| `_ScheduleLine` | `I_PurOrdScheduleLineAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IMMPOSUBCOMP'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Subcontracting Component in PurOrd'

define view I_POSubcontractingCompAPI01
  as select from R_POSubcontractingComponent

  association [1..1] to I_PurchaseOrderAPI01      as _PurchaseOrder     on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  association [1..1] to I_PurchaseOrderItemAPI01  as _PurchaseOrderItem on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                        and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  association [1..1] to I_PurOrdScheduleLineAPI01 as _ScheduleLine      on  $projection.PurchaseOrder             = _ScheduleLine.PurchaseOrder
                                                                        and $projection.PurchaseOrderItem         = _ScheduleLine.PurchaseOrderItem
                                                                        and $projection.PurchaseOrderScheduleLine = _ScheduleLine.PurchaseOrderScheduleLine



{

      @ObjectModel.foreignKey.association: '_PurchaseOrder'
  key PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
  key PurchaseOrderItem,
      @ObjectModel.foreignKey.association: '_ScheduleLine'
  key PurchaseOrderScheduleLine,
  key ReservationItem,
  key RecordType,
      Reservation,
      Material,
      @Semantics.unitOfMeasure: true
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      WithdrawnQuantity,
      QuantityIsFixed,
      RequirementDate,
      RequirementTime,
      Plant,
      LatestRequirementDate,
      OrderLevelValue,
      OrderPathValue,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialItemNumber_2'
      cast (BillOfMaterialItemNumber as aposn preserving type ) as BillOfMaterialItemNumber,
      BillOfMaterialItemNumber as BillOfMaterialItemNumber_2,
      SortField,
      BOMItemCategory,
      MaterialComponentIsPhantomItem,
      IsBulkMaterialComponent,
      AccountAssignmentCategory,
      InventorySpecialStockType,
      ConsumptionPosting,
      InventorySpecialStockValnType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialProvisionType'
      IsMaterialProvision,
      MaterialProvisionType,
      SalesOrder,
      SalesOrderItem,
      WBSElementInternalID,
      DebitCreditCode,
      ReservationIsFinallyIssued,
      @Semantics.unitOfMeasure: true
      EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      QuantityInEntryUnit,
      MaterialQtyToBaseQtyNmrtr,
      MaterialQtyToBaseQtyDnmntr,
      ComponentScrapInPercent,
      OperationScrapInPercent,
      IsNetScrap,
      LeadTimeOffset,
      QuantityDistributionKey,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      cast (MaterialRevisionLevel as revlv preserving type ) as MaterialRevisionLevel,
      MaterialRevisionLevel as MaterialRevisionLevel_2,
      MaterialCompIsVariableSized,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'VariableSizeItemQuantity'
      NumberOfVariableSizeComponents,
      @Semantics.unitOfMeasure: true
      VariableSizeItemUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
      VariableSizeItemQuantity,      
      @Semantics.unitOfMeasure: true
      VariableSizeComponentUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      VariableSizeComponentQuantity,
      @Semantics.unitOfMeasure: true
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

      _PurchaseOrder,
      _PurchaseOrderItem,
      _ScheduleLine,
      _VariableSize1To3Unit,
      _VariableSizeCompUnit,
      _BaseUnit,
      _EntryUnit


}
```
