---
name: I_SCHEDGAGRMTSUBCONTRGCOMPTP_2
description: "Schedgagrmtsubcontrgcomptp 2"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTSUBCONTRGCOMPTP_2

**Schedgagrmtsubcontrgcomptp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `RequirementDate` |  | |  |  |  |  |
| `RequirementTime` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `LatestRequirementDate` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `SortField` |  | |  |  |  |  |
| `MatlCompFreeDefinedAttribute` |  | |  |  |  |  |
| `BOMItemCategory` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `IsMaterialProvision` |  | |  |  |  |  |
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
| `LastChangeDateTime` |  | |  |  |  |  |
| `_SchedgLine` | | ✓ | | | | |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_PurSchedgAgrmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Schedg Agrmt Subcontracting Component'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
      sizeCategory: #XL,
      serviceQuality: #C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtSubcontrgCompTP_2
  as projection on R_SchedgAgrmtSubcontrgCompTP
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key ScheduleLine,
  key ReservationItem,
  key RecordType,
      Reservation,
      Material,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequiredQuantity,
      RequirementDate,
      RequirementTime,
      Plant,
      LatestRequirementDate,
      OrderLevelValue,
      OrderPathValue,
      BillOfMaterialItemNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MatlCompFreeDefinedAttribute'
      SortField,
      MatlCompFreeDefinedAttribute,
      BOMItemCategory,
      MaterialComponentIsPhantomItem,
      IsBulkMaterialComponent,
      AccountAssignmentCategory,
      InventorySpecialStockType,
      ConsumptionPosting,
      InventorySpecialStockValnType,

      @Semantics.booleanIndicator : true
      IsMaterialProvision,
      DebitCreditCode,
      ReservationIsFinallyIssued,

      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      QuantityInEntryUnit,
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

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      VariableSizeItemQuantity,


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

      FormulaKey,
      StorageLocation,
      ProductionSupplyArea,
      Batch,
      BOMItemDescription,
      BOMItemText2,
      ChangeNumber,
      LastChangeDateTime,

      _SchedgLine     : redirected to parent I_SchedgLineTP_2,
      _SchedgAgrmtItm : redirected to I_SchedgAgrmtItmTP_2,
      _PurSchedgAgrmt : redirected to I_SchedgAgrmtHdrTP_2
}
```
