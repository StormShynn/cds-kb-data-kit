---
name: C_MAINTORDEROPERATIONDEX
description: "Maintenance Order Operation"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDEROPERATIONDEX')/$value
semantic_en: "Maintenance Order Operation"
semantic_vi: "Maintenance Order Operation — CDS view tiêu dùng (transactional data) dựa trên I_MaintOrderOpAndSubOp_2."
keywords:
  - "maintenance"
  - "order"
  - "operation"
  - "maint"
  - "routing"
  - "number"
  - "node"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDEROPERATIONDEX

**Maintenance Order Operation**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDEROPERATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderRoutingNumber` | ✓ | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `MaintenanceOrderRoutingNode` | ✓ | |  | `cast( Operation.MaintenanceOrderRoutingNode as operationinternalid preserving type )` | `NUMC(8)` | Internal Identifier of an Operation or Activity |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` |  | |  |  | `CHAR(4)` |  |
| `MaintenanceOrderSubOperation` |  | |  | `cast ( Operation.MaintenanceOrderSubOperation as maintenanceordersuboperation preserving type )` | `CHAR(4)` | Maintenance Order Suboperation |
| `BillOfOperationsApplication` |  | |  |  | `CHAR(1)` | Application of the task list |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  | `cast ( Operation.FunctionalLocation as vdm_eam_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `OperationPersonResponsible` |  | |  |  | `NUMC(8)` | Personnel number |
| `OperationControlKey` |  | |  |  | `CHAR(4)` | Control Key |
| `OperationDescription` |  | |  |  | `CHAR(40)` | Operation Short Text |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  | `Plant` | `CHAR(4)` | Plant |
| `OperationAssembly` |  | |  | `Assembly` | `CHAR(40)` | Assembly |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `OperationUnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `MaintOrderConfirmation` |  | |  |  | `NUMC(10)` | Completion confirmation number for the operation |
| `MaintOrdOperationStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `SuperiorOperationInternalID` |  | |  |  | `NUMC(8)` | Node Number of the Superior Operation |
| `OperationWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OperationWorkCenterTypeCode` |  | |  |  | `CHAR(1)` |  |
| `MaintOrdOpProcessPhaseCode` |  | |  |  | `CHAR(2)` | Process Phase |
| `MaintOrdOpProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `MaintOperationExecStageCode` |  | |  |  | `CHAR(10)` | PRE MAIN POST |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `OperationStandardTextCode` |  | |  |  | `CHAR(7)` | Standard text key |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `NumberOfTimeTickets` |  | |  |  | `DEC(3)` | Number of Time Tickets |
| `OperationPurgInfoRecdSearchTxt` |  | |  |  | `CHAR(10)` | Sort Term for Non-Stock Info Records |
| `OperationSupplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `OpExternalProcessingPrice` |  | |  |  | `CURR(11)` | Price |
| `OpExternalProcessingPriceUnit` |  | |  |  | `DEC(5)` | Price Unit |
| `OpExternalProcessingCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OperationPurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group for External Processing Activity |
| `OpPurchaseOutlineAgreement` |  | |  |  | `CHAR(10)` | Number of principal purchase agreement |
| `OpPurchaseOutlineAgreementItem` |  | |  |  | `NUMC(5)` | Item Number of Principal Purchase Agreement |
| `OperationRequisitionerName` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `OperationTrackingNumber` |  | |  |  | `CHAR(10)` | Requirement Tracking Number |
| `NumberOfCapacities` |  | |  |  | `INT1(3)` | Number of capacities required |
| `OperationWorkPercent` |  | |  |  | `INT1(3)` | Work percentage |
| `OperationCalculationControl` |  | |  |  | `CHAR(1)` | Key for calculation |
| `ActivityType` |  | |  | `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OperationSystemCondition` |  | |  |  | `CHAR(1)` | System Condition |
| `OperationGoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `MaintControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `WrkCtrIntCapRqmtsDistr` |  | |  |  | `CHAR(8)` | Distr.cap.reqmts (plant maint.,process order, network) |
| `MaintOrdOperationOverheadCode` |  | |  |  | `CHAR(6)` | Overhead key |
| `MaintOrdOpAssgdWBSElmntInt` |  | |  |  | `NUMC(8)` | WBS Element |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition in Order |
| `AllMaintOrdCompCmtdQtsAreKept` |  | |  |  | `CHAR(1)` | Keep Committed Quantities of All Stock Components |
| `MaintOrderConfCntrValue` |  | |  |  | `NUMC(8)` | Confirmation counter |
| `MaintOrdOpHasNoRemainingWork` |  | |  |  | `CHAR(1)` | Indicator: No Remaining Work Expected |
| `MaintOrdOpHasLeanServices` |  | |  |  | `CHAR(1)` | Indicator: operation is linked to a service |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `MaintOrdOpDelivDateAdjustment` |  | |  |  | `CHAR(1)` | Align Purchase Requisition Delivery Date |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `DeliveryTimeInDays` |  | |  | `OpPlndDeliveryDurationInDays` | `DEC(3)` | Planned Delivery Time in Days |
| `MaintOrderOperationDuration` |  | |  | `OperationDuration` | `QUAN(5)` | Normal Duration of Activity |
| `MaintOrdOperationDurationUnit` |  | |  | `OperationDurationUnit` | `UNIT(3)` | Normal Duration/Unit |
| `OpErlstSchedldExecStrtDte` |  | |  |  | `DATS(8)` | Earliest scheduled start: Execution (date) |
| `OpErlstSchedldExecStrtTme` |  | |  |  | `TIMS(6)` | Earliest scheduled start: Execution (time) |
| `OpErlstSchedldExecEndDte` |  | |  |  | `DATS(8)` | Earliest scheduled finish: Execution (date) |
| `OpErlstSchedldExecEndTme` |  | |  |  | `TIMS(6)` | Earliest scheduled finish: Execution (time) |
| `OpLtstSchedldExecStrtDte` |  | |  |  | `DATS(8)` | Latest scheduled start: Execution (date) |
| `OpLtstSchedldExecStrtTme` |  | |  |  | `TIMS(6)` | Latest scheduled start: Execution (time) |
| `OpLtstSchedldExecEndDte` |  | |  |  | `DATS(8)` | Latest scheduled finish: Execution (date) |
| `OpLtstSchedldExecEndTme` |  | |  |  | `TIMS(6)` | Latest scheduled finish: Execution (time) |
| `OpActualExecutionStartDate` |  | |  |  | `DATS(8)` | Actual Execution Start Date |
| `OpActualExecutionStartTime` |  | |  |  | `TIMS(6)` | Actual Execution Start Time |
| `OpActualExecutionEndDate` |  | |  |  | `DATS(8)` | Actual Execution End Date |
| `OpActualExecutionEndTime` |  | |  |  | `TIMS(6)` | Actual Execution End Time |
| `ActyConfFcstdEndDate` |  | |  |  | `DATS(8)` | Forecast finish date of operation from confirmation |
| `ActyConfFcstdEndTime` |  | |  |  | `TIMS(6)` | Forecast End Time of Operation from Confirmation |
| `OpBscStartDateConstraintType` |  | |  |  | `CHAR(1)` | Constraint on the basic start date for the activity |
| `OpBscEndDateConstraintType` |  | |  |  | `CHAR(1)` | Constraint on the finish date of the activity |
| `MaintOrdOperationWorkDuration` |  | |  | `OperationPlannedWork` | `QUAN(7)` | Work involved in the activity |
| `MaintOrdOpWorkDurationUnit` |  | |  | `OperationPlannedWorkUnit` | `UNIT(3)` | Unit for Work |
| `ConstraintDateForBscStartDate` |  | |  |  | `DATS(8)` | Constraint for activity start (Basic) |
| `ConstraintTimeForBscStartTime` |  | |  |  | `TIMS(6)` | Constraint for activity start time (Basic) |
| `ConstraintDateForBscFinishDate` |  | |  |  | `DATS(8)` | Constraint for Finish of Activity (Basic) |
| `ConstraintTimeForBscFinishTime` |  | |  |  | `TIMS(6)` | Basic finish time of the activity |
| `MaintOrdOperationExecutionRate` |  | |  |  | `DEC(3)` | Execution Factor |
| `MaintOrderOperationQuantity` |  | |  | `OperationQuantity` | `QUAN(13)` | Operation Quantity in Unit of Measure of Order |
| `MaintOrdOperationQuantityUnit` |  | |  | `OperationQuantityUnit` | `UNIT(3)` | Base Unit of Measure |
| `ForecastWorkQuantity` |  | |  | `ForecastedWorkQty` | `QUAN(7)` | Forecast Work (Actual + Remaining) |
| `OperationPlannedWork` |  | |  |  | `QUAN(7)` | Work involved in the activity |
| `OperationPlannedWorkUnit` |  | |  |  | `UNIT(3)` | Unit for Work |
| `ConfirmationTotalQuantity` |  | |  |  | `QUAN(13)` | Actual Work |
| `OperationQuantity` |  | |  |  | `QUAN(13)` | Operation Quantity in Unit of Measure of Order |
| `OperationQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDEROPERATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDEROPERATIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Maintenance Order Operation'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #CONSUMPTION


@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'AFVC', role: #MAIN,
                    viewElement: ['MaintOrderRoutingNumber','MaintenanceOrderRoutingNode'],
                    tableElement: ['AUFPL','APLZL']
                },
                {
                    table: 'AFVV', role:  #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: [ 'MaintOrderRoutingNumber', 'MaintenanceOrderRoutingNode'],
                    tableElement: ['AUFPL','APLZL']
                }
             ]

        }
   }
}

@ObjectModel: {
 usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  },
 supportedCapabilities:[ #EXTRACTION_DATA_SOURCE],
 modelingPattern: #ANALYTICAL_FACT,
 sapObjectNodeType.name:'MaintenanceOrderOperation'
}

define view entity C_MaintOrderOperationDEX
  as select from           I_MaintOrderOpAndSubOp_2       as Operation
    left outer to one join I_MaintOrderOperPlanningValues as OperationPlanningValues on  OperationPlanningValues.MaintOrderRoutingNumber    = Operation.MaintOrderRoutingNumber
                                                                                     and OperationPlanningValues.MaintOrderOperationCounter = Operation.MaintenanceOrderRoutingNode
{
      /* start suppress warning shlporigin_not_inherited */
  key Operation.MaintOrderRoutingNumber,
  key cast( Operation.MaintenanceOrderRoutingNode as operationinternalid preserving type )            as MaintenanceOrderRoutingNode,
      Operation.MaintenanceOrder,
      @EndUserText.label: 'Maintenance Order Operation'
      Operation.MaintenanceOrderOperation,
      cast ( Operation.MaintenanceOrderSubOperation as maintenanceordersuboperation preserving type ) as MaintenanceOrderSubOperation,      
      Operation.BillOfOperationsApplication,
      // Order Operation (MCVGIH)
      Operation.Equipment,
      cast ( Operation.FunctionalLocation as vdm_eam_tplnr preserving type )                          as FunctionalLocation,
      Operation.OperationPersonResponsible,
      Operation.OperationControlKey,
      Operation.OperationDescription,
      Operation._WorkCenter.WorkCenter,
      Operation._WorkCenter.Plant                                                                     as WorkCenterPlant,
      Operation.Assembly                                                                              as OperationAssembly,
      Operation.CostCtrActivityType,
      Operation.CostElement,
      Operation.MaterialGroup,
      Operation.OperationUnloadingPointName,
      Operation.PurchaseRequisition,
      Operation.MaintOrderConfirmation,
      Operation.MaintOrdOperationStatusObject,
      Operation.SuperiorOperationInternalID,
      Operation.OperationWorkCenterInternalID,
      @EndUserText.label: 'Type of work center for operation'
      Operation.OperationWorkCenterTypeCode,
      Operation.MaintOrdOpProcessPhaseCode,
      Operation.MaintOrdOpProcessSubPhaseCode,
      Operation.MaintOperationExecStageCode,
      Operation.Plant,
      Operation.OperationStandardTextCode,
      Operation.Language,
      Operation.NumberOfTimeTickets,
      Operation.OperationPurgInfoRecdSearchTxt,
      Operation.OperationSupplier,
      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      Operation.OpExternalProcessingPrice,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      Operation.OpExternalProcessingPriceUnit,
      Operation.OpExternalProcessingCurrency,
      Operation.OperationPurchasingInfoRecord,
      Operation.PurchasingOrganization,
      Operation.PurchasingGroup,
      Operation.OpPurchaseOutlineAgreement,
      Operation.OpPurchaseOutlineAgreementItem,
      Operation.OperationRequisitionerName,
      Operation.OperationTrackingNumber,
      Operation.NumberOfCapacities,
      Operation.OperationWorkPercent,
      Operation.OperationCalculationControl,
      Operation.CostCtrActivityType                                                                   as ActivityType,
      Operation.OperationSystemCondition,
      Operation.OperationGoodsRecipientName,
      Operation.BusinessArea,
      Operation.ProfitCenter,
      Operation.CostingSheet,
      Operation.TaxJurisdiction,
      Operation.FunctionalArea,
      Operation.MaintControllingObjectClass,
      Operation.WrkCtrIntCapRqmtsDistr,
      Operation.MaintOrdOperationOverheadCode,
      Operation.MaintOrdOpAssgdWBSElmntInt,
      Operation.IsMarkedForDeletion,
      Operation.PurchaseRequisitionItem,
      Operation.AllMaintOrdCompCmtdQtsAreKept,
      Operation.MaintOrderConfCntrValue,
      Operation.MaintOrdOpHasNoRemainingWork,
      Operation.MaintOrdOpHasLeanServices,
      Operation.TaskListType,
      Operation.MaintOrdOpDelivDateAdjustment,
      Operation.TaskListGroup,
      Operation.TaskListGroupCounter,

      OperationPlanningValues.OpPlndDeliveryDurationInDays                                            as DeliveryTimeInDays,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      OperationPlanningValues.OperationDuration                                                       as MaintOrderOperationDuration,
      OperationPlanningValues.OperationDurationUnit                                                   as MaintOrdOperationDurationUnit,
      OperationPlanningValues.OpErlstSchedldExecStrtDte                                               as OpErlstSchedldExecStrtDte,
      OperationPlanningValues.OpErlstSchedldExecStrtTme                                               as OpErlstSchedldExecStrtTme,
      OperationPlanningValues.OpErlstSchedldExecEndDte                                                as OpErlstSchedldExecEndDte,
      OperationPlanningValues.OpErlstSchedldExecEndTme                                                as OpErlstSchedldExecEndTme,
      OperationPlanningValues.OpLtstSchedldExecStrtDte                                                as OpLtstSchedldExecStrtDte,
      OperationPlanningValues.OpLtstSchedldExecStrtTme                                                as OpLtstSchedldExecStrtTme,
      OperationPlanningValues.OpLtstSchedldExecEndDte                                                 as OpLtstSchedldExecEndDte,
      OperationPlanningValues.OpLtstSchedldExecEndTme                                                 as OpLtstSchedldExecEndTme,
      OperationPlanningValues.OpActualExecutionStartDate                                              as OpActualExecutionStartDate,
      OperationPlanningValues.OpActualExecutionStartTime                                              as OpActualExecutionStartTime,
      OperationPlanningValues.OpActualExecutionEndDate                                                as OpActualExecutionEndDate,
      OperationPlanningValues.OpActualExecutionEndTime                                                as OpActualExecutionEndTime,
      OperationPlanningValues.ActyConfFcstdEndDate                                                    as ActyConfFcstdEndDate,
      OperationPlanningValues.ActyConfFcstdEndTime                                                    as ActyConfFcstdEndTime,
      OperationPlanningValues.OpBscStartDateConstraintType                                            as OpBscStartDateConstraintType,
      OperationPlanningValues.OpBscEndDateConstraintType                                              as OpBscEndDateConstraintType,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      OperationPlanningValues.OperationPlannedWork                                                    as MaintOrdOperationWorkDuration,
      OperationPlanningValues.OperationPlannedWorkUnit                                                as MaintOrdOpWorkDurationUnit,
      OperationPlanningValues.ConstraintDateForBscStartDate,
      OperationPlanningValues.ConstraintTimeForBscStartTime,
      OperationPlanningValues.ConstraintDateForBscFinishDate,
      OperationPlanningValues.ConstraintTimeForBscFinishTime,
      OperationPlanningValues.MaintOrdOperationExecutionRate                                          as MaintOrdOperationExecutionRate,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      OperationPlanningValues.OperationQuantity                                                       as MaintOrderOperationQuantity,
      OperationPlanningValues.OperationQuantityUnit                                                   as MaintOrdOperationQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      OperationPlanningValues.ForecastedWorkQty                                                       as ForecastWorkQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      OperationPlanningValues.OperationPlannedWork,
      OperationPlanningValues.OperationPlannedWorkUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      OperationPlanningValues.ConfirmationTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationQuantityUnit'
      OperationPlanningValues.OperationQuantity,
      OperationPlanningValues.OperationQuantityUnit
      /* end suppress warning shlporigin_not_inherited */
}
```
