---
name: I_MAINTENANCEORDEROPERATIONTP
description: Maintenance OrderOPERATIONTP
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDEROPERATIONTP

**Maintenance OrderOPERATIONTP**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `MaintenanceOrder` |
| key `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| key `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `MaintOrderRoutingNumber` | `MaintOrderRoutingNumber` |
| `MaintenanceOrderRoutingNode` | `MaintenanceOrderRoutingNode` |
| `SuperiorOperationInternalID` | `SuperiorOperationInternalID` |
| `OperationControlKey` | `OperationControlKey` |
| `OperationDescription` | `OperationDescription` |
| `OperationWorkCenterInternalID` | `OperationWorkCenterInternalID` |
| `OperationWorkCenterTypeCode` | `OperationWorkCenterTypeCode` |
| `Plant` | `Plant` |
| `OperationStandardTextCode` | `OperationStandardTextCode` |
| `Language` | `Language` |
| `NumberOfTimeTickets` | `NumberOfTimeTickets` |
| `OperationPurgInfoRecdSearchTxt` | `OperationPurgInfoRecdSearchTxt` |
| `OperationSupplier` | `OperationSupplier` |
| `OpExternalProcessingPrice` | `OpExternalProcessingPrice` |
| `OpExternalProcessingPriceUnit` | `OpExternalProcessingPriceUnit` |
| `OpExternalProcessingCurrency` | `OpExternalProcessingCurrency` |
| `CostElement` | `CostElement` |
| `OperationPurchasingInfoRecord` | `OperationPurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `MaterialGroup` | `MaterialGroup` |
| `OpPurchaseOutlineAgreement` | `OpPurchaseOutlineAgreement` |
| `OpPurchaseOutlineAgreementItem` | `OpPurchaseOutlineAgreementItem` |
| `OperationRequisitionerName` | `OperationRequisitionerName` |
| `OperationTrackingNumber` | `OperationTrackingNumber` |
| `NumberOfCapacities` | `NumberOfCapacities` |
| `OperationWorkPercent` | `OperationWorkPercent` |
| `OperationCalculationControl` | `OperationCalculationControl` |
| `ActivityType` | `ActivityType` |
| `OperationSystemCondition` | `OperationSystemCondition` |
| `OperationGoodsRecipientName` | `OperationGoodsRecipientName` |
| `OperationUnloadingPointName` | `OperationUnloadingPointName` |
| `OperationPersonResponsible` | `OperationPersonResponsible` |
| `EAMPlannedDeliveryDurnInDays` | `EAMPlannedDeliveryDurnInDays` |
| `MaintOrderOperationDuration` | `MaintOrderOperationDuration` |
| `MaintOrdOperationDurationUnit` | `MaintOrdOperationDurationUnit` |
| `OpErlstSchedldExecStrtDteTme` | `OpErlstSchedldExecStrtDteTme` |
| `OpErlstSchedldExecEndDteTme` | `OpErlstSchedldExecEndDteTme` |
| `OpLtstSchedldExecStrtDteTme` | `OpLtstSchedldExecStrtDteTme` |
| `OpLtstSchedldExecEndDteTme` | `OpLtstSchedldExecEndDteTme` |
| `OpActualExecutionStartDateTime` | `OpActualExecutionStartDateTime` |
| `OpActualExecutionEndDateTime` | `OpActualExecutionEndDateTime` |
| `OpBscStartDateConstraintType` | `OpBscStartDateConstraintType` |
| `OpBscEndDateConstraintType` | `OpBscEndDateConstraintType` |
| `MaintOrdOperationWorkDuration` | `MaintOrdOperationWorkDuration` |
| `MaintOrdOpWorkDurationUnit` | `MaintOrdOpWorkDurationUnit` |
| `MaintOrdOpConstraintStrtDteTme` | `MaintOrdOpConstraintStrtDteTme` |
| `ConstraintDateForBscStartDate` | `ConstraintDateForBscStartDate` |
| `ConstraintTimeForBscStartTime` | `ConstraintTimeForBscStartTime` |
| `MaintOrdOpCstrtFinishDteTme` | `MaintOrdOpCstrtFinishDteTme` |
| `ConstraintDateForBscFinishDate` | `ConstraintDateForBscFinishDate` |
| `ConstraintTimeForBscFinishTime` | `ConstraintTimeForBscFinishTime` |
| `MaintOrdOperationExecutionRate` | `MaintOrdOperationExecutionRate` |
| `Equipment` | `Equipment` |
| `FunctionalLocation` | `FunctionalLocation` |
| `OpErlstSchedldExecStrtDte` | `OpErlstSchedldExecStrtDte` |
| `OpErlstSchedldExecStrtTme` | `OpErlstSchedldExecStrtTme` |
| `OpErlstSchedldExecEndDte` | `OpErlstSchedldExecEndDte` |
| `OpErlstSchedldExecEndTme` | `OpErlstSchedldExecEndTme` |
| `OpLtstSchedldExecStrtDte` | `OpLtstSchedldExecStrtDte` |
| `OpLtstSchedldExecStrtTme` | `OpLtstSchedldExecStrtTme` |
| `OpLtstSchedldExecEndDte` | `OpLtstSchedldExecEndDte` |
| `OpLtstSchedldExecEndTme` | `OpLtstSchedldExecEndTme` |
| `OpActualExecutionStartDate` | `OpActualExecutionStartDate` |
| `OpActualExecutionStartTime` | `OpActualExecutionStartTime` |
| `OpActualExecutionEndDate` | `OpActualExecutionEndDate` |
| `OpActualExecutionEndTime` | `OpActualExecutionEndTime` |
| `ActyConfFcstdEndDate` | `ActyConfFcstdEndDate` |
| `ActyConfFcstdEndTime` | `ActyConfFcstdEndTime` |
| `ActyConfForecastedEndDateTime` | `ActyConfForecastedEndDateTime` |
| `ForecastWorkQuantity` | `ForecastWorkQuantity` |
| `ActualWorkQuantity` | `ActualWorkQuantity` |
| `MaintenanceActivityType` | `MaintenanceActivityType` |
| `BusinessArea` | `BusinessArea` |
| `ProfitCenter` | `ProfitCenter` |
| `CostingSheet` | `CostingSheet` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `FunctionalArea` | `FunctionalArea` |
| `MaintOrdOperationIsMRPRelevant` | `MaintOrdOperationIsMRPRelevant` |
| `MaintControllingObjectClass` | `MaintControllingObjectClass` |
| `WrkCtrIntCapRqmtsDistr` | `WrkCtrIntCapRqmtsDistr` |
| `MaintOrdOperationOverheadCode` | `MaintOrdOperationOverheadCode` |
| `MaintOrderOperationQuantity` | `MaintOrderOperationQuantity` |
| `MaintOrdOperationQuantityUnit` | `MaintOrdOperationQuantityUnit` |
| `Assembly` | `Assembly` |
| `MaintOperationExecStageCode` | `MaintOperationExecStageCode` |
| `MaintOrdOpAssgdWBSElmntInt` | `MaintOrdOpAssgdWBSElmntInt` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `MaintOrderOperationInternalID` | `MaintOrderOperationInternalID` |
| `MaintenanceObjectListItem` | `MaintenanceObjectListItem` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `MaintOrdOpProcessPhaseCode` | `MaintOrdOpProcessPhaseCode` |
| `MaintOrdOpProcessSubPhaseCode` | `MaintOrdOpProcessSubPhaseCode` |
| `AllMaintOrdCompCmtdQtsAreKept` | `AllMaintOrdCompCmtdQtsAreKept` |
| `ControllingArea` | `ControllingArea` |
| `MaintOrderConfirmation` | `MaintOrderConfirmation` |
| `MaintOrderConfCntrValue` | `MaintOrderConfCntrValue` |
| `MaintOrdOpHasNoRemainingWork` | `MaintOrdOpHasNoRemainingWork` |
| `MaintOrdOpHasLeanServices` | `MaintOrdOpHasLeanServices` |
| `MaintOrdOpDelivDateAdjustment` | `MaintOrdOpDelivDateAdjustment` |
| `TaskListType` | `TaskListType` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `_OperationWorkCenter` | *Association* |
| `_Supplier` | *Association* |
| `_PersonResponsible` | *Association* |
| `_MaintenanceOrder` | *Association* |
| `_MaintOrderOpLongText` | *Association* |
| `_MaintOrderOpRelationship` | *Association* |
| `_MaintOrderOpProdnRsceTool` | *Association* |
| `_MaintOrderOpPhaseControl` | *Association* |
| `_MaintOrderOpComponent` | *Association* |
| `_MaintOrderOpComponent_2` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maint Order Operation Projection - TP'
@AccessControl: { authorizationCheck: #CHECK, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
//@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE - incompatible change
@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_MaintenanceOrderOperationTP
  as projection on R_MaintenanceOrderOperationTP as _MaintenanceOrderOperationTP
{
  key MaintenanceOrder,
  key MaintenanceOrderOperation,
  key MaintenanceOrderSubOperation,

      MaintOrderRoutingNumber,
      MaintenanceOrderRoutingNode,
      SuperiorOperationInternalID,
      OperationControlKey,
      OperationDescription,
      OperationWorkCenterInternalID,
      OperationWorkCenterTypeCode,
      Plant,
      OperationStandardTextCode,
      Language,
      NumberOfTimeTickets,
      OperationPurgInfoRecdSearchTxt,
      OperationSupplier,

      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      OpExternalProcessingPriceUnit,
      OpExternalProcessingCurrency,

      CostElement,
      OperationPurchasingInfoRecord,
      PurchasingOrganization,
      PurchasingGroup,
      MaterialGroup,
      OpPurchaseOutlineAgreement,
      OpPurchaseOutlineAgreementItem,
      OperationRequisitionerName,
      OperationTrackingNumber,
      NumberOfCapacities,
      OperationWorkPercent,
      OperationCalculationControl,
      ActivityType,
      OperationSystemCondition,
      OperationGoodsRecipientName,
      OperationUnloadingPointName,
      OperationPersonResponsible,
      EAMPlannedDeliveryDurnInDays,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      MaintOrderOperationDuration,
      MaintOrdOperationDurationUnit,
      OpErlstSchedldExecStrtDteTme,
      OpErlstSchedldExecEndDteTme,
      OpLtstSchedldExecStrtDteTme,
      OpLtstSchedldExecEndDteTme,
      OpActualExecutionStartDateTime,
      OpActualExecutionEndDateTime,
      OpBscStartDateConstraintType,
      OpBscEndDateConstraintType,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      MaintOrdOperationWorkDuration,
      MaintOrdOpWorkDurationUnit,

      MaintOrdOpConstraintStrtDteTme,
      ConstraintDateForBscStartDate,
      ConstraintTimeForBscStartTime,
      MaintOrdOpCstrtFinishDteTme,
      ConstraintDateForBscFinishDate,
      ConstraintTimeForBscFinishTime,
      MaintOrdOperationExecutionRate,
      Equipment,
      FunctionalLocation,

      OpErlstSchedldExecStrtDte,
      OpErlstSchedldExecStrtTme,
      OpErlstSchedldExecEndDte,
      OpErlstSchedldExecEndTme,
      OpLtstSchedldExecStrtDte,
      OpLtstSchedldExecStrtTme,
      OpLtstSchedldExecEndDte,
      OpLtstSchedldExecEndTme,
      OpActualExecutionStartDate,
      OpActualExecutionStartTime,
      OpActualExecutionEndDate,
      OpActualExecutionEndTime,
      ActyConfFcstdEndDate,
      ActyConfFcstdEndTime,
      ActyConfForecastedEndDateTime,


      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      ForecastWorkQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      ActualWorkQuantity,

      MaintenanceActivityType,
      BusinessArea,
      ProfitCenter,
      CostingSheet,
      TaxJurisdiction,
      FunctionalArea,

      @Semantics.booleanIndicator: true
      MaintOrdOperationIsMRPRelevant,
      MaintControllingObjectClass,
      WrkCtrIntCapRqmtsDistr,
      MaintOrdOperationOverheadCode,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      MaintOrderOperationQuantity,
      MaintOrdOperationQuantityUnit,

      Assembly,
      MaintOperationExecStageCode,
      MaintOrdOpAssgdWBSElmntInt,
      IsMarkedForDeletion,
      MaintOrderOperationInternalID,
      MaintenanceObjectListItem,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      MaintOrdOpProcessPhaseCode,
      MaintOrdOpProcessSubPhaseCode,
      AllMaintOrdCompCmtdQtsAreKept,
      ControllingArea,
      MaintOrderConfirmation,
      MaintOrderConfCntrValue,
      MaintOrdOpHasNoRemainingWork,
      MaintOrdOpHasLeanServices,
      MaintOrdOpDelivDateAdjustment,
      TaskListType,
      TaskListGroup,
      TaskListGroupCounter,
      _OperationWorkCenter,
      _Supplier,
      _PersonResponsible,
      _MaintenanceOrder          : redirected to parent I_MaintenanceOrderTP,
      @Semantics.valueRange.maximum: '1' //RAP CC for Longtext cardinality [0..*]  issue
      _MaintOrderOpLongText      : redirected to composition child I_MaintOrderOpLongTextTP,
      _MaintOrderOpRelationship  : redirected to composition child I_MaintOrderOpRelationshipTP,
      _MaintOrderOpProdnRsceTool : redirected to composition child I_MaintOrderOpProdnRsceToolTP,
      _MaintOrderOpPhaseControl  : redirected to composition child I_MaintOrderOpPhaseControlTP,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaintOrderOpComponent_2'
      _MaintOrderOpComponent     : redirected to composition child I_MaintOrderOpComponentTP,
      _MaintOrderOpComponent_2   : redirected to composition child I_MaintOrderOpComponentTP_2
}
```
