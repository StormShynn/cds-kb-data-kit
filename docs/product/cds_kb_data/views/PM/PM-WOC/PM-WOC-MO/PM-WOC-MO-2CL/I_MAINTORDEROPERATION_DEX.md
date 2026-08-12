---
name: I_MAINTORDEROPERATION_DEX
description: "Maintorderoperation (Data Extraction)"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - data-extraction
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPERATION_DEX

**Maintorderoperation (Data Extraction)**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderRoutingNumber` | ✓ | |  |  |  |  |
| `MaintenanceOrderRoutingNode` | ✓ | |  | `cast( MaintenanceOrderRoutingNode as operationinternalid preserving type )` |  |  |
| `MaintenanceOrder` |  | |  |  |  |  |
| `BillOfOperationsApplication` |  | |  |  |  |  |
| `FunctionalLocation` |  | | `_MaintenanceOrder._LocationAccountAssignment` | `FunctionalLocation` |  |  |
| `Equipment` |  | | `_MaintenanceOrder` | `Equipment` |  |  |
| `Assembly` |  | | `_MaintenanceOrder` | `Assembly` |  |  |
| `MaintenanceActivityType` |  | | `_MaintenanceOrder` | `MaintenanceActivityType` |  |  |
| `MaintenancePlannerGroup` |  | | `_MaintenanceOrder` | `MaintenancePlannerGroup` |  |  |
| `MaintenancePlanningPlant` |  | | `_MaintenanceOrder` | `MaintenancePlanningPlant` |  |  |
| `MaintenanceOrderType` |  | | `_MaintenanceOrder` | `MaintenanceOrderType` |  |  |
| `MaintenancePlant` |  | | `_MaintenanceOrder` | `MaintenancePlant` |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | | `_MaintenanceOrder` | `MaintObjectLocAcctAssgmtNmbr` |  |  |
| `CreationDate` |  | | `_MaintenanceOrder._Order` | `CreationDate` |  |  |
| `LastChangeDateTime` |  | | `_MaintenanceOrder` | `LastChangeDateTime` |  |  |
| `MaintOrdProcessPhaseCode` |  | | `_MaintenanceOrder` | `MaintOrdProcessPhaseCode` |  |  |
| `MaintOrdProcessSubPhaseCode` |  | | `_MaintenanceOrder` | `MaintOrdProcessSubPhaseCode` |  |  |
| `LatestAcceptableCompletionDate` |  | | `_MaintenanceOrder` | `LatestAcceptableCompletionDate` |  |  |
| `PrevLtstAccptblCompletionDate` |  | | `_MaintenanceOrder` | `PrevLtstAccptblCompletionDate` |  |  |
| `MaintOrderProcessingContext` |  | | `_MaintenanceOrder` | `MaintOrderProcessingContext` |  |  |
| `MaintenanceOrderOperation` |  | |  |  |  |  |
| `MaintenanceOrderSubOperation` |  | |  |  |  |  |
| `OperationPersonResponsible` |  | |  |  |  |  |
| `OperationControlKey` |  | |  |  |  |  |
| `OperationDescription` |  | |  |  |  |  |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` |  |  |
| `WorkCenterPlant` |  | | `_WorkCenter` | `Plant` |  |  |
| `OperationPlannedWork` |  | | `_OperationPlanningValues` | `OperationPlannedWork` |  |  |
| `OperationPlannedWorkUnit` |  | | `_OperationPlanningValues` | `OperationPlannedWorkUnit` |  |  |
| `ConfirmationTotalQuantity` |  | | `_OperationPlanningValues` | `ConfirmationTotalQuantity` |  |  |
| `OperationQuantity` |  | | `_OperationPlanningValues` | `OperationQuantity` |  |  |
| `OperationQuantityUnit` |  | | `_OperationPlanningValues` | `OperationQuantityUnit` |  |  |
| `OperationAssembly` |  | |  | `Assembly` |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `OperationUnloadingPointName` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `IsDeleted` |  | |  | `cast( case when _StatusObjectActiveStatus[ StatusCode = 'I0013' ].StatusCode is not null then 'X' else ' ' end as eam_is_deleted preserving type )` |  |  |
| `MaintOrderConfirmation` |  | |  |  |  |  |
| `MaintOrdOperationStatusObject` |  | |  |  |  |  |
| `SuperiorOperationInternalID` |  | |  |  |  |  |
| `OperationWorkCenterInternalID` |  | |  |  |  |  |
| `OperationWorkCenterTypeCode` |  | |  |  |  |  |
| `MaintOrdOpProcessPhaseCode` |  | |  |  |  |  |
| `MaintOrdOpProcessSubPhaseCode` |  | |  |  |  |  |
| `MaintOperationExecStageCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OperationStandardTextCode` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `NumberOfTimeTickets` |  | |  |  |  |  |
| `OperationPurgInfoRecdSearchTxt` |  | |  |  |  |  |
| `OperationSupplier` |  | |  |  |  |  |
| `OpExternalProcessingPrice` |  | |  |  |  |  |
| `OpExternalProcessingPriceUnit` |  | |  |  |  |  |
| `OpExternalProcessingCurrency` |  | |  |  |  |  |
| `OperationPurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `OpPurchaseOutlineAgreement` |  | |  |  |  |  |
| `OpPurchaseOutlineAgreementItem` |  | |  |  |  |  |
| `OperationRequisitionerName` |  | |  |  |  |  |
| `OperationTrackingNumber` |  | |  |  |  |  |
| `NumberOfCapacities` |  | |  |  |  |  |
| `OperationWorkPercent` |  | |  |  |  |  |
| `OperationCalculationControl` |  | |  |  |  |  |
| `ActivityType` |  | |  | `CostCtrActivityType` |  |  |
| `OperationSystemCondition` |  | |  |  |  |  |
| `OperationGoodsRecipientName` |  | |  |  |  |  |
| `DeliveryTimeInDays` |  | | `_OperationPlanningValues` | `OpPlndDeliveryDurationInDays` |  |  |
| `MaintOrderOperationDuration` |  | | `_OperationPlanningValues` | `OperationDuration` |  |  |
| `MaintOrdOperationDurationUnit` |  | | `_OperationPlanningValues` | `OperationDurationUnit` |  |  |
| `OpErlstSchedldExecStrtDte` |  | | `_OperationPlanningValues` | `OpErlstSchedldExecStrtDte` |  |  |
| `OpErlstSchedldExecStrtTme` |  | | `_OperationPlanningValues` | `OpErlstSchedldExecStrtTme` |  |  |
| `OpErlstSchedldExecEndDte` |  | | `_OperationPlanningValues` | `OpErlstSchedldExecEndDte` |  |  |
| `OpErlstSchedldExecEndTme` |  | | `_OperationPlanningValues` | `OpErlstSchedldExecEndTme` |  |  |
| `OpLtstSchedldExecStrtDte` |  | | `_OperationPlanningValues` | `OpLtstSchedldExecStrtDte` |  |  |
| `OpLtstSchedldExecStrtTme` |  | | `_OperationPlanningValues` | `OpLtstSchedldExecStrtTme` |  |  |
| `OpLtstSchedldExecEndDte` |  | | `_OperationPlanningValues` | `OpLtstSchedldExecEndDte` |  |  |
| `OpLtstSchedldExecEndTme` |  | | `_OperationPlanningValues` | `OpLtstSchedldExecEndTme` |  |  |
| `OpActualExecutionStartDate` |  | | `_OperationPlanningValues` | `OpActualExecutionStartDate` |  |  |
| `OpActualExecutionStartTime` |  | | `_OperationPlanningValues` | `OpActualExecutionStartTime` |  |  |
| `OpActualExecutionEndDate` |  | | `_OperationPlanningValues` | `OpActualExecutionEndDate` |  |  |
| `OpActualExecutionEndTime` |  | | `_OperationPlanningValues` | `OpActualExecutionEndTime` |  |  |
| `ActyConfFcstdEndDate` |  | | `_OperationPlanningValues` | `ActyConfFcstdEndDate` |  |  |
| `ActyConfFcstdEndTime` |  | | `_OperationPlanningValues` | `ActyConfFcstdEndTime` |  |  |
| `OpBscStartDateConstraintType` |  | | `_OperationPlanningValues` | `OpBscStartDateConstraintType` |  |  |
| `OpBscEndDateConstraintType` |  | | `_OperationPlanningValues` | `OpBscEndDateConstraintType` |  |  |
| `MaintOrdOperationWorkDuration` |  | | `_OperationPlanningValues` | `OperationPlannedWork` |  |  |
| `MaintOrdOpWorkDurationUnit` |  | | `_OperationPlanningValues` | `OperationPlannedWorkUnit` |  |  |
| `ConstraintDateForBscStartDate` |  | |  | `case when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' and _OperationPlanningValues.ConstraintDateForBscStartDate <> '00000000' then dats_add_days(_OperationPlanningValues.ConstraintDateForBscStartDate,1,'NULL') else _OperationPlanningValues.ConstraintDateForBscStartDate end` |  |  |
| `ConstraintTimeForBscStartTime` |  | |  | `case when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' then '000000' else _OperationPlanningValues.ConstraintTimeForBscStartTime end` |  |  |
| `ConstraintDateForBscFinishDate` |  | |  | `case when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' and _OperationPlanningValues.ConstraintDateForBscFinishDate <> '00000000' then dats_add_days(_OperationPlanningValues.ConstraintDateForBscFinishDate,1,'NULL') else _OperationPlanningValues.ConstraintDateForBscFinishDate end` |  |  |
| `ConstraintTimeForBscFinishTime` |  | |  | `case when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' then '000000' else _OperationPlanningValues.ConstraintTimeForBscFinishTime end` |  |  |
| `MaintOrdOperationExecutionRate` |  | | `_OperationPlanningValues` | `MaintOrdOperationExecutionRate` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `MaintControllingObjectClass` |  | |  |  |  |  |
| `WrkCtrIntCapRqmtsDistr` |  | |  |  |  |  |
| `MaintOrdOperationOverheadCode` |  | |  |  |  |  |
| `MaintOrderOperationQuantity` |  | | `_OperationPlanningValues` | `OperationQuantity` |  |  |
| `MaintOrdOperationQuantityUnit` |  | | `_OperationPlanningValues` | `OperationQuantityUnit` |  |  |
| `MaintOrdOpAssgdWBSElmntInt` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `ForecastWorkQuantity` |  | | `_OperationPlanningValues` | `ForecastedWorkQty` |  |  |
| `AllMaintOrdCompCmtdQtsAreKept` |  | |  |  |  |  |
| `MaintOrderConfCntrValue` |  | |  |  |  |  |
| `MaintOrdOpHasNoRemainingWork` |  | |  |  |  |  |
| `MaintOrdOpHasLeanServices` |  | |  |  |  |  |
| `TaskListType` |  | |  |  |  |  |
| `ControllingArea` |  | | `_MaintenanceOrder` | `ControllingArea` |  |  |
| `MaintOrdOpDelivDateAdjustment` |  | |  |  |  |  |
| `TaskListGroup` |  | |  |  |  |  |
| `TaskListGroupCounter` |  | |  |  |  |  |
| `MaintOpExecStageGroupCode` |  | | `_MaintOperationExecStageCode` | `MaintOpExecStageGroupCode` |  |  |
| `_Order` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_PersonResponsible` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_LogisticsOrder` | [0..1] |
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Operation Data'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IPMORDOPERDEX'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE


@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}

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
                },{
                    table: 'AFKO', role:  #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: [' MaintenanceOrder'],
                    tableElement: ['AUFNR']}
                    ]

                 }
              }
          }
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name:'MaintenanceOrderOperation'

// A more comprehensive view for order (sub)operation data, created as a replacement for BW extractor 2LIS_17_I3OPER

define view I_MaintOrderOperation_DEX
  as select from I_MaintOrderOpAndSubOp_2
  association [0..1] to I_LogisticsOrder            as _Order                     on _Order.OrderID = $projection.MaintenanceOrder // AUFK (Order master data) and AFKO (Order Header data )
  association [0..1] to I_LocationAccountAssignment as _LocationAccountAssignment on $projection.MaintObjectLocAcctAssgmtNmbr = _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr
  association [0..1] to I_Equipment                 as _Equipment                 on $projection.Equipment = _Equipment.Equipment
  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceOrder          as _MaintenanceOrderExtension on $projection.MaintenanceOrder = _MaintenanceOrderExtension.MaintenanceOrder
{
  key MaintOrderRoutingNumber,
  key cast( MaintenanceOrderRoutingNode as operationinternalid preserving type ) as MaintenanceOrderRoutingNode,
      MaintenanceOrder,
      @Consumption.hidden: true
      BillOfOperationsApplication,

      // Order Header:
      _MaintenanceOrder._LocationAccountAssignment.FunctionalLocation            as FunctionalLocation,
      _MaintenanceOrder.Equipment                                                as Equipment,
      _MaintenanceOrder.Assembly                                                 as Assembly,
      _MaintenanceOrder.MaintenanceActivityType                                  as MaintenanceActivityType,
      _MaintenanceOrder.MaintenancePlannerGroup                                  as MaintenancePlannerGroup,
      _MaintenanceOrder.MaintenancePlanningPlant                                 as MaintenancePlanningPlant,
      _MaintenanceOrder.MaintenanceOrderType                                     as MaintenanceOrderType,
      _MaintenanceOrder.MaintenancePlant                                         as MaintenancePlant,
      _MaintenanceOrder.MaintObjectLocAcctAssgmtNmbr                             as MaintObjectLocAcctAssgmtNmbr,

      @Semantics.systemDate.createdAt: true
      _MaintenanceOrder._Order.CreationDate,
      @Semantics.systemDateTime.lastChangedAt: true
      _MaintenanceOrder.LastChangeDateTime,

      _MaintenanceOrder.MaintOrdProcessPhaseCode                                 as MaintOrdProcessPhaseCode,
      _MaintenanceOrder.MaintOrdProcessSubPhaseCode                              as MaintOrdProcessSubPhaseCode,
      _MaintenanceOrder.LatestAcceptableCompletionDate                           as LatestAcceptableCompletionDate,
      _MaintenanceOrder.PrevLtstAccptblCompletionDate                            as PrevLtstAccptblCompletionDate,
      _MaintenanceOrder.MaintOrderProcessingContext                              as MaintOrderProcessingContext,


      // Order Operation (MCVGIH)
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      OperationPersonResponsible,
      OperationControlKey,
      OperationDescription,
      _WorkCenter.WorkCenter,
      _WorkCenter.Plant                                                          as WorkCenterPlant,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.OperationPlannedWork,
      @ObjectModel.foreignKey.association: '_PlannedWorkUnitOfMeasure'
      @Semantics.unitOfMeasure:true
      _OperationPlanningValues.OperationPlannedWorkUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.ConfirmationTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationQuantityUnit'
      _OperationPlanningValues.OperationQuantity,
      @ObjectModel.foreignKey.association: '_OperationQtyUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      _OperationPlanningValues.OperationQuantityUnit,
      Assembly                                                                   as OperationAssembly,
      CostCtrActivityType,
      CostElement,
      MaterialGroup,
      OperationUnloadingPointName,
      PurchaseRequisition,

      @Semantics.booleanIndicator : true
      cast( case when _StatusObjectActiveStatus[ StatusCode = 'I0013' ].StatusCode is not null
      then 'X' else ' ' end as eam_is_deleted preserving type )                  as IsDeleted,

      MaintOrderConfirmation,
      MaintOrdOperationStatusObject,
      SuperiorOperationInternalID,
      OperationWorkCenterInternalID,
      OperationWorkCenterTypeCode,

      MaintOrdOpProcessPhaseCode,
      MaintOrdOpProcessSubPhaseCode,
      MaintOperationExecStageCode,

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

      OperationPurchasingInfoRecord,
      PurchasingOrganization,
      PurchasingGroup,

      OpPurchaseOutlineAgreement,
      OpPurchaseOutlineAgreementItem,
      OperationRequisitionerName,
      OperationTrackingNumber,

      NumberOfCapacities,
      OperationWorkPercent,
      OperationCalculationControl,
      CostCtrActivityType                                                        as ActivityType,

      OperationSystemCondition,
      OperationGoodsRecipientName,
      _OperationPlanningValues.OpPlndDeliveryDurationInDays                      as DeliveryTimeInDays,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      _OperationPlanningValues.OperationDuration                                 as MaintOrderOperationDuration,
      _OperationPlanningValues.OperationDurationUnit                             as MaintOrdOperationDurationUnit,
      _OperationPlanningValues.OpErlstSchedldExecStrtDte                         as OpErlstSchedldExecStrtDte,
      _OperationPlanningValues.OpErlstSchedldExecStrtTme                         as OpErlstSchedldExecStrtTme,
      _OperationPlanningValues.OpErlstSchedldExecEndDte                          as OpErlstSchedldExecEndDte,
      _OperationPlanningValues.OpErlstSchedldExecEndTme                          as OpErlstSchedldExecEndTme,
      _OperationPlanningValues.OpLtstSchedldExecStrtDte                          as OpLtstSchedldExecStrtDte,
      _OperationPlanningValues.OpLtstSchedldExecStrtTme                          as OpLtstSchedldExecStrtTme,
      _OperationPlanningValues.OpLtstSchedldExecEndDte                           as OpLtstSchedldExecEndDte,
      _OperationPlanningValues.OpLtstSchedldExecEndTme                           as OpLtstSchedldExecEndTme,
      _OperationPlanningValues.OpActualExecutionStartDate                        as OpActualExecutionStartDate,
      _OperationPlanningValues.OpActualExecutionStartTime                        as OpActualExecutionStartTime,
      _OperationPlanningValues.OpActualExecutionEndDate                          as OpActualExecutionEndDate,
      _OperationPlanningValues.OpActualExecutionEndTime                          as OpActualExecutionEndTime,
      _OperationPlanningValues.ActyConfFcstdEndDate                              as ActyConfFcstdEndDate,
      _OperationPlanningValues.ActyConfFcstdEndTime                              as ActyConfFcstdEndTime,
      _OperationPlanningValues.OpBscStartDateConstraintType                      as OpBscStartDateConstraintType,
      _OperationPlanningValues.OpBscEndDateConstraintType                        as OpBscEndDateConstraintType,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      _OperationPlanningValues.OperationPlannedWork                              as MaintOrdOperationWorkDuration,
      _OperationPlanningValues.OperationPlannedWorkUnit                          as MaintOrdOpWorkDurationUnit,
      //      _OperationPlanningValues.ConstraintDateForBscStartDate,
      //      _OperationPlanningValues.ConstraintTimeForBscStartTime,
      //      _OperationPlanningValues.ConstraintDateForBscFinishDate,
      //      _OperationPlanningValues.ConstraintTimeForBscFinishTime,
      //      Constraint Basic Start Date Time
      case
      when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' and
           _OperationPlanningValues.ConstraintDateForBscStartDate <> '00000000'
      then dats_add_days(_OperationPlanningValues.ConstraintDateForBscStartDate,1,'NULL')
      else _OperationPlanningValues.ConstraintDateForBscStartDate
      end                                                                     as ConstraintDateForBscStartDate,

      case
      when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000'
      then '000000'
      else _OperationPlanningValues.ConstraintTimeForBscStartTime
      end                                                                        as ConstraintTimeForBscStartTime,

      //      Constraint Basic Finisch Date Time
      case
      when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' and
           _OperationPlanningValues.ConstraintDateForBscFinishDate <> '00000000'
      then dats_add_days(_OperationPlanningValues.ConstraintDateForBscFinishDate,1,'NULL')
      else _OperationPlanningValues.ConstraintDateForBscFinishDate
      end                                                                  as ConstraintDateForBscFinishDate,

      case
      when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000'
      then '000000'
      else _OperationPlanningValues.ConstraintTimeForBscFinishTime
      end                                                                        as ConstraintTimeForBscFinishTime,
      _OperationPlanningValues.MaintOrdOperationExecutionRate                    as MaintOrdOperationExecutionRate,

      BusinessArea,
      ProfitCenter,
      CostingSheet,
      TaxJurisdiction,
      FunctionalArea,
      MaintControllingObjectClass,
      WrkCtrIntCapRqmtsDistr,
      MaintOrdOperationOverheadCode,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      _OperationPlanningValues.OperationQuantity                                 as MaintOrderOperationQuantity,
      _OperationPlanningValues.OperationQuantityUnit                             as MaintOrdOperationQuantityUnit,
      MaintOrdOpAssgdWBSElmntInt,
      IsMarkedForDeletion,
      PurchaseRequisitionItem,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.ForecastedWorkQty                                 as ForecastWorkQuantity,

      AllMaintOrdCompCmtdQtsAreKept,
      MaintOrderConfCntrValue,
      MaintOrdOpHasNoRemainingWork,
      MaintOrdOpHasLeanServices,
      TaskListType,
      _MaintenanceOrder.ControllingArea                                          as ControllingArea,
      MaintOrdOpDelivDateAdjustment,
      TaskListGroup,
      TaskListGroupCounter,

     /* Get Execution stage  Exact value*/
      _MaintOperationExecStageCode.MaintOpExecStageGroupCode,


      /* Associations */
      //I_MaintOrderOperPlanningValues
      _OperationPlanningValues._PlannedWorkUnitOfMeasure,
      _OperationPlanningValues._OperationQtyUnitOfMeasure,
      


      // For DCL:
      _PersonResponsible,
      _Order,
      _Equipment,
      _LocationAccountAssignment
}
```
