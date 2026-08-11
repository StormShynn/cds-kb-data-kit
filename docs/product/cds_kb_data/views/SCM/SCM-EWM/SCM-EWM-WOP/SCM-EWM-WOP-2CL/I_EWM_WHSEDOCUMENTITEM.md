---
name: I_EWM_WHSEDOCUMENTITEM
description: "This CDS view provides a comprehensive and harmonized representation of warehouse document item data in Warehouse Management. You can use this view to extract and analyze detailed warehouse item information, track movements, and support operational warehouse processes. This CDS view provides the data to answer the following business questions: Which products, batches, or handling units are included in a specific warehouse document item? What are the source and destination warehouse bins, types, and sections for each warehouse document item? Who created or confirmed the warehouse document item and when did these actions occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value
semantic_en: "This CDS view provides a comprehensive and harmonized representation of warehouse document item data in Warehouse Management. You can use this view to extract and analyze detailed warehouse item information, track movements, and support operational warehouse processes. This CDS view provides the data to answer the following business questions: Which products, batches, or handling units are included in a specific warehouse document item? What are the source and destination warehouse bins, types, and sections for each warehouse document item? Who created or confirmed the warehouse document item and when did these actions occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Document Item — CDS view giao diện dựa trên P_EWM_WhseDocumentItem."
keywords:
  - "warehouse"
  - "document"
  - "item"
  - "time"
  - "zone"
  - "logical"
  - "record"
  - "transaction"
  - "code"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - document
  - interface-view
  - product
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WHSEDOCUMENTITEM

**This CDS view provides a comprehensive and harmonized representation of warehouse document item data in Warehouse Management. You can use this view to extract and analyze detailed warehouse item information, track movements, and support operational warehouse processes. This CDS view provides the data to answer the following business questions: Which products, batches, or handling units are included in a specific warehouse document item? What are the source and destination warehouse bins, types, and sections for each warehouse document item? Who created or confirmed the warehouse document item and when did these actions occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMWarehouseDocument` | ✓ | |  |  | `NUMC(12)` | Warehouse Document |
| `EWMWarehouseDocumentItem` | ✓ | |  |  | `NUMC(4)` | Warehouse Document Item |
| `WarehouseTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `LogicalRecordTransactionCode` |  | |  |  | `CHAR(20)` | Table Log Record: Transaction Code |
| `EWMWhseDocItemIsCancelable` |  | |  |  | `CHAR(1)` | Warehouse Document Item is Cancelable |
| `EWMWhseDocGoodsReceiptDate` |  | |  |  | `DATS(8)` | Goods Receipt Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `StockDocumentCategory` |  | |  |  | `CHAR(3)` | Special Reference Stock Type |
| `StockDocumentNumber` |  | |  |  | `CHAR(35)` | Stock Reference Document of a Sales Order or Project Stock |
| `StockItemNumber` |  | |  |  | `NUMC(10)` | Sales Order Item for Sales Order Stock |
| `ExternalStockDocumentNumber` |  | |  |  | `CHAR(35)` | Stock Reference Document of a Sales Order or Project Stock |
| `EWMStockUsage` |  | |  |  | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Stock Owner |
| `EWMStockOwnerName` |  | |  |  | `CHAR(81)` |  |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EntitledToDisposePartyName` |  | |  |  | `CHAR(81)` |  |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `WhseTaskCapacityConsumption` |  | |  |  | `DEC(15)` | Capacity Consumption |
| `WhseTaskCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | Created On |
| `WhseTaskCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreatedByUserName` |  | |  |  | `CHAR(80)` | Created By |
| `WhseTaskConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | Confirmed On |
| `ConfirmationUTCDateTime` |  | |  |  | `DEC(15)` | Confirmed On |
| `ConfirmedByUser` |  | |  |  | `CHAR(12)` | Confirmed By |
| `ConfirmedByUserName` |  | |  |  | `CHAR(80)` | Confirmed By |
| `IsHandlingUnitWarehouseTask` |  | |  |  | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessCategory` |  | |  |  | `CHAR(1)` | Warehouse Process Category |
| `EWMWarehouseDocumentItemStatus` |  | |  |  | `CHAR(1)` | Warehouse Document Item Status |
| `EWMWhseDocumentItemStatusIcon` |  | |  |  | `INT1(3)` |  |
| `WarehouseMovementsReason` |  | |  |  | `CHAR(4)` | Reason for Movements in the Warehouse |
| `WarehouseMovementsText` |  | |  |  | `CHAR(50)` | Additional Text |
| `EWMGoodsMovementProcess` |  | |  |  | `CHAR(4)` | Reason for Movement |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(31)` | Actual Quantity in Base Unit of Measure |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualQuantityInAltvUnit` |  | |  |  | `QUAN(31)` | Actual Quantity in Alternative Unit of Measure |
| `AlternativeUnit` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `EWMValuationQuantity` |  | |  |  | `QUAN(31)` | Valuation Quantity |
| `EWMValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Unit for Valuation Quantity |
| `EWMValuationQuantityStatus` |  | |  |  | `CHAR(1)` | Status of Valuation Quantity |
| `EWMDifferenceValuationQuantity` |  | |  |  | `QUAN(31)` | Valuation Difference Quantity |
| `EWMDiffValuationQuantityStatus` |  | |  |  | `CHAR(1)` | Status of Difference in Valuation Quantity |
| `EWMAccountAssignmentCategory` |  | |  |  | `CHAR(2)` | Account Assignment Category |
| `EWMAccountAssignmentObject` |  | |  |  | `CHAR(35)` | Account Assignment Object (Internal Display) |
| `EWMAccountAssignmentSubObject` |  | |  |  | `CHAR(10)` | Account Assignment Subobject |
| `WhseTaskNetWeight` |  | |  |  | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskNetVolume` |  | |  |  | `QUAN(15)` | Loading or Net Volume |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMCanceledWarehouseDocument` |  | |  |  | `NUMC(12)` | Canceled Warehouse Document |
| `ProductionOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `Kanban` |  | |  |  | `NUMC(10)` | Kanban Identification Number |
| `EWMWarehouseTaskIsJITRelevant` |  | |  |  | `CHAR(1)` | Relevance for JIT Process |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date of Material Document |
| `EWMWarehouseDocumentItemUUID` |  | |  |  | `RAW(16)` | Warehouse Document Item Identifier |
| `SourceStorageType` |  | |  |  | `CHAR(4)` | Source Storage Type |
| `SourceStorageSection` |  | |  |  | `CHAR(4)` | Source Storage Section |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` | Source Handling Unit |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` |  | |  |  | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `DestinationHandlingUnit` |  | |  |  | `CHAR(20)` | Destination Handling Unit |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `HandlingUnitNumber` |  | |  |  | `CHAR(20)` | Handling Unit |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `_SerialNumber` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_DstStorageSectionText` | | ✓ | | | | |
| `_DstStorageTypeText` | | ✓ | | | | |
| `_EWMEntitledToDisposePartyText` | | ✓ | | | | |
| `_EWMStockOwnerText` | | ✓ | | | | |
| `_EWMStockTypeText` | | ✓ | | | | |
| `_StockDocCategoryText` | | ✓ | | | | |
| `_EWMStockUsageText` | | ✓ | | | | |
| `_EWMStorageSectionText` | | ✓ | | | | |
| `_ValuationQuantityStatusText` | | ✓ | | | | |
| `_EWMDiffValuationQntyStatusT` | | ✓ | | | | |
| `_AccountAssgmtCatText` | | ✓ | | | | |
| `_EWMStorageTypeText` | | ✓ | | | | |
| `_SrcStorageSectionText` | | ✓ | | | | |
| `_SrcStorageTypeText` | | ✓ | | | | |
| `_WarehouseText` | | ✓ | | | | |
| `_WhseProcCategoryText` | | ✓ | | | | |
| `_WhseProcTypeText` | | ✓ | | | | |
| `_WhseDocumentItemStatusText` | | ✓ | | | | |
| `_WarehouseMovementReasonText` | | ✓ | | | | |
| `_UnitOfMeasureBaseUnit` | | ✓ | | | | |
| `_UnitOfMeasureAlternativeUnit` | | ✓ | | | | |
| `_UnitOfMeasureNetVolumeUoM` | | ✓ | | | | |
| `_UnitOfMeasureNetWeightUoM` | | ✓ | | | | |
| `_UnitOfMeasureValnQtyUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SerialNumber` | `I_EWM_ConfWhseTaskSerialNumber` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Warehouse Document Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET, 
                                        #SQL_DATA_SOURCE                  ]
define view entity I_EWM_WhseDocumentItem
  as select from P_EWM_WhseDocumentItem
  association [0..*] to I_EWM_ConfWhseTaskSerialNumber  as _SerialNumber on  $projection.EWMWarehouse         = _SerialNumber.EWMWarehouse
                                                               and $projection.EWMWarehouseDocument = _SerialNumber.WarehouseTask
                                                               and $projection.EWMWarehouseDocumentItem = _SerialNumber.WarehouseTaskItem
{
  key EWMWarehouse,
  key EWMWarehouseDocument,
  key EWMWarehouseDocumentItem,
  WarehouseTimeZone,
  LogicalRecordTransactionCode,
  @Semantics.booleanIndicator:true
  EWMWhseDocItemIsCancelable,
  EWMWhseDocGoodsReceiptDate,
      Product,
      ProductDescription,
      Batch,
      EWMStockType,
      StockDocumentCategory,
      @UI.hidden: true
      StockDocumentNumber,
      StockItemNumber,
      ExternalStockDocumentNumber,
      EWMStockUsage,
      EWMStockOwner,
      EWMStockOwnerName,
      EntitledToDisposeParty,
      EntitledToDisposePartyName,
      ShelfLifeExpirationDate,
      CountryOfOrigin,
      WhseTaskCapacityConsumption,
      WhseTaskCrtnWhseTmznDateTime,
      WhseTaskCrtnUTCDateTime,
      CreatedByUser,
      CreatedByUserName,
      WhseTaskConfWhseTmznDateTime,
      ConfirmationUTCDateTime,
      ConfirmedByUser,
      ConfirmedByUserName,
      IsHandlingUnitWarehouseTask,
      WarehouseProcessType,
      WarehouseProcessCategory,
      EWMWarehouseDocumentItemStatus,
      @Feature:'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMWhseDocumentItemStatusIcon,
      WarehouseMovementsReason,     
      WarehouseMovementsText,
      EWMGoodsMovementProcess,
      @Semantics.quantity.unitOfMeasure: 'BASEUNIT'
      ActualQuantityInBaseUnit,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'ALTERNATIVEUNIT'
      ActualQuantityInAltvUnit,
      AlternativeUnit,
      @Semantics.quantity.unitOfMeasure: 'EWMValuationQuantityUnit'
      EWMValuationQuantity,
      EWMValuationQuantityUnit,
      EWMValuationQuantityStatus,
      @Semantics.quantity.unitOfMeasure: 'EWMValuationQuantityUnit'
      EWMDifferenceValuationQuantity,
      EWMDiffValuationQuantityStatus,
      EWMAccountAssignmentCategory,
      EWMAccountAssignmentObject,
      EWMAccountAssignmentSubObject,
      @Semantics.quantity.unitOfMeasure: 'WHSETASKNETWEIGHTUNITOFMEASURE'
      WhseTaskNetWeight,
      WhseTaskNetWeightUnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'WHSETASKNETVOLUMEUNITOFMEASURE'
      WhseTaskNetVolume,
      WhseTaskNetVolumeUnitOfMeasure,
      EWMCanceledWarehouseDocument,
      ProductionOrder,
      Kanban,
      @Feature:'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMWarehouseTaskIsJITRelevant,
      MaterialDocument,
      MaterialDocumentYear,
      MaterialDocumentItem,
      PostingDate,
      EWMWarehouseDocumentItemUUID,
      SourceStorageType,
      SourceStorageSection,
      SourceStorageBin,
      SourceHandlingUnit,
      DestinationStorageType,
      DestinationStorageSection,
      DestinationStorageBin,
      DestinationHandlingUnit,
      EWMStorageType,
      EWMStorageSection,
      EWMStorageBin,
      HandlingUnitNumber,
      // purchase order & purchase order item
      PurchaseOrder,
      PurchaseOrderItem,

      /* Associations */
      _CountryText,
      _DstStorageSectionText,
      _DstStorageTypeText,
      _EWMEntitledToDisposePartyText,
      _EWMStockOwnerText,
      _EWMStockTypeText,
      _StockDocCategoryText,
      _EWMStockUsageText,
      _EWMStorageSectionText,
      _ValuationQuantityStatusText,
      _EWMDiffValuationQntyStatusT,
      _AccountAssgmtCatText,
      _EWMStorageTypeText,
      _SrcStorageSectionText,
      _SrcStorageTypeText,
      _WarehouseText,
      _WhseProcCategoryText,
      _WhseProcTypeText,
      _WhseDocumentItemStatusText,
      _WarehouseMovementReasonText,
      _UnitOfMeasureBaseUnit,
      _UnitOfMeasureAlternativeUnit,
      _UnitOfMeasureNetVolumeUoM,
      _UnitOfMeasureNetWeightUoM,
      _UnitOfMeasureValnQtyUnit,
      _SerialNumber

}
```
