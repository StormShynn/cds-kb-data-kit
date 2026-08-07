---
name: I_SUPLRINVCWRKFLWEMLDEADLINE
description: "Suplrinvcwrkflwemldeadline"
app_component: MM-IV-INT-WF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-INT
  - interface-view
  - workflow
  - component:MM-IV-INT-WF-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCWRKFLWEMLDEADLINE

**Suplrinvcwrkflwemldeadline**

| Property | Value |
|---|---|
| App Component | `MM-IV-INT-WF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` |  |  |
| `SAPObjectNodeRepresentation` |  | | `_WorkflowTaskApplObject` | `SAPObjectNodeRepresentation` |  |  |
| `SuplrInvcWrkflwTaskDesc` |  | |  | `_WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName` |  |  |
| `SuplrInvcWrkflwTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` |  |  |
| `SuplrInvcWrkflwTskTypeDesc` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |  |  |
| `SuplrInvcWrkflwTaskStatus` |  | | `_WorkflowTask` | `WorkflowTaskStatus` |  |  |
| `SuplrInvcWrkflwTskStatusDesc` |  | |  | `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` |  |  |
| `WorkflowTaskCreatedByUser` |  | | `_WorkflowTask` | `WorkflowTaskCreatedByUser` |  |  |
| `SuplrInvcWrkflwTskCrtnDateTime` |  | | `_WorkflowTask` | `WrkflwTskCreationUTCDateTime` |  |  |
| `WorkflowTaskCurrentUser` |  | | `_WorkflowTask` | `WorkflowTaskCurrentUser` |  |  |
| `FullName` |  | | `_User` | `UserDescription` |  |  |
| `WorkflowTaskDefinition` |  | | `_WorkflowTask` | `WorkflowTaskDefinition` |  |  |
| `WorkflowTaskDueUTCDateTime` |  | | `_WorkflowTask._TaskDueDate` | `WorkflowTaskDueUTCDateTime` |  |  |
| `SupplierInvoice` |  | | `_SupplierInvoice` | `SupplierInvoice` |  |  |
| `FiscalYear` |  | | `_SupplierInvoice` | `FiscalYear` |  |  |
| `CompanyCode` |  | | `_SupplierInvoice` | `CompanyCode` |  |  |
| `CompanyCodeName` |  | | `_CompanyCodeText` | `CompanyCodeName` |  |  |
| `InvoicingParty` |  | | `_SupplierInvoice` | `InvoicingParty` |  |  |
| `SupplierName` |  | | `_SupplierText` | `SupplierName` |  |  |
| `BPSupplierName` |  | | `_SupplierText` | `BPSupplierName` |  |  |
| `InvoiceGrossAmount` |  | | `_SupplierInvoice` | `InvoiceGrossAmount` |  |  |
| `DocumentCurrency` |  | | `_SupplierInvoice` | `DocumentCurrency` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISIWFEMLDL'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #COMPOSITE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
// This would be sematically correct, cannot change due to compatibility: @ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER

@EndUserText.label: 'Supplier Invoice Details for Workflow Deadline Email'
define view I_SuplrInvcWrkflwEmlDeadLine
  as select from           I_WorkflowTask             as _WorkflowTask
    inner join             I_WorkflowTaskApplObject   as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                                 and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                 and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'SupplierInvoice'
                                                                                 and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer to one join I_User                     as _User                   on _WorkflowTask.WorkflowTaskCurrentUser = _User.UserID
    left outer to one join I_SupplierInvoiceAPI01     as _SupplierInvoice        on  _SupplierInvoice.SupplierInvoice               = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
                                                                                 and _SupplierInvoice.FiscalYear                    = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey2
                                                                                 and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null
    left outer to one join I_CompanyCode              as _CompanyCodeText        on _SupplierInvoice.CompanyCode = _CompanyCodeText.CompanyCode
    left outer to one join I_Supplier                 as _SupplierText           on _SupplierText.Supplier = _SupplierInvoice.InvoicingParty
{

  key  _WorkflowTask.WorkflowTaskInternalID                                                        as WorkflowTaskInternalID,

       _WorkflowTaskApplObject.SAPObjectNodeRepresentation,

       _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName              as SuplrInvcWrkflwTaskDesc,

       _WorkflowTask.WorkflowTaskType                                                              as SuplrInvcWrkflwTaskType,

       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc     as SuplrInvcWrkflwTskTypeDesc,

       _WorkflowTask.WorkflowTaskStatus                                                            as SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc as SuplrInvcWrkflwTskStatusDesc,

       _WorkflowTask.WorkflowTaskCreatedByUser,

       _WorkflowTask.WrkflwTskCreationUTCDateTime                                                  as SuplrInvcWrkflwTskCrtnDateTime,

       _WorkflowTask.WorkflowTaskCurrentUser,

       _User.UserDescription                                                                       as FullName,

       _WorkflowTask.WorkflowTaskDefinition,

       _WorkflowTask._TaskDueDate.WorkflowTaskDueUTCDateTime,

       _SupplierInvoice.SupplierInvoice,

       _SupplierInvoice.FiscalYear,

       _SupplierInvoice.CompanyCode,

       _CompanyCodeText.CompanyCodeName,

       _SupplierInvoice.InvoicingParty,

       @API.element.releaseState: #DEPRECATED
       @API.element.successor: 'BPSupplierName'
       _SupplierText.SupplierName,
       
       _SupplierText.BPSupplierName,

       @Semantics.amount.currencyCode: 'DocumentCurrency'
       _SupplierInvoice.InvoiceGrossAmount,

       _SupplierInvoice.DocumentCurrency

}
where
  _WorkflowTask.WorkflowTaskType = 'W'
```
