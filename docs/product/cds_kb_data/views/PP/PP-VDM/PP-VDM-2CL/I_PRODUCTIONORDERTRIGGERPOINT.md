---
name: I_PRODUCTIONORDERTRIGGERPOINT
description: "Production OrderTRIGGERPOINT"
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
# I_PRODUCTIONORDERTRIGGERPOINT

**Production OrderTRIGGERPOINT**

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
| `IsMarkedForDeletion` |  | |  | `IsDeleted` |  |  |
| `TriggerPointUsage` |  | |  | `UsageCode` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ProductionOrder` |  | |  | `cast(oper.ManufacturingOrder as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderType` |  | |  | `cast(oper.ManufacturingOrderType as vdm_prodnordertype preserving type)` |  |  |
| `ProductionOrderSequence` |  | |  | `cast(oper.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)` |  |  |
| `ProductionOrderOperation` |  | |  | `cast(oper.ManufacturingOrderOperation_2 as vdm_prodnorderoperation preserving type)` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `WorkCenterType` |  | |  | `WorkCenterTypeCode_2` |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  | `cast(oper.OperationControlProfile as pph_steus preserving type)` |  |  |
| `ScheduledBasicDate` |  | |  |  |  |  |
| `FixedBasicDate` |  | |  |  |  |  |
| `ActualEndDate` |  | |  |  |  |  |
| `ScheduledForecastedDate` |  | |  |  |  |  |
| `TrggrPtReleaseStopIsActive` |  | |  | `MlstnReleaseStopIsActive` |  |  |
| `TrggrPtIsUsedForTrggrPtFunc` |  | |  | `cast(mlst.MlstnIsUsedforMlstnFunc as vdm_pp_wflow preserving type)` |  |  |
| `TrggrPtIsMarkedForCreateOrder` |  | |  | `cast(mlst.MlstnIsMarkedForCreateNtwk as vdm_pp_incnw preserving type)` |  |  |
| `TrggrPtIsMarkedForInsertRefOp` |  | |  | `cast(mlst.MlstnIsMarkedForIncludeSubNtwk as vdm_pp_incpn preserving type)` |  |  |
| `TrggrPtIsMarkedForRelPrevOp` |  | |  | `cast(mlst.MlstnIsMarkedForCreateSubNtwk as vdm_pp_incsn preserving type)` |  |  |
| `TrggrPtIsMarkedForRelFllwngOp` |  | |  | `cast(mlst.MlstnIsMarkedForRelFllwngActy as vdm_pp_relsu preserving type)` |  |  |
| `TrggrPtIsMarkedForRelUpToStop` |  | |  | `MlstnIsMarkedForRelUptoStopInd` |  |  |
| `TrggrPtIsMrkdForStartWrkflwTsk` |  | |  | `MlstnIsMarkedForStrtWrkflwTsk` |  |  |
| `_OrderInternalID` | | ✓ | | | | |
| `_ProductionOrderType` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_TriggerPointUsage` | | ✓ | | | | |
| `_TriggerPointText` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_ProductionOrderText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_ProductionOrderOperation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_TriggerPointUsage` | `I_TriggerPointUsage` | [0..1] |
| `_TriggerPointText` | `I_TriggerPointText` | [0..*] |
| `_ProductionOrderHeader` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPRODNORDTRGGRPT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderTriggerPoint'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Trigger Point'

define view entity I_ProductionOrderTriggerPoint
  as select from I_Projectmilestone       as mlst
    inner join   I_MfgOrderOperationBasic as oper on  oper.OrderInternalBillOfOperations = mlst.ProjectNetworkInternalID
                                                  and oper.OrderIntBillOfOperationsItem  = mlst.NetworkActivityInternalID

  association [1..1] to I_OrderInternalID             as _OrderInternalID              on  $projection.OrderInternalID = _OrderInternalID.OrderInternalID  
  association [1..1] to I_ProductionOrderType         as _ProductionOrderType          on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [0..1] to I_WorkCenterType              as _WorkCenterType               on  $projection.WorkCenterType = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                  as _WorkCenter                   on  $projection.WorkCenterType = _WorkCenter.WorkCenterTypeCode
                                                                                       and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [0..1] to I_TriggerPointUsage           as _TriggerPointUsage            on  $projection.TriggerPointUsage = _TriggerPointUsage.TriggerPointUsage
  association [0..*] to I_TriggerPointText            as _TriggerPointText             on  $projection.TriggerPointNumber = _TriggerPointText.TriggerPointNumber  
  -- SOT relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderHeader        on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  association [1..1] to I_ProductionOrderSequence     as _ProductionOrderSequence      on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                       and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
  association to parent I_ProductionOrderOperation_2  as _ProductionOrderOperation     on  $projection.OrderInternalID          = _ProductionOrderOperation.OrderInternalID
                                                                                       and $projection.OrderOperationInternalID = _ProductionOrderOperation.OrderOperationInternalID
  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                        as _ProductionPlantText          on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [1..1] to I_ProductionOrder              as _ProductionOrderText          on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
  association [0..*] to I_WorkCenterText               as _WorkCenterText               on  $projection.WorkCenterInternalID = _WorkCenterText.WorkCenterInternalID
                                                                                        and $projection.WorkCenterType       = _WorkCenterText.WorkCenterTypeCode
  -- end new associations for full coverage of text relations

{
      @ObjectModel.text.element: ['TriggerPointName']
  key cast(mlst.ProjectMilestone as pph_mlst_zaehl preserving type)           as TriggerPointNumber,
      @Semantics.text: true
      cast(mlst.MilestoneDescription as pph_mlst_ktext preserving type)       as TriggerPointName,

      // Internal key
      @ObjectModel.foreignKey.association: '_OrderInternalID'    
      oper.OrderInternalBillOfOperations                                      as OrderInternalID,
      oper.OrderIntBillOfOperationsItem                                       as OrderOperationInternalID,
      @ObjectModel.text.element: ['TriggerPointName']
      cast(mlst.ProjectMilestoneInternalID as pph_mlst_intid preserving type) as TriggerPointInternalID,

      // Attributes
      @Semantics.booleanIndicator: true
      mlst.IsDeleted                                                          as IsMarkedForDeletion,
      @ObjectModel.foreignKey.association: '_TriggerPointUsage'
      mlst.UsageCode                                                          as TriggerPointUsage,

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
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      cast(oper.ManufacturingOrder as vdm_manufacturingorder preserving type)             as ProductionOrder,
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(oper.ManufacturingOrderType as vdm_prodnordertype preserving type)             as ProductionOrderType,

      // Order operation data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(oper.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)     as ProductionOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
      cast(oper.ManufacturingOrderOperation_2 as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      oper.ProductionPlant,
      oper.WorkCenterTypeCode_2                                                 as WorkCenterType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      oper.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(oper.OperationControlProfile as pph_steus preserving type)           as OperationControlProfile,

      // Dates
      mlst.ScheduledBasicDate,
      mlst.FixedBasicDate,
      mlst.ActualEndDate,
      mlst.ScheduledForecastedDate,

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
      _ProductionOrderType,
      _ProductionOrderHeader,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      oper._ProductionPlant,
      oper._OperationControlProfile,
      _WorkCenterType,
      _WorkCenter,
      _TriggerPointUsage,
      _TriggerPointText,
      -- new text relations
      _ProductionPlantText,
      _ProductionOrderText,
      _WorkCenterText 
}
where mlst.OrderCategory = '10';
```
