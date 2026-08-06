---
name: I_MANUFACTURINGORDEROPERATION
description: Manufacturingorderoperation
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
# I_MANUFACTURINGORDEROPERATION

**Manufacturingorderoperation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MfgOrderInternalID` | `cast(afvg.OrderInternalID as pph_aufpl preserving type)` |
| key `OrderOperationInternalID` | `cast(afvg.OrderOperationInternalID as operationinternalid preserving type)` |
| `ManufacturingOrder` | `cast(aufv.ManufacturingOrder as manufacturingorder preserving type)` |
| `ManufacturingOrderSequence` | `cast(afvg.Sequence as manufacturingordersequence preserving type)` |
| `ManufacturingOrderOperation` | `case when afvg.SuperiorOperationInternalID > '00000000' then cast(afvc.Operation as manufacturingorderoperation preserving type) else cast(afvg.Operation as manufacturingorderoperation preserving type) end` |
| `ManufacturingOrderOperation_2` | `case when afvg.SuperiorOperationInternalID > '00000000' then afvc.Operation_2 else afvg.Operation_2 end` |
| `ManufacturingOrderSubOperation` | `cast(case when afvg.SuperiorOperationInternalID > '00000000' then afvg.Operation when afvg.SuperiorOperationInternalID = '00000000' then '' end as manufacturingordersuboperation preserving type)` |
| `ManufacturingOrdSubOperation_2` | `case when afvg.SuperiorOperationInternalID > '00000000' then afvg.Operation_2 when afvg.SuperiorOperationInternalID = '00000000' then '' end` |
| `MfgOrderOperationOrSubOp` | `afvc.Operation` |
| `MfgOrderOperationOrSubOp_2` | `afvc.Operation_2` |
| `MfgOrderOperationIsPhase` | `afvg.MfgOrderOperationIsPhase` |
| `OrderIntBillOfOpItemOfPhase` | `afvg.OrderIntBillOfOpItemOfPhase` |
| `MfgOrderPhaseSuperiorOperation` | `cast(afvp.Operation as vdm_supop preserving type)` |
| `SuperiorOperation_2` | `cast(afvp.Operation_2 as vdm_supop_2 preserving type)` |
| `ManufacturingOrderCategory` | `cast(aufv.ManufacturingOrderCategory as manufacturingordercategory preserving type)` |
| `ManufacturingOrderType` | `cast(aufv.ManufacturingOrderType as manufacturingordertype preserving type)` |
| `ProductionSupervisor` | `cast(aufv.ProductionSupervisor as pph_fevor preserving type)` |
| `MRPController` | `cast(aufv.MRPController as pph_dispo preserving type)` |
| `ResponsiblePlannerGroup` | `cast(aufv.ResponsiblePlannerGroup as vagrp preserving type)` |
| `ProductConfiguration` | `cast(aufv.ProductConfiguration as product_configuration preserving type)` |
| `InspectionLot` | `aufv.InspectionLot` |
| `ManufacturingOrderImportance` | `aufv.ManufacturingOrderImportance` |
| `MfgOrderOperationText` | `cast(afvg.OperationText as mfgorderoperationtext preserving type)` |
| `OperationStandardTextCode` | `cast(afvg.StandardTextInternalID as pph_ktsch preserving type)` |
| `OperationHasLongText` | `cast(case when afvg.Language <> '' then 'X' else afvg.Language end as aufltext preserving type)` |
| `Language` | `afvg.Language` |
| `OperationIsToBeDeleted` | `afvg.OperationIsToBeDeleted` |
| `NumberOfCapacities` | `cast(afvg.NumberOfCapacities as pph_anzkap preserving type)` |
| `NumberOfConfirmationSlips` | `afvg.NumberOfConfirmationSlips` |
| `OperationImportance` | `afvg.OperationImportance` |
| `SuperiorOperationInternalID` | `afvg.SuperiorOperationInternalID` |
| `Plant` | `afvg.Plant` |
| `WorkCenterInternalID` | `cast(afvg.WorkCenterInternalID as pph_arbid preserving type)` |
| `WorkCenterTypeCode` | `cast(afvg.WorkCenterTypeCode as pph_arbty preserving type)` |
| `WorkCenterTypeCode_2` | `cast(afvg.WorkCenterTypeCode_2 as vdm_arbty preserving type)` |
| `OperationControlProfile` | `cast(afvg.OperationControlProfile as pph_steus preserving type)` |
| `ControlRecipeDestination` | `afvg.ControlRecipeDestination` |
| `OperationConfirmation` | `afvg.OperationConfirmation` |
| `NumberOfOperationConfirmations` | `cast(afvg.NumberOfOperationConfirmations as pph_noofconf preserving type)` |
| `FactoryCalendar` | `cast(afvg.FactoryCalendar as cr_wfcid preserving type)` |
| `CapacityRequirement` | `afvg.CapacityRequirement` |
| `CapacityRequirementItem` | `cast(afvg.CapacityRequirementItem as pph_bedzl preserving type)` |
| `ChangeNumber` | `afvg.ChangeNumber` |
| `ObjectInternalID` | `cast(afvg.ObjectInternalID as pph_objnr preserving type)` |
| `OperationTrackingNumber` | `afvg.OperationTrackingNumber` |
| `BillOfOperationsType` | `cast(afvg.BillOfOperationsType as billofoperationstype preserving type)` |
| `BillOfOperationsGroup` | `afvg.BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `afvg.BillOfOperationsVariant` |
| `BillOfOperationsSequence` | `cast(afvg.BillOfOperationsSequence as boosequence preserving type)` |
| `BOOOperationInternalID` | `afvg.BOOOperationInternalID` |
| `BillOfOperationsVersion` | `afvg.BillOfOperationsVersion` |
| `BillOfMaterialCategory` | `cast(afvg.BillOfMaterialCategory as pph_stlty preserving type)` |
| `BillOfMaterialInternalID` | `afvg.BillOfMaterialInternalID` |
| `BillOfMaterialInternalID_2` | `afvg.BillOfMaterialInternalID_2` |
| `BillOfMaterialItemNodeNumber` | `cast(afvg.BillOfMaterialItemNodeNumber as pph_stlkn preserving type)` |
| `BOMItemNodeCount` | `afvg.BOMItemNodeCount` |
| `ExtProcgOperationHasSubcontrg` | `afvg.ExtProcgOperationHasSubcontrg` |
| `PurchasingOrganization` | `cast(afvg.PurchasingOrganization as pph_ekorg preserving type)` |
| `PurchasingGroup` | `afvg.PurchasingGroup` |
| `PurchaseRequisition` | `afvg.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `cast(afvg.PurchaseRequisitionItem as pph_bnfpo preserving type)` |
| `PurchaseOrder` | `cast(afvg.PurchasingDocument as vdm_purchaseorder preserving type)` |
| `PurchaseOrderItem` | `cast(afvg.PurchasingDocumentItem as vdm_purchaseorderitem preserving type)` |
| `PurchaseOutlineAgreement` | `cast(afvg.PurchasingDocument as pph_konnr preserving type)` |
| `PurchaseOutlineAgreementItem` | `cast(afvg.PurchasingDocumentItem as pph_ktpnr preserving type)` |
| `PurgInfoRecNonStockItmSortTerm` | `afvg.PurgInfoRecNonStockItmSortTerm` |
| `PurchasingInfoRecord` | `cast(afvg.PurchasingInfoRecord as pph_infnr preserving type)` |
| `PurgInfoRecdDataIsFixed` | `cast(afvg.PurgInfoRecdDataIsFixed as vdm_kzfix preserving type)` |
| `PurchasingInfoRecordCategory` | `cast(afvg.PurchasingInfoRecordCategory as pph_esokz preserving type)` |
| `Supplier` | `afvg.Supplier` |
| `PurchaseRequisitionPlndDlvDurn` | `afvg.PlannedDeliveryDuration` |
| `GoodsRecipientName` | `cast(afvg.GoodsRecipientName as pph_wempf preserving type)` |
| `UnloadingPointName` | `afvg.UnloadingPointName` |
| `MaterialGroup` | `afvg.MaterialGroup` |
| `InspectionLotType` | `afvg.InspectionLotType` |
| `OpExternalProcessingCurrency` | `afvg.Currency` |
| `OpExternalProcessingPrice` | `afvg.OpExternalProcessingPrice` |
| `NumberOfOperationPriceUnits` | `afvg.NumberOfOperationPriceUnits` |
| `CompanyCode` | `afvg.CompanyCode` |
| `BusinessArea` | `afvg.BusinessArea` |
| `ControllingArea` | `aufv.ControllingArea` |
| `ProfitCenter` | `afvg.ProfitCenter` |
| `RequestingCostCenter` | `afvg.RequestingCostCenter` |
| `CostElement` | `afvg.CostElement` |
| `CostingVariant` | `afvg.CostingVariant` |
| `CostingSheet` | `afvg.CostingSheet` |
| `CostEstimate` | `afvg.CostEstimate` |
| `ControllingObjectCurrency` | `afvg.ControllingObjectCurrency` |
| `ControllingObjectClass` | `cast(afvg.ControllingObjectClass as pph_scope preserving type)` |
| `FunctionalArea` | `afvg.FunctionalArea` |
| `TaxJurisdiction` | `afvg.TaxJurisdiction` |
| `EmployeeWageType` | `cast(afvg.EmployeeWageType as pph_loart preserving type)` |
| `EmployeeWageGroup` | `cast(afvg.EmployeeWageGroup as pph_logrp preserving type)` |
| `EmployeeSuitability` | `cast(afvg.EmployeeSuitability as pph_qualf preserving type)` |
| `NumberOfTimeTickets` | `afvg.NumberOfTimeTickets` |
| `Personnel` | `cast(afvg.Personnel as pph_pernr preserving type)` |
| `NumberOfEmployees` | `cast(afvg.NumberOfEmployees as pph_anzms preserving type)` |
| `OperationSetupGroupCategory` | `cast(afvg.OperationSetupGroupCategory as pph_rfgrp preserving type)` |
| `OperationSetupGroup` | `cast(afvg.OperationSetupGroup as pph_rfsch preserving type)` |
| `OperationSetupType` | `cast(afvg.OperationSetupType as pph_rasch preserving type)` |
| `OperationOverlappingIsRequired` | `afvg.OperationOverlappingIsRequired` |
| `OperationOverlappingIsPossible` | `afvg.OperationOverlappingIsPossible` |
| `OperationsIsAlwaysOverlapping` | `afvg.OperationsIsAlwaysOverlapping` |
| `OperationSplitIsRequired` | `afvg.OperationSplitIsRequired` |
| `OverlapMinimumTransferQty` | `afvg.OverlapMinimumTransferQty` |
| `MaximumNumberOfSplits` | `afvg.MaximumNumberOfSplits` |
| `ActualNumberOfSplits` | `afvg.ActualNumberOfSplits` |
| `MinProcessingDurnPerSplitUnit` | `afvg.MinProcessingDurnPerSplitUnit` |
| `MinProcessingDurationPerSplit` | `afvg.MinProcessingDurationPerSplit` |
| `LeadTimeReductionStrategy` | `cast(afvg.LeadTimeReductionStrategy as pph_rstra preserving type)` |
| `OpSchedldReductionLevel` | `afvg.OpSchedldReductionLevel` |
| `OpErlstSchedldExecStrtDte` | `cast(afvg.OpErlstSchedldExecStrtDte as vdm_fsavd preserving type)` |
| `OpErlstSchedldExecStrtTme` | `cast(afvg.OpErlstSchedldExecStrtTme as vdm_fsavz preserving type)` |
| `OpErlstSchedldProcgStrtDte` | `cast(afvg.OpErlstSchedldProcgStrtDte as vdm_fssbd preserving type)` |
| `OpErlstSchedldProcgStrtTme` | `cast(afvg.OpErlstSchedldProcgStrtTme as vdm_fssbz preserving type)` |
| `OpErlstSchedldTrdwnStrtDte` | `cast(afvg.OpErlstSchedldTrdwnStrtDte as vdm_fssad preserving type)` |
| `OpErlstSchedldTrdwnStrtTme` | `cast(afvg.OpErlstSchedldTrdwnStrtTme as vdm_fssaz preserving type)` |
| `OpErlstSchedldExecEndDte` | `cast(afvg.OpErlstSchedldExecEndDte as vdm_fsedd preserving type)` |
| `OpErlstSchedldExecEndTme` | `cast(afvg.OpErlstSchedldExecEndTme as vdm_fsedz preserving type)` |
| `OpLtstSchedldExecStrtDte` | `cast(afvg.OpLtstSchedldExecStrtDte as vdm_ssavd preserving type)` |
| `OpLtstSchedldExecStrtTme` | `cast(afvg.OpLtstSchedldExecStrtTme as vdm_ssavz preserving type)` |
| `OpLtstSchedldProcgStrtDte` | `cast(afvg.OpLtstSchedldProcgStrtDte as vdm_sssbd preserving type)` |
| `OpLtstSchedldProcgStrtTme` | `cast(afvg.OpLtstSchedldProcgStrtTme as vdm_sssbz preserving type)` |
| `OpLtstSchedldTrdwnStrtDte` | `cast(afvg.OpLtstSchedldTrdwnStrtDte as vdm_sssad preserving type)` |
| `OpLtstSchedldTrdwnStrtTme` | `cast(afvg.OpLtstSchedldTrdwnStrtTme as vdm_sssaz preserving type)` |
| `OpLtstSchedldExecEndDte` | `cast(afvg.OpLtstSchedldExecEndDte as vdm_ssedd preserving type)` |
| `OpLtstSchedldExecEndTme` | `cast(afvg.OpLtstSchedldExecEndTme as vdm_ssedz preserving type)` |
| `SchedldFcstdEarliestStartDate` | `cast(afvg.SchedldFcstdEarliestStartDate as pph_fpavd preserving type)` |
| `SchedldFcstdEarliestStartTime` | `cast(afvg.SchedldFcstdEarliestStartTime as pph_fpavz preserving type)` |
| `SchedldFcstdEarliestEndDate` | `cast(afvg.SchedldFcstdEarliestEndDate as pph_fpedd preserving type)` |
| `SchedldFcstdEarliestEndTime` | `cast(afvg.SchedldFcstdEarliestEndTime as pph_fpedz preserving type)` |
| `LatestSchedldFcstdStartDate` | `cast(afvg.LatestSchedldFcstdStartDate as pph_spavd preserving type)` |
| `SchedldFcstdLatestStartTime` | `cast(afvg.SchedldFcstdLatestStartTime as pph_spavz preserving type)` |
| `LatestSchedldFcstdEndDate` | `cast(afvg.LatestSchedldFcstdEndDate as pph_spedd preserving type)` |
| `SchedldFcstdLatestEndTime` | `cast(afvg.SchedldFcstdLatestEndTime as pph_spedz preserving type)` |
| `OperationConfirmedStartDate` | `cast(afvg.OperationConfirmedStartDate as pph_isavd preserving type)` |
| `OperationConfirmedEndDate` | `cast(afvg.OperationConfirmedEndDate as pph_ieavd preserving type)` |
| `OpActualExecutionStartDate` | `cast(afvg.OpActualExecutionStartDate as vdm_isdd preserving type)` |
| `OpActualExecutionStartTime` | `cast(afvg.OpActualExecutionStartTime as vdm_isdz preserving type)` |
| `OpActualSetupEndDate` | `cast(afvg.OpActualSetupEndDate as vdm_ierd preserving type)` |
| `OpActualSetupEndTime` | `cast(afvg.OpActualSetupEndTime as vdm_ierz preserving type)` |
| `OpActualProcessingStartDate` | `cast(afvg.OpActualProcessingStartDate as vdm_isbd preserving type)` |
| `OpActualProcessingStartTime` | `cast(afvg.OpActualProcessingStartTime as vdm_isbz preserving type)` |
| `OpActualProcessingEndDate` | `cast(afvg.OpActualProcessingEndDate as vdm_iebd preserving type)` |
| `OpActualProcessingEndTime` | `cast(afvg.OpActualProcessingEndTime as vdm_iebz preserving type)` |
| `OpActualTeardownStartDate` | `cast(afvg.OpActualTeardownStartDate as vdm_isad preserving type)` |
| `OpActualTeardownStartTme` | `cast(afvg.OpActualTeardownStartTme as vdm_isaz preserving type)` |
| `OpActualExecutionEndDate` | `cast(afvg.OpActualExecutionEndDate as vdm_iedd preserving type)` |
| `OpActualExecutionEndTime` | `cast(afvg.OpActualExecutionEndTime as vdm_iedz preserving type)` |
| `ActualForecastEndDate` | `cast(afvg.ActualForecastEndDate as pph_pedd preserving type)` |
| `ActualForecastEndTime` | `cast(afvg.ActualForecastEndTime as pph_pedz preserving type)` |
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
| `OverlapMinimumDurationUnit` | `cast(afvg.OverlapMinimumDurationUnit as pph_dzeimu preserving type)` |
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
| `OperationStandardDuration` | `afvg.OperationStandardDuration` |
| `OperationStandardDurationUnit` | `afvg.OperationStandardDurationUnit` |
| `MinimumDuration` | `cast(afvg.MinimumDuration as vdm_daumin preserving type)` |
| `MinimumDurationUnit` | `cast(afvg.MinimumDurationUnit as vdm_daumine preserving type)` |
| `MinimumProcessingDuration` | `afvg.MinimumProcessingDuration` |
| `MinimumProcessingDurationUnit` | `afvg.MinimumProcessingDurationUnit` |
| `ScheduledMoveDuration` | `afvg.ScheduledMoveDuration` |
| `ScheduledMoveDurationUnit` | `afvg.ScheduledMoveDurationUnit` |
| `ScheduledQueueDuration` | `afvg.ScheduledQueueDuration` |
| `ScheduledQueueDurationUnit` | `afvg.ScheduledQueueDurationUnit` |
| `ScheduledWaitDuration` | `afvg.ScheduledWaitDuration` |
| `ScheduledWaitDurationUnit` | `afvg.ScheduledWaitDurationUnit` |
| `PlannedDeliveryDuration` | `cast(afvg.PlannedDeliveryDuration as pph_plifz preserving type)` |
| `OpPlannedSetupDurn` | `afvg.OpPlannedSetupDurn` |
| `OpPlannedSetupDurnUnit` | `afvg.OpPlannedSetupDurnUnit` |
| `OpPlannedProcessingDurn` | `afvg.OpPlannedProcessingDurn` |
| `OpPlannedProcessingDurnUnit` | `cast(afvg.OpPlannedProcessingDurnUnit as pph_beaze preserving type)` |
| `OpPlannedTeardownDurn` | `afvg.OpPlannedTeardownDurn` |
| `OpPlannedTeardownDurnUnit` | `afvg.OpPlannedTeardownDurnUnit` |
| `ActualForecastDuration` | `cast(afvg.ActualForecastDuration as pph_pdau preserving type)` |
| `ActualForecastDurationUnit` | `cast(afvg.ActualForecastDurationUnit as pph_pdae preserving type)` |
| `ForecastProcessingDuration` | `afvg.ForecastProcessingDuration` |
| `ForecastProcessingDurationUnit` | `afvg.ForecastProcessingDurationUnit` |
| `StartDateOffsetReferenceCode` | `afvg.StartDateOffsetReferenceCode` |
| `StartDateOffsetDurationUnit` | `afvg.StartDateOffsetDurationUnit` |
| `StartDateOffsetDuration` | `afvg.StartDateOffsetDuration` |
| `EndDateOffsetReferenceCode` | `afvg.EndDateOffsetReferenceCode` |
| `EndDateOffsetDurationUnit` | `afvg.EndDateOffsetDurationUnit` |
| `EndDateOffsetDuration` | `afvg.EndDateOffsetDuration` |
| `StandardWorkFormulaParamGroup` | `afvg.StandardWorkFormulaParamGroup` |
| `OperationUnit` | `cast(afvg.OperationUnit as operationunit preserving type)` |
| `OpQtyToBaseQtyDnmntr` | `afvg.OpQtyToBaseQtyDnmntr` |
| `OpQtyToBaseQtyNmrtr` | `afvg.OpQtyToBaseQtyNmrtr` |
| `OperationScrapPercent` | `afvg.OperationScrapPercent` |
| `OperationReferenceQuantity` | `afvg.OperationReferenceQuantity` |
| `OpPlannedTotalQuantity` | `afvg.OpPlannedTotalQuantity` |
| `OpPlannedScrapQuantity` | `afvg.OpPlannedScrapQuantity` |
| `OpPlannedYieldQuantity` | `cast((afvg.OpPlannedTotalQuantity - afvg.OpPlannedScrapQuantity) as vdm_gmeng)` |
| `OpTotalConfirmedYieldQty` | `afvg.OpTotalConfirmedYieldQty` |
| `OpTotalConfirmedScrapQty` | `afvg.OpTotalConfirmedScrapQty` |
| `OperationConfirmedReworkQty` | `afvg.OperationConfirmedReworkQty` |
| `ProductionUnit` | `cast(aufv.ProductionUnit as productionunit preserving type)` |
| `OpTotConfdYieldQtyInOrdQtyUnit` | `afvg.OpTotConfdYieldQtyInOrdQtyUnit` |
| `OpWorkQuantityUnit1` | `cast(afvg.OpWorkQuantityUnit1 as vdm_ile01 preserving type)` |
| `OpConfirmedWorkQuantity1` | `cast(afvg.OpConfirmedWorkQuantity1 as vdm_ism01 preserving type)` |
| `NoFurtherOpWorkQuantity1IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity1IsExpd as vdm_lek01 preserving type)` |
| `OpWorkQuantityUnit2` | `cast(afvg.OpWorkQuantityUnit2 as vdm_ile02 preserving type)` |
| `OpConfirmedWorkQuantity2` | `cast(afvg.OpConfirmedWorkQuantity2 as vdm_ism02 preserving type)` |
| `NoFurtherOpWorkQuantity2IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity2IsExpd as vdm_lek02 preserving type)` |
| `OpWorkQuantityUnit3` | `cast(afvg.OpWorkQuantityUnit3 as vdm_ile03 preserving type)` |
| `OpConfirmedWorkQuantity3` | `cast(afvg.OpConfirmedWorkQuantity3 as vdm_ism03 preserving type)` |
| `NoFurtherOpWorkQuantity3IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity3IsExpd as vdm_lek03 preserving type)` |
| `OpWorkQuantityUnit4` | `cast(afvg.OpWorkQuantityUnit4 as vdm_ile04 preserving type)` |
| `OpConfirmedWorkQuantity4` | `cast(afvg.OpConfirmedWorkQuantity4 as vdm_ism04 preserving type)` |
| `NoFurtherOpWorkQuantity4IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity4IsExpd as vdm_lek04 preserving type)` |
| `OpWorkQuantityUnit5` | `cast(afvg.OpWorkQuantityUnit5 as vdm_ile05 preserving type)` |
| `OpConfirmedWorkQuantity5` | `cast(afvg.OpConfirmedWorkQuantity5 as vdm_ism05 preserving type)` |
| `NoFurtherOpWorkQuantity5IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity5IsExpd as vdm_lek05 preserving type)` |
| `OpWorkQuantityUnit6` | `cast(afvg.OpWorkQuantityUnit6 as vdm_ile06 preserving type)` |
| `OpConfirmedWorkQuantity6` | `cast(afvg.OpConfirmedWorkQuantity6 as vdm_ism06 preserving type)` |
| `NoFurtherOpWorkQuantity6IsExpd` | `cast(afvg.NoFurtherOpWorkQuantity6IsExpd as vdm_lek06 preserving type)` |
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
| `StandardWorkQtyDetnType` | `afvg.StandardWorkQtyDetnType` |
| `StandardWorkQtyDetnYear` | `afvg.StandardWorkQtyDetnYear` |
| `StandardWorkQuantityReference` | `afvg.StandardWorkQuantityReference` |
| `StandardWorkQuantityCalcBasis` | `afvg.StandardWorkQuantityCalcBasis` |
| `BusinessProcess` | `afvg.BusinessProcess` |
| `BusinessProcessEntryUnit` | `afvg.BusinessProcessEntryUnit` |
| `BusinessProcessConfirmedQty` | `afvg.BusinessProcessConfirmedQty` |
| `NoFurtherBusinessProcQtyIsExpd` | `afvg.NoFurtherBusinessProcQtyIsExpd` |
| `BusinessProcRemainingQtyUnit` | `afvg.BusinessProcRemainingQtyUnit` |
| `BusinessProcessRemainingQty` | `cast(afvg.BusinessProcessRemainingQty as pph_oprz1 preserving type)` |
| `SetupOpActyNtwkInstance` | `cast(afvg.SetupOpActyNtwkInstance as vdm_setup_instance preserving type)` |
| `ProduceOpActyNtwkInstance` | `cast(afvg.ProduceOpActyNtwkInstance as vdm_produce_instance preserving type)` |
| `TeardownOpActyNtwkInstance` | `cast(afvg.TeardownOpActyNtwkInstance as vdm_teardown_instance preserving type)` |
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
| `_OrderInternalID` | *Association* |
| `_MfgOrder` | *Association* |
| `_MfgOrderCategory` | *Association* |
| `_MfgOrderType` | *Association* |
| `_SuperiorOperation` | *Association* |
| `_OperationStandardTextCode` | *Association* |
| `_Plant` | *Association* |
| `_ProductionUnit` | *Association* |
| `_OperationUnit` | *Association* |
| `_ProductionSupervisor` | *Association* |
| `_MRPController` | *Association* |
| `_ResponsiblePlannerGroup` | *Association* |
| `_WorkCenterType` | *Association* |
| `_WorkCenter` | *Association* |
| `_WorkCenterType_2` | *Association* |
| `_WorkCenter_2` | *Association* |
| `_OperationControlProfile` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_BillOfOperationsVariant` | *Association* |
| `_BillOfOperationsSequence` | *Association* |
| `_BOOOperationInternalID` | *Association* |
| `_FactoryCalendar` | *Association* |
| `_CapacityRequirement` | *Association* |
| `_CapacityRequirementItem` | *Association* |
| `_ControlRecipeDestination` | *Association* |
| `_OperationConfirmation` | *Association* |
| `_ChangeNumber` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseContract` | *Association* |
| `_PurchaseContractItem` | *Association* |
| `_SchedulingAgreement` | *Association* |
| `_SchedulingAgreementItem` | *Association* |
| `_PurchaseRequisition` | *Association* |
| `_PurchaseRequisitionItem` | *Association* |
| `_PurchaseRequisitionItem2` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_PurchasingInfoRecord` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompany` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_EmployeeWageGroup` | *Association* |
| `_EmployeeSuitability` | *Association* |
| `_Employee` | *Association* |
| `_StatusObject` | *Association* |
| `_CompanyCode` | *Association* |
| `_ProfitCenter` | *Association* |
| `_RequestingCostCenter` | *Association* |
| `_CostElement` | *Association* |
| `_CostingVariant` | *Association* |
| `_ControllingArea` | *Association* |
| `_ControllingObjectClass` | *Association* |
| `_ControllingObjectCurrency` | *Association* |
| `_OpExternalProcessingCurrency` | *Association* |
| `_FunctionalArea` | *Association* |
| `_BusinessArea` | *Association* |
| `_BusinessProcess` | *Association* |
| `_BusinessProcessEntryUnit` | *Association* |
| `_ConfirmedWorkQuantityUnit1` | *Association* |
| `_ConfirmedWorkQuantityUnit2` | *Association* |
| `_ConfirmedWorkQuantityUnit3` | *Association* |
| `_ConfirmedWorkQuantityUnit4` | *Association* |
| `_ConfirmedWorkQuantityUnit5` | *Association* |
| `_ConfirmedWorkQuantityUnit6` | *Association* |
| `_StdWorkQuantityUnit1` | *Association* |
| `_StdWorkQuantityUnit2` | *Association* |
| `_StdWorkQuantityUnit3` | *Association* |
| `_StdWorkQuantityUnit4` | *Association* |
| `_StdWorkQuantityUnit5` | *Association* |
| `_StdWorkQuantityUnit6` | *Association* |
| `_OperationSetupGroupCategory` | *Association* |
| `_OperationSetupGroup` | *Association* |
| `_OperationSetupType` | *Association* |
| `_LeadTimeReductionStrategy` | *Association* |
| `_StartDateOffsetReferenceCode` | *Association* |
| `_EndDateOffsetReferenceCode` | *Association* |
| `_StandardWorkFmlaParamGroup` | *Association* |
| `_Language` | *Association* |
| `_SetupOpActyNtwkInstance` | *Association* |
| `_ProduceOpActyNtwkInstance` | *Association* |
| `_TeardownOpActyNtwkInstance` | *Association* |
| `_FreeDefinedQuantity1Unit` | *Association* |
| `_FreeDefinedQuantity2Unit` | *Association* |
| `_FreeDefinedAmount1Currency` | *Association* |
| `_FreeDefinedAmount2Currency` | *Association* |
| `_ManufacturingOrder` | *Association* |
| `_MfgOrderSequence` | *Association* |
| `_MfgOrderOpComponent` | *Association* |
| `_MfgOrderOpComponent2` | *Association* |
| `_MfgOrderOpComponent_3` | *Association* |
| `_MfgOrderOperationPRT` | *Association* |
| `_MfgOrderOperationPRT2` | *Association* |
| `_MfgOrderOperationPRT_3` | *Association* |
| `_MfgOrderOpTriggerPoint` | *Association* |
| `_MfgOrderOpTriggerPoint2` | *Association* |
| `_MfgOrderOpTriggerPoint_3` | *Association* |
| `_MfgOrderOpDocInfoRecord` | *Association* |
| `_MfgOrderOpDocInfoRecord2` | *Association* |
| `_MfgOrderOpDocInfoRecord_3` | *Association* |
| `_MfgOrderOperationConf` | *Association* |
| `_MfgOrderOperationConf2` | *Association* |
| `_MfgOrderOperationConf_3` | *Association* |
| `_MfgOrderOperationLongText` | *Association* |
| `_PlantText` | *Association* |
| `_MfgOrderText` | *Association* |
| `_InspectionLotText` | *Association* |
| `_WorkCenterText` | *Association* |
| `_SupplierText` | *Association* |
| `_StatusObjectText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_CompanyCodeText` | *Association* |
| `_ControllingAreaText` | *Association* |
| `_FunctionalAreaText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_MfgOrder` | `I_MfgOrder` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_SuperiorOperation` | `I_OrderOperationBasic` | [0..1] |
| `_OperationStandardTextCode` | `I_OperationStandardText` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_OperationUnit` | `I_UnitOfMeasure` | [1..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ResponsiblePlannerGroup` | `I_ResponsiblePlannerGroup` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_WorkCenterType_2` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter_2` | `I_WorkCenter` | [0..1] |
| `_OperationControlProfile` | `I_OperationControlProfile` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperationsVariant` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [0..1] |
| `_BOOOperationInternalID` | `I_BOOOperationInternalID` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_CapacityRequirement` | `I_CapacityRequirement` | [0..1] |
| `_CapacityRequirementItem` | `I_CapacityRequirementItem` | [0..1] |
| `_ControlRecipeDestination` | `I_ControlRecipeDestination` | [0..1] |
| `_OperationConfirmation` | `I_ConfirmationGroup` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [0..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [0..1] |
| `_PurchaseContract` | `I_PurchaseContractAPI01` | [0..1] |
| `_PurchaseContractItem` | `I_PurchaseContractItemAPI01` | [0..1] |
| `_SchedulingAgreement` | `I_SchedgagrmthdrApi01` | [0..1] |
| `_SchedulingAgreementItem` | `I_SchedgAgrmtItmApi01` | [0..1] |
| `_PurchaseRequisition` | `I_Purchaserequisition` | [0..1] |
| `_PurchaseRequisitionItem` | `I_PurchaseRequisition_Api01` | [0..1] |
| `_PurchaseRequisitionItem2` | `I_PurchaseRequisitionItemAPI01` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchasingInfoRecord` | `I_PurchasingInfoRecordApi01` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_EmployeeWageGroup` | `I_EmployeeWageGroup` | [0..1] |
| `_EmployeeSuitability` | `I_EmployeeSuitability` | [0..1] |
| `_Employee` | `I_PersonWorkAgreement_1` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_RequestingCostCenter` | `I_CostCenter` | [0..*] |
| `_CostElement` | `I_CostElement` | [0..1] |
| `_CostingVariant` | `I_CostingVariant` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_ControllingObjectCurrency` | `I_Currency` | [0..1] |
| `_OpExternalProcessingCurrency` | `I_Currency` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BusinessProcessEntryUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit1` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit2` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit3` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit4` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit5` | `I_UnitOfMeasure` | [0..1] |
| `_ConfirmedWorkQuantityUnit6` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit1` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit2` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit3` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit4` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit5` | `I_UnitOfMeasure` | [0..1] |
| `_StdWorkQuantityUnit6` | `I_UnitOfMeasure` | [0..1] |
| `_OperationSetupGroupCategory` | `I_OperationSetupGroupCategory` | [0..1] |
| `_OperationSetupGroup` | `I_OperationSetupGroup` | [0..1] |
| `_OperationSetupType` | `I_OperationSetupType` | [0..1] |
| `_LeadTimeReductionStrategy` | `I_LeadTimeReductionStrategy` | [0..1] |
| `_StartDateOffsetReferenceCode` | `I_OperationDateOffsetRefCode` | [0..1] |
| `_EndDateOffsetReferenceCode` | `I_OperationDateOffsetRefCode` | [0..1] |
| `_StandardWorkFmlaParamGroup` | `I_StandardWorkFmlaParamGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_SetupOpActyNtwkInstance` | `I_OpActyNtwkInstance` | [0..1] |
| `_ProduceOpActyNtwkInstance` | `I_OpActyNtwkInstance` | [0..1] |
| `_TeardownOpActyNtwkInstance` | `I_OpActyNtwkInstance` | [0..1] |
| `_FreeDefinedQuantity1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_FreeDefinedQuantity2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_FreeDefinedAmount1Currency` | `I_Currency` | [0..1] |
| `_FreeDefinedAmount2Currency` | `I_Currency` | [0..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderSequence` | `I_MfgOrderSequence` | [1..1] |
| `_MfgOrderOpComponent` | `I_MfgOrderOperationComponent` | [0..*] |
| `_MfgOrderOpComponent2` | `I_MfgOrderOperationComponent` | [0..*] |
| `_MfgOrderOpComponent_3` | `I_MfgOrderOperationComponent` | [0..*] |
| `_MfgOrderOperationPRT` | `I_MfgOrderOperationPRT` | [0..*] |
| `_MfgOrderOperationPRT2` | `I_MfgOrderOperationPRT` | [0..*] |
| `_MfgOrderOperationPRT_3` | `I_MfgOrderOperationPRT` | [0..*] |
| `_MfgOrderOpTriggerPoint` | `I_MfgOrderOperationTrggrPoint` | [0..*] |
| `_MfgOrderOpTriggerPoint2` | `I_MfgOrderOperationTrggrPoint` | [0..*] |
| `_MfgOrderOpTriggerPoint_3` | `I_MfgOrderOperationTrggrPoint` | [0..*] |
| `_MfgOrderOpDocInfoRecord` | `I_MfgOrderOpDocInfoRecdObjLink` | [0..*] |
| `_MfgOrderOpDocInfoRecord2` | `I_MfgOrderOpDocInfoRecdObjLink` | [0..*] |
| `_MfgOrderOpDocInfoRecord_3` | `I_MfgOrderOpDocInfoRecdObjLink` | [0..*] |
| `_MfgOrderOperationConf` | `I_MfgOrderOperationConf` | [0..*] |
| `_MfgOrderOperationConf2` | `I_MfgOrderConfirmation` | [0..*] |
| `_MfgOrderOperationConf_3` | `I_MfgOrderConfirmation` | [0..*] |
| `_MfgOrderOperationLongText` | `I_MfgOrderOperationLongText` | [0..1] |
| `_Extension` | `E_OrderOperation` | [1..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_MfgOrderText` | `I_ManufacturingOrder` | [1..1] |
| `_InspectionLotText` | `I_InspectionLot` | [0..1] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDEROPER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_LongText', '_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afvc',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['MfgOrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvv',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['MfgOrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvu',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['MfgOrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'OrderOperationInternalID'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderOperation'
@ObjectModel.semanticKey: ['ManufacturingOrder', 'ManufacturingOrderSequence', 'ManufacturingOrderOperation']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Operation'

define view I_ManufacturingOrderOperation
  as select from           I_OrderOperation      as afvg
    inner join             I_MfgOrderBasic       as aufv on  aufv.OrderInternalID = afvg.OrderInternalID
    left outer to one join I_OrderOperationBasic as afvc on  afvc.OrderInternalID = afvg.OrderInternalID //sub-operation handling
                                                         and afvc.OrderOperationInternalID = afvg.SuperiorOperationInternalID
    left outer to one join I_OrderOperationBasic as afvp on  afvp.OrderInternalID = afvg.OrderInternalID //phase handling
                                                         and afvp.OrderOperationInternalID = afvg.OrderIntBillOfOpItemOfPhase

  association [1..1] to I_OrderInternalID             as _OrderInternalID              on  $projection.MfgOrderInternalID = _OrderInternalID.OrderInternalID 
  association [1..1] to I_MfgOrder                    as _MfgOrder                     on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  association [1..1] to I_MfgOrderCategory            as _MfgOrderCategory             on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                as _MfgOrderType                 on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [0..1] to I_OrderOperationBasic         as _SuperiorOperation            on  $projection.MfgOrderInternalID = _SuperiorOperation.OrderInternalID
                                                                                       and $projection.SuperiorOperationInternalID   = _SuperiorOperation.OrderOperationInternalID
  association [0..1] to I_OperationStandardText       as _OperationStandardTextCode    on  $projection.OperationStandardTextCode = _OperationStandardTextCode.OperationStandardTextCode
  association [1..1] to I_Plant                       as _Plant                        on  $projection.Plant = _Plant.Plant
  association [1..1] to I_UnitOfMeasure               as _ProductionUnit               on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure               as _OperationUnit                on  $projection.OperationUnit = _OperationUnit.UnitOfMeasure
  association [0..1] to I_ProductionSupervisor        as _ProductionSupervisor         on  $projection.Plant                = _ProductionSupervisor.Plant
                                                                                       and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_MRPController               as _MRPController                on  $projection.Plant         = _MRPController.Plant
                                                                                       and $projection.MRPController = _MRPController.MRPController
  association [0..1] to I_ResponsiblePlannerGroup     as _ResponsiblePlannerGroup      on  $projection.Plant                   = _ResponsiblePlannerGroup.Plant
                                                                                       and $projection.ResponsiblePlannerGroup = _ResponsiblePlannerGroup.ResponsiblePlannerGroup
  association [0..1] to I_WorkCenterType              as _WorkCenterType               on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                  as _WorkCenter                   on  $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
                                                                                       and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [0..1] to I_WorkCenterType              as _WorkCenterType_2             on  $projection.WorkCenterTypeCode_2 = _WorkCenterType_2.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                  as _WorkCenter_2                 on  $projection.WorkCenterTypeCode_2 = _WorkCenter_2.WorkCenterTypeCode 
                                                                                       and $projection.WorkCenterInternalID = _WorkCenter_2.WorkCenterInternalID
  association [1..1] to I_OperationControlProfile     as _OperationControlProfile      on  $projection.OperationControlProfile = _OperationControlProfile.OperationControlProfile
  association [0..1] to I_BillOfOperationsType        as _BillOfOperationsType         on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup       as _BillOfOperationsGroup        on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_MfgBillOfOperations         as _BillOfOperationsVariant      on  $projection.BillOfOperationsType    = _BillOfOperationsVariant.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup   = _BillOfOperationsVariant.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant = _BillOfOperationsVariant.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsSequence as _BillOfOperationsSequence     on  $projection.BillOfOperationsType      = _BillOfOperationsSequence.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup     = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                       and $projection.BillOfOperationsVariant   = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                       and $projection.BillOfOperationsSequence  = _BillOfOperationsSequence.BillOfOperationsSequence
  association [0..1] to I_BOOOperationInternalID      as _BOOOperationInternalID       on  $projection.BillOfOperationsType   = _BOOOperationInternalID.BillOfOperationsType
                                                                                       and $projection.BillOfOperationsGroup  = _BOOOperationInternalID.BillOfOperationsGroup
                                                                                       and $projection.BOOOperationInternalID = _BOOOperationInternalID.BOOOperationInternalID
  association [0..1] to I_FactoryCalendar             as _FactoryCalendar              on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_CapacityRequirement         as _CapacityRequirement          on  $projection.CapacityRequirement = _CapacityRequirement.CapacityRequirement
  association [0..1] to I_CapacityRequirementItem     as _CapacityRequirementItem      on  $projection.CapacityRequirement     = _CapacityRequirementItem.CapacityRequirement
                                                                                       and $projection.CapacityRequirementItem = _CapacityRequirementItem.CapacityRequirementItem
  association [0..1] to I_ControlRecipeDestination    as _ControlRecipeDestination     on  $projection.Plant                    = _ControlRecipeDestination.Plant
                                                                                       and $projection.ControlRecipeDestination = _ControlRecipeDestination.ControlRecipeDestination
  association [0..1] to I_ConfirmationGroup           as _OperationConfirmation        on  $projection.OperationConfirmation = _OperationConfirmation.ConfirmationGroup
  association [0..1] to I_ChangeMaster                as _ChangeNumber                 on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_PurchaseOrderAPI01          as _PurchaseOrder                on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  association [0..1] to I_PurchaseOrderItemAPI01      as _PurchaseOrderItem            on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                                       and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  association [0..1] to I_PurchaseContractAPI01       as _PurchaseContract             on  $projection.PurchaseOutlineAgreement = _PurchaseContract.PurchaseContract
  association [0..1] to I_PurchaseContractItemAPI01   as _PurchaseContractItem         on  $projection.PurchaseOutlineAgreement     = _PurchaseContractItem.PurchaseContract
                                                                                       and $projection.PurchaseOutlineAgreementItem = _PurchaseContractItem.PurchaseContractItem
  association [0..1] to I_SchedgagrmthdrApi01         as _SchedulingAgreement          on  $projection.PurchaseOutlineAgreement = _SchedulingAgreement .SchedulingAgreement 
  association [0..1] to I_SchedgAgrmtItmApi01         as _SchedulingAgreementItem      on  $projection.PurchaseOutlineAgreement     = _SchedulingAgreementItem.SchedulingAgreement 
                                                                                       and $projection.PurchaseOutlineAgreementItem = _SchedulingAgreementItem.SchedulingAgreementItem
  association [0..1] to I_Purchaserequisition         as _PurchaseRequisition          on  $projection.PurchaseRequisition = _PurchaseRequisition.PurchaseRequisition
  association [0..1] to I_PurchaseRequisition_Api01   as _PurchaseRequisitionItem      on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                       and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem
  association [0..1] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisitionItem2    on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem2.PurchaseRequisition
                                                                                       and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem2.PurchaseRequisitionItem
  association [0..1] to I_PurchasingOrganization      as _PurchasingOrganization       on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingGroup             as _PurchasingGroup              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchasingInfoRecordApi01   as _PurchasingInfoRecord         on  $projection.PurchasingInfoRecord = _PurchasingInfoRecord.PurchasingInfoRecord
  association [0..1] to I_Supplier                    as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompany             as _SupplierCompany              on  $projection.Supplier    = _SupplierCompany.Supplier
                                                                                       and $projection.CompanyCode = _SupplierCompany.CompanyCode
  association [0..1] to I_SupplierCompanyByPlant      as _SupplierCompanyByPlant       on  $projection.Plant    = _SupplierCompanyByPlant.Plant
                                                                                       and $projection.Supplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_EmployeeWageGroup           as _EmployeeWageGroup            on  $projection.Plant             = _EmployeeWageGroup.Plant
                                                                                       and $projection.EmployeeWageGroup = _EmployeeWageGroup.EmployeeWageGroup
  association [0..1] to I_EmployeeSuitability         as _EmployeeSuitability          on  $projection.Plant               = _EmployeeSuitability.Plant
                                                                                       and $projection.EmployeeSuitability = _EmployeeSuitability.EmployeeSuitability
  association [0..1] to I_PersonWorkAgreement_1       as _Employee                     on  $projection.Personnel = _Employee.PersonWorkAgreement
  association [1..1] to I_StatusObject                as _StatusObject                 on  $projection.ObjectInternalID = _StatusObject.StatusObject
  association [0..1] to I_CompanyCode                 as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_ProfitCenter                as _ProfitCenter                 on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                       and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                  as _RequestingCostCenter         on  $projection.ControllingArea      = _RequestingCostCenter.ControllingArea
                                                                                       and $projection.RequestingCostCenter = _RequestingCostCenter.CostCenter
  association [0..1] to I_CostElement                 as _CostElement                  on  $projection.ControllingArea = _CostElement.ControllingArea
                                                                                       and $projection.CostElement = _CostElement.CostElement
  association [0..1] to I_CostingVariant              as _CostingVariant               on  $projection.CostingVariant = _CostingVariant.CostingVariant                                       
  association [0..1] to I_ControllingArea             as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_ControllingObjectClass      as _ControllingObjectClass       on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  association [0..1] to I_Currency                    as _ControllingObjectCurrency    on  $projection.ControllingObjectCurrency  = _ControllingObjectCurrency.Currency
  association [0..1] to I_Currency                    as _OpExternalProcessingCurrency on  $projection.OpExternalProcessingCurrency = _OpExternalProcessingCurrency.Currency
  association [0..1] to I_FunctionalArea              as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_BusinessArea                as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_BusinessProcess             as _BusinessProcess              on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                       and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association [0..1] to I_UnitOfMeasure               as _BusinessProcessEntryUnit     on  $projection.BusinessProcessEntryUnit = _BusinessProcessEntryUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit1   on  $projection.OpWorkQuantityUnit1 = _ConfirmedWorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit2   on  $projection.OpWorkQuantityUnit2 = _ConfirmedWorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit3   on  $projection.OpWorkQuantityUnit3 = _ConfirmedWorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit4   on  $projection.OpWorkQuantityUnit4 = _ConfirmedWorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit5   on  $projection.OpWorkQuantityUnit5 = _ConfirmedWorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ConfirmedWorkQuantityUnit6   on  $projection.OpWorkQuantityUnit6 = _ConfirmedWorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit1         on  $projection.WorkCenterStandardWorkQtyUnit1 = _StdWorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit2         on  $projection.WorkCenterStandardWorkQtyUnit2 = _StdWorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit3         on  $projection.WorkCenterStandardWorkQtyUnit3 = _StdWorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit4         on  $projection.WorkCenterStandardWorkQtyUnit4 = _StdWorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit5         on  $projection.WorkCenterStandardWorkQtyUnit5 = _StdWorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _StdWorkQuantityUnit6         on  $projection.WorkCenterStandardWorkQtyUnit6 = _StdWorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_OperationSetupGroupCategory as _OperationSetupGroupCategory  on  $projection.Plant                       = _OperationSetupGroupCategory.Plant
                                                                                       and $projection.OperationSetupGroupCategory = _OperationSetupGroupCategory.OperationSetupGroupCategory
  association [0..1] to I_OperationSetupGroup         as _OperationSetupGroup          on  $projection.OperationSetupGroup         = _OperationSetupGroup.OperationSetupGroup
                                                                                       and $projection.OperationSetupGroupCategory = _OperationSetupGroup.OperationSetupGroupCategory
                                                                                       and $projection.Plant              = _OperationSetupGroup.Plant
  association [0..1] to I_OperationSetupType          as _OperationSetupType           on  $projection.OperationSetupType = _OperationSetupType.OperationSetupType
                                                                                       and $projection.Plant              = _OperationSetupType.Plant
  association [0..1] to I_LeadTimeReductionStrategy   as _LeadTimeReductionStrategy    on  $projection.LeadTimeReductionStrategy = _LeadTimeReductionStrategy.LeadTimeReductionStrategy
                                                                                       and $projection.Plant                     = _LeadTimeReductionStrategy.Plant
  association [0..1] to I_OperationDateOffsetRefCode  as _StartDateOffsetReferenceCode on  $projection.StartDateOffsetReferenceCode = _StartDateOffsetReferenceCode.OperationDateOffsetRefCode 
  association [0..1] to I_OperationDateOffsetRefCode  as _EndDateOffsetReferenceCode   on  $projection.EndDateOffsetReferenceCode   = _EndDateOffsetReferenceCode.OperationDateOffsetRefCode 
  association [0..1] to I_StandardWorkFmlaParamGroup  as _StandardWorkFmlaParamGroup   on  $projection.StandardWorkFormulaParamGroup = _StandardWorkFmlaParamGroup.StandardWorkFormulaParamGroup
  association [0..1] to I_Language                    as _Language                     on  $projection.Language = _Language.Language
  association [0..1] to I_OpActyNtwkInstance          as _SetupOpActyNtwkInstance      on  $projection.SetupOpActyNtwkInstance    = _SetupOpActyNtwkInstance.OpActyNtwkInstance
  association [0..1] to I_OpActyNtwkInstance          as _ProduceOpActyNtwkInstance    on  $projection.ProduceOpActyNtwkInstance  = _ProduceOpActyNtwkInstance.OpActyNtwkInstance
  association [0..1] to I_OpActyNtwkInstance          as _TeardownOpActyNtwkInstance   on  $projection.TeardownOpActyNtwkInstance = _TeardownOpActyNtwkInstance.OpActyNtwkInstance
  association [0..1] to I_UnitOfMeasure               as _FreeDefinedQuantity1Unit     on  $projection.FreeDefinedQuantity1Unit   = _FreeDefinedQuantity1Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _FreeDefinedQuantity2Unit     on  $projection.FreeDefinedQuantity2Unit   = _FreeDefinedQuantity2Unit.UnitOfMeasure
  association [0..1] to I_Currency                    as _FreeDefinedAmount1Currency   on  $projection.FreeDefinedAmount1Currency = _FreeDefinedAmount1Currency.Currency
  association [0..1] to I_Currency                    as _FreeDefinedAmount2Currency   on  $projection.FreeDefinedAmount2Currency = _FreeDefinedAmount2Currency.Currency  
  -- to root: Header
  association [1..1] to I_ManufacturingOrder          as _ManufacturingOrder           on  $projection.ManufacturingOrder          = _ManufacturingOrder.ManufacturingOrder
  -- to parent: Sequence
  association [1..1] to I_MfgOrderSequence            as _MfgOrderSequence             on  $projection.ManufacturingOrder          = _MfgOrderSequence.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderSequence.ManufacturingOrderSequence
  -- to child: Components
  association [0..*] to I_MfgOrderOperationComponent  as _MfgOrderOpComponent          on  $projection.ManufacturingOrder          = _MfgOrderOpComponent.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOpComponent.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOpComponent.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderOperationComponent  as _MfgOrderOpComponent2         on  $projection.ManufacturingOrder            = _MfgOrderOpComponent2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence    = _MfgOrderOpComponent2.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2 = _MfgOrderOpComponent2.ManufacturingOrderOperation_2
  association [0..*] to I_MfgOrderOperationComponent  as _MfgOrderOpComponent_3        on  $projection.ManufacturingOrder             = _MfgOrderOpComponent_3.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOpComponent_3.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOpComponent_3.ManufacturingOrderOperation_2
                                                                                       and $projection.ManufacturingOrdSubOperation_2 = ''
  -- to child: Prodn. resource/tools
  association [0..*] to I_MfgOrderOperationPRT        as _MfgOrderOperationPRT         on  $projection.ManufacturingOrder          = _MfgOrderOperationPRT.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOperationPRT.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOperationPRT.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderOperationPRT        as _MfgOrderOperationPRT2        on  $projection.ManufacturingOrder            = _MfgOrderOperationPRT2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence    = _MfgOrderOperationPRT2.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2 = _MfgOrderOperationPRT2.ManufacturingOrderOperation_2
  association [0..*] to I_MfgOrderOperationPRT        as _MfgOrderOperationPRT_3       on  $projection.ManufacturingOrder             = _MfgOrderOperationPRT_3.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOperationPRT_3.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOperationPRT_3.ManufacturingOrderOperation_2
                                                                                       and $projection.ManufacturingOrdSubOperation_2 = ''
  -- to child: Trigger points
  association [0..*] to I_MfgOrderOperationTrggrPoint as _MfgOrderOpTriggerPoint       on  $projection.ManufacturingOrder          = _MfgOrderOpTriggerPoint.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOpTriggerPoint.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOpTriggerPoint.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderOperationTrggrPoint as _MfgOrderOpTriggerPoint2      on  $projection.ManufacturingOrder            = _MfgOrderOpTriggerPoint2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence    = _MfgOrderOpTriggerPoint2.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2 = _MfgOrderOpTriggerPoint2.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderOperationTrggrPoint as _MfgOrderOpTriggerPoint_3     on  $projection.ManufacturingOrder             = _MfgOrderOpTriggerPoint_3.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOpTriggerPoint_3.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOpTriggerPoint_3.ManufacturingOrderOperation
                                                                                       and $projection.ManufacturingOrdSubOperation_2 = ''
  -- to child: Document links
  association [0..*] to I_MfgOrderOpDocInfoRecdObjLink as _MfgOrderOpDocInfoRecord     on  $projection.ManufacturingOrder          = _MfgOrderOpDocInfoRecord.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOpDocInfoRecord.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOpDocInfoRecord.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderOpDocInfoRecdObjLink as _MfgOrderOpDocInfoRecord2    on  $projection.ManufacturingOrder             = _MfgOrderOpDocInfoRecord2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOpDocInfoRecord2.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOpDocInfoRecord2.ManufacturingOrderOperation_2
  association [0..*] to I_MfgOrderOpDocInfoRecdObjLink as _MfgOrderOpDocInfoRecord_3   on  $projection.ManufacturingOrder             = _MfgOrderOpDocInfoRecord_3.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOpDocInfoRecord_3.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOpDocInfoRecord_3.ManufacturingOrderOperation_2
                                                                                       and $projection.ManufacturingOrdSubOperation_2 = ''                     
  -- to child: Confirmations
  association [0..*] to I_MfgOrderOperationConf       as _MfgOrderOperationConf        on  $projection.ManufacturingOrder          = _MfgOrderOperationConf.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence  = _MfgOrderOperationConf.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation = _MfgOrderOperationConf.ManufacturingOrderOperation
  association [0..*] to I_MfgOrderConfirmation        as _MfgOrderOperationConf2       on  $projection.ManufacturingOrder             = _MfgOrderOperationConf2.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOperationConf2.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOperationConf2.ManufacturingOrderOperation_2
  association [0..*] to I_MfgOrderConfirmation        as _MfgOrderOperationConf_3      on  $projection.ManufacturingOrder             = _MfgOrderOperationConf_3.ManufacturingOrder
                                                                                       and $projection.ManufacturingOrderSequence     = _MfgOrderOperationConf_3.ManufacturingOrderSequence
                                                                                       and $projection.ManufacturingOrderOperation_2  = _MfgOrderOperationConf_3.ManufacturingOrderOperation_2
                                                                                       and $projection.ManufacturingOrdSubOperation_2 = ''
  -- to child: Longtext
  association [0..1] to I_MfgOrderOperationLongText   as _MfgOrderOperationLongText    on  $projection.MfgOrderInternalID       = _MfgOrderOperationLongText.MfgOrderInternalID
                                                                                       and $projection.OrderOperationInternalID = _MfgOrderOperationLongText.OrderOperationInternalID
                                                                                       and $projection.Language                 = _MfgOrderOperationLongText.LongTextLanguage
  -- to extension
  association [1..1] to E_OrderOperation              as _Extension                    on  $projection.MfgOrderInternalID       = _Extension.OrderInternalID
                                                                                       and $projection.OrderOperationInternalID = _Extension.OrderOperationInternalID
  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                       as _PlantText                    on  $projection.Plant = _PlantText.Plant
  association [1..1] to I_ManufacturingOrder          as _MfgOrderText                 on  $projection.ManufacturingOrder = _MfgOrderText.ManufacturingOrder
  association [0..1] to I_InspectionLot               as _InspectionLotText            on  $projection.InspectionLot = _InspectionLotText.InspectionLot
  association [0..*] to I_WorkCenterText              as _WorkCenterText               on  $projection.WorkCenterInternalID = _WorkCenterText.WorkCenterInternalID
                                                                                       and $projection.WorkCenterTypeCode_2 = _WorkCenterText.WorkCenterTypeCode
  association [0..1] to I_Supplier                    as _SupplierText                 on  $projection.Supplier = _SupplierText.Supplier
  association [1..1] to I_StatusObject                as _StatusObjectText             on  $projection.ObjectInternalID = _StatusObjectText.StatusObject
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText             on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText              on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea             as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea                                                                                     
  association [0..*] to I_FunctionalAreaText          as _FunctionalAreaText           on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
  -- end new associations for full coverage of text relations
{
      // Technical Key
      @ObjectModel.foreignKey.association: '_OrderInternalID'
  key cast(afvg.OrderInternalID          as pph_aufpl           preserving type) as MfgOrderInternalID,
  key cast(afvg.OrderOperationInternalID as operationinternalid preserving type) as OrderOperationInternalID,

      // Semantical key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      cast(aufv.ManufacturingOrder as manufacturingorder preserving type) as ManufacturingOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      cast(afvg.Sequence as manufacturingordersequence preserving type)   as ManufacturingOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrderOperation_2'
      @ObjectModel.text.element: ['MfgOrderOperationText']
      case
        when afvg.SuperiorOperationInternalID > '00000000' then
          cast(afvc.Operation as manufacturingorderoperation preserving type)  //superior operation ID
        else
          cast(afvg.Operation as manufacturingorderoperation preserving type)
      end                                                                 as ManufacturingOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.text.element: ['MfgOrderOperationText']
      case
        when afvg.SuperiorOperationInternalID > '00000000' then
          afvc.Operation_2                                                     //superior operation ID
        else
          afvg.Operation_2 
      end                                                                 as ManufacturingOrderOperation_2,  // no conv. exit
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ManufacturingOrdSubOperation_2'
      @ObjectModel.text.element: ['MfgOrderOperationText']
      cast(case
             when afvg.SuperiorOperationInternalID > '00000000' then afvg.Operation
             when afvg.SuperiorOperationInternalID = '00000000' then ''
      end as manufacturingordersuboperation preserving type)              as ManufacturingOrderSubOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' } } ]
      @ObjectModel.text.element: ['MfgOrderOperationText']
      case
        when afvg.SuperiorOperationInternalID > '00000000' then afvg.Operation_2
        when afvg.SuperiorOperationInternalID = '00000000' then ''
      end                                                                 as ManufacturingOrdSubOperation_2,  // no conv. exit
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MfgOrderOperationOrSubOp_2'
      afvc.Operation                                                      as MfgOrderOperationOrSubOp,
      afvc.Operation_2                                                    as MfgOrderOperationOrSubOp_2,
      
      // Process Order Phase handling 
      afvg.MfgOrderOperationIsPhase,      
      --Reference to superior operation of a phase  
      afvg.OrderIntBillOfOpItemOfPhase,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SuperiorOperation_2'
      cast(afvp.Operation   as vdm_supop   preserving type)               as MfgOrderPhaseSuperiorOperation,
      cast(afvp.Operation_2 as vdm_supop_2 preserving type)               as SuperiorOperation_2,             // no conv. exit  
      
      // Order header data
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      cast(aufv.ManufacturingOrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(aufv.ManufacturingOrderType     as manufacturingordertype preserving type)     as ManufacturingOrderType,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(aufv.ProductionSupervisor       as pph_fevor preserving type)                  as ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(aufv.MRPController              as pph_dispo preserving type)                  as MRPController,
      @ObjectModel.foreignKey.association: '_ResponsiblePlannerGroup'
      cast(aufv.ResponsiblePlannerGroup    as vagrp preserving type)                      as ResponsiblePlannerGroup,
      cast(aufv.ProductConfiguration       as product_configuration preserving type)      as ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InspectionLotStdVH', element: 'InspectionLot' } } ]
      aufv.InspectionLot,
      aufv.ManufacturingOrderImportance,

      // Text
      @Semantics.text: true
      cast(afvg.OperationText as mfgorderoperationtext preserving type) as MfgOrderOperationText,
      @ObjectModel.foreignKey.association: '_OperationStandardTextCode'      
      cast(afvg.StandardTextInternalID as pph_ktsch preserving type)    as OperationStandardTextCode,
      // Long text logic
      cast(case 
             when afvg.Language <> '' then 'X'
             else afvg.Language
      end as aufltext preserving type)                                  as OperationHasLongText,
      @ObjectModel.foreignKey.association: '_Language'
      afvg.Language                                                     as Language,

      // Attributes
      afvg.OperationIsToBeDeleted,
      cast(afvg.NumberOfCapacities as pph_anzkap preserving type)       as NumberOfCapacities,
      afvg.NumberOfConfirmationSlips,
      afvg.OperationImportance,

      // Assignments
      @ObjectModel.foreignKey.association: '_SuperiorOperation'
      afvg.SuperiorOperationInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      afvg.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter_2'
      @ObjectModel.text.association: '_WorkCenterText'
      cast(afvg.WorkCenterInternalID as pph_arbid preserving type)              as WorkCenterInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WorkCenterTypeCode_2'
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      cast(afvg.WorkCenterTypeCode   as pph_arbty preserving type)              as WorkCenterTypeCode,    // CHAR1
      @ObjectModel.foreignKey.association: '_WorkCenterType_2'
      cast(afvg.WorkCenterTypeCode_2 as vdm_arbty preserving type)              as WorkCenterTypeCode_2,  // CHAR2
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(afvg.OperationControlProfile as pph_steus preserving type)           as OperationControlProfile,
      @ObjectModel.foreignKey.association: '_ControlRecipeDestination'
      afvg.ControlRecipeDestination,
      @ObjectModel.foreignKey.association: '_OperationConfirmation'
      afvg.OperationConfirmation,
      cast(afvg.NumberOfOperationConfirmations as pph_noofconf preserving type) as NumberOfOperationConfirmations,
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast(afvg.FactoryCalendar as cr_wfcid preserving type)                    as FactoryCalendar,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]  
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      afvg.CapacityRequirement,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapRqmtItmStdVH', element: 'CapacityRequirementItem' } } ] 
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
      cast(afvg.CapacityRequirementItem as pph_bedzl preserving type)           as CapacityRequirementItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      afvg.ChangeNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'      
      cast(afvg.ObjectInternalID as pph_objnr preserving type)                  as ObjectInternalID,
      afvg.OperationTrackingNumber,

      // Assignments BOO and BOM
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast(afvg.BillOfOperationsType as billofoperationstype preserving type)   as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'      
      afvg.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperationsVariant'
      afvg.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
      cast(afvg.BillOfOperationsSequence as boosequence preserving type)        as BillOfOperationsSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
      afvg.BOOOperationInternalID,
      afvg.BillOfOperationsVersion,
      cast(afvg.BillOfMaterialCategory as pph_stlty preserving type)            as BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialInternalID_2'
      afvg.BillOfMaterialInternalID,
      afvg.BillOfMaterialInternalID_2,   // no conv. exit
      cast(afvg.BillOfMaterialItemNodeNumber as pph_stlkn preserving type)      as BillOfMaterialItemNodeNumber,
      afvg.BOMItemNodeCount,

      // Assignments Purchasing
      afvg.ExtProcgOperationHasSubcontrg,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      cast(afvg.PurchasingOrganization as pph_ekorg preserving type)             as PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      afvg.PurchasingGroup,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaserequisitionStdVH', element: 'PurchaseRequisition' } } ]  
      afvg.PurchaseRequisition,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchaserequisitionitemStdVH', element: 'PurchaseRequisitionItem' } } ] 
      cast(afvg.PurchaseRequisitionItem as pph_bnfpo preserving type)            as PurchaseRequisitionItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchaseOutlineAgreement'
      cast(afvg.PurchasingDocument     as vdm_purchaseorder     preserving type) as PurchaseOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchaseOutlineAgreementItem'
      cast(afvg.PurchasingDocumentItem as vdm_purchaseorderitem preserving type) as PurchaseOrderItem,
      cast(afvg.PurchasingDocument     as pph_konnr             preserving type) as PurchaseOutlineAgreement,
      cast(afvg.PurchasingDocumentItem as pph_ktpnr             preserving type) as PurchaseOutlineAgreementItem,
      afvg.PurgInfoRecNonStockItmSortTerm,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingInfoRecordStdVH', element: 'PurchasingInfoRecord' } } ]
      cast(afvg.PurchasingInfoRecord as pph_infnr preserving type)               as PurchasingInfoRecord,
      cast(afvg.PurgInfoRecdDataIsFixed as vdm_kzfix preserving type)            as PurgInfoRecdDataIsFixed,
      cast(afvg.PurchasingInfoRecordCategory as pph_esokz preserving type)       as PurchasingInfoRecordCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      afvg.Supplier,
      afvg.PlannedDeliveryDuration as PurchaseRequisitionPlndDlvDurn,
      @Semantics.text: true
      cast(afvg.GoodsRecipientName as pph_wempf preserving type)                 as GoodsRecipientName,
      @Semantics.text: true
      afvg.UnloadingPointName,
      afvg.MaterialGroup,
      afvg.InspectionLotType,

      // Amount and Currency
      @Semantics.currencyCode: true
      afvg.Currency as OpExternalProcessingCurrency,
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
      aufv.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
--    @ObjectModel.foreignKey.association: '_ProfitCenter'
      afvg.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
--    @ObjectModel.foreignKey.association: '_RequestingCostCenter'
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
      cast(afvg.ControllingObjectClass as pph_scope preserving type)             as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      afvg.FunctionalArea,
      afvg.TaxJurisdiction,

      // Assignments HR
      cast(afvg.EmployeeWageType    as pph_loart preserving type) as EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      cast(afvg.EmployeeWageGroup   as pph_logrp preserving type) as EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      cast(afvg.EmployeeSuitability as pph_qualf preserving type) as EmployeeSuitability,
      afvg.NumberOfTimeTickets,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PersWrkAgrmtSrchHelp', element: 'PersonWorkAgreement' } } ]
      @ObjectModel.foreignKey.association: '_Employee'
      cast(afvg.Personnel           as pph_pernr preserving type) as Personnel,
      cast(afvg.NumberOfEmployees   as pph_anzms preserving type) as NumberOfEmployees,

      // Setup and Overlapping
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'      
      cast(afvg.OperationSetupGroupCategory as pph_rfgrp preserving type)   as OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_OperationSetupGroup'
      cast(afvg.OperationSetupGroup         as pph_rfsch preserving type)   as OperationSetupGroup,
      @ObjectModel.foreignKey.association: '_OperationSetupType'
      cast(afvg.OperationSetupType          as pph_rasch preserving type)   as OperationSetupType,
      afvg.OperationOverlappingIsRequired,
      afvg.OperationOverlappingIsPossible,
      afvg.OperationsIsAlwaysOverlapping,
      afvg.OperationSplitIsRequired,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      afvg.OverlapMinimumTransferQty,
      afvg.MaximumNumberOfSplits,
      afvg.ActualNumberOfSplits,
      afvg.MinProcessingDurnPerSplitUnit,
      @Semantics.quantity.unitOfMeasure: 'MinProcessingDurnPerSplitUnit'
      afvg.MinProcessingDurationPerSplit,
     
      @ObjectModel.foreignKey.association: '_LeadTimeReductionStrategy'
      cast(afvg.LeadTimeReductionStrategy as pph_rstra preserving type)     as LeadTimeReductionStrategy,
      afvg.OpSchedldReductionLevel,

      // Scheduled Dates and Times
      cast(afvg.OpErlstSchedldExecStrtDte     as vdm_fsavd preserving type) as OpErlstSchedldExecStrtDte,
      cast(afvg.OpErlstSchedldExecStrtTme     as vdm_fsavz preserving type) as OpErlstSchedldExecStrtTme,
      cast(afvg.OpErlstSchedldProcgStrtDte    as vdm_fssbd preserving type) as OpErlstSchedldProcgStrtDte,
      cast(afvg.OpErlstSchedldProcgStrtTme    as vdm_fssbz preserving type) as OpErlstSchedldProcgStrtTme,
      cast(afvg.OpErlstSchedldTrdwnStrtDte    as vdm_fssad preserving type) as OpErlstSchedldTrdwnStrtDte,
      cast(afvg.OpErlstSchedldTrdwnStrtTme    as vdm_fssaz preserving type) as OpErlstSchedldTrdwnStrtTme,
      cast(afvg.OpErlstSchedldExecEndDte      as vdm_fsedd preserving type) as OpErlstSchedldExecEndDte,
      cast(afvg.OpErlstSchedldExecEndTme      as vdm_fsedz preserving type) as OpErlstSchedldExecEndTme,
      cast(afvg.OpLtstSchedldExecStrtDte      as vdm_ssavd preserving type) as OpLtstSchedldExecStrtDte,
      cast(afvg.OpLtstSchedldExecStrtTme      as vdm_ssavz preserving type) as OpLtstSchedldExecStrtTme,
      cast(afvg.OpLtstSchedldProcgStrtDte     as vdm_sssbd preserving type) as OpLtstSchedldProcgStrtDte,
      cast(afvg.OpLtstSchedldProcgStrtTme     as vdm_sssbz preserving type) as OpLtstSchedldProcgStrtTme,
      cast(afvg.OpLtstSchedldTrdwnStrtDte     as vdm_sssad preserving type) as OpLtstSchedldTrdwnStrtDte,
      cast(afvg.OpLtstSchedldTrdwnStrtTme     as vdm_sssaz preserving type) as OpLtstSchedldTrdwnStrtTme,
      cast(afvg.OpLtstSchedldExecEndDte       as vdm_ssedd preserving type) as OpLtstSchedldExecEndDte,
      cast(afvg.OpLtstSchedldExecEndTme       as vdm_ssedz preserving type) as OpLtstSchedldExecEndTme,
      cast(afvg.SchedldFcstdEarliestStartDate as pph_fpavd preserving type) as SchedldFcstdEarliestStartDate,
      cast(afvg.SchedldFcstdEarliestStartTime as pph_fpavz preserving type) as SchedldFcstdEarliestStartTime,
      cast(afvg.SchedldFcstdEarliestEndDate   as pph_fpedd preserving type) as SchedldFcstdEarliestEndDate,
      cast(afvg.SchedldFcstdEarliestEndTime   as pph_fpedz preserving type) as SchedldFcstdEarliestEndTime,
      cast(afvg.LatestSchedldFcstdStartDate   as pph_spavd preserving type) as LatestSchedldFcstdStartDate,
      cast(afvg.SchedldFcstdLatestStartTime   as pph_spavz preserving type) as SchedldFcstdLatestStartTime,
      cast(afvg.LatestSchedldFcstdEndDate     as pph_spedd preserving type) as LatestSchedldFcstdEndDate,
      cast(afvg.SchedldFcstdLatestEndTime     as pph_spedz preserving type) as SchedldFcstdLatestEndTime,

      // Actual/Confirmed Dates and Times
      cast(afvg.OperationConfirmedStartDate   as pph_isavd preserving type) as OperationConfirmedStartDate,
      cast(afvg.OperationConfirmedEndDate     as pph_ieavd preserving type) as OperationConfirmedEndDate,
      cast(afvg.OpActualExecutionStartDate    as vdm_isdd preserving type)  as OpActualExecutionStartDate,
      cast(afvg.OpActualExecutionStartTime    as vdm_isdz preserving type)  as OpActualExecutionStartTime,
      cast(afvg.OpActualSetupEndDate          as vdm_ierd preserving type)  as OpActualSetupEndDate,
      cast(afvg.OpActualSetupEndTime          as vdm_ierz preserving type)  as OpActualSetupEndTime,
      cast(afvg.OpActualProcessingStartDate   as vdm_isbd preserving type)  as OpActualProcessingStartDate,
      cast(afvg.OpActualProcessingStartTime   as vdm_isbz preserving type)  as OpActualProcessingStartTime,
      cast(afvg.OpActualProcessingEndDate     as vdm_iebd preserving type)  as OpActualProcessingEndDate,
      cast(afvg.OpActualProcessingEndTime     as vdm_iebz preserving type)  as OpActualProcessingEndTime,
      cast(afvg.OpActualTeardownStartDate     as vdm_isad preserving type)  as OpActualTeardownStartDate,
      cast(afvg.OpActualTeardownStartTme      as vdm_isaz preserving type)  as OpActualTeardownStartTme,
      cast(afvg.OpActualExecutionEndDate      as vdm_iedd preserving type)  as OpActualExecutionEndDate,
      cast(afvg.OpActualExecutionEndTime      as vdm_iedz preserving type)  as OpActualExecutionEndTime,
      cast(afvg.ActualForecastEndDate         as pph_pedd preserving type)  as ActualForecastEndDate,
      cast(afvg.ActualForecastEndTime         as pph_pedz preserving type)  as ActualForecastEndTime,

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
      cast(afvg.OverlapMinimumDurationUnit as pph_dzeimu preserving type) as OverlapMinimumDurationUnit,
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
      afvg.OperationStandardDuration,
      afvg.OperationStandardDurationUnit,
      cast(afvg.MinimumDuration     as vdm_daumin  preserving type)       as MinimumDuration,
      cast(afvg.MinimumDurationUnit as vdm_daumine preserving type)       as MinimumDurationUnit,
      afvg.MinimumProcessingDuration,
      afvg.MinimumProcessingDurationUnit,
      afvg.ScheduledMoveDuration,
      afvg.ScheduledMoveDurationUnit,
      afvg.ScheduledQueueDuration,
      afvg.ScheduledQueueDurationUnit,
      afvg.ScheduledWaitDuration,
      afvg.ScheduledWaitDurationUnit,
      cast(afvg.PlannedDeliveryDuration     as pph_plifz preserving type) as PlannedDeliveryDuration,
      afvg.OpPlannedSetupDurn,
      afvg.OpPlannedSetupDurnUnit,
      afvg.OpPlannedProcessingDurn,
      cast(afvg.OpPlannedProcessingDurnUnit as pph_beaze preserving type) as OpPlannedProcessingDurnUnit,
      afvg.OpPlannedTeardownDurn,
      afvg.OpPlannedTeardownDurnUnit,
      cast(afvg.ActualForecastDuration      as pph_pdau  preserving type) as ActualForecastDuration,
      cast(afvg.ActualForecastDurationUnit  as pph_pdae  preserving type) as ActualForecastDurationUnit,
      afvg.ForecastProcessingDuration,
      afvg.ForecastProcessingDurationUnit,

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
      cast(afvg.OperationUnit as operationunit preserving type) as OperationUnit,
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
      cast((afvg.OpPlannedTotalQuantity - afvg.OpPlannedScrapQuantity) as vdm_gmeng) as OpPlannedYieldQuantity,
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
      cast(aufv.ProductionUnit as productionunit preserving type) as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      afvg.OpTotConfdYieldQtyInOrdQtyUnit,

      // Confirmed Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit1'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit1            as vdm_ile01 preserving type) as OpWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit1'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity1       as vdm_ism01 preserving type) as OpConfirmedWorkQuantity1,
      cast(afvg.NoFurtherOpWorkQuantity1IsExpd as vdm_lek01 preserving type) as NoFurtherOpWorkQuantity1IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit2'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit2            as vdm_ile02 preserving type) as OpWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit2'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity2       as vdm_ism02 preserving type) as OpConfirmedWorkQuantity2,
      cast(afvg.NoFurtherOpWorkQuantity2IsExpd as vdm_lek02 preserving type) as NoFurtherOpWorkQuantity2IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit3'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit3            as vdm_ile03 preserving type) as OpWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit3'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity3       as vdm_ism03 preserving type) as OpConfirmedWorkQuantity3,
      cast(afvg.NoFurtherOpWorkQuantity3IsExpd as vdm_lek03 preserving type) as NoFurtherOpWorkQuantity3IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit4'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit4            as vdm_ile04 preserving type) as OpWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit4'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity4       as vdm_ism04 preserving type) as OpConfirmedWorkQuantity4,
      cast(afvg.NoFurtherOpWorkQuantity4IsExpd as vdm_lek04 preserving type) as NoFurtherOpWorkQuantity4IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit5'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit5            as vdm_ile05 preserving type) as OpWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit5'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity5       as vdm_ism05 preserving type) as OpConfirmedWorkQuantity5,
      cast(afvg.NoFurtherOpWorkQuantity5IsExpd as vdm_lek05 preserving type) as NoFurtherOpWorkQuantity5IsExpd,

      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit6'
      @Semantics.unitOfMeasure: true
      cast(afvg.OpWorkQuantityUnit6            as vdm_ile06 preserving type) as OpWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit6'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity6       as vdm_ism06 preserving type) as OpConfirmedWorkQuantity6,
      cast(afvg.NoFurtherOpWorkQuantity6IsExpd as vdm_lek06 preserving type) as NoFurtherOpWorkQuantity6IsExpd,

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

      // Determination of Standard Values
      afvg.StandardWorkQtyDetnType,
      afvg.StandardWorkQtyDetnYear,
      afvg.StandardWorkQuantityReference,
      afvg.StandardWorkQuantityCalcBasis,
      
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
      cast(afvg.BusinessProcessRemainingQty as pph_oprz1 preserving type) as BusinessProcessRemainingQty,

      // OAN data
--    @ObjectModel.foreignKey.association: '_SetupOpActyNtwkInstance'
      cast(afvg.SetupOpActyNtwkInstance    as vdm_setup_instance   preserving type)  as SetupOpActyNtwkInstance ,
--    @ObjectModel.foreignKey.association: '_ProduceOpActyNtwkInstance'
      cast(afvg.ProduceOpActyNtwkInstance  as vdm_produce_instance preserving type)  as ProduceOpActyNtwkInstance,
--    @ObjectModel.foreignKey.association:  '_TeardownOpActyNtwkInstance'
      cast(afvg.TeardownOpActyNtwkInstance as vdm_teardown_instance preserving type) as TeardownOpActyNtwkInstance,

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
      _OrderInternalID,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _ManufacturingOrder,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_ManufacturingOrder'
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _MfgOrderSequence,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpComponent_3'
      _MfgOrderOpComponent,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpComponent_3'
      _MfgOrderOpComponent2,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOpComponent_3,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOperationPRT_3'
      _MfgOrderOperationPRT,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOperationPRT_3'
      _MfgOrderOperationPRT2,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOperationPRT_3,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpTriggerPoint_3'
      _MfgOrderOpTriggerPoint,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MfgOrderOpTriggerPoint_3'
      _MfgOrderOpTriggerPoint2,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOpTriggerPoint_3,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOpDocInfoRecord_3'
      _MfgOrderOpDocInfoRecord,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOpDocInfoRecord_3'
      _MfgOrderOpDocInfoRecord2,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOpDocInfoRecord_3,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationConf_3'
      _MfgOrderOperationConf,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationConf_3'
      _MfgOrderOperationConf2,
      _MfgOrderOperationConf_3,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderOperationLongText,
      _MfgOrderCategory,
      _MfgOrderType,
      _SuperiorOperation,
      _OperationStandardTextCode,
      _Plant,
      _MRPController,
      _ResponsiblePlannerGroup,
      _ProductionSupervisor,
      _ProductionUnit,
      _OperationUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenter_2'
      _WorkCenter,
      _WorkCenter_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenterType_2'
      @Consumption.hidden: true
      _WorkCenterType,
      @Consumption.hidden: true
      _WorkCenterType_2,
      _OperationControlProfile,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperationsVariant,
      _BillOfOperationsSequence,
      @Consumption.hidden: true
      _BOOOperationInternalID,
      _OperationConfirmation,
      _FactoryCalendar,
      _CapacityRequirement,
      _CapacityRequirementItem,
      _ControlRecipeDestination,
      _ChangeNumber,
      _PurchasingOrganization,
      _PurchasingGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SchedulingAgreement'
      _PurchaseOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SchedulingAgreementItem'
      _PurchaseOrderItem,
      _PurchaseContract,
      _PurchaseContractItem,
      _SchedulingAgreement,
      _SchedulingAgreementItem,
      _PurchaseRequisition,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PurchaseRequisitionItem2'
      _PurchaseRequisitionItem,
      _PurchaseRequisitionItem2,
      _PurchasingInfoRecord,
      _Supplier,
      @Consumption.hidden: true   
      _SupplierCompany,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _OpExternalProcessingCurrency,
      _EmployeeWageGroup,
      _EmployeeSuitability,
      _Employee,
      _StatusObject,
      _CompanyCode,
      _ProfitCenter,
      _RequestingCostCenter,
      _ControllingArea,
      _ControllingObjectClass,
      _ControllingObjectCurrency,
      _CostElement,
      _CostingVariant,
      _FunctionalArea,
      _BusinessArea,
      _BusinessProcess,
      _BusinessProcessEntryUnit,
      _ConfirmedWorkQuantityUnit1,
      _ConfirmedWorkQuantityUnit2,
      _ConfirmedWorkQuantityUnit3,
      _ConfirmedWorkQuantityUnit4,
      _ConfirmedWorkQuantityUnit5,
      _ConfirmedWorkQuantityUnit6,
      _StdWorkQuantityUnit1,
      _StdWorkQuantityUnit2,
      _StdWorkQuantityUnit3,
      _StdWorkQuantityUnit4,
      _StdWorkQuantityUnit5,
      _StdWorkQuantityUnit6,
      _OperationSetupGroupCategory,
      _OperationSetupGroup,
      _OperationSetupType,
      _LeadTimeReductionStrategy,
      _StartDateOffsetReferenceCode,
      _EndDateOffsetReferenceCode,
      _StandardWorkFmlaParamGroup,
      _Language,
      _SetupOpActyNtwkInstance,
      _ProduceOpActyNtwkInstance,
      _TeardownOpActyNtwkInstance,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_MfgOrderOperationLongText'
      afvg._LongText,
      _FreeDefinedQuantity1Unit,
      _FreeDefinedQuantity2Unit,
      _FreeDefinedAmount1Currency,
      _FreeDefinedAmount2Currency,
      
      // Text relations
      _MfgOrderText,
      _PlantText,
      _WorkCenterText,
      _InspectionLotText,
      _SupplierText,
      _StatusObjectText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText
}
where
     aufv.ManufacturingOrderCategory = '10'
  or aufv.ManufacturingOrderCategory = '40'; //Manufacturing orders only
```
