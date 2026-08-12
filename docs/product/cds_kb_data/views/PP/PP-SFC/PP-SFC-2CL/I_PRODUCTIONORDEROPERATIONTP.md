---
name: I_PRODUCTIONORDEROPERATIONTP
description: "Production OrderOPERATIONTP"
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDEROPERATIONTP

**Production OrderOPERATIONTP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderInternalID` | ✓ | |  |  |  |  |
| `OrderOperationInternalID` | ✓ | |  |  |  |  |
| `ProductionOrder` |  | |  |  |  |  |
| `ProductionOrderSequence` |  | |  |  |  |  |
| `ProductionOrderOperation` |  | |  |  |  |  |
| `ProductionOrderSubOperation` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `OperationStandardTextCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `OperationConfirmation` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `OperationSetupGroupCategory` |  | |  |  |  |  |
| `OperationSetupGroup` |  | |  |  |  |  |
| `OperationSetupType` |  | |  |  |  |  |
| `LeadTimeReductionStrategy` |  | |  |  |  |  |
| `OpSchedldReductionLevel` |  | |  |  |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `BillOfOperationsSequence` |  | |  |  |  |  |
| `BOOOperationInternalID` |  | |  |  |  |  |
| `NumberOfOperationConfirmations` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `CapacityRequirement` |  | |  |  |  |  |
| `CapacityRequirementItem` |  | |  |  |  |  |
| `ExtProcgOperationHasSubcontrg` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchaseOutlineAgreement` |  | |  |  |  |  |
| `PurchaseOutlineAgreementItem` |  | |  |  |  |  |
| `PurgInfoRecNonStockItmSortTerm` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchaseRequisitionPlndDlvDurn` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `OpErlstSchedldExecStrtDte` |  | |  |  |  |  |
| `OpErlstSchedldExecStrtTme` |  | |  |  |  |  |
| `OpErlstSchedldProcgStrtDte` |  | |  |  |  |  |
| `OpErlstSchedldProcgStrtTme` |  | |  |  |  |  |
| `OpErlstSchedldTrdwnStrtDte` |  | |  |  |  |  |
| `OpErlstSchedldTrdwnStrtTme` |  | |  |  |  |  |
| `OpErlstSchedldExecEndDte` |  | |  |  |  |  |
| `OpErlstSchedldExecEndTme` |  | |  |  |  |  |
| `OpLtstSchedldExecStrtDte` |  | |  |  |  |  |
| `OpLtstSchedldExecStrtTme` |  | |  |  |  |  |
| `OpLtstSchedldProcgStrtDte` |  | |  |  |  |  |
| `OpLtstSchedldProcgStrtTme` |  | |  |  |  |  |
| `OpLtstSchedldTrdwnStrtDte` |  | |  |  |  |  |
| `OpLtstSchedldTrdwnStrtTme` |  | |  |  |  |  |
| `OpLtstSchedldExecEndDte` |  | |  |  |  |  |
| `OpLtstSchedldExecEndTme` |  | |  |  |  |  |
| `SchedldFcstdLatestStartTime` |  | |  |  |  |  |
| `OperationConfirmedStartDate` |  | |  |  |  |  |
| `OperationConfirmedEndDate` |  | |  |  |  |  |
| `OpActualExecutionStartDate` |  | |  |  |  |  |
| `OpActualExecutionStartTime` |  | |  |  |  |  |
| `OpActualSetupEndDate` |  | |  |  |  |  |
| `OpActualSetupEndTime` |  | |  |  |  |  |
| `OpActualProcessingStartDate` |  | |  |  |  |  |
| `OpActualProcessingStartTime` |  | |  |  |  |  |
| `OpActualProcessingEndDate` |  | |  |  |  |  |
| `OpActualProcessingEndTime` |  | |  |  |  |  |
| `OpActualTeardownStartDate` |  | |  |  |  |  |
| `OpActualTeardownStartTme` |  | |  |  |  |  |
| `OpActualExecutionEndDate` |  | |  |  |  |  |
| `OpActualExecutionEndTime` |  | |  |  |  |  |
| `ActualForecastEndDate` |  | |  |  |  |  |
| `ActualForecastEndTime` |  | |  |  |  |  |
| `EarliestScheduledWaitStartDate` |  | |  |  |  |  |
| `EarliestScheduledWaitStartTime` |  | |  |  |  |  |
| `EarliestScheduledWaitEndDate` |  | |  |  |  |  |
| `EarliestScheduledWaitEndTime` |  | |  |  |  |  |
| `LatestScheduledWaitStartDate` |  | |  |  |  |  |
| `LatestScheduledWaitStartTime` |  | |  |  |  |  |
| `LatestScheduledWaitEndDate` |  | |  |  |  |  |
| `LatestScheduledWaitEndTime` |  | |  |  |  |  |
| `BreakDurationUnit` |  | |  |  |  |  |
| `PlannedBreakDuration` |  | |  |  |  |  |
| `MaximumWaitDurationUnit` |  | |  |  |  |  |
| `MaximumWaitDuration` |  | |  |  |  |  |
| `MinimumWaitDurationUnit` |  | |  |  |  |  |
| `MinimumWaitDuration` |  | |  |  |  |  |
| `StandardMoveDurationUnit` |  | |  |  |  |  |
| `StandardMoveDuration` |  | |  |  |  |  |
| `StandardQueueDurationUnit` |  | |  |  |  |  |
| `StandardQueueDuration` |  | |  |  |  |  |
| `MinimumQueueDurationUnit` |  | |  |  |  |  |
| `MinimumQueueDuration` |  | |  |  |  |  |
| `MinimumMoveDurationUnit` |  | |  |  |  |  |
| `MinimumMoveDuration` |  | |  |  |  |  |
| `ScheduledMoveDuration` |  | |  |  |  |  |
| `ScheduledMoveDurationUnit` |  | |  |  |  |  |
| `ScheduledQueueDuration` |  | |  |  |  |  |
| `ScheduledQueueDurationUnit` |  | |  |  |  |  |
| `ScheduledWaitDuration` |  | |  |  |  |  |
| `ScheduledWaitDurationUnit` |  | |  |  |  |  |
| `OpPlannedSetupDurn` |  | |  |  |  |  |
| `OpPlannedSetupDurnUnit` |  | |  |  |  |  |
| `OpPlannedProcessingDurn` |  | |  |  |  |  |
| `OpPlannedProcessingDurnUnit` |  | |  |  |  |  |
| `OpPlannedTeardownDurn` |  | |  |  |  |  |
| `OpPlannedTeardownDurnUnit` |  | |  |  |  |  |
| `StartDateOffsetReferenceCode` |  | |  |  |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |  |  |
| `StartDateOffsetDuration` |  | |  |  |  |  |
| `EndDateOffsetReferenceCode` |  | |  |  |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |  |  |
| `EndDateOffsetDuration` |  | |  |  |  |  |
| `OperationUnit` |  | |  |  |  |  |
| `OpQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OpQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OperationScrapPercent` |  | |  |  |  |  |
| `OperationReferenceQuantity` |  | |  |  |  |  |
| `OpPlannedTotalQuantity` |  | |  |  |  |  |
| `OpPlannedScrapQuantity` |  | |  |  |  |  |
| `OpTotalConfirmedYieldQty` |  | |  |  |  |  |
| `OpTotalConfirmedScrapQty` |  | |  |  |  |  |
| `OperationConfirmedReworkQty` |  | |  |  |  |  |
| `OpWorkQuantityUnit1` |  | |  |  |  |  |
| `OpWorkQuantityUnit2` |  | |  |  |  |  |
| `OpWorkQuantityUnit3` |  | |  |  |  |  |
| `OpWorkQuantityUnit4` |  | |  |  |  |  |
| `OpWorkQuantityUnit5` |  | |  |  |  |  |
| `OpWorkQuantityUnit6` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit1` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty1` |  | |  |  |  |  |
| `CostCtrActivityType1` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit2` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty2` |  | |  |  |  |  |
| `CostCtrActivityType2` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit3` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty3` |  | |  |  |  |  |
| `CostCtrActivityType3` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit4` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty4` |  | |  |  |  |  |
| `CostCtrActivityType4` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit5` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty5` |  | |  |  |  |  |
| `CostCtrActivityType5` |  | |  |  |  |  |
| `WorkCenterStandardWorkQtyUnit6` |  | |  |  |  |  |
| `WorkCenterStandardWorkQty6` |  | |  |  |  |  |
| `CostCtrActivityType6` |  | |  |  |  |  |
| `StandardWorkQtyDetnType` |  | |  |  |  |  |
| `StandardWorkQtyDetnYear` |  | |  |  |  |  |
| `StandardWorkQuantityCalcBasis` |  | |  |  |  |  |
| `StandardWorkQuantityReference` |  | |  |  |  |  |
| `OperationSplitIsRequired` |  | |  |  |  |  |
| `MaximumNumberOfSplits` |  | |  |  |  |  |
| `ActualNumberOfSplits` |  | |  |  |  |  |
| `MinProcessingDurationPerSplit` |  | |  |  |  |  |
| `MinProcessingDurnPerSplitUnit` |  | |  |  |  |  |
| `OverlapMinimumDuration` |  | |  |  |  |  |
| `OverlapMinimumDurationUnit` |  | |  |  |  |  |
| `OverlapMinimumTransferQty` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `BusinessProcessEntryUnit` |  | |  |  |  |  |
| `BusinessProcessConfirmedQty` |  | |  |  |  |  |
| `NoFurtherBusinessProcQtyIsExpd` |  | |  |  |  |  |
| `_OperationCapacity` | | ✓ | | | | |
| `_Sequence` | | ✓ | | | | |
| `_ProductionOrder` | | ✓ | | | | |
| `_OperationComponent` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderOperation'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 

@EndUserText.label: 'Production Order Operation - TP'

define view entity I_ProductionOrderOperationTP 
as projection on R_ProductionOrderOperationTP as Operation 
{

      // Technical Key
  key OrderInternalID,
  key OrderOperationInternalID,
  
      // Semantic Key
      ProductionOrder,
      ProductionOrderSequence,
      ProductionOrderOperation,
      ProductionOrderSubOperation,
      
      // Text
      OperationText,
      OperationStandardTextCode,
      
      // Assignments
      Plant,
      WorkCenter,
      WorkCenterInternalID,
      OperationControlProfile,
      OperationConfirmation,
      ChangeNumber,
      ObjectInternalID,
      Reservation,
      NumberOfConfirmationSlips,
      EmployeeWageType,
      EmployeeWageGroup,
      EmployeeSuitability,
      NumberOfTimeTickets,
      NumberOfEmployees,
      OperationSetupGroupCategory,
      OperationSetupGroup,
      OperationSetupType,
      LeadTimeReductionStrategy,
      OpSchedldReductionLevel,

      // Assignments BOO      
      BillOfOperationsType,
      BillOfOperationsGroup,
      BillOfOperationsVariant,
      // BillOfOperationsVersion,  // only supported in shopfloor routings - PEO Private Cloud
      BillOfOperationsSequence,
      BOOOperationInternalID,
      
      NumberOfOperationConfirmations,
      FactoryCalendar,
      CapacityRequirement,
      CapacityRequirementItem,

      // External processing / Purchasing
      @Semantics.booleanIndicator
      ExtProcgOperationHasSubcontrg,
      PurchasingInfoRecord,
      PurchaseOutlineAgreement,
      PurchaseOutlineAgreementItem,
      PurgInfoRecNonStockItmSortTerm,
      Supplier,
      PurchaseRequisitionPlndDlvDurn,
      CostElement,           
      GoodsRecipientName,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      PurchasingOrganization,
      PurchasingGroup,
      NumberOfOperationPriceUnits,
      OpExternalProcessingCurrency,
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      MaterialGroup,
      UnloadingPointName,
      InspectionLotType,
   
      // Dates and Times
      OpErlstSchedldExecStrtDte,
      OpErlstSchedldExecStrtTme,
      OpErlstSchedldProcgStrtDte,
      OpErlstSchedldProcgStrtTme,
      OpErlstSchedldTrdwnStrtDte,
      OpErlstSchedldTrdwnStrtTme,
      OpErlstSchedldExecEndDte,
      OpErlstSchedldExecEndTme,
      OpLtstSchedldExecStrtDte,
      OpLtstSchedldExecStrtTme,
      OpLtstSchedldProcgStrtDte,
      OpLtstSchedldProcgStrtTme,
      OpLtstSchedldTrdwnStrtDte,
      OpLtstSchedldTrdwnStrtTme,
      OpLtstSchedldExecEndDte,
      OpLtstSchedldExecEndTme,
      SchedldFcstdLatestStartTime,
      OperationConfirmedStartDate,
      OperationConfirmedEndDate,
      OpActualExecutionStartDate,
      OpActualExecutionStartTime,
      OpActualSetupEndDate,
      OpActualSetupEndTime,
      OpActualProcessingStartDate,
      OpActualProcessingStartTime,
      OpActualProcessingEndDate,
      OpActualProcessingEndTime,
      OpActualTeardownStartDate,
      OpActualTeardownStartTme,
      OpActualExecutionEndDate,
      OpActualExecutionEndTime,
      ActualForecastEndDate,
      ActualForecastEndTime,
      EarliestScheduledWaitStartDate,
      EarliestScheduledWaitStartTime,
      EarliestScheduledWaitEndDate,
      EarliestScheduledWaitEndTime,
      LatestScheduledWaitStartDate,
      LatestScheduledWaitStartTime,
      LatestScheduledWaitEndDate,
      LatestScheduledWaitEndTime,
      
      // Durations
      BreakDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'BreakDurationUnit'
      PlannedBreakDuration,
      MaximumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumWaitDurationUnit'
      MaximumWaitDuration,
      MinimumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardMoveDurationUnit'
      MinimumWaitDuration,
      StandardMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardQueueDurationUnit'
      StandardMoveDuration,
      StandardQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumQueueDurationUnit'
      StandardQueueDuration,
      MinimumQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumMoveDurationUnit'
      MinimumQueueDuration,
      MinimumMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumMoveDurationUnit'
      MinimumMoveDuration,
      @Semantics.quantity.unitOfMeasure: 'ScheduledMoveDurationUnit'
      ScheduledMoveDuration,
      ScheduledMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ScheduledQueueDurationUnit'
      ScheduledQueueDuration,
      ScheduledQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ScheduledWaitDurationUnit'
      ScheduledWaitDuration,
      ScheduledWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OpPlannedSetupDurnUnit'
      OpPlannedSetupDurn,
      OpPlannedSetupDurnUnit,
      @Semantics.quantity.unitOfMeasure: 'OpPlannedProcessingDurnUnit'
      OpPlannedProcessingDurn,
      OpPlannedProcessingDurnUnit,
      @Semantics.quantity.unitOfMeasure: 'OpPlannedTeardownDurnUnit'
      OpPlannedTeardownDurn,
      OpPlannedTeardownDurnUnit,
      StartDateOffsetReferenceCode,
      StartDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
      StartDateOffsetDuration,
      EndDateOffsetReferenceCode,
      EndDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
      EndDateOffsetDuration,
      
      // Quantities and UoM
      OperationUnit,
      OpQtyToBaseQtyDnmntr,
      OpQtyToBaseQtyNmrtr,
      OperationScrapPercent,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationReferenceQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OpPlannedTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OpPlannedScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OpTotalConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OpTotalConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationConfirmedReworkQty,
      -- Work Quantities
      OpWorkQuantityUnit1,
      OpWorkQuantityUnit2,
      OpWorkQuantityUnit3,
      OpWorkQuantityUnit4,
      OpWorkQuantityUnit5,
      OpWorkQuantityUnit6,
      WorkCenterStandardWorkQtyUnit1,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit1'
      WorkCenterStandardWorkQty1,
      CostCtrActivityType1,
      WorkCenterStandardWorkQtyUnit2,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit2'
      WorkCenterStandardWorkQty2,
      CostCtrActivityType2,
      WorkCenterStandardWorkQtyUnit3,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit3'
      WorkCenterStandardWorkQty3,
      CostCtrActivityType3,
      WorkCenterStandardWorkQtyUnit4,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit4'
      WorkCenterStandardWorkQty4,
      CostCtrActivityType4,
      WorkCenterStandardWorkQtyUnit5,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit5'
      WorkCenterStandardWorkQty5,
      CostCtrActivityType5,
      WorkCenterStandardWorkQtyUnit6,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit6'
      WorkCenterStandardWorkQty6,
      CostCtrActivityType6,


      // Standard value calculation - determintation of standard values
      StandardWorkQtyDetnType,
      StandardWorkQtyDetnYear,
      StandardWorkQuantityCalcBasis,
      StandardWorkQuantityReference,
      // Splitting
      OperationSplitIsRequired,
      MaximumNumberOfSplits,
      ActualNumberOfSplits,
      @Semantics.quantity.unitOfMeasure: 'MinProcessingDurnPerSplitUnit'
      MinProcessingDurationPerSplit,
      MinProcessingDurnPerSplitUnit,
      /// Overlap
      //      OperationOverlappingIsRequired,
      //      OperationOverlappingIsPossible,
      //      OperationsIsAlwaysOverlapping,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumDurationUnit'
      OverlapMinimumDuration,
      OverlapMinimumDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OverlapMinimumTransferQty,

      // Business Process
      BusinessProcess,
      BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      BusinessProcessConfirmedQty,
      NoFurtherBusinessProcQtyIsExpd,
      
      // Compositions
      _OperationCapacity : redirected to composition child I_ProdnOrdOperationCapacityTP,
      
      // Associations
      _Sequence : redirected to parent I_ProductionOrderSequenceTP,
      _ProductionOrder : redirected to I_ProductionOrderTP,
      _OperationComponent : redirected to I_ProductionOrderOpComponentTP,
      
      @Consumption.hidden: true
      _Supplier,              // for DCLS
      @Consumption.hidden: true
      _SupplierCompanyByPlant // for DCLS

}
```
