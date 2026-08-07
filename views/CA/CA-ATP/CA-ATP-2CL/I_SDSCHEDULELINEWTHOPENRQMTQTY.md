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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |
| `SalesDocumentItem` | ✓ | |  |  |
| `ScheduleLine` | ✓ | |  |  |
| `SDDocumentCategory` |  | |  |  |
| `ATPRelevantDocumentCategory` |  | |  |  |
| `SalesDocumentType` |  | |  |  |
| `RequirementType` |  | |  |  |
| `Product` |  | |  |  |
| `Plant` |  | |  |  |
| `MRPArea` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `Batch` |  | |  |  |
| `InventorySpecialStockType` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `AccountAssignmentCategory` |  | |  |  |
| `IndependentRqmtMRPRelevancy` |  | |  |  |
| `PlndIndepRqmtUsage` |  | |  |  |
| `InventorySpecialStockValnType` |  | |  |  |
| `ProductAvailabilityDate` |  | |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |
| `ConfirmedQuantityInBaseUnit` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `_SalesDocument` | | ✓ | | |
| `_SalesDocumentItem` | | ✓ | | |
| `_SalesDocumentScheduleLine` | | ✓ | | |
| `_SDDocumentCategory` | | ✓ | | |
| `_SalesDocumentType` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_MRPArea` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_Batch` | | ✓ | | |
| `_InventorySpecialStockType` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |

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
