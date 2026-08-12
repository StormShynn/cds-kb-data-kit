---
name: I_PRODUCTIONORDER
description: "Production Order"
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
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDER

**Production Order**

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
| `ProductionOrder` | ✓ | |  | `cast(head.OrderID as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderText` |  | |  | `cast(head.OrderDescription as vdm_prodnordertext preserving type)` |  |  |
| `ProductionOrderHasLongText` |  | |  | `OrderHasLongText` |  |  |
| `LongTextLanguage` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  | `cast(head.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `OrderImportance` |  | |  | `cast(head.PriorityCode as orderimportancecode preserving type)` |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `OrderHasMultipleItems` |  | |  | `MfgOrderHasMultipleItems` |  |  |
| `OrderIsPartOfCollectiveOrder` |  | |  | `MfgOrderIsPartOfCollvOrder` |  |  |
| `OrderHierarchyLevelValue` |  | |  |  |  |  |
| `OrderHierarchyPathValue` |  | |  |  |  |  |
| `OrderIsNotCostedAutomatically` |  | |  |  |  |  |
| `OrdIsNotSchedldAutomatically` |  | |  |  |  |  |
| `ProdnProcgIsFlexible` |  | |  |  |  |  |
| `CreationDate` |  | |  | `cast(head.CreationDate as ordercreationdate preserving type)` |  |  |
| `CreationTime` |  | |  | `cast(head.CreationTime as ordercreationtime preserving type)` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ProductionOrderInternalID` |  | |  | `cast(head.OrderInternalBillOfOperations as pph_aufpl preserving type)` |  |  |
| `ReferenceOrder` |  | |  |  |  |  |
| `LeadingOrder` |  | |  |  |  |  |
| `SuperiorOrder` |  | |  | `MfgOrderSuperiorMfgOrder` |  |  |
| `Currency` |  | |  |  |  |  |
| `ProductionPlant` |  | |  | `cast(head.Plant as pwwrk preserving type)` |  |  |
| `MRPController` |  | |  | `cast(head.MRPController as pph_dispo preserving type)` |  |  |
| `ProductionSupervisor` |  | |  | `cast(head.ProductionSupervisor as pph_fevor preserving type)` |  |  |
| `ProductionSchedulingProfile` |  | |  | `cast(head.ProductionSchedulingProfile as pph_prodprf preserving type)` |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `SettlementReservation` |  | |  | `cast(head.SettlementReservation as settlmntres preserving type)` |  |  |
| `OrderConfirmationGroup` |  | |  | `MfgOrderConfirmation` |  |  |
| `NumberOfOrderConfirmations` |  | |  | `cast(head.MfgOrderConfirmationCount as pph_noofconf preserving type)` |  |  |
| `CapacityRequirement` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  | `MaterialRevisionLevel_2` |  |  |
| `BasicSchedulingType` |  | |  | `cast(head.BasicSchedulingType as basicschedtype preserving type)` |  |  |
| `ForecastSchedulingType` |  | |  | `cast(head.ForecastSchedulingType as forecastschedtype preserving type)` |  |  |
| `SchedulingIsAllowingForBreaks` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  | `cast(head.ObjectInternalID as pph_objnr preserving type)` |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `CapacityActiveVersion` |  | |  |  |  |  |
| `CapacityRqmtHasNotToBeCreated` |  | |  |  |  |  |
| `OrderSequenceNumber` |  | |  |  |  |  |
| `BillOfOperationsMaterial` |  | |  | `Material` |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `BOOInternalVersionCounter` |  | |  |  |  |  |
| `BillOfOperationsApplication` |  | |  |  |  |  |
| `BillOfOperationsUsage` |  | |  |  |  |  |
| `BillOfOperationsVersion` |  | |  |  |  |  |
| `BOOExplosionDate` |  | |  |  |  |  |
| `BOOValidityStartDate` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterialInternalID` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
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
| `ControllingObjectClass` |  | |  | `cast(head.ControllingObjectClass as pph_scope preserving type)` |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `OverheadCode` |  | |  |  |  |  |
| `ResultAnalysisInternalID` |  | |  |  |  |  |
| `VarianceKey` |  | |  |  |  |  |
| `EventBasedPostingMethod` |  | |  |  |  |  |
| `EventBasedProcessingKey` |  | |  |  |  |  |
| `SchedulingFloatProfile` |  | |  |  |  |  |
| `FloatBeforeProductionInWrkDays` |  | |  |  |  |  |
| `FloatAfterProductionInWorkDays` |  | |  |  |  |  |
| `ReleasePeriodInWorkDays` |  | |  |  |  |  |
| `ChangeToScheduledDatesIsMade` |  | |  |  |  |  |
| `OrderPlannedStartDate` |  | |  | `cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)` |  |  |
| `OrderPlannedStartTime` |  | |  | `cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)` |  |  |
| `OrderPlannedEndDate` |  | |  | `cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)` |  |  |
| `OrderPlannedEndTime` |  | |  | `cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)` |  |  |
| `OrderPlannedReleaseDate` |  | |  | `cast(head.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)` |  |  |
| `OrderScheduledStartDate` |  | |  | `cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type)` |  |  |
| `OrderScheduledStartTime` |  | |  | `cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type)` |  |  |
| `OrderScheduledEndDate` |  | |  | `cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)` |  |  |
| `OrderScheduledEndTime` |  | |  | `cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)` |  |  |
| `OrderScheduledReleaseDate` |  | |  | `cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)` |  |  |
| `OrderActualStartDate` |  | |  | `cast(head.ActualStartDate as mfgorderactualstartdate preserving type)` |  |  |
| `OrderActualStartTime` |  | |  | `cast(head.ActualStartTime as mfgorderactualstarttime preserving type)` |  |  |
| `OrderConfirmedEndDate` |  | |  | `cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)` |  |  |
| `OrderConfirmedEndTime` |  | |  | `cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)` |  |  |
| `OrderActualEndDate` |  | |  | `cast(head.ActualEndDate as mfgorderactualenddate preserving type)` |  |  |
| `OrderActualReleaseDate` |  | |  | `cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)` |  |  |
| `OrderActualCompletionDate` |  | |  | `TechnicalCompletionDate` |  |  |
| `ProductionUnit` |  | |  | `cast(head.BaseUnit as productionunit preserving type)` |  |  |
| `OrderPlannedTotalQty` |  | |  | `cast(head.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type)` |  |  |
| `OrderPlannedScrapQty` |  | |  | `cast(head.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type)` |  |  |
| `OrderConfirmedYieldQty` |  | |  | `cast(head.OrderConfirmedYieldQty as co_igmng preserving type)` |  |  |
| `OrderConfirmedScrapQty` |  | |  | `cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)` |  |  |
| `OrderConfirmedReworkQty` |  | |  | `MfgOrderConfirmedReworkQty` |  |  |
| `_ProductionOrderType` | | ✓ | | | | |
| `_ProductionOrderInternal` | | ✓ | | | | |
| `_LongTextLanguage` | | ✓ | | | | |
| `_ProductionUnit` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ProductionPlant` | | ✓ | | | | |
| `_ChangeNumber` | | ✓ | | | | |
| `_MaterialRevisionLevel` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CostElement` | | ✓ | | | | |
| `_ActualCostsCostingVariant` | | ✓ | | | | |
| `_PlannedCostsCostingVariant` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_ProductionSchedulingProfile` | | ✓ | | | | |
| `_ResponsiblePlannerGroup` | | ✓ | | | | |
| `_BillOfOperationsMaterial` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_ReferenceOrderText` | | ✓ | | | | |
| `_LeadingOrderText` | | ✓ | | | | |
| `_SuperiorOrderText` | | ✓ | | | | |
| `_InspectionLotText` | | ✓ | | | | |
| `_BillOfOperationsMaterialText` | | ✓ | | | | |
| `_StatusObjectText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_FunctionalAreaText` | | ✓ | | | | |
| `_ProductCostCollectorText` | | ✓ | | | | |
| `_ReferenceOrder` | | ✓ | | | | |
| `_LeadingOrder` | | ✓ | | | | |
| `_ProductionOrderItem` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionOrderDocumentLink` | | ✓ | | | | |
| `_ProductionOrderLongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_ProductionOrderInternal` | `I_ProductionOrderInternalID` | [1..1] |
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_MaterialRevisionLevel` | `I_ChangeMstrObjTypeRevisionLvl` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_CostElement` | `I_CostElement` | [0..1] |
| `_ActualCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_PlannedCostsCostingVariant` | `I_CostingVariant` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionSchedulingProfile` | `I_ProductionSchedulingProfile` | [0..1] |
| `_ResponsiblePlannerGroup` | `I_ResponsiblePlannerGroup` | [0..1] |
| `_BillOfOperationsMaterial` | `I_Product` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperations` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsChangeState` | `I_MfgBillOfOperationsChgSt` | [0..1] |
| `_Extension` | `E_LogisticsOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_ReferenceOrderText` | `I_ProductionOrder` | [0..1] |
| `_LeadingOrderText` | `I_ProductionOrder` | [0..1] |
| `_SuperiorOrderText` | `I_ProductionOrder` | [0..1] |
| `_InspectionLotText` | `I_InspectionLot` | [0..1] |
| `_BillOfOperationsMaterialText` | `I_ProductText` | [0..*] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |
| `_ProductCostCollectorText` | `I_ProductCostCtrlgOrder` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_MRPController', '_ProductionSupervisor', '_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                         table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        }
                                        ] } }
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IPRODNORDER'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ProductionOrder'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Order Header'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ProductionOrder
  as select from I_LogisticsOrder as head

  association [1..1] to I_ProductionOrderType          as _ProductionOrderType         on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [1..1] to I_ProductionOrderInternalID    as _ProductionOrderInternal     on  $projection.ProductionOrderInternalID = _ProductionOrderInternal.ProductionOrderInternalID
  association [0..1] to I_Language                     as _LongTextLanguage            on  $projection.LongTextLanguage = _LongTextLanguage.Language
  association [1..1] to I_UnitOfMeasure                as _ProductionUnit              on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [1..1] to I_User                         as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser           on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Plant                        as _ProductionPlant             on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_ChangeMstrObjTypeRevisionLvl as _MaterialRevisionLevel       on  $projection.MaterialRevisionLevel = _MaterialRevisionLevel.RevisionLevel
                                                                                       and _MaterialRevisionLevel.ChangeNumberObjectType = '41' 
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
--association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_Product                      as _BillOfOperationsMaterial    on  $projection.BillOfOperationsMaterial = _BillOfOperationsMaterial.Product
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_MfgBillOfOperations          as _BillOfOperations            on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsChgSt     as _BillOfOperationsChangeState on $projection.BillOfOperationsType       = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup     = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant   = _BillOfOperationsChangeState.BillOfOperationsVariant
                                                                                       and $projection.BOOInternalVersionCounter = _BillOfOperationsChangeState.BOOInternalVersionCounter
  -- to extension
  association [1..1] to E_LogisticsOrder               as _Extension                   on  $projection.ProductionOrder = _Extension.OrderID

  -- SOT relations to children
  composition [1..*] of I_ProductionOrderItem         as _ProductionOrderItem
  composition [1..*] of I_ProductionOrderSequence     as _ProductionOrderSequence
  composition [0..*] of I_ProductionOrderDocumentLink as _ProductionOrderDocumentLink
  composition [0..*] of I_ProductionOrderLongText     as _ProductionOrderLongText

  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                       as _ProductionPlantText          on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_ProductionOrder             as _ReferenceOrderText           on  $projection.ReferenceOrder = _ReferenceOrderText.ProductionOrder 
  association [0..1] to I_ProductionOrder             as _LeadingOrderText             on  $projection.LeadingOrder   = _LeadingOrderText.ProductionOrder 
  association [0..1] to I_ProductionOrder             as _SuperiorOrderText            on  $projection.SuperiorOrder  = _SuperiorOrderText.ProductionOrder 
  association [0..1] to I_InspectionLot               as _InspectionLotText            on  $projection.InspectionLot = _InspectionLotText.InspectionLot
  association [0..*] to I_ProductText                 as _BillOfOperationsMaterialText on  $projection.BillOfOperationsMaterial = _BillOfOperationsMaterialText.Product
  association [1..1] to I_StatusObject                as _StatusObjectText             on  $projection.ObjectInternalID = _StatusObjectText.StatusObject
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText             on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText              on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea             as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea                                                                                     
  association [0..*] to I_FunctionalAreaText          as _FunctionalAreaText           on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
  association [0..1] to I_ProductCostCtrlgOrder       as _ProductCostCollectorText     on  $projection.ProductCostCollector = _ProductCostCollectorText.OrderID 
  -- end new associations for full coverage of text relations

{
      // Key
      @ObjectModel.text.element: ['ProductionOrderText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9}
  key cast(head.OrderID as vdm_manufacturingorder preserving type)     as ProductionOrder,

      // Text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(head.OrderDescription as vdm_prodnordertext preserving type) as ProductionOrderText,
      @Semantics.booleanIndicator:true
      head.OrderHasLongText                                             as ProductionOrderHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      head.LongTextLanguage,

      // Category and Type
      @Consumption.hidden: true
      OrderCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(head.OrderType as vdm_prodnordertype preserving type)     as ProductionOrderType,

      // Attributes
      cast(head.PriorityCode as orderimportancecode preserving type) as OrderImportance,
      @Semantics.booleanIndicator: true
      head.IsMarkedForDeletion,
      @Semantics.booleanIndicator:true
      head.MfgOrderHasMultipleItems                                  as OrderHasMultipleItems,
      @Semantics.booleanIndicator:true
      head.MfgOrderIsPartOfCollvOrder                                as OrderIsPartOfCollectiveOrder,
      head.OrderHierarchyLevelValue,
      head.OrderHierarchyPathValue,
      @Semantics.booleanIndicator:true
      head.OrderIsNotCostedAutomatically,
      @Semantics.booleanIndicator:true
      head.OrdIsNotSchedldAutomatically,
      @Semantics.booleanIndicator: true
      head.ProdnProcgIsFlexible,

      // Admin data
      @Semantics.systemDate.createdAt: true
      cast(head.CreationDate as ordercreationdate preserving type) as CreationDate,
      @Semantics.systemTime.createdAt: true
      cast(head.CreationTime as ordercreationtime preserving type) as CreationTime,
      @Semantics.user.createdBy: true
      head.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      head.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      head.LastChangeTime,
      @Semantics.user.lastChangedBy: true
      head.LastChangedByUser,

      // Assignments
      @ObjectModel.foreignKey.association: '_ProductionOrderInternal'
      cast(head.OrderInternalBillOfOperations as pph_aufpl preserving type) as ProductionOrderInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ReferenceOrder'
      head.ReferenceOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_LeadingOrder'
      head.LeadingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
--    @ObjectModel.foreignKey.association: '_SuperiorOrder'
      head.MfgOrderSuperiorMfgOrder                                         as SuperiorOrder,
      @ObjectModel.foreignKey.association: '_Currency'
      head.Currency,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(head.Plant as pwwrk preserving type)                             as ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(head.MRPController               as pph_dispo   preserving type) as MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(head.ProductionSupervisor        as pph_fevor   preserving type) as ProductionSupervisor,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSchedgProfileVH', element: 'ProductionSchedulingProfile' } } ]
      @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
      cast(head.ProductionSchedulingProfile as pph_prodprf preserving type) as ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      head.ResponsiblePlannerGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      head.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]  
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      head.SalesOrderItem,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]  
--    @ObjectModel.foreignKey.association: '_WBSElementBasicData'
--    head.WBSElementInternalID_2                                           as WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_Reservation'
      head.Reservation,
      @ObjectModel.foreignKey.association: '_SettlementReservation'    
      cast(head.SettlementReservation  as settlmntres preserving type)     as SettlementReservation,
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
      head.MfgOrderConfirmation                                            as OrderConfirmationGroup,
      cast(head.MfgOrderConfirmationCount as pph_noofconf preserving type) as NumberOfOrderConfirmations,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      head.CapacityRequirement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspectionLotStdVH', element: 'InspectionLot' } } ]
      @ObjectModel.foreignKey.association: '_InspectionLot'
      head.InspectionLot,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      head.ChangeNumber,
      head.MaterialRevisionLevel_2                                           as MaterialRevisionLevel,
      @ObjectModel.foreignKey.association: '_BasicSchedulingType'
      cast(head.BasicSchedulingType    as basicschedtype preserving type)    as BasicSchedulingType,
      @ObjectModel.foreignKey.association: '_ForecastSchedulingType'
      cast(head.ForecastSchedulingType as forecastschedtype preserving type) as ForecastSchedulingType,
      head.SchedulingIsAllowingForBreaks,
      @ObjectModel.foreignKey.association: '_StatusObject'
      cast(head.ObjectInternalID       as pph_objnr preserving type)         as ObjectInternalID,
      head.ConditionApplication,
      head.CapacityActiveVersion,
      head.CapacityRqmtHasNotToBeCreated,
      head.OrderSequenceNumber,

      // Assignments BOO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsMaterial'
      @ObjectModel.text.association: '_BillOfOperationsMaterialText'
      head.Material                                                           as BillOfOperationsMaterial,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      head.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'     
      head.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
      head.BillOfOperationsVariant,  
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBOOChgStateStdVH', element: 'BOOInternalVersionCounter' } } ]
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
      head.BillOfMaterialInternalID,
      head.BillOfMaterialVariant,
      head.BillOfMaterialVariantUsage,
--    head.BillOfMaterialVersion,
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
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductCostCtrlgOrderStdVH', element: 'OrderID' } } ]  
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
      head.EventBasedPostingMethod,
      head.EventBasedProcessingKey,

      // Floats
      @ObjectModel.foreignKey.association: '_SchedulingFloatProfile'
      head.SchedulingFloatProfile,
      head.FloatBeforeProductionInWrkDays,
      head.FloatAfterProductionInWorkDays,
      head.ReleasePeriodInWorkDays,

      // Dates and Times
      head.ChangeToScheduledDatesIsMade,
      -- planned/basic dates
      cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)          as OrderPlannedStartDate,
      cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)          as OrderPlannedStartTime,
      cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)              as OrderPlannedEndDate,
      cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)              as OrderPlannedEndTime,
      cast(head.PlannedReleaseDate as mfgorderplannedreleasedate preserving type)      as OrderPlannedReleaseDate,
      -- scheduled dates
      cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type) as OrderScheduledStartDate,
      cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type) as OrderScheduledStartTime,
      cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)     as OrderScheduledEndDate,
      cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)     as OrderScheduledEndTime,
      cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)  as OrderScheduledReleaseDate,
      -- confirmed/actual dates      
      cast(head.ActualStartDate as mfgorderactualstartdate preserving type)            as OrderActualStartDate,
      cast(head.ActualStartTime as mfgorderactualstarttime preserving type)            as OrderActualStartTime,
      cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)          as OrderConfirmedEndDate,
      cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)          as OrderConfirmedEndTime,
      cast(head.ActualEndDate as mfgorderactualenddate preserving type)                as OrderActualEndDate,
      cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)       as OrderActualReleaseDate,
      -- other dates
      head.TechnicalCompletionDate                                                     as OrderActualCompletionDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      cast(head.BaseUnit as productionunit preserving type)                      as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedTotalQty as mfgorderplannedtotalqty preserving type) as OrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedScrapQty as mfgorderplannedscrapqty preserving type) as OrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedYieldQty as co_igmng preserving type)              as OrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)              as OrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      head.MfgOrderConfirmedReworkQty                                            as OrderConfirmedReworkQty,
      
      // Associations
      _ProductionOrderType,
      _ProductionOrderInternal,
      head._OrderTypeDetails,
      _CreatedByUser,
      _LastChangedByUser,
      _LongTextLanguage,
      _ProductionUnit,
      head._Currency,
      _ReferenceOrder,
      _LeadingOrder,
      head._BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BillOfOperationsChangeState,
      _BillOfOperationsMaterial,
      head._BillOfOperationsApplication,
      head._BillOfOperationsUsage,
      head._ConfirmationGroup,
      head._Reservation,
      head._SettlementReservation,
      _ProductionPlant,
      _MRPController,
      _ProductionSupervisor,
      _ProductionSchedulingProfile,
      _ResponsiblePlannerGroup,
      head._SalesOrder,
      head._SalesOrderItem,
--    _WBSElementBasicData,
      head._CapacityRequirement,
      _ChangeNumber,
      _StatusObject,
      _MaterialRevisionLevel,
      head._InspectionLot,
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

      -- SOT relations
      _ProductionOrderItem,
      _ProductionOrderSequence,
      _ProductionOrderDocumentLink,
      _ProductionOrderLongText,

      -- New text relations
      _ProductionPlantText,
      _ReferenceOrderText,
      _LeadingOrderText,
      _SuperiorOrderText,
      _InspectionLotText,
      _BillOfOperationsMaterialText,
      _StatusObjectText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText,
      _ProductCostCollectorText 

}
where head.OrderCategory = '10';
```
