---
name: I_MANUFACTURINGORDER
description: Manufacturingorder
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MANUFACTURINGORDER

**Manufacturingorder**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ManufacturingOrder` | `cast(head.OrderID as manufacturingorder preserving type)` |
| `ManufacturingOrderItem` | `item.OrderItem` |
| `ManufacturingOrderCategory` | `head.OrderCategory` |
| `ManufacturingOrderType` | `head.OrderType` |
| `ManufacturingOrderText` | `cast(head.OrderDescription as manufacturingordertext preserving type)` |
| `ManufacturingOrderHasLongText` | `cast(case when head.OrderHasLongText <> '' then 'X' else head.OrderHasLongText end as aufltext preserving type)` |
| `LongTextLanguageCode` | `head.LongTextLanguage` |
| `ManufacturingOrderImportance` | `cast(head.PriorityCode as orderimportancecode preserving type)` |
| `IsMarkedForDeletion` | `head.IsMarkedForDeletion` |
| `IsCompletelyDelivered` | `item.IsCompletelyDelivered` |
| `MfgOrderHasMultipleItems` | `head.MfgOrderHasMultipleItems` |
| `MfgOrderIsPartOfCollvOrder` | `head.MfgOrderIsPartOfCollvOrder` |
| `MfgOrderHierarchyLevel` | `head.MfgOrderHierarchyLevel` |
| `MfgOrderHierarchyLevelValue` | `head.OrderHierarchyLevelValue` |
| `MfgOrderHierarchyPathValue` | `head.OrderHierarchyPathValue` |
| `OrderIsNotCostedAutomatically` | `head.OrderIsNotCostedAutomatically` |
| `OrdIsNotSchedldAutomatically` | `head.OrdIsNotSchedldAutomatically` |
| `ProdnProcgIsFlexible` | `head.ProdnProcgIsFlexible` |
| `CreationDate` | `cast(head.CreationDate as ordercreationdate preserving type)` |
| `CreationTime` | `cast(head.CreationTime as ordercreationtime preserving type)` |
| `CreatedByUser` | `head.CreatedByUser` |
| `LastChangeDate` | `head.LastChangeDate` |
| `LastChangeTime` | `head.LastChangeTime` |
| `LastChangedByUser` | `head.LastChangedByUser` |
| `MfgOrderCreationDate` | `cast(head.CreationDate as ordercreationdate preserving type)` |
| `MfgOrderCreationTime` | `cast(head.CreationTime as ordercreationtime preserving type)` |
| `Material` | `item.Material` |
| `Product` | `cast(item.Material as productnumber preserving type)` |
| `StorageLocation` | `item.StorageLocation` |
| `Batch` | `item.Batch` |
| `GoodsRecipientName` | `item.GoodsRecipientName` |
| `UnloadingPointName` | `item.UnloadingPointName` |
| `InventoryUsabilityCode` | `item.InventoryUsabilityCode` |
| `SerialNumberProfile` | `item.SerialNumberAssgmtProfile` |
| `MaterialGoodsReceiptDuration` | `item.MaterialGoodsReceiptDuration` |
| `QuantityDistributionKey` | `item.QuantityDistributionKey` |
| `StockSegment` | `item.StockSegment` |
| `MfgOrderInternalID` | `cast(head.OrderInternalBillOfOperations as pph_aufpl preserving type)` |
| `ReferenceOrder` | `head.ReferenceOrder` |
| `LeadingOrder` | `head.LeadingOrder` |
| `SuperiorOrder` | `head.MfgOrderSuperiorMfgOrder` |
| `Currency` | `head.Currency` |
| `ProductionPlant` | `cast(head.Plant as pwwrk preserving type)` |
| `PlanningPlant` | `item.MRPPlant` |
| `MRPArea` | `item.MRPArea` |
| `MRPController` | `cast(head.MRPController as pph_dispo preserving type)` |
| `ProductionSupervisor` | `cast(head.ProductionSupervisor as pph_fevor preserving type)` |
| `ProductionSchedulingProfile` | `cast(head.ProductionSchedulingProfile as pph_prodprf preserving type)` |
| `ResponsiblePlannerGroup` | `head.ResponsiblePlannerGroup` |
| `ProductionVersion` | `item.ProductionVersion` |
| `SalesOrder` | `item.SalesOrder` |
| `SalesOrderItem` | `item.SalesOrderItem` |
| `WBSElementInternalID` | `item.WBSElementInternalID` |
| `WBSElementInternalID_2` | `item.WBSElementInternalID_2` |
| `Reservation` | `head.Reservation` |
| `SettlementReservation` | `cast(head.SettlementReservation as settlmntres preserving type)` |
| `MfgOrderConfirmation` | `head.MfgOrderConfirmation` |
| `NumberOfMfgOrderConfirmations` | `cast(head.MfgOrderConfirmationCount as pph_noofconf preserving type)` |
| `PlannedOrder` | `item.PlannedOrder` |
| `CapacityRequirement` | `head.CapacityRequirement` |
| `InspectionLot` | `head.InspectionLot` |
| `ChangeNumber` | `head.ChangeNumber` |
| `MaterialRevisionLevel` | `cast(head.MaterialRevisionLevel as qrevlv preserving type)` |
| `MaterialRevisionLevel_2` | `head.MaterialRevisionLevel_2` |
| `BasicSchedulingType` | `cast(head.BasicSchedulingType as basicschedtype preserving type)` |
| `ForecastSchedulingType` | `cast(head.ForecastSchedulingType as forecastschedtype preserving type)` |
| `SchedulingIsAllowingForBreaks` | `head.SchedulingIsAllowingForBreaks` |
| `ObjectInternalID` | `cast(head.ObjectInternalID as pph_objnr preserving type)` |
| `ProductConfiguration` | `cast(item.ProductConfiguration as product_configuration preserving type)` |
| `EffectivityParameterVariant` | `item.EffectivityParameterVariant` |
| `ConditionApplication` | `head.ConditionApplication` |
| `CapacityActiveVersion` | `head.CapacityActiveVersion` |
| `CapacityRqmtHasNotToBeCreated` | `head.CapacityRqmtHasNotToBeCreated` |
| `OrderSequenceNumber` | `head.OrderSequenceNumber` |
| `MfgOrderSplitStatus` | `head.MfgOrderSplitStatus` |
| `RequestOrderType` | `head.RequestOrderType` |
| `BillOfOperationsMaterial` | `head.Material` |
| `BillOfOperationsType` | `head.BillOfOperationsType` |
| `BillOfOperations` | `head.BillOfOperations` |
| `BillOfOperationsGroup` | `head.BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `head.BillOfOperationsVariant` |
| `BOOInternalVersionCounter` | `head.BOOInternalVersionCounter` |
| `BillOfOperationsApplication` | `head.BillOfOperationsApplication` |
| `BillOfOperationsUsage` | `head.BillOfOperationsUsage` |
| `BillOfOperationsVersion` | `head.BillOfOperationsVersion` |
| `BOOExplosionDate` | `head.BOOExplosionDate` |
| `BOOValidityStartDate` | `head.BOOValidityStartDate` |
| `BillOfMaterialCategory` | `head.BillOfMaterialCategory` |
| `BillOfMaterial` | `head.BillOfMaterial` |
| `BillOfMaterialInternalID` | `head.BillOfMaterialInternalID` |
| `BillOfMaterialVariant` | `head.BillOfMaterialVariant` |
| `BillOfMaterialVariantUsage` | `head.BillOfMaterialVariantUsage` |
| `BillOfMaterialVersion` | `head.BillOfMaterialVersion` |
| `BOMExplosionDate` | `head.BOMExplosionDate` |
| `BOMValidityStartDate` | `head.BOMValidityStartDate` |
| `BusinessArea` | `head.BusinessArea` |
| `CompanyCode` | `head.CompanyCode` |
| `ControllingArea` | `head.ControllingArea` |
| `ProfitCenter` | `head.ProfitCenter` |
| `CostCenter` | `head.CostCenter` |
| `ResponsibleCostCenter` | `head.ResponsibleCostCenter` |
| `CostElement` | `head.CostElement` |
| `CostingSheet` | `head.CostingSheet` |
| `GLAccount` | `head.GLAccount` |
| `ProductCostCollector` | `head.ProductCostCollector` |
| `ActualCostsCostingVariant` | `head.ActualCostsCostingVariant` |
| `PlannedCostsCostingVariant` | `head.PlannedCostsCostingVariant` |
| `ControllingObjectClass` | `cast(head.ControllingObjectClass as pph_scope preserving type)` |
| `FunctionalArea` | `head.FunctionalArea` |
| `OverheadCode` | `head.OverheadCode` |
| `ResultAnalysisInternalID` | `head.ResultAnalysisInternalID` |
| `VarianceKey` | `head.VarianceKey` |
| `OrderIsEventBasedPosting` | `head.OrderIsEventBasedPosting` |
| `EventBasedPostingMethod` | `head.EventBasedPostingMethod` |
| `EventBasedProcessingKey` | `head.EventBasedProcessingKey` |
| `OrderSettlementTriggerType` | `head.OrderSettlementTriggerType` |
| `SchedulingFloatProfile` | `head.SchedulingFloatProfile` |
| `FloatBeforeProductionInWrkDays` | `head.FloatBeforeProductionInWrkDays` |
| `FloatAfterProductionInWorkDays` | `head.FloatAfterProductionInWorkDays` |
| `ReleasePeriodInWorkDays` | `head.ReleasePeriodInWorkDays` |
| `ChangeToScheduledDatesIsMade` | `head.ChangeToScheduledDatesIsMade` |
| `MfgOrderPlannedStartDate` | `cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)` |
| `MfgOrderPlannedStartTime` | `cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)` |
| `MfgOrderPlannedEndDate` | `cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)` |
| `MfgOrderPlannedEndTime` | `cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)` |
| `MfgOrderPlannedReleaseDate` | `cast(head.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)` |
| `MfgOrderScheduledStartDate` | `cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type)` |
| `MfgOrderScheduledStartTime` | `cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type)` |
| `MfgOrderScheduledEndDate` | `cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)` |
| `MfgOrderScheduledEndTime` | `cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)` |
| `MfgOrderScheduledReleaseDate` | `cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)` |
| `MfgOrderActualStartDate` | `cast(head.ActualStartDate as mfgorderactualstartdate preserving type)` |
| `MfgOrderActualStartTime` | `cast(head.ActualStartTime as mfgorderactualstarttime preserving type)` |
| `MfgOrderConfirmedEndDate` | `cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)` |
| `MfgOrderConfirmedEndTime` | `cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)` |
| `MfgOrderActualEndDate` | `cast(head.ActualEndDate as mfgorderactualenddate preserving type)` |
| `MfgOrderActualReleaseDate` | `cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)` |
| `MfgOrderTotalCommitmentDate` | `item.TotalCommitmentDate` |
| `MfgOrderActualCompletionDate` | `head.TechnicalCompletionDate` |
| `MfgOrderItemActualDeliveryDate` | `item.ActualDeliveryDate` |
| `ProductionUnit` | `cast(head.BaseUnit as productionunit preserving type)` |
| `MfgOrderPlannedTotalQty` | `cast(head.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type)` |
| `MfgOrderPlannedScrapQty` | `cast(head.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type)` |
| `MfgOrderConfirmedYieldQty` | `cast(head.OrderConfirmedYieldQty as co_igmng preserving type)` |
| `MfgOrderConfirmedScrapQty` | `cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)` |
| `MfgOrderConfirmedReworkQty` | `head.MfgOrderConfirmedReworkQty` |
| `ExpectedDeviationQuantity` | `cast(item.MfgOrderItemActualDeviationQty as co_mimez preserving type)` |
| `ActualDeliveredQuantity` | `item.MfgOrderItemGoodsReceiptQty` |
| `MasterProductionOrder` | `head.MasterProductionOrder` |
| `ProductSeasonYear` | `item.ProductSeasonYear` |
| `ProductSeason` | `item.ProductSeason` |
| `ProductCollection` | `item.ProductCollection` |
| `ProductTheme` | `item.ProductTheme` |
| `_MfgOrderCategory` | *Association* |
| `_MfgOrderType` | *Association* |
| `_ReferenceOrder` | *Association* |
| `_LeadingOrder` | *Association* |
| `_SuperiorOrder` | *Association* |
| `_MfgOrderImportance` | *Association* |
| `_OrderInternalID` | *Association* |
| `_LongTextLanguage` | *Association* |
| `_ProductionUnit` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_ProductionPlant` | *Association* |
| `_PlanningPlant` | *Association* |
| `_MRPArea` | *Association* |
| `_StorageLocation` | *Association* |
| `_Batch` | *Association* |
| `_Batch_2` | *Association* |
| `_Product` | *Association* |
| `_ProductUnitsOfMeasure` | *Association* |
| `_ProductPlant` | *Association* |
| `_ProductStorageLocation` | *Association* |
| `_ProductPlant2` | *Association* |
| `_ProductStorageLocation2` | *Association* |
| `_ProductPlantMRPArea` | *Association* |
| `_SerialNumberProfile` | *Association* |
| `_BillOfOperationsMaterial` | *Association* |
| `_SalesOrder` | *Association* |
| `_SalesOrderItem` | *Association* |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_WBSElement` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_ChangeNumber` | *Association* |
| `_MaterialRevisionLevel` | *Association* |
| `_MaterialRevisionLevel2` | *Association* |
| `_StatusObject` | *Association* |
| `_GLAccount` | *Association* |
| `_CostElement` | *Association* |
| `_ActualCostsCostingVariant` | *Association* |
| `_PlannedCostsCostingVariant` | *Association* |
| `_MRPController` | *Association* |
| `_ProductionSupervisor` | *Association* |
| `_ProductionSchedulingProfile` | *Association* |
| `_ResponsiblePlannerGroup` | *Association* |
| `_BillOfOperations` | *Association* |
| `_BillOfOperationsChangeState` | *Association* |
| `_BillOfOperations2` | *Association* |
| `_BillOfOperationsChangeState2` | *Association* |
| `_ProductionVersion` | *Association* |
| `_ProductionVersion2` | *Association* |
| `_MfgOrderItem` | *Association* |
| `_MfgOrderMainItem` | *Association* |
| `_MfgOrderSequence` | *Association* |
| `_MfgOrderOperation` | *Association* |
| `_MfgOrderMaterialDocItem` | *Association* |
| `_MfgOrderDocdGoodsMovement` | *Association* |
| `_MfgOrderDocumentLink` | *Association* |
| `_MfgOrderDocInfoRecord` | *Association* |
| `_MfgOrderLongText` | *Association* |
| `_MfgOrderStatus` | *Association* |
| `_ProductionPlantText` | *Association* |
| `_PlanningPlantText` | *Association* |
| `_MaterialText` | *Association* |
| `_ProductText` | *Association* |
| `_BillOfOperationsMaterialText` | *Association* |
| `_ReferenceOrderText` | *Association* |
| `_LeadingOrderText` | *Association* |
| `_SuperiorOrderText` | *Association* |
| `_ProductionVersionText` | *Association* |
| `_MRPAreaText` | *Association* |
| `_WBSElementText` | *Association* |
| `_InspectionLotText` | *Association* |
| `_StorageLocationText` | *Association* |
| `_StatusObjectText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_CompanyCodeText` | *Association* |
| `_ControllingAreaText` | *Association* |
| `_FunctionalAreaText` | *Association* |
| `_ProductCostCollectorText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ReferenceOrder` | `I_ManufacturingOrder` | [0..1] |
| `_LeadingOrder` | `I_ManufacturingOrder` | [0..1] |
| `_SuperiorOrder` | `I_ManufacturingOrder` | [0..1] |
| `_MfgOrderImportance` | `I_ManufacturingOrderImportance` | [0..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_PlanningPlant` | `I_Plant` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..*] |
| `_Batch_2` | `I_Batch` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [1..*] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [0..1] |
| `_ProductStorageLocation2` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_SerialNumberProfile` | `I_SerialNumberProfile` | [0..1] |
| `_BillOfOperationsMaterial` | `I_Product` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_WBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_MaterialRevisionLevel` | `I_ChangeMstrObjTypeRevisionLvl` | [0..1] |
| `_MaterialRevisionLevel2` | `I_ChangeMstrObjTypeRevisionLvl` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_CostElement` | `I_CostElement` | [0..1] |
| `_ActualCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_PlannedCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionSchedulingProfile` | `I_ProductionSchedulingProfile` | [0..1] |
| `_ResponsiblePlannerGroup` | `I_ResponsiblePlannerGroup` | [0..1] |
| `_BillOfOperations` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsChangeState` | `I_MfgBillOfOperationsChgSt` | [0..1] |
| `_BillOfOperations2` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsChangeState2` | `I_MfgBillOfOperationsChgSt` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_ProductionVersion2` | `I_ProductionVersion` | [0..1] |
| `_MfgOrderItem` | `I_ManufacturingOrderItem` | [1..*] |
| `_MfgOrderMainItem` | `I_ManufacturingOrderItem` | [1..1] |
| `_MfgOrderSequence` | `I_MfgOrderSequence` | [1..*] |
| `_MfgOrderOperation` | `I_ManufacturingOrderOperation` | [1..*] |
| `_MfgOrderMaterialDocItem` | `I_MfgOrderMaterialDocumentItem` | [0..*] |
| `_MfgOrderDocdGoodsMovement` | `I_MfgOrderDocdGoodsMovement` | [0..*] |
| `_MfgOrderDocumentLink` | `I_MfgOrderDocumentLink` | [0..*] |
| `_MfgOrderDocInfoRecord` | `I_MfgOrderDocInfoRecdObjLink` | [0..*] |
| `_MfgOrderLongText` | `I_ManufacturingOrderLongText` | [0..1] |
| `_MfgOrderStatus` | `I_ManufacturingOrderStatus` | [0..*] |
| `_Extension` | `E_LogisticsOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_PlanningPlantText` | `I_Plant` | [0..1] |
| `_MaterialText` | `I_ProductText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_BillOfOperationsMaterialText` | `I_ProductText` | [0..*] |
| `_ReferenceOrderText` | `I_ManufacturingOrder` | [0..1] |
| `_LeadingOrderText` | `I_ManufacturingOrder` | [0..1] |
| `_SuperiorOrderText` | `I_ManufacturingOrder` | [0..1] |
| `_ProductionVersionText` | `I_ProductionVersion` | [0..1] |
| `_MRPAreaText` | `I_MRPArea` | [0..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_InspectionLotText` | `I_InspectionLot` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |
| `_ProductCostCollectorText` | `I_ProductCostCtrlgOrder` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_CreatedByUser', '_LastChangedByUser',
                                        '_LongText', '_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                         table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afpo',
                                          tableElement: ['aufnr',              'posnr'],
                                          viewElement:  ['ManufacturingOrder', 'ManufacturingOrderItem']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrder'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.semanticKey: ['ManufacturingOrder']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Manufacturing Order'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ManufacturingOrder
  as select from I_LogisticsOrder as head
    inner join   I_OrderItem      as item on  item.OrderID   = head.OrderID
                                          and item.OrderItem = '0001'

  association [1..1] to I_MfgOrderCategory             as _MfgOrderCategory            on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                 as _MfgOrderType                on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [0..1] to I_ManufacturingOrder           as _ReferenceOrder              on  $projection.ReferenceOrder = _ReferenceOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder           as _LeadingOrder                on  $projection.LeadingOrder   = _LeadingOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder           as _SuperiorOrder               on  $projection.SuperiorOrder  = _SuperiorOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderImportance as _MfgOrderImportance          on  $projection.ManufacturingOrderCategory   = _MfgOrderImportance.ManufacturingOrderCategory
                                                                                       and $projection.ManufacturingOrderImportance = _MfgOrderImportance.ManufacturingOrderImportance 
  association [1..1] to I_OrderInternalID              as _OrderInternalID             on  $projection.MfgOrderInternalID = _OrderInternalID.OrderInternalID
  association [0..1] to I_Language                     as _LongTextLanguage            on  $projection.LongTextLanguageCode = _LongTextLanguage.Language
  association [1..1] to I_UnitOfMeasure                as _ProductionUnit              on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [1..1] to I_User                         as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser           on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Plant                        as _ProductionPlant             on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [0..1] to I_Plant                        as _PlanningPlant               on  $projection.PlanningPlant   = _PlanningPlant.Plant
  association [0..1] to I_MRPArea                      as _MRPArea                     on  $projection.MRPArea  = _MRPArea.MRPArea
  association [0..1] to I_StorageLocation              as _StorageLocation             on  $projection.ProductionPlant = _StorageLocation.Plant
                                                                                       and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..*] to I_Batch                        as _Batch                       on  $projection.Material = _Batch.Material
                                                                                       and $projection.Batch    = _Batch.Batch
  association [0..1] to I_Batch                        as _Batch_2                     on  $projection.ProductionPlant = _Batch_2.Plant
                                                                                       and $projection.Material        = _Batch_2.Material
                                                                                       and $projection.Batch           = _Batch_2.Batch
  association [0..1] to I_Product                      as _Product                     on  $projection.Product = _Product.Product
  association [1..*] to I_ProductUnitsOfMeasure        as _ProductUnitsOfMeasure       on  $projection.Product = _ProductUnitsOfMeasure.Product
  association [0..1] to I_ProductPlant                 as _ProductPlant                on  $projection.ProductionPlant = _ProductPlant.Plant
                                                                                       and $projection.Product         = _ProductPlant.Product
  association [0..1] to I_ProductStorageLocation       as _ProductStorageLocation      on  $projection.Material        = _ProductStorageLocation.Product
                                                                                       and $projection.ProductionPlant = _ProductStorageLocation.Plant
                                                                                       and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductPlantBasic            as _ProductPlant2               on  $projection.ProductionPlant = _ProductPlant2.Plant
                                                                                       and $projection.Product         = _ProductPlant2.Product
  association [0..1] to I_ProductStorageLocationBasic  as _ProductStorageLocation2     on  $projection.Product         = _ProductStorageLocation2.Product
                                                                                       and $projection.ProductionPlant = _ProductStorageLocation2.Plant
                                                                                       and $projection.StorageLocation = _ProductStorageLocation2.StorageLocation
  association [0..1] to I_ProductPlantMRP              as _ProductPlantMRPArea         on  $projection.Product         = _ProductPlantMRPArea.Product
                                                                                       and $projection.ProductionPlant = _ProductPlantMRPArea.Plant
                                                                                       and $projection.MRPArea         = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_SerialNumberProfile          as _SerialNumberProfile         on  $projection.SerialNumberProfile = _SerialNumberProfile.SerialNumberProfile
  association [0..1] to I_Product                      as _BillOfOperationsMaterial    on  $projection.BillOfOperationsMaterial = _BillOfOperationsMaterial.Product
  association [0..1] to I_SalesOrder                   as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                       and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDocument               on  $projection.SalesOrder = _SalesDocument.SalesDocument 
  association [0..1] to I_SalesDocumentItem            as _SalesDocumentItem           on  $projection.SalesOrder     = _SalesDocumentItem.SalesDocument
                                                                                       and $projection.SalesOrderItem = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_WBSElementByInternalKey      as _WBSElement                  on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_ChangeMstrObjTypeRevisionLvl as _MaterialRevisionLevel       on  $projection.MaterialRevisionLevel = _MaterialRevisionLevel.RevisionLevel
                                                                                       and _MaterialRevisionLevel.ChangeNumberObjectType = '41'
  association [0..1] to I_ChangeMstrObjTypeRevisionLvl as _MaterialRevisionLevel2      on  $projection.MaterialRevisionLevel_2 = _MaterialRevisionLevel2.RevisionLevel
                                                                                       and _MaterialRevisionLevel2.ChangeNumberObjectType = '41' 
  association [1..1] to I_StatusObject                 as _StatusObject                on  $projection.ObjectInternalID = _StatusObject.StatusObject
  association [0..1] to I_GLAccount                    as _GLAccount                   on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                       and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_CostElement                  as _CostElement                 on  $projection.ControllingArea = _CostElement.ControllingArea
                                                                                       and $projection.CostElement     = _CostElement.CostElement
  association [0..1] to I_CostingVariant               as _ActualCostsCostingVariant   on  $projection.ActualCostsCostingVariant  = _ActualCostsCostingVariant.CostingVariant                                                                                   
  association [0..1] to I_CostingVariant               as _PlannedCostsCostingVariant  on  $projection.PlannedCostsCostingVariant = _PlannedCostsCostingVariant.CostingVariant
  association [0..1] to I_MRPController                as _MRPController               on  $projection.ProductionPlant = _MRPController.Plant
                                                                                       and $projection.MRPController   = _MRPController.MRPController
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor        on  $projection.ProductionPlant      = _ProductionSupervisor.Plant
                                                                                       and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_ProductionSchedulingProfile  as _ProductionSchedulingProfile on  $projection.ProductionPlant             = _ProductionSchedulingProfile.Plant
                                                                                       and $projection.ProductionSchedulingProfile = _ProductionSchedulingProfile.ProductionSchedulingProfile
  association [0..1] to I_ResponsiblePlannerGroup      as _ResponsiblePlannerGroup     on  $projection.ProductionPlant         = _ResponsiblePlannerGroup.Plant
                                                                                       and $projection.ResponsiblePlannerGroup = _ResponsiblePlannerGroup.ResponsiblePlannerGroup
  association [0..1] to I_MfgBillOfOperations          as _BillOfOperations            on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                       and $projection.BillOfOperations        = _BillOfOperations.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsChgSt     as _BillOfOperationsChangeState on  $projection.BillOfOperationsType      = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                       and $projection.BillOfOperations          = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant   = _BillOfOperationsChangeState.BillOfOperationsVariant
                                                                                       and $projection.BOOInternalVersionCounter = _BillOfOperationsChangeState.BOOInternalVersionCounter
  association [0..1] to I_MfgBillOfOperations          as _BillOfOperations2           on  $projection.BillOfOperationsType    = _BillOfOperations2.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup   = _BillOfOperations2.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant = _BillOfOperations2.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsChgSt     as _BillOfOperationsChangeState2 on $projection.BillOfOperationsType      = _BillOfOperationsChangeState2.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup     = _BillOfOperationsChangeState2.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant   = _BillOfOperationsChangeState2.BillOfOperationsVariant
                                                                                       and $projection.BOOInternalVersionCounter = _BillOfOperationsChangeState2.BOOInternalVersionCounter
  association [0..1] to I_ProductionVersion            as _ProductionVersion           on  $projection.Product           = _ProductionVersion.Material
                                                                                       and $projection.ProductionPlant   = _ProductionVersion.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_ProductionVersion            as _ProductionVersion2          on  $projection.Material          = _ProductionVersion2.Material
                                                                                       and $projection.ProductionPlant   = _ProductionVersion2.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersion2.ProductionVersion
                                                                                    
  -- to child: Items
  association [1..*] to I_ManufacturingOrderItem       as _MfgOrderItem                on  $projection.ManufacturingOrder = _MfgOrderItem.ManufacturingOrder
  association [1..1] to I_ManufacturingOrderItem       as _MfgOrderMainItem            on  $projection.ManufacturingOrder = _MfgOrderMainItem.ManufacturingOrder
                                                                                       and _MfgOrderMainItem.ManufacturingOrderItem = '0001'
  -- to child: Sequences
  association [1..*] to I_MfgOrderSequence             as _MfgOrderSequence            on  $projection.ManufacturingOrder = _MfgOrderSequence.ManufacturingOrder
  -- to child: Operations
  association [1..*] to I_ManufacturingOrderOperation  as _MfgOrderOperation           on  $projection.MfgOrderInternalID = _MfgOrderOperation.MfgOrderInternalID
  -- to child: Material document items
  association [0..*] to I_MfgOrderMaterialDocumentItem as _MfgOrderMaterialDocItem     on  $projection.ManufacturingOrder = _MfgOrderMaterialDocItem.ManufacturingOrder
  -- to child: Documented goods movements
  association [0..*] to I_MfgOrderDocdGoodsMovement    as _MfgOrderDocdGoodsMovement   on  $projection.ManufacturingOrder = _MfgOrderDocdGoodsMovement.ManufacturingOrder
  -- to child: Document links
  association [0..*] to I_MfgOrderDocumentLink         as _MfgOrderDocumentLink        on  $projection.ManufacturingOrder = _MfgOrderDocumentLink.ManufacturingOrder
  association [0..*] to I_MfgOrderDocInfoRecdObjLink   as _MfgOrderDocInfoRecord       on  $projection.ManufacturingOrder = _MfgOrderDocInfoRecord.ManufacturingOrder
  -- to child: Long text
  association [0..1] to I_ManufacturingOrderLongText   as _MfgOrderLongText            on  $projection.ManufacturingOrder   = _MfgOrderLongText.ManufacturingOrder
                                                                                       and $projection.LongTextLanguageCode = _MfgOrderLongText.LongTextLanguage
  -- to child: Status                                                                                       
  association [0..*] to I_ManufacturingOrderStatus     as _MfgOrderStatus              on  $projection.ManufacturingOrder = _MfgOrderStatus.ManufacturingOrder

  -- to extensionLongtextlanguageCode = _LongTextLanguage.Language
  association [1..1] to E_LogisticsOrder               as _Extension                   on  $projection.ManufacturingOrder = _Extension.OrderID

  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                       as _ProductionPlantText          on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_Plant                       as _PlanningPlantText            on  $projection.PlanningPlant = _PlanningPlantText.Plant
  association [0..*] to I_ProductText                 as _MaterialText                 on  $projection.Material = _MaterialText.Product
  association [0..*] to I_ProductText                 as _ProductText                  on  $projection.Product = _ProductText.Product
  association [0..*] to I_ProductText                 as _BillOfOperationsMaterialText on  $projection.BillOfOperationsMaterial = _BillOfOperationsMaterialText.Product
  association [0..1] to I_ManufacturingOrder          as _ReferenceOrderText           on  $projection.ReferenceOrder = _ReferenceOrderText.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder          as _LeadingOrderText             on  $projection.LeadingOrder   = _LeadingOrderText.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder          as _SuperiorOrderText            on  $projection.SuperiorOrder  = _SuperiorOrderText.ManufacturingOrder
  association [0..1] to I_ProductionVersion           as _ProductionVersionText        on  $projection.Material          = _ProductionVersionText.Material
                                                                                       and $projection.ProductionPlant   = _ProductionVersionText.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersionText.ProductionVersion
  association [0..1] to I_MRPArea                     as _MRPAreaText                  on  $projection.MRPArea = _MRPAreaText.MRPArea
  association [0..1] to I_WBSElementBasicData         as _WBSElementText               on  $projection.WBSElementInternalID_2 = _WBSElementText.WBSElementInternalID
  association [0..1] to I_InspectionLot               as _InspectionLotText            on  $projection.InspectionLot = _InspectionLotText.InspectionLot
  association [0..1] to I_StorageLocation             as _StorageLocationText          on  $projection.ProductionPlant = _StorageLocationText.Plant
                                                                                       and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [1..1] to I_StatusObject                as _StatusObjectText             on  $projection.ObjectInternalID = _StatusObjectText.StatusObject
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText             on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText              on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea             as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea                                                                                     
  association [0..*] to I_FunctionalAreaText          as _FunctionalAreaText           on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
  association [0..1] to I_ProductCostCtrlgOrder       as _ProductCostCollectorText     on  $projection.ProductCostCollector = _ProductCostCollectorText.OrderID 
  -- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.text.element: ['ManufacturingOrderText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9}
  key cast(head.OrderID as manufacturingorder preserving type)       as ManufacturingOrder,

      -- for CDC purposes only
      @Consumption.hidden: true
      item.OrderItem     as ManufacturingOrderItem,

      // Category and Type
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      head.OrderCategory as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      head.OrderType     as ManufacturingOrderType,

      // Text
      @Semantics.text: true
      cast(head.OrderDescription as manufacturingordertext preserving type) as ManufacturingOrderText,
      cast(case 
            when head.OrderHasLongText <> '' then 'X'
            else head.OrderHasLongText
      end as aufltext preserving type)                                as ManufacturingOrderHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      head.LongTextLanguage                                           as LongTextLanguageCode,

      // Attributes
      @ObjectModel.foreignKey.association: '_MfgOrderImportance'
      cast(head.PriorityCode as orderimportancecode preserving type)  as ManufacturingOrderImportance,
      head.IsMarkedForDeletion,
      item.IsCompletelyDelivered,
      head.MfgOrderHasMultipleItems,
      head.MfgOrderIsPartOfCollvOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MfgOrderHierarchyLevelValue'
      head.MfgOrderHierarchyLevel,
      head.OrderHierarchyLevelValue                                   as MfgOrderHierarchyLevelValue,
      head.OrderHierarchyPathValue                                    as MfgOrderHierarchyPathValue,
      head.OrderIsNotCostedAutomatically,
      head.OrdIsNotSchedldAutomatically,
      head.ProdnProcgIsFlexible,

      // Admin data
      @Semantics.systemDate.createdAt: true
      cast(head.CreationDate as ordercreationdate preserving type)    as CreationDate,
      @Semantics.systemTime.createdAt: true
      cast(head.CreationTime as ordercreationtime preserving type)    as CreationTime,
      @Semantics.user.createdBy: true
      head.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      head.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      head.LastChangeTime,
      @Semantics.user.lastChangedBy: true
      head.LastChangedByUser,
      -- for email templates
      @Consumption.hidden: true
      cast(head.CreationDate as ordercreationdate preserving type)    as MfgOrderCreationDate,
      @Consumption.hidden: true
      cast(head.CreationTime as ordercreationtime preserving type)    as MfgOrderCreationTime,

      // Header Material data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      item.Material                                                         as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      cast(item.Material as productnumber preserving type)                  as Product,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      item.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      item.Batch,
      @Semantics.text: true
      item.GoodsRecipientName,
      @Semantics.text: true
      item.UnloadingPointName,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      item.InventoryUsabilityCode,
      item.SerialNumberAssgmtProfile                                        as SerialNumberProfile,
      item.MaterialGoodsReceiptDuration,
      item.QuantityDistributionKey,
      item.StockSegment,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      cast(head.OrderInternalBillOfOperations as pph_aufpl preserving type) as MfgOrderInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ReferenceOrder'
      head.ReferenceOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_LeadingOrder'
      head.LeadingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      head.MfgOrderSuperiorMfgOrder                                         as SuperiorOrder,
      @ObjectModel.foreignKey.association: '_Currency'
      head.Currency,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(head.Plant as pwwrk preserving type)                             as ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      item.MRPPlant                                                         as PlanningPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      item.MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(head.MRPController               as pph_dispo   preserving type) as MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(head.ProductionSupervisor        as pph_fevor   preserving type) as ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
      cast(head.ProductionSchedulingProfile as pph_prodprf preserving type) as ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      head.ResponsiblePlannerGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion2'
      item.ProductionVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      item.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      item.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElmntByIntKeyStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      item.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData2'
      item.WBSElementInternalID_2,
      @ObjectModel.foreignKey.association: '_Reservation'
      head.Reservation,
      @ObjectModel.foreignKey.association: '_SettlementReservation'    
      cast(head.SettlementReservation  as settlmntres preserving type)     as SettlementReservation,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      head.MfgOrderConfirmation,
      cast(head.MfgOrderConfirmationCount as pph_noofconf preserving type) as NumberOfMfgOrderConfirmations,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      item.PlannedOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      head.CapacityRequirement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspectionLotStdVH', element: 'InspectionLot' } } ]
      @ObjectModel.foreignKey.association: '_InspectionLot'
      head.InspectionLot,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      head.ChangeNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      cast(head.MaterialRevisionLevel  as qrevlv preserving type)                as MaterialRevisionLevel,   // with conv. exit
      head.MaterialRevisionLevel_2                                               as MaterialRevisionLevel_2, // w/o conv. exit
      @ObjectModel.foreignKey.association: '_BasicSchedulingType'
      cast(head.BasicSchedulingType    as basicschedtype preserving type)        as BasicSchedulingType,
      @ObjectModel.foreignKey.association: '_ForecastSchedulingType'
      cast(head.ForecastSchedulingType as forecastschedtype preserving type)     as ForecastSchedulingType,
      head.SchedulingIsAllowingForBreaks,
      @ObjectModel.foreignKey.association: '_StatusObject'
      cast(head.ObjectInternalID       as pph_objnr preserving type)             as ObjectInternalID,
      cast(item.ProductConfiguration   as product_configuration preserving type) as ProductConfiguration,
      item.EffectivityParameterVariant,
      head.ConditionApplication,
      head.CapacityActiveVersion,
      head.CapacityRqmtHasNotToBeCreated,
      head.OrderSequenceNumber,
      head.MfgOrderSplitStatus,
      @ObjectModel.foreignKey.association: '_RequestOrderType'
      head.RequestOrderType,

      // Assignments BOO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsMaterial'
      @ObjectModel.text.association: '_BillOfOperationsMaterialText'
      head.Material as BillOfOperationsMaterial,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      head.BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfOperationsGroup' // default data element change -> deprecated to avoid RTT2 error in ATC
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      head.BillOfOperations,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup2'
      head.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
      head.BillOfOperationsVariant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBOOChgStateStdVH', element: 'BOOInternalVersionCounter' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsChangeState'
      head.BOOInternalVersionCounter,
      @ObjectModel.foreignKey.association: '_BillOfOperationsApplication'
      head.BillOfOperationsApplication,
      @ObjectModel.foreignKey.association: '_BillOfOperationsUsage'
      head.BillOfOperationsUsage,
      head.BillOfOperationsVersion,
      head.BOOExplosionDate,
      head.BOOValidityStartDate,

      // Assignments BOM
      head.BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID'
      head.BillOfMaterial,            // with conv. exit NUMCV
      head.BillOfMaterialInternalID,  // with conv. exit ALPHA
      head.BillOfMaterialVariant,
      head.BillOfMaterialVariantUsage,
      head.BillOfMaterialVersion,
      head.BOMExplosionDate,
      head.BOMValidityStartDate,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      head.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      head.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      head.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      head.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      head.CostCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      head.ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_CostElement'
      head.CostElement,
      head.CostingSheet,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      head.GLAccount,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductCostCtrlgOrderStdVH', element: 'OrderID' } } ]  
      @ObjectModel.foreignKey.association: '_ProductCostCollector'
      head.ProductCostCollector,
      @ObjectModel.foreignKey.association: '_ActualCostsCostingVariant'
      head.ActualCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_PlannedCostsCostingVariant'
      head.PlannedCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      cast(head.ControllingObjectClass as pph_scope preserving type)                   as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      head.FunctionalArea,
      head.OverheadCode,
      head.ResultAnalysisInternalID,
      head.VarianceKey,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EventBasedPostingMethod'
      head.OrderIsEventBasedPosting,
      head.EventBasedPostingMethod,
      head.EventBasedProcessingKey,
      head.OrderSettlementTriggerType,

      // Floats
      @ObjectModel.foreignKey.association: '_SchedulingFloatProfile'
      head.SchedulingFloatProfile,
      head.FloatBeforeProductionInWrkDays,
      head.FloatAfterProductionInWorkDays,
      head.ReleasePeriodInWorkDays,

      // Dates and Times
      head.ChangeToScheduledDatesIsMade,
      -- planned/basic dates
      cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)          as MfgOrderPlannedStartDate,
      cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)          as MfgOrderPlannedStartTime,
      cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)              as MfgOrderPlannedEndDate,
      cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)              as MfgOrderPlannedEndTime,
      cast(head.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)      as MfgOrderPlannedReleaseDate,
      -- scheduled dates
      cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type) as MfgOrderScheduledStartDate,
      cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type) as MfgOrderScheduledStartTime,
      cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)     as MfgOrderScheduledEndDate,
      cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)     as MfgOrderScheduledEndTime,
      cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)  as MfgOrderScheduledReleaseDate,
      -- confirmed/actual dates      
      cast(head.ActualStartDate as mfgorderactualstartdate preserving type)            as MfgOrderActualStartDate,
      cast(head.ActualStartTime as mfgorderactualstarttime preserving type)            as MfgOrderActualStartTime,
      cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)          as MfgOrderConfirmedEndDate,
      cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)          as MfgOrderConfirmedEndTime,
      @API.element.releaseState: #DEPRECATED     // wrong GFN, GLTRI is the delivery date = LTRMI
      @API.element.successor: 'MfgOrderItemActualDeliveryDate'
      cast(head.ActualEndDate as mfgorderactualenddate preserving type)                as MfgOrderActualEndDate,
      cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)       as MfgOrderActualReleaseDate,
      -- other dates
      item.TotalCommitmentDate                                                         as MfgOrderTotalCommitmentDate,
      head.TechnicalCompletionDate                                                     as MfgOrderActualCompletionDate,
      item.ActualDeliveryDate                                                          as MfgOrderItemActualDeliveryDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      cast(head.BaseUnit as productionunit preserving type)                      as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type) as MfgOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type) as MfgOrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedYieldQty as co_igmng preserving type)              as MfgOrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)              as MfgOrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      head.MfgOrderConfirmedReworkQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemActualDeviationQty as co_mimez preserving type)      as ExpectedDeviationQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemGoodsReceiptQty                                           as ActualDeliveredQuantity,

      // Fashion Manufacturing Fields
      head.MasterProductionOrder                                                 as MasterProductionOrder,
      item.ProductSeasonYear                                                     as ProductSeasonYear,
      item.ProductSeason                                                         as ProductSeason,
      item.ProductCollection                                                     as ProductCollection,
      item.ProductTheme                                                          as ProductTheme,      
      
      // Associations
      _MfgOrderCategory,
      _MfgOrderType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderItem,
      _MfgOrderMainItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderSequence,
      _MfgOrderOperation,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderMaterialDocItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderDocdGoodsMovement,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderDocumentLink,
      _MfgOrderDocInfoRecord,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderLongText,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderStatus,
      _MfgOrderImportance,
      head._OrderTypeDetails,
      _CreatedByUser,
      _LastChangedByUser,
      _LongTextLanguage,
      _ProductionUnit,
      head._Currency,
      _SuperiorOrder,
      _ReferenceOrder,
      _LeadingOrder,
      _OrderInternalID,
      _BillOfOperationsMaterial,
      head._BillOfOperationsType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsGroup2'
      head._BillOfOperationsGroup,
      head._BillOfOperationsGroup2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperations2'
      _BillOfOperations,
      _BillOfOperations2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsChangeState2'
      _BillOfOperationsChangeState,
      _BillOfOperationsChangeState2,
      head._BillOfOperationsApplication,
      head._BillOfOperationsUsage,
      head._ConfirmationGroup,
      head._Reservation,
      head._SettlementReservation,
      _ProductionPlant,
      _PlanningPlant,
      item._Material,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductStorageLocation2'
      _ProductStorageLocation,
      _ProductStorageLocation2,
      _ProductPlantMRPArea,
      _ProductUnitsOfMeasure,
      _StorageLocation,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Batch_2'  // 0..1 cardinality
      _Batch,
      _Batch_2,
      _MRPArea,
      _MRPController,
      _ProductionSupervisor,
      _ProductionSchedulingProfile,
      _ResponsiblePlannerGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductionVersion2'
      _ProductionVersion,
      _ProductionVersion2,
      head._CapacityRequirement,
      _ChangeNumber,
      _StatusObject,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_MaterialRevisionLevel2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MaterialRevisionLevel2'
      _MaterialRevisionLevel,
      _MaterialRevisionLevel2,
      head._InspectionLot,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_WBSElementBasicData2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      _WBSElement,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_WBSElementBasicData2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'
      _WBSElementBasicData,
      item._WBSElementBasicData2,
      item._EnterpriseProjectElement,
      item._PlannedOrder,
      item._InventoryUsabilityCode,
      _SerialNumberProfile,
      head._RequestOrderType,
      head._BasicSchedulingType,
      head._ForecastSchedulingType,
      head._SchedulingFloatProfile,
      head._BusinessArea,
      head._ProfitCenter,
      head._CostCenter,
      head._ResponsibleCostCenter,
      head._CompanyCode,
      head._ControllingArea,
      head._ControllingObjectClass,
      _CostElement,
      _ActualCostsCostingVariant,
      _PlannedCostsCostingVariant,
      head._FunctionalArea,
      _GLAccount,
      head._ProductCostCollector,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderLongText'
      head._LongText,
      head._RFM_MasterProductOrder,
      
      // Text relations
      _MaterialText,
      _ProductText,
      _ProductionPlantText,
      _PlanningPlantText,
      _ReferenceOrderText,
      _LeadingOrderText,
      _SuperiorOrderText,
      _InspectionLotText,
      _ProductionVersionText,
      _MRPAreaText,
      _WBSElementText,
      _StorageLocationText,
      _BillOfOperationsMaterialText,
      _StatusObjectText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText,
      _ProductCostCollectorText 
}
where
  (    head.OrderCategory = '10'
    or head.OrderCategory = '40' ); //Manufacturing orders only
```
