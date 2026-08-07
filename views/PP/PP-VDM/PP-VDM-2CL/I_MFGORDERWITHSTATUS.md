---
name: I_MFGORDERWITHSTATUS
description: "Mfgorderwithstatus"
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
# I_MFGORDERWITHSTATUS

**Mfgorderwithstatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ManufacturingOrderText` |  | |  |  |  |  |
| `ManufacturingOrderHasLongText` |  | |  |  |  |  |
| `LongTextLanguageCode` |  | |  |  |  |  |
| `ManufacturingOrderImportance` |  | |  |  |  |  |
| `MfgOrderHasMultipleItems` |  | |  |  |  |  |
| `MfgOrderIsPartOfCollvOrder` |  | |  |  |  |  |
| `MfgOrderHierarchyLevel` |  | |  |  |  |  |
| `MfgOrderHierarchyLevelValue` |  | |  |  |  |  |
| `MfgOrderHierarchyPathValue` |  | |  |  |  |  |
| `ProdnProcgIsFlexible` |  | |  |  |  |  |
| `OrderIsCreated` |  | |  |  |  |  |
| `OrderIsReleased` |  | |  |  |  |  |
| `OrderIsPrinted` |  | |  |  |  |  |
| `OrderIsPartiallyPrinted` |  | |  | `cast(stat.OrderIsPartiallyPrinted as orderispartiallyprinted preserving type)` |  |  |
| `OrderIsConfirmed` |  | |  |  |  |  |
| `OrderIsPartiallyConfirmed` |  | |  |  |  |  |
| `OrderIsDelivered` |  | |  |  |  |  |
| `OrderIsDeleted` |  | |  |  |  |  |
| `OrderIsProductCosted` |  | |  | `cast(stat.OrderIsProductCosted as orderisproductcosted preserving type)` |  |  |
| `OrderIsPreCosted` |  | |  |  |  |  |
| `SettlementRuleIsCreated` |  | |  |  |  |  |
| `OrderIsPartiallyReleased` |  | |  |  |  |  |
| `OrderIsLocked` |  | |  |  |  |  |
| `OrderIsTechnicallyCompleted` |  | |  |  |  |  |
| `OrderIsClosed` |  | |  |  |  |  |
| `OrderIsDistributionRelevant` |  | |  | `cast(stat.OrderIsDistributionRelevant as orderisdistrrelevant preserving type)` |  |  |
| `OrderIsDistributedToMES` |  | |  | `cast(stat.OrderIsDistributedToMES as orderisdistributedtomes preserving type)` |  |  |
| `OrderReleaseIsRejected` |  | |  | `cast(stat.OrderReleaseIsRejected as releaseisrejected preserving type)` |  |  |
| `OrderIsPartiallyDelivered` |  | |  |  |  |  |
| `OrderIsMarkedForDeletion` |  | |  |  |  |  |
| `OrderHasCostCalculationError` |  | |  | `cast(stat.OrderHasCostCalculationError as orderhascostingerror preserving type)` |  |  |
| `SettlementRuleIsCrtedManually` |  | |  |  |  |  |
| `OrderIsScheduled` |  | |  |  |  |  |
| `DistributionToMESIsCompleted` |  | |  | `cast(stat.DistributionToMESIsCompleted as distrtomesiscompleted preserving type)` |  |  |
| `OrderIsDiscardedByMES` |  | |  | `cast(stat.OrderIsDiscardedByMES as orderisdiscardedbymes preserving type)` |  |  |
| `OrderIsReleasedByMES` |  | |  | `cast(stat.OrderIsReleasedByMES as orderisreleasedbymes preserving type)` |  |  |
| `OrderHasGeneratedOperations` |  | |  |  |  |  |
| `OrderIsToBeHandledInBatches` |  | |  |  |  |  |
| `MaterialAvailyIsNotChecked` |  | |  |  |  |  |
| `OrderIsShopFloorOrder` |  | |  |  |  |  |
| `OrderHasMaterialShortage` |  | |  | `cast(stat.OrderHasMaterialShortage as orderhasmaterialshortage preserving type)` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `MfgOrderInternalID` |  | |  |  |  |  |
| `SuperiorOrder` |  | |  |  |  |  |
| `ReferenceOrder` |  | |  |  |  |  |
| `LeadingOrder` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `ProductionSchedulingProfile` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `SettlementReservation` |  | |  |  |  |  |
| `MfgOrderConfirmation` |  | |  |  |  |  |
| `NumberOfMfgOrderConfirmations` |  | |  |  |  |  |
| `CapacityRequirement` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `MaterialRevisionLevel_2` |  | |  |  |  |  |
| `BasicSchedulingType` |  | |  |  |  |  |
| `ForecastSchedulingType` |  | |  |  |  |  |
| `SchedulingIsAllowingForBreaks` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `ManufacturingObject` |  | |  | `ObjectInternalID` |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `EffectivityParameterVariant` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `CapacityActiveVersion` |  | |  |  |  |  |
| `CapacityRqmtHasNotToBeCreated` |  | |  |  |  |  |
| `OrderSequenceNumber` |  | |  |  |  |  |
| `MfgOrderSplitStatus` |  | |  |  |  |  |
| `RequestOrderType` |  | |  |  |  |  |
| `BillOfOperationsMaterial` |  | |  |  |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperations` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `BOOInternalVersionCounter` |  | |  |  |  |  |
| `BillOfOperationsApplication` |  | |  |  |  |  |
| `BillOfOperationsUsage` |  | |  |  |  |  |
| `BillOfOperationsVersion` |  | |  |  |  |  |
| `BOOExplosionDate` |  | |  |  |  |  |
| `BOOValidityStartDate` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BillOfMaterialInternalID` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `BOMExplosionDate` |  | |  |  |  |  |
| `BOMValidityStartDate` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ProductCostCollector` |  | |  |  |  |  |
| `ActualCostsCostingVariant` |  | |  |  |  |  |
| `PlannedCostsCostingVariant` |  | |  |  |  |  |
| `ControllingObjectClass` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `OverheadCode` |  | |  |  |  |  |
| `ResultAnalysisInternalID` |  | |  |  |  |  |
| `VarianceKey` |  | |  |  |  |  |
| `OrderIsEventBasedPosting` |  | |  |  |  |  |
| `EventBasedPostingMethod` |  | |  |  |  |  |
| `EventBasedProcessingKey` |  | |  |  |  |  |
| `OrderSettlementTriggerType` |  | |  |  |  |  |
| `SchedulingFloatProfile` |  | |  |  |  |  |
| `FloatBeforeProductionInWrkDays` |  | |  |  |  |  |
| `FloatAfterProductionInWorkDays` |  | |  |  |  |  |
| `ReleasePeriodInWorkDays` |  | |  |  |  |  |
| `ChangeToScheduledDatesIsMade` |  | |  |  |  |  |
| `MfgOrderPlannedStartDate` |  | |  |  |  |  |
| `MfgOrderPlannedStartTime` |  | |  |  |  |  |
| `MfgOrderPlannedEndDate` |  | |  |  |  |  |
| `MfgOrderPlannedEndTime` |  | |  |  |  |  |
| `MfgOrderPlannedReleaseDate` |  | |  |  |  |  |
| `MfgOrderScheduledStartDate` |  | |  |  |  |  |
| `MfgOrderScheduledStartTime` |  | |  |  |  |  |
| `MfgOrderScheduledEndDate` |  | |  |  |  |  |
| `MfgOrderScheduledEndTime` |  | |  |  |  |  |
| `MfgOrderScheduledReleaseDate` |  | |  |  |  |  |
| `MfgOrderActualStartDate` |  | |  |  |  |  |
| `MfgOrderActualStartTime` |  | |  |  |  |  |
| `MfgOrderConfirmedEndDate` |  | |  |  |  |  |
| `MfgOrderConfirmedEndTime` |  | |  |  |  |  |
| `MfgOrderActualEndDate` |  | |  |  |  |  |
| `MfgOrderActualReleaseDate` |  | |  |  |  |  |
| `MfgOrderTotalCommitmentDate` |  | |  |  |  |  |
| `MfgOrderActualCompletionDate` |  | |  |  |  |  |
| `MfgOrderItemActualDeliveryDate` |  | |  |  |  |  |
| `ProductionUnit` |  | |  |  |  |  |
| `MfgOrderPlannedTotalQty` |  | |  |  |  |  |
| `MfgOrderPlannedScrapQty` |  | |  |  |  |  |
| `MfgOrderConfirmedYieldQty` |  | |  |  |  |  |
| `MfgOrderConfirmedScrapQty` |  | |  |  |  |  |
| `MfgOrderConfirmedReworkQty` |  | |  |  |  |  |
| `ExpectedDeviationQuantity` |  | |  |  |  |  |
| `ActualDeliveredQuantity` |  | |  |  |  |  |
| `MasterProductionOrder` |  | |  |  |  |  |
| `_ProductionVersion` | | ✓ | | | | |
| `_SystemStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_Extension` | `E_LogisticsOrder` | [1..1] |
| `_SystemStatusText` | `I_MfgOrderSystemStatusText` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDERWSTTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_CreatedByUser', '_LastChangedByUser',
                                        '_LongText', '_StatusObject', '_StatusObjectText']
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrder'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.semanticKey: ['ManufacturingOrder']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Header with Status'

define view I_MfgOrderWithStatus
  as select from I_ManufacturingOrder     as ord
    inner join   P_OrderStatusBasicAggrgn as stat on stat.ObjectInternalID = ord.ObjectInternalID  // Status

  association [0..1] to I_ProductionVersion        as _ProductionVersion on  $projection.Material          = _ProductionVersion.Material
                                                                         and $projection.ProductionPlant   = _ProductionVersion.Plant
                                                                         and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [1..1] to E_LogisticsOrder           as _Extension         on  $projection.ManufacturingOrder = _Extension.OrderID
  
  association [1..1] to I_MfgOrderSystemStatusText as _SystemStatusText  on  _SystemStatusText.Language           = $session.system_language
                                                                         and _SystemStatusText.ManufacturingOrder = ord.ManufacturingOrder                                        
{
      // Key
      @ObjectModel.text.element: ['ManufacturingOrderText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9}
  key ord.ManufacturingOrder,

      // Category and Type
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      ord.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      ord.ManufacturingOrderType,

      // Text
      @Semantics.text: true
      ord.ManufacturingOrderText,
      ord.ManufacturingOrderHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      ord.LongTextLanguageCode,

      // Attributes
      @ObjectModel.foreignKey.association: '_MfgOrderImportance'
      ord.ManufacturingOrderImportance,
      ord.MfgOrderHasMultipleItems,
      ord.MfgOrderIsPartOfCollvOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MfgOrderHierarchyLevelValue'
      ord.MfgOrderHierarchyLevel,
      ord.MfgOrderHierarchyLevelValue,
      ord.MfgOrderHierarchyPathValue,
      ord.ProdnProcgIsFlexible,

      // System Status
      stat.OrderIsCreated,
      stat.OrderIsReleased,
      stat.OrderIsPrinted,
      cast(stat.OrderIsPartiallyPrinted as orderispartiallyprinted preserving type)    as OrderIsPartiallyPrinted,
      stat.OrderIsConfirmed,
      stat.OrderIsPartiallyConfirmed,
      stat.OrderIsDelivered,
      stat.OrderIsDeleted,
      cast(stat.OrderIsProductCosted as orderisproductcosted preserving type)          as OrderIsProductCosted,
      stat.OrderIsPreCosted,
      stat.SettlementRuleIsCreated,
      stat.OrderIsPartiallyReleased,
      stat.OrderIsLocked,
      stat.OrderIsTechnicallyCompleted,
      stat.OrderIsClosed,
      cast(stat.OrderIsDistributionRelevant as orderisdistrrelevant preserving type)   as OrderIsDistributionRelevant,
      cast(stat.OrderIsDistributedToMES as orderisdistributedtomes preserving type)    as OrderIsDistributedToMES,
      cast(stat.OrderReleaseIsRejected as releaseisrejected preserving type)           as OrderReleaseIsRejected,
      stat.OrderIsPartiallyDelivered,
      stat.OrderIsMarkedForDeletion,
      cast(stat.OrderHasCostCalculationError as orderhascostingerror preserving type)  as OrderHasCostCalculationError,
      stat.SettlementRuleIsCrtedManually,
      stat.OrderIsScheduled,
      cast(stat.DistributionToMESIsCompleted as distrtomesiscompleted preserving type) as DistributionToMESIsCompleted,
      cast(stat.OrderIsDiscardedByMES as orderisdiscardedbymes preserving type)        as OrderIsDiscardedByMES,
      cast(stat.OrderIsReleasedByMES as orderisreleasedbymes preserving type)          as OrderIsReleasedByMES,
      stat.OrderHasGeneratedOperations,
      stat.OrderIsToBeHandledInBatches,
      stat.MaterialAvailyIsNotChecked,
      stat.OrderIsShopFloorOrder,
      cast(stat.OrderHasMaterialShortage as orderhasmaterialshortage preserving type)  as OrderHasMaterialShortage,

      // Admin
      @Semantics.systemDate.createdAt: true
      ord.CreationDate,
      @Semantics.systemTime.createdAt: true
      ord.CreationTime,
      @Semantics.user.createdBy: true
      ord.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      ord.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      ord.LastChangeTime,
      @Semantics.user.lastChangedBy: true
      ord.LastChangedByUser,

      // Header Material data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      ord.Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]   
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      ord.Product,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      ord.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      ord.Batch,
      @Semantics.text: true
      ord.GoodsRecipientName,
      @Semantics.text: true
      ord.UnloadingPointName,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      ord.InventoryUsabilityCode,
      ord.MaterialGoodsReceiptDuration,
      ord.QuantityDistributionKey,
      ord.StockSegment,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      ord.MfgOrderInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      ord.SuperiorOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ReferenceOrder'
      ord.ReferenceOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_LeadingOrder'
      ord.LeadingOrder,
      @ObjectModel.foreignKey.association: '_Currency'
      ord.Currency,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Productionplant'
      ord.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      ord.PlanningPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      ord.MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]
      @ObjectModel.foreignKey.association: '_MRPController'
      ord.MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      ord.ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      ord.ResponsiblePlannerGroup,
      @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
      ord.ProductionSchedulingProfile,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      ord.ProductionVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      ord.PlannedOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      ord.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      ord.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElmntByIntKeyStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      ord.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData2'
      ord.WBSElementInternalID_2,
      ord.Reservation,
      @ObjectModel.foreignKey.association: '_SettlementReservation'    
      ord.SettlementReservation,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      ord.MfgOrderConfirmation,
      ord.NumberOfMfgOrderConfirmations,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      ord.CapacityRequirement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspectionLotStdVH', element: 'InspectionLot' } } ]
      @ObjectModel.foreignKey.association: '_InspectionLot'
      ord.InspectionLot,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      ord.ChangeNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      ord.MaterialRevisionLevel,    // with conv. exit
      ord.MaterialRevisionLevel_2,  // w/o conv. exit
      @ObjectModel.foreignKey.association: '_BasicSchedulingType'
      ord.BasicSchedulingType,
      @ObjectModel.foreignKey.association: '_ForecastSchedulingType'
      ord.ForecastSchedulingType,
      ord.SchedulingIsAllowingForBreaks,
      @ObjectModel.foreignKey.association: '_StatusObject'
      ord.ObjectInternalID,
      ord.ObjectInternalID as ManufacturingObject,
      ord.ProductConfiguration,
      ord.EffectivityParameterVariant,
      ord.ConditionApplication,
      ord.CapacityActiveVersion,
      ord.CapacityRqmtHasNotToBeCreated,
      ord.OrderSequenceNumber,
      ord.MfgOrderSplitStatus,
      @ObjectModel.foreignKey.association: '_RequestOrderType'
      ord.RequestOrderType,

      // Assignments BOO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]  
      @ObjectModel.foreignKey.association: '_BillOfOperationsMaterial'
      @ObjectModel.text.association: '_BillOfOperationsMaterialText'
      ord.BillOfOperationsMaterial,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      ord.BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED      // default data element change -> deprecated to avoid RTT2 error in ATC
      @API.element.successor: 'BillOfOperationsGroup'
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      ord.BillOfOperations,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup2'
      ord.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations2'
      ord.BillOfOperationsVariant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BOOChgStateStdVH', element: 'BOOInternalVersionCounter' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsChangeState2'
      ord.BOOInternalVersionCounter,
      @ObjectModel.foreignKey.association: '_BillOfOperationsApplication'
      ord.BillOfOperationsApplication,
      @ObjectModel.foreignKey.association: '_BillOfOperationsUsage'
      ord.BillOfOperationsUsage,
      ord.BillOfOperationsVersion,
      ord.BOOExplosionDate,
      ord.BOOValidityStartDate,

      // Assignments BOM
      ord.BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID'
      ord.BillOfMaterial,            // with conv. exit NUMCV
      ord.BillOfMaterialInternalID,  // with conv. exit ALPHA
      ord.BillOfMaterialVariant,
      ord.BillOfMaterialVariantUsage,
      ord.BillOfMaterialVersion,
      ord.BOMExplosionDate,
      ord.BOMValidityStartDate,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      ord.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      ord.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ord.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      ord.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      ord.CostCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      ord.ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_CostElement'
      ord.CostElement,
      ord.CostingSheet,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      ord.GLAccount,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductCostCtrlgOrderStdVH', element: 'OrderID' } } ]  
      @ObjectModel.foreignKey.association: '_ProductCostCollector'    
      ord.ProductCostCollector,
      @ObjectModel.foreignKey.association: '_ActualCostsCostingVariant'
      ord.ActualCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_PlannedCostsCostingVariant'
      ord.PlannedCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      ord.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      ord.FunctionalArea,
      ord.OverheadCode,
      ord.ResultAnalysisInternalID,
      ord.VarianceKey,      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EventBasedPostingMethod'
      ord.OrderIsEventBasedPosting,
      ord.EventBasedPostingMethod,
      ord.EventBasedProcessingKey,
      ord.OrderSettlementTriggerType,
 
      // Floats
      @ObjectModel.foreignKey.association: '_SchedulingFloatProfile'
      ord.SchedulingFloatProfile,
      ord.FloatBeforeProductionInWrkDays,
      ord.FloatAfterProductionInWorkDays,
      ord.ReleasePeriodInWorkDays,

      // Dates and Times
      ord.ChangeToScheduledDatesIsMade,
      ord.MfgOrderPlannedStartDate,
      ord.MfgOrderPlannedStartTime,
      ord.MfgOrderPlannedEndDate,
      ord.MfgOrderPlannedEndTime,
      ord.MfgOrderPlannedReleaseDate,
      ord.MfgOrderScheduledStartDate,
      ord.MfgOrderScheduledStartTime,
      ord.MfgOrderScheduledEndDate,
      ord.MfgOrderScheduledEndTime,
      ord.MfgOrderScheduledReleaseDate,
      ord.MfgOrderActualStartDate,
      ord.MfgOrderActualStartTime,
      ord.MfgOrderConfirmedEndDate,
      ord.MfgOrderConfirmedEndTime,
      @API.element.releaseState: #DEPRECATED   // wrong GFN, GLTRI is the delivery date = LTRMI
      @API.element.successor: 'MfgOrderItemActualDeliveryDate'
      ord.MfgOrderActualEndDate,
      ord.MfgOrderActualReleaseDate,
      ord.MfgOrderTotalCommitmentDate,
      ord.MfgOrderActualCompletionDate,
      ord.MfgOrderItemActualDeliveryDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      ord.ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.MfgOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.MfgOrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.MfgOrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.MfgOrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.MfgOrderConfirmedReworkQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.ExpectedDeviationQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      ord.ActualDeliveredQuantity,

      // Fashion Manufacturing Fields
      ord.MasterProductionOrder,

      // Associations
      ord._MfgOrderCategory,
      ord._MfgOrderType,
      ord._OrderTypeDetails,
      ord._MfgOrderItem,
      ord._MfgOrderSequence,
      ord._MfgOrderOperation,
      ord._MfgOrderMaterialDocItem,
      ord._MfgOrderDocInfoRecord,
      ord._MfgOrderLongText,
      ord._MfgOrderImportance,
      ord._SuperiorOrder,
      ord._ReferenceOrder,
      ord._LeadingOrder,
      ord._CreatedByUser,
      ord._LastChangedByUser,
      ord._LongTextLanguage,
      ord._ProductionUnit,
      ord._Currency,
      @Consumption.hidden: true
      ord._OrderInternalID,
      ord._BillOfOperationsMaterial,
      ord._BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsGroup2'
      ord._BillOfOperationsGroup,
      ord._BillOfOperationsGroup2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperations2'
      ord._BillOfOperations,
      ord._BillOfOperations2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsChangeState2'
      ord._BillOfOperationsChangeState,
      ord._BillOfOperationsChangeState2,
      ord._BillOfOperationsApplication,
      ord._BillOfOperationsUsage,
      ord._ConfirmationGroup,
      ord._Reservation,
      ord._SettlementReservation,
      ord._ProductionPlant,
      ord._PlanningPlant,
      ord._Material,
      ord._Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      ord._ProductPlant,
      ord._ProductPlant2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductStorageLocation2'
      ord._ProductStorageLocation,
      ord._ProductStorageLocation2,
      ord._StorageLocation,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Batch_2'  // 0..1 cardinality
      ord._Batch,
      ord._Batch_2,
      ord._InventoryUsabilityCode,
      ord._MRPArea,
      ord._MRPController,
      ord._ProductionSupervisor,
      ord._ProductionSchedulingProfile,
      ord._ResponsiblePlannerGroup,
      _ProductionVersion,
      ord._CapacityRequirement,
      ord._ChangeNumber,
      ord._StatusObject,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MaterialRevisionLevel2'
      ord._MaterialRevisionLevel,
      ord._MaterialRevisionLevel2,
      ord._InspectionLot,
      ord._SalesOrder,
      ord._SalesOrderItem,
      ord._SalesDocument,
      ord._SalesDocumentItem,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      ord._WBSElement,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      ord._WBSElementBasicData,
      ord._WBSElementBasicData2,
      ord._EnterpriseProjectElement,
      ord._PlannedOrder,
      ord._BasicSchedulingType,
      ord._ForecastSchedulingType,
      ord._SchedulingFloatProfile,
      ord._RequestOrderType,
      ord._BusinessArea,
      ord._ProfitCenter,
      ord._CostCenter,
      ord._ResponsibleCostCenter,
      ord._CompanyCode,
      ord._ControllingArea,
      ord._GLAccount,
      ord._ProductCostCollector,
      ord._ControllingObjectClass,
      ord._CostElement,
      ord._ActualCostsCostingVariant,
      ord._PlannedCostsCostingVariant,
      ord._FunctionalArea,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderLongText'
      ord._LongText,
      -- Status
      _SystemStatusText,
      stat._OrderIsCreatedCode,
      stat._OrderIsReleasedCode,
      stat._OrderHasMatlShortageCode,
      stat._OrderIsPrintedCode,
      stat._OrderIsPrtlyPrintedCode, 
      stat._OrderIsConfirmedCode, 
      stat._OrderIsPrtlyConfirmedCode,
      stat._OrderIsDeliveredCode, 
      stat._OrderIsDeletedCode,
      stat._OrderIsProductCostedCode,
      stat._OrderIsPreCostedCode,
      stat._SettlmtRuleIsCreatedCode, 
      stat._OrderIsPrtlyReleasedCode, 
      stat._OrderIsLockedCode,
      stat._OrderIsTechlyCmpltdCode,
      stat._OrderIsClosedCode,
      stat._OrderIsDistributionRlvtCode,
      stat._OrderIsDistrdToMESCode,
      stat._OrderReleaseIsRejectedCode,
      stat._OrderIsPrtlyDeliveredCode,
      stat._OrderIsMrkdForDeletionCode,
      stat._SettlmtRuleIsCrtedMnllyCode,
      stat._OrderHasCostCalcErrorCode,
      stat._OrderIsScheduledCode,
      stat._DistributionToMESCmpltdCode,
      stat._OrderIsDiscardedByMESCode,
      stat._OrderIsReleasedByMESCode,
      stat._OrderHasPostdGoodsMvtCode,
      stat._OrderHasGeneratedOpsCode,
      stat._OrderIsHandledInBatchesCode,
      stat._MatlAvailyIsNotCheckedCode,
      stat._OrderHasNoComponentsCode,
      stat._OrderIsShopFloorOrderCode,
      stat._OrderIsHandedOvrToProdnCode,
      stat._OrderChangeIsRestrictedCode,

      // Text relations
      ord._MaterialText,
      ord._ProductText,
      ord._ProductionPlantText,
      ord._PlanningPlantText,
      ord._ReferenceOrderText,
      ord._LeadingOrderText,
      ord._SuperiorOrderText,
      ord._InspectionLotText,
      ord._ProductionVersionText,
      ord._MRPAreaText,
      ord._WBSElementText,
      ord._StorageLocationText,
      ord._BillOfOperationsMaterialText,
      ord._StatusObjectText,
      ord._BusinessAreaText,
      ord._CompanyCodeText,
      ord._ControllingAreaText,
      ord._FunctionalAreaText,
      ord._ProductCostCollectorText 
};
```
