---
name: I_MFGORDEROPERATIONWITHSTATUS
description: Mfgorderoperationwithstatus
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
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDEROPERATIONWITHSTATUS

**Mfgorderoperationwithstatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MfgOrderInternalID` | `afvg.MfgOrderInternalID` |
| key `OrderOperationInternalID` | `afvg.OrderOperationInternalID` |
| `ManufacturingOrder` | `afvg.ManufacturingOrder` |
| `ManufacturingOrderSequence` | `afvg.ManufacturingOrderSequence` |
| `ManufacturingOrderOperation` | `cast(afvg.ManufacturingOrderOperation as pph_vornr preserving type)` |
| `ManufacturingOrderOperation_2` | `afvg.ManufacturingOrderOperation_2` |
| `ManufacturingOrderSubOperation` | `cast(afvg.ManufacturingOrderSubOperation as pph_uvorn preserving type)` |
| `ManufacturingOrdSubOperation_2` | `afvg.ManufacturingOrdSubOperation_2` |
| `ManufacturingOrderCategory` | `afvg.ManufacturingOrderCategory` |
| `ManufacturingOrderType` | `afvg.ManufacturingOrderType` |
| `ProductionSupervisor` | `afvg.ProductionSupervisor` |
| `MRPController` | `afvg.MRPController` |
| `ResponsiblePlannerGroup` | `afvg.ResponsiblePlannerGroup` |
| `ProductConfiguration` | `afvg.ProductConfiguration` |
| `InspectionLot` | `afvg.InspectionLot` |
| `ManufacturingOrderImportance` | `afvg.ManufacturingOrderImportance` |
| `MfgOrderOperationText` | `afvg.MfgOrderOperationText` |
| `OperationHasLongText` | `afvg.OperationHasLongText` |
| `LongTextLanguageCode` | `afvg.Language` |
| `OperationStandardTextCode` | `afvg.OperationStandardTextCode` |
| `OperationIsToBeDeleted` | `afvg.OperationIsToBeDeleted` |
| `MfgOrderOperationIsPhase` | `afvg.MfgOrderOperationIsPhase` |
| `MfgOrderPhaseSuperiorOperation` | `afvg.MfgOrderPhaseSuperiorOperation` |
| `SuperiorOperation_2` | `afvg.SuperiorOperation_2` |
| `NumberOfCapacities` | `afvg.NumberOfCapacities` |
| `NumberOfConfirmationSlips` | `afvg.NumberOfConfirmationSlips` |
| `OperationImportance` | `afvg.OperationImportance` |
| `OperationIsCreated` | `stat.OperationIsCreated` |
| `OperationIsReleased` | `stat.OperationIsReleased` |
| `OperationIsPrinted` | `stat.OperationIsPrinted` |
| `OperationIsConfirmed` | `stat.OperationIsConfirmed` |
| `OperationIsPartiallyConfirmed` | `stat.OperationIsPartiallyConfirmed` |
| `OperationIsDeleted` | `stat.OperationIsDeleted` |
| `OperationIsTechlyCompleted` | `stat.OperationIsTechlyCompleted` |
| `OperationIsClosed` | `stat.OperationIsClosed` |
| `OperationIsConfdByMilestone` | `cast(stat.OperationIsConfdByMilestone as isconfirmedbymilestone preserving type)` |
| `OperationIsManuallyConfirmed` | `cast(stat.OperationIsManuallyConfirmed as isconfirmedmanually preserving type)` |
| `OperationIsScheduled` | `stat.OperationIsScheduled` |
| `OperationIsGenerated` | `cast(stat.OperationIsGenerated as operationisgenerated preserving type)` |
| `OperationIsPartiallyDelivered` | `stat.OperationIsPartiallyDelivered` |
| `OperationIsDelivered` | `stat.OperationIsDelivered` |
| `ControlRecipeIsCreated` | `cast(stat.ControlRecipeIsCreated as controlrecipeiscreated preserving type)` |
| `SuperiorOperationInternalID` | `afvg.SuperiorOperationInternalID` |
| `Plant` | `afvg.Plant` |
| `WorkCenterInternalID` | `afvg.WorkCenterInternalID` |
| `WorkCenterTypeCode` | `afvg.WorkCenterTypeCode` |
| `WorkCenterTypeCode_2` | `afvg.WorkCenterTypeCode_2` |
| `OperationControlProfile` | `afvg.OperationControlProfile` |
| `ControlRecipeDestination` | `afvg.ControlRecipeDestination` |
| `OperationConfirmation` | `afvg.OperationConfirmation` |
| `NumberOfOperationConfirmations` | `afvg.NumberOfOperationConfirmations` |
| `FactoryCalendar` | `afvg.FactoryCalendar` |
| `CapacityRequirement` | `afvg.CapacityRequirement` |
| `CapacityRequirementItem` | `afvg.CapacityRequirementItem` |
| `ChangeNumber` | `afvg.ChangeNumber` |
| `ObjectInternalID` | `afvg.ObjectInternalID` |
| `OperationTrackingNumber` | `afvg.OperationTrackingNumber` |
| `BillOfOperationsType` | `afvg.BillOfOperationsType` |
| `BillOfOperationsGroup` | `afvg.BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `afvg.BillOfOperationsVariant` |
| `BillOfOperationsSequence` | `afvg.BillOfOperationsSequence` |
| `BOOOperationInternalID` | `afvg.BOOOperationInternalID` |
| `BillOfOperationsVersion` | `afvg.BillOfOperationsVersion` |
| `BillOfMaterialCategory` | `afvg.BillOfMaterialCategory` |
| `BillOfMaterialInternalID` | `afvg.BillOfMaterialInternalID` |
| `BillOfMaterialInternalID_2` | `afvg.BillOfMaterialInternalID_2` |
| `BillOfMaterialItemNodeNumber` | `afvg.BillOfMaterialItemNodeNumber` |
| `BOMItemNodeCount` | `afvg.BOMItemNodeCount` |
| `ExtProcgOperationHasSubcontrg` | `afvg.ExtProcgOperationHasSubcontrg` |
| `PurchasingOrganization` | `afvg.PurchasingOrganization` |
| `PurchasingGroup` | `afvg.PurchasingGroup` |
| `PurchaseRequisition` | `afvg.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `afvg.PurchaseRequisitionItem` |
| `PurchaseOrder` | `afvg.PurchaseOrder` |
| `PurchaseOrderItem` | `afvg.PurchaseOrderItem` |
| `PurchaseOutlineAgreement` | `afvg.PurchaseOutlineAgreement` |
| `PurchaseOutlineAgreementItem` | `afvg.PurchaseOutlineAgreementItem` |
| `PurchasingInfoRecord` | `afvg.PurchasingInfoRecord` |
| `PurgInfoRecdDataIsFixed` | `afvg.PurgInfoRecdDataIsFixed` |
| `PurchasingInfoRecordCategory` | `afvg.PurchasingInfoRecordCategory` |
| `Supplier` | `afvg.Supplier` |
| `GoodsRecipientName` | `afvg.GoodsRecipientName` |
| `UnloadingPointName` | `afvg.UnloadingPointName` |
| `OpExternalProcessingCurrency` | `afvg.OpExternalProcessingCurrency` |
| `OpExternalProcessingPrice` | `afvg.OpExternalProcessingPrice` |
| `NumberOfOperationPriceUnits` | `afvg.NumberOfOperationPriceUnits` |
| `CompanyCode` | `afvg.CompanyCode` |
| `BusinessArea` | `afvg.BusinessArea` |
| `ControllingArea` | `afvg.ControllingArea` |
| `ProfitCenter` | `afvg.ProfitCenter` |
| `RequestingCostCenter` | `afvg.RequestingCostCenter` |
| `CostElement` | `afvg.CostElement` |
| `CostingVariant` | `afvg.CostingVariant` |
| `CostingSheet` | `afvg.CostingSheet` |
| `CostEstimate` | `afvg.CostEstimate` |
| `ControllingObjectCurrency` | `afvg.ControllingObjectCurrency` |
| `ControllingObjectClass` | `afvg.ControllingObjectClass` |
| `FunctionalArea` | `afvg.FunctionalArea` |
| `TaxJurisdiction` | `afvg.TaxJurisdiction` |
| `EmployeeWageType` | `afvg.EmployeeWageType` |
| `EmployeeWageGroup` | `afvg.EmployeeWageGroup` |
| `EmployeeSuitability` | `afvg.EmployeeSuitability` |
| `NumberOfTimeTickets` | `afvg.NumberOfTimeTickets` |
| `Personnel` | `afvg.Personnel` |
| `NumberOfEmployees` | `afvg.NumberOfEmployees` |
| `OperationSetupGroupCategory` | `afvg.OperationSetupGroupCategory` |
| `OperationSetupGroup` | `afvg.OperationSetupGroup` |
| `OperationSetupType` | `afvg.OperationSetupType` |
| `OperationOverlappingIsRequired` | `afvg.OperationOverlappingIsRequired` |
| `OperationOverlappingIsPossible` | `afvg.OperationOverlappingIsPossible` |
| `OperationsIsAlwaysOverlapping` | `afvg.OperationsIsAlwaysOverlapping` |
| `OperationSplitIsRequired` | `afvg.OperationSplitIsRequired` |
| `MaximumNumberOfSplits` | `afvg.MaximumNumberOfSplits` |
| `LeadTimeReductionStrategy` | `afvg.LeadTimeReductionStrategy` |
| `OpSchedldReductionLevel` | `afvg.OpSchedldReductionLevel` |
| `OpErlstSchedldExecStrtDte` | `afvg.OpErlstSchedldExecStrtDte` |
| `OpErlstSchedldExecStrtTme` | `afvg.OpErlstSchedldExecStrtTme` |
| `OpErlstSchedldProcgStrtDte` | `afvg.OpErlstSchedldProcgStrtDte` |
| `OpErlstSchedldProcgStrtTme` | `afvg.OpErlstSchedldProcgStrtTme` |
| `OpErlstSchedldTrdwnStrtDte` | `afvg.OpErlstSchedldTrdwnStrtDte` |
| `OpErlstSchedldTrdwnStrtTme` | `afvg.OpErlstSchedldTrdwnStrtTme` |
| `OpErlstSchedldExecEndDte` | `afvg.OpErlstSchedldExecEndDte` |
| `OpErlstSchedldExecEndTme` | `afvg.OpErlstSchedldExecEndTme` |
| `OpLtstSchedldExecStrtDte` | `afvg.OpLtstSchedldExecStrtDte` |
| `OpLtstSchedldExecStrtTme` | `afvg.OpLtstSchedldExecStrtTme` |
| `OpLtstSchedldProcgStrtDte` | `afvg.OpLtstSchedldProcgStrtDte` |
| `OpLtstSchedldProcgStrtTme` | `afvg.OpLtstSchedldProcgStrtTme` |
| `OpLtstSchedldTrdwnStrtDte` | `afvg.OpLtstSchedldTrdwnStrtDte` |
| `OpLtstSchedldTrdwnStrtTme` | `afvg.OpLtstSchedldTrdwnStrtTme` |
| `OpLtstSchedldExecEndDte` | `afvg.OpLtstSchedldExecEndDte` |
| `OpLtstSchedldExecEndTme` | `afvg.OpLtstSchedldExecEndTme` |
| `SchedldFcstdEarliestStartDate` | `afvg.SchedldFcstdEarliestStartDate` |
| `SchedldFcstdEarliestStartTime` | `afvg.SchedldFcstdEarliestStartTime` |
| `SchedldFcstdEarliestEndDate` | `afvg.SchedldFcstdEarliestEndDate` |
| `SchedldFcstdEarliestEndTime` | `afvg.SchedldFcstdEarliestEndTime` |
| `LatestSchedldFcstdStartDate` | `afvg.LatestSchedldFcstdStartDate` |
| `SchedldFcstdLatestStartTime` | `afvg.SchedldFcstdLatestStartTime` |
| `LatestSchedldFcstdEndDate` | `afvg.LatestSchedldFcstdEndDate` |
| `SchedldFcstdLatestEndTime` | `afvg.SchedldFcstdLatestEndTime` |
| `OperationConfirmedStartDate` | `afvg.OperationConfirmedStartDate` |
| `OperationConfirmedEndDate` | `afvg.OperationConfirmedEndDate` |
| `OpActualExecutionStartDate` | `afvg.OpActualExecutionStartDate` |
| `OpActualExecutionStartTime` | `afvg.OpActualExecutionStartTime` |
| `OpActualSetupEndDate` | `afvg.OpActualSetupEndDate` |
| `OpActualSetupEndTime` | `afvg.OpActualSetupEndTime` |
| `OpActualProcessingStartDate` | `afvg.OpActualProcessingStartDate` |
| `OpActualProcessingStartTime` | `afvg.OpActualProcessingStartTime` |
| `OpActualProcessingEndDate` | `afvg.OpActualProcessingEndDate` |
| `OpActualProcessingEndTime` | `afvg.OpActualProcessingEndTime` |
| `OpActualTeardownStartDate` | `afvg.OpActualTeardownStartDate` |
| `OpActualTeardownStartTme` | `afvg.OpActualTeardownStartTme` |
| `OpActualExecutionEndDate` | `afvg.OpActualExecutionEndDate` |
| `OpActualExecutionEndTime` | `afvg.OpActualExecutionEndTime` |
| `ActualForecastEndDate` | `afvg.ActualForecastEndDate` |
| `ActualForecastEndTime` | `afvg.ActualForecastEndTime` |
| `EarliestScheduledWaitStartDate` | `afvg.EarliestScheduledWaitStartDate` |
| `EarliestScheduledWaitStartTime` | `afvg.EarliestScheduledWaitStartTime` |
| `EarliestScheduledWaitEndDate` | `afvg.EarliestScheduledWaitEndDate` |
| `EarliestScheduledWaitEndTime` | `afvg.EarliestScheduledWaitEndTime` |
| `LatestScheduledWaitStartDate` | `afvg.LatestScheduledWaitStartDate` |
| `LatestScheduledWaitStartTime` | `afvg.LatestScheduledWaitStartTime` |
| `LatestScheduledWaitEndDate` | `afvg.LatestScheduledWaitEndDate` |
| `LatestScheduledWaitEndTime` | `afvg.LatestScheduledWaitEndTime` |
| `BreakDurationUnit` | `afvg.BreakDurationUnit` |
| `PlannedBreakDuration` | `afvg.PlannedBreakDuration` |
| `ConfirmedBreakDuration` | `afvg.ConfirmedBreakDuration` |
| `OverlapMinimumDurationUnit` | `afvg.OverlapMinimumDurationUnit` |
| `OverlapMinimumDuration` | `afvg.OverlapMinimumDuration` |
| `MaximumWaitDurationUnit` | `afvg.MaximumWaitDurationUnit` |
| `MaximumWaitDuration` | `afvg.MaximumWaitDuration` |
| `MinimumWaitDurationUnit` | `afvg.MinimumWaitDurationUnit` |
| `MinimumWaitDuration` | `afvg.MinimumWaitDuration` |
| `StandardMoveDurationUnit` | `afvg.StandardMoveDurationUnit` |
| `StandardMoveDuration` | `afvg.StandardMoveDuration` |
| `StandardQueueDurationUnit` | `afvg.StandardQueueDurationUnit` |
| `StandardQueueDuration` | `afvg.StandardQueueDuration` |
| `MinimumQueueDurationUnit` | `afvg.MinimumQueueDurationUnit` |
| `MinimumQueueDuration` | `afvg.MinimumQueueDuration` |
| `MinimumMoveDurationUnit` | `afvg.MinimumMoveDurationUnit` |
| `MinimumMoveDuration` | `afvg.MinimumMoveDuration` |
| `OperationStandardDurationUnit` | `afvg.OperationStandardDurationUnit` |
| `OperationStandardDuration` | `afvg.OperationStandardDuration` |
| `MinimumDurationUnit` | `afvg.MinimumDurationUnit` |
| `MinimumDuration` | `afvg.MinimumDuration` |
| `ActualForecastDurationUnit` | `afvg.ActualForecastDurationUnit` |
| `ActualForecastDuration` | `afvg.ActualForecastDuration` |
| `ScheduledMoveDuration` | `afvg.ScheduledMoveDuration` |
| `ScheduledMoveDurationUnit` | `afvg.ScheduledMoveDurationUnit` |
| `ScheduledQueueDuration` | `afvg.ScheduledQueueDuration` |
| `ScheduledQueueDurationUnit` | `afvg.ScheduledQueueDurationUnit` |
| `ScheduledWaitDuration` | `afvg.ScheduledWaitDuration` |
| `ScheduledWaitDurationUnit` | `afvg.ScheduledWaitDurationUnit` |
| `PlannedDeliveryDuration` | `afvg.PlannedDeliveryDuration` |
| `OpPlannedSetupDurn` | `afvg.OpPlannedSetupDurn` |
| `OpPlannedSetupDurnUnit` | `afvg.OpPlannedSetupDurnUnit` |
| `OpPlannedProcessingDurn` | `afvg.OpPlannedProcessingDurn` |
| `OpPlannedProcessingDurnUnit` | `afvg.OpPlannedProcessingDurnUnit` |
| `OpPlannedTeardownDurn` | `afvg.OpPlannedTeardownDurn` |
| `OpPlannedTeardownDurnUnit` | `afvg.OpPlannedTeardownDurnUnit` |
| `StartDateOffsetReferenceCode` | `afvg.StartDateOffsetReferenceCode` |
| `StartDateOffsetDurationUnit` | `afvg.StartDateOffsetDurationUnit` |
| `StartDateOffsetDuration` | `afvg.StartDateOffsetDuration` |
| `EndDateOffsetReferenceCode` | `afvg.EndDateOffsetReferenceCode` |
| `EndDateOffsetDurationUnit` | `afvg.EndDateOffsetDurationUnit` |
| `EndDateOffsetDuration` | `afvg.EndDateOffsetDuration` |
| `StandardWorkFormulaParamGroup` | `afvg.StandardWorkFormulaParamGroup` |
| `OperationUnit` | `afvg.OperationUnit` |
| `OpQtyToBaseQtyDnmntr` | `afvg.OpQtyToBaseQtyDnmntr` |
| `OpQtyToBaseQtyNmrtr` | `afvg.OpQtyToBaseQtyNmrtr` |
| `OperationScrapPercent` | `afvg.OperationScrapPercent` |
| `OperationReferenceQuantity` | `afvg.OperationReferenceQuantity` |
| `OpPlannedTotalQuantity` | `afvg.OpPlannedTotalQuantity` |
| `OpPlannedScrapQuantity` | `afvg.OpPlannedScrapQuantity` |
| `OpPlannedYieldQuantity` | `afvg.OpPlannedYieldQuantity` |
| `OpTotalConfirmedYieldQty` | `afvg.OpTotalConfirmedYieldQty` |
| `OpTotalConfirmedScrapQty` | `afvg.OpTotalConfirmedScrapQty` |
| `OperationConfirmedReworkQty` | `afvg.OperationConfirmedReworkQty` |
| `ProductionUnit` | `afvg.ProductionUnit` |
| `OpTotConfdYieldQtyInOrdQtyUnit` | `afvg.OpTotConfdYieldQtyInOrdQtyUnit` |
| `OpWorkQuantityUnit1` | `cast(afvg.OpWorkQuantityUnit1 as vdm_ile01 preserving type)` |
| `OpConfirmedWorkQuantity1` | `cast(afvg.OpConfirmedWorkQuantity1 as vdm_ism01 preserving type)` |
| `NoFurtherOpWorkQuantity1IsExpd` | `afvg.NoFurtherOpWorkQuantity1IsExpd` |
| `OpWorkQuantityUnit2` | `cast(afvg.OpWorkQuantityUnit2 as vdm_ile02 preserving type)` |
| `OpConfirmedWorkQuantity2` | `cast(afvg.OpConfirmedWorkQuantity2 as vdm_ism02 preserving type)` |
| `NoFurtherOpWorkQuantity2IsExpd` | `afvg.NoFurtherOpWorkQuantity2IsExpd` |
| `OpWorkQuantityUnit3` | `cast(afvg.OpWorkQuantityUnit3 as vdm_ile03 preserving type)` |
| `OpConfirmedWorkQuantity3` | `cast(afvg.OpConfirmedWorkQuantity3 as vdm_ism03 preserving type)` |
| `NoFurtherOpWorkQuantity3IsExpd` | `afvg.NoFurtherOpWorkQuantity3IsExpd` |
| `OpWorkQuantityUnit4` | `cast(afvg.OpWorkQuantityUnit4 as vdm_ile04 preserving type)` |
| `OpConfirmedWorkQuantity4` | `cast(afvg.OpConfirmedWorkQuantity4 as vdm_ism04 preserving type)` |
| `NoFurtherOpWorkQuantity4IsExpd` | `afvg.NoFurtherOpWorkQuantity4IsExpd` |
| `OpWorkQuantityUnit5` | `cast(afvg.OpWorkQuantityUnit5 as vdm_ile05 preserving type)` |
| `OpConfirmedWorkQuantity5` | `cast(afvg.OpConfirmedWorkQuantity5 as vdm_ism05 preserving type)` |
| `NoFurtherOpWorkQuantity5IsExpd` | `afvg.NoFurtherOpWorkQuantity5IsExpd` |
| `OpWorkQuantityUnit6` | `cast(afvg.OpWorkQuantityUnit6 as vdm_ile06 preserving type)` |
| `OpConfirmedWorkQuantity6` | `cast(afvg.OpConfirmedWorkQuantity6 as vdm_ism06 preserving type)` |
| `NoFurtherOpWorkQuantity6IsExpd` | `afvg.NoFurtherOpWorkQuantity6IsExpd` |
| `WorkCenterStandardWorkQtyUnit1` | `cast(afvg.WorkCenterStandardWorkQtyUnit1 as pph_vge01 preserving type)` |
| `WorkCenterStandardWorkQty1` | `cast(afvg.WorkCenterStandardWorkQty1 as vdm_vgw01 preserving type)` |
| `CostCtrActivityType1` | `cast(afvg.CostCtrActivityType1 as vdm_lar01 preserving type)` |
| `WorkCenterStandardWorkQtyUnit2` | `cast(afvg.WorkCenterStandardWorkQtyUnit2 as pph_vge02 preserving type)` |
| `WorkCenterStandardWorkQty2` | `cast(afvg.WorkCenterStandardWorkQty2 as vdm_vgw02 preserving type)` |
| `CostCtrActivityType2` | `cast(afvg.CostCtrActivityType2 as vdm_lar02 preserving type)` |
| `WorkCenterStandardWorkQtyUnit3` | `cast(afvg.WorkCenterStandardWorkQtyUnit3 as pph_vge03 preserving type)` |
| `WorkCenterStandardWorkQty3` | `cast(afvg.WorkCenterStandardWorkQty3 as vdm_vgw03 preserving type)` |
| `CostCtrActivityType3` | `cast(afvg.CostCtrActivityType3 as vdm_lar03 preserving type)` |
| `WorkCenterStandardWorkQtyUnit4` | `cast(afvg.WorkCenterStandardWorkQtyUnit4 as pph_vge04 preserving type)` |
| `WorkCenterStandardWorkQty4` | `cast(afvg.WorkCenterStandardWorkQty4 as vdm_vgw04 preserving type)` |
| `CostCtrActivityType4` | `cast(afvg.CostCtrActivityType4 as vdm_lar04 preserving type)` |
| `WorkCenterStandardWorkQtyUnit5` | `cast(afvg.WorkCenterStandardWorkQtyUnit5 as pph_vge05 preserving type)` |
| `WorkCenterStandardWorkQty5` | `cast(afvg.WorkCenterStandardWorkQty5 as vdm_vgw05 preserving type)` |
| `CostCtrActivityType5` | `cast(afvg.CostCtrActivityType5 as vdm_lar05 preserving type)` |
| `WorkCenterStandardWorkQtyUnit6` | `cast(afvg.WorkCenterStandardWorkQtyUnit6 as pph_vge06 preserving type)` |
| `WorkCenterStandardWorkQty6` | `cast(afvg.WorkCenterStandardWorkQty6 as vdm_vgw06 preserving type)` |
| `CostCtrActivityType6` | `cast(afvg.CostCtrActivityType6 as vdm_lar06 preserving type)` |
| `ForecastWorkQuantity1` | `cast(afvg.ForecastWorkQuantity1 as vdm_ofm01 preserving type)` |
| `ForecastWorkQuantity2` | `cast(afvg.ForecastWorkQuantity2 as vdm_ofm02 preserving type)` |
| `ForecastWorkQuantity3` | `cast(afvg.ForecastWorkQuantity3 as vdm_ofm03 preserving type)` |
| `ForecastWorkQuantity4` | `cast(afvg.ForecastWorkQuantity4 as vdm_ofm04 preserving type)` |
| `ForecastWorkQuantity5` | `cast(afvg.ForecastWorkQuantity5 as vdm_ofm05 preserving type)` |
| `ForecastWorkQuantity6` | `cast(afvg.ForecastWorkQuantity6 as vdm_ofm06 preserving type)` |
| `BusinessProcess` | `afvg.BusinessProcess` |
| `BusinessProcessEntryUnit` | `afvg.BusinessProcessEntryUnit` |
| `BusinessProcessConfirmedQty` | `afvg.BusinessProcessConfirmedQty` |
| `NoFurtherBusinessProcQtyIsExpd` | `afvg.NoFurtherBusinessProcQtyIsExpd` |
| `BusinessProcRemainingQtyUnit` | `afvg.BusinessProcRemainingQtyUnit` |
| `BusinessProcessRemainingQty` | `afvg.BusinessProcessRemainingQty` |
| `SetupOpActyNtwkInstance` | `afvg.SetupOpActyNtwkInstance` |
| `ProduceOpActyNtwkInstance` | `afvg.ProduceOpActyNtwkInstance` |
| `TeardownOpActyNtwkInstance` | `afvg.TeardownOpActyNtwkInstance` |
| `FreeDefinedTableFieldSemantic` | `afvg.FreeDefinedTableFieldSemantic` |
| `FreeDefinedAttribute01` | `afvg.FreeDefinedAttribute01` |
| `FreeDefinedAttribute02` | `afvg.FreeDefinedAttribute02` |
| `FreeDefinedAttribute03` | `afvg.FreeDefinedAttribute03` |
| `FreeDefinedAttribute04` | `afvg.FreeDefinedAttribute04` |
| `FreeDefinedQuantity1Unit` | `afvg.FreeDefinedQuantity1Unit` |
| `FreeDefinedQuantity1` | `afvg.FreeDefinedQuantity1` |
| `FreeDefinedQuantity2Unit` | `afvg.FreeDefinedQuantity2Unit` |
| `FreeDefinedQuantity2` | `afvg.FreeDefinedQuantity2` |
| `FreeDefinedAmount1Currency` | `afvg.FreeDefinedAmount1Currency` |
| `FreeDefinedAmount1` | `afvg.FreeDefinedAmount1` |
| `FreeDefinedAmount2Currency` | `afvg.FreeDefinedAmount2Currency` |
| `FreeDefinedAmount2` | `afvg.FreeDefinedAmount2` |
| `FreeDefinedDate1` | `afvg.FreeDefinedDate1` |
| `FreeDefinedDate2` | `afvg.FreeDefinedDate2` |
| `FreeDefinedIndicator1` | `afvg.FreeDefinedIndicator1` |
| `FreeDefinedIndicator2` | `afvg.FreeDefinedIndicator2` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_OrderOperation` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDOPWITHSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_LongText', '_StatusObject', '_StatusObjectText']
--@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderOperationInternalID'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderOperation'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Operation with Status'

define view I_MfgOrderOperationWithStatus
  as select from I_ManufacturingOrderOperation  as afvg
    inner join   P_OrderOperationStatusBasicAgg as stat on stat.ObjectInternalID = afvg.ObjectInternalID // Status

    -- to extension
    association [1..1] to E_OrderOperation as _Extension on  $projection.MfgOrderInternalID       = _Extension.OrderInternalID
                                                         and $projection.OrderOperationInternalID = _Extension.OrderOperationInternalID
{
      // Technical Key
      @ObjectModel.foreignKey.association: '_OrderInternalID'
  key afvg.MfgOrderInternalID,
  key afvg.OrderOperationInternalID,

      // Semantic key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      afvg.ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      afvg.ManufacturingOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      @ObjectModel.text.element: ['MfgOrderOperationText']
      cast(afvg.ManufacturingOrderOperation    as pph_vornr preserving type) as ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.text.element: ['MfgOrderOperationText']
      afvg.ManufacturingOrderOperation_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrdSubOperation_2'
      @ObjectModel.text.element: ['MfgOrderOperationText']
      cast(afvg.ManufacturingOrderSubOperation as pph_uvorn preserving type) as ManufacturingOrderSubOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]    
      @ObjectModel.text.element: ['MfgOrderOperationText']
      afvg.ManufacturingOrdSubOperation_2,

      // Order header data
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      afvg.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      afvg.ManufacturingOrderType,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      afvg.ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_MRPController'
      afvg.MRPController,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      afvg.ResponsiblePlannerGroup,
      afvg.ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspectionLotStdVH', element: 'InspectionLot' } } ]
      afvg.InspectionLot,
      afvg.ManufacturingOrderImportance,

      // Text
      @Semantics.text: true
      afvg.MfgOrderOperationText,
      afvg.OperationHasLongText,
      @ObjectModel.foreignKey.association: '_Language'
      afvg.Language as LongTextLanguageCode,
      @ObjectModel.foreignKey.association: '_OperationStandardTextCode'    
      afvg.OperationStandardTextCode,

      // Attributes
      afvg.OperationIsToBeDeleted,
      afvg.MfgOrderOperationIsPhase,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SuperiorOperation_2'
      afvg.MfgOrderPhaseSuperiorOperation,
      afvg.SuperiorOperation_2,           // no conv. exit
      afvg.NumberOfCapacities,
      afvg.NumberOfConfirmationSlips,
      afvg.OperationImportance,

      // Status
      stat.OperationIsCreated,
      stat.OperationIsReleased,
      stat.OperationIsPrinted,
      stat.OperationIsConfirmed,
      stat.OperationIsPartiallyConfirmed,
      stat.OperationIsDeleted,
      stat.OperationIsTechlyCompleted,
      stat.OperationIsClosed,
      cast(stat.OperationIsConfdByMilestone as isconfirmedbymilestone preserving type) as OperationIsConfdByMilestone,
      cast(stat.OperationIsManuallyConfirmed as isconfirmedmanually preserving type)   as OperationIsManuallyConfirmed,
      stat.OperationIsScheduled,
      cast(stat.OperationIsGenerated as operationisgenerated preserving type)          as OperationIsGenerated,
      stat.OperationIsPartiallyDelivered,
      stat.OperationIsDelivered,
      cast(stat.ControlRecipeIsCreated as controlrecipeiscreated preserving type)      as ControlRecipeIsCreated,

      // Assignments
      @ObjectModel.foreignKey.association: '_SuperiorOperation'
      afvg.SuperiorOperationInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]      
      @ObjectModel.foreignKey.association: '_Plant'
      afvg.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      @ObjectModel.text.association: '_WorkCenterText'
      afvg.WorkCenterInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WorkCenterTypeCode_2'
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      afvg.WorkCenterTypeCode,      // CHAR1
      @ObjectModel.foreignKey.association: '_WorkCenterType_2'
      afvg.WorkCenterTypeCode_2,    // CHAR2
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      afvg.OperationControlProfile,
      @ObjectModel.foreignKey.association: '_ControlRecipeDestination'
      afvg.ControlRecipeDestination,
      @ObjectModel.foreignKey.association: '_OperationConfirmation'
      afvg.OperationConfirmation,
      afvg.NumberOfOperationConfirmations,
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      afvg.FactoryCalendar,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]  
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      afvg.CapacityRequirement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapRqmtItmStdVH', element: 'CapacityRequirementItem' } } ] 
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
      afvg.CapacityRequirementItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      afvg.ChangeNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      afvg.ObjectInternalID,
      afvg.OperationTrackingNumber,

      // Assignments BOO and BOM
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      afvg.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'      
      afvg.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsVariant'
      afvg.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
      afvg.BillOfOperationsSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
      afvg.BOOOperationInternalID,
      afvg.BillOfOperationsVersion,
      afvg.BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID_2'
      afvg.BillOfMaterialInternalID,
      afvg.BillOfMaterialInternalID_2,   // no conv. exit
      afvg.BillOfMaterialItemNodeNumber,
      afvg.BOMItemNodeCount,

      // Assignments Purchasing
      afvg.ExtProcgOperationHasSubcontrg,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      afvg.PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      afvg.PurchasingGroup,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaserequisitionStdVH', element: 'PurchaseRequisition' } } ]  
      afvg.PurchaseRequisition,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaserequisitionitemStdVH', element: 'PurchaseRequisitionItem' } } ] 
      afvg.PurchaseRequisitionItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchaseOutlineAgreement'
      afvg.PurchaseOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchaseOutlineAgreementItem'
      afvg.PurchaseOrderItem,
      afvg.PurchaseOutlineAgreement,
      afvg.PurchaseOutlineAgreementItem,

      afvg.PurchasingInfoRecord,
      afvg.PurgInfoRecdDataIsFixed,
      afvg.PurchasingInfoRecordCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      afvg.Supplier,
      @Semantics.text: true
      afvg.GoodsRecipientName,
      @Semantics.text: true
      afvg.UnloadingPointName,

      // Amount and Currency
      @Semantics.currencyCode: true
      afvg.OpExternalProcessingCurrency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      afvg.OpExternalProcessingPrice,
      afvg.NumberOfOperationPriceUnits,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      afvg.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      afvg.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      afvg.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      afvg.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      afvg.RequestingCostCenter,
      @ObjectModel.foreignKey.association: '_CostElement'
      afvg.CostElement,
      @ObjectModel.foreignKey.association: '_CostingVariant'
      afvg.CostingVariant,
      afvg.CostingSheet,
      afvg.CostEstimate,
      @Semantics.currencyCode: true
      afvg.ControllingObjectCurrency,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      afvg.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      afvg.FunctionalArea,
      afvg.TaxJurisdiction,

      // Assignments HR
      afvg.EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      afvg.EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      afvg.EmployeeSuitability,
      afvg.NumberOfTimeTickets,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PersWrkAgrmtSrchHelp', element: 'PersonWorkAgreement' } } ]
      @ObjectModel.foreignKey.association: '_Employee'
      afvg.Personnel,
      afvg.NumberOfEmployees,

      // Setup and Overlapping
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'      
      afvg.OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_OperationSetupGroup'
      afvg.OperationSetupGroup,
      @ObjectModel.foreignKey.association: '_OperationSetupType'
      afvg.OperationSetupType,
      afvg.OperationOverlappingIsRequired,
      afvg.OperationOverlappingIsPossible,
      afvg.OperationsIsAlwaysOverlapping,
      afvg.OperationSplitIsRequired,
      afvg.MaximumNumberOfSplits,
      @ObjectModel.foreignKey.association: '_LeadTimeReductionStrategy'
      afvg.LeadTimeReductionStrategy,
      afvg.OpSchedldReductionLevel,

      // Scheduled Dates and Times
      afvg.OpErlstSchedldExecStrtDte,
      afvg.OpErlstSchedldExecStrtTme,
      afvg.OpErlstSchedldProcgStrtDte,
      afvg.OpErlstSchedldProcgStrtTme,
      afvg.OpErlstSchedldTrdwnStrtDte,
      afvg.OpErlstSchedldTrdwnStrtTme,
      afvg.OpErlstSchedldExecEndDte,
      afvg.OpErlstSchedldExecEndTme,
      afvg.OpLtstSchedldExecStrtDte,
      afvg.OpLtstSchedldExecStrtTme,
      afvg.OpLtstSchedldProcgStrtDte,
      afvg.OpLtstSchedldProcgStrtTme,
      afvg.OpLtstSchedldTrdwnStrtDte,
      afvg.OpLtstSchedldTrdwnStrtTme,
      afvg.OpLtstSchedldExecEndDte,
      afvg.OpLtstSchedldExecEndTme,
      afvg.SchedldFcstdEarliestStartDate,
      afvg.SchedldFcstdEarliestStartTime,
      afvg.SchedldFcstdEarliestEndDate,
      afvg.SchedldFcstdEarliestEndTime,
      afvg.LatestSchedldFcstdStartDate,
      afvg.SchedldFcstdLatestStartTime,
      afvg.LatestSchedldFcstdEndDate,
      afvg.SchedldFcstdLatestEndTime,

      // Actual Dates and Times
      afvg.OperationConfirmedStartDate,
      afvg.OperationConfirmedEndDate,
      afvg.OpActualExecutionStartDate,
      afvg.OpActualExecutionStartTime,
      afvg.OpActualSetupEndDate,
      afvg.OpActualSetupEndTime,
      afvg.OpActualProcessingStartDate,
      afvg.OpActualProcessingStartTime,
      afvg.OpActualProcessingEndDate,
      afvg.OpActualProcessingEndTime,
      afvg.OpActualTeardownStartDate,
      afvg.OpActualTeardownStartTme,
      afvg.OpActualExecutionEndDate,
      afvg.OpActualExecutionEndTime,
      afvg.ActualForecastEndDate,
      afvg.ActualForecastEndTime,

      // Wait Dates and Times
      afvg.EarliestScheduledWaitStartDate,
      afvg.EarliestScheduledWaitStartTime,
      afvg.EarliestScheduledWaitEndDate,
      afvg.EarliestScheduledWaitEndTime,
      afvg.LatestScheduledWaitStartDate,
      afvg.LatestScheduledWaitStartTime,
      afvg.LatestScheduledWaitEndDate,
      afvg.LatestScheduledWaitEndTime,

      // Durations
      afvg.BreakDurationUnit,
      afvg.PlannedBreakDuration,
      afvg.ConfirmedBreakDuration,
      afvg.OverlapMinimumDurationUnit,
      afvg.OverlapMinimumDuration,
      afvg.MaximumWaitDurationUnit,
      afvg.MaximumWaitDuration,
      afvg.MinimumWaitDurationUnit,
      afvg.MinimumWaitDuration,
      afvg.StandardMoveDurationUnit,
      afvg.StandardMoveDuration,
      afvg.StandardQueueDurationUnit,
      afvg.StandardQueueDuration,
      afvg.MinimumQueueDurationUnit,
      afvg.MinimumQueueDuration,
      afvg.MinimumMoveDurationUnit,
      afvg.MinimumMoveDuration,
      afvg.OperationStandardDurationUnit,
      afvg.OperationStandardDuration,
      afvg.MinimumDurationUnit,
      afvg.MinimumDuration,
      afvg.ActualForecastDurationUnit,
      afvg.ActualForecastDuration,
      afvg.ScheduledMoveDuration,
      afvg.ScheduledMoveDurationUnit,
      afvg.ScheduledQueueDuration,
      afvg.ScheduledQueueDurationUnit,
      afvg.ScheduledWaitDuration,
      afvg.ScheduledWaitDurationUnit,
      afvg.PlannedDeliveryDuration,
      afvg.OpPlannedSetupDurn,
      afvg.OpPlannedSetupDurnUnit,
      afvg.OpPlannedProcessingDurn,
      afvg.OpPlannedProcessingDurnUnit,
      afvg.OpPlannedTeardownDurn,
      afvg.OpPlannedTeardownDurnUnit,

      // Offset
      -- Start
      @ObjectModel.foreignKey.association: '_StartDateOffsetReferenceCode'
      afvg.StartDateOffsetReferenceCode,
      @Semantics.unitOfMeasure: true
      afvg.StartDateOffsetDurationUnit,
      afvg.StartDateOffsetDuration,
      -- End
      @ObjectModel.foreignKey.association: '_EndDateOffsetReferenceCode'
      afvg.EndDateOffsetReferenceCode,
      @Semantics.unitOfMeasure: true
      afvg.EndDateOffsetDurationUnit,
      afvg.EndDateOffsetDuration,

      // Standard Value Key
      @ObjectModel.foreignKey.association: '_StandardWorkFmlaParamGroup'
      afvg.StandardWorkFormulaParamGroup,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_OperationUnit'
      @Semantics.unitOfMeasure: true
      afvg.OperationUnit,
      afvg.OpQtyToBaseQtyDnmntr,
      afvg.OpQtyToBaseQtyNmrtr,
      afvg.OperationScrapPercent,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #MAX
      afvg.OperationReferenceQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OpPlannedTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OpPlannedScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OpPlannedYieldQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OpTotalConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OpTotalConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @Aggregation.default: #SUM
      afvg.OperationConfirmedReworkQty,
      
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      afvg.ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      afvg.OpTotConfdYieldQtyInOrdQtyUnit,

      // Confirmed Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit1'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit1      as vdm_ile01  preserving type) as OpWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity1 as vdm_ism01 preserving type) as OpConfirmedWorkQuantity1,
      afvg.NoFurtherOpWorkQuantity1IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit2'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit2      as vdm_ile02  preserving type) as OpWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity2 as vdm_ism02 preserving type) as OpConfirmedWorkQuantity2,
      afvg.NoFurtherOpWorkQuantity2IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit3'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit3      as vdm_ile03  preserving type) as OpWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity3 as vdm_ism03 preserving type) as OpConfirmedWorkQuantity3,
      afvg.NoFurtherOpWorkQuantity3IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit4'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit4      as vdm_ile04  preserving type) as OpWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity4 as vdm_ism04 preserving type) as OpConfirmedWorkQuantity4,
      afvg.NoFurtherOpWorkQuantity4IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit5'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit5      as vdm_ile05  preserving type) as OpWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity5 as vdm_ism05 preserving type) as OpConfirmedWorkQuantity5,
      afvg.NoFurtherOpWorkQuantity5IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit6'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit6      as vdm_ile06  preserving type) as OpWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity6 as vdm_ism06 preserving type) as OpConfirmedWorkQuantity6,
      afvg.NoFurtherOpWorkQuantity6IsExpd,


      // Work Quantities and UoM
       @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit1'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit1 as pph_vge01 preserving type) as WorkCenterStandardWorkQtyUnit1,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit1'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty1     as vdm_vgw01 preserving type) as WorkCenterStandardWorkQty1,
      cast(afvg.CostCtrActivityType1           as vdm_lar01 preserving type) as CostCtrActivityType1,

      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit2'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit2 as pph_vge02 preserving type) as WorkCenterStandardWorkQtyUnit2,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit2'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty2     as vdm_vgw02 preserving type) as WorkCenterStandardWorkQty2,
      cast(afvg.CostCtrActivityType2           as vdm_lar02 preserving type) as CostCtrActivityType2,

      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit3'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit3 as pph_vge03 preserving type) as WorkCenterStandardWorkQtyUnit3,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit3'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty3     as vdm_vgw03 preserving type) as WorkCenterStandardWorkQty3,
      cast(afvg.CostCtrActivityType3           as vdm_lar03 preserving type) as CostCtrActivityType3,

      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit4'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit4 as pph_vge04 preserving type) as WorkCenterStandardWorkQtyUnit4,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit4'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty4     as vdm_vgw04 preserving type) as WorkCenterStandardWorkQty4,
      cast(afvg.CostCtrActivityType4           as vdm_lar04 preserving type) as CostCtrActivityType4,

      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit5'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit5 as pph_vge05 preserving type) as WorkCenterStandardWorkQtyUnit5,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit5'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty5     as vdm_vgw05 preserving type) as WorkCenterStandardWorkQty5,
      cast(afvg.CostCtrActivityType5           as vdm_lar05 preserving type) as CostCtrActivityType5,

      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit6'
      @Semantics.unitOfMeasure: true
      cast(afvg.WorkCenterStandardWorkQtyUnit6 as pph_vge06 preserving type) as WorkCenterStandardWorkQtyUnit6,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit6'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty6     as vdm_vgw06 preserving type) as WorkCenterStandardWorkQty6,
      cast(afvg.CostCtrActivityType6           as vdm_lar06 preserving type) as CostCtrActivityType6,
 
      // Forecast Work Quantities
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit1'
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity1 as  vdm_ofm01 preserving type) as ForecastWorkQuantity1,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit2'      
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity2 as  vdm_ofm02 preserving type) as ForecastWorkQuantity2,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit3'
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity3 as  vdm_ofm03 preserving type) as ForecastWorkQuantity3,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit4'
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity4 as  vdm_ofm04 preserving type) as ForecastWorkQuantity4,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit5'
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity5 as  vdm_ofm05 preserving type) as ForecastWorkQuantity5,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit6'
      @Aggregation.default: #SUM
      cast(afvg.ForecastWorkQuantity6 as  vdm_ofm06 preserving type) as ForecastWorkQuantity6,

      // Business Process
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessProcessStdVH', element: 'BusinessProcess' } } ]
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      afvg.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessProcessEntryUnit'
      @Semantics.unitOfMeasure: true
      afvg.BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      @Aggregation.default: #SUM
      afvg.BusinessProcessConfirmedQty,
      afvg.NoFurtherBusinessProcQtyIsExpd,
      @Semantics.unitOfMeasure: true
      afvg.BusinessProcRemainingQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcRemainingQtyUnit'
      @Aggregation.default: #SUM
      afvg.BusinessProcessRemainingQty,

      // OAN data
--    @ObjectModel.foreignKey.association: '_SetupOpActyNtwkInstance'
      afvg.SetupOpActyNtwkInstance,
--    @ObjectModel.foreignKey.association: '_ProduceOpActyNtwkInstance'
      afvg.ProduceOpActyNtwkInstance,
--    @ObjectModel.foreignKey.association: '_TeardownOpActyNtwkInstance'
      afvg.TeardownOpActyNtwkInstance,

      // Free-defined fields
      afvg.FreeDefinedTableFieldSemantic,
      afvg.FreeDefinedAttribute01,
      afvg.FreeDefinedAttribute02,
      afvg.FreeDefinedAttribute03,
      afvg.FreeDefinedAttribute04,
      @Semantics.unitOfMeasure: true
      afvg.FreeDefinedQuantity1Unit,
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity1Unit'
      @Aggregation.default: #SUM
      afvg.FreeDefinedQuantity1,
      @Semantics.unitOfMeasure: true
      afvg.FreeDefinedQuantity2Unit,      
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity2Unit'
      @Aggregation.default: #SUM
      afvg.FreeDefinedQuantity2,
      @Semantics.currencyCode: true
      afvg.FreeDefinedAmount1Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency'
      @Aggregation.default: #SUM
      afvg.FreeDefinedAmount1,
      @Semantics.currencyCode: true
      afvg.FreeDefinedAmount2Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      @Aggregation.default: #SUM
      afvg.FreeDefinedAmount2,
      afvg.FreeDefinedDate1,
      afvg.FreeDefinedDate2,
      afvg.FreeDefinedIndicator1,
      afvg.FreeDefinedIndicator2,

      // Associations
      @Consumption.hidden: true
      afvg._OrderInternalID,
      afvg._ManufacturingOrder,
      afvg._MfgOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpComponent_3'
      afvg._MfgOrderOpComponent,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpComponent_3'
      afvg._MfgOrderOpComponent2,
      afvg._MfgOrderOpComponent_3,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOperationPRT_3'
      afvg._MfgOrderOperationPRT,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOperationPRT_3'
      afvg._MfgOrderOperationPRT2,
      afvg._MfgOrderOperationPRT_3,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpTriggerPoint_3'
      afvg._MfgOrderOpTriggerPoint,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpTriggerPoint_3'
      afvg._MfgOrderOpTriggerPoint2,
      afvg._MfgOrderOpTriggerPoint_3,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOpDocInfoRecord_3'
      afvg._MfgOrderOpDocInfoRecord,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOpDocInfoRecord_3'
      afvg._MfgOrderOpDocInfoRecord2,
      afvg._MfgOrderOpDocInfoRecord_3,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationConf_3'
      afvg._MfgOrderOperationConf,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationConf_3'
      afvg._MfgOrderOperationConf2,
      afvg._MfgOrderOperationConf_3,
      afvg._MfgOrderOperationLongText,
      afvg._MfgOrderCategory,
      afvg._MfgOrderType,
      afvg._SuperiorOperation,
      afvg._OperationStandardTextCode,
      afvg._Plant,
      afvg._MRPController,
      afvg._ResponsiblePlannerGroup,
      afvg._ProductionSupervisor,
      afvg._ProductionUnit,
      afvg._OperationUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenter_2'
      afvg._WorkCenter,
      afvg._WorkCenter_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenterType_2'
      @Consumption.hidden: true
      afvg._WorkCenterType,
      @Consumption.hidden: true
      afvg._WorkCenterType_2,
      afvg._OperationControlProfile,
      afvg._BillOfOperationsType,
      afvg._BillOfOperationsGroup,
      afvg._BillOfOperationsVariant,
      afvg._BillOfOperationsSequence,
      @Consumption.hidden: true
      afvg._BOOOperationInternalID,
      afvg._OperationConfirmation,
      afvg._FactoryCalendar,
      afvg._CapacityRequirement,
      afvg._CapacityRequirementItem,
      afvg._ControlRecipeDestination,
      afvg._ChangeNumber,
      afvg._PurchasingOrganization,
      afvg._PurchasingGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SchedulingAgreement'
      afvg._PurchaseOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SchedulingAgreementItem'
      afvg._PurchaseOrderItem,
      afvg._PurchaseContract,
      afvg._PurchaseContractItem,
      afvg._SchedulingAgreement,
      afvg._SchedulingAgreementItem,
      afvg._PurchaseRequisition,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PurchaseRequisitionItem2'
      afvg._PurchaseRequisitionItem,
      afvg._PurchaseRequisitionItem2,
      afvg._PurchasingInfoRecord,
      afvg._Supplier,
      @Consumption.hidden: true   
      afvg._SupplierCompany,
      @Consumption.hidden: true
      afvg._SupplierCompanyByPlant,
      afvg._OpExternalProcessingCurrency,
      afvg._EmployeeWageGroup,
      afvg._EmployeeSuitability,
      afvg._Employee,
      afvg._StatusObject,
      afvg._CompanyCode,
      afvg._ProfitCenter,
      afvg._RequestingCostCenter,
      afvg._ControllingArea,
      afvg._ControllingObjectClass,
      afvg._ControllingObjectCurrency,
      afvg._CostElement,
      afvg._CostingVariant,
      afvg._FunctionalArea,
      afvg._BusinessArea,
      afvg._BusinessProcess,
      afvg._BusinessProcessEntryUnit,
      afvg._ConfirmedWorkQuantityUnit1,
      afvg._ConfirmedWorkQuantityUnit2,
      afvg._ConfirmedWorkQuantityUnit3,
      afvg._ConfirmedWorkQuantityUnit4,
      afvg._ConfirmedWorkQuantityUnit5,
      afvg._ConfirmedWorkQuantityUnit6,
      afvg._StdWorkQuantityUnit1,
      afvg._StdWorkQuantityUnit2,
      afvg._StdWorkQuantityUnit3,
      afvg._StdWorkQuantityUnit4,
      afvg._StdWorkQuantityUnit5,
      afvg._StdWorkQuantityUnit6,
      afvg._OperationSetupGroupCategory,
      afvg._OperationSetupGroup,
      afvg._OperationSetupType,
      afvg._LeadTimeReductionStrategy,
      afvg._StartDateOffsetReferenceCode,
      afvg._EndDateOffsetReferenceCode,
      afvg._StandardWorkFmlaParamGroup,
      afvg._Language,
      afvg._SetupOpActyNtwkInstance,
      afvg._ProduceOpActyNtwkInstance,
      afvg._TeardownOpActyNtwkInstance,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationLongText'
      afvg._LongText,
      afvg._FreeDefinedQuantity1Unit,
      afvg._FreeDefinedQuantity2Unit,
      afvg._FreeDefinedAmount1Currency,
      afvg._FreeDefinedAmount2Currency,

      // Text relations
      afvg._MfgOrderText,
      afvg._PlantText,
      afvg._WorkCenterText,
      afvg._InspectionLotText,
      afvg._SupplierText,
      afvg._StatusObjectText,
      afvg._BusinessAreaText,
      afvg._CompanyCodeText,
      afvg._ControllingAreaText,
      afvg._FunctionalAreaText
};
```
