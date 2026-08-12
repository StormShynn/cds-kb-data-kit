---
name: I_PRODUCTIONORDERCONFIRMATION
description: "Production OrderCONFIRMATION"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PRODUCTIONORDERCONFIRMATION

**Production OrderCONFIRMATION**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderConfirmationGroup` | ✓ | |  | `ConfirmationGroup` |  |  |
| `OrderConfirmation` | ✓ | |  | `cast(conf.OrderConfirmation as vdm_prodnorderconf preserving type)` |  |  |
| `ProductionOrder` |  | |  | `cast(conf.OrderID as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderSequence` |  | |  | `cast(conf.Sequence as vdm_prodnordersequence preserving type)` |  |  |
| `ProductionOrderOperation` |  | |  | `cast(conf.OrderOperation_2 as vdm_prodnorderoperation preserving type)` |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  | `cast(conf.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  |  |  |  |
| `SuperiorOperationInternalID` |  | |  |  |  |  |
| `ConfirmationText` |  | |  |  |  |  |
| `LongTextLanguage` |  | |  | `Language` |  |  |
| `LongTextExists` |  | |  |  |  |  |
| `ConfirmationEntryDate` |  | |  |  |  |  |
| `ConfirmationEntryTime` |  | |  |  |  |  |
| `EnteredByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ConfirmationExternalEntryDate` |  | |  |  |  |  |
| `ConfirmationExternalEntryTime` |  | |  |  |  |  |
| `EnteredByExternalUser` |  | |  |  |  |  |
| `FinalConfirmationType` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `ConfirmationIsReversed` |  | |  | `IsReversed` |  |  |
| `CancelledOrderConfirmation` |  | |  | `CancldMfgOrderConfCount` |  |  |
| `APIConfHasNoGoodsMovements` |  | |  |  |  |  |
| `ConfirmationApplicationOrigin` |  | |  |  |  |  |
| `OrderConfirmationType` |  | |  |  |  |  |
| `OrderConfirmationRecordType` |  | |  |  |  |  |
| `MilestoneConfirmationType` |  | |  |  |  |  |
| `IsConfirmedByMilestoneConf` |  | |  |  |  |  |
| `MilestoneConfirmationGroup` |  | |  |  |  |  |
| `MilestoneConfirmation` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenterType` |  | |  | `WorkCenterTypeCode` |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityRequirementSplit` |  | |  |  |  |  |
| `ShiftGrouping` |  | |  |  |  |  |
| `ShiftDefinition` |  | |  |  |  |  |
| `FailedGoodsMovement` |  | |  |  |  |  |
| `PlantDataCollectionID` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `SenderCostCenter` |  | |  |  |  |  |
| `HCMEmployeeAssignment` |  | |  | `Personnel` |  |  |
| `TimeRecording` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PostingDateYear` |  | |  |  |  |  |
| `ConfirmedExecutionStartDate` |  | |  |  |  |  |
| `ConfirmedExecutionStartTime` |  | |  |  |  |  |
| `ConfirmedSetupEndDate` |  | |  |  |  |  |
| `ConfirmedSetupEndTime` |  | |  |  |  |  |
| `ConfirmedProcessingStartDate` |  | |  |  |  |  |
| `ConfirmedProcessingStartTime` |  | |  |  |  |  |
| `ConfirmedProcessingEndDate` |  | |  |  |  |  |
| `ConfirmedProcessingEndTime` |  | |  |  |  |  |
| `ConfirmedTeardownStartDate` |  | |  |  |  |  |
| `ConfirmedTeardownStartTime` |  | |  |  |  |  |
| `ConfirmedExecutionEndDate` |  | |  |  |  |  |
| `ConfirmedExecutionEndTime` |  | |  |  |  |  |
| `ConfirmationUnit` |  | |  |  |  |  |
| `ConfirmationYieldQuantity` |  | |  |  |  |  |
| `ConfirmationScrapQuantity` |  | |  |  |  |  |
| `ConfirmationReworkQuantity` |  | |  |  |  |  |
| `ConfirmationTotalQuantity` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `ProductionUnit` |  | |  | `cast(OrderQuantityUnit as productionunit preserving type)` |  |  |
| `ConfYieldQtyInProductionUnit` |  | |  | `cast(ConfirmedYieldQtyInOrderUnit as ru_gmnga preserving type)` |  |  |
| `OperationUnit` |  | |  |  |  |  |
| `OpPlannedTotalQuantity` |  | |  |  |  |  |
| `OpWorkQuantityUnit1` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity1` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity1IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit2` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity2` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity2IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit3` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity3` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity3IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit4` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity4` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity4IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit5` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity5` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity5IsExpd` |  | |  |  |  |  |
| `OpWorkQuantityUnit6` |  | |  |  |  |  |
| `OpConfirmedWorkQuantity6` |  | |  |  |  |  |
| `NoFurtherOpWorkQuantity6IsExpd` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `BusinessProcessEntryUnit` |  | |  |  |  |  |
| `BusinessProcessConfirmedQty` |  | |  |  |  |  |
| `NoFurtherBusinessProcQtyIsExpd` |  | |  |  |  |  |
| `BusinessProcRemainingQtyUnit` |  | |  |  |  |  |
| `BusinessProcessRemainingQty` |  | |  |  |  |  |
| `BreakDurationUnit` |  | |  |  |  |  |
| `ConfirmedBreakDuration` |  | |  |  |  |  |
| `_LongTextLanguage` |  | |  | `_Language` |  |  |
| `_ProductionOrder` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionOrderOperation` | | ✓ | | | | |
| `_ProductionOrderType` | | ✓ | | | | |
| `_ProductionUnit` | | ✓ | | | | |
| `_RmngBusinessProcessUnit` | | ✓ | | | | |
| `_EnteredByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_WorkCenterInternal` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_MaterialDocumentItem` | | ✓ | | | | |
| `_FailedGoodsMovement` | | ✓ | | | | |
| `_FailedGoodsMovementItem` | | ✓ | | | | |
| `_FailedActualCost` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_ProductionOrderText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrder` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [0..1] |
| `_ProductionOrderOperation` | `I_ProductionOrderOperation_2` | [0..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_RmngBusinessProcessUnit` | `I_UnitOfMeasure` | [1..1] |
| `_EnteredByUser` | `I_User` | [1..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_WorkCenterInternal` | `I_WorkCenter` | [0..1] |
| `_WorkCenter` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_MaterialDocumentItem` | `I_MfgOrderConfMatlDocItem` | [0..*] |
| `_FailedGoodsMovement` | `I_FailedGoodsMovement` | [0..1] |
| `_FailedGoodsMovementItem` | `I_FailedGoodsMovementItem` | [0..*] |
| `_FailedActualCost` | `I_ConfFailedActualCostCalc` | [0..*] |
| `_Extension` | `E_OrderConfirmation` | [0..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_EnteredByUser', '_ChangedByUser']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afru',
                                          tableElement: ['rueck'                 , 'rmzhl'],
                                          viewElement:  ['OrderConfirmationGroup', 'OrderConfirmation']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvv',
                                          tableElement: ['aufpl'          , 'aplzl'],
                                          viewElement:  ['OrderInternalID', 'OrderOperationInternalID']
                                        } ] } }
@Analytics.technicalName: 'IPRODNORDERCONF'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderConfirmation'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Confirmation'

define view entity I_ProductionOrderConfirmation
    as select from I_OrderConfirmation as conf

    association [1..1] to I_ProductionOrder            as _ProductionOrder          on  $projection.ProductionOrder = _ProductionOrder.ProductionOrder
    association [0..1] to I_ProductionOrderSequence    as _ProductionOrderSequence  on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                    and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
    association [0..1] to I_ProductionOrderOperation_2 as _ProductionOrderOperation on  $projection.OrderInternalID          = _ProductionOrderOperation.OrderInternalID
                                                                                    and $projection.OrderOperationInternalID = _ProductionOrderOperation.OrderOperationInternalID
    association [1..1] to I_ProductionOrderType        as _ProductionOrderType      on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
    association [1..1] to I_UnitOfMeasure              as _ProductionUnit           on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
    association [1..1] to I_UnitOfMeasure              as _RmngBusinessProcessUnit  on  $projection.BusinessProcRemainingQtyUnit = _RmngBusinessProcessUnit.UnitOfMeasure
    association [1..1] to I_User                       as _EnteredByUser            on  $projection.EnteredByUser = _EnteredByUser.UserID
    association [0..1] to I_User                       as _ChangedByUser            on  $projection.LastChangedByUser = _ChangedByUser.UserID
    association [0..1] to I_WorkCenter                 as _WorkCenterInternal       on  $projection.WorkCenterType       = _WorkCenterInternal.WorkCenterTypeCode
                                                                                    and $projection.WorkCenterInternalID = _WorkCenterInternal.WorkCenterInternalID
    association [0..1] to I_WorkCenterBySemanticKey    as _WorkCenter               on  $projection.Plant      = _WorkCenter.Plant
                                                                                    and $projection.workcenter = _WorkCenter.WorkCenter
    association [0..*] to I_MfgOrderConfMatlDocItem    as _MaterialDocumentItem     on  $projection.OrderConfirmationGroup = _MaterialDocumentItem.MfgOrderConfirmationGroup
                                                                                    and $projection.OrderConfirmation      = _MaterialDocumentItem.MfgOrderConfirmation
    association [0..1] to I_FailedGoodsMovement        as _FailedGoodsMovement      on  $projection.FailedGoodsMovement    = _FailedGoodsMovement.FailedGoodsMovement
    association [0..*] to I_FailedGoodsMovementItem    as _FailedGoodsMovementItem  on  $projection.OrderConfirmationGroup = _FailedGoodsMovementItem.ConfirmationGroup
                                                                                    and $projection.OrderConfirmation      = _FailedGoodsMovementItem.ConfirmationCount
    association [0..*] to I_ConfFailedActualCostCalc   as _FailedActualCost         on  $projection.OrderConfirmationGroup = _FailedActualCost.ConfirmationGroup
                                                                                    and $projection.OrderConfirmation      = _FailedActualCost.OrderConfirmation
--  To child 
--  composition [0..*] of I_ProductionOrderConfLongText as _LongText     
  
--  To extension
    association [0..1] to E_OrderConfirmation           as _Extension               on  $projection.OrderConfirmationGroup      = _Extension.ConfirmationGroup
                                                                                    and $projection.OrderConfirmation = _Extension.ConfirmationCount
    -- start new associations for full coverage of text relations
    association [1..1] to I_Plant                       as _PlantText               on  $projection.Plant = _PlantText.Plant
    association [1..1] to I_ProductionOrder             as _ProductionOrderText     on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
    association [0..*] to I_WorkCenterText              as _WorkCenterText          on  $projection.WorkCenterInternalID = _WorkCenterText.WorkCenterInternalID
                                                                                    and $projection.WorkCenterType       = _WorkCenterText.WorkCenterTypeCode
    association [0..*] to I_BusinessAreaText            as _BusinessAreaText        on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
    association [0..1] to I_CompanyCode                 as _CompanyCodeText         on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
    association [0..1] to I_ControllingArea             as _ControllingAreaText     on  $projection.ControllingArea = _ControllingAreaText.ControllingArea      
    -- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
  key conf.ConfirmationGroup                                                 as OrderConfirmationGroup,
      @ObjectModel.text.element: ['ConfirmationText']
  key cast(conf.OrderConfirmation as vdm_prodnorderconf preserving type)     as OrderConfirmation,

      // Order and Operation Data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      cast(conf.OrderID as vdm_manufacturingorder preserving type)           as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(conf.Sequence as vdm_prodnordersequence preserving type)          as ProductionOrderSequence,
     @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
      cast(conf.OrderOperation_2 as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
      @Consumption.hidden: true
      conf.OrderCategory,
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(conf.OrderType as vdm_prodnordertype preserving type)             as ProductionOrderType,

      // Internal Keys
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      conf.OrderInternalID,
      conf.OrderOperationInternalID,
      conf.SuperiorOperationInternalID,

      // Text
      @Semantics.text: true
      conf.ConfirmationText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      conf.Language                                                          as LongTextLanguage,
      @Semantics.booleanIndicator: true
      conf.LongTextExists,

      // Admin
      @Semantics.systemDate.createdAt: true
      conf.ConfirmationEntryDate,
      @Semantics.systemTime.createdAt: true
      conf.ConfirmationEntryTime,
      @Semantics.user.createdBy: true
      conf.EnteredByUser,
      @Semantics.systemDate.lastChangedAt: true
      conf.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      conf.LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      conf.ConfirmationExternalEntryDate,
      @Semantics.systemTime.createdAt: true
      conf.ConfirmationExternalEntryTime,
      conf.EnteredByExternalUser,
--    conf.ExternalSystemConfirmation,

      // Attributes
      @ObjectModel.foreignKey.association: '_FinalConfirmationType'
      conf.FinalConfirmationType,
      @Semantics.booleanIndicator: true
      conf.OpenReservationsIsCleared,
      @Semantics.booleanIndicator: true
      conf.IsReversed                                                        as ConfirmationIsReversed,
      conf.CancldMfgOrderConfCount                                           as CancelledOrderConfirmation,
      @Semantics.booleanIndicator: true
      conf.APIConfHasNoGoodsMovements,
      @ObjectModel.foreignKey.association: '_ConfirmationApplOrigin'
      conf.ConfirmationApplicationOrigin,
      @ObjectModel.foreignKey.association: '_ConfirmationType'
      conf.OrderConfirmationType,
      @ObjectModel.foreignKey.association: '_ConfirmationRecordType'
      conf.OrderConfirmationRecordType,

      // Milestone
      conf.MilestoneConfirmationType,
      conf.IsConfirmedByMilestoneConf,
      @ObjectModel.foreignKey.association: '_MilestoneConfirmationGroup'
      conf.MilestoneConfirmationGroup,
      @ObjectModel.foreignKey.association: '_MilestoneConfirmation'
      conf.MilestoneConfirmation,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      conf.Plant,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      conf.WorkCenterTypeCode as WorkCenterType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenterInternal'
      @ObjectModel.text.association: '_WorkCenterText'
      conf.WorkCenterInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WrkCtrBySemanticKeyStdVH', element: 'WorkCenter' } } ] 
      @ObjectModel.foreignKey.association: '_WorkCenter'
      conf._WorkCenter.WorkCenter,  
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      conf.CapacityInternalID,
      conf.CapacityRequirementSplit,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
      conf.ShiftGrouping,
--    @ObjectModel.foreignKey.association: '_ShiftDefinition'
      conf.ShiftDefinition,
      @ObjectModel.foreignKey.association: '_FailedGoodsMovement'
      conf.FailedGoodsMovement,
      conf.PlantDataCollectionID,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      conf.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      conf.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      conf.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      conf.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]     
      conf.SenderCostCenter,

      // Assignments HR
      conf.Personnel as HCMEmployeeAssignment,
      conf.TimeRecording,
      conf.NumberOfEmployees,

      // Dates
      @ObjectModel.foreignKey.association: '_PostingDate'
      @Semantics.businessDate.at: true
      conf.PostingDate,
      @ObjectModel.foreignKey.association: '_PostingDateYear'
      conf.PostingDateYear,

      // Time Events
      conf.ConfirmedExecutionStartDate,
      conf.ConfirmedExecutionStartTime,
      conf.ConfirmedSetupEndDate,
      conf.ConfirmedSetupEndTime,
      conf.ConfirmedProcessingStartDate,
      conf.ConfirmedProcessingStartTime,
      conf.ConfirmedProcessingEndDate,
      conf.ConfirmedProcessingEndTime,
      conf.ConfirmedTeardownStartDate,
      conf.ConfirmedTeardownStartTime,
      conf.ConfirmedExecutionEndDate,
      conf.ConfirmedExecutionEndTime,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmationUnit'
      conf.ConfirmationUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      conf.ConfirmationYieldQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      conf.ConfirmationScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      conf.ConfirmationReworkQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'
      @Aggregation.default: #SUM
      conf.ConfirmationTotalQuantity,
      @ObjectModel.foreignKey.association: '_VarianceReason'
      conf.VarianceReasonCode,

      @ObjectModel.foreignKey.association: '_ProductionUnit'
      cast(OrderQuantityUnit as productionunit preserving type)      as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(ConfirmedYieldQtyInOrderUnit as ru_gmnga preserving type) as ConfYieldQtyInProductionUnit,

      @ObjectModel.foreignKey.association: '_OperationUnit'
      conf.OperationUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      conf.OpPlannedTotalQuantity,

      // Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit1'
      conf.OpWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity1,
      conf.NoFurtherOpWorkQuantity1IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit2'
      conf.OpWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity2,
      conf.NoFurtherOpWorkQuantity2IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit3'
      conf.OpWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity3,
      conf.NoFurtherOpWorkQuantity3IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit4'
      conf.OpWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity4,
      conf.NoFurtherOpWorkQuantity4IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit5'
      conf.OpWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity5,
      conf.NoFurtherOpWorkQuantity5IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit6'
      conf.OpWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity6,
      conf.NoFurtherOpWorkQuantity6IsExpd,

      // Business Process
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      conf.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessProcessUnit'
      conf.BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      @Aggregation.default: #SUM
      conf.BusinessProcessConfirmedQty,
      conf.NoFurtherBusinessProcQtyIsExpd,
      @ObjectModel.foreignKey.association: '_RmngBusinessProcessUnit'
      conf.BusinessProcRemainingQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcRemainingQtyUnit'
      @Aggregation.default: #SUM
      conf.BusinessProcessRemainingQty,

      // Durations
      @ObjectModel.foreignKey.association: '_BreakDurationUnit'
      conf.BreakDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'BreakDurationUnit'
      @Aggregation.default: #SUM
      conf.ConfirmedBreakDuration,

      // Associations
      _ProductionOrder,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _ProductionOrderType,
      conf._ConfirmationGroup,
      _MaterialDocumentItem,
      _FailedActualCost,
      _FailedGoodsMovementItem,
      @Consumption.hidden: true
      conf._OrderInternalID,
      _ProductionUnit,
      conf._ConfirmationUnit,
      conf._OperationUnit,
      conf._FinalConfirmationType,
      conf._ConfirmationType,
      conf._ConfirmationRecordType,
      conf._ConfirmationApplOrigin,
      conf._MilestoneConfirmationGroup,
      conf._MilestoneConfirmation,
      conf._Language as _LongTextLanguage,
      conf._WorkCenterType,
      _WorkCenterInternal,
      _WorkCenter,
      conf._Plant,
      conf._Capacity,
      conf._ShiftGrouping,
      conf._ShiftDefinition,
      conf._BusinessArea,
      conf._CompanyCode,
      conf._ControllingArea,
      conf._BusinessProcess,
      conf._BusinessProcessUnit,
      _RmngBusinessProcessUnit,
      conf._WorkQuantityUnit1,
      conf._WorkQuantityUnit2,
      conf._WorkQuantityUnit3,
      conf._WorkQuantityUnit4,
      conf._WorkQuantityUnit5,
      conf._WorkQuantityUnit6,
      conf._BreakDurationUnit,
      conf._VarianceReason,
      _EnteredByUser,
      _ChangedByUser,
      _FailedGoodsMovement,
      conf._PostingDate,
      conf._PostingDateYear,
      
      // Text relations
      _ProductionOrderText,
      _PlantText,
      _WorkCenterText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText
}
where ( conf.ConfirmationApplicationOrigin = '2' or //Production orders only
        conf.ConfirmationApplicationOrigin = '8' ); //including results recording
```
