---
name: C_CNTRLSUPLRCONFWRKFLWDDLNEML
description: "Cntrlsuplrconfwrkflwddlneml"
semantic_vi: "Chứa dữ liệu luồng công việc xác nhận nhà cung cấp cho tài liệu mua hàng trong thành phần MM-PUR-HUB-CSC-2CL. Sử dụng để theo dõi và quản lý luồng công việc xác nhận nhà cung cấp."
keywords:
  - "supplier confirmation"
  - "workflow"
  - "purchasing document"
  - "mm-pur-hub-csc-2cl"
  - "sourcing & procurement"
  - "lob"
  - "sourcing"
  - "procurement"
  - "đơn mua hàng"
  - "xác nhận nhà cung cấp"
  - "luồng công việc"
semantic_en: "Exposes supplier confirmation workflow data for purchasing documents in the MM-PUR-HUB-CSC-2CL component. Used to monitor and manage supplier confirmation workflows."
app_component: MM-PUR-HUB-CSC-2CL
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
  - component:MM-PUR-HUB-CSC-2CL
  - lob:Sourcing & Procurement
---
# C_CNTRLSUPLRCONFWRKFLWDDLNEML

**Cntrlsuplrconfwrkflwddlneml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
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
| `CentralSupplierConfirmation` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `PurchasingDocumentType` |  | | `_CntrlSupplierConfirmation` | `PurchasingDocumentType` |  |  |
| `ExtSourceSystem` |  | | `_CntrlSupplierConfirmation` | `ProcurementHubSourceSystem` |  |  |
| `PrmtHbWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PrmtHbWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PrmtHbWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PrmtHbWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CCSCWFLDLNEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Deadline Notif of Cntrl Confirmation'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view C_CntrlSuplrConfWrkflwDdlnEml
  as select from            I_WorkflowTask                as _Workflowtask
    left outer to many join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject    on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                        and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                        and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'CentralSupplierConfirmation'
                                                                                        and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  R_CntrlSupplierConfirmationTP as _CntrlSupplierConfirmation on _CntrlSupplierConfirmation.CentralSupplierConfirmation = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
{
  key _Workflowtask.WorkflowTaskInternalID,
      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as CentralSupplierConfirmation,
      _CntrlSupplierConfirmation.PurchasingDocumentType                                                             as PurchasingDocumentType,
      _CntrlSupplierConfirmation.ProcurementHubSourceSystem                                                         as ExtSourceSystem,
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,
      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_led ) as PrmtHbWrkflwTskDuUTCDte,
      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_let ) as PrmtHbWrkflwTskDuUTCTme
}
```
