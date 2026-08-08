---
name: I_FAILEDGOODSMOVEMENTITEM
description: "FAILEDGoods MovementITEM"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_FAILEDGOODSMOVEMENTITEM

**FAILEDGoods MovementITEM**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FailedGoodsMovement` | ✓ | |  | `GoodsMovementException` |  |  |
| `FailedGoodsMovementItem` | ✓ | |  | `GoodsMovementExceptionItem` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ErrorOccurrenceDate` |  | |  |  |  |  |
| `ErrorOccurrenceTime` |  | |  |  |  |  |
| `SystemMessageIdentification` |  | |  |  |  |  |
| `SystemMessageNumber` |  | |  |  |  |  |
| `SystemMessageType` |  | |  |  |  |  |
| `SystemMessageVariable1` |  | |  |  |  |  |
| `SystemMessageVariable2` |  | |  |  |  |  |
| `SystemMessageVariable3` |  | |  |  |  |  |
| `SystemMessageVariable4` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  | `cast(affw.Material as productnumber preserving type)` |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `GoodsMovementRefDocType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  | `SupplyArea` |  |  |
| `MaterialStaging` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMStorageBin` |  | |  |  |  |  |
| `DestinationStorageBin` |  | |  |  |  |  |
| `HandlingUnitExternalID` |  | |  |  |  |  |
| `ReversalMaterialDocument` |  | |  |  |  |  |
| `ReversalMaterialDocumentItem` |  | |  |  |  |  |
| `ReversalMaterialDocumentYear` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `RecordType` |  | |  |  |  |  |
| `ConfirmationGroup` |  | |  |  |  |  |
| `ConfirmationCount` |  | |  |  |  |  |
| `OrderInternalID` |  | |  | `OrderInternalBillOfOperations` |  |  |
| `OrderOperationInternalID` |  | |  | `OrderIntBillOfOperationsItem` |  |  |
| `RepetitiveMfgConfirmation` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `RecordIsFromMfgProcgExec` |  | |  |  |  |  |
| `SerialNumberAssgmtProfile` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `ShopFloorItem` |  | |  |  |  |  |
| `GdsMvtExcptnDepdntItemGroup` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `SLEDOrManufactureDate` |  | |  |  |  |  |
| `GoodsMovementEntryUnit` |  | |  |  |  |  |
| `GoodsMovementEntryQty` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `_ProductionSupplyArea` |  | |  | `_SupplyArea` |  |  |
| `_FailedGoodsMovement` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Batch_2` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_OrderText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_StorageLocationText` | | ✓ | | | | |
| `_ProductionSupplyAreaText` | | ✓ | | | | |
| `_ConfirmationText` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_CustomerText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FailedGoodsMovement` | `I_FailedGoodsMovement` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Batch_2` | `I_Batch` | [0..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_MaterialText` | `I_MaterialText` | [1..*] |
| `_ProductText` | `I_ProductText` | [1..*] |
| `_OrderText` | `I_LogisticsOrder` | [1..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_ProductionSupplyAreaText` | `I_ProductionSupplyAreaText` | [0..*] |
| `_ConfirmationText` | `I_OrderConfirmation` | [0..1] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_CustomerText` | `I_Customer` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_CreatedByUser', '_ChangedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IFAILDGMOVEXCITM'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'FailedGoodsMovementItem'
@ObjectModel.sapObjectNodeType.name: 'FailedGoodsMovementItem'
@ObjectModel.semanticKey: ['FailedGoodsMovement', 'FailedGoodsMovementItem']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Failed Goods Movement Item'

define view entity I_FailedGoodsMovementItem
  as select from           I_GoodsMovementExceptionItem  as affw
    left outer to one join I_GdsMvtPhantomErrorSystemMsg as tafwd on  tafwd.SystemMessageIdentification = affw.SystemMessageIdentification
                                                                  and tafwd.SystemMessageNumber         = affw.SystemMessageNumber

    association [0..1] to I_FailedGoodsMovement      as _FailedGoodsMovement      on  $projection.FailedGoodsMovement = _FailedGoodsMovement.FailedGoodsMovement
    association [0..1] to I_Product                  as _Product                  on  $projection.Product = _Product.Product
    association [0..1] to I_Batch                    as _Batch_2                  on  $projection.Plant    = _Batch_2.Plant    
                                                                                  and $projection.Material = _Batch_2.Material
                                                                                  and $projection.Batch    = _Batch_2.Batch                                              
--  start new associations for full coverage of text relations
    association [1..1] to I_Plant                    as _PlantText                on  $projection.Plant = _PlantText.Plant
    association [1..*] to I_MaterialText             as _MaterialText             on  $projection.Material = _MaterialText.Material
    association [1..*] to I_ProductText              as _ProductText              on  $projection.Product = _ProductText.Product
    association [1..1] to I_LogisticsOrder           as _OrderText                on  $projection.OrderID = _OrderText.OrderID
    association [0..1] to I_WBSElementBasicData      as _WBSElementText           on  $projection.WBSElementInternalID = _WBSElementText.WBSElementInternalID
    association [0..1] to I_StorageLocation          as _StorageLocationText      on  $projection.Plant           = _StorageLocationText.Plant
                                                                                  and $projection.StorageLocation = _StorageLocationText.StorageLocation
    association [0..*] to I_ProductionSupplyAreaText as _ProductionSupplyAreaText on  $projection.Plant                = _ProductionSupplyAreaText.Plant
                                                                                  and $projection.ProductionSupplyArea = _ProductionSupplyAreaText.ProductionSupplyArea
    association [0..1] to I_OrderConfirmation        as _ConfirmationText         on  $projection.ConfirmationGroup = _ConfirmationText.ConfirmationGroup
                                                                                  and $projection.ConfirmationCount = _ConfirmationText.OrderConfirmation
    association [0..1] to I_Supplier                 as _SupplierText             on  $projection.Supplier = _SupplierText.Supplier
    association [0..1] to I_Customer                 as _CustomerText             on  $projection.Customer = _CustomerText.Customer  
--  end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_FailedGoodsMovement'
  key affw.GoodsMovementException     as FailedGoodsMovement,
      -- representative key
  key affw.GoodsMovementExceptionItem as FailedGoodsMovementItem,

      // Admin
      @Semantics.systemDate.createdAt: true
      affw.CreationDate,
      @Semantics.systemTime.createdAt: true
      affw.CreationTime,
      @Semantics.user.createdBy: true
      affw.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      affw.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      affw.LastChangedByUser,  

      // System message (error) info
      @Semantics.businessDate.at: true
      affw.ErrorOccurrenceDate,
      affw.ErrorOccurrenceTime,
      affw.SystemMessageIdentification,
      affw.SystemMessageNumber,
      affw.SystemMessageType,
      affw.SystemMessageVariable1,
      affw.SystemMessageVariable2,
      affw.SystemMessageVariable3,
      affw.SystemMessageVariable4,

      // Goods Movement data
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      affw.Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.sapObjectNodeTypeReference: 'Product'
      @ObjectModel.text.association: '_ProductText'
      cast(affw.Material as productnumber preserving type) as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.sapObjectNodeTypeReference: 'Plant'
      affw.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_StorageLocation'
      @ObjectModel.sapObjectNodeTypeReference: 'StorageLocation'
      affw.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch_2'
      affw.Batch,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      @ObjectModel.sapObjectNodeTypeReference: 'GoodsMovementType'
      affw.GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementReasonCode'
      @ObjectModel.sapObjectNodeTypeReference: 'GoodsMovementReason'
      affw.GoodsMovementReasonCode,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      @ObjectModel.sapObjectNodeTypeReference: 'InventorySpecialStockType'
      affw.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode_2'
      @ObjectModel.sapObjectNodeTypeReference: 'InventoryUsabilityCode'
      affw.InventoryUsabilityCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementRefDocType'
      @ObjectModel.sapObjectNodeTypeReference: 'GoodsMovementReferenceDocType'
      affw.GoodsMovementRefDocType,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      @ObjectModel.sapObjectNodeTypeReference: 'DebitCreditCode'
      affw.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      affw.ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      @ObjectModel.sapObjectNodeTypeReference: 'ProductValuationType'
      affw.InventoryValuationType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @ObjectModel.sapObjectNodeTypeReference: 'SalesOrder'
      affw.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      affw.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      affw.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      affw.WBSElementInternalID_2,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      affw.Supplier,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_Customer'
      affw.Customer,
      @Semantics.text: true
      affw.GoodsRecipientName,
      @Semantics.text: true
      affw.UnloadingPointName,
      affw.IsCompletelyDelivered,
      affw.ReservationIsFinallyIssued,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSupplyAreaStdVH', element: 'ProductionSupplyArea' } } ]
      @ObjectModel.foreignKey.association: '_ProductionSupplyArea'
      @ObjectModel.sapObjectNodeTypeReference: 'ProductionSupplyArea'
      @ObjectModel.text.association: '_ProductionSupplyAreaText'
      affw.SupplyArea as ProductionSupplyArea,
--    @ObjectModel.foreignKey.association: '_MaterialStaging'
      affw.MaterialStaging,
      @ObjectModel.foreignKey.association: '_Warehouse' 
      affw.Warehouse,
      affw.StorageType,
      affw.StorageBin,

      // EWM storage data
      @ObjectModel.foreignKey.association: '_EWMWarehouse'
      affw.EWMWarehouse,
      affw.EWMStorageBin,
      affw.DestinationStorageBin,
      affw.HandlingUnitExternalID,

      // Document to be reversed
      @ObjectModel.foreignKey.association: '_MaterialDocumentHeader'
      affw.ReversalMaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentItem'
      affw.ReversalMaterialDocumentItem,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
      affw.ReversalMaterialDocumentYear, 

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LogisticsOrderStdVH', element: 'OrderID' } } ]
      @ObjectModel.foreignKey.association: '_LogisticsOrder'
      affw.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      affw.OrderCategory,
      @ObjectModel.foreignKey.association: '_Reservation'
      @ObjectModel.sapObjectNodeTypeReference: 'ReservationDocument'
      affw.Reservation,
      @ObjectModel.foreignKey.association: '_ReservationItem'
      affw.ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'
      affw.RecordType,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      affw.ConfirmationGroup,
      @ObjectModel.foreignKey.association: '_ConfirmationCount'
      affw.ConfirmationCount,
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      affw.OrderInternalBillOfOperations as OrderInternalID,
      @ObjectModel.foreignKey.association: '_OrderOperationInternalID'      
      affw.OrderIntBillOfOperationsItem  as OrderOperationInternalID,
      @ObjectModel.foreignKey.association: '_RepetitiveMfgConfirmation'
      @ObjectModel.sapObjectNodeTypeReference: 'RepetitiveMfgConfirmation'
      affw.RepetitiveMfgConfirmation,
      @ObjectModel.foreignKey.association: '_MRPController'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPController'
      affw.MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      @ObjectModel.sapObjectNodeTypeReference: 'ProductionSupervisor'
      affw.ProductionSupervisor,
      affw.RecordIsFromMfgProcgExec,
      affw.SerialNumberAssgmtProfile,
      affw.NumberOfSerialNumbers,
      affw.SerialNumber,
      affw.ShopFloorItem,
      affw.GdsMvtExcptnDepdntItemGroup,

      // Dates
      @ObjectModel.foreignKey.association: '_PostingDate'
      affw.PostingDate,
      @ObjectModel.foreignKey.association: '_DocumentDate'
      affw.DocumentDate,
      @ObjectModel.foreignKey.association: '_SLEDOrManufactureDate'
      affw.SLEDOrManufactureDate,

      // Quantity
      @ObjectModel.foreignKey.association: '_EntryUnit'
      affw.GoodsMovementEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'GoodsMovementEntryUnit'
      @Aggregation.default: #SUM
      affw.GoodsMovementEntryQty,

      // Currency
      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      affw.Currency,

      // Associations
      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_FailedGoodsMovement'
      affw._GoodsMovementException,
--    @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _FailedGoodsMovement,
      affw._CreatedByUser,
      affw._ChangedByUser,
      affw._Order,
      affw._LogisticsOrder,
      affw._ProductCostCtrlgOrder,
      affw._OrderCategory,
      @Consumption.hidden: true
      affw._OrderInternalID,
      @Consumption.hidden: true
      affw._OrderOperationInternalID,
      affw._MRPController,
      affw._ProductionSupervisor,
      @Consumption.hidden: true
      affw._ConfirmationGroup,
      affw._ConfirmationCount,
      affw._RepetitiveMfgConfirmation,
      affw._Reservation,
      affw._ReservationItem,
      affw._ReservationRecordType,
      affw._Material,
      _Product,
      affw._Plant,
      affw._StorageLocation,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Batch_2'
      affw._Batch,
      _Batch_2,
      affw._GoodsMovementType,
      affw._GoodsMovementRefDocType,
      affw._GoodsMovementReasonCode,
      affw._InventorySpecialStockType,
      affw._InventoryValuationType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_InventoryUsabilityCode_2'
      affw._InventoryUsabilityCode,
      affw._InventoryUsabilityCode_2,
      affw._ConsumptionPosting,
      affw._DebitCreditCode,
      affw._SalesOrder,
      affw._SalesOrderItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      affw._WBSElement,
      affw._WBSElementBasic,
      affw._Supplier,
      affw._Customer,
      @Consumption.hidden: true
      affw._SupplierCompanyByPlant,
      @Consumption.hidden: true
      affw._CustomerCompanyByPlant,
      affw._SupplyArea as _ProductionSupplyArea,
      affw._Warehouse,
      affw._EWMWarehouse,
      affw._EWMStorageBin,
      affw._DestinationStorageBin,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocumentHeader2'
      affw._MaterialDocumentHeader,
      affw._MaterialDocumentHeader2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocumentItem2'
      affw._MaterialDocumentItem,
      affw._MaterialDocumentItem2,
      affw._MaterialDocumentYear,
      affw._PostingDate,
      affw._DocumentDate,
      affw._SLEDOrManufactureDate,
      affw._Currency,
      affw._EntryUnit,
      
      // Text relations
      _MaterialText,
      _ProductText,
      _PlantText,
      _OrderText,
      _ProductionSupplyAreaText,
      _ConfirmationText,
      _WBSElementText,
      _StorageLocationText,
      _SupplierText,
      _CustomerText
}
where affw.SystemMessageIdentification <> ''
  and affw.SystemMessageNumber <> ''             // only failed AFFW records with
  and tafwd.SystemMessageIdentification is null; // only if error is not marked as "phantom error"
```
