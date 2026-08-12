---
name: I_MFGORDEROPERATIONPRT
description: "Mfgorderoperationprt"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_MFGORDEROPERATIONPRT

**Mfgorderoperationprt**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MfgOrderInternalID` | ✓ | |  | `OrderInternalBillOfOperations` |  |  |
| `MfgOrderOpProdnRsceToolIntID` | ✓ | |  | `OrderProdnRsceToolInternalID` |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `MfgOrderOpProdnRsceToolText` |  | |  | `OrderProdnRsceToolText` |  |  |
| `ProdnRsceToolHasLongText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ProductionResourceType` |  | |  |  |  |  |
| `ProductionResourceInternalID` |  | |  |  |  |  |
| `ProductionResourceTool` |  | |  | `cast(prt._ProdnRsceToolByInternalKey.ProductionResourceTool as pph_fhmnr preserving type)` |  |  |
| `ProdnRsceToolCategory` |  | |  |  |  |  |
| `ProdnRsceToolCategory_2` |  | |  |  |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |  |  |
| `ProdnRsceToolItemNumber` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  | `OrderIntBillOfOperationsItem` |  |  |
| `ManufacturingOrder` |  | |  | `cast(prt.OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderSequence` |  | |  | `cast(opr.Sequence as manufacturingordersequence preserving type)` |  |  |
| `ManufacturingOrderOperation` |  | |  | `cast(opr.Operation as manufacturingorderoperation preserving type)` |  |  |
| `ManufacturingOrderOperation_2` |  | |  | `Operation_2` |  |  |
| `MfgOrderOperationIsPhase` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  | `cast(prt.OrderCategory as manufacturingordercategory preserving type)` |  |  |
| `ManufacturingOrderType` |  | |  | `cast(prt.OrderType as manufacturingordertype preserving type)` |  |  |
| `ProductionPlant` |  | |  | `cast(prt.Plant as pwwrk preserving type)` |  |  |
| `OperationControlProfile` |  | |  | `cast(opr.OperationControlProfile as pph_steus preserving type)` |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `EarliestSchedldUsageStartDate` |  | |  |  |  |  |
| `EarliestSchedldUsageStartTime` |  | |  |  |  |  |
| `EarliestSchedldUsageEndDate` |  | |  |  |  |  |
| `EarliestSchedldUsageEndTime` |  | |  |  |  |  |
| `LatestSchedldUsageStartDate` |  | |  |  |  |  |
| `LatestSchedldUsageStartTime` |  | |  |  |  |  |
| `LatestSchedldUsageEndDate` |  | |  |  |  |  |
| `LatestSchedldUsageEndTime` |  | |  |  |  |  |
| `ActualUsageStartDate` |  | |  |  |  |  |
| `ActualUsageStartTime` |  | |  |  |  |  |
| `ActualUsageEndDate` |  | |  |  |  |  |
| `ActualUsageEndTime` |  | |  |  |  |  |
| `ProdnRsceToolUsageDurnUnit` |  | |  |  |  |  |
| `ProdnRsceToolUsageDuration` |  | |  |  |  |  |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  |  |  |
| `ProdnRsceToolStandardWorkQty` |  | |  |  |  |  |
| `PlannedProdnRsceToolQtyUnit` |  | |  |  |  |  |
| `PlannedTotalProdnRsceToolQty` |  | |  |  |  |  |
| `ConfirmedProdnRsceToolQtyUnit` |  | |  |  |  |  |
| `ConfirmedProdnRsceToolQty` |  | |  |  |  |  |
| `RemainingProdnRsceToolQtyUnit` |  | |  |  |  |  |
| `RemainingProdnRsceToolQty` |  | |  |  |  |  |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  |  |  |
| `ProdnRsceToolUsageQuantity` |  | |  |  |  |  |
| `PlndProdnRsceToolUsageQtyUnit` |  | |  |  |  |  |
| `PlannedProdnRsceToolUsageQty` |  | |  |  |  |  |
| `ConfdProdnRsceToolUsageQtyUnit` |  | |  |  |  |  |
| `ConfirmedProdnRsceToolUsageQty` |  | |  |  |  |  |
| `RmngProdnRsceToolUsageQtyUnit` |  | |  |  |  |  |
| `RemainingProdnRsceToolUsageQty` |  | |  |  |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  |  |  |
| `_MfgOrderInternalID` | | ✓ | | | | |
| `_MfgOrder2` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |
| `_MfgOrderSequence2` | | ✓ | | | | |
| `_MfgOrderOperation` | | ✓ | | | | |
| `_MfgOrderOperationBySemanKey` | | ✓ | | | | |
| `_MfgOrderOperationBySemKey` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_ProdnRsceToolCategory` | | ✓ | | | | |
| `_ProdnRsceToolCategory_2` | | ✓ | | | | |
| `_ProductionPlant` | | ✓ | | | | |
| `_OperationControlProfile` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderOperationPRTLongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_MfgOrder2` | `I_MfgOrder` | [1..1] |
| `_MfgOrderSequence` | `I_MfgOrderSequence` | [1..1] |
| `_MfgOrderSequence2` | `I_ManufacturingOrderSequence` | [1..1] |
| `_MfgOrderOperation` | `I_ManufacturingOrderOperation` | [1..1] |
| `_MfgOrderOperationBySemanKey` | `I_MfgOrderOperationBySemanKey` | [1..1] |
| `_MfgOrderOperationBySemKey` | `I_MfgOrderOperationBySemKey` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ProdnRsceToolCategory` | `I_ProdnRsceToolCategory` | [1..1] |
| `_ProdnRsceToolCategory_2` | `I_ProdnRsceToolCategory_2` | [1..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_OperationControlProfile` | `I_OperationControlProfile` | [1..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderOperationPRTLongText` | `I_MfgOrderOperationPRTLongText` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMFGORDOPPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_StatusObject']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MfgOrderOpProdnRsceToolIntID'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderProdnRsceTool'
@ObjectModel.semanticKey: ['ManufacturingOrder', 'ManufacturingOrderSequence', 'ManufacturingOrderOperation', 'ProdnRsceToolItemNumber']
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Mfg Order Operation Production Resource Tool'

define view I_MfgOrderOperationPRT
  as select from I_OrderProdnResourceTool as prt
    inner join   I_OrderOperationBasic    as opr on  opr.OrderInternalID          = prt.OrderInternalBillOfOperations
                                                 and opr.OrderOperationInternalID = prt.OrderIntBillOfOperationsItem

  association [1..1] to I_OrderInternalID              as _MfgOrderInternalID          on  $projection.MfgOrderInternalID = _MfgOrderInternalID.OrderInternalID
  association [1..1] to I_MfgOrder                     as _MfgOrder2                   on  $projection.ManufacturingOrder = _MfgOrder2.ManufacturingOrder
  association [1..1] to I_MfgOrderSequence             as _MfgOrderSequence            on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [1..1] to I_ManufacturingOrderSequence   as _MfgOrderSequence2           on  $projection.ManufacturingOrder         = _MfgOrderSequence2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence = _MfgOrderSequence2.ManufacturingOrderSequence
  association [1..1] to I_ManufacturingOrderOperation  as _MfgOrderOperation           on  $projection.MfgOrderInternalID       = _MfgOrderOperation.MfgOrderInternalID
                                                                                       and $projection.OrderOperationInternalID = _MfgOrderOperation.OrderOperationInternalID
  association [1..1] to I_MfgOrderOperationBySemanKey  as _MfgOrderOperationBySemanKey on  $projection.ManufacturingOrder          = _MfgOrderOperationBySemanKey.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOperationBySemanKey.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOperationBySemanKey.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderOperationBySemKey    as _MfgOrderOperationBySemKey   on  $projection.ManufacturingOrder            = _MfgOrderOperationBySemKey.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence    = _MfgOrderOperationBySemKey.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2 = _MfgOrderOperationBySemKey.ManufacturingOrderOperation
  association [1..1] to I_MfgOrderCategory             as _MfgOrderCategory            on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                 as _MfgOrderType                on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [1..1] to I_ProdnRsceToolCategory        as _ProdnRsceToolCategory       on  $projection.ProdnRsceToolCategory   = _ProdnRsceToolCategory.ProdnRsceToolCategory // deprecated
  association [1..1] to I_ProdnRsceToolCategory_2      as _ProdnRsceToolCategory_2     on  $projection.ProdnRsceToolCategory_2 = _ProdnRsceToolCategory_2.ProdnRsceToolCategory
  association [1..1] to I_Plant                        as _ProductionPlant             on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [1..1] to I_OperationControlProfile      as _OperationControlProfile     on  $projection.OperationControlProfile = _OperationControlProfile.OperationControlProfile
  -- to root: Header 
  association [1..1] to I_ManufacturingOrder           as _MfgOrder                    on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  -- to child: Longtext
  association [0..1] to I_MfgOrderOperationPRTLongText as _MfgOrderOperationPRTLongText on $projection.MfgOrderInternalID           = _MfgOrderOperationPRTLongText.MfgOrderInternalID
                                                                                       and $projection.MfgOrderOpProdnRsceToolIntID = _MfgOrderOperationPRTLongText.MfgOrderOpProdnRsceToolIntID
                                                                                       and $projection.Language                     = _MfgOrderOperationPRTLongText.LongTextLanguage
{
      // Key
      @ObjectModel.foreignKey.association: '_MfgOrderInternalID'
  key prt.OrderInternalBillOfOperations as MfgOrderInternalID,
      @ObjectModel.text.element: ['MfgOrderOpProdnRsceToolText']
  key prt.OrderProdnRsceToolInternalID  as MfgOrderOpProdnRsceToolIntID,

      // Admin data
      prt.IsDeleted,
      @Semantics.systemDate.createdAt: true
      prt.CreationDate,
      @Semantics.user.createdBy: true
      prt.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      prt.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      prt.LastChangedByUser,

      // Text
      @Semantics.text: true
      prt.OrderProdnRsceToolText                                            as MfgOrderOpProdnRsceToolText,
      @Semantics.booleanIndicator
      prt.ProdnRsceToolHasLongText,
      @ObjectModel.foreignKey.association: '_Language'
      prt.Language,

      // PRT data
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
      prt.ProductionResourceType,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolByInternalKey'
      prt.ProductionResourceInternalID,
      cast(prt._ProdnRsceToolByInternalKey.ProductionResourceTool as pph_fhmnr preserving type) as ProductionResourceTool,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProdnRsceToolCategory_2'
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
      prt._ProdnRsceToolByInternalKey.ProdnRsceToolCategory                 as ProdnRsceToolCategory,   // with conv. exit
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory_2'      
      prt._ProdnRsceToolByInternalKey.ProdnRsceToolCategory_2               as ProdnRsceToolCategory_2, // w/o conv. exit
      @ObjectModel.foreignKey.association: '_ProdnRsceToolControlProfile'
      prt.ProdnRsceToolControlProfile,
      @ObjectModel.text.element: ['MfgOrderOpProdnRsceToolText']
      prt.ProdnRsceToolItemNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'    
      prt.ObjectInternalID,

      // Order and Operation data
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      prt.OrderIntBillOfOperationsItem                                      as OrderOperationInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      cast(prt.OrderID as manufacturingorder preserving type)               as ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderSequence2'
      cast(opr.Sequence as manufacturingordersequence preserving type)      as ManufacturingOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemanKey'
      cast(opr.Operation as manufacturingorderoperation preserving type)    as ManufacturingOrderOperation,  // with conv. exit
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemKey' 
      opr.Operation_2                                                       as ManufacturingOrderOperation_2, // w/o conv. exit
      opr.MfgOrderOperationIsPhase                                          as MfgOrderOperationIsPhase,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      cast(prt.OrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(prt.OrderType as manufacturingordertype preserving type)         as ManufacturingOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(prt.Plant as pwwrk preserving type)                              as ProductionPlant,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(opr.OperationControlProfile as pph_steus preserving type)        as OperationControlProfile,

      // BOO Data
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      prt.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      prt.BillOfOperationsGroup,

      // Dates and Times
      prt.EarliestSchedldUsageStartDate,
      prt.EarliestSchedldUsageStartTime,
      prt.EarliestSchedldUsageEndDate,
      prt.EarliestSchedldUsageEndTime,
      prt.LatestSchedldUsageStartDate,
      prt.LatestSchedldUsageStartTime,
      prt.LatestSchedldUsageEndDate,
      prt.LatestSchedldUsageEndTime,
      prt.ActualUsageStartDate,
      prt.ActualUsageStartTime,
      prt.ActualUsageEndDate,
      prt.ActualUsageEndTime,

      // Duration
      @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageDurnUnit'
      @Semantics.unitOfMeasure: true
      prt.ProdnRsceToolUsageDurnUnit,
      prt.ProdnRsceToolUsageDuration,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProdnRsceToolStdWorkQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.ProdnRsceToolStdWorkQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
      @Aggregation.default: #SUM
      prt.ProdnRsceToolStandardWorkQty,

      @ObjectModel.foreignKey.association: '_PlannedProdnRsceToolQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.PlannedProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'PlannedProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.PlannedTotalProdnRsceToolQty,

      @ObjectModel.foreignKey.association: '_ConfirmedProdnRsceToolQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.ConfirmedProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfirmedProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.ConfirmedProdnRsceToolQty,

      @ObjectModel.foreignKey.association: '_RemainingProdnRsceToolQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.RemainingProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'RemainingProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.RemainingProdnRsceToolQty,

      // Usage Quantities and UoMs
      @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.ProdnRsceToolUsageQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolUsageQuantityUnit'
      @Aggregation.default: #SUM
      prt.ProdnRsceToolUsageQuantity,

      @ObjectModel.foreignKey.association: '_PlndProdnRsceToolUsageQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.PlndProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'PlndProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.PlannedProdnRsceToolUsageQty,

      @ObjectModel.foreignKey.association: '_ConfdProdnRsceToolUsgeQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.ConfdProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfdProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.ConfirmedProdnRsceToolUsageQty,

      @ObjectModel.foreignKey.association: '_RmngProdnRsceToolUsageQtyUnit'
      @Semantics.unitOfMeasure: true
      prt.RmngProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'RmngProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.RemainingProdnRsceToolUsageQty,

      // Formulas
      prt.ProdnRsceToolTotQtyCalcFormula,
      prt.ProdnRsceToolUsageQtyCalcFmla,

      // Associations
      _MfgOrderInternalID,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOperationPRTLongText,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrder'
      _MfgOrder2,
      _MfgOrderSequence,
      _MfgOrderSequence2,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _MfgOrderOperation,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationBySemKey'
      _MfgOrderOperationBySemanKey,
      _MfgOrderOperationBySemKey,   
      _MfgOrderCategory,
      _MfgOrderType,
      _ProductionPlant,
      _OperationControlProfile,
      prt._ProdnRsceToolControlProfile,
      prt._ProductionResourceType,
      prt._ProdnRsceToolByInternalKey,
      prt._ProdnRsceToolMasterData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProdnRsceToolCategory_2'
      _ProdnRsceToolCategory,
      _ProdnRsceToolCategory_2,
      prt._CreatedByUser,
      prt._LastChangedByUser,
      prt._Language,
      prt._BillOfOperationsType,
      prt._BillOfOperationsGroup,
      prt._ProdnRsceToolUsageDurnUnit,
      prt._ProdnRsceToolStdWorkQtyUnit,
      prt._PlannedProdnRsceToolQtyUnit,
      prt._ConfirmedProdnRsceToolQtyUnit,
      prt._RemainingProdnRsceToolQtyUnit,
      prt._ProdnRsceToolUsageQtyUnit,
      prt._PlndProdnRsceToolUsageQtyUnit,
      prt._ConfdProdnRsceToolUsgeQtyUnit,
      prt._RmngProdnRsceToolUsageQtyUnit,
      prt._StatusObject,
      prt._DocumentProdnRsceTool,
      prt._EquipmentProdnRsceTool,
      prt._MaterialProdnRsceTool,
      prt._MiscProdnRsceTool
}
where
  (    prt.OrderCategory = '10'
    or prt.OrderCategory = '40' //Manufacturing orders only
  );
```
