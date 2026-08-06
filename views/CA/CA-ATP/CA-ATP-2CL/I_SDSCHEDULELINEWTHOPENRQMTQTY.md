---
name: I_SDSCHEDULELINEWTHOPENRQMTQTY
description: SDSchedule LineWTHOPENRQMTQTY
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - interface-view
  - schedule-line
  - component:CA-ATP-2CL
  - lob:Cross-Application Components
---
# I_SDSCHEDULELINEWTHOPENRQMTQTY

**SDSchedule LineWTHOPENRQMTQTY**

| Property | Value |
|---|---|
| App Component | `CA-ATP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDocument` | `SalesDocument` |
| key `SalesDocumentItem` | `SalesDocumentItem` |
| key `ScheduleLine` | `ScheduleLine` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `ATPRelevantDocumentCategory` | `ATPRelevantDocumentCategory` |
| `SalesDocumentType` | `SalesDocumentType` |
| `RequirementType` | `RequirementType` |
| `Product` | `Product` |
| `Plant` | `Plant` |
| `MRPArea` | `MRPArea` |
| `StorageLocation` | `StorageLocation` |
| `Batch` | `Batch` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `SoldToParty` | `SoldToParty` |
| `AccountAssignmentCategory` | `AccountAssignmentCategory` |
| `IndependentRqmtMRPRelevancy` | `IndependentRqmtMRPRelevancy` |
| `PlndIndepRqmtUsage` | `PlndIndepRqmtUsage` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `ProductAvailabilityDate` | `ProductAvailabilityDate` |
| `RequestedQuantityInBaseUnit` | `RequestedQuantityInBaseUnit` |
| `ConfirmedQuantityInBaseUnit` | `ConfirmedQuantityInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_SalesDocumentScheduleLine` | *Association* |
| `_SDDocumentCategory` | *Association* |
| `_SalesDocumentType` | *Association* |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_MRPArea` | *Association* |
| `_StorageLocation` | *Association* |
| `_Batch` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_SoldToParty` | *Association* |
| `_BaseUnit` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #NONE,
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}

@VDM.viewType: #BASIC

@EndUserText.label: 'Schedule Line With Open Rqmt Qty for SD'

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_SDScheduleLineWthOpenRqmtQty
  as select from R_SDScheduleLineWthOpenRqmtQty
{
  key SalesDocument,
  key SalesDocumentItem,
  key ScheduleLine,
      SDDocumentCategory,
      ATPRelevantDocumentCategory,
      SalesDocumentType,
      RequirementType,
      Product,
      Plant,
      MRPArea,
      StorageLocation,
      Batch,
      InventorySpecialStockType,
      WBSElementInternalID,
      SoldToParty,
      AccountAssignmentCategory,
      IndependentRqmtMRPRelevancy,
      PlndIndepRqmtUsage,
      InventorySpecialStockValnType,
      ProductAvailabilityDate,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfirmedQuantityInBaseUnit,
      BaseUnit,

      _SalesDocument,
      _SalesDocumentItem,
      _SalesDocumentScheduleLine,
      _SDDocumentCategory,
      _SalesDocumentType,
      _Product,
      _Plant,
      _MRPArea,
      _StorageLocation,
      _Batch,
      _InventorySpecialStockType,
      _SoldToParty,
      _BaseUnit

}
```
