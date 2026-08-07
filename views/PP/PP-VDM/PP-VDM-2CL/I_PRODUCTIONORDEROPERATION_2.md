---
name: I_PRODUCTIONORDEROPERATION_2
description: Production OrderOPERATION 2
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
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDEROPERATION_2

**Production OrderOPERATION 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderInternalID` | ✓ | |  | `cast(afvg.OrderInternalID as pph_aufpl preserving type)` |  |  |
| `OrderOperationInternalID` | ✓ | |  | `cast(afvg.OrderOperationInternalID as operationinternalid preserving type)` |  |  |
| `ProductionOrder` |  | |  | `cast(aufv.ManufacturingOrder as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderSequence` |  | |  | `cast(afvg.Sequence as vdm_prodnordersequence preserving type)` |  |  |
| `ProductionOrderOperation` |  | |  | `cast(afvg.Operation_2 as vdm_prodnorderoperation preserving type)` |  |  |
| `ProductionOrderType` |  | |  | `cast(aufv.ManufacturingOrderType as vdm_prodnordertype preserving type)` |  |  |
| `ProductionSupervisor` |  | |  | `cast(aufv.ProductionSupervisor as pph_fevor preserving type)` |  |  |
| `MRPController` |  | |  | `cast(aufv.MRPController as pph_dispo preserving type)` |  |  |
| `ProductionOrderOperationText` |  | |  | `OperationText` |  |  |
| `OperationStandardTextCode` |  | |  | `cast(afvg.StandardTextInternalID as pph_ktsch preserving type)` |  |  |
| `OperationHasLongText` |  | |  | `cast(case afvg.Language when '' then '' else 'X' end as aufltext preserving type)` |  |  |
| `LongTextLanguage` |  | |  | `Language` |  |  |
| `OperationIsToBeDeleted` |  | |  |  |  |  |
| `NumberOfCapacities` |  | |  | `cast(afvg.NumberOfCapacities as pph_anzkap preserving type)` |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  | `cast(afvg.WorkCenterInternalID as pph_arbid preserving type)` |  |  |
| `WorkCenterType` |  | |  | `cast(afvg.WorkCenterTypeCode_2 as vdm_arbty preserving type)` |  |  |
| `OperationControlProfile` |  | |  | `cast(afvg.OperationControlProfile as pph_steus preserving type)` |  |  |
| `OperationConfirmation` |  | |  |  |  |  |
| `NumberOfOperationConfirmations` |  | |  | `cast(afvg.NumberOfOperationConfirmations as pph_noofconf preserving type)` |  |  |
| `FactoryCalendar` |  | |  | `cast(afvg.FactoryCalendar as cr_wfcid preserving type)` |  |  |
| `CapacityRequirement` |  | |  |  |  |  |
| `CapacityRequirementItem` |  | |  | `cast(afvg.CapacityRequirementItem as pph_bedzl preserving type)` |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  | `cast(afvg.ObjectInternalID as pph_objnr preserving type)` |  |  |
| `OperationTrackingNumber` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  | `cast(afvg.NumberOfEmployees as pph_anzms preserving type)` |  |  |
| `BillOfOperationsType` |  | |  | `cast(afvg.BillOfOperationsType as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `BillOfOperationsSequence` |  | |  | `cast(afvg.BillOfOperationsSequence as boosequence preserving type)` |  |  |
| `BOOOperationInternalID` |  | |  |  |  |  |
| `BillOfOperationsVersion` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  | `cast(afvg.BillOfMaterialCategory as pph_stlty preserving type)` |  |  |
| `BillOfMaterialInternalID` |  | |  | `BillOfMaterialInternalID_2` |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  | `cast(afvg.BillOfMaterialItemNodeNumber as pph_stlkn preserving type)` |  |  |
| `BOMItemNodeCount` |  | |  |  |  |  |
| `ExtProcgOperationHasSubcontrg` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  | `cast(afvg.PurchasingOrganization as pph_ekorg preserving type)` |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  | `cast(afvg.PurchaseRequisitionItem as pph_bnfpo preserving type)` |  |  |
| `PurchaseOutlineAgreement` |  | |  | `cast(afvg.PurchasingDocument as pph_konnr preserving type)` |  |  |
| `PurchaseOutlineAgreementItem` |  | |  | `cast(afvg.PurchasingDocumentItem as pph_ktpnr preserving type)` |  |  |
| `PurgInfoRecNonStockItmSortTerm` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  | `cast(afvg.PurchasingInfoRecord as pph_infnr preserving type)` |  |  |
| `PurgInfoRecdDataIsFixed` |  | |  | `cast(afvg.PurgInfoRecdDataIsFixed as vdm_kzfix preserving type)` |  |  |
| `PurchasingInfoRecordCategory` |  | |  | `cast(afvg.PurchasingInfoRecordCategory as pph_esokz preserving type)` |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchaseRequisitionPlndDlvDurn` |  | |  | `cast(afvg.PlannedDeliveryDuration as pph_plifz preserving type)` |  |  |
| `GoodsRecipientName` |  | |  | `cast(afvg.GoodsRecipientName as pph_wempf preserving type)` |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  | `Currency` |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `RequestingCostCenter` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `CostingVariant` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `CostEstimate` |  | |  |  |  |  |
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `ControllingObjectClass` |  | |  | `cast(afvg.ControllingObjectClass as pph_scope preserving type)` |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `OperationSetupGroupCategory` |  | |  | `cast(afvg.OperationSetupGroupCategory as pph_rfgrp preserving type)` |  |  |
| `OperationSetupGroup` |  | |  | `cast(afvg.OperationSetupGroup as pph_rfsch preserving type)` |  |  |
| `OperationSetupType` |  | |  | `cast(afvg.OperationSetupType as pph_rasch preserving type)` |  |  |
| `OperationOverlappingIsRequired` |  | |  |  |  |  |
| `OperationOverlappingIsPossible` |  | |  |  |  |  |
| `OperationsIsAlwaysOverlapping` |  | |  |  |  |  |
| `OperationSplitIsRequired` |  | |  |  |  |  |
| `OverlapMinimumTransferQty` |  | |  |  |  |  |
| `MaximumNumberOfSplits` |  | |  |  |  |  |
| `ActualNumberOfSplits` |  | |  |  |  |  |
| `MinProcessingDurnPerSplitUnit` |  | |  |  |  |  |
| `MinProcessingDurationPerSplit` |  | |  |  |  |  |
| `LeadTimeReductionStrategy` |  | |  | `cast(afvg.LeadTimeReductionStrategy as pph_rstra preserving type)` |  |  |
| `OpSchedldReductionLevel` |  | |  |  |  |  |
| `OpErlstSchedldExecStrtDte` |  | |  | `cast(afvg.OpErlstSchedldExecStrtDte as vdm_fsavd preserving type)` |  |  |
| `OpErlstSchedldExecStrtTme` |  | |  | `cast(afvg.OpErlstSchedldExecStrtTme as vdm_fsavz preserving type)` |  |  |
| `OpErlstSchedldProcgStrtDte` |  | |  | `cast(afvg.OpErlstSchedldProcgStrtDte as vdm_fssbd preserving type)` |  |  |
| `OpErlstSchedldProcgStrtTme` |  | |  | `cast(afvg.OpErlstSchedldProcgStrtTme as vdm_fssbz preserving type)` |  |  |
| `OpErlstSchedldTrdwnStrtDte` |  | |  | `cast(afvg.OpErlstSchedldTrdwnStrtDte as vdm_fssad preserving type)` |  |  |
| `OpErlstSchedldTrdwnStrtTme` |  | |  | `cast(afvg.OpErlstSchedldTrdwnStrtTme as vdm_fssaz preserving type)` |  |  |
| `OpErlstSchedldExecEndDte` |  | |  | `cast(afvg.OpErlstSchedldExecEndDte as vdm_fsedd preserving type)` |  |  |
| `OpErlstSchedldExecEndTme` |  | |  | `cast(afvg.OpErlstSchedldExecEndTme as vdm_fsedz preserving type)` |  |  |
| `OpLtstSchedldExecStrtDte` |  | |  | `cast(afvg.OpLtstSchedldExecStrtDte as vdm_ssavd preserving type)` |  |  |
| `OpLtstSchedldExecStrtTme` |  | |  | `cast(afvg.OpLtstSchedldExecStrtTme as vdm_ssavz preserving type)` |  |  |
| `OpLtstSchedldProcgStrtDte` |  | |  | `cast(afvg.OpLtstSchedldProcgStrtDte as vdm_sssbd preserving type)` |  |  |
| `OpLtstSchedldProcgStrtTme` |  | |  | `cast(afvg.OpLtstSchedldProcgStrtTme as vdm_sssbz preserving type)` |  |  |
| `OpLtstSchedldTrdwnStrtDte` |  | |  | `cast(afvg.OpLtstSchedldTrdwnStrtDte as vdm_sssad preserving type)` |  |  |
| `OpLtstSchedldTrdwnStrtTme` |  | |  | `cast(afvg.OpLtstSchedldTrdwnStrtTme as vdm_sssaz preserving type)` |  |  |
| `OpLtstSchedldExecEndDte` |  | |  | `cast(afvg.OpLtstSchedldExecEndDte as vdm_ssedd preserving type)` |  |  |
| `OpLtstSchedldExecEndTme` |  | |  | `cast(afvg.OpLtstSchedldExecEndTme as vdm_ssedz preserving type)` |  |  |
| `SchedldFcstdEarliestStartDate` |  | |  | `cast(afvg.SchedldFcstdEarliestStartDate as pph_fpavd preserving type)` |  |  |
| `SchedldFcstdEarliestStartTime` |  | |  | `cast(afvg.SchedldFcstdEarliestStartTime as pph_fpavz preserving type)` |  |  |
| `SchedldFcstdEarliestEndDate` |  | |  | `cast(afvg.SchedldFcstdEarliestEndDate as pph_fpedd preserving type)` |  |  |
| `SchedldFcstdEarliestEndTime` |  | |  | `cast(afvg.SchedldFcstdEarliestEndTime as pph_fpedz preserving type)` |  |  |
| `LatestSchedldFcstdStartDate` |  | |  | `cast(afvg.LatestSchedldFcstdStartDate as pph_spavd preserving type)` |  |  |
| `SchedldFcstdLatestStartTime` |  | |  | `cast(afvg.SchedldFcstdLatestStartTime as pph_spavz preserving type)` |  |  |
| `LatestSchedldFcstdEndDate` |  | |  | `cast(afvg.LatestSchedldFcstdEndDate as pph_spedd preserving type)` |  |  |
| `SchedldFcstdLatestEndTime` |  | |  | `cast(afvg.SchedldFcstdLatestEndTime as pph_spedz preserving type)` |  |  |
| `OperationConfirmedStartDate` |  | |  | `cast(afvg.OperationConfirmedStartDate as pph_isavd preserving type)` |  |  |
| `OperationConfirmedEndDate` |  | |  | `cast(afvg.OperationConfirmedEndDate as pph_ieavd preserving type)` |  |  |
| `OpActualExecutionStartDate` |  | |  | `cast(afvg.OpActualExecutionStartDate as vdm_isdd preserving type)` |  |  |
| `OpActualExecutionStartTime` |  | |  | `cast(afvg.OpActualExecutionStartTime as vdm_isdz preserving type)` |  |  |
| `OpActualSetupEndDate` |  | |  | `cast(afvg.OpActualSetupEndDate as vdm_ierd preserving type)` |  |  |
| `OpActualSetupEndTime` |  | |  | `cast(afvg.OpActualSetupEndTime as vdm_ierz preserving type)` |  |  |
| `OpActualProcessingStartDate` |  | |  | `cast(afvg.OpActualProcessingStartDate as vdm_isbd preserving type)` |  |  |
| `OpActualProcessingStartTime` |  | |  | `cast(afvg.OpActualProcessingStartTime as vdm_isbz preserving type)` |  |  |
| `OpActualProcessingEndDate` |  | |  | `cast(afvg.OpActualProcessingEndDate as vdm_iebd preserving type)` |  |  |
| `OpActualProcessingEndTime` |  | |  | `cast(afvg.OpActualProcessingEndTime as vdm_iebz preserving type)` |  |  |
| `OpActualTeardownStartDate` |  | |  | `cast(afvg.OpActualTeardownStartDate as vdm_isad preserving type)` |  |  |
| `OpActualTeardownStartTme` |  | |  | `cast(afvg.OpActualTeardownStartTme as vdm_isaz preserving type)` |  |  |
| `OpActualExecutionEndDate` |  | |  | `cast(afvg.OpActualExecutionEndDate as vdm_iedd preserving type)` |  |  |
| `OpActualExecutionEndTime` |  | |  | `cast(afvg.OpActualExecutionEndTime as vdm_iedz preserving type)` |  |  |
| `ActualForecastEndDate` |  | |  | `cast(afvg.ActualForecastEndDate as pph_pedd preserving type)` |  |  |
| `ActualForecastEndTime` |  | |  | `cast(afvg.ActualForecastEndTime as pph_pedz preserving type)` |  |  |
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
| `ConfirmedBreakDuration` |  | |  |  |  |  |
| `OverlapMinimumDurationUnit` |  | |  | `cast(afvg.OverlapMinimumDurationUnit as pph_dzeimu preserving type)` |  |  |
| `OverlapMinimumDuration` |  | |  |  |  |  |
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
| `OperationStandardDuration` |  | |  |  |  |  |
| `OperationStandardDurationUnit` |  | |  |  |  |  |
| `MinimumDuration` |  | |  | `cast(afvg.MinimumDuration as vdm_daumin preserving type)` |  |  |
| `MinimumDurationUnit` |  | |  | `cast(afvg.MinimumDurationUnit as vdm_daumine preserving type)` |  |  |
| `MinimumProcessingDuration` |  | |  |  |  |  |
| `MinimumProcessingDurationUnit` |  | |  |  |  |  |
| `ScheduledMoveDuration` |  | |  |  |  |  |
| `ScheduledMoveDurationUnit` |  | |  |  |  |  |
| `ScheduledQueueDuration` |  | |  |  |  |  |
| `ScheduledQueueDurationUnit` |  | |  |  |  |  |
| `ScheduledWaitDuration` |  | |  |  |  |  |
| `ScheduledWaitDurationUnit` |  | |  |  |  |  |
| `OpPlannedSetupDurn` |  | |  |  |  |  |
| `OpPlannedSetupDurnUnit` |  | |  |  |  |  |
| `OpPlannedProcessingDurn` |  | |  |  |  |  |
| `OpPlannedProcessingDurnUnit` |  | |  | `cast(afvg.OpPlannedProcessingDurnUnit as pph_beaze preserving type)` |  |  |
| `OpPlannedTeardownDurn` |  | |  |  |  |  |
| `OpPlannedTeardownDurnUnit` |  | |  |  |  |  |
| `ActualForecastDuration` |  | |  | `cast(afvg.ActualForecastDuration as pph_pdau preserving type)` |  |  |
| `ActualForecastDurationUnit` |  | |  | `cast(afvg.ActualForecastDurationUnit as pph_pdae preserving type)` |  |  |
| `ForecastProcessingDuration` |  | |  |  |  |  |
| `ForecastProcessingDurationUnit` |  | |  |  |  |  |
| `StartDateOffsetReferenceCode` |  | |  |  |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |  |  |
| `StartDateOffsetDuration` |  | |  |  |  |  |
| `EndDateOffsetReferenceCode` |  | |  |  |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |  |  |
| `EndDateOffsetDuration` |  | |  |  |  |  |
| `StandardWorkFormulaParamGroup` |  | |  |  |  |  |
| `OperationUnit` |  | |  | `cast(afvg.OperationUnit as operationunit preserving type)` |  |  |
| `OpQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OpQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OperationScrapPercent` |  | |  |  |  |  |
| `OperationReferenceQuantity` |  | |  |  |  |  |
| `OpPlannedTotalQuantity` |  | |  |  |  |  |
| `OpPlannedScrapQuantity` |  | |  |  |  |  |
| `OpPlannedYieldQuantity` |  | |  | `cast((afvg.OpPlannedTotalQuantity - afvg.OpPlannedScrapQuantity) as vdm_gmeng)` |  |  |
| `OpTotalConfirmedYieldQty` |  | |  |  |  |  |
| `OpTotalConfirmedScrapQty` |  | |  |  |  |  |
| `OperationConfirmedReworkQty` |  | |  |  |  |  |
| `ProductionUnit` |  | |  | `cast(aufv.ProductionUnit as productionunit preserving type)` |  |  |
| `OpTotConfdYieldQtyInOrdQtyUnit` |  | |  |  |  |  |
| `WorkQuantityUnit1` |  | |  | `cast(afvg.OpWorkQuantityUnit1 as vdm_ile01 preserving type)` |  |  |
| `ConfirmedWorkQuantity1` |  | |  | `cast(afvg.OpConfirmedWorkQuantity1 as vdm_ism01 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity1IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity1IsExpd as vdm_lek01 preserving type)` |  |  |
| `WorkQuantityUnit2` |  | |  | `cast(afvg.OpWorkQuantityUnit2 as vdm_ile02 preserving type)` |  |  |
| `ConfirmedWorkQuantity2` |  | |  | `cast(afvg.OpConfirmedWorkQuantity2 as vdm_ism02 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity2IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity2IsExpd as vdm_lek02 preserving type)` |  |  |
| `WorkQuantityUnit3` |  | |  | `cast(afvg.OpWorkQuantityUnit3 as vdm_ile03 preserving type)` |  |  |
| `ConfirmedWorkQuantity3` |  | |  | `cast(afvg.OpConfirmedWorkQuantity3 as vdm_ism03 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity3IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity3IsExpd as vdm_lek03 preserving type)` |  |  |
| `WorkQuantityUnit4` |  | |  | `cast(afvg.OpWorkQuantityUnit4 as vdm_ile04 preserving type)` |  |  |
| `ConfirmedWorkQuantity4` |  | |  | `cast(afvg.OpConfirmedWorkQuantity4 as vdm_ism04 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity4IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity4IsExpd as vdm_lek04 preserving type)` |  |  |
| `WorkQuantityUnit5` |  | |  | `cast(afvg.OpWorkQuantityUnit5 as vdm_ile05 preserving type)` |  |  |
| `ConfirmedWorkQuantity5` |  | |  | `cast(afvg.OpConfirmedWorkQuantity5 as vdm_ism05 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity5IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity5IsExpd as vdm_lek05 preserving type)` |  |  |
| `WorkQuantityUnit6` |  | |  | `cast(afvg.OpWorkQuantityUnit6 as vdm_ile06 preserving type)` |  |  |
| `ConfirmedWorkQuantity6` |  | |  | `cast(afvg.OpConfirmedWorkQuantity6 as vdm_ism06 preserving type)` |  |  |
| `NoFurtherOpWorkQuantity6IsExpd` |  | |  | `cast(afvg.NoFurtherOpWorkQuantity6IsExpd as vdm_lek06 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit1` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit1 as pph_vge01 preserving type)` |  |  |
| `WorkCenterStandardWorkQty1` |  | |  | `cast(afvg.WorkCenterStandardWorkQty1 as vdm_vgw01 preserving type)` |  |  |
| `CostCtrActivityType1` |  | |  | `cast(afvg.CostCtrActivityType1 as vdm_lar01 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit2` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit2 as pph_vge02 preserving type)` |  |  |
| `WorkCenterStandardWorkQty2` |  | |  | `cast(afvg.WorkCenterStandardWorkQty2 as vdm_vgw02 preserving type)` |  |  |
| `CostCtrActivityType2` |  | |  | `cast(afvg.CostCtrActivityType2 as vdm_lar02 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit3` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit3 as pph_vge03 preserving type)` |  |  |
| `WorkCenterStandardWorkQty3` |  | |  | `cast(afvg.WorkCenterStandardWorkQty3 as vdm_vgw03 preserving type)` |  |  |
| `CostCtrActivityType3` |  | |  | `cast(afvg.CostCtrActivityType3 as vdm_lar03 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit4` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit4 as pph_vge04 preserving type)` |  |  |
| `WorkCenterStandardWorkQty4` |  | |  | `cast(afvg.WorkCenterStandardWorkQty4 as vdm_vgw04 preserving type)` |  |  |
| `CostCtrActivityType4` |  | |  | `cast(afvg.CostCtrActivityType4 as vdm_lar04 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit5` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit5 as pph_vge05 preserving type)` |  |  |
| `WorkCenterStandardWorkQty5` |  | |  | `cast(afvg.WorkCenterStandardWorkQty5 as vdm_vgw05 preserving type)` |  |  |
| `CostCtrActivityType5` |  | |  | `cast(afvg.CostCtrActivityType5 as vdm_lar05 preserving type)` |  |  |
| `WorkCenterStandardWorkQtyUnit6` |  | |  | `cast(afvg.WorkCenterStandardWorkQtyUnit6 as pph_vge06 preserving type)` |  |  |
| `WorkCenterStandardWorkQty6` |  | |  | `cast(afvg.WorkCenterStandardWorkQty6 as vdm_vgw06 preserving type)` |  |  |
| `CostCtrActivityType6` |  | |  | `cast(afvg.CostCtrActivityType6 as vdm_lar06 preserving type)` |  |  |
| `ForecastWorkQuantity1` |  | |  | `cast(afvg.ForecastWorkQuantity1 as vdm_ofm01 preserving type)` |  |  |
| `ForecastWorkQuantity2` |  | |  | `cast(afvg.ForecastWorkQuantity2 as vdm_ofm02 preserving type)` |  |  |
| `ForecastWorkQuantity3` |  | |  | `cast(afvg.ForecastWorkQuantity3 as vdm_ofm03 preserving type)` |  |  |
| `ForecastWorkQuantity4` |  | |  | `cast(afvg.ForecastWorkQuantity4 as vdm_ofm04 preserving type)` |  |  |
| `ForecastWorkQuantity5` |  | |  | `cast(afvg.ForecastWorkQuantity5 as vdm_ofm05 preserving type)` |  |  |
| `ForecastWorkQuantity6` |  | |  | `cast(afvg.ForecastWorkQuantity6 as vdm_ofm06 preserving type)` |  |  |
| `StandardWorkQtyDetnType` |  | |  |  |  |  |
| `StandardWorkQtyDetnYear` |  | |  |  |  |  |
| `StandardWorkQuantityReference` |  | |  |  |  |  |
| `StandardWorkQuantityCalcBasis` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `BusinessProcessEntryUnit` |  | |  |  |  |  |
| `BusinessProcessConfirmedQty` |  | |  |  |  |  |
| `NoFurtherBusinessProcQtyIsExpd` |  | |  |  |  |  |
| `BusinessProcRemainingQtyUnit` |  | |  |  |  |  |
| `BusinessProcessRemainingQty` |  | |  | `cast(afvg.BusinessProcessRemainingQty as pph_oprz1 preserving type)` |  |  |
| `_ProductionOrderInternal` | | ✓ | | | | |
| `_ProductionOrderType` | | ✓ | | | | |
| `_OperationStandardTextCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductionUnit` | | ✓ | | | | |
| `_OperationUnit` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_OperationControlProfile` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsVariant` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_CapacityRequirement` | | ✓ | | | | |
| `_CapacityRequirementItem` | | ✓ | | | | |
| `_OperationConfirmation` | | ✓ | | | | |
| `_ChangeNumber` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_SchedulingAgreement` | | ✓ | | | | |
| `_SchedulingAgreementItem` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_RequestingCostCenter` | | ✓ | | | | |
| `_CostElement` | | ✓ | | | | |
| `_CostingVariant` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_ControllingObjectCurrency` | | ✓ | | | | |
| `_OpExternalProcessingCurrency` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_BusinessProcessEntryUnit` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit1` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit2` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit3` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit4` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit5` | | ✓ | | | | |
| `_ConfirmedWorkQuantityUnit6` | | ✓ | | | | |
| `_StdWorkQuantityUnit1` | | ✓ | | | | |
| `_StdWorkQuantityUnit2` | | ✓ | | | | |
| `_StdWorkQuantityUnit3` | | ✓ | | | | |
| `_StdWorkQuantityUnit4` | | ✓ | | | | |
| `_StdWorkQuantityUnit5` | | ✓ | | | | |
| `_StdWorkQuantityUnit6` | | ✓ | | | | |
| `_OperationSetupGroupCategory` | | ✓ | | | | |
| `_OperationSetupGroup` | | ✓ | | | | |
| `_OperationSetupType` | | ✓ | | | | |
| `_LeadTimeReductionStrategy` | | ✓ | | | | |
| `_StartDateOffsetReferenceCode` | | ✓ | | | | |
| `_EndDateOffsetReferenceCode` | | ✓ | | | | |
| `_StandardWorkFmlaParamGroup` | | ✓ | | | | |
| `_LongTextLanguage` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_ProductionOrderText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_StatusObjectText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_FunctionalAreaText` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionOrderComponent` | | ✓ | | | | |
| `_ProductionOrderPRT` | | ✓ | | | | |
| `_ProductionOrderTriggerPoint` | | ✓ | | | | |
| `_ProdnOrderOperationCapacity` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderInternal` | `I_ProductionOrderInternalID` | [1..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_OperationStandardTextCode` | `I_OperationStandardText` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductionUnit` | `I_UnitOfMeasure` | [1..1] |
| `_OperationUnit` | `I_UnitOfMeasure` | [1..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_OperationControlProfile` | `I_OperationControlProfile` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperationsVariant` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [0..1] |
| `_BOOOperationInternalID` | `I_BOOOperationInternalID` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_CapacityRequirement` | `I_CapacityRequirement` | [0..1] |
| `_CapacityRequirementItem` | `I_CapacityRequirementItem` | [0..1] |
| `_OperationConfirmation` | `I_ConfirmationGroup` | [0..1] |
| `_ChangeNumber` | `I_ChangeMaster` | [0..1] |
| `_PurchaseContract` | `I_PurchaseContractAPI01` | [0..1] |
| `_PurchaseContractItem` | `I_PurchaseContractItemAPI01` | [0..1] |
| `_SchedulingAgreement` | `I_SchedgagrmthdrApi01` | [0..1] |
| `_SchedulingAgreementItem` | `I_SchedgAgrmtItmApi01` | [0..1] |
| `_PurchaseRequisition` | `I_Purchaserequisition` | [0..1] |
| `_PurchaseRequisitionItem` | `I_PurchaseRequisitionItemAPI01` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchasingInfoRecord` | `I_PurchasingInfoRecordApi01` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
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
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_Extension` | `E_OrderOperation` | [1..1] |
| `_ProductionOrderHeader` | `I_ProductionOrder` | [1..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_LongText', '_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afvc',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['OrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvv',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['OrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afvu',
                                          tableElement: ['aufpl'             , 'aplzl'],
                                          viewElement:  ['OrderInternalID', 'OrderOperationInternalID']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        } ] } }
@Analytics.technicalName: 'IPRODNORDEROP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderOperation'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Operation'

define view entity I_ProductionOrderOperation_2
  as select from   I_OrderOperation as afvg
    inner join     I_MfgOrderBasic  as aufv on  aufv.OrderInternalID = afvg.OrderInternalID

  association [1..1] to I_ProductionOrderInternalID    as _ProductionOrderInternal      on  $projection.OrderInternalID = _ProductionOrderInternal.ProductionOrderInternalID 
  association [1..1] to I_ProductionOrderType          as _ProductionOrderType          on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [0..1] to I_OperationStandardText        as _OperationStandardTextCode    on  $projection.OperationStandardTextCode = _OperationStandardTextCode.OperationStandardTextCode
  association [1..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [1..1] to I_UnitOfMeasure                as _ProductionUnit               on  $projection.ProductionUnit = _ProductionUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure                as _OperationUnit                on  $projection.OperationUnit = _OperationUnit.UnitOfMeasure
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor         on  $projection.Plant                = _ProductionSupervisor.Plant
                                                                                        and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_MRPController                as _MRPController                on  $projection.Plant         = _MRPController.Plant
                                                                                        and $projection.MRPController = _MRPController.MRPController
  association [0..1] to I_WorkCenterType               as _WorkCenterType               on  $projection.WorkCenterType = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                   as _WorkCenter                   on  $projection.WorkCenterType = _WorkCenter.WorkCenterTypeCode
                                                                                        and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [1..1] to I_OperationControlProfile      as _OperationControlProfile      on  $projection.OperationControlProfile = _OperationControlProfile.OperationControlProfile
  association [0..1] to I_BillOfOperationsType         as _BillOfOperationsType         on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup        on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_MfgBillOfOperations          as _BillOfOperationsVariant      on  $projection.BillOfOperationsType    = _BillOfOperationsVariant.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup   = _BillOfOperationsVariant.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant = _BillOfOperationsVariant.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence     on  $projection.BillOfOperationsType      = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup     = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant   = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence  = _BillOfOperationsSequence.BillOfOperationsSequence
  association [0..1] to I_BOOOperationInternalID       as _BOOOperationInternalID       on  $projection.BillOfOperationsType   = _BOOOperationInternalID.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup  = _BOOOperationInternalID.BillOfOperationsGroup
                                                                                        and $projection.BOOOperationInternalID = _BOOOperationInternalID.BOOOperationInternalID
  association [0..1] to I_FactoryCalendar              as _FactoryCalendar              on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_CapacityRequirement          as _CapacityRequirement          on  $projection.CapacityRequirement = _CapacityRequirement.CapacityRequirement
  association [0..1] to I_CapacityRequirementItem      as _CapacityRequirementItem      on  $projection.CapacityRequirement     = _CapacityRequirementItem.CapacityRequirement
                                                                                        and $projection.CapacityRequirementItem = _CapacityRequirementItem.CapacityRequirementItem
  association [0..1] to I_ConfirmationGroup            as _OperationConfirmation        on  $projection.OperationConfirmation = _OperationConfirmation.ConfirmationGroup
  association [0..1] to I_ChangeMaster                 as _ChangeNumber                 on  $projection.ChangeNumber = _ChangeNumber.ChangeNumber
  association [0..1] to I_PurchaseContractAPI01        as _PurchaseContract             on  $projection.PurchaseOutlineAgreement = _PurchaseContract.PurchaseContract
  association [0..1] to I_PurchaseContractItemAPI01    as _PurchaseContractItem         on  $projection.PurchaseOutlineAgreement     = _PurchaseContractItem.PurchaseContract
                                                                                        and $projection.PurchaseOutlineAgreementItem = _PurchaseContractItem.PurchaseContractItem
  association [0..1] to I_SchedgagrmthdrApi01          as _SchedulingAgreement          on  $projection.PurchaseOutlineAgreement = _SchedulingAgreement .SchedulingAgreement 
  association [0..1] to I_SchedgAgrmtItmApi01          as _SchedulingAgreementItem      on  $projection.PurchaseOutlineAgreement     = _SchedulingAgreementItem.SchedulingAgreement 
                                                                                        and $projection.PurchaseOutlineAgreementItem = _SchedulingAgreementItem.SchedulingAgreementItem
  association [0..1] to I_Purchaserequisition          as _PurchaseRequisition          on  $projection.PurchaseRequisition = _PurchaseRequisition.PurchaseRequisition
  association [0..1] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisitionItem      on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                        and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem
  association [0..1] to I_PurchasingOrganization       as _PurchasingOrganization       on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingGroup              as _PurchasingGroup              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchasingInfoRecordApi01    as _PurchasingInfoRecord         on  $projection.PurchasingInfoRecord = _PurchasingInfoRecord.PurchasingInfoRecord
  association [0..1] to I_Supplier                     as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [1..1] to I_StatusObject                 as _StatusObject                 on  $projection.ObjectInternalID = _StatusObject.StatusObject
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                 on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                   as _RequestingCostCenter         on  $projection.ControllingArea      = _RequestingCostCenter.ControllingArea
                                                                                        and $projection.RequestingCostCenter = _RequestingCostCenter.CostCenter
  association [0..1] to I_CostElement                  as _CostElement                  on  $projection.ControllingArea = _CostElement.ControllingArea
                                                                                        and $projection.CostElement = _CostElement.CostElement
  association [0..1] to I_CostingVariant               as _CostingVariant               on  $projection.CostingVariant = _CostingVariant.CostingVariant                                       
  association [0..1] to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_ControllingObjectClass       as _ControllingObjectClass       on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  association [0..1] to I_Currency                     as _ControllingObjectCurrency    on  $projection.ControllingObjectCurrency  = _ControllingObjectCurrency.Currency
  association [0..1] to I_Currency                     as _OpExternalProcessingCurrency on  $projection.OpExternalProcessingCurrency = _OpExternalProcessingCurrency.Currency
  association [0..1] to I_FunctionalArea               as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_BusinessArea                 as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_BusinessProcess              as _BusinessProcess              on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                        and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association [0..1] to I_UnitOfMeasure                as _BusinessProcessEntryUnit     on  $projection.BusinessProcessEntryUnit = _BusinessProcessEntryUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit1   on  $projection.WorkQuantityUnit1 = _ConfirmedWorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit2   on  $projection.WorkQuantityUnit2 = _ConfirmedWorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit3   on  $projection.WorkQuantityUnit3 = _ConfirmedWorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit4   on  $projection.WorkQuantityUnit4 = _ConfirmedWorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit5   on  $projection.WorkQuantityUnit5 = _ConfirmedWorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ConfirmedWorkQuantityUnit6   on  $projection.WorkQuantityUnit6 = _ConfirmedWorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit1         on  $projection.WorkCenterStandardWorkQtyUnit1 = _StdWorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit2         on  $projection.WorkCenterStandardWorkQtyUnit2 = _StdWorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit3         on  $projection.WorkCenterStandardWorkQtyUnit3 = _StdWorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit4         on  $projection.WorkCenterStandardWorkQtyUnit4 = _StdWorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit5         on  $projection.WorkCenterStandardWorkQtyUnit5 = _StdWorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StdWorkQuantityUnit6         on  $projection.WorkCenterStandardWorkQtyUnit6 = _StdWorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_OperationSetupGroupCategory  as _OperationSetupGroupCategory  on  $projection.Plant                       = _OperationSetupGroupCategory.Plant
                                                                                        and $projection.OperationSetupGroupCategory = _OperationSetupGroupCategory.OperationSetupGroupCategory
  association [0..1] to I_OperationSetupGroup          as _OperationSetupGroup          on  $projection.OperationSetupGroup         = _OperationSetupGroup.OperationSetupGroup
                                                                                        and $projection.OperationSetupGroupCategory = _OperationSetupGroup.OperationSetupGroupCategory
                                                                                        and $projection.Plant              = _OperationSetupGroup.Plant
  association [0..1] to I_OperationSetupType           as _OperationSetupType           on  $projection.OperationSetupType = _OperationSetupType.OperationSetupType
                                                                                        and $projection.Plant              = _OperationSetupType.Plant
  association [0..1] to I_LeadTimeReductionStrategy    as _LeadTimeReductionStrategy    on  $projection.LeadTimeReductionStrategy = _LeadTimeReductionStrategy.LeadTimeReductionStrategy
                                                                                        and $projection.Plant                     = _LeadTimeReductionStrategy.Plant
  association [0..1] to I_OperationDateOffsetRefCode   as _StartDateOffsetReferenceCode on  $projection.StartDateOffsetReferenceCode = _StartDateOffsetReferenceCode.OperationDateOffsetRefCode 
  association [0..1] to I_OperationDateOffsetRefCode   as _EndDateOffsetReferenceCode   on  $projection.EndDateOffsetReferenceCode   = _EndDateOffsetReferenceCode.OperationDateOffsetRefCode 
  association [0..1] to I_StandardWorkFmlaParamGroup   as _StandardWorkFmlaParamGroup   on  $projection.StandardWorkFormulaParamGroup = _StandardWorkFmlaParamGroup.StandardWorkFormulaParamGroup
  association [0..1] to I_Language                     as _LongTextLanguage             on  $projection.LongTextLanguage = _LongTextLanguage.Language

  -- to extension
  association [1..1] to E_OrderOperation               as _Extension                    on  $projection.OrderInternalID          = _Extension.OrderInternalID
                                                                                        and $projection.OrderOperationInternalID = _Extension.OrderOperationInternalID
  -- SOT relations
  association [1..1] to I_ProductionOrder              as _ProductionOrderHeader        on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  association to parent I_ProductionOrderSequence      as _ProductionOrderSequence      on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                        and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
  composition [0..*] of I_ProductionOrderComponent     as _ProductionOrderComponent
  composition [0..*] of I_ProductionOrderTriggerPoint  as _ProductionOrderTriggerPoint
  composition [0..*] of I_ProductionOrderPRT           as _ProductionOrderPRT
  composition [0..*] of I_ProdnOrderOperationCapacity  as _ProdnOrderOperationCapacity
  composition [0..*] of I_ProdnOrderOperationLongText  as _LongText

  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                        as _PlantText                    on  $projection.Plant = _PlantText.Plant
  association [1..1] to I_ProductionOrder              as _ProductionOrderText          on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
  association [0..*] to I_WorkCenterText               as _WorkCenterText               on  $projection.WorkCenterInternalID = _WorkCenterText.WorkCenterInternalID
                                                                                        and $projection.WorkCenterType       = _WorkCenterText.WorkCenterTypeCode
  association [0..1] to I_Supplier                     as _SupplierText                 on  $projection.Supplier = _SupplierText.Supplier
  association [1..1] to I_StatusObject                 as _StatusObjectText             on  $projection.ObjectInternalID = _StatusObjectText.StatusObject
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText             on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                  as _CompanyCodeText              on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea              as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea                                                                                     
  association [0..*] to I_FunctionalAreaText           as _FunctionalAreaText           on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
  -- end new associations for full coverage of text relations
{
      // Technical Key
      @ObjectModel.foreignKey.association: '_ProductionOrderInternal'
  key cast(afvg.OrderInternalID          as pph_aufpl           preserving type) as OrderInternalID,
      @ObjectModel.text.element: ['ProductionOrderOperationText']
  key cast(afvg.OrderOperationInternalID as operationinternalid preserving type) as OrderOperationInternalID,

      // Semantical key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      cast(aufv.ManufacturingOrder as vdm_manufacturingorder preserving type) as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(afvg.Sequence as vdm_prodnordersequence preserving type)           as ProductionOrderSequence,
      @ObjectModel.text.element: ['ProductionOrderOperationText']
      cast(afvg.Operation_2 as vdm_prodnorderoperation preserving type)       as ProductionOrderOperation,
      
      // Order header data
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(aufv.ManufacturingOrderType as vdm_prodnordertype preserving type) as ProductionOrderType,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(aufv.ProductionSupervisor   as pph_fevor preserving type)          as ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(aufv.MRPController          as pph_dispo preserving type)          as MRPController,

      // Text
      @Semantics.text: true
      afvg.OperationText                                             as ProductionOrderOperationText,
      @ObjectModel.foreignKey.association: '_OperationStandardTextCode'      
      cast(afvg.StandardTextInternalID as pph_ktsch preserving type) as OperationStandardTextCode,
      -- Long text logic
      @Semantics.booleanIndicator: true
      cast(case afvg.Language
        when '' then ''
        else 'X'
      end as aufltext preserving type)                                as OperationHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      afvg.Language                                                   as LongTextLanguage,

      // Attributes
      @Semantics.booleanIndicator: true
      afvg.OperationIsToBeDeleted,
      cast(afvg.NumberOfCapacities as pph_anzkap preserving type)     as NumberOfCapacities,
      afvg.NumberOfConfirmationSlips,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      afvg.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      @ObjectModel.text.association: '_WorkCenterText'
      cast(afvg.WorkCenterInternalID as pph_arbid preserving type)              as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      cast(afvg.WorkCenterTypeCode_2 as vdm_arbty preserving type)              as WorkCenterType,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(afvg.OperationControlProfile as pph_steus preserving type)           as OperationControlProfile,
      @ObjectModel.foreignKey.association: '_OperationConfirmation'
      afvg.OperationConfirmation,
      cast(afvg.NumberOfOperationConfirmations as pph_noofconf preserving type) as NumberOfOperationConfirmations,
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast(afvg.FactoryCalendar as cr_wfcid preserving type)                    as FactoryCalendar,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]  
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
      afvg.CapacityRequirement,
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
      cast(afvg.CapacityRequirementItem as pph_bedzl preserving type)           as CapacityRequirementItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      afvg.ChangeNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'      
      cast(afvg.ObjectInternalID as pph_objnr preserving type)                  as ObjectInternalID,
      afvg.OperationTrackingNumber,
      afvg.NumberOfTimeTickets,
      cast(afvg.NumberOfEmployees   as pph_anzms preserving type)               as NumberOfEmployees,

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
      afvg.BillOfMaterialInternalID_2                                           as BillOfMaterialInternalID,
      cast(afvg.BillOfMaterialItemNodeNumber as pph_stlkn preserving type)      as BillOfMaterialItemNodeNumber,
      afvg.BOMItemNodeCount,

      // Assignments Purchasing
      @Semantics.booleanIndicator:true
      afvg.ExtProcgOperationHasSubcontrg,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      cast(afvg.PurchasingOrganization as pph_ekorg preserving type)             as PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      afvg.PurchasingGroup,
      afvg.PurchaseRequisition,
      cast(afvg.PurchaseRequisitionItem as pph_bnfpo preserving type)            as PurchaseRequisitionItem,
      cast(afvg.PurchasingDocument      as pph_konnr preserving type)            as PurchaseOutlineAgreement,
      cast(afvg.PurchasingDocumentItem  as pph_ktpnr preserving type)            as PurchaseOutlineAgreementItem,
      afvg.PurgInfoRecNonStockItmSortTerm,
      cast(afvg.PurchasingInfoRecord as pph_infnr preserving type)               as PurchasingInfoRecord,
      cast(afvg.PurgInfoRecdDataIsFixed as vdm_kzfix preserving type)            as PurgInfoRecdDataIsFixed,
      cast(afvg.PurchasingInfoRecordCategory as pph_esokz preserving type)       as PurchasingInfoRecordCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      afvg.Supplier,
      cast(afvg.PlannedDeliveryDuration as pph_plifz preserving type)            as PurchaseRequisitionPlndDlvDurn,
      @Semantics.text: true
      cast(afvg.GoodsRecipientName as pph_wempf preserving type)                 as GoodsRecipientName,
      @Semantics.text: true
      afvg.UnloadingPointName,
      afvg.MaterialGroup,
      afvg.InspectionLotType,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_OpExternalProcessingCurrency'
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
      @ObjectModel.foreignKey.association: '_ControllingObjectCurrency'
      afvg.ControllingObjectCurrency,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      cast(afvg.ControllingObjectClass as pph_scope preserving type)      as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      afvg.FunctionalArea,

      // Setup and Overlapping
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'      
      cast(afvg.OperationSetupGroupCategory as pph_rfgrp preserving type) as OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_OperationSetupGroup'
      cast(afvg.OperationSetupGroup         as pph_rfsch preserving type) as OperationSetupGroup,
      @ObjectModel.foreignKey.association: '_OperationSetupType'
      cast(afvg.OperationSetupType          as pph_rasch preserving type) as OperationSetupType,
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
      @Semantics.quantity.unitOfMeasure: 'BreakDurationUnit'
      afvg.PlannedBreakDuration,
      @Semantics.quantity.unitOfMeasure: 'BreakDurationUnit'
      afvg.ConfirmedBreakDuration,
      cast(afvg.OverlapMinimumDurationUnit as pph_dzeimu preserving type) as OverlapMinimumDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumDurationUnit'
      afvg.OverlapMinimumDuration,
      afvg.MaximumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumWaitDurationUnit'
      afvg.MaximumWaitDuration,
      afvg.MinimumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumWaitDurationUnit'
      afvg.MinimumWaitDuration,
      afvg.StandardMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardMoveDurationUnit'
      afvg.StandardMoveDuration,
      afvg.StandardQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardQueueDurationUnit'
      afvg.StandardQueueDuration,
      afvg.MinimumQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumQueueDurationUnit'
      afvg.MinimumQueueDuration,
      afvg.MinimumMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumMoveDurationUnit'
      afvg.MinimumMoveDuration,
      @Semantics.quantity.unitOfMeasure: 'OperationStandardDurationUnit'
      afvg.OperationStandardDuration,
      afvg.OperationStandardDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumDurationUnit'
      cast(afvg.MinimumDuration     as vdm_daumin  preserving type)       as MinimumDuration,
      cast(afvg.MinimumDurationUnit as vdm_daumine preserving type)       as MinimumDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumProcessingDurationUnit'
      afvg.MinimumProcessingDuration,
      afvg.MinimumProcessingDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ScheduledMoveDurationUnit'
      afvg.ScheduledMoveDuration,
      afvg.ScheduledMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ScheduledQueueDurationUnit'
      afvg.ScheduledQueueDuration,
      afvg.ScheduledQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ScheduledWaitDurationUnit'
      afvg.ScheduledWaitDuration,
      afvg.ScheduledWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OpPlannedSetupDurnUnit'
      afvg.OpPlannedSetupDurn,
      afvg.OpPlannedSetupDurnUnit,
      afvg.OpPlannedProcessingDurn,
      cast(afvg.OpPlannedProcessingDurnUnit as pph_beaze preserving type) as OpPlannedProcessingDurnUnit,
      afvg.OpPlannedTeardownDurn,
      afvg.OpPlannedTeardownDurnUnit,
      @Semantics.quantity.unitOfMeasure: 'ActualForecastDurationUnit'
      cast(afvg.ActualForecastDuration      as pph_pdau  preserving type) as ActualForecastDuration,
      cast(afvg.ActualForecastDurationUnit  as pph_pdae  preserving type) as ActualForecastDurationUnit,
      afvg.ForecastProcessingDuration,
      afvg.ForecastProcessingDurationUnit,

      // Offset
      -- Start
      @ObjectModel.foreignKey.association: '_StartDateOffsetReferenceCode'
      afvg.StartDateOffsetReferenceCode,
      afvg.StartDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
      afvg.StartDateOffsetDuration,
      -- End
      @ObjectModel.foreignKey.association: '_EndDateOffsetReferenceCode'
      afvg.EndDateOffsetReferenceCode,
      afvg.EndDateOffsetDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
      afvg.EndDateOffsetDuration,

      // Standard Value Key
      @ObjectModel.foreignKey.association: '_StandardWorkFmlaParamGroup'
      afvg.StandardWorkFormulaParamGroup,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_OperationUnit'
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
      cast(aufv.ProductionUnit as productionunit preserving type) as ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      afvg.OpTotConfdYieldQtyInOrdQtyUnit,

      // Confirmed Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit1'
      cast(afvg.OpWorkQuantityUnit1            as vdm_ile01 preserving type) as WorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit1'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity1       as vdm_ism01 preserving type) as ConfirmedWorkQuantity1,
      cast(afvg.NoFurtherOpWorkQuantity1IsExpd as vdm_lek01 preserving type) as NoFurtherOpWorkQuantity1IsExpd,
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit2'
      cast(afvg.OpWorkQuantityUnit2            as vdm_ile02 preserving type) as WorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit2'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity2       as vdm_ism02 preserving type) as ConfirmedWorkQuantity2,
      cast(afvg.NoFurtherOpWorkQuantity2IsExpd as vdm_lek02 preserving type) as NoFurtherOpWorkQuantity2IsExpd,
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit3'
      cast(afvg.OpWorkQuantityUnit3            as vdm_ile03 preserving type) as WorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit3'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity3       as vdm_ism03 preserving type) as ConfirmedWorkQuantity3,
      cast(afvg.NoFurtherOpWorkQuantity3IsExpd as vdm_lek03 preserving type) as NoFurtherOpWorkQuantity3IsExpd,
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit4'
      cast(afvg.OpWorkQuantityUnit4            as vdm_ile04 preserving type) as WorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit4'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity4       as vdm_ism04 preserving type) as ConfirmedWorkQuantity4,
      cast(afvg.NoFurtherOpWorkQuantity4IsExpd as vdm_lek04 preserving type) as NoFurtherOpWorkQuantity4IsExpd,
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit5'
      cast(afvg.OpWorkQuantityUnit5            as vdm_ile05 preserving type) as WorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit5'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity5       as vdm_ism05 preserving type) as ConfirmedWorkQuantity5,
      cast(afvg.NoFurtherOpWorkQuantity5IsExpd as vdm_lek05 preserving type) as NoFurtherOpWorkQuantity5IsExpd,
      @ObjectModel.foreignKey.association: '_ConfirmedWorkQuantityUnit6'
      cast(afvg.OpWorkQuantityUnit6            as vdm_ile06 preserving type) as WorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'WorkQuantityUnit6'
      @Aggregation.default: #SUM
      cast(afvg.OpConfirmedWorkQuantity6       as vdm_ism06 preserving type) as ConfirmedWorkQuantity6,
      cast(afvg.NoFurtherOpWorkQuantity6IsExpd as vdm_lek06 preserving type) as NoFurtherOpWorkQuantity6IsExpd,

      // Work Quantities and UoM
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit1'
      cast(afvg.WorkCenterStandardWorkQtyUnit1 as pph_vge01 preserving type) as WorkCenterStandardWorkQtyUnit1,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit1'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty1     as vdm_vgw01 preserving type) as WorkCenterStandardWorkQty1,
      cast(afvg.CostCtrActivityType1           as vdm_lar01 preserving type) as CostCtrActivityType1,
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit2'
      cast(afvg.WorkCenterStandardWorkQtyUnit2 as pph_vge02 preserving type) as WorkCenterStandardWorkQtyUnit2,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit2'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty2     as vdm_vgw02 preserving type) as WorkCenterStandardWorkQty2,
      cast(afvg.CostCtrActivityType2           as vdm_lar02 preserving type) as CostCtrActivityType2,
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit3'
      cast(afvg.WorkCenterStandardWorkQtyUnit3 as pph_vge03 preserving type) as WorkCenterStandardWorkQtyUnit3,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit3'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty3     as vdm_vgw03 preserving type) as WorkCenterStandardWorkQty3,
      cast(afvg.CostCtrActivityType3           as vdm_lar03 preserving type) as CostCtrActivityType3,
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit4'
      cast(afvg.WorkCenterStandardWorkQtyUnit4 as pph_vge04 preserving type) as WorkCenterStandardWorkQtyUnit4,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit4'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty4     as vdm_vgw04 preserving type) as WorkCenterStandardWorkQty4,
      cast(afvg.CostCtrActivityType4           as vdm_lar04 preserving type) as CostCtrActivityType4,
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit5'
      cast(afvg.WorkCenterStandardWorkQtyUnit5 as pph_vge05 preserving type) as WorkCenterStandardWorkQtyUnit5,
      @Semantics.quantity.unitOfMeasure: 'WorkCenterStandardWorkQtyUnit5'
      @Aggregation.default: #SUM
      cast(afvg.WorkCenterStandardWorkQty5     as vdm_vgw05 preserving type) as WorkCenterStandardWorkQty5,
      cast(afvg.CostCtrActivityType5           as vdm_lar05 preserving type) as CostCtrActivityType5,
      @ObjectModel.foreignKey.association: '_StdWorkQuantityUnit6'
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
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessProcessStdVH', element: 'BusinessProcess' } } ]
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      afvg.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessProcessEntryUnit'
      afvg.BusinessProcessEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcessEntryUnit'
      @Aggregation.default: #SUM
      afvg.BusinessProcessConfirmedQty,
      afvg.NoFurtherBusinessProcQtyIsExpd,
      afvg.BusinessProcRemainingQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BusinessProcRemainingQtyUnit'
      @Aggregation.default: #SUM
      cast(afvg.BusinessProcessRemainingQty as pph_oprz1 preserving type) as BusinessProcessRemainingQty,

      // Associations
      _ProductionOrderInternal,
      _ProductionOrderType,
      _OperationStandardTextCode,
      _Plant,
      _MRPController,
      _ProductionSupervisor,
      _ProductionUnit,
      _OperationUnit,
      _WorkCenter,
      @Consumption.hidden: true
      _WorkCenterType,
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
      _ChangeNumber,
      _PurchasingOrganization,
      _PurchasingGroup,
      _PurchaseContract,
      _PurchaseContractItem,
      _SchedulingAgreement,
      _SchedulingAgreementItem,
      _PurchaseRequisition,
      _PurchaseRequisitionItem,
      _PurchasingInfoRecord,
      _Supplier,
      _OpExternalProcessingCurrency,
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
      _LongTextLanguage,
      -- SOT relations
      _ProductionOrderHeader,
      _ProductionOrderSequence,
      _ProductionOrderComponent,
      _ProductionOrderPRT,
      _ProductionOrderTriggerPoint,
      _ProdnOrderOperationCapacity,
      _LongText,
      -- Text relations
      _ProductionOrderText,
      _PlantText,
      _WorkCenterText,
      _SupplierText,
      _StatusObjectText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText
}
where
   aufv.ManufacturingOrderCategory  = '10' and //Production orders
   afvg.SuperiorOperationInternalID = '00000000';
```
