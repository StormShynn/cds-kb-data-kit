---
name: I_PHYSICALINVENTORYDOCUMENTTP
description: Physicalinventorydocumenttp
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - interface-view
  - transactional-processing
  - inventory
  - document
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
  - bo:Inventory
---
# I_PHYSICALINVENTORYDOCUMENTTP

**Physicalinventorydocumenttp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocument` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `InventoryTransactionType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PhysInventoryPlannedCountDate` |  | |  |  |  |  |
| `PhysicalInventoryLastCountDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PostingFiscalPeriod` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  |  |  |  |
| `PostingIsBlockedForPhysInvtry` |  | |  |  |  |  |
| `PhysicalInventoryCountStatus` |  | |  |  |  |  |
| `PhysInvtryAdjustmentPostingSts` |  | |  |  |  |  |
| `PhysInventoryReferenceNumber` |  | |  |  |  |  |
| `PhysInvtryDeletionStatus` |  | |  |  |  |  |
| `PhysInvtryDocHasQtySnapshot` |  | |  |  |  |  |
| `PhysicalInventoryGroupType` |  | |  |  |  |  |
| `PhysicalInventoryGroup` |  | |  |  |  |  |
| `PhysicalInventoryNumber` |  | |  |  |  |  |
| `PhysicalInventoryDocumentDesc` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `SalesPriceValuationIsActive` |  | |  |  |  |  |
| `CountingVarianceInPercent` |  | |  |  |  |  |
| `_PhysicalInventoryDocumentItem` | | ✓ | | | | |
| `_InventorySpecialStockTypeText` | | ✓ | | | | |
| `_InventoryTransactionTypeText` | | ✓ | | | | |
| `_PhysInvtryCountStsText` | | ✓ | | | | |
| `_PhysInvtryPostStsText` | | ✓ | | | | |
| `_PhysInvtryDeletionStsText` | | ✓ | | | | |
| `_PhysInvtryGroupTypeText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Physical Inventory Document - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
   usageType: {
      sizeCategory: #XL,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
   },
   sapObjectNodeType.name: 'PhysicalInventoryDocument'
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_PhysicalInventoryDocumentTP
  provider contract transactional_interface
  as projection on R_PhysicalInventoryDocumentTP  
{     
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryDocHdrKeyVH', element: 'PhysicalInventoryDocument' },
                                               additionalBinding: [{ localElement: 'FiscalYear', element: 'FiscalYear'}],
                                               useAsTemplate: true } ] }
  key PhysicalInventoryDocument,
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryDocHdrFiscalYearVH', element: 'FiscalYear' }, useAsTemplate: true } ] }
  key FiscalYear,
      
      @ObjectModel.text.association: '_InventoryTransactionTypeText'
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_StockTakingTransactionType', element: 'InventoryTransactionType' }, useAsTemplate: true } ] }
      InventoryTransactionType,
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ] }
      Plant,
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' },
                                               additionalBinding: [{ localElement: 'Plant', element: 'Plant'}],
                                               useAsTemplate: true } ] }
      StorageLocation,
      @ObjectModel.text.association: '_InventorySpecialStockTypeText'
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_InventorySpecialStockType', element: 'InventorySpecialStockType' }, useAsTemplate: true } ] }
      InventorySpecialStockType,
      DocumentDate,
      PhysInventoryPlannedCountDate,
      PhysicalInventoryLastCountDate,
      PostingDate,
      PostingFiscalPeriod,

      CreatedByUserName,
      PostingIsBlockedForPhysInvtry,
      @ObjectModel.text.association: '_PhysInvtryCountStsText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryCountSts', element: 'PhysicalInventoryCountStatus' }, useAsTemplate: true } ] }
      PhysicalInventoryCountStatus,
      
      @ObjectModel.text.association: '_PhysInvtryPostStsText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryPostSts', element: 'PhysInvtryAdjustmentPostingSts' }, useAsTemplate: true } ] }
      PhysInvtryAdjustmentPostingSts,
      PhysInventoryReferenceNumber,

      @ObjectModel.text.association: '_PhysInvtryDeletionStsText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryDeletionSts', element: 'PhysInvtryDeletionStatus' }, useAsTemplate: true } ] }
      PhysInvtryDeletionStatus,
      PhysInvtryDocHasQtySnapshot, // Freeze Indicator
      @ObjectModel.text.association: '_PhysInvtryGroupTypeText' 
      @Consumption: { valueHelpDefinition: [ { entity: { name: 'I_PhysInvtryGroupType', element: 'PhysicalInventoryGroupType' }, useAsTemplate: true } ] }
      PhysicalInventoryGroupType,
      PhysicalInventoryGroup,
      PhysicalInventoryNumber,
      PhysicalInventoryDocumentDesc,



      LastChangeDateTime,
      SalesPriceValuationIsActive,


      CountingVarianceInPercent,


      //associations
      _PhysicalInventoryDocumentItem    : redirected to composition child I_PhysInvtryDocumentItemTP,

      _InventorySpecialStockTypeText,
      _InventoryTransactionTypeText,
      _PhysInvtryCountStsText,
      _PhysInvtryPostStsText,
      _PhysInvtryDeletionStsText,
      _PhysInvtryGroupTypeText

//      _PhysInvtryDocFiscalYear,
//      _Plant,
//      _StorageLocation,
//      _CreatedByUser,
//      _InventorySpecialStockType,
//      _PhysInvtryDocItem,
//      _PhysInvtryGroupType,
//      _InventoryTransactionType,
//      _PhysInvtryCountSts,
//      _PhysInvtryDeletionSts,
//      _PhysInvtryPostSts
}
```
