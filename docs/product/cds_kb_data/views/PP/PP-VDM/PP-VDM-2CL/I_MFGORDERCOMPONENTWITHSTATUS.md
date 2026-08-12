---
name: I_MFGORDERCOMPONENTWITHSTATUS
description: "Mfgordercomponentwithstatus"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `ReservationRecordType` | ✓ | |  |  |  |  |
| `MaterialGroup` |  | |  | `cast(comp.MaterialGroup as matkl preserving type)` |  |  |
| `Material` |  | |  | `cast(comp.Material as matnr preserving type)` |  |  |
| `Plant` |  | |  | `cast(comp.Plant as werks_d preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  | `cast(comp.ManufacturingOrderType as aufart preserving type)` |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderSequence` |  | |  |  |  |  |
| `MfgOrderSequenceCategory` |  | |  |  |  |  |
| `ManufacturingOrderOperation` |  | |  |  |  |  |
| `ProductionPlant` |  | |  | `cast(comp.ProductionPlant as pwwrk preserving type)` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  |  |  |  |
| `AssemblyMRPController` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `ReservationItemCreationCode` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `MatlCompIsMarkedForDeletion` |  | |  |  |  |  |
| `MaterialComponentIsMissing` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `MatlCompIsTextItem` |  | |  |  |  |  |
| `MaterialPlanningRelevance` |  | |  |  |  |  |
| `MatlCompIsConfigurable` |  | |  |  |  |  |
| `MaterialComponentIsClassified` |  | |  |  |  |  |
| `MaterialCompIsIntraMaterial` |  | |  |  |  |  |
| `MaterialIsDirectlyProduced` |  | |  |  |  |  |
| `MaterialIsDirectlyProcured` |  | |  |  |  |  |
| `MaterialComponentIsCreated` |  | |  |  |  |  |
| `MaterialComponentIsReleased` |  | |  |  |  |  |
| `MaterialComponentIsPrinted` |  | |  |  |  |  |
| `MaterialComponentIsDeleted` |  | |  |  |  |  |
| `MatlCompIsCreatedByOrderSplit` |  | |  |  |  |  |
| `MaterialComponentText` |  | |  |  |  |  |
| `MaterialComponentSecondText` |  | |  |  |  |  |
| `MaterialComponentHasLongText` |  | |  |  |  |  |
| `LongTextLanguage` |  | |  |  |  |  |
| `MatlCompRequirementDate` |  | |  |  |  |  |
| `MatlCompRequirementTime` |  | |  |  |  |  |
| `LatestRequirementDate` |  | |  |  |  |  |
| `RequirementType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `MRPController` |  | |  | `cast(_MaterialPlant.MRPController as pph_dispo preserving type)` |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `EffectivityParameterVariant` |  | |  |  |  |  |
| `MatlCompFreeDefinedAttribute` |  | |  |  |  |  |
| `MaterialComponentSortText` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterialInternalID` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `BOMItemInternalChangeCount` |  | |  |  |  |  |
| `InheritedBOMItemNode` |  | |  |  |  |  |
| `BillOfMaterialItemCategory` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BOMExplosionDateID` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `PurchaseOrderScheduleLine` |  | |  |  |  |  |
| `Supplier` |  | |  | `cast(comp.Supplier as lifnr preserving type)` |  |  |
| `DeliveryDurationInDays` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `ExternalProcessingPrice` |  | |  |  |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |  |  |
| `GoodsMovementIsAllowed` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `SupplyArea` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `MaterialCompCostingRelevancy` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  | `cast(comp.CompanyCode as bukrs preserving type)` |  |  |
| `GLAccount` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  | `cast(comp.ControllingArea as kokrs preserving type)` |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `EarmarkedFundsDocumentItem` |  | |  |  |  |  |
| `Batch` |  | |  | `cast(comp.Batch as charg_d preserving type)` |  |  |
| `BatchEntryDeterminationCode` |  | |  |  |  |  |
| `BatchSplitType` |  | |  |  |  |  |
| `BatchMasterReservationItem` |  | |  |  |  |  |
| `BatchClassification` |  | |  |  |  |  |
| `MaterialCompIsVariableSized` |  | |  |  |  |  |
| `VariableSizeItemUnit` |  | |  |  |  |  |
| `VariableSizeItemQuantity` |  | |  |  |  |  |
| `VariableSizeComponentUnit` |  | |  |  |  |  |
| `VariableSizeComponentQuantity` |  | |  |  |  |  |
| `VariableSizeDimensionUnit` |  | |  |  |  |  |
| `VariableSizeDimension1` |  | |  |  |  |  |
| `VariableSizeDimension2` |  | |  |  |  |  |
| `VariableSizeDimension3` |  | |  |  |  |  |
| `VariableSizeCompFormulaKey` |  | |  |  |  |  |
| `MaterialCompIsAlternativeItem` |  | |  |  |  |  |
| `AlternativeItemGroup` |  | |  |  |  |  |
| `AlternativeItemStrategy` |  | |  |  |  |  |
| `AlternativeItemPriority` |  | |  |  |  |  |
| `UsageProbabilityPercent` |  | |  |  |  |  |
| `AlternativeMstrReservationItem` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `AssemblyOrderPathValue` |  | |  |  |  |  |
| `AssemblyOrderLevelValue` |  | |  |  |  |  |
| `DiscontinuationGroup` |  | |  |  |  |  |
| `MatlCompDiscontinuationType` |  | |  |  |  |  |
| `MatlCompIsFollowUpMaterial` |  | |  |  |  |  |
| `FollowUpGroup` |  | |  |  |  |  |
| `FollowUpMaterial` |  | |  |  |  |  |
| `FollowUpMaterialIsActive` |  | |  |  |  |  |
| `DiscontinuationMasterResvnItem` |  | |  |  |  |  |
| `MaterialProvisionType` |  | |  |  |  |  |
| `MatlComponentSparePartType` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `OperationLeadTimeOffsetUnit` |  | |  |  |  |  |
| `OperationLeadTimeOffset` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `MaterialQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  | `cast(comp.BaseUnit as meins preserving type)` |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `WithdrawnQuantity` |  | |  |  |  |  |
| `ConfirmedAvailableQuantity` |  | |  |  |  |  |
| `MaterialCompOriginalQuantity` |  | |  |  |  |  |
| `EntryUnit` |  | |  | `cast(comp.EntryUnit as erfme preserving type)` |  |  |
| `GoodsMovementEntryQty` |  | |  |  |  |  |
| `Currency` |  | |  | `cast(comp.Currency as waers preserving type)` |  |  |
| `WithdrawnQuantityAmount` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `CriticalComponentType` |  | |  |  |  |  |
| `CriticalComponentLevel` |  | |  |  |  |  |
| `_MRPController` | | ✓ | | | | |
| `_MaterialPlant` | | ✓ | | | | |

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
