---
name: I_MFGORDERCOMPONENTWITHSTATUS
description: Mfgordercomponentwithstatus
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
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERCOMPONENTWITHSTATUS

**Mfgordercomponentwithstatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Reservation` | `comp.Reservation` |
| key `ReservationItem` | `comp.ReservationItem` |
| key `ReservationRecordType` | `comp.ReservationRecordType` |
| `MaterialGroup` | `cast(comp.MaterialGroup as matkl preserving type)` |
| `Material` | `cast(comp.Material as matnr preserving type)` |
| `Plant` | `cast(comp.Plant as werks_d preserving type)` |
| `ManufacturingOrderCategory` | `comp.ManufacturingOrderCategory` |
| `ManufacturingOrderType` | `cast(comp.ManufacturingOrderType as aufart preserving type)` |
| `ManufacturingOrder` | `comp.ManufacturingOrder` |
| `ManufacturingOrderSequence` | `comp.ManufacturingOrderSequence` |
| `MfgOrderSequenceCategory` | `comp.MfgOrderSequenceCategory` |
| `ManufacturingOrderOperation` | `comp.ManufacturingOrderOperation` |
| `ProductionPlant` | `cast(comp.ProductionPlant as pwwrk preserving type)` |
| `OrderInternalID` | `comp.OrderInternalID` |
| `OrderOperationInternalID` | `comp.OrderOperationInternalID` |
| `AssemblyMRPController` | `comp.AssemblyMRPController` |
| `ProductionSupervisor` | `comp.ProductionSupervisor` |
| `ReservationItemCreationCode` | `comp.ReservationItemCreationCode` |
| `ReservationIsFinallyIssued` | `comp.ReservationIsFinallyIssued` |
| `MatlCompIsMarkedForDeletion` | `comp.MatlCompIsMarkedForDeletion` |
| `MaterialComponentIsMissing` | `comp.MaterialComponentIsMissing` |
| `IsBulkMaterialComponent` | `comp.IsBulkMaterialComponent` |
| `MatlCompIsMarkedForBackflush` | `comp.MatlCompIsMarkedForBackflush` |
| `MatlCompIsTextItem` | `comp.MatlCompIsTextItem` |
| `MaterialPlanningRelevance` | `comp.MaterialPlanningRelevance` |
| `MatlCompIsConfigurable` | `comp.MatlCompIsConfigurable` |
| `MaterialComponentIsClassified` | `comp.MaterialComponentIsClassified` |
| `MaterialCompIsIntraMaterial` | `comp.MaterialCompIsIntraMaterial` |
| `MaterialIsDirectlyProduced` | `comp.MaterialIsDirectlyProduced` |
| `MaterialIsDirectlyProcured` | `comp.MaterialIsDirectlyProcured` |
| `MaterialComponentIsCreated` | `stat.MaterialComponentIsCreated` |
| `MaterialComponentIsReleased` | `stat.MaterialComponentIsReleased` |
| `MaterialComponentIsPrinted` | `stat.MaterialComponentIsPrinted` |
| `MaterialComponentIsDeleted` | `stat.MaterialComponentIsDeleted` |
| `MatlCompIsCreatedByOrderSplit` | `stat.MatlCompIsCreatedByOrderSplit` |
| `MaterialComponentText` | `comp.MaterialComponentText` |
| `MaterialComponentSecondText` | `comp.MaterialComponentSecondText` |
| `MaterialComponentHasLongText` | `comp.MaterialComponentHasLongText` |
| `LongTextLanguage` | `comp.LongTextLanguage` |
| `MatlCompRequirementDate` | `comp.MatlCompRequirementDate` |
| `MatlCompRequirementTime` | `comp.MatlCompRequirementTime` |
| `LatestRequirementDate` | `comp.LatestRequirementDate` |
| `RequirementType` | `comp.RequirementType` |
| `SalesOrder` | `comp.SalesOrder` |
| `SalesOrderItem` | `comp.SalesOrderItem` |
| `WBSElementInternalID` | `comp.WBSElementInternalID` |
| `MRPController` | `cast(_MaterialPlant.MRPController as pph_dispo preserving type)` |
| `ProductConfiguration` | `comp.ProductConfiguration` |
| `ChangeNumber` | `comp.ChangeNumber` |
| `MaterialRevisionLevel` | `comp.MaterialRevisionLevel` |
| `EffectivityParameterVariant` | `comp.EffectivityParameterVariant` |
| `MatlCompFreeDefinedAttribute` | `comp.MatlCompFreeDefinedAttribute` |
| `MaterialComponentSortText` | `comp.MaterialComponentSortText` |
| `ObjectInternalID` | `comp.ObjectInternalID` |
| `BillOfMaterialCategory` | `comp.BillOfMaterialCategory` |
| `BillOfMaterialInternalID` | `comp.BillOfMaterialInternalID` |
| `BillOfMaterialVariantUsage` | `comp.BillOfMaterialVariantUsage` |
| `BillOfMaterialVariant` | `comp.BillOfMaterialVariant` |
| `BillOfMaterialItemNodeNumber` | `comp.BillOfMaterialItemNodeNumber` |
| `BillOfMaterialVersion` | `comp.BillOfMaterialVersion` |
| `BOMItemInternalChangeCount` | `comp.BOMItemInternalChangeCount` |
| `InheritedBOMItemNode` | `comp.InheritedBOMItemNode` |
| `BillOfMaterialItemCategory` | `comp.BillOfMaterialItemCategory` |
| `BillOfMaterialItemNumber` | `comp.BillOfMaterialItemNumber` |
| `BOMExplosionDateID` | `comp.BOMExplosionDateID` |
| `PurchasingInfoRecord` | `comp.PurchasingInfoRecord` |
| `PurchasingGroup` | `comp.PurchasingGroup` |
| `PurchaseRequisition` | `comp.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `comp.PurchaseRequisitionItem` |
| `PurchaseOrder` | `comp.PurchaseOrder` |
| `PurchaseOrderItem` | `comp.PurchaseOrderItem` |
| `PurchaseOrderScheduleLine` | `comp.PurchaseOrderScheduleLine` |
| `Supplier` | `cast(comp.Supplier as lifnr preserving type)` |
| `DeliveryDurationInDays` | `comp.DeliveryDurationInDays` |
| `MaterialGoodsReceiptDuration` | `comp.MaterialGoodsReceiptDuration` |
| `ExternalProcessingPrice` | `comp.ExternalProcessingPrice` |
| `NumberOfOperationPriceUnits` | `comp.NumberOfOperationPriceUnits` |
| `GoodsMovementIsAllowed` | `comp.GoodsMovementIsAllowed` |
| `StorageLocation` | `comp.StorageLocation` |
| `DebitCreditCode` | `comp.DebitCreditCode` |
| `GoodsMovementType` | `comp.GoodsMovementType` |
| `InventorySpecialStockType` | `comp.InventorySpecialStockType` |
| `InventorySpecialStockValnType` | `comp.InventorySpecialStockValnType` |
| `ConsumptionPosting` | `comp.ConsumptionPosting` |
| `SupplyArea` | `comp.SupplyArea` |
| `GoodsRecipientName` | `comp.GoodsRecipientName` |
| `UnloadingPointName` | `comp.UnloadingPointName` |
| `MaterialCompCostingRelevancy` | `comp.MaterialCompCostingRelevancy` |
| `BusinessArea` | `comp.BusinessArea` |
| `CompanyCode` | `cast(comp.CompanyCode as bukrs preserving type)` |
| `GLAccount` | `comp.GLAccount` |
| `FunctionalArea` | `comp.FunctionalArea` |
| `ControllingArea` | `cast(comp.ControllingArea as kokrs preserving type)` |
| `AccountAssignmentCategory` | `comp.AccountAssignmentCategory` |
| `EarmarkedFundsDocument` | `comp.EarmarkedFundsDocument` |
| `EarmarkedFundsDocumentItem` | `comp.EarmarkedFundsDocumentItem` |
| `Batch` | `cast(comp.Batch as charg_d preserving type)` |
| `BatchEntryDeterminationCode` | `comp.BatchEntryDeterminationCode` |
| `BatchSplitType` | `comp.BatchSplitType` |
| `BatchMasterReservationItem` | `comp.BatchMasterReservationItem` |
| `BatchClassification` | `comp.BatchClassification` |
| `MaterialCompIsVariableSized` | `comp.MaterialCompIsVariableSized` |
| `VariableSizeItemUnit` | `comp.VariableSizeItemUnit` |
| `VariableSizeItemQuantity` | `comp.VariableSizeItemQuantity` |
| `VariableSizeComponentUnit` | `comp.VariableSizeComponentUnit` |
| `VariableSizeComponentQuantity` | `comp.VariableSizeComponentQuantity` |
| `VariableSizeDimensionUnit` | `comp.VariableSizeDimensionUnit` |
| `VariableSizeDimension1` | `comp.VariableSizeDimension1` |
| `VariableSizeDimension2` | `comp.VariableSizeDimension2` |
| `VariableSizeDimension3` | `comp.VariableSizeDimension3` |
| `VariableSizeCompFormulaKey` | `comp.VariableSizeCompFormulaKey` |
| `MaterialCompIsAlternativeItem` | `comp.MaterialCompIsAlternativeItem` |
| `AlternativeItemGroup` | `comp.AlternativeItemGroup` |
| `AlternativeItemStrategy` | `comp.AlternativeItemStrategy` |
| `AlternativeItemPriority` | `comp.AlternativeItemPriority` |
| `UsageProbabilityPercent` | `comp.UsageProbabilityPercent` |
| `AlternativeMstrReservationItem` | `comp.AlternativeMstrReservationItem` |
| `MaterialComponentIsPhantomItem` | `comp.MaterialComponentIsPhantomItem` |
| `OrderPathValue` | `comp.OrderPathValue` |
| `OrderLevelValue` | `comp.OrderLevelValue` |
| `Assembly` | `comp.Assembly` |
| `AssemblyOrderPathValue` | `comp.AssemblyOrderPathValue` |
| `AssemblyOrderLevelValue` | `comp.AssemblyOrderLevelValue` |
| `DiscontinuationGroup` | `comp.DiscontinuationGroup` |
| `MatlCompDiscontinuationType` | `comp.MatlCompDiscontinuationType` |
| `MatlCompIsFollowUpMaterial` | `comp.MatlCompIsFollowUpMaterial` |
| `FollowUpGroup` | `comp.FollowUpGroup` |
| `FollowUpMaterial` | `comp.FollowUpMaterial` |
| `FollowUpMaterialIsActive` | `comp.FollowUpMaterialIsActive` |
| `DiscontinuationMasterResvnItem` | `comp.DiscontinuationMasterResvnItem` |
| `MaterialProvisionType` | `comp.MaterialProvisionType` |
| `MatlComponentSparePartType` | `comp.MatlComponentSparePartType` |
| `LeadTimeOffset` | `comp.LeadTimeOffset` |
| `OperationLeadTimeOffsetUnit` | `comp.OperationLeadTimeOffsetUnit` |
| `OperationLeadTimeOffset` | `comp.OperationLeadTimeOffset` |
| `QuantityIsFixed` | `comp.QuantityIsFixed` |
| `IsNetScrap` | `comp.IsNetScrap` |
| `ComponentScrapInPercent` | `comp.ComponentScrapInPercent` |
| `OperationScrapInPercent` | `comp.OperationScrapInPercent` |
| `MaterialQtyToBaseQtyNmrtr` | `comp.MaterialQtyToBaseQtyNmrtr` |
| `MaterialQtyToBaseQtyDnmntr` | `comp.MaterialQtyToBaseQtyDnmntr` |
| `BaseUnit` | `cast(comp.BaseUnit as meins preserving type)` |
| `RequiredQuantity` | `comp.RequiredQuantity` |
| `WithdrawnQuantity` | `comp.WithdrawnQuantity` |
| `ConfirmedAvailableQuantity` | `comp.ConfirmedAvailableQuantity` |
| `MaterialCompOriginalQuantity` | `comp.MaterialCompOriginalQuantity` |
| `EntryUnit` | `cast(comp.EntryUnit as erfme preserving type)` |
| `GoodsMovementEntryQty` | `comp.GoodsMovementEntryQty` |
| `Currency` | `cast(comp.Currency as waers preserving type)` |
| `WithdrawnQuantityAmount` | `comp.WithdrawnQuantityAmount` |
| `StockSegment` | `comp.StockSegment` |
| `RequirementSegment` | `comp.RequirementSegment` |
| `CriticalComponentType` | `comp.CriticalComponentType` |
| `CriticalComponentLevel` | `comp.CriticalComponentLevel` |
| `_MRPController` | *Association* |
| `_MaterialPlant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPController` | `I_MRPController` | [0..1] |
| `_MaterialPlant` | `I_MaterialPlant` | [0..1] |
| `_Extension` | `E_ReservationDocumentItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_AssemblyMRPController', '_MRPController', '_ProductionSupervisor', '_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IMFGORDCOMPWSTS'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderComponent'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Component with Status'
// Mfg Order Component view with additional component system status indicators

define view entity I_MfgOrderComponentWithStatus
  as select from I_ManufacturingOrderComponent  as comp
      inner join P_OrderOpCompStatusBasicAggrgn as stat on stat.ObjectInternalID = comp.ObjectInternalID

  association [0..1] to I_MRPController           as _MRPController on  $projection.Plant         = _MRPController.Plant
                                                                    and $projection.MRPController = _MRPController.MRPController
  association [0..1] to I_MaterialPlant           as _MaterialPlant on  $projection.Plant    = _MaterialPlant.Plant
                                                                    and $projection.Material = _MaterialPlant.Material
  association [1..1] to E_ReservationDocumentItem as _Extension     on  $projection.Reservation           = _Extension.Reservation
                                                                    and $projection.ReservationItem       = _Extension.ReservationItem
                                                                    and $projection.ReservationRecordType = _Extension.RecordType
{
      // Key
      @ObjectModel.foreignKey.association: '_Reservation'
  key comp.Reservation,
      @ObjectModel.foreignKey.association: '_ReservationItem'
      @ObjectModel.text.element: ['MaterialComponentText']
  key comp.ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'
  key comp.ReservationRecordType,

      //Material data
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      cast(comp.MaterialGroup as matkl preserving type)           as MaterialGroup ,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      cast(comp.Material as matnr preserving type)                as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      cast(comp.Plant as werks_d preserving type)                 as Plant,

      // Order and Operation data
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      comp.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(comp.ManufacturingOrderType as aufart preserving type) as ManufacturingOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      comp.ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      comp.ManufacturingOrderSequence,
      @ObjectModel.foreignKey.association: '_MfgOrderSequenceCategory'
      comp.MfgOrderSequenceCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemKey'
      comp.ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(comp.ProductionPlant as pwwrk preserving type)         as ProductionPlant,
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      comp.OrderInternalID,
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      comp.OrderOperationInternalID,
      @ObjectModel.foreignKey.association: '_AssemblyMRPController'
      comp.AssemblyMRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      comp.ProductionSupervisor,

      // Attributes
      comp.ReservationItemCreationCode,
      comp.ReservationIsFinallyIssued,
      comp.MatlCompIsMarkedForDeletion,
      comp.MaterialComponentIsMissing,
      comp.IsBulkMaterialComponent,
      comp.MatlCompIsMarkedForBackflush,
      comp.MatlCompIsTextItem,
      comp.MaterialPlanningRelevance,
      comp.MatlCompIsConfigurable,
      comp.MaterialComponentIsClassified,
      comp.MaterialCompIsIntraMaterial,
      comp.MaterialIsDirectlyProduced,
      comp.MaterialIsDirectlyProcured,

      // Status
      stat.MaterialComponentIsCreated,      // I0001
      stat.MaterialComponentIsReleased,     // I0002
      stat.MaterialComponentIsPrinted,      // I0007
      stat.MaterialComponentIsDeleted,      // I0013
      stat.MatlCompIsCreatedByOrderSplit,   // I0487

      // Text
      @Semantics.text: true
      comp.MaterialComponentText,
      @Semantics.text: true
      comp.MaterialComponentSecondText,
      comp.MaterialComponentHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      comp.LongTextLanguage,

      // Date and Time
      @Semantics.businessDate.at: true
      comp.MatlCompRequirementDate,
      comp.MatlCompRequirementTime,
      comp.LatestRequirementDate,

      // Assignments
      @ObjectModel.foreignKey.association: '_RequirementType'
      comp.RequirementType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      comp.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      comp.SalesOrderItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      comp.WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(_MaterialPlant.MRPController as pph_dispo preserving type) as MRPController,
      comp.ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      comp.ChangeNumber,
      comp.MaterialRevisionLevel,
      comp.EffectivityParameterVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialComponentSortText'
      comp.MatlCompFreeDefinedAttribute,
      comp.MaterialComponentSortText,
      @ObjectModel.foreignKey.association: '_StatusObject'
      comp.ObjectInternalID,

      // Assignments BOM
      comp.BillOfMaterialCategory,
      comp.BillOfMaterialInternalID,
      comp.BillOfMaterialVariantUsage,
      comp.BillOfMaterialVariant,
      comp.BillOfMaterialItemNodeNumber,
      comp.BillOfMaterialVersion,
      comp.BOMItemInternalChangeCount,
      comp.InheritedBOMItemNode,
      comp.BillOfMaterialItemCategory,
      comp.BillOfMaterialItemNumber,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      comp.BOMExplosionDateID,

      // Assignments Purchasing
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingInfoRecordStdVH', element: 'PurchasingInfoRecord' } } ]    
      comp.PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      comp.PurchasingGroup,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseRequisitionStdVH', element: 'PurchaseRequisition' } } ]
      comp.PurchaseRequisition,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseRequisitionItemStdVH', element: 'PurchaseRequisitionItem' } } ]
      comp.PurchaseRequisitionItem,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseOrderStdVH', element: 'PurchaseOrder' } } ]
      comp.PurchaseOrder,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaseOrderItemStdVH', element: 'PurchaseOrderItem' } } ]
      comp.PurchaseOrderItem,
      comp.PurchaseOrderScheduleLine,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      cast(comp.Supplier as lifnr preserving type)                as Supplier,
      comp.DeliveryDurationInDays,
      comp.MaterialGoodsReceiptDuration,
      -- Price
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      comp.ExternalProcessingPrice,
      comp.NumberOfOperationPriceUnits,   

      // Goods Movement data
      comp.GoodsMovementIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      comp.StorageLocation,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      comp.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      comp.GoodsMovementType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      comp.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      comp.InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      comp.ConsumptionPosting,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSupplyAreaStdVH', element: 'ProductionSupplyArea' } } ]
      @ObjectModel.foreignKey.association: '_SupplyArea'
      @ObjectModel.text.association: '_SupplyAreaText'
      comp.SupplyArea,
      @Semantics.text: true
      comp.GoodsRecipientName,
      @Semantics.text: true
      comp.UnloadingPointName,

      // Assignments FI/CO
      comp.MaterialCompCostingRelevancy,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      comp.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast(comp.CompanyCode as bukrs preserving type)     as CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      comp.GLAccount,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      comp.FunctionalArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast(comp.ControllingArea as kokrs preserving type) as ControllingArea,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      comp.AccountAssignmentCategory,
      @ObjectModel.foreignKey.association: '_EarmarkedFunds'
      comp.EarmarkedFundsDocument,
--    @ObjectModel.foreignKey.association: '_EarmarkedFundsItem'
      comp.EarmarkedFundsDocumentItem,

      // Batch data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'
      cast(comp.Batch as charg_d preserving type) as Batch,
--    @ObjectModel.foreignKey.association: '_BatchEntryDetermination'         
      comp.BatchEntryDeterminationCode,
      @ObjectModel.foreignKey.association: '_BatchSplitType'      
      comp.BatchSplitType,
      comp.BatchMasterReservationItem,
      comp.BatchClassification,

      // Variable-size item data
      comp.MaterialCompIsVariableSized,
      @ObjectModel.foreignKey.association: '_VariableSizeItemUnit'
      comp.VariableSizeItemUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
      @Aggregation.default: #SUM
      comp.VariableSizeItemQuantity,   
      @ObjectModel.foreignKey.association: '_VariableSizeCompUnit'
      comp.VariableSizeComponentUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      @Aggregation.default: #SUM
      comp.VariableSizeComponentQuantity,
      @ObjectModel.foreignKey.association: '_VariableSizeDimensionUnit'
      comp.VariableSizeDimensionUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension1,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension2,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension3,
      comp.VariableSizeCompFormulaKey,
 
      // Alternative item data
      comp.MaterialCompIsAlternativeItem,
      comp.AlternativeItemGroup,
      comp.AlternativeItemStrategy,
      comp.AlternativeItemPriority,
      comp.UsageProbabilityPercent,
      comp.AlternativeMstrReservationItem,

      // Phantom assembly
      comp.MaterialComponentIsPhantomItem,
      comp.OrderPathValue,
      comp.OrderLevelValue,
      @ObjectModel.foreignKey.association: '_PhantomAssembly'
      @ObjectModel.text.association: '_PhantomAssemblyText'
      comp.Assembly,
      comp.AssemblyOrderPathValue,
      comp.AssemblyOrderLevelValue,

      // Discontinuation
      comp.DiscontinuationGroup,
      @ObjectModel.foreignKey.association: '_DiscontinuationType'
      comp.MatlCompDiscontinuationType,
      comp.MatlCompIsFollowUpMaterial,
      comp.FollowUpGroup,
      @ObjectModel.foreignKey.association: '_FollowUpMaterial'
      @ObjectModel.text.association: '_FollowUpMaterialText'
      comp.FollowUpMaterial,
      comp.FollowUpMaterialIsActive,
      comp.DiscontinuationMasterResvnItem,

      // Material provision
      @ObjectModel.foreignKey.association: '_ProvisionType'
      comp.MaterialProvisionType,

      // Spare part
      @ObjectModel.foreignKey.association: '_SparePartType'
      comp.MatlComponentSparePartType,

      // Lead-Time offset
      comp.LeadTimeOffset,
      @ObjectModel.foreignKey.association: '_OpLeadTimeOffsetUnit'
      comp.OperationLeadTimeOffsetUnit,
      comp.OperationLeadTimeOffset,

      // Quantities and UoM
      comp.QuantityIsFixed,
      comp.IsNetScrap,
      comp.ComponentScrapInPercent,
      comp.OperationScrapInPercent,
      comp.MaterialQtyToBaseQtyNmrtr,
      comp.MaterialQtyToBaseQtyDnmntr,
      -- Base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      cast(comp.BaseUnit as meins preserving type)  as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.WithdrawnQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.ConfirmedAvailableQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.MaterialCompOriginalQuantity,
      -- Entry unit
      @ObjectModel.foreignKey.association: '_EntryUnit'
      cast(comp.EntryUnit as erfme preserving type) as EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      comp.GoodsMovementEntryQty,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      cast(comp.Currency as waers preserving type)  as Currency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      comp.WithdrawnQuantityAmount,

      // Fashion Manufacturing Fields
      comp.StockSegment,
      comp.RequirementSegment,
      comp.CriticalComponentType,
      comp.CriticalComponentLevel,
            
      // Associations
      comp._Reservation,
      comp._ReservationItem,
      comp._ReservationRecordType,
      comp._MfgOrder,
      comp._MfgOrderCategory,
      comp._MfgOrderType,
      comp._MfgOrderOperation,
      comp._MfgOrderOperationBySemKey,
      comp._MfgOrderSequence,
      comp._MfgOrderSequenceCategory,
      comp._MfgOrderComponentLongText,
      @Consumption.hidden: true
      comp._OrderInternalID,
      comp._ProductionPlant,
      comp._AssemblyMRPController,
      comp._ProductionSupervisor,
      comp._RequirementType,
      comp._MaterialGroup,
      comp._Material,
      _MaterialPlant,
      _MRPController,
      comp._Product,
      comp._ProductPlant,
      comp._ProductStorageLocation,
      comp._ProductSupplyPlanning,
      comp._ProductUnitsOfMeasure,
      comp._Plant,
      comp._StorageLocation,
      comp._Batch,
      comp._BatchSplitType,
      comp._DebitCreditCode,
      comp._GoodsMovementType,
      comp._InventorySpecialStockType,
      comp._InventorySpecialStockValnType,
      comp._ConsumptionPosting,
      comp._SupplyArea,
      comp._FollowUpMaterial,
      comp._DiscontinuationType,
      comp._ProvisionType,
      comp._SparePartType,
      comp._PhantomAssembly,
      comp._BOMExplosion,
      comp._BillOfMaterialItem,
      comp._BOMItemCategory,
      comp._SalesOrder,
      comp._SalesOrderItem,
      comp._WBSElementBasicData,
      comp._EnterpriseProjectElement,
      comp._ChangeNumber,
      comp._MaterialRevisionLevel,
      comp._PurchasingGroup,
      comp._PurchasingInfoRecord,
      comp._PurchaseOrder,
      comp._PurchaseOrderItem,
      comp._PurchaseRequisition,
      comp._PurchaseRequisitionItem,
      comp._Supplier,
      @Consumption.hidden: true
      comp._SupplierCompanyByPlant,
      comp._CompanyCode,
      comp._BusinessArea,
      comp._GLAccount,
      comp._ControllingArea,
      comp._FunctionalArea,
      comp._AccountAssignmentCategory,
      comp._EarmarkedFunds,
      comp._EarmarkedFundsItem,
      comp._OpLeadTimeOffsetUnit,
      comp._VariableSizeItemUnit,
      comp._VariableSizeCompUnit,
      comp._VariableSizeDimensionUnit,
      comp._BaseUnit,
      comp._EntryUnit,
      comp._Currency,
      comp._StatusObject,
      comp._LongTextLanguage,
      stat._ComponentIsCreatedCode,
      stat._ComponentIsReleasedCode,
      stat._ComponentIsPrintedCode,
      stat._ComponentIsDeletedCode,
      stat._CompIsCreatedByOrderSplitCode,
      
      // Text relations
      comp._MfgOrderText,
      comp._PlantText,
      comp._ProductionPlantText,
      comp._MaterialText,
      comp._WBSElementText,
      comp._StorageLocationText,
      comp._SupplyAreaText,
      comp._SupplierText,
      comp._PurchasingGroupText,
      comp._PhantomAssemblyText,
      comp._FollowUpMaterialText,
      comp._StatusObjectText,
      comp._BusinessAreaText,
      comp._CompanyCodeText,
      comp._ControllingAreaText,
      comp._FunctionalAreaText
};
```
