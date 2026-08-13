---
name: C_PRMTHBRPLDPURORDAPPRVLEML
description: "Prmthbrpldpurordapprvleml"
semantic_vi: "View Prmthbrpldpurordapprvleml hiển thị dữ liệu luồng phê duyệt đơn mua hàng, bao gồm ngày tạo và hạn chót của nhiệm vụ. Nó được sử dụng để theo dõi và quản lý các quy trình phê duyệt đơn mua hàng."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "workflow"
  - "approval"
  - "task"
  - "due date"
  - "ekko"
  - "sourcing & procurement"
  - "mm-pur-hub-po-2cl"
semantic_en: "The Prmthbrpldpurordapprvleml view exposes purchase order approval workflow data, including task creation and due dates. It is used to track and manage purchase order approval processes."
app_component: MM-PUR-HUB-PO-2CL
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
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURORDAPPRVLEML

**Prmthbrpldpurordapprvleml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
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
| `PurchaseOrder` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `PurchaseOrderType` |  | | `_PurchaseOrder` | `PurchaseOrderType` |  |  |
| `ExtSourceSystem` |  | | `_PurchaseOrder` | `ExtSourceSystem` |  |  |
| `PrmtHbWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PrmtHbWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PrmtHbWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PrmtHbWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPRHBRPLPOAPREML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'PrmtHb Rpld PO Details for Workflow Approval Email'

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

define view C_PrmtHbRpldPurOrdApprvlEml
  as select from            I_WorkflowTask            as _Workflowtask

    left outer to many join I_WorkflowTaskApplObject  as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                 and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                 and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseOrder'
                                                                                 and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_ProcmtHubPurOrdHdrAPI01 as _PurchaseOrder          on _PurchaseOrder.PurchaseOrder = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseOrder,

      _PurchaseOrder.PurchaseOrderType                                                                              as PurchaseOrderType,
      
      _PurchaseOrder.ExtSourceSystem                                                                                as ExtSourceSystem,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme,
      
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1: Language = $session.system_language].WorkflowTaskResultReasonText

}
```
