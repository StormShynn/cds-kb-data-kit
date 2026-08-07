---
name: I_MAINTORDEROPERANDSUBOPER
description: Maintorderoperandsuboper
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
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPERANDSUBOPER

**Maintorderoperandsuboper**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  | `aufnr` |  |  |
| `MaintenanceOrderOperation` | ✓ | |  | `coalesce( afvc_superior.vornr, afvc.vornr )` |  |  |
| `MaintenanceOrderSubOperation` | ✓ | |  | `cast ( case when afvc.sumnr = '00000000' then ' ' else afvc.vornr end as maintenanceordersuboperation preserving type )` |  |  |
| `MaintOrderOperationForEdit` |  | |  | `cast( afvc.vornr as maintenanceorderoperation preserving type )` |  |  |
| `MaintOrderRoutingNumber` |  | |  | `aufpl` |  |  |
| `MaintOrderOperationCounter` |  | |  | `aplzl` |  |  |
| `SuperiorOperationInternalID` |  | |  | `sumnr` |  |  |
| `MaintOrderOperationInternalID` |  | |  | `objnr` |  |  |
| `OperationControlKey` |  | |  | `steus` |  |  |
| `OperationDescription` |  | |  | `ltxa1` |  |  |
| `OperationStandardTextCode` |  | |  | `ktsch` |  |  |
| `NumberOfTimeTickets` |  | |  | `loanz` |  |  |
| `OperationPersonResponsible` |  | |  | `pernr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `OperationWorkCenterInternalID` |  | |  | `arbid` |  |  |
| `OperationWorkCenterTypeCode` |  | |  | `'A'` |  |  |
| `NumberOfCapacities` |  | |  | `anzzl` |  |  |
| `MaintOrderConfirmation` |  | |  | `rueck` |  |  |
| `Equipment` |  | |  | `equnr` |  |  |
| `FunctionalLocation` |  | |  | `cast ( afvc.tplnr as vdm_eam_tplnr )` |  |  |
| `OperationPurgInfoRecdSearchTxt` |  | |  | `sortl` |  |  |
| `OperationRequisitionerName` |  | |  | `afnam` |  |  |
| `OperationGoodsRecipientName` |  | |  | `wempf` |  |  |
| `OperationQuantity` |  | |  | `bmsch` |  |  |
| `OperationQuantityUnit` |  | |  | `meinh` |  |  |
| `ActivityType` |  | |  | `larnt` |  |  |
| `OpExternalProcessingPrice` |  | |  | `preis` |  |  |
| `OpExternalProcessingPriceUnit` |  | |  | `peinh` |  |  |
| `OpExternalProcessingCurrency` |  | |  | `waers` |  |  |
| `OperationTrackingNumber` |  | |  | `bednr` |  |  |
| `OperationPurchasingInfoRecord` |  | |  | `infnr` |  |  |
| `OperationUnloadingPointName` |  | |  | `ablad` |  |  |
| `OpPurchaseOutlineAgreement` |  | |  | `cast (afvc.ebeln as konnr)` |  |  |
| `OpPurchaseOutlineAgreementItem` |  | |  | `cast (afvc.ebelp as ktpnr)` |  |  |
| `OperationSupplier` |  | |  | `lifnr` |  |  |
| `Assembly` |  | |  | `istru` |  |  |
| `OperationSystemCondition` |  | |  | `anlzu` |  |  |
| `CostCtrActivityType` |  | |  | `larnt` |  |  |
| `ReqgCostCenterControllingArea` |  | |  | `anfkokrs` |  |  |
| `OperationCalculationControl` |  | |  | `indet` |  |  |
| `OperationWorkPercent` |  | |  | `prznt` |  |  |
| `CapacityRequirement` |  | |  | `bedid` |  |  |
| `PurchaseRequisition` |  | |  | `banfn` |  |  |
| `PurchaseRequisitionItem` |  | |  | `bnfpo` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `CostElement` |  | |  | `sakto` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Language` |  | |  | `cast(afvc.txtsp as spras preserving type)` |  |  |
| `OperationHasLongText` |  | |  | `cast(case when afvc.txtsp = '' then '' else 'X' end as xfeld)` |  |  |
| `EAMPlannedDeliveryDurnInDays` |  | |  | `plifz` |  |  |
| `MaintOrderOperationDuration` |  | |  | `dauno` |  |  |
| `MaintOrdOperationDurationUnit` |  | |  | `daune` |  |  |
| `OpBscStartDateConstraintType` |  | |  | `einsa` |  |  |
| `OpBscEndDateConstraintType` |  | |  | `einse` |  |  |
| `MaintOrdOperationWorkDuration` |  | |  | `arbei` |  |  |
| `MaintOrdOpWorkDurationUnit` |  | |  | `arbeh` |  |  |
| `ConstraintDateForBscStartDate` |  | |  | `ntanf` |  |  |
| `ConstraintTimeForBscStartTime` |  | |  | `ntanz` |  |  |
| `ConstraintDateForBscFinishDate` |  | |  | `ntend` |  |  |
| `ConstraintTimeForBscFinishTime` |  | |  | `ntenz` |  |  |
| `MaintOrdOperationExecutionRate` |  | |  | `aufkt` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `MaintOrdOpAssgdWBSElmntInt` |  | |  | `cast( afvc.projn as ps_s4_pspnr preserving type )` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `CostingSheet` |  | |  | `kalsm` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `FunctionalArea` |  | |  | `func_area` |  |  |
| `FldLogsDelivHdrIsHeldOnShore` |  | |  | `fldlogsdelivisheldonshore` |  |  |
| `MaintOrdOpFrameWorkOrder` |  | |  | `fordn` |  |  |
| `MaintOrdOpFrameWorkOrderItem` |  | |  | `fordp` |  |  |
| `ExtProcgOperationHasSubcontrg` |  | |  | `frdlb` |  |  |
| `EmployeeWageType` |  | |  | `loart` |  |  |
| `EmployeeWageGroup` |  | |  | `logrp` |  |  |
| `EmployeeSuitability` |  | |  | `qualf` |  |  |
| `MaintControllingObjectClass` |  | |  | `cast( afvc.scope as ps_s4_scope_cv preserving type )` |  |  |
| `WrkCtrIntCapRqmtsDistr` |  | |  | `vertl` |  |  |
| `MaintOrdOperationOverheadCode` |  | |  | `zschl` |  |  |
| `MaintOrderOperationQuantity` |  | |  | `mgvrg` |  |  |
| `MaintOrdOperationQuantityUnit` |  | |  | `meinh` |  |  |
| `MaintOrdOperationIsMRPRelevant` |  | |  | `cast(case when afvc.no_disp = '' then '3' when afvc.no_disp = 'X' then '2' when afvc.no_disp = '1' then '1' else '1' end as audisp_plus )` |  |  |
| `MaintOperationExecStageCode` |  | |  | `cast( afvc.maintopexecutionphasecode as eam_premainpost_cds preserving type )` |  |  |
| `OperationMilestoneUsageCode` |  | |  | `mlstn` |  |  |
| `MaintOrderConfCntrValue` |  | |  | `rmzhl` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `IsMarkedForDeletion` |  | |  | `loekz` |  |  |
| `OpErlstSchedldExecStrtDte` |  | |  | `fsavd` |  |  |
| `OpErlstSchedldExecStrtTme` |  | |  | `fsavz` |  |  |
| `OpErlstSchedldExecEndDte` |  | |  | `fsedd` |  |  |
| `OpErlstSchedldExecEndTme` |  | |  | `fsedz` |  |  |
| `OpLtstSchedldExecStrtDte` |  | |  | `ssavd` |  |  |
| `OpLtstSchedldExecStrtTme` |  | |  | `ssavz` |  |  |
| `OpLtstSchedldExecEndDte` |  | |  | `ssedd` |  |  |
| `OpLtstSchedldExecEndTme` |  | |  | `ssedz` |  |  |
| `OpActualExecutionStartDate` |  | |  | `isdd` |  |  |
| `OpActualExecutionStartTime` |  | |  | `isdz` |  |  |
| `OpActualExecutionEndDate` |  | |  | `iedd` |  |  |
| `OpActualExecutionEndTime` |  | |  | `iedz` |  |  |
| `ActyConfFcstdEndDate` |  | |  | `pedd` |  |  |
| `ActyConfFcstdEndTime` |  | |  | `pedz` |  |  |
| `ForecastWorkQuantity` |  | |  | `ofmnw` |  |  |
| `ActualWorkQuantity` |  | |  | `ismnw` |  |  |
| `MaintOrdOpDelivDateAdjustment` |  | |  | `cast(afvc.sched_end as cc4_delvry_date_adj_oper preserving type)` |  |  |
| `MaintOrdOpProcessPhaseCode` |  | |  | `maintordopprocessphasecode` |  |  |
| `MaintOrdOpProcessSubPhaseCode` |  | |  | `maintordopprocesssubphasecode` |  |  |
| `AllMaintOrdCompCmtdQtsAreKept` |  | |  | `allmaintordcompcmtdqtsarekept` |  |  |
| `MaintOrdOpHasNoRemainingWork` |  | |  | `leknw` |  |  |
| `MaintOrdOpHasLeanServices` |  | |  | `maintordophasleanservices` |  |  |
| `TaskListType` |  | |  | `plnty` |  |  |
| `TaskListGroup` |  | |  | `plnnr` |  |  |
| `TaskListGroupCounter` |  | |  | `plnal` |  |  |
| `_MaintOrdOpAdditionalData` | | ✓ | | | | |
| `_OperationPlanningValues` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_OperationControlKey` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_StatusObjectActiveStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_MaintOrderProdnRsceTool` | | ✓ | | | | |
| `_MaintOrderComponent` | | ✓ | | | | |
| `_MaintOrderOperObjectListLink` | | ✓ | | | | |
| `_PersonResponsible` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaintOperationExecStageCode` | | ✓ | | | | |
| `_OpExternalProcessingCurrency` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_OperationSystemCondition` | | ✓ | | | | |
| `_OperationCalculationControl` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_OperationHasLongText` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_MaintenanceOrderConf` | | ✓ | | | | |
| `_CostCenterActivityTypeText` | | ✓ | | | | |
| `_PMContactEmployee` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_WorkAssignment` | | ✓ | | | | |
| `_EAMProcessPhase` | | ✓ | | | | |
| `_EAMProcessSubPhase` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurReqnOrResvnGeneration` | | ✓ | | | | |
| `_MaintOrdOpDeliveryDateAdjmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdOpAdditionalData` | `I_MaintOrdOpAdditionalData` | [1..1] |
| `_OperationPlanningValues` | `I_MaintOrderOperPlanningValues` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_OperationControlKey` | `I_OperationControlProfile` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrderBasic` | [0..1] |
| `_StatusObjectActiveStatus` | `I_StatusObjectActiveStatus` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_MaintOrderProdnRsceTool` | `I_OrderProdnResourceTool` | [0..*] |
| `_MaintOrderComponent` | `I_MaintenanceOrderComponent_2` | [0..*] |
| `_MaintOrderOperObjectListLink` | `I_MaintOrderOperObjectListLink` | [0..1] |
| `_PersonResponsible` | `I_WorkforcePerson` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_MaintOperationExecStageCode` | `I_MaintOperationExecStageCode` | [1..1] |
| `_OpExternalProcessingCurrency` | `I_Currency` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [0..1] |
| `_OperationSystemCondition` | `I_MaintOperationSystCondition` | [0..1] |
| `_OperationCalculationControl` | `I_OperationCalculationControl` | [0..1] |
| `_Assembly` | `I_Material` | [0..1] |
| `_OperationHasLongText` | `I_Indicator` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_MaintenanceOrderConf` | `I_MaintenanceOrderConfirmation` | [0..1] |
| `_CostCenterActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |
| `_PMContactEmployee` | `I_PMContactCardEmployee` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement_1` | [0..1] |
| `_WorkAssignment` | `I_WorkAssignment` | [0..1] |
| `_EAMProcessPhase` | `I_EAMProcessPhase` | [0..1] |
| `_EAMProcessSubPhase` | `I_EAMProcessSubPhase` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurReqnOrResvnGeneration` | `I_PurReqnOrResvnGeneration` | [0..1] |
| `_MaintOrdOpDeliveryDateAdjmt` | `I_MaintOrdOpDeliveryDateAdjmt` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMTORDOPSOPR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
//@EndUserText.label: 'Maintenance Order Operation and Suboperation'
@EndUserText.label: 'Maintenance Order Operation and SubOper'
@ObjectModel.representativeKey: 'MaintenanceOrderOperation'
@ObjectModel.semanticKey:  [ 'MaintenanceOrder', 'MaintenanceOrderOperation', 'MaintenanceOrderSubOperation' ]

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_MaintOrderOperAndSubOper
  as select from           afvc
    inner join             afko as afko          on  afvc.aufpl = afko.aufpl
                                                 and afko.plnaw = 'I'
    left outer to one join afvc as afvc_superior on  afvc.aufpl = afvc_superior.aufpl
                                                 and afvc.sumnr = afvc_superior.aplzl
    left outer to one join afvv as afvv          on  afvc.aufpl = afvv.aufpl
                                                 and afvc.aplzl = afvv.aplzl
    left outer to one join aufk as aufk          on aufk.aufnr = afko.aufnr //avoid to use, will be deleted

  association [1..1] to I_MaintOrdOpAdditionalData     as _MaintOrdOpAdditionalData     on  $projection.MaintOrderRoutingNumber    = _MaintOrdOpAdditionalData.MaintOrderRoutingNumber
                                                                                        and $projection.MaintOrderOperationCounter = _MaintOrdOpAdditionalData.MaintenanceOrderRoutingNode
  association [1..1] to I_MaintOrderOperPlanningValues as _OperationPlanningValues      on  $projection.MaintOrderRoutingNumber    = _OperationPlanningValues.MaintOrderRoutingNumber
                                                                                        and $projection.MaintOrderOperationCounter = _OperationPlanningValues.MaintOrderOperationCounter
  association [0..1] to I_WorkCenter                   as _WorkCenter                   on  _WorkCenter.WorkCenterInternalID = $projection.OperationWorkCenterInternalID
                                                                                        and _WorkCenter.WorkCenterTypeCode   = $projection.OperationWorkCenterTypeCode
  association [0..1] to I_Plant                        as _Plant                        on  _Plant.Plant = $projection.Plant
  association [0..1] to I_OperationControlProfile      as _OperationControlKey          on  _OperationControlKey.OperationControlProfile = $projection.OperationControlKey
  association [0..1] to I_MaintenanceOrderBasic        as _MaintenanceOrder             on  _MaintenanceOrder.MaintenanceOrder = $projection.MaintenanceOrder
  association [0..*] to I_StatusObjectActiveStatus     as _StatusObjectActiveStatus     on  _StatusObjectActiveStatus.StatusObject = $projection.MaintOrderOperationInternalID
  association [0..1] to I_Language                     as _Language                     on  $projection.Language = _Language.Language
  association [0..*] to I_OrderProdnResourceTool       as _MaintOrderProdnRsceTool      on  _MaintOrderProdnRsceTool.OrderInternalBillOfOperations = $projection.MaintOrderRoutingNumber
                                                                                        and _MaintOrderProdnRsceTool.OrderIntBillOfOperationsItem  = $projection.MaintOrderOperationCounter
  association [0..*] to I_MaintenanceOrderComponent_2  as _MaintOrderComponent          on  _MaintOrderComponent.MaintOrderRoutingNumber    = $projection.MaintOrderRoutingNumber
                                                                                        and _MaintOrderComponent.MaintOrderOperationCounter = $projection.MaintOrderOperationCounter
  association [0..1] to I_MaintOrderOperObjectListLink as _MaintOrderOperObjectListLink on  $projection.MaintOrderOperationCounter = _MaintOrderOperObjectListLink.MaintOrderOperationCounter
                                                                                        and $projection.MaintOrderRoutingNumber    = _MaintOrderOperObjectListLink.MaintOrderRoutingNumber
  association [0..1] to I_WorkforcePerson              as _PersonResponsible            on  $projection.OperationPersonResponsible = _PersonResponsible.PersonExternalID
  association [0..1] to I_Supplier                     as _Supplier                     on  $projection.OperationSupplier = _Supplier.Supplier

  association [1..1] to I_MaintOperationExecStageCode  as _MaintOperationExecStageCode  on  $projection.MaintOperationExecStageCode = _MaintOperationExecStageCode.MaintOperationExecStageCode
  association [0..1] to I_Currency                     as _OpExternalProcessingCurrency on  $projection.OpExternalProcessingCurrency = _OpExternalProcessingCurrency.Currency
  association [0..1] to I_StatusObject                 as _StatusObject                 on  $projection.MaintOrderOperationInternalID = _StatusObject.StatusObject
  association [0..1] to I_MaintOperationSystCondition  as _OperationSystemCondition     on  $projection.OperationSystemCondition = _OperationSystemCondition.OperationSystemCondition
  association [0..1] to I_OperationCalculationControl  as _OperationCalculationControl  on  $projection.OperationCalculationControl = _OperationCalculationControl.OperationCalculationControl
  association [0..1] to I_Material                     as _Assembly                     on  $projection.Assembly = _Assembly.Material
  association [0..1] to I_Indicator                    as _OperationHasLongText         on  $projection.OperationHasLongText = _OperationHasLongText.IndicatorValue
  association [0..1] to I_Equipment                    as _Equipment                    on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation           as _FunctionalLocation           on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_MaintenanceOrderConfirmation as _MaintenanceOrderConf         on  $projection.MaintOrderConfirmation  = _MaintenanceOrderConf.MaintOrderConf
                                                                                        and $projection.MaintOrderConfCntrValue = _MaintenanceOrderConf.MaintOrderConfCntrValue
  association [0..*] to I_CostCenterActivityTypeText   as _CostCenterActivityTypeText   on  $projection.ControllingArea     = _CostCenterActivityTypeText.ControllingArea
                                                                                        and $projection.CostCtrActivityType = _CostCenterActivityTypeText.CostCtrActivityType
  association [0..1] to I_PMContactCardEmployee        as _PMContactEmployee            on  $projection.OperationPersonResponsible = _PMContactEmployee.PersonnelNumber
  association [0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement          on  $projection.OperationPersonResponsible = _PersonWorkAgreement.PersonWorkAgreement
  association [0..1] to I_WorkAssignment               as _WorkAssignment               on  $projection.OperationPersonResponsible = _WorkAssignment.WorkAssignment
  association [0..1] to I_EAMProcessPhase              as _EAMProcessPhase              on  $projection.MaintOrdOpProcessPhaseCode = _EAMProcessPhase.EAMProcessPhaseCode
  association [0..1] to I_EAMProcessSubPhase           as _EAMProcessSubPhase           on  $projection.MaintOrdOpProcessSubPhaseCode = _EAMProcessSubPhase.EAMProcessSubPhaseCode
  association [1..1] to I_PurchasingOrganization       as _PurchasingOrganization       on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingGroup              as _PurchasingGroup              on  $projection.PurchasingGroup        = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurReqnOrResvnGeneration     as _PurReqnOrResvnGeneration     on  $projection.MaintOrdOperationIsMRPRelevant = _PurReqnOrResvnGeneration.PurReqnOrResvnGeneration
  association [0..1] to I_MaintOrdOpDeliveryDateAdjmt  as _MaintOrdOpDeliveryDateAdjmt  on  $projection.MaintOrdOpDelivDateAdjustment = _MaintOrdOpDeliveryDateAdjmt.MaintOrdOpDelivDateAdjustment
  //  association [0..*] to I_OrderOperationLongText       as _LongText                     on  $projection.MaintOrderRoutingNumber = _LongText.OrderInternalID
  //                                                                                        and $projection.MaintOrderOperationCounter = _LongText.OrderOperationInternalID

  //association [0..1] to I_StatusObjectDeletion         as _StatusObjectDeletion         on  $projection.MaintOrderOperationInternalID = _StatusObjectDeletion.StatusObject

{
  key afko.aufnr                                                                    as MaintenanceOrder,
      --key case when afvc_superior.vornr is not null then afvc_superior.vornr else afvc.vornr end                          as  MaintenanceOrderOperation,
  key coalesce( afvc_superior.vornr, afvc.vornr )                                   as MaintenanceOrderOperation,
   
  key cast (
                  case when afvc.sumnr = '00000000' then '    ' else afvc.vornr end
           as  maintenanceordersuboperation preserving type )                                               as MaintenanceOrderSubOperation,
                    
      cast( afvc.vornr as maintenanceorderoperation preserving type )               as MaintOrderOperationForEdit,
      afvc.aufpl                                                                    as MaintOrderRoutingNumber,
      afvc.aplzl                                                                    as MaintOrderOperationCounter,
      afvc.sumnr                                                                    as SuperiorOperationInternalID,
      afvc.objnr                                                                    as MaintOrderOperationInternalID,
      afvc.steus                                                                    as OperationControlKey,
      afvc.ltxa1                                                                    as OperationDescription,
      afvc.ktsch                                                                    as OperationStandardTextCode,

      afvc.loanz                                                                    as NumberOfTimeTickets,
      //      afvc.loart                                                                    as WageType,
      //      afvc.qualf                                                                    as Suitability,
      //      afvc.logrp                                                                    as WageGroup,

      @ObjectModel.foreignKey.association: '_PersonResponsible'
      afvc.pernr                                                                    as OperationPersonResponsible,
      @ObjectModel.foreignKey.association: '_Plant'
      afvc.werks                                                                    as Plant,
      afvc.arbid                                                                    as OperationWorkCenterInternalID,
      'A'                                                                           as OperationWorkCenterTypeCode,
      afvc.anzzl                                                                    as NumberOfCapacities,
      afvc.rueck                                                                    as MaintOrderConfirmation,

      afvc.equnr                                                                    as Equipment,
      cast ( afvc.tplnr as vdm_eam_tplnr )                                          as FunctionalLocation,

      afvc.sortl                                                                    as OperationPurgInfoRecdSearchTxt,
      afvc.afnam                                                                    as OperationRequisitionerName,
      afvc.wempf                                                                    as OperationGoodsRecipientName,

      @Semantics.quantity.unitOfMeasure: 'OperationQuantityUnit'
      afvv.bmsch                                                                    as OperationQuantity,
      @Semantics.unitOfMeasure: true
      afvv.meinh                                                                    as OperationQuantityUnit,

      afvc.larnt                                                                    as ActivityType,
      //      afvc.vertl                                                                    as DistrCapReqmts,

      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      @DefaultAggregation: #NONE
      afvc.preis                                                                    as OpExternalProcessingPrice,
      afvc.peinh                                                                    as OpExternalProcessingPriceUnit,
      @ObjectModel.foreignKey.association: '_OpExternalProcessingCurrency'
      @Semantics.currencyCode: true
      afvc.waers                                                                    as OpExternalProcessingCurrency,
      afvc.bednr                                                                    as OperationTrackingNumber,
      afvc.infnr                                                                    as OperationPurchasingInfoRecord,
      afvc.ablad                                                                    as OperationUnloadingPointName,
      cast (afvc.ebeln as konnr)                                                    as OpPurchaseOutlineAgreement,
      cast (afvc.ebelp as ktpnr)                                                    as OpPurchaseOutlineAgreementItem,
      @ObjectModel.foreignKey.association: '_Supplier'
      afvc.lifnr                                                                    as OperationSupplier,
      @ObjectModel.foreignKey.association: '_Assembly'
      afvc.istru                                                                    as Assembly,
      afvc.anlzu                                                                    as OperationSystemCondition,
      afvc.larnt                                                                    as CostCtrActivityType,
      afvc.anfkokrs                                                                 as ReqgCostCenterControllingArea,
      afvc.indet                                                                    as OperationCalculationControl,
      afvc.prznt                                                                    as OperationWorkPercent,
      afvc.bedid                                                                    as CapacityRequirement,
      afvc.banfn                                                                    as PurchaseRequisition,
      afvc.bnfpo                                                                    as PurchaseRequisitionItem,
      afvc.matkl                                                                    as MaterialGroup,
      afvc.sakto                                                                    as CostElement,
      afvc.ekorg                                                                    as PurchasingOrganization,
      afvc.ekgrp                                                                    as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_Language'
      cast(afvc.txtsp as spras preserving type)                                     as Language,
      cast(case when afvc.txtsp = '' then '' else 'X' end as xfeld)                 as OperationHasLongText,

      //      afvc.fordn                                                                    as FrameworkOrder,
      //      afvc.fordp                                                                    as ItemoOfFrameworkOrder,
      afvv.plifz                                                                    as EAMPlannedDeliveryDurnInDays,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      afvv.dauno                                                                    as MaintOrderOperationDuration,
      @Semantics.unitOfMeasure: true
      afvv.daune                                                                    as MaintOrdOperationDurationUnit,
      afvv.einsa                                                                    as OpBscStartDateConstraintType,
      afvv.einse                                                                    as OpBscEndDateConstraintType,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      afvv.arbei                                                                    as MaintOrdOperationWorkDuration,
      @Semantics.unitOfMeasure: true
      afvv.arbeh                                                                    as MaintOrdOpWorkDurationUnit,
      afvv.ntanf                                                                    as ConstraintDateForBscStartDate,
      afvv.ntanz                                                                    as ConstraintTimeForBscStartTime,
      afvv.ntend                                                                    as ConstraintDateForBscFinishDate,
      afvv.ntenz                                                                    as ConstraintTimeForBscFinishTime,
      afvv.aufkt                                                                    as MaintOrdOperationExecutionRate,

      //      afvc.frdlb                                                                    as ExtProcOperationSubcontracting,
      afvc.gsber                                                                    as BusinessArea,
      cast( afvc.projn as ps_s4_pspnr preserving type )                             as MaintOrdOpAssgdWBSElmntInt,
      afvc.prctr                                                                    as ProfitCenter,
      afvc.kalsm                                                                    as CostingSheet,
      //      afvc.zschl                                                                    as Overheadkey,
      afvc.txjcd                                                                    as TaxJurisdiction,
      //      afvc.scope                                                                    as ObjectClass,
      afvc.func_area                                                                as FunctionalArea,
      //      @Semantics.quantity.unitOfMeasure: 'UnitForOffsetToStart'
      //      afvv.offstb                                                                   as OffsetToSubOperationStart,
      //      @Semantics.unitOfMeasure: true
      //      afvv.ehoffb                                                                   as UnitForOffsetToStart,
      //      @Semantics.quantity.unitOfMeasure: 'UnitForOffsetToFinish'
      //      afvv.offste                                                                   as OffsetToSubOperationFinish,
      //      @Semantics.unitOfMeasure: true
      //      afvv.ehoffe                                                                   as UnitForOffsetToFinish,

      afvc.fldlogsdelivisheldonshore                                                as FldLogsDelivHdrIsHeldOnShore,
      afvc.fordn                                                                    as MaintOrdOpFrameWorkOrder,
      afvc.fordp                                                                    as MaintOrdOpFrameWorkOrderItem,
      afvc.frdlb                                                                    as ExtProcgOperationHasSubcontrg,
      afvc.loart                                                                    as EmployeeWageType,
      afvc.logrp                                                                    as EmployeeWageGroup,
      afvc.qualf                                                                    as EmployeeSuitability,
      cast( afvc.scope as ps_s4_scope_cv preserving type )                          as MaintControllingObjectClass,
      afvc.vertl                                                                    as WrkCtrIntCapRqmtsDistr,
      afvc.zschl                                                                    as MaintOrdOperationOverheadCode,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      afvv.mgvrg                                                                    as MaintOrderOperationQuantity,
      @Semantics.unitOfMeasure: true
      afvv.meinh                                                                    as MaintOrdOperationQuantityUnit,

      cast(case when afvc.no_disp = ''   then '3'
                when afvc.no_disp = 'X'  then '2'
                when afvc.no_disp = '1'  then '1'
                else '1'
      end as audisp_plus  )                                                         as MaintOrdOperationIsMRPRelevant,

      @ObjectModel.foreignKey.association: '_MaintOperationExecStageCode'
      cast( afvc.maintopexecutionphasecode as eam_premainpost_cds preserving type ) as MaintOperationExecStageCode,
      afvc.mlstn                                                                    as OperationMilestoneUsageCode,
      afvc.rmzhl                                                                    as MaintOrderConfCntrValue,
      aufk.kokrs                                                                    as ControllingArea, //avoid to use, will be deleted
      afvc.loekz                                                                    as IsMarkedForDeletion, //DeletionIndicator,
      //_StatusObjectDeletion.DeletionFlag                                            as IsMarkedForDeletion,

      afvv.fsavd                                                                    as OpErlstSchedldExecStrtDte,
      afvv.fsavz                                                                    as OpErlstSchedldExecStrtTme,
      afvv.fsedd                                                                    as OpErlstSchedldExecEndDte,
      afvv.fsedz                                                                    as OpErlstSchedldExecEndTme,

      afvv.ssavd                                                                    as OpLtstSchedldExecStrtDte,
      afvv.ssavz                                                                    as OpLtstSchedldExecStrtTme,
      afvv.ssedd                                                                    as OpLtstSchedldExecEndDte,
      afvv.ssedz                                                                    as OpLtstSchedldExecEndTme,

      afvv.isdd                                                                     as OpActualExecutionStartDate,
      afvv.isdz                                                                     as OpActualExecutionStartTime,
      afvv.iedd                                                                     as OpActualExecutionEndDate,
      afvv.iedz                                                                     as OpActualExecutionEndTime,
      
      afvv.pedd                                                                     as ActyConfFcstdEndDate,
      afvv.pedz                                                                     as ActyConfFcstdEndTime,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      afvv.ofmnw                                                                    as ForecastWorkQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      afvv.ismnw                                                                    as ActualWorkQuantity,

      cast(afvc.sched_end as cc4_delvry_date_adj_oper preserving type)              as MaintOrdOpDelivDateAdjustment,

      @ObjectModel.foreignKey.association: '_EAMProcessPhase'
      afvc.maintordopprocessphasecode                                               as MaintOrdOpProcessPhaseCode,
      @ObjectModel.foreignKey.association: '_EAMProcessSubPhase'
      afvc.maintordopprocesssubphasecode                                            as MaintOrdOpProcessSubPhaseCode,

      @UI.hidden: true
      afvc.allmaintordcompcmtdqtsarekept                                            as AllMaintOrdCompCmtdQtsAreKept,
      afvc.leknw                                                                    as MaintOrdOpHasNoRemainingWork,
      afvc.maintordophasleanservices                                                as MaintOrdOpHasLeanServices,
      afvc.plnty                                                                    as TaskListType,
      afvc.plnnr                                                                    as TaskListGroup,
      afvc.plnal                                                                    as TaskListGroupCounter,

      _MaintOrdOpAdditionalData,
      _OperationPlanningValues,
      _MaintenanceOrder,
      _OperationControlKey,
      _Plant,
      _WorkCenter,
      _StatusObjectActiveStatus,
      _Language,
      _PersonResponsible,
      _Supplier,
      _MaintOrderComponent,
      _MaintOrderOperObjectListLink,
      _MaintOrderProdnRsceTool,
      _MaintOperationExecStageCode,
      _OpExternalProcessingCurrency,
      _StatusObject,
      _OperationSystemCondition,
      _OperationCalculationControl,
      _Assembly,
      _OperationHasLongText,
      _Equipment,
      _FunctionalLocation,
      _MaintenanceOrderConf,
      _CostCenterActivityTypeText,
      _PMContactEmployee,
      _PersonWorkAgreement,
      _WorkAssignment,
      _EAMProcessPhase,
      _EAMProcessSubPhase,
      _PurchasingOrganization,
      _PurchasingGroup,
      _PurReqnOrResvnGeneration,
      _MaintOrdOpDeliveryDateAdjmt
      //      _LongText
      //_StatusObjectDeletion
}
//where
//  aufk.autyp = '30'
```
