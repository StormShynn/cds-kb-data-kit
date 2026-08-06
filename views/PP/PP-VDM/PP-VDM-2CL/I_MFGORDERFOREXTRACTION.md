---
name: I_MFGORDERFOREXTRACTION
description: Mfgorderforextraction
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
# I_MFGORDERFOREXTRACTION

**Mfgorderforextraction**

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
| `ManufacturingOrderHasLongText` | `head.OrderHasLongText` |
| `LongTextLanguage` | `head.LongTextLanguage` |
| `ManufacturingOrderImportance` | `cast(hdr2.PriorityCode as orderimportancecode preserving type)` |
| `IsMarkedForDeletion` | `head.IsMarkedForDeletion` |
| `IsCompletelyDelivered` | `item.IsCompletelyDelivered` |
| `MfgOrderIsPartOfCollvOrder` | `hdr2.MfgOrderIsPartOfCollvOrder` |
| `MfgOrderHierarchyLevel` | `hdr2.MfgOrderHierarchyLevel` |
| `MfgOrderHierarchyLevelValue` | `hdr2.OrderHierarchyLevelValue` |
| `MfgOrderHierarchyPathValue` | `hdr2.OrderHierarchyPathValue` |
| `OrderIsNotCostedAutomatically` | `hdr2.OrderIsNotCostedAutomatically` |
| `OrdIsNotSchedldAutomatically` | `hdr2.OrdIsNotSchedldAutomatically` |
| `ProdnProcgIsFlexible` | `hdr2.ProdnProcgIsFlexible` |
| `CreationDate` | `cast(head.CreationDate as ordercreationdate preserving type)` |
| `CreationTime` | `cast(head.CreationTime as ordercreationtime preserving type)` |
| `CreatedByUser` | `head.CreatedByUser` |
| `LastChangeDate` | `head.LastChangeDate` |
| `LastChangeTime` | `head.LastChangeTime` |
| `LastChangedByUser` | `head.LastChangedByUser` |
| `Material` | `item.Material` |
| `Product` | `cast(item.Material as productnumber preserving type)` |
| `StorageLocation` | `item.StorageLocation` |
| `Batch` | `item.Batch` |
| `GoodsRecipientName` | `item.GoodsRecipientName` |
| `UnloadingPointName` | `item.UnloadingPointName` |
| `InventoryUsabilityCode` | `item.InventoryUsabilityCode` |
| `MaterialGoodsReceiptDuration` | `item.MaterialGoodsReceiptDuration` |
| `MfgOrderInternalID` | `cast(hdr2.OrderInternalID as pph_aufpl preserving type)` |
| `ReferenceOrder` | `head.ReferenceOrder` |
| `LeadingOrder` | `hdr2.LeadingOrder` |
| `SuperiorOrder` | `hdr2.MfgOrderSuperiorMfgOrder` |
| `ProductionPlant` | `cast(head.Plant as pwwrk preserving type)` |
| `PlanningPlant` | `item.MRPPlant` |
| `MRPArea` | `item.MRPArea` |
| `MRPController` | `cast(hdr2.MRPController as pph_dispo preserving type)` |
| `ProductionSupervisor` | `cast(hdr2.ProductionSupervisor as pph_fevor preserving type)` |
| `ProductionSchedulingProfile` | `cast(hdr2.ProductionSchedulingProfile as pph_prodprf preserving type)` |
| `ResponsiblePlannerGroup` | `hdr2.ResponsiblePlannerGroup` |
| `ProductionVersion` | `item.ProductionVersion` |
| `SalesOrder` | `item.SalesOrder` |
| `SalesOrderItem` | `item.SalesOrderItem` |
| `WBSElementInternalID` | `item.WBSElementInternalID_2` |
| `Reservation` | `hdr2.Reservation` |
| `SettlementReservation` | `cast(hdr2.SettlementReservation as settlmntres preserving type)` |
| `MfgOrderConfirmation` | `hdr2.MfgOrderConfirmation` |
| `NumberOfMfgOrderConfirmations` | `cast(hdr2.MfgOrderConfirmationCount as pph_noofconf preserving type)` |
| `PlannedOrder` | `item.PlannedOrder` |
| `CapacityRequirement` | `hdr2.CapacityRequirement` |
| `InspectionLot` | `hdr2.InspectionLot` |
| `ChangeNumber` | `hdr2.ChangeNumber` |
| `BasicSchedulingType` | `cast(hdr2.BasicSchedulingType as basicschedtype preserving type)` |
| `ForecastSchedulingType` | `cast(hdr2.ForecastSchedulingType as forecastschedtype preserving type)` |
| `ObjectInternalID` | `cast(head.ObjectInternalID as pph_objnr preserving type)` |
| `ProductConfiguration` | `cast(item.ProductConfiguration as product_configuration preserving type)` |
| `EffectivityParameterVariant` | `item.EffectivityParameterVariant` |
| `ConditionApplication` | `head.ConditionApplication` |
| `CapacityActiveVersion` | `hdr2.CapacityActiveVersion` |
| `CapacityRqmtHasNotToBeCreated` | `hdr2.CapacityRqmtHasNotToBeCreated` |
| `OrderSequenceNumber` | `hdr2.OrderSequenceNumber` |
| `MfgOrderSplitStatus` | `hdr2.MfgOrderSplitStatus` |
| `BillOfOperationsMaterial` | `hdr2.Material` |
| `BillOfOperationsType` | `hdr2.BillOfOperationsType` |
| `BillOfOperationsGroup` | `hdr2.BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `hdr2.BillOfOperationsVariant` |
| `BOOInternalVersionCounter` | `hdr2.BOOInternalVersionCounter` |
| `BillOfOperationsUsage` | `hdr2.BillOfOperationsUsage` |
| `BillOfOperationsVersion` | `hdr2.BillOfOperationsVersion` |
| `BOOExplosionDate` | `hdr2.BOOExplosionDate` |
| `BOOValidityStartDate` | `hdr2.BOOValidityStartDate` |
| `BillOfMaterialCategory` | `hdr2.BillOfMaterialCategory` |
| `BillOfMaterial` | `hdr2.BillOfMaterial` |
| `BillOfMaterialVariant` | `hdr2.BillOfMaterialVariant` |
| `BillOfMaterialVariantUsage` | `hdr2.BillOfMaterialVariantUsage` |
| `BillOfMaterialVersion` | `hdr2.BillOfMaterialVersion` |
| `BillOfMaterialStatus` | `hdr2.BillOfMaterialStatus` |
| `BOMExplosionDate` | `hdr2.BOMExplosionDate` |
| `BOMValidityStartDate` | `hdr2.BOMValidityStartDate` |
| `BusinessArea` | `head.BusinessArea` |
| `CompanyCode` | `head.CompanyCode` |
| `ControllingArea` | `head.ControllingArea` |
| `ProfitCenter` | `head.ProfitCenter` |
| `CostCenter` | `head.CostCenter` |
| `ResponsibleCostCenter` | `head.ResponsibleCostCenter` |
| `CostElement` | `head.CostElement` |
| `GLAccount` | `head.GLAccount` |
| `ProductCostCollector` | `head.ProductCostCollector` |
| `ActualCostsCostingVariant` | `hdr2.ActualCostsCostingVariant` |
| `PlannedCostsCostingVariant` | `hdr2.PlannedCostsCostingVariant` |
| `ControllingObjectClass` | `cast(head.ControllingObjectClass as pph_scope preserving type)` |
| `FunctionalArea` | `head.FunctionalArea` |
| `EventBasedPostingMethod` | `head.EventBasedPostingMethod` |
| `EventBasedProcessingKey` | `head.EventBasedProcessingKey` |
| `OrderSettlementTriggerType` | `head.OrderSettlementTriggerType` |
| `SchedulingFloatProfile` | `hdr2.SchedulingFloatProfile` |
| `FloatBeforeProductionInWrkDays` | `hdr2.FloatBeforeProductionInWrkDays` |
| `FloatAfterProductionInWorkDays` | `hdr2.FloatAfterProductionInWorkDays` |
| `ReleasePeriodInWorkDays` | `hdr2.ReleasePeriodInWorkDays` |
| `MfgOrderPlannedStartDate` | `cast(hdr2.PlannedStartDate as mfgorderplannedstartdate preserving type)` |
| `MfgOrderPlannedStartTime` | `cast(hdr2.PlannedStartTime as mfgorderplannedstarttime preserving type)` |
| `MfgOrderPlannedEndDate` | `cast(hdr2.PlannedEndDate as mfgorderplannedenddate preserving type)` |
| `MfgOrderPlannedEndTime` | `cast(hdr2.PlannedEndTime as mfgorderplannedendtime preserving type)` |
| `MfgOrderPlannedReleaseDate` | `cast(hdr2.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)` |
| `MfgOrderScheduledStartDate` | `cast(hdr2.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type)` |
| `MfgOrderScheduledStartTime` | `cast(hdr2.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type)` |
| `MfgOrderScheduledEndDate` | `cast(hdr2.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)` |
| `MfgOrderScheduledEndTime` | `cast(hdr2.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)` |
| `MfgOrderScheduledReleaseDate` | `cast(hdr2.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)` |
| `MfgOrderActualStartDate` | `cast(hdr2.ActualStartDate as mfgorderactualstartdate preserving type)` |
| `MfgOrderActualStartTime` | `cast(hdr2.ActualStartTime as mfgorderactualstarttime preserving type)` |
| `MfgOrderConfirmedEndDate` | `cast(hdr2.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)` |
| `MfgOrderConfirmedEndTime` | `cast(hdr2.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)` |
| `MfgOrderActualReleaseDate` | `cast(hdr2.ActualReleasedDate as mfgorderactualreleasedate preserving type)` |
| `MfgOrderTotalCommitmentDate` | `item.TotalCommitmentDate` |
| `MfgOrderItemActualDeliveryDate` | `item.ActualDeliveryDate` |
| `MfgOrderActualCompletionDate` | `head.TechnicalCompletionDate` |
| `ProductionUnit` | `cast(hdr2.BaseUnit as productionunit preserving type)` |
| `MfgOrderPlannedTotalQty` | `cast(hdr2.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type)` |
| `MfgOrderPlannedScrapQty` | `cast(hdr2.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type)` |
| `MfgOrderConfirmedYieldQty` | `cast(hdr2.OrderConfirmedYieldQty as co_igmng preserving type)` |
| `MfgOrderConfirmedScrapQty` | `cast(hdr2.OrderConfirmedScrapQty as co_iasmg preserving type)` |
| `MfgOrderConfirmedReworkQty` | `hdr2.MfgOrderConfirmedReworkQty` |
| `ExpectedDeviationQuantity` | `cast(item.MfgOrderItemActualDeviationQty as co_mimez preserving type)` |
| `ActualDeliveredQuantity` | `item.MfgOrderItemGoodsReceiptQty` |
| `Currency` | `head.Currency` |
| `GoodsReceiptAmount` | `item.GoodsReceiptAmountInCoCodeCrcy` |
| `_ReferenceOrder` | *Association* |
| `_LeadingOrder` | *Association* |
| `_SuperiorOrder` | *Association* |
| `_OrderInternalID` | *Association* |
| `_MfgOrderLongText` | *Association* |
| `_LongTextLanguage` | *Association* |
| `_ProductionUnit` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_ProductionPlant` | *Association* |
| `_PlanningPlant` | *Association* |
| `_MRPArea` | *Association* |
| `_StorageLocation` | *Association* |
| `_Batch` | *Association* |
| `_Product` | *Association* |
| `_ProductPlant` | *Association* |
| `_ProductStorageLocation` | *Association* |
| `_ProductPlantMRPArea` | *Association* |
| `_BillOfOperationsMaterial` | *Association* |
| `_SalesOrder` | *Association* |
| `_SalesOrderItem` | *Association* |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_EnterpriseProjectElement` | *Association* |
| `_ChangeNumber` | *Association* |
| `_GLAccount` | *Association* |
| `_CostElement` | *Association* |
| `_ActualCostsCostingVariant` | *Association* |
| `_PlannedCostsCostingVariant` | *Association* |
| `_MRPController` | *Association* |
| `_ProductionSupervisor` | *Association* |
| `_ProductionSchedulingProfile` | *Association* |
| `_ResponsiblePlannerGroup` | *Association* |
| `_SchedulingFloatProfile` | *Association* |
| `_BillOfOperations` | *Association* |
| `_BillOfOperationsChangeState` | *Association* |
| `_ProductionVersion` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferenceOrder` | `I_ManufacturingOrder` | [0..1] |
| `_LeadingOrder` | `I_ManufacturingOrder` | [0..1] |
| `_SuperiorOrder` | `I_ManufacturingOrder` | [0..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_MfgOrderLongText` | `I_ManufacturingOrderLongText` | [0..1] |
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_PlanningPlant` | `I_Plant` | [0..1] |
| `_MRPArea` | `I_MRPArea` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductPlant` | `I_ProductPlantBasic` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_BillOfOperationsMaterial` | `I_Product` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_CostElement` | `I_CostElement` | [0..1] |
| `_ActualCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_PlannedCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionSchedulingProfile` | `I_ProductionSchedulingProfile` | [0..1] |
| `_ResponsiblePlannerGroup` | `I_ResponsiblePlannerGroup` | [0..1] |
| `_SchedulingFloatProfile` | `I_SchedulingFloatProfile` | [0..1] |
| `_BillOfOperations` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsChangeState` | `I_MfgBillOfOperationsChgSt` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDEREXTRCN'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_CreatedByUser', '_LastChangedByUser', '_LongText'] 
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
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ManufacturingOrder'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.semanticKey: ['ManufacturingOrder']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Manufacturing Order for Extraction'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "CARDINALITY_CHECK" ]  } */
define view I_MfgOrderForExtraction
  as select from I_OrderBasic                    as  head
    left outer to one join I_LogisticsOrderBasic as  hdr2 on hdr2.OrderID = head.OrderID
    left outer to one join I_OrderItem           as  item on item.OrderID   = head.OrderID
                                                 and item.OrderItem = '0001'

  association [0..1] to I_ManufacturingOrder           as _ReferenceOrder              on  $projection.ReferenceOrder = _ReferenceOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder           as _LeadingOrder                on  $projection.LeadingOrder   = _LeadingOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrder           as _SuperiorOrder               on  $projection.SuperiorOrder  = _SuperiorOrder.ManufacturingOrder
  association [1..1] to I_OrderInternalID              as _OrderInternalID             on  $projection.MfgOrderInternalID = _OrderInternalID.OrderInternalID
  association [0..1] to I_ManufacturingOrderLongText   as _MfgOrderLongText            on  $projection.ManufacturingOrder = _MfgOrderLongText.ManufacturingOrder
                                                                                       and $projection.LongTextLanguage   = _MfgOrderLongText.LongTextLanguage
  association [0..1] to I_Language                     as _LongTextLanguage            on  $projection.LongTextLanguage = _LongTextLanguage.Language
  association [1..1] to I_UnitOfMeasure                as _ProductionUnit              on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [1..1] to I_User                         as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser           on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Plant                        as _ProductionPlant             on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [0..1] to I_Plant                        as _PlanningPlant               on  $projection.PlanningPlant   = _PlanningPlant.Plant
  association [0..1] to I_MRPArea                      as _MRPArea                     on  $projection.MRPArea  = _MRPArea.MRPArea
  association [0..1] to I_StorageLocation              as _StorageLocation             on  $projection.ProductionPlant = _StorageLocation.Plant
                                                                                       and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Batch                        as _Batch                       on  $projection.ProductionPlant = _Batch.Plant
                                                                                       and $projection.Material        = _Batch.Material
                                                                                       and $projection.Batch           = _Batch.Batch
  association [0..1] to I_Product                      as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_ProductPlantBasic            as _ProductPlant                on  $projection.ProductionPlant = _ProductPlant.Plant
                                                                                       and $projection.Product         = _ProductPlant.Product
  association [0..1] to I_ProductStorageLocationBasic  as _ProductStorageLocation      on  $projection.Product         = _ProductStorageLocation.Product
                                                                                       and $projection.ProductionPlant = _ProductStorageLocation.Plant
                                                                                       and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductPlantMRP              as _ProductPlantMRPArea         on  $projection.Product         = _ProductPlantMRPArea.Product
                                                                                       and $projection.ProductionPlant = _ProductPlantMRPArea.Plant
                                                                                       and $projection.MRPArea         = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_Product                      as _BillOfOperationsMaterial    on  $projection.BillOfOperationsMaterial = _BillOfOperationsMaterial.Product
  association [0..1] to I_SalesOrder                   as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                       and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDocument               on  $projection.SalesOrder = _SalesDocument.SalesDocument 
  association [0..1] to I_SalesDocumentItem            as _SalesDocumentItem           on  $projection.SalesOrder     = _SalesDocumentItem.SalesDocument
                                                                                       and $projection.SalesOrderItem = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement     as _EnterpriseProjectElement    on  $projection.WBSElementInternalID = _EnterpriseProjectElement.WBSElementInternalID  
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
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
  association [0..1] to I_SchedulingFloatProfile       as _SchedulingFloatProfile      on  $projection.ProductionPlant        = _SchedulingFloatProfile.Plant
                                                                                       and $projection.SchedulingFloatProfile = _SchedulingFloatProfile.SchedulingFloatProfile
  association [0..1] to I_MfgBillOfOperations          as _BillOfOperations            on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsChgSt     as _BillOfOperationsChangeState on  $projection.BillOfOperationsType      = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup     = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant   = _BillOfOperationsChangeState.BillOfOperationsVariant
                                                                                       and $projection.BOOInternalVersionCounter = _BillOfOperationsChangeState.BOOInternalVersionCounter
  association [0..1] to I_ProductionVersion            as _ProductionVersion           on  $projection.Material          = _ProductionVersion.Material
                                                                                       and $projection.ProductionPlant   = _ProductionVersion.Plant
                                                                                       and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
{
      // Key
      @ObjectModel.text.element: ['ManufacturingOrderText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9}
  key cast(head.OrderID as manufacturingorder preserving type) as ManufacturingOrder,

      -- for CDC purposes only
      item.OrderItem                                           as ManufacturingOrderItem,

      // Category and Type
      @ObjectModel.foreignKey.association: '_OrderCategory'
      head.OrderCategory as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_OrderType'
      head.OrderType     as ManufacturingOrderType,

      // Text
      @Semantics.text: true
      cast(head.OrderDescription as manufacturingordertext preserving type) as ManufacturingOrderText,
      head.OrderHasLongText                                                 as ManufacturingOrderHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      head.LongTextLanguage,

      // Attributes
      cast(hdr2.PriorityCode as orderimportancecode preserving type) as ManufacturingOrderImportance,
      head.IsMarkedForDeletion,
      item.IsCompletelyDelivered,
      @Semantics.booleanIndicator 
      hdr2.MfgOrderIsPartOfCollvOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MfgOrderHierarchyLevelValue'
      hdr2.MfgOrderHierarchyLevel,
      hdr2.OrderHierarchyLevelValue                                  as MfgOrderHierarchyLevelValue,
      hdr2.OrderHierarchyPathValue                                   as MfgOrderHierarchyPathValue,
      @Semantics.booleanIndicator 
      hdr2.OrderIsNotCostedAutomatically,
      @Semantics.booleanIndicator 
      hdr2.OrdIsNotSchedldAutomatically,
      hdr2.ProdnProcgIsFlexible,

      // Admin data
      @Semantics.systemDate.createdAt: true
      cast(head.CreationDate as ordercreationdate preserving type)   as CreationDate,
      @Semantics.systemTime.createdAt: true
      cast(head.CreationTime as ordercreationtime preserving type)   as CreationTime,
      @Semantics.user.createdBy: true
      head.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      head.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      head.LastChangeTime,
      @Semantics.user.lastChangedBy: true
      head.LastChangedByUser,

      // Header Material data
      @ObjectModel.foreignKey.association: '_Material'
      item.Material                                                  as Material,
      @ObjectModel.foreignKey.association: '_Product'
      cast(item.Material as productnumber preserving type)           as Product,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      item.StorageLocation,
      @ObjectModel.foreignKey.association: '_Batch'
      item.Batch,
      @Semantics.text: true
      item.GoodsRecipientName,
      @Semantics.text: true
      item.UnloadingPointName,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      item.InventoryUsabilityCode,
      item.MaterialGoodsReceiptDuration,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      cast(hdr2.OrderInternalID as pph_aufpl preserving type)               as MfgOrderInternalID,
      @ObjectModel.foreignKey.association: '_ReferenceOrder'
      head.ReferenceOrder,
      @ObjectModel.foreignKey.association: '_LeadingOrder'
      hdr2.LeadingOrder,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      hdr2.MfgOrderSuperiorMfgOrder                                         as SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(head.Plant as pwwrk preserving type)                             as ProductionPlant,
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      item.MRPPlant                                                         as PlanningPlant,
      @ObjectModel.foreignKey.association: '_MRPArea'
      item.MRPArea,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(hdr2.MRPController               as pph_dispo   preserving type) as MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(hdr2.ProductionSupervisor        as pph_fevor   preserving type) as ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
      cast(hdr2.ProductionSchedulingProfile as pph_prodprf preserving type) as ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      hdr2.ResponsiblePlannerGroup,
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      item.ProductionVersion,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      item.SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      item.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      item.WBSElementInternalID_2                                           as WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_Reservation'
      hdr2.Reservation,
      @ObjectModel.foreignKey.association: '_SettlementReservation'    
      cast(hdr2.SettlementReservation  as settlmntres preserving type)      as SettlementReservation,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      hdr2.MfgOrderConfirmation,
      cast(hdr2.MfgOrderConfirmationCount as pph_noofconf preserving type)  as NumberOfMfgOrderConfirmations,
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      item.PlannedOrder,
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      hdr2.CapacityRequirement,
      @ObjectModel.foreignKey.association: '_InspectionLot'
      hdr2.InspectionLot,
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      hdr2.ChangeNumber,
      @ObjectModel.foreignKey.association: '_BasicSchedulingType'
      cast(hdr2.BasicSchedulingType    as basicschedtype preserving type)        as BasicSchedulingType,
      @ObjectModel.foreignKey.association: '_ForecastSchedulingType'
      cast(hdr2.ForecastSchedulingType as forecastschedtype preserving type)     as ForecastSchedulingType,
      cast(head.ObjectInternalID       as pph_objnr preserving type)             as ObjectInternalID,
      cast(item.ProductConfiguration   as product_configuration preserving type) as ProductConfiguration,
      item.EffectivityParameterVariant,
      head.ConditionApplication,
      hdr2.CapacityActiveVersion,
      hdr2.CapacityRqmtHasNotToBeCreated,
      hdr2.OrderSequenceNumber,
      hdr2.MfgOrderSplitStatus,

      // Assignments BOO
      @ObjectModel.foreignKey.association: '_BillOfOperationsMaterial'
      hdr2.Material as BillOfOperationsMaterial,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      hdr2.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      hdr2.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
      hdr2.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsChangeState'
      hdr2.BOOInternalVersionCounter,
      @ObjectModel.foreignKey.association: '_BillOfOperationsUsage'
      hdr2.BillOfOperationsUsage,
      hdr2.BillOfOperationsVersion,
      hdr2.BOOExplosionDate,
      hdr2.BOOValidityStartDate,

      // Assignments BOM
      hdr2.BillOfMaterialCategory,
      hdr2.BillOfMaterial,
      hdr2.BillOfMaterialVariant,
      hdr2.BillOfMaterialVariantUsage,
      hdr2.BillOfMaterialVersion,
      hdr2.BillOfMaterialStatus,
      hdr2.BOMExplosionDate,
      hdr2.BOMValidityStartDate,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
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
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      head.GLAccount,
      @ObjectModel.foreignKey.association: '_ProductCostCtrlgOrder'
      head.ProductCostCollector,
      @ObjectModel.foreignKey.association: '_ActualCostsCostingVariant'
      hdr2.ActualCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_PlannedCostsCostingVariant'
      hdr2.PlannedCostsCostingVariant,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      cast(head.ControllingObjectClass as pph_scope preserving type)                   as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      head.FunctionalArea,
      head.EventBasedPostingMethod,
      head.EventBasedProcessingKey,
      head.OrderSettlementTriggerType,

      // Floats
      @ObjectModel.foreignKey.association: '_SchedulingFloatProfile'
      hdr2.SchedulingFloatProfile,
      hdr2.FloatBeforeProductionInWrkDays,
      hdr2.FloatAfterProductionInWorkDays,
      hdr2.ReleasePeriodInWorkDays,

      // Dates and Times
      -- planned/basic dates
      cast(hdr2.PlannedStartDate as mfgorderplannedstartdate preserving type)          as MfgOrderPlannedStartDate,
      cast(hdr2.PlannedStartTime as mfgorderplannedstarttime preserving type)          as MfgOrderPlannedStartTime,
      cast(hdr2.PlannedEndDate as mfgorderplannedenddate preserving type)              as MfgOrderPlannedEndDate,
      cast(hdr2.PlannedEndTime as mfgorderplannedendtime preserving type)              as MfgOrderPlannedEndTime,
      cast(hdr2.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)      as MfgOrderPlannedReleaseDate,
      -- scheduled dates
      cast(hdr2.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type) as MfgOrderScheduledStartDate,
      cast(hdr2.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type) as MfgOrderScheduledStartTime,
      cast(hdr2.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)     as MfgOrderScheduledEndDate,
      cast(hdr2.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)     as MfgOrderScheduledEndTime,
      cast(hdr2.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)  as MfgOrderScheduledReleaseDate,
      -- confirmed/actual dates      
      cast(hdr2.ActualStartDate as mfgorderactualstartdate preserving type)            as MfgOrderActualStartDate,
      cast(hdr2.ActualStartTime as mfgorderactualstarttime preserving type)            as MfgOrderActualStartTime,
      cast(hdr2.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)          as MfgOrderConfirmedEndDate,
      cast(hdr2.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)          as MfgOrderConfirmedEndTime,
      cast(hdr2.ActualReleasedDate as mfgorderactualreleasedate preserving type)       as MfgOrderActualReleaseDate,
      -- other dates
      item.TotalCommitmentDate                                                         as MfgOrderTotalCommitmentDate,
      item.ActualDeliveryDate                                                          as MfgOrderItemActualDeliveryDate,
      head.TechnicalCompletionDate                                                     as MfgOrderActualCompletionDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      cast(hdr2.BaseUnit as productionunit preserving type)                      as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(hdr2.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type) as MfgOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(hdr2.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type) as MfgOrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(hdr2.OrderConfirmedYieldQty as co_igmng preserving type)              as MfgOrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(hdr2.OrderConfirmedScrapQty as co_iasmg preserving type)              as MfgOrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      hdr2.MfgOrderConfirmedReworkQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemActualDeviationQty as co_mimez preserving type)      as ExpectedDeviationQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      item.MfgOrderItemGoodsReceiptQty                                           as ActualDeliveredQuantity,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      head.Currency,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      item.GoodsReceiptAmountInCoCodeCrcy                                        as GoodsReceiptAmount,

      // Associations
      head._OrderCategory,
      head._OrderType,
      _MfgOrderLongText,
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
      hdr2._BillOfOperationsType,
      hdr2._BillOfOperationsGroup,
      _BillOfOperations,
      _BillOfOperationsChangeState,
      hdr2._BillOfOperationsUsage,
      hdr2._ConfirmationGroup,
      hdr2._Reservation,
      hdr2._SettlementReservation,
      _ProductionPlant,
      _PlanningPlant,
      item._Material,
      _Product,
      _ProductPlant,
      _ProductStorageLocation,
      _ProductPlantMRPArea,
      _StorageLocation,
      _Batch,
      _MRPArea,
      _MRPController,
      _ProductionSupervisor,
      _ProductionSchedulingProfile,
      _ResponsiblePlannerGroup,
      _ProductionVersion,
      hdr2._CapacityRequirement,
      _ChangeNumber,
      hdr2._InspectionLot,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _WBSElementBasicData,
      _EnterpriseProjectElement,
      item._PlannedOrder,
      item._InventoryUsabilityCode,
      hdr2._BasicSchedulingType,
      hdr2._ForecastSchedulingType,
      _SchedulingFloatProfile,
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
      head._ProductCostCtrlgOrder,
      head._LongText
}
where
  (    head.OrderCategory = '04'
    or head.OrderCategory = '05'
    or head.OrderCategory = '06'
    or head.OrderCategory = '10'
    or head.OrderCategory = '40' );
```
