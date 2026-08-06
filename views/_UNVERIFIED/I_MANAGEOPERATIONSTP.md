---
name: I_MANAGEOPERATIONSTP
description: Production Operations Transactional BOPF
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://pastebin.com/cRHdEZwv
semantic_en: Production Operations Transactional BOPF — Interface CDS view based on I_MfgOrderOperationCube.
semantic_vi: Production Operations Transactional BOPF — CDS view giao diện dựa trên I_MfgOrderOperationCube.
keywords:
  - production
  - operations
  - transactional
  - bopf
  - order
  - internal
  - bill
  - item
  - manufacturing
  - operation
  - text
tags:
  - AC
  - bo:material
  - component:AC
  - interface-view
  - product
  - transaction
---
# I_MANAGEOPERATIONSTP

**Production Operations Transactional BOPF**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://pastebin.com/cRHdEZwv) |

## Fields

| Field | Data Source |
|---|---|
| key `OrderInternalBillOfOperations` | `OrderInternalBillOfOperations` |
| key `OrderIntBillOfOperationsItem` | `OrderIntBillOfOperationsItem` |
| `ManufacturingOrder` | `cast(I_MfgOrderOperationCube.ManufacturingOrder as aufnr preserving type)` |
| `ManufacturingOrderOperation` | `ManufacturingOrderOperation` |
| `MfgOrderOperationText` | `MfgOrderOperationText` |
| `ManufacturingOrderSubOperation` | `ManufacturingOrderSubOperation` |
| `ManufacturingOrderSequence` | `ManufacturingOrderSequence` |
| `ProductionPlant` | `ProductionPlant` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `WorkCenter` | `WorkCenter` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `ManufacturingOrderCategory` | `ManufacturingOrderCategory` |
| `ManufacturingOrderType` | `ManufacturingOrderType` |
| `ProductionSupervisor` | `ProductionSupervisor` |
| `MRPController` | `MRPController` |
| `MRPControllerName` | `_MRPController.MRPControllerName` |
| `NumberOfConfirmationSlips` | `NumberOfConfirmationSlips` |
| `OperationImportance` | `OperationImportance` |
| `NumberOfTimeTickets` | `NumberOfTimeTickets` |
| `OperationControlProfile` | `OperationControlProfile` |
| `OperationIsClosed` | `OperationIsClosed` |
| `OperationIsTechlyCompleted` | `OperationIsTechlyCompleted` |
| `OperationIsDelivered` | `OperationIsDelivered` |
| `OperationIsPartiallyDelivered` | `OperationIsPartiallyDelivered` |
| `OperationIsPartiallyConfirmed` | `OperationIsPartiallyConfirmed` |
| `OperationIsPrinted` | `OperationIsPrinted` |
| `OperationIsReleased` | `OperationIsReleased` |
| `OperationIsCreated` | `OperationIsCreated` |
| `OperationIsScheduled` | `OperationIsScheduled` |
| `OperationIsConfirmed` | `OperationIsConfirmed` |
| `OperationIsDeleted` | `OperationIsDeleted` |
| `OpPlannedTotalQuantity` | `OpPlannedTotalQuantity` |
| `OpTotalConfirmedYieldQty` | `OpTotalConfirmedYieldQty` |
| `OperationReferenceQuantity` | `OperationReferenceQuantity` |
| `OpPlannedScrapQuantity` | `OpPlannedScrapQuantity` |
| `OperationConfirmedReworkQty` | `OperationConfirmedReworkQty` |
| `OpTotalConfirmedScrapQty` | `OpTotalConfirmedScrapQty` |
| `OperationUnit` | `OperationUnit` |
| `OpLtstSchedldExecStrtDte` | `OpLtstSchedldExecStrtDte` |
| `OpLtstSchedldExecStrtTme` | `OpLtstSchedldExecStrtTme` |
| `OpLtstSchedldExecEndDte` | `OpLtstSchedldExecEndDte` |
| `OpLtstSchedldExecEndTme` | `OpLtstSchedldExecEndTme` |
| `OpActualExecutionStartDate` | `OpActualExecutionStartDate` |
| `OpActualExecutionStartTime` | `OpActualExecutionStartTime` |
| `OpActualExecutionEndDate` | `OpActualExecutionEndDate` |
| `OpActualExecutionEndTime` | `OpActualExecutionEndTime` |
| `OperationExecutionEndIsLate` | `OperationExecutionEndIsLate` |
| `OperationExecutionStartIsLate` | `OperationExecutionStartIsLate` |
| `OperationYieldDeviationQty` | `OperationYieldDeviationQty` |
| `PlannedCurrentStrtDateDvtnDurn` | `PlannedCurrentStrtDateDvtnDurn` |
| `PlannedActualStartDateDvtnDurn` | `PlannedActualStartDateDvtnDurn` |
| `PlannedCurrentEndDateDvtnDurn` | `PlannedCurrentEndDateDvtnDurn` |
| `PlannedActualEndDateDvtnDurn` | `PlannedActualEndDateDvtnDurn` |
| `ExecutionStartLatenessInHours` | `case OperationExecutionStartIsLate when 'X' then case when (OperationIsPartiallyConfirmed = ' ' and OperationIsReleased = 'X' and OperationIsConfirmed = '' and (PlannedCurrentStrtDateDvtnDurn > 0 )) then (cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp) / 3600.00) else (cast(PlannedActualStartDateDvtnDurn as abap.fltp) / 3600.00) end else 0 end` |
| `ExecutionEndLatenessInHours` | `case OperationExecutionEndIsLate when 'X' then case when (OperationIsConfirmed = ' ' and OperationIsPartiallyConfirmed = 'X' and OperationIsConfirmed = '' and (PlannedCurrentEndDateDvtnDurn > 0 ) ) then (cast(PlannedCurrentEndDateDvtnDurn as abap.fltp) / 3600.00) else (cast(PlannedActualEndDateDvtnDurn as abap.fltp) / 3600.00) end else 0 end` |
| `ExecutionStartLatenessInMins` | `case OperationExecutionStartIsLate when 'X' then case when (OperationIsPartiallyConfirmed = ' ' and OperationIsReleased = 'X' and OperationIsConfirmed = '' and (PlannedCurrentStrtDateDvtnDurn > 0 )) then (cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp) / 60.00) else (cast(PlannedActualStartDateDvtnDurn as abap.fltp) / 60.00) end else 0 end` |
| `ExecutionEndLatenessInMinutes` | `case OperationExecutionEndIsLate when 'X' then case when (OperationIsConfirmed = ' ' and OperationIsPartiallyConfirmed = 'X' and OperationIsConfirmed = '' and (PlannedCurrentEndDateDvtnDurn > 0 ) ) then (cast(PlannedCurrentEndDateDvtnDurn as abap.fltp) / 60.00) else (cast(PlannedActualEndDateDvtnDurn as abap.fltp) / 60.00) end else 0 end` |
| `OperationStartDeviationDays` | `cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp)/ 86400.00` |
| `PlannedEndDateDvtnInDays` | `cast(PlannedCurrentEndDateDvtnDurn as abap.fltp)/ 86400.00` |
| `_WorkCenterBySemanticKey` | *Association* |
| `_ProductionPlant` | *Association* |
| `_OperationUnit` | *Association* |
| `_OrdInternalBillOfOperations` | *Association* |
| `_MfgOrderSequence` | *Association* |
| `_MfgOrderCategory` | *Association* |
| `_MfgOrderType` | *Association* |
| `_ProductionSupervisor` | *Association* |
| `_WorkCenter` | *Association* |
| `_WorkCenterType` | *Association* |
| `_MRPController` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_OrderOperation` | [1..1] |

## Source Code

*Source: [https://pastebin.com/cRHdEZwv](https://pastebin.com/cRHdEZwv)*

```abap
@AbapCatalog.sqlViewName: 'IMPEMANOPERTP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.viewType: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    compositionRoot: true,
    transactionalProcessingEnabled: true,
    writeActivePersistence: 'IMPEMANOPERTP',
    createEnabled: false,
    updateEnabled: false,
    deleteEnabled: false
}
@EndUserText.label: 'Production Operations Transactional BOPF'
define view I_ManageOperationsTP
  as select from I_MfgOrderOperationCube

  association [1..1] to E_OrderOperation as _Extension on  OrderInternalBillOfOperations = _Extension.OrderInternalID
                                                       and OrderIntBillOfOperationsItem  = _Extension.OrderOperationInternalID


{

      @UI.hidden : true
  key OrderInternalBillOfOperations,
      @UI.hidden : true
  key OrderIntBillOfOperationsItem,

      @ObjectModel.foreignKey.association: '_MfgOrder'
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      cast(I_MfgOrderOperationCube.ManufacturingOrder as aufnr preserving type)                as  ManufacturingOrder,
      @ObjectModel.text.element: 'MfgOrderOperationText'
      ManufacturingOrderOperation,

      @UI.hidden : true
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      MfgOrderOperationText,

      @UI.hidden : true
      ManufacturingOrderSubOperation,

      ManufacturingOrderSequence,

      //      @ObjectModel.text.element: 'ProductionPlantName'
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      ProductionPlant,

      @UI.hidden : true
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      WorkCenterInternalID,

      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      //      @EndUserText.quickInfo: 'Manufacturing Operation Work center'
      WorkCenter,

      @UI.hidden : true
      WorkCenterTypeCode,

      ManufacturingOrderCategory,

      ManufacturingOrderType,

      ProductionSupervisor,

      //       @EndUserText.quickInfo: 'Manufacturing Operation MRP Controller'
      MRPController,
      //      @EndUserText.quickInfo: 'Manufacturing Operation MRP Controller Name'
      _MRPController.MRPControllerName,
      @UI.hidden : true
      NumberOfConfirmationSlips,
      @UI.hidden : true
      OperationImportance,

      @UI.hidden : true
      NumberOfTimeTickets,

      @UI.hidden: true
      OperationControlProfile,


      //Status
      @UI.hidden: true
      OperationIsClosed,
      @UI.hidden: true
      OperationIsTechlyCompleted,
      @UI.hidden: true
      OperationIsDelivered,
      @UI.hidden: true
      OperationIsPartiallyDelivered,
      @UI.hidden: true
      OperationIsPartiallyConfirmed,
      @UI.hidden: true
      OperationIsPrinted,
      @UI.hidden: true
      OperationIsReleased,
      @UI.hidden: true
      OperationIsCreated,
      @UI.hidden: true
      OperationIsScheduled,
      @UI.hidden: true
      OperationIsConfirmed,
      @UI.hidden: true
      OperationIsDeleted,


      //Quantities and Unit
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @DefaultAggregation: #SUM
      OpPlannedTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      @DefaultAggregation: #SUM
      OpTotalConfirmedYieldQty,
      //      @EndUserText.quickInfo: 'Manufacturing Operation Base Quantity'
      OperationReferenceQuantity,
      OpPlannedScrapQuantity,
      OperationConfirmedReworkQty,
      OpTotalConfirmedScrapQty,

      @Semantics.unitOfMeasure: true
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_OperationUnit'
      OperationUnit,

      //Dates
      OpLtstSchedldExecStrtDte,
      @UI.hidden: true
      OpLtstSchedldExecStrtTme,
      OpLtstSchedldExecEndDte,
      @UI.hidden: true
      OpLtstSchedldExecEndTme,
      OpActualExecutionStartDate,
      @UI.hidden: true
      OpActualExecutionStartTime,
      OpActualExecutionEndDate,
      @UI.hidden: true
      OpActualExecutionEndTime,

      //Delay & Delay Calculation
      @UI.hidden: true
      OperationExecutionEndIsLate,
      @UI.hidden: true
      OperationExecutionStartIsLate,
      @UI.hidden: true
      OperationYieldDeviationQty,
      @UI.hidden: true
      PlannedCurrentStrtDateDvtnDurn,
      @UI.hidden: true
      PlannedActualStartDateDvtnDurn,
      @UI.hidden: true
      PlannedCurrentEndDateDvtnDurn,
      @UI.hidden: true
      PlannedActualEndDateDvtnDurn,
      @UI.hidden: true
      case  OperationExecutionStartIsLate
         when 'X' then
         case when (OperationIsPartiallyConfirmed = ' ' and OperationIsReleased = 'X'  and OperationIsConfirmed = '' and (PlannedCurrentStrtDateDvtnDurn > 0 ))
         then (cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp) / 3600.00)
         else (cast(PlannedActualStartDateDvtnDurn as abap.fltp) / 3600.00)
         end
         else 0
      end                                                                                      as  ExecutionStartLatenessInHours,
      @UI.hidden: true
      case OperationExecutionEndIsLate
       when 'X' then
           case when (OperationIsConfirmed = ' ' and OperationIsPartiallyConfirmed = 'X' and OperationIsConfirmed = '' and (PlannedCurrentEndDateDvtnDurn > 0  ) )
           then (cast(PlannedCurrentEndDateDvtnDurn as abap.fltp) / 3600.00)
           else (cast(PlannedActualEndDateDvtnDurn as abap.fltp) / 3600.00)
            end
       else 0
      end                                                                                      as  ExecutionEndLatenessInHours,
      @UI.hidden: true
      case  OperationExecutionStartIsLate
         when 'X' then
         case when (OperationIsPartiallyConfirmed = ' ' and OperationIsReleased = 'X'  and OperationIsConfirmed = '' and (PlannedCurrentStrtDateDvtnDurn > 0 ))
         then (cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp) / 60.00)
         else (cast(PlannedActualStartDateDvtnDurn as abap.fltp) / 60.00)
         end
         else 0
      end                                                                                      as  ExecutionStartLatenessInMins,
      @UI.hidden: true
      case OperationExecutionEndIsLate
       when 'X' then
           case when (OperationIsConfirmed = ' ' and OperationIsPartiallyConfirmed = 'X' and OperationIsConfirmed = '' and (PlannedCurrentEndDateDvtnDurn > 0  ) )
           then (cast(PlannedCurrentEndDateDvtnDurn as abap.fltp) / 60.00)
           else (cast(PlannedActualEndDateDvtnDurn as abap.fltp) / 60.00)
            end
       else 0
      end                                                                                      as  ExecutionEndLatenessInMinutes,
      @UI.hidden: true
      cast(PlannedCurrentStrtDateDvtnDurn as abap.fltp)/ 86400.00                              as  OperationStartDeviationDays,
      @UI.hidden: true
      cast(PlannedCurrentEndDateDvtnDurn as abap.fltp)/ 86400.00                               as  PlannedEndDateDvtnInDays,

      //associations
      @UI.selectionField.exclude: true
      I_MfgOrderOperationCube._MfgOrder,
      @UI.selectionField.exclude: true
      _WorkCenterBySemanticKey,
      @UI.selectionField.exclude: true
      _ProductionPlant,
      @UI.selectionField.exclude: true
      _OperationUnit,

      //Associations
      _OrdInternalBillOfOperations,
      //      _MfgOrder,
      _MfgOrderSequence,
      _MfgOrderCategory,
      _MfgOrderType,
      //      _OperationStandardTextCode,
      _ProductionSupervisor,
      //      _ProductionUnit,
      //      _OperationUnit,
      //      _OperationControlProfile,
      //      _BillOfOperationsType,
      //      _BillOfOperationsApplication,
      _WorkCenter,
      _WorkCenterType,
      //      _WorkCenterBySemanticKey,
      _MRPController
      //      _ResponsiblePlannerGroup,
      //      _CapacityRequirement,
      //      _CapacityRequirementItem,
      //      _OperationConfirmation,
      //      _PurchasingOrganization,
      //      _PurchasingGroup,
      //      _PurchaseOrder,
      //      _PurchaseOrderItem,
      //      _PurchaseRequisition,
      //      _PurchaseRequisitionItem,
      //      _PurchasingInfoRecord,
      //      _Supplier,
      //      _OpExternalProcessingCurrency,
      //      _EmployeeWageGroup,
      //      _EmployeeSuitability,
      //      _Employee,
      //      _CompanyCode,
      //      _ProfitCenter,
      //      _ControllingArea,
      //      _ControllingObjectClass,
      //      _FunctionalArea,
      //      _BusinessArea,
      //      _BusinessProcess,
      //      _BusinessProcessEntryUnit,
      //      _OperationSetupGroupCategory,
      //      _OperationSetupGroup,
      //      _OperationSetupType,
      //      _LeadTimeReductionStrategy,
      //      _Language,
      //      _StartDate

}

where
  ManufacturingOrderCategory = '10'
```
