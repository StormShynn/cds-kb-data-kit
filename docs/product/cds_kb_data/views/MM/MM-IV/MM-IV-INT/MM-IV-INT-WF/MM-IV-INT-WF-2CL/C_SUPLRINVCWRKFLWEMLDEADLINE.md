---
name: C_SUPLRINVCWRKFLWEMLDEADLINE
description: "Suplrinvcwrkflwemldeadline"
semantic_vi: "View này hiển thị dữ liệu công việc luồng cho luồng hóa đơn nhà cung cấp, bao gồm mô tả công việc, trạng thái và thông tin tạo ra. Nó được sử dụng để theo dõi và quản lý các nhiệm vụ trong quá trình luồng hóa đơn nhà cung cấp."
keywords:
  - "supplier invoice workflow"
  - "luồng hóa đơn nhà cung cấp"
  - "workflow task"
  - "công việc luồng"
  - "task description"
  - "mô tả công việc"
  - "task status"
  - "trạng thái công việc"
  - "workflow process"
  - "quá trình luồng"
  - "sap mm iv"
  - "mm iv"
semantic_en: "This view exposes workflow task data for supplier invoice workflow, including task descriptions, statuses, and creation information. It is used to track and manage tasks within the supplier invoice workflow process."
app_component: MM-IV-INT-WF-2CL
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
  - MM-IV
  - MM-IV-INT
  - consumption-view
  - workflow
  - component:MM-IV-INT-WF-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRINVCWRKFLWEMLDEADLINE

**Suplrinvcwrkflwemldeadline**

| Property | Value |
|---|---|
| App Component | `MM-IV-INT-WF-2CL` |
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
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowDeadline` | `WorkflowTaskInternalID` |  |  |
| `SAPObjectNodeRepresentation` |  | | `_WorkflowDeadline` | `SAPObjectNodeRepresentation` |  |  |
| `SuplrInvcWrkflwTaskDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskDesc` |  |  |
| `SuplrInvcWrkflwTaskType` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskType` |  |  |
| `SuplrInvcWrkflwTskTypeDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskTypeDesc` |  |  |
| `SuplrInvcWrkflwTaskStatus` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskStatus` |  |  |
| `SuplrInvcWrkflwTskStatusDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskStatusDesc` |  |  |
| `WorkflowTaskCreatedByUser` |  | | `_WorkflowDeadline` | `WorkflowTaskCreatedByUser` |  |  |
| `SuplrInvcWrkflwTskCrtnDateTime` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskCrtnDateTime` |  |  |
| `WorkflowTaskCurrentUser` |  | | `_WorkflowDeadline` | `WorkflowTaskCurrentUser` |  |  |
| `FullName` |  | | `_WorkflowDeadline` | `FullName` |  |  |
| `WorkflowTaskDefinition` |  | | `_WorkflowDeadline` | `WorkflowTaskDefinition` |  |  |
| `WorkflowTaskDueUTCDateTime` |  | | `_WorkflowDeadline` | `WorkflowTaskDueUTCDateTime` |  |  |
| `SupplierInvoice` |  | | `_WorkflowDeadline` | `SupplierInvoice` |  |  |
| `FiscalYear` |  | | `_WorkflowDeadline` | `FiscalYear` |  |  |
| `CompanyCode` |  | | `_WorkflowDeadline` | `CompanyCode` |  |  |
| `CompanyCodeName` |  | | `_WorkflowDeadline` | `CompanyCodeName` |  |  |
| `InvoicingParty` |  | | `_WorkflowDeadline` | `InvoicingParty` |  |  |
| `SupplierName` |  | | `_WorkflowDeadline` | `SupplierName` |  |  |
| `BPSupplierName` |  | | `_WorkflowDeadline` | `BPSupplierName` |  |  |
| `InvoiceGrossAmount` |  | | `_WorkflowDeadline` | `InvoiceGrossAmount` |  |  |
| `DocumentCurrency` |  | | `_WorkflowDeadline` | `DocumentCurrency` |  |  |
| `WorkflowTaskURL` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSINVWFEMLURLDL'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType : #CONSUMPTION
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
// This would be sematically correct, cannot change due to compatibility: @ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER

@EndUserText.label: 'Supplier Invoice Details for WF Deadline Email'
define view C_SuplrInvcWrkflwEmlDeadLine
  as select from           I_SuplrInvcWrkflwEmlDeadLine as _WorkflowDeadline
    left outer to one join I_WorkflowTaskURL as WorkflowTaskURL on _WorkflowDeadline.WorkflowTaskInternalID = WorkflowTaskURL.WorkflowTaskInternalID
{
  key  _WorkflowDeadline.WorkflowTaskInternalID,

       _WorkflowDeadline.SAPObjectNodeRepresentation,

       _WorkflowDeadline.SuplrInvcWrkflwTaskDesc,

       _WorkflowDeadline.SuplrInvcWrkflwTaskType,

       _WorkflowDeadline.SuplrInvcWrkflwTskTypeDesc,

       _WorkflowDeadline.SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _WorkflowDeadline.SuplrInvcWrkflwTskStatusDesc,

       _WorkflowDeadline.WorkflowTaskCreatedByUser,

       _WorkflowDeadline.SuplrInvcWrkflwTskCrtnDateTime,

       _WorkflowDeadline.WorkflowTaskCurrentUser,

       _WorkflowDeadline.FullName,

       _WorkflowDeadline.WorkflowTaskDefinition,

       _WorkflowDeadline.WorkflowTaskDueUTCDateTime,

       _WorkflowDeadline.SupplierInvoice,

       _WorkflowDeadline.FiscalYear,

       _WorkflowDeadline.CompanyCode,

       _WorkflowDeadline.CompanyCodeName,

       _WorkflowDeadline.InvoicingParty,

       @API.element.releaseState: #DEPRECATED
       @API.element.successor: 'BPSupplierName'
       _WorkflowDeadline.SupplierName,
       
       _WorkflowDeadline.BPSupplierName,

       @Semantics.amount.currencyCode: 'DocumentCurrency'
       _WorkflowDeadline.InvoiceGrossAmount,

       _WorkflowDeadline.DocumentCurrency,

       WorkflowTaskURL.WorkflowTaskURL

}
where
       _WorkflowDeadline.SuplrInvcWrkflwTaskType = 'W'
```
