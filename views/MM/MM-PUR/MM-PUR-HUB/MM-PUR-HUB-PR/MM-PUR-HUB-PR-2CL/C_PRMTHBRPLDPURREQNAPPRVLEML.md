---
name: C_PRMTHBRPLDPURREQNAPPRVLEML
description: Prmthbrpldpurreqnapprvleml
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURREQNAPPRVLEML

**Prmthbrpldpurreqnapprvleml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `ProcmtHubPurchaseRequisition` | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as banfn )` |
| `ProcmtHubPurRequisitionType` | `_PurchaseRequisition.ProcmtHubPurRequisitionType` |
| `ProcurementHubSourceSystem` | `_PurchaseRequisition.ProcurementHubSourceSystem` |
| `PrmtHbWrkflwTskCrtnUTCDte` | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |
| `PrmtHbWrkflwTskCrtnUTCTme` | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |
| `PrmtHbWrkflwTskDuUTCDte` | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |
| `PrmtHbWrkflwTskDuUTCTme` | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURREQNAPREML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Requisition Details for Workflow Approval Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.modelingPattern : #NONE
@Metadata.ignorePropagatedAnnotations:true

define view C_PrmtHbRpldPurReqnApprvlEml
  as select from            I_WorkflowTask                as _Workflowtask

    inner join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                     and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseRequisition'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_PrmtHbRpldPurchaseReqnAPI01 as _PurchaseRequisition    on _PurchaseRequisition.ProcmtHubPurchaseRequisition = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as banfn )                             as ProcmtHubPurchaseRequisition,

      _PurchaseRequisition.ProcmtHubPurRequisitionType                                                              as ProcmtHubPurRequisitionType,

      _PurchaseRequisition.ProcurementHubSourceSystem                                                               as ProcurementHubSourceSystem,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme,
      
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1: Language = $session.system_language].WorkflowTaskResultReason,
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1: Language = $session.system_language].WorkflowTaskResultReasonText

}
```
