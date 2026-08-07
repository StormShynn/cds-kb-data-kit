---
name: I_MFGORDEROPERATIONTRGGRPOINT
description: Mfgorderoperationtrggrpoint
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
# I_MFGORDEROPERATIONTRGGRPOINT

**Mfgorderoperationtrggrpoint**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TriggerPointNumber` | ✓ | |  | `cast(mlst.ProjectMilestone as pph_mlst_zaehl preserving type)` |  |  |
| `TriggerPointName` |  | |  | `cast(mlst.MilestoneDescription as pph_mlst_ktext preserving type)` |  |  |
| `OrderInternalID` |  | |  | `OrderInternalBillOfOperations` |  |  |
| `OrderOperationInternalID` |  | |  | `OrderIntBillOfOperationsItem` |  |  |
| `TriggerPointInternalID` |  | |  | `cast(mlst.ProjectMilestoneInternalID as pph_mlst_intid preserving type)` |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  | `IsDeleted` |  |  |
| `UsageCode` |  | |  |  |  |  |
| `TriggerPointUsage` |  | |  | `UsageCode` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ManufacturingOrderSequence` |  | |  |  |  |  |
| `ManufacturingOrderOperation` |  | |  | `ManufacturingOrderOperation_2` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `WorkCenterTypeCode_2` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  | `cast(oper.OperationControlProfile as pph_steus preserving type)` |  |  |
| `ScheduledBasicDate` |  | |  |  |  |  |
| `FixedBasicDate` |  | |  |  |  |  |
| `ActualEndDate` |  | |  |  |  |  |
| `ScheduledForecastedDate` |  | |  |  |  |  |
| `ForecastedFixedDate` |  | |  |  |  |  |
| `TrggrPtReleaseStopIsActive` |  | |  | `MlstnReleaseStopIsActive` |  |  |
| `TrggrPtIsUsedForTrggrPtFunc` |  | |  | `cast(mlst.MlstnIsUsedforMlstnFunc as vdm_pp_wflow preserving type)` |  |  |
| `TrggrPtIsMarkedForCreateOrder` |  | |  | `cast(mlst.MlstnIsMarkedForCreateNtwk as vdm_pp_incnw preserving type)` |  |  |
| `TrggrPtIsMarkedForInsertRefOp` |  | |  | `cast(mlst.MlstnIsMarkedForIncludeSubNtwk as vdm_pp_incpn preserving type)` |  |  |
| `TrggrPtIsMarkedForRelPrevOp` |  | |  | `cast(mlst.MlstnIsMarkedForCreateSubNtwk as vdm_pp_incsn preserving type)` |  |  |
| `TrggrPtIsMarkedForRelFllwngOp` |  | |  | `cast(mlst.MlstnIsMarkedForRelFllwngActy as vdm_pp_relsu preserving type)` |  |  |
| `TrggrPtIsMarkedForRelUpToStop` |  | |  | `MlstnIsMarkedForRelUptoStopInd` |  |  |
| `TrggrPtIsMrkdForStartWrkflwTsk` |  | |  | `MlstnIsMarkedForStrtWrkflwTsk` |  |  |
| `_OrderInternalID` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_MfgOrderOperationBySemKey` | | ✓ | | | | |
| `_TriggerPointUsage` | | ✓ | | | | |
| `_TriggerPointText` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_ManufacturingOrderSequence` | | ✓ | | | | |
| `_ManufacturingOrderOperation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_WorkCenter` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_MfgOrderOperationBySemKey` | `I_MfgOrderOperationBySemKey` | [1..1] |
| `_TriggerPointUsage` | `I_TriggerPointUsage` | [0..1] |
| `_TriggerPointText` | `I_TriggerPointText` | [0..*] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ManufacturingOrderSequence` | `I_ManufacturingOrderSequence` | [1..1] |
| `_ManufacturingOrderOperation` | `I_ManufacturingOrderOperation` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDOPTRGGRPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TriggerPointNumber'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderTriggerPoint'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Operation Trigger Point'

define view I_MfgOrderOperationTrggrPoint
  as select from I_Projectmilestone       as mlst
    inner join   I_MfgOrderOperationBasic as oper on  oper.OrderInternalBillOfOperations = mlst.ProjectNetworkInternalID
                                                  and oper.OrderIntBillOfOperationsItem  = mlst.NetworkActivityInternalID

  association [1..1] to I_OrderInternalID             as _OrderInternalID             on  $projection.OrderInternalID = _OrderInternalID.OrderInternalID  
  association [0..1] to I_WorkCenterBySemanticKey     as _WorkCenter                  on  $projection.ProductionPlant = _WorkCenter.Plant
                                                                                      and $projection.WorkCenter      = _WorkCenter.WorkCenter
  association [1..1] to I_MfgOrderOperationBySemKey   as _MfgOrderOperationBySemKey   on  $projection.ManufacturingOrder          = _MfgOrderOperationBySemKey.ManufacturingOrder
                                                                                      and $projection.ManufacturingOrderSequence  = _MfgOrderOperationBySemKey.ManufacturingOrderSequence
                                                                                      and $projection.ManufacturingOrderOperation = _MfgOrderOperationBySemKey.ManufacturingOrderOperation                  
  association [0..1] to I_TriggerPointUsage           as _TriggerPointUsage           on  $projection.TriggerPointUsage = _TriggerPointUsage.TriggerPointUsage
  association [0..*] to I_TriggerPointText            as _TriggerPointText            on  $projection.TriggerPointNumber = _TriggerPointText.TriggerPointNumber  

  -- to root: Header
  association [1..1] to I_ManufacturingOrder          as _ManufacturingOrder          on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
  -- to parent: Sequence
  association [1..1] to I_ManufacturingOrderSequence  as _ManufacturingOrderSequence  on  $projection.ManufacturingOrder         = _ManufacturingOrderSequence.ManufacturingOrder
                                                                                      and $projection.ManufacturingOrderSequence = _ManufacturingOrderSequence.ManufacturingOrderSequence  
  -- to parent: Operation
  association [1..1] to I_ManufacturingOrderOperation as _ManufacturingOrderOperation on  $projection.OrderInternalID          = _ManufacturingOrderOperation.MfgOrderInternalID
                                                                                      and $projection.OrderOperationInternalID = _ManufacturingOrderOperation.OrderOperationInternalID
{
      @ObjectModel.text.element: ['TriggerPointName']
  key cast(mlst.ProjectMilestone as pph_mlst_zaehl preserving type)           as TriggerPointNumber,
      @Semantics.text: true
      cast(mlst.MilestoneDescription as pph_mlst_ktext preserving type)       as TriggerPointName,

      // Internal key
      @ObjectModel.foreignKey.association: '_OrderInternalID'    
      oper.OrderInternalBillOfOperations                                      as OrderInternalID,
      @ObjectModel.foreignKey.association: '_ManufacturingOrderOperation'  
      oper.OrderIntBillOfOperationsItem                                       as OrderOperationInternalID,
      @ObjectModel.text.element: ['TriggerPointName']
      cast(mlst.ProjectMilestoneInternalID as pph_mlst_intid preserving type) as TriggerPointInternalID,

      // Attributes
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'IsMarkedForDeletion'
      mlst.IsDeleted,
      mlst.IsDeleted as IsMarkedForDeletion,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'TriggerPointUsage'
      mlst.UsageCode,
      @ObjectModel.foreignKey.association: '_TriggerPointUsage'
      mlst.UsageCode as TriggerPointUsage,

      // Admin data
      @Semantics.systemDate.createdAt: true
      mlst.CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      mlst.LastChangeDate,
      @Semantics.user.createdBy: true      
      mlst.CreatedByUser,
      @Semantics.user.lastChangedBy: true
      mlst.LastChangedByUser,

      // Order header data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      oper.ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      oper.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      oper.ManufacturingOrderType,

      // Order operation data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrderSequence'
      oper.ManufacturingOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdOpBySemanticKeyStdVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemKey'
      oper.ManufacturingOrderOperation_2                                      as ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      oper.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WrkCtrBySemanticKeyStdVH', element: 'WorkCenter' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      oper._WorkCenter.WorkCenter                                             as WorkCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WorkCenterTypeCode_2'
      oper.WorkCenterTypeCode,
      oper.WorkCenterTypeCode_2,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      oper.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(oper.OperationControlProfile as pph_steus preserving type)         as OperationControlProfile,

      // Dates
      mlst.ScheduledBasicDate,
      mlst.FixedBasicDate,
      mlst.ActualEndDate,
      mlst.ScheduledForecastedDate,
      mlst.ForecastedFixedDate,

      // Functions
      mlst.MlstnReleaseStopIsActive                                             as TrggrPtReleaseStopIsActive,
      cast(mlst.MlstnIsUsedforMlstnFunc        as vdm_pp_wflow preserving type) as TrggrPtIsUsedForTrggrPtFunc,
      cast(mlst.MlstnIsMarkedForCreateNtwk     as vdm_pp_incnw preserving type) as TrggrPtIsMarkedForCreateOrder,
      cast(mlst.MlstnIsMarkedForIncludeSubNtwk as vdm_pp_incpn preserving type) as TrggrPtIsMarkedForInsertRefOp,
      cast(mlst.MlstnIsMarkedForCreateSubNtwk  as vdm_pp_incsn preserving type) as TrggrPtIsMarkedForRelPrevOp,
      cast(mlst.MlstnIsMarkedForRelFllwngActy  as vdm_pp_relsu preserving type) as TrggrPtIsMarkedForRelFllwngOp,
      mlst.MlstnIsMarkedForRelUptoStopInd                                       as TrggrPtIsMarkedForRelUpToStop,
      mlst.MlstnIsMarkedForStrtWrkflwTsk                                        as TrggrPtIsMrkdForStartWrkflwTsk,

      // Associations
      @Consumption.hidden: true
      _OrderInternalID,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _ManufacturingOrder,
      _ManufacturingOrderSequence,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _ManufacturingOrderOperation,
      _MfgOrderOperationBySemKey,
      oper._MfgOrderCategory,
      oper._MfgOrderType,
      oper._ProductionPlant,
      _WorkCenter,
      oper._OperationControlProfile,
      _TriggerPointUsage,
      _TriggerPointText
}
where mlst.OrderCategory = '10'
   or mlst.OrderCategory = '40';
```
