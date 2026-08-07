---
name: I_EWM_WAREHOUSETASK_2
description: Ewm Warehousetask 2
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - warehouse
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAREHOUSETASK_2

**Ewm Warehousetask 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  |  |  |
| `WarehouseTask` | ✓ | |  |  |  |  |
| `WarehouseTaskItem` | ✓ | |  | `cast('0000' as tapos_no_conv preserving type )` |  |  |
| `IsHandlingUnitWarehouseTask` |  | |  |  |  |  |
| `WarehouseProcessType` |  | |  |  |  |  |
| `WarehouseProcessCategory` |  | |  |  |  |  |
| `StorageProcess` |  | |  |  |  |  |
| `ExternalStorageProcessStep` |  | |  |  |  |  |
| `WarehouseTaskStatus` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `WhseTaskCrtnUTCDateTime` |  | |  |  |  |  |
| `WarehouseTaskCodes` |  | |  |  |  |  |
| `ExecutingResource` |  | |  |  |  |  |
| `WarehouseMovementsReason` |  | |  |  |  |  |
| `EWMWarehouseTaskPriority` |  | |  |  |  |  |
| `StockItemUUID` |  | |  |  |  |  |
| `CurrentNumberOfKeyTable` |  | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `ProductName` |  | | `_Material` | `Product` |  |  |
| `BatchUUID` |  | |  |  |  |  |
| `EWMStockType` |  | |  |  |  |  |
| `StockDocumentCategory` |  | |  |  |  |  |
| `StockDocumentNumber` |  | |  | `case StockDocumentCategory when 'SOS' then StockDocumentNumber when 'PJS' then WBSElementExternalID else StockDocumentNumber end` |  |  |
| `StockItemNumber` |  | |  |  |  |  |
| `EWMDocumentCategory` |  | |  |  |  |  |
| `EWMStockUsage` |  | |  |  |  |  |
| `EWMStockOwner` |  | |  |  |  |  |
| `StockOwnerPartnerRole` |  | |  |  |  |  |
| `EntitledToDisposeParty` |  | |  |  |  |  |
| `EntitledToDisposePartnerRole` |  | |  |  |  |  |
| `CounterForStockSeparation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `AlternativeUnit` |  | |  |  |  |  |
| `TargetQuantityInBaseUnit` |  | |  |  |  |  |
| `TargetQuantityInAltvUnit` |  | |  |  |  |  |
| `WhseTaskRetentionQuantity` |  | |  |  |  |  |
| `HandlingUnitType` |  | |  |  |  |  |
| `HandlingUnitTypeGroup` |  | |  |  |  |  |
| `NetWeight` |  | |  |  |  |  |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  |  |  |
| `WhseTaskNetVolume` |  | |  |  |  |  |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  |  |  |
| `WhseTaskCapacityConsumption` |  | |  |  |  |  |
| `PutAwayPhysInventoryIsPlanned` |  | |  | `cast( PutAwayPhysInventoryIsPlanned as abap_boolean )` |  |  |
| `WhseTaskLowStockCheckIsPlanned` |  | |  | `cast( WhseTaskLowStockCheckIsPlanned as abap_boolean )` |  |  |
| `EWMPutAwayPhysInvtryPlnSts` |  | |  |  |  |  |
| `EWMWhseTskLowStkChkPlnSts` |  | |  |  |  |  |
| `EWMPutAwayPhysInvtryExecSts` |  | |  | `cast( '' as /scwm/de_place_inv )` |  |  |
| `EWMWhseTskLowStkChkExecSts` |  | |  | `cast( '' as /scwm/de_lowchk_inv )` |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `WhseTaskGoodsReceiptDateTime` |  | |  |  |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `HazardousSubstanceIndicator` |  | |  |  |  |  |
| `WhseTaskQualityInspectionType` |  | |  |  |  |  |
| `QualityInspectionDocUUID` |  | |  |  |  |  |
| `StockIdentificationOfWhseTask` |  | |  |  |  |  |
| `EWMConsolidationGroup` |  | |  |  |  |  |
| `SourceStorageType` |  | |  |  |  |  |
| `SourceStorageSection` |  | |  |  |  |  |
| `SourceStorageBin` |  | |  |  |  |  |
| `SourceHndlgUnitLogicalPosition` |  | |  |  |  |  |
| `SourceResource` |  | |  |  |  |  |
| `SourceTransportationUnit` |  | |  |  |  |  |
| `EWMSourceLocationType` |  | |  |  |  |  |
| `SourceHandlingUnitUUID` |  | |  |  |  |  |
| `SourceHandlingUnit` |  | |  |  |  |  |
| `DestinationStorageType` |  | |  |  |  |  |
| `DestinationStorageSection` |  | |  |  |  |  |
| `DestinationStorageBin` |  | |  |  |  |  |
| `DestHndlgUnitLogicalPosition` |  | |  |  |  |  |
| `DestinationResource` |  | |  |  |  |  |
| `DestinationTransportationUnit` |  | |  |  |  |  |
| `EWMDestinationLocationType` |  | |  |  |  |  |
| `DestinationHandlingUnitUUID` |  | |  |  |  |  |
| `DestinationHandlingUnit` |  | |  |  |  |  |
| `WhseTaskDestStorageBinDtmndBy` |  | |  |  |  |  |
| `WrhsTaskSubsystemTransmn` |  | |  |  |  |  |
| `WhseTaskPlannedProcessingTime` |  | |  |  |  |  |
| `WhseTaskProcgTimeDetnTimeUnit` |  | |  |  |  |  |
| `WhseTaskRefToValueAddedService` |  | |  |  |  |  |
| `BatchChangeIsNotAllowed` |  | |  |  |  |  |
| `EWMReferenceDocumentCategory` |  | |  |  |  |  |
| `ReferenceDocumentUUID` |  | |  |  |  |  |
| `ReferenceDocumentItemUUID` |  | |  |  |  |  |
| `Wave` |  | |  |  |  |  |
| `EWMWave` |  | |  |  |  |  |
| `WaveItem` |  | |  |  |  |  |
| `EWMWaveItem` |  | |  |  |  |  |
| `WhseTaskTwoStepPickingType` |  | |  |  |  |  |
| `WhseTaskTwoStepPickingRlvnce` |  | |  |  |  |  |
| `DocumentReltdStockDocCat` |  | |  |  |  |  |
| `DocumentReltdStockDocUUID` |  | |  |  |  |  |
| `DocumentReltdStockDocItemUUID` |  | |  |  |  |  |
| `StockIdentificationNumber` |  | |  |  |  |  |
| `KitItemIsCreatedAutomatically` |  | |  |  |  |  |
| `WarehouseTaskUUID` |  | |  |  |  |  |
| `IsDocumentaryBatch` |  | |  | `cast( IsDocumentaryBatch as abap_boolean )` |  |  |
| `ConveyorTechniqueSegment` |  | |  |  |  |  |
| `EWMProductionSupplyArea` |  | |  |  |  |  |
| `ProductionOrder` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `WhseTaskCrtnWhseTmznDateTime` |  | |  |  |  |  |
| `WhseTaskChgWhseTmznDateTime` |  | |  |  |  |  |
| `WhseTaskConfWhseTmznDateTime` |  | |  | `cast ('000000000000000' as timestamp)` |  |  |
| `WhseTskPlndClsgWhseTmznDteTme` |  | |  |  |  |  |
| `Kanban` |  | |  |  |  |  |
| `StockKeepingAlternativeUoM` |  | |  |  |  |  |
| `ActivityArea` |  | |  |  |  |  |
| `Queue` |  | |  |  |  |  |
| `WarehouseOrder` |  | |  |  |  |  |
| `LogicalRecordProgramName` |  | |  |  |  |  |
| `LogicalRecordTransactionCode` |  | |  |  |  |  |
| `EWMDummyFuncForStructureExtn` |  | |  |  |  |  |
| `CertificateText` |  | |  |  |  |  |
| `WhseTaskLastChgUTCDateTime` |  | |  |  |  |  |
| `WarehouseActivityType` |  | |  |  |  |  |
| `WhseTaskPlannedClosingDateTime` |  | |  |  |  |  |
| `ConfirmedByUser` |  | |  | `cast ('' as abap.char( 12 ))` |  |  |
| `ConfirmationUTCDateTime` |  | |  | `cast ('000000000000000' as timestamp)` |  |  |
| `Processor` |  | |  | `cast ('' as abap.char( 12 ))` |  |  |
| `WarehouseTaskExceptionCode` |  | |  | `cast ('' as abap.char( 4 ))` |  |  |
| `BusinessContext` |  | |  | `cast ('' as abap.char( 3 ))` |  |  |
| `BusinessContextExecutionStep` |  | |  | `cast ('' as abap.char( 2 ))` |  |  |
| `ExecutingResourceGroup` |  | |  | `cast ('' as abap.char( 4 ))` |  |  |
| `ExecutingResourceType` |  | |  | `cast ('' as abap.char( 4 ))` |  |  |
| `ActualQuantityInBaseUnit` |  | |  | `cast(0 as abap.quan( 31, 14 ))` |  |  |
| `ActualQuantityInAltvUnit` |  | |  | `cast(0 as abap.quan( 31, 14 ))` |  |  |
| `DifferenceQuantityInAltvUnit` |  | |  | `cast(0 as abap.quan( 31, 14 ))` |  |  |
| `DifferenceQuantityInBaseUnit` |  | |  | `cast(0 as abap.quan( 31, 14 ))` |  |  |
| `WhseTaskSortingSequenceValue` |  | |  |  |  |  |
| `WarehouseOrderSequenceValue` |  | |  |  |  |  |
| `WarehouseOrderActivityArea` |  | |  |  |  |  |
| `WarehouseOrderCreationRule` |  | |  |  |  |  |
| `HomogeneousFullPalletPick` |  | |  |  |  |  |
| `EWMRoute` |  | |  |  |  |  |
| `EWMWaveCategory` |  | |  |  |  |  |
| `EWMCanceledWarehouseTask` |  | |  | `cast( '000000000000' as abap.numc( 12 ) )` |  |  |
| `_Material` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Open and Confirmed Warehouse Tasks'
@ObjectModel.usageType: {serviceQuality: #C,
                         dataClass: #MIXED,
                         sizeCategory: #L}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType:#COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
define view entity I_EWM_WarehouseTask_2
  as select from I_EWM_OpenWarehouseTasks_2
{

  key EWMWarehouse,
  key WarehouseTask,
  key cast('0000' as tapos_no_conv preserving type )         as WarehouseTaskItem,

      IsHandlingUnitWarehouseTask,
      WarehouseProcessType,
      WarehouseProcessCategory,
//    StorageProcess is not supported in cloud
      StorageProcess,
//    ExternalStorageProcessStep is not supported in cloud
      ExternalStorageProcessStep,
      WarehouseTaskStatus,
      CreatedByUser,
      WhseTaskCrtnUTCDateTime,
      WarehouseTaskCodes,
      ExecutingResource,
      WarehouseMovementsReason,
      EWMWarehouseTaskPriority,
      StockItemUUID,
      CurrentNumberOfKeyTable,
      ProductUUID,
      _Material.Product as ProductName,
      _Material,

      BatchUUID,
      EWMStockType,
      StockDocumentCategory,
      case StockDocumentCategory
        when 'SOS'
            then StockDocumentNumber
        when 'PJS'
            then WBSElementExternalID
        else StockDocumentNumber
        end                                                  as StockDocumentNumber,
      //StockDocumentNumber,
      StockItemNumber,
      EWMDocumentCategory,
      EWMStockUsage,
      EWMStockOwner,
      StockOwnerPartnerRole,
      EntitledToDisposeParty,
      EntitledToDisposePartnerRole,
      CounterForStockSeparation,
      Batch,
//    RequirementSegment is not supported in cloud
      RequirementSegment,
//    StockSegment is not supported in cloud
      StockSegment,
      BaseUnit,
      AlternativeUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      TargetQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      TargetQuantityInAltvUnit,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
//    WhseTaskRetentionQuantity is not supported in cloud
      WhseTaskRetentionQuantity,
      HandlingUnitType,
      HandlingUnitTypeGroup,
      @Semantics.quantity.unitOfMeasure: 'WhseTaskNetWeightUnitOfMeasure'
      NetWeight,
      WhseTaskNetWeightUnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'WhseTaskNetVolumeUnitOfMeasure'
      WhseTaskNetVolume,
      WhseTaskNetVolumeUnitOfMeasure,
//    WhseTaskCapacityConsumption is not supported in cloud
      WhseTaskCapacityConsumption,
      /* NOTE: To keep the values of the fields stable the CAST to the a BOOLEAN type is introduced
         => Annotation @Semantics.booleanIndicator was removed -> It's deprecated
         => This cast will lead to incompatible changes => Datatypes of the fields changed
         => It's a necessary correction and therefore its okay! */
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMPutAwayPhysInvtryPlnSts'
      cast( PutAwayPhysInventoryIsPlanned as abap_boolean )  as PutAwayPhysInventoryIsPlanned,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMWhseTskLowStkChkPlnSts'
      cast( WhseTaskLowStockCheckIsPlanned as abap_boolean ) as WhseTaskLowStockCheckIsPlanned,
      EWMPutAwayPhysInvtryPlnSts,
      EWMWhseTskLowStkChkPlnSts,
      cast( '' as /scwm/de_place_inv )                       as EWMPutAwayPhysInvtryExecSts,
      cast( '' as /scwm/de_lowchk_inv )                      as EWMWhseTskLowStkChkExecSts,
      ShelfLifeExpirationDate,
      WhseTaskGoodsReceiptDateTime, // due to ATC check
      CountryOfOrigin,
//    HazardousSubstanceIndicator is not supported in cloud
      HazardousSubstanceIndicator,
      WhseTaskQualityInspectionType,
      QualityInspectionDocUUID,
      StockIdentificationOfWhseTask,
      EWMConsolidationGroup,
      SourceStorageType,
      SourceStorageSection,
      SourceStorageBin,
//    SourceHndlgUnitLogicalPosition is not supported in cloud
      SourceHndlgUnitLogicalPosition,
      SourceResource,
//    SourceTransportationUnit is not supported in cloud
      SourceTransportationUnit,
//    EWMSourceLocationType is not supported in cloud
      EWMSourceLocationType,
      SourceHandlingUnitUUID,
      SourceHandlingUnit,
      DestinationStorageType,
      DestinationStorageSection,
      DestinationStorageBin,
//    DestHndlgUnitLogicalPosition is not supported in cloud   
      DestHndlgUnitLogicalPosition,
      DestinationResource,
//    DestinationTransportationUnit is not supported in cloud
      DestinationTransportationUnit,
//    EWMDestinationLocationType is not supported in cloud   
      EWMDestinationLocationType,
      DestinationHandlingUnitUUID,
      DestinationHandlingUnit,
      WhseTaskDestStorageBinDtmndBy,
//    WrhsTaskSubsystemTransmn is not supported in cloud     
      WrhsTaskSubsystemTransmn,
      @Semantics.quantity.unitOfMeasure: 'WHSETASKNETVOLUMEUNITOFMEASURE'
//    WhseTaskPlannedProcessingTime is not supported in cloud  
      WhseTaskPlannedProcessingTime,
//    WhseTaskProcgTimeDetnTimeUnit is not supported in cloud 
      WhseTaskProcgTimeDetnTimeUnit,
      WhseTaskRefToValueAddedService,
      BatchChangeIsNotAllowed,
      EWMReferenceDocumentCategory,
      ReferenceDocumentUUID,
      ReferenceDocumentItemUUID,
//    Wave is not supported in cloud 
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
//    WaveItem is not supported in cloud 
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWaveItem'
      WaveItem,
      EWMWaveItem,
      WhseTaskTwoStepPickingType,
      WhseTaskTwoStepPickingRlvnce,
      DocumentReltdStockDocCat,
      DocumentReltdStockDocUUID,
      DocumentReltdStockDocItemUUID,
      StockIdentificationNumber,
      KitItemIsCreatedAutomatically,
      WarehouseTaskUUID,
      /* NOTE: To keep the values of the fields stable the CAST to the a BOOLEAN type is introduced
         => Annotation @Semantics.booleanIndicator was removed -> It's deprecated
         => This cast will lead to incompatible changes => Datatypes of the fields changed
         => It's a necessary correction and therefore its okay! */
      cast( IsDocumentaryBatch as abap_boolean )             as IsDocumentaryBatch,
//    ConveyorTechniqueSegment is not supported in cloud      
      ConveyorTechniqueSegment,
      EWMProductionSupplyArea,
      ProductionOrder,
      PurchaseOrder,
      PurchaseOrderItem,
      WhseTaskCrtnWhseTmznDateTime,
      WhseTaskChgWhseTmznDateTime,
      cast  ('000000000000000'  as timestamp)                as WhseTaskConfWhseTmznDateTime,
      WhseTskPlndClsgWhseTmznDteTme,
      Kanban,
      StockKeepingAlternativeUoM,
      ActivityArea,
      Queue,
      WarehouseOrder,
      LogicalRecordProgramName,
      LogicalRecordTransactionCode,
      EWMDummyFuncForStructureExtn,
//    CertificateText is not supported in cloud
      CertificateText,
      WhseTaskLastChgUTCDateTime,

      WarehouseActivityType,
      WhseTaskPlannedClosingDateTime,

      cast (''  as abap.char( 12 ))                          as ConfirmedByUser,
      cast  ('000000000000000'  as timestamp)                as ConfirmationUTCDateTime,
      cast (''  as abap.char( 12 ))                          as Processor,
      cast ('' as abap.char( 4 ))                            as WarehouseTaskExceptionCode,
      cast ('' as abap.char( 3 ))                            as BusinessContext,
      cast ('' as abap.char( 2 ))                            as BusinessContextExecutionStep,

      cast ('' as abap.char( 4 ))                            as ExecutingResourceGroup,
      cast ('' as abap.char( 4 ))                            as ExecutingResourceType,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(0 as abap.quan( 31, 14 ))                         as ActualQuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      cast(0 as abap.quan( 31, 14 ))                         as ActualQuantityInAltvUnit,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      cast(0 as abap.quan( 31, 14 ))                         as DifferenceQuantityInAltvUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(0 as abap.quan( 31, 14 ))                         as DifferenceQuantityInBaseUnit,

      WhseTaskSortingSequenceValue,
      WarehouseOrderSequenceValue,
      WarehouseOrderActivityArea,
      WarehouseOrderCreationRule,
      HomogeneousFullPalletPick,
      EWMRoute,
      EWMWaveCategory,
      cast( '000000000000' as abap.numc( 12 ) )                 as EWMCanceledWarehouseTask
}
union all select from I_EWM_ConfirmedWarehouseTask_2 as _WarehouseTask
  join                I_EWM_WarehouseProcessCategory as wpc on _WarehouseTask.WarehouseProcessCategory = wpc.WarehouseProcessCategory
  association [0..1] to I_EWM_WarehouseTaskLog as WarehouseTaskLog on _WarehouseTask.EWMWarehouse = WarehouseTaskLog.EWMWarehouse and
                                                                     _WarehouseTask.WarehouseTask = WarehouseTaskLog.WarehouseTask                                                                      
{
  key _WarehouseTask.EWMWarehouse,
  key _WarehouseTask.WarehouseTask,
  key _WarehouseTask.WarehouseTaskItem,

      _WarehouseTask.IsHandlingUnitWarehouseTask,
      _WarehouseTask.WarehouseProcessType,
      _WarehouseTask.WarehouseProcessCategory,
      _WarehouseTask.StorageProcess,
      _WarehouseTask.ExternalStorageProcessStep,
      _WarehouseTask.WarehouseTaskStatus,
      _WarehouseTask.CreatedByUser,
      _WarehouseTask.WhseTaskCrtnUTCDateTime,
      _WarehouseTask.WarehouseTaskCodes,
      _WarehouseTask.ExecutingResource,
      _WarehouseTask.WarehouseMovementsReason,
      _WarehouseTask.EWMWarehouseTaskPriority,
      _WarehouseTask.StockItemUUID,
      _WarehouseTask.CurrentNumberOfKeyTable,
      _WarehouseTask.ProductUUID,
      _WarehouseTask.ProductName,
      _WarehouseTask._Material,
      _WarehouseTask.BatchUUID,
      _WarehouseTask.EWMStockType,
      _WarehouseTask.StockDocumentCategory,

      case _WarehouseTask.StockDocumentCategory
        when 'SOS'
            then _WarehouseTask.StockDocumentNumber

        when 'PJS'
            then _WarehouseTask.WBSElementExternalID
        else _WarehouseTask.StockDocumentNumber
        end                                                                 as StockDocumentNumber,
      //StockDocumentNumber,
      _WarehouseTask.StockItemNumber,
      _WarehouseTask.EWMDocumentCategory,
      _WarehouseTask.EWMStockUsage,
      _WarehouseTask.EWMStockOwner,
      _WarehouseTask.StockOwnerPartnerRole,
      _WarehouseTask.EntitledToDisposeParty,
      _WarehouseTask.EntitledToDisposePartnerRole,
      _WarehouseTask.CounterForStockSeparation,
      _WarehouseTask.Batch,
      _WarehouseTask.RequirementSegment,
      _WarehouseTask.StockSegment,
      _WarehouseTask.BaseUnit,
      _WarehouseTask.AlternativeUnit,
      _WarehouseTask.TargetQuantityInBaseUnit,
      _WarehouseTask.TargetQuantityInAltvUnit,
      _WarehouseTask.WhseTaskRetentionQuantity,
      _WarehouseTask.HandlingUnitType,
      cast ('' as abap.char(4) )                                            as HandlingUnitTypeGroup,
      _WarehouseTask.NetWeight,
      _WarehouseTask.WhseTaskNetWeightUnitOfMeasure,
      _WarehouseTask.WhseTaskNetVolume,
      _WarehouseTask.WhseTaskNetVolumeUnitOfMeasure,
      _WarehouseTask.WhseTaskCapacityConsumption,
      /* NOTE: To keep the values of the fields stable the CAST to the a BOOLEAN type is introduced
         => Annotation @Semantics.booleanIndicator was removed -> It's deprecated
         => This cast will lead to incompatible changes => Datatypes of the fields changed
         => It's a necessary correction and therefore its okay! */
      cast( _WarehouseTask.PutAwayPhysInventoryIsPlanned  as abap_boolean)  as PutAwayPhysInventoryIsPlanned,
      cast( _WarehouseTask.WhseTaskLowStockCheckIsPlanned as abap_boolean ) as WhseTaskLowStockCheckIsPlanned,
      _WarehouseTask.EWMPutAwayPhysInvtryPlnSts,
      _WarehouseTask.EWMWhseTskLowStkChkPlnSts,
      _WarehouseTask.EWMPutAwayPhysInvtryExecSts,
      _WarehouseTask.EWMWhseTskLowStkChkExecSts,
      _WarehouseTask.ShelfLifeExpirationDate,
      _WarehouseTask.WhseTaskGoodsReceiptDateTime,
      _WarehouseTask.CountryOfOrigin,
      _WarehouseTask.HazardousSubstanceIndicator,
      _WarehouseTask.WhseTaskQualityInspectionType,
      _WarehouseTask.QualityInspectionDocUUID,
      _WarehouseTask.StockIdentificationOfWhseTask,
      _WarehouseTask.EWMConsolidationGroup,
      _WarehouseTask.SourceStorageType,
      _WarehouseTask.SourceStorageSection,
      _WarehouseTask.SourceStorageBin,
      _WarehouseTask.SourceHndlgUnitLogicalPosition,
      _WarehouseTask.SourceResource,
      _WarehouseTask.SourceTransportationUnit,
      _WarehouseTask.EWMSourceLocationType,
      _WarehouseTask.SourceHandlingUnitUUID,
      _WarehouseTask.SourceHandlingUnit,
      _WarehouseTask.DestinationStorageType,
      _WarehouseTask.DestinationStorageSection,
      _WarehouseTask.DestinationStorageBin,
      _WarehouseTask.DestHndlgUnitLogicalPosition,
      _WarehouseTask.DestinationResource,
      _WarehouseTask.DestinationTransportationUnit,
      _WarehouseTask.EWMDestinationLocationType,
      _WarehouseTask.DestinationHandlingUnitUUID,
      _WarehouseTask.DestinationHandlingUnit,
      _WarehouseTask.WhseTaskDestStorageBinDtmndBy,
      _WarehouseTask.WrhsTaskSubsystemTransmn,
      _WarehouseTask.WhseTaskPlannedProcessingTime,
      _WarehouseTask.WhseTaskProcgTimeDetnTimeUnit,
      _WarehouseTask.WhseTaskRefToValueAddedService,
      _WarehouseTask.BatchChangeIsNotAllowed,
      _WarehouseTask.EWMReferenceDocumentCategory,
      _WarehouseTask.ReferenceDocumentUUID,
      _WarehouseTask.ReferenceDocumentItemUUID,
      _WarehouseTask.Wave,
      _WarehouseTask.EWMWave,
      _WarehouseTask.WaveItem,
      _WarehouseTask.EWMWaveItem,
      _WarehouseTask.WhseTaskTwoStepPickingType,
      _WarehouseTask.WhseTaskTwoStepPickingRlvnce,
      _WarehouseTask.DocumentReltdStockDocCat,
      _WarehouseTask.DocumentReltdStockDocUUID,
      _WarehouseTask.DocumentReltdStockDocItemUUID,
      _WarehouseTask.StockIdentificationNumber,
      _WarehouseTask.KitItemIsCreatedAutomatically,
      _WarehouseTask.WarehouseTaskUUID,
      /* NOTE: To keep the values of the fields stable the CAST to the a BOOLEAN type is introduced
         => Annotation @Semantics.booleanIndicator was removed -> It's deprecated
         => This cast will lead to incompatible changes => Datatypes of the fields changed
         => It's a necessary correction and therefore its okay! */
      cast( _WarehouseTask.IsDocumentaryBatch as abap_boolean )             as IsDocumentaryBatch,
      _WarehouseTask.ConveyorTechniqueSegment,
      _WarehouseTask.EWMProductionSupplyArea,
      _WarehouseTask.ProductionOrder,
      _WarehouseTask.PurchaseOrder,
      _WarehouseTask.PurchaseOrderItem,
      _WarehouseTask.WhseTaskCrtnWhseTmznDateTime,
      _WarehouseTask.WhseTaskChgWhseTmznDateTime,
      _WarehouseTask.WhseTaskConfWhseTmznDateTime,
      cast  ('000000000000000'  as timestamp)                               as WhseTskPlndClsgWhseTmznDteTme,
      _WarehouseTask.Kanban,
      _WarehouseTask.StockKeepingAlternativeUoM,
      _WarehouseTask.ActivityArea,
      _WarehouseTask.Queue,
      _WarehouseTask.WarehouseOrder,
      _WarehouseTask.LogicalRecordProgramName,
      _WarehouseTask.LogicalRecordTransactionCode,
      _WarehouseTask.EWMDummyFuncForStructureExtn,
      _WarehouseTask.CertificateText,
      _WarehouseTask.WhseTaskLastChgUTCDateTime,

      cast ('' as abap.char( 4 ))                                           as WarehouseActivityType,
//      cast  ('000000000000000'  as timestamp)                               as WhseTaskPlannedClosingDateTime,
      WarehouseTaskLog.WhseTaskPlannedClosingDateTime,
      _WarehouseTask.ConfirmedByUser,
      _WarehouseTask.ConfirmationUTCDateTime,
      _WarehouseTask.Processor,
      _WarehouseTask.WarehouseTaskExceptionCode,
      _WarehouseTask.BusinessContext,
      _WarehouseTask.BusinessContextExecutionStep,

      _WarehouseTask._Resource.ExecutingResourceGroup,
      _WarehouseTask._Resource.ExecutingResourceType,
      _WarehouseTask.ActualQuantityInBaseUnit,
      _WarehouseTask.ActualQuantityInAltvUnit,
      _WarehouseTask.DifferenceQuantityInAltvUnit,
      _WarehouseTask.DifferenceQuantityInBaseUnit,

//      cast (0 as abap.quan( 10, 0 ))                                        as WhseTaskSortingSequenceValue,
//      cast (0 as abap.fltp( 16, 16 ))                                       as WarehouseOrderSequenceValue,
//      cast ('' as abap.char(4) )                                            as WarehouseOrderActivityArea,
//      cast ('' as abap.char(4) )                                            as WarehouseOrderCreationRule,
//      cast ('' as abap.char(1) )                                            as HomogeneousFullPalletPick,
//      cast ('' as abap.char(10) )                                           as EWMRoute,
      WarehouseTaskLog.WhseTaskSortingSequenceValue,
      WarehouseTaskLog.WarehouseOrderSequenceValue,
      WarehouseTaskLog.WarehouseOrderActivityArea,
      WarehouseTaskLog.WarehouseOrderCreationRule,
      WarehouseTaskLog.HomogeneousFullPalletPick,
      WarehouseTaskLog.EWMRoute,      
      WarehouseTaskLog.EWMWaveCategory,
      _WarehouseTask.EWMCanceledWarehouseTask
}
where
  wpc.WarehouseProcessTypeIsAssigned = 'X'
```
