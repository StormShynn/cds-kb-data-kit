---
name: C_PRMTHBRPLDPURREQNWRKFLWEML
description: "Prmthbrpldpurreqnwrkflweml"
semantic_vi: "Chứa dữ liệu công việc luồng cho yêu cầu mua hàng trung tâm cung cấp, được sử dụng để theo dõi và quản lý các công việc luồng liên quan đến yêu cầu mua hàng trung tâm cung cấp."
keywords:
  - "workflow"
  - "procurement"
  - "purchase requisition"
  - "công việc luồng"
  - "yêu cầu mua hàng"
  - "trung tâm cung cấp"
  - "sourcing"
  - "procurement hub"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
semantic_en: "Exposes workflow task data for procurement hub purchase requisitions, used to track and manage workflow tasks related to procurement hub purchase requisitions."
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - workflow
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURREQNWRKFLWEML

**Prmthbrpldpurreqnwrkflweml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `ProcmtHubPurchaseRequisition` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as banfn )` |  |  |
| `ProcmtHubPurRequisitionType` |  | | `_PurchaseRequisition` | `ProcmtHubPurRequisitionType` |  |  |
| `ProcurementHubSourceSystem` |  | | `_PurchaseRequisition` | `ProcurementHubSourceSystem` |  |  |
| `PrmtHbWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PrmtHbWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PrmtHbWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PrmtHbWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURREQNWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Requisition Details for Workflow Deadline Email'

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

define view C_PrmtHbRpldPurReqnWrkflwEml
  as select from            I_WorkflowTask               as _Workflowtask

    inner join I_WorkflowTaskApplObject     as _WorkflowTaskApplObject  on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                     and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseRequisition'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_PrmtHbRpldPurchaseReqnAPI01 as _PurchaseRequisition on _PurchaseRequisition.ProcmtHubPurchaseRequisition = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as banfn )                             as ProcmtHubPurchaseRequisition,

      _PurchaseRequisition.ProcmtHubPurRequisitionType                                                              as ProcmtHubPurRequisitionType,

      _PurchaseRequisition.ProcurementHubSourceSystem                                                               as ProcurementHubSourceSystem,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme

}
```
