---
name: I_PRODNROUTINGOPERATIONTP_2
description: "Prodnroutingoperationtp 2"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNROUTINGOPERATIONTP_2

**Prodnroutingoperationtp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |  |  |
| `ProductionRouting` | ✓ | |  |  |  |  |
| `ProductionRoutingSequence` | ✓ | |  |  |  |  |
| `ProductionRoutingOpIntID` | ✓ | |  |  |  |  |
| `ProductionRoutingOpIntVersion` | ✓ | |  |  |  |  |
| `Operation` |  | |  | `cast(Operation as pph_vornr preserving type)` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `LongTextLanguageCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `OperationStandardTextCode` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `CapacityCategoryCode` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `OperationCostingRelevancyType` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `NumberOfConfirmationSlips` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeSuitability` |  | |  |  |  |  |
| `NumberOfEmployees` |  | |  |  |  |  |
| `BillOfOperationsRefType` |  | |  |  |  |  |
| `BillOfOperationsRefGroup` |  | |  |  |  |  |
| `BillOfOperationsRefVariant` |  | |  |  |  |  |
| `LineSegmentTakt` |  | |  |  |  |  |
| `OperationStdWorkQtyGrpgCat` |  | |  |  |  |  |
| `OrderHasNoSubOperations` |  | |  |  |  |  |
| `OperationSetupType` |  | |  |  |  |  |
| `OperationSetupGroupCategory` |  | |  |  |  |  |
| `OperationSetupGroup` |  | |  |  |  |  |
| `BOOOperationIsPhase` |  | |  |  |  |  |
| `BOOPhaseSuperiorOpInternalID` |  | |  |  |  |  |
| `ControlRecipeDestination` |  | |  |  |  |  |
| `OpIsExtlyProcdWithSubcontrg` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingInfoRecdAddlGrpgName` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PlannedDeliveryDuration` |  | |  |  |  |  |
| `NumberOfOperationPriceUnits` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `InspResultRecordingView` |  | |  |  |  |  |
| `InspSbstCompletionConfirmation` |  | |  |  |  |  |
| `InspSbstHasNoTimeOrQuantity` |  | |  |  |  |  |
| `OperationReferenceQuantity` |  | |  |  |  |  |
| `OperationUnit` |  | |  |  |  |  |
| `OperationScrapPercent` |  | |  |  |  |  |
| `OpQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OpQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `StandardWorkQuantity1` |  | |  |  |  |  |
| `StandardWorkQuantityUnit1` |  | |  |  |  |  |
| `CostCtrActivityType1` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode1` |  | |  |  |  |  |
| `StandardWorkQuantity2` |  | |  |  |  |  |
| `StandardWorkQuantityUnit2` |  | |  |  |  |  |
| `CostCtrActivityType2` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode2` |  | |  |  |  |  |
| `StandardWorkQuantity3` |  | |  |  |  |  |
| `StandardWorkQuantityUnit3` |  | |  |  |  |  |
| `CostCtrActivityType3` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode3` |  | |  |  |  |  |
| `StandardWorkQuantity4` |  | |  |  |  |  |
| `StandardWorkQuantityUnit4` |  | |  |  |  |  |
| `CostCtrActivityType4` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode4` |  | |  |  |  |  |
| `StandardWorkQuantity5` |  | |  |  |  |  |
| `StandardWorkQuantityUnit5` |  | |  |  |  |  |
| `CostCtrActivityType5` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode5` |  | |  |  |  |  |
| `StandardWorkQuantity6` |  | |  |  |  |  |
| `StandardWorkQuantityUnit6` |  | |  |  |  |  |
| `CostCtrActivityType6` |  | |  |  |  |  |
| `PerfEfficiencyRatioCode6` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `LeadTimeReductionStrategy` |  | |  |  |  |  |
| `TeardownAndWaitIsParallel` |  | |  |  |  |  |
| `BillOfOperationsBreakDuration` |  | |  |  |  |  |
| `BreakDurationUnit` |  | |  |  |  |  |
| `MaximumWaitDuration` |  | |  |  |  |  |
| `MaximumWaitDurationUnit` |  | |  |  |  |  |
| `MinimumWaitDuration` |  | |  |  |  |  |
| `MinimumWaitDurationUnit` |  | |  |  |  |  |
| `StandardQueueDuration` |  | |  |  |  |  |
| `StandardQueueDurationUnit` |  | |  |  |  |  |
| `MinimumQueueDuration` |  | |  |  |  |  |
| `MinimumQueueDurationUnit` |  | |  |  |  |  |
| `StandardMoveDuration` |  | |  |  |  |  |
| `StandardMoveDurationUnit` |  | |  |  |  |  |
| `MinimumMoveDuration` |  | |  |  |  |  |
| `MinimumMoveDurationUnit` |  | |  |  |  |  |
| `OperationSplitIsRequired` |  | |  |  |  |  |
| `MaximumNumberOfSplits` |  | |  |  |  |  |
| `MinProcessingDurationPerSplit` |  | |  |  |  |  |
| `MinProcessingDurnPerSplitUnit` |  | |  |  |  |  |
| `OperationOverlappingIsRequired` |  | |  |  |  |  |
| `OperationOverlappingIsPossible` |  | |  |  |  |  |
| `OperationsIsAlwaysOverlapping` |  | |  |  |  |  |
| `OperationHasNoOverlapping` |  | |  |  |  |  |
| `OverlapMinimumDuration` |  | |  |  |  |  |
| `OverlapMinimumDurationUnit` |  | |  |  |  |  |
| `OverlapMinimumTransferQty` |  | |  |  |  |  |
| `OverlapMinimumTransferQtyUnit` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `_NonSqncTP` | | ✓ | | | | |
| `_ProdnRtgTP` | | ✓ | | | | |
| `_Header` | | ✓ | | | | |
| `_OpCompAlloc` | | ✓ | | | | |
| `_OpDocPRTAssgmt` | | ✓ | | | | |
| `_OpEquipPRTAssgmt` | | ✓ | | | | |
| `_OpMatlPRTAssgmt` | | ✓ | | | | |
| `_OpMiscPRTAssgmt` | | ✓ | | | | |
| `_OpInspCharcsAssgmt` | | ✓ | | | | |
| `_SubOp` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Operation - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRoutingOperationTP_2
  as projection on R_ProdnRoutingOperationTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
  key ProductionRoutingOpIntID,
  key ProductionRoutingOpIntVersion,

      @ObjectModel.text.element: ['OperationText']
      cast(Operation as pph_vornr preserving type) as Operation,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      ChangeNumber,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      IsDeleted,
      IsImplicitlyDeleted,
      @Semantics.text: true
      OperationText,
      LongTextLanguageCode,
      Plant,
      OperationControlProfile,
      OperationStandardTextCode,
      WorkCenterTypeCode,
      WorkCenterInternalID,
      CapacityCategoryCode,
      CostElement,
      OperationCostingRelevancyType,
      NumberOfTimeTickets,
      NumberOfConfirmationSlips,
      @Consumption.hidden: true // For Cloud
      EmployeeWageGroup,
      @Consumption.hidden: true // For Cloud
      EmployeeWageType,
      EmployeeSuitability,
      @Consumption.hidden: true // For Cloud
      NumberOfEmployees,
      BillOfOperationsRefType,
      BillOfOperationsRefGroup,
      BillOfOperationsRefVariant,
      LineSegmentTakt,
      OperationStdWorkQtyGrpgCat,
      OrderHasNoSubOperations,
      OperationSetupType,
      OperationSetupGroupCategory,
      OperationSetupGroup,
      BOOOperationIsPhase,
      BOOPhaseSuperiorOpInternalID,
      ControlRecipeDestination,
      OpIsExtlyProcdWithSubcontrg,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchaseContract,
      PurchaseContractItem,
      PurchasingInfoRecdAddlGrpgName,
      MaterialGroup,
      PurchasingGroup,
      Supplier,
      PlannedDeliveryDuration,
      NumberOfOperationPriceUnits,
      OpExternalProcessingCurrency,
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      InspectionLotType,
      InspResultRecordingView,
      InspSbstCompletionConfirmation,
      @Semantics.booleanIndicator: true
      InspSbstHasNoTimeOrQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      OperationReferenceQuantity,
      OperationUnit,
      OperationScrapPercent,
      OpQtyToBaseQtyNmrtr,
      OpQtyToBaseQtyDnmntr,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      StandardWorkQuantity1,
      StandardWorkQuantityUnit1,
      CostCtrActivityType1,
      PerfEfficiencyRatioCode1,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      StandardWorkQuantity2,
      StandardWorkQuantityUnit2,
      CostCtrActivityType2,
      PerfEfficiencyRatioCode2,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      StandardWorkQuantity3,
      StandardWorkQuantityUnit3,
      CostCtrActivityType3,
      PerfEfficiencyRatioCode3,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      StandardWorkQuantity4,
      StandardWorkQuantityUnit4,
      CostCtrActivityType4,
      PerfEfficiencyRatioCode4,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      StandardWorkQuantity5,
      StandardWorkQuantityUnit5,
      CostCtrActivityType5,
      PerfEfficiencyRatioCode5,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      StandardWorkQuantity6,
      StandardWorkQuantityUnit6,
      CostCtrActivityType6,
      PerfEfficiencyRatioCode6,
      BusinessProcess,
      LeadTimeReductionStrategy,
      TeardownAndWaitIsParallel,
      @Semantics.quantity.unitOfMeasure: 'BreakDurationUnit'
      BillOfOperationsBreakDuration,
      BreakDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MaximumWaitDurationUnit'
      MaximumWaitDuration,
      MaximumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumWaitDurationUnit'
      MinimumWaitDuration,
      MinimumWaitDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardQueueDurationUnit'
      StandardQueueDuration,
      StandardQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumQueueDurationUnit'
      MinimumQueueDuration,
      MinimumQueueDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardMoveDurationUnit'
      StandardMoveDuration,
      StandardMoveDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'MinimumMoveDurationUnit'
      MinimumMoveDuration,
      MinimumMoveDurationUnit,
      OperationSplitIsRequired,
      MaximumNumberOfSplits,
      @Semantics.quantity.unitOfMeasure: 'MinProcessingDurnPerSplitUnit'
      MinProcessingDurationPerSplit,
      MinProcessingDurnPerSplitUnit,
      OperationOverlappingIsRequired,
      OperationOverlappingIsPossible,
      OperationsIsAlwaysOverlapping,
      OperationHasNoOverlapping,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumDurationUnit'
      OverlapMinimumDuration,
      OverlapMinimumDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'OverlapMinimumTransferQtyUnit'
      OverlapMinimumTransferQty,
      OverlapMinimumTransferQtyUnit,
      FactoryCalendar,
      ChangedDateTime,
      @Semantics.text: true
      PlainLongText,

      /* Associations */
      _NonSqncTP: redirected to parent I_ProdnRtgNonHistoricSqncTP_2,
      _ProdnRtgTP: redirected to I_ProductionRoutingTP_2,
      _Header: redirected to I_ProductionRoutingHeaderTP_2,
      _OpCompAlloc: redirected to I_ProdnRoutingOpCompAllocTP_2,
      _OpDocPRTAssgmt: redirected to I_ProdnRtgOpDocPRTAssgmtTP_2,
      _OpEquipPRTAssgmt: redirected to I_ProdnRtgOpEquipPRTAssgmtTP_2,
      _OpMatlPRTAssgmt: redirected to I_ProdnRtgOpMatlPRTAssgmtTP_2,
      _OpMiscPRTAssgmt: redirected to I_ProdnRtgOpMiscPRTAssgmtTP_2,
      _OpInspCharcsAssgmt: redirected to I_ProdnRtgInspCharcsAssgmtTP_2,
      _SubOp: redirected to I_ProductionRoutingSubopTP_2
}
```
