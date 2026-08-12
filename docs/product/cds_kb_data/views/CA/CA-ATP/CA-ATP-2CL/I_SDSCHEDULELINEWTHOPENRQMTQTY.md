---
name: I_SDSCHEDULELINEWTHOPENRQMTQTY
description: "SDSchedule LineWTHOPENRQMTQTY"
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `ScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `ATPRelevantDocumentCategory` |  | |  |  | `CHAR(2)` | Category of a Document Included in ATP Checks |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `RequirementType` |  | |  |  | `CHAR(2)` | Requirement type |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MRPArea` |  | |  |  | `CHAR(10)` | MRP Area |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `IndependentRqmtMRPRelevancy` |  | |  |  | `CHAR(1)` | Requirements record not relevant to MRP |
| `PlndIndepRqmtUsage` |  | |  |  | `CHAR(1)` | Planning Indicator |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Valuation of Special Stock |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `RequestedQuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Open Qty in Stockkeeping Units for Transfer of Reqmts to MRP |
| `ConfirmedQuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Confirmed quantity for availability check in SKU |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesDocumentScheduleLine` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

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
