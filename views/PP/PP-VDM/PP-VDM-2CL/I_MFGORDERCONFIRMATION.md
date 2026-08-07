---
name: I_MFGORDERCONFIRMATION
description: "Mfgorderconfirmation"
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
# I_MFGORDERCONFIRMATION

**Mfgorderconfirmation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MfgOrderConfirmationGroup` | ✓ | |  | `ConfirmationGroup` |  |  |
| `MfgOrderConfirmation` | ✓ | |  | `OrderConfirmation` |  |  |
| `ManufacturingOrder` |  | |  | `cast(conf.OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderSequence` |  | |  | `cast(conf.Sequence as manufacturingordersequence preserving type)` |  |  |
| `ManufacturingOrderOperation` |  | |  | `cast(conf.OrderOperation as co_vornr preserving type)` |  |  |
| `ManufacturingOrderOperation_2` |  | |  | `OrderOperation_2` |  |  |
| `ManufacturingOrderCategory` |  | |  | `cast(conf.OrderCategory as manufacturingordercategory preserving type)` |  |  |
| `ManufacturingOrderType` |  | |  | `cast(conf.OrderType as manufacturingordertype preserving type)` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  |  |  |  |
| `SuperiorOperationInternalID` |  | |  |  |  |  |
| `ConfirmationText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `LongTextExists` |  | |  |  |  |  |
| `MfgOrderConfirmationEntryDate` |  | |  | `ConfirmationEntryDate` |  |  |
| `MfgOrderConfirmationEntryTime` |  | |  | `ConfirmationEntryTime` |  |  |
| `EnteredByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ConfirmationExternalEntryDate` |  | |  |  |  |  |
| `ConfirmationExternalEntryTime` |  | |  |  |  |  |
| `EnteredByExternalUser` |  | |  |  |  |  |
| `ExternalSystemConfirmation` |  | |  |  |  |  |
| `FinalConfirmationType` |  | |  |  |  |  |
| `IsFinalConfirmation` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `CancldMfgOrderConfCount` |  | |  |  |  |  |
| `APIConfHasNoGoodsMovements` |  | |  |  |  |  |
| `ConfirmationApplicationOrigin` |  | |  |  |  |  |
| `OrderConfirmationType` |  | |  |  |  |  |
| `OrderConfirmationRecordType` |  | |  |  |  |  |
| `MilestoneIsConfirmed` |  | |  |  |  |  |
| `MilestoneConfirmationType` |  | |  |  |  |  |
| `IsConfirmedByMilestoneConf` |  | |  |  |  |  |
| `MilestoneConfirmationGroup` |  | |  |  |  |  |
| `MilestoneConfirmation` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityRequirementSplit` |  | |  |  |  |  |
| `ShiftGrouping` |  | |  |  |  |  |
| `ShiftDefinition` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `FailedGoodsMovement` |  | |  |  |  |  |
| `PlantDataCollectionID` |  | |  |  |  |  |
| `OriginalBatch` |  | |  |  |  |  |
| `BatchBySupplier` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `SenderCostCenter` |  | |  |  |  |  |
| `ProductCostCollector` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `TimeRecording` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
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
| `ActualForecastEndDate` |  | |  |  |  |  |
| `ActualForecastEndTime` |  | |  |  |  |  |
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
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrder2` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |
| `_MfgOrderSequence2` | | ✓ | | | | |
| `_MfgOrderOperation` | | ✓ | | | | |
| `_MfgOrderOperation2` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_ProductionUnit` | | ✓ | | | | |
| `_MaterialDocument2` | | ✓ | | | | |
| `_FailedGoodsMovement` | | ✓ | | | | |
| `_MfgOrderConfLongText` | | ✓ | | | | |
| `_ConfMatlDocItem` | | ✓ | | | | |
| `_ConfFailedGdsMvtItem` | | ✓ | | | | |
| `_ConfFailedActualCost` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_MfgOrderText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_PersonWorkAgreementText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrder2` | `I_MfgOrder` | [1..1] |
| `_MfgOrderSequence` | `I_MfgOrderSequence` | [0..1] |
| `_MfgOrderSequence2` | `I_ManufacturingOrderSequence` | [0..1] |
| `_MfgOrderOperation` | `I_MfgOrderOperationBySemanKey` | [1..1] |
| `_MfgOrderOperation2` | `I_MfgOrderOperationBySemKey` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_MaterialDocument2` | `I_MaterialDocumentHeader` | [0..1] |
| `_FailedGoodsMovement` | `I_FailedGoodsMovement` | [0..1] |
| `_MfgOrderConfLongText` | `I_MfgOrderConfirmationLongText` | [0..*] |
| `_ConfMatlDocItem` | `I_MfgOrderConfMatlDocItem` | [0..*] |
| `_ConfFailedGdsMvtItem` | `I_FailedGoodsMovementItem` | [0..*] |
| `_ConfFailedActualCost` | `I_ConfFailedActualCostCalc` | [0..*] |
| `_Extension` | `E_OrderConfirmation` | [0..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_MfgOrderText` | `I_ManufacturingOrder` | [1..1] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |
| `_PersonWorkAgreementText` | `I_PersonWorkAgreement_1` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMFGORDCONF'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_User', '_UserContactCard', '_LongText']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afru',
                                          tableElement: ['rueck'                    , 'rmzhl'],
                                          viewElement:  ['MfgOrderConfirmationGroup', 'MfgOrderConfirmation']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvv',
                                          tableElement: ['aufpl'          , 'aplzl'],
                                          viewElement:  ['OrderInternalID', 'OrderOperationInternalID']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'MfgOrderConfirmation'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderConfirmation'
@ObjectModel.semanticKey: ['MfgOrderConfirmationGroup', 'MfgOrderConfirmation']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Confirmation'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MfgOrderConfirmation
  as select from I_OrderConfirmation as conf

  association [1..1] to I_ManufacturingOrder           as _MfgOrder             on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [1..1] to I_MfgOrder                     as _MfgOrder2            on  $projection.ManufacturingOrder = _MfgOrder2.ManufacturingOrder  // for ODP reasons
  association [0..1] to I_MfgOrderSequence             as _MfgOrderSequence     on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                                and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [0..1] to I_ManufacturingOrderSequence   as _MfgOrderSequence2    on  $projection.ManufacturingOrder         = _MfgOrderSequence2.ManufacturingOrder
                                                                                and $projection.ManufacturingOrderSequence = _MfgOrderSequence2.ManufacturingOrderSequence
  association [1..1] to I_MfgOrderOperationBySemanKey  as _MfgOrderOperation    on  $projection.ManufacturingOrder          = _MfgOrderOperation.ManufacturingOrder
                                                                                and $projection.ManufacturingOrderSequence  = _MfgOrderOperation.ManufacturingOrderSequence
                                                                                and $projection.ManufacturingOrderOperation = _MfgOrderOperation.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderOperationBySemKey    as _MfgOrderOperation2   on  $projection.ManufacturingOrder            = _MfgOrderOperation2.ManufacturingOrder
                                                                                and $projection.ManufacturingOrderSequence    = _MfgOrderOperation2.ManufacturingOrderSequence
                                                                                and $projection.ManufacturingOrderOperation_2 = _MfgOrderOperation2.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderCategory             as _MfgOrderCategory     on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                 as _MfgOrderType         on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [1..1] to I_UnitOfMeasure                as _ProductionUnit       on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [0..1] to I_MaterialDocumentHeader       as _MaterialDocument2    on  $projection.MaterialDocument     = _MaterialDocument2.MaterialDocument
                                                                                and $projection.MaterialDocumentYear = _MaterialDocument2.MaterialDocumentYear
  association [0..1] to I_FailedGoodsMovement          as _FailedGoodsMovement  on  $projection.FailedGoodsMovement = _FailedGoodsMovement.FailedGoodsMovement
-- To child Long text
  association [0..*] to I_MfgOrderConfirmationLongText as _MfgOrderConfLongText on  $projection.MfgOrderConfirmationGroup = _MfgOrderConfLongText.MfgOrderConfirmationGroup
                                                                                and $projection.MfgOrderConfirmation      = _MfgOrderConfLongText.MfgOrderConfirmationCount
-- To child Material Document Items
  association [0..*] to I_MfgOrderConfMatlDocItem      as _ConfMatlDocItem      on  $projection.MfgOrderConfirmationGroup = _ConfMatlDocItem.MfgOrderConfirmationGroup
                                                                                and $projection.MfgOrderConfirmation      = _ConfMatlDocItem.MfgOrderConfirmation
-- To child Failed Goods Movements
  association [0..*] to I_FailedGoodsMovementItem      as _ConfFailedGdsMvtItem on  $projection.MfgOrderConfirmationGroup = _ConfFailedGdsMvtItem.ConfirmationGroup
                                                                                and $projection.MfgOrderConfirmation      = _ConfFailedGdsMvtItem.ConfirmationCount
-- To child Failed Actual Costs
  association [0..*] to I_ConfFailedActualCostCalc     as _ConfFailedActualCost on  $projection.MfgOrderConfirmationGroup = _ConfFailedActualCost.ConfirmationGroup
                                                                                and $projection.MfgOrderConfirmation      = _ConfFailedActualCost.OrderConfirmation
-- To extension
  association [0..1] to E_OrderConfirmation            as _Extension            on  $projection.MfgOrderConfirmationGroup = _Extension.ConfirmationGroup
                                                                                and $projection.MfgOrderConfirmation      = _Extension.ConfirmationCount
  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                        as _PlantText            on  $projection.Plant = _PlantText.Plant
  association [1..1] to I_ManufacturingOrder           as _MfgOrderText         on  $projection.ManufacturingOrder = _MfgOrderText.ManufacturingOrder
  association [0..*] to I_WorkCenterText               as _WorkCenterText       on  $projection.WorkCenterInternalID = _WorkCenterText.WorkCenterInternalID
                                                                                and $projection.WorkCenterTypeCode   = _WorkCenterText.WorkCenterTypeCode
  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreementText on  $projection.Personnel = _PersonWorkAgreementText.PersonWorkAgreement
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText     on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                  as _CompanyCodeText      on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea              as _ControllingAreaText  on  $projection.ControllingArea = _ControllingAreaText.ControllingArea      
  -- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
  key conf.ConfirmationGroup                                                 as MfgOrderConfirmationGroup,
      @ObjectModel.text.element: ['ConfirmationText']
  key conf.OrderConfirmation                                                 as MfgOrderConfirmation,

      // Order and Operation Data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      cast(conf.OrderID as manufacturingorder preserving type)               as ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderSequence2'
      cast(conf.Sequence as manufacturingordersequence preserving type)      as ManufacturingOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      cast(conf.OrderOperation as co_vornr preserving type)                  as ManufacturingOrderOperation,   // with conv. exit NUMCV
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderOperation2'
      conf.OrderOperation_2                                                  as ManufacturingOrderOperation_2, // w/o conversion exit
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      @ObjectModel.sapObjectNodeTypeReference: 'ManufacturingOrderCategory'
      cast(conf.OrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      @ObjectModel.sapObjectNodeTypeReference: 'ManufacturingOrderType'
      cast(conf.OrderType as manufacturingordertype preserving type)         as ManufacturingOrderType,

      // Internal Keys
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      conf.OrderInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'OrderOperationInternalID' } } ]
      conf.OrderOperationInternalID,
      conf.SuperiorOperationInternalID,

      // Text
      @Semantics.text: true
      conf.ConfirmationText,
      @ObjectModel.foreignKey.association: '_Language'
      conf.Language,
      @ObjectModel.foreignKey.association: '_LongTextIndicator'
      conf.LongTextExists,

      // Admin
      @Semantics.systemDate.createdAt: true
      conf.ConfirmationEntryDate                                             as MfgOrderConfirmationEntryDate,
      @Semantics.systemTime.createdAt: true
      conf.ConfirmationEntryTime                                             as MfgOrderConfirmationEntryTime,
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
      conf.ExternalSystemConfirmation,

      // Attributes
      @ObjectModel.foreignKey.association: '_FinalConfirmationType'
      conf.FinalConfirmationType,
      conf.IsFinalConfirmation,
      conf.OpenReservationsIsCleared,
      @ObjectModel.foreignKey.association: '_ReversedIndicator'
      conf.IsReversed,
      @ObjectModel.foreignKey.association: '_ReversalIndicator'
      conf.IsReversal,
      conf.CancldMfgOrderConfCount,
      conf.APIConfHasNoGoodsMovements,
      @ObjectModel.foreignKey.association: '_ConfirmationApplOrigin'
      conf.ConfirmationApplicationOrigin,
      @ObjectModel.foreignKey.association: '_ConfirmationType'
      conf.OrderConfirmationType,
      @ObjectModel.foreignKey.association: '_ConfirmationRecordType'
      conf.OrderConfirmationRecordType,

      // Milestone
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MilestoneConfirmationType'
      conf.MilestoneIsConfirmed,                 // wrong data type for indicators
      conf.MilestoneConfirmationType,
      conf.IsConfirmedByMilestoneConf,
      @ObjectModel.foreignKey.association: '_MilestoneConfirmationGroup'
      conf.MilestoneConfirmationGroup,
      @ObjectModel.foreignKey.association: '_MilestoneConfirmation'
      conf.MilestoneConfirmation,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.sapObjectNodeTypeReference: 'Plant'
      conf.Plant,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      conf.WorkCenterTypeCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      @ObjectModel.text.association: '_WorkCenterText'
      conf.WorkCenterInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      conf.CapacityInternalID,
      conf.CapacityRequirementSplit,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
      conf.ShiftGrouping,
--    @ObjectModel.foreignKey.association: '_ShiftDefinition'
      conf.ShiftDefinition,
      @ObjectModel.foreignKey.association: '_MaterialDocument2'
      @ObjectModel.sapObjectNodeTypeReference: 'MaterialDocument'   
      conf.MaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
      conf.MaterialDocumentYear,
      @ObjectModel.foreignKey.association: '_FailedGoodsMovement'
      conf.FailedGoodsMovement,
      conf.PlantDataCollectionID,
      conf.OriginalBatch,
      conf.BatchBySupplier,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.sapObjectNodeTypeReference: 'BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      conf.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.sapObjectNodeTypeReference: 'CompanyCode'
      conf.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      conf.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      @ObjectModel.sapObjectNodeTypeReference: 'ProfitCenter'
      conf.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]     
      conf.SenderCostCenter,
      @ObjectModel.foreignKey.association: '_ProductCostCollector'
      conf.ProductCostCollector,

      // Assignments HR
      @ObjectModel.foreignKey.association: '_PersonWorkAgreement'
      conf.Personnel,
      conf.TimeRecording,
      conf.EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      conf.EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'      
      conf.EmployeeSuitability,
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
      conf.ActualForecastEndDate,
      conf.ActualForecastEndTime,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmationUnit'
      @Semantics.unitOfMeasure: true
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
      @Semantics.unitOfMeasure: true
      cast(OrderQuantityUnit as productionunit preserving type)      as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(ConfirmedYieldQtyInOrderUnit as ru_gmnga preserving type) as ConfYieldQtyInProductionUnit,

      @ObjectModel.foreignKey.association: '_OperationUnit'
      @Semantics.unitOfMeasure: true
      conf.OperationUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      conf.OpPlannedTotalQuantity,

      // Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit1'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity1,
      conf.NoFurtherOpWorkQuantity1IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit2'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity2,
      conf.NoFurtherOpWorkQuantity2IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit3'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity3,
      conf.NoFurtherOpWorkQuantity3IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit4'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity4,
      conf.NoFurtherOpWorkQuantity4IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit5'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity5,
      conf.NoFurtherOpWorkQuantity5IsExpd,
      @ObjectModel.foreignKey.association: '_WorkQuantityUnit6'
      @Semantics.unitOfMeasure: true
      conf.OpWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'
      @Aggregation.default: #SUM
      conf.OpConfirmedWorkQuantity6,
      conf.NoFurtherOpWorkQuantity6IsExpd,

      // Business Process
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      conf.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessProcessUnit'
      @Semantics.unitOfMeasure: true
      conf.BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      @Aggregation.default: #SUM
      conf.BusinessProcessConfirmedQty,
      conf.NoFurtherBusinessProcQtyIsExpd,
      @Semantics.unitOfMeasure: true
      conf.BusinessProcRemainingQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcRemainingQtyUnit'
      @Aggregation.default: #SUM
      conf.BusinessProcessRemainingQty,

      // Durations
      @ObjectModel.foreignKey.association: '_BreakDurationUnit'
      @Semantics.unitOfMeasure: true
      conf.BreakDurationUnit,
      conf.ConfirmedBreakDuration,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderConfLongText,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ConfMatlDocItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ConfFailedActualCost,
--    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ConfFailedGdsMvtItem,
      conf._ConfirmationGroup,
      _MfgOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrder'
      _MfgOrder2,         // for ODP reasons
      _MfgOrderSequence,
      _MfgOrderSequence2, // for ODP reasons
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperation2'
      _MfgOrderOperation,
      _MfgOrderOperation2,
      _MfgOrderCategory,
      _MfgOrderType,
      @Consumption.hidden: true
      conf._OrderInternalID,
      conf._ConfirmationUnit,
      _ProductionUnit,
      conf._OperationUnit,
      conf._FinalConfirmationType,
      conf._ConfirmationType,
      conf._ConfirmationRecordType,
      conf._ConfirmationApplOrigin,
      conf._MilestoneConfirmationGroup,
      conf._MilestoneConfirmation,
      conf._User,
      conf._UserContactCard,
      conf._Language,
      @Consumption.hidden: true
      conf._WorkCenterType,
      conf._WorkCenter,
      conf._Plant,
      conf._Capacity,
      conf._ShiftGrouping,
      conf._ShiftDefinition,
      conf._BusinessArea,
      conf._CompanyCode,
      conf._ControllingArea,
      conf._ProductCostCollector,
      conf._BusinessProcess,
      conf._BusinessProcessUnit,
      conf._WorkQuantityUnit1,
      conf._WorkQuantityUnit2,
      conf._WorkQuantityUnit3,
      conf._WorkQuantityUnit4,
      conf._WorkQuantityUnit5,
      conf._WorkQuantityUnit6,
      conf._BreakDurationUnit,
      conf._VarianceReason,
      conf._EmployeeWageGroup,
      conf._EmployeeSuitability,
      conf._Employee,
      conf._PersonWorkAgreement,
      _FailedGoodsMovement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocument3'
      conf._MaterialDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocument3'
      _MaterialDocument2,
      conf._MaterialDocument3,
      conf._MaterialDocumentYear,
      conf._PostingDate,
      conf._PostingDateYear,
      conf._FinalConfIndicator,
      conf._ReversedIndicator,
      conf._ReversalIndicator,
      conf._LongTextIndicator,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderConfLongText'
      conf._LongText,
      
      // Text relations
      _MfgOrderText,
      _PlantText,
      _WorkCenterText,
      _PersonWorkAgreementText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText
}
where ( conf.ConfirmationApplicationOrigin = '2' or
        conf.ConfirmationApplicationOrigin = '6' or //Manufacturing orders only
        conf.ConfirmationApplicationOrigin = '8' ); //including results recording
```
