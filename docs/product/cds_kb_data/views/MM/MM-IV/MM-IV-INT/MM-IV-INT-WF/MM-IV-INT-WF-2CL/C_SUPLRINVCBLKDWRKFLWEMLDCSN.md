---
name: C_SUPLRINVCBLKDWRKFLWEMLDCSN
description: "Suplrinvcblkdwrkflwemldcsn"
app_component: MM-IV-INT-WF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# C_SUPLRINVCBLKDWRKFLWEMLDCSN

**Suplrinvcblkdwrkflwemldcsn**

| Property | Value |
|---|---|
| App Component | `MM-IV-INT-WF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `SupplierInvoice` |  | | `_SupplierInvoice` | `SupplierInvoice` |  |  |
| `SAPObjectNodeRepresentation` |  | | `_WorkflowTaskApplObject` | `SAPObjectNodeRepresentation` |  |  |
| `SuplrInvcWrkflwTaskDesc` |  | | `_TaskTitle` | `WorkflowTaskName` |  |  |
| `SuplrInvcWrkflwTaskType` |  | | `_Workflowtask` | `WorkflowTaskType` |  |  |
| `SuplrInvcWrkflwTskTypeDesc` |  | |  | `_Workflowtask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |  |  |
| `SuplrInvcWrkflwTaskStatus` |  | | `_Workflowtask` | `WorkflowTaskStatus` |  |  |
| `SuplrInvcWrkflwTskStatusDesc` |  | |  | `_Workflowtask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` |  |  |
| `WorkflowTaskCreatedByUser` |  | | `_Workflowtask` | `WorkflowTaskCreatedByUser` |  |  |
| `SuplrInvcWrkflwTskCrtnDateTime` |  | | `_Workflowtask` | `WrkflwTskCreationUTCDateTime` |  |  |
| `WorkflowTaskCurrentUser` |  | | `_Workflowtask` | `WorkflowTaskCurrentUser` |  |  |
| `FullName` |  | | `_User` | `UserDescription` |  |  |
| `ApprovedByUserFullName` |  | | `_ApproverUser` | `UserDescription` |  |  |
| `WorkflowTaskDefinition` |  | | `_Workflowtask` | `WorkflowTaskDefinition` |  |  |
| `WorkflowTaskDueUTCDateTime` |  | | `_Workflowtask._TaskDueDate` | `WorkflowTaskDueUTCDateTime` |  |  |
| `FiscalYear` |  | | `_SupplierInvoice` | `FiscalYear` |  |  |
| `CompanyCode` |  | | `_SupplierInvoice` | `CompanyCode` |  |  |
| `CompanyCodeName` |  | | `_CompanyCodeText` | `CompanyCodeName` |  |  |
| `InvoicingParty` |  | | `_SupplierInvoice` | `InvoicingParty` |  |  |
| `SupplierName` |  | | `_SupplierText` | `SupplierName` |  |  |
| `BPSupplierName` |  | | `_SupplierText` | `BPSupplierName` |  |  |
| `InvoiceGrossAmount` |  | | `_SupplierInvoice` | `InvoiceGrossAmount` |  |  |
| `DocumentCurrency` |  | | `_SupplierInvoice` | `DocumentCurrency` |  |  |
| `WorkflowTaskResultComment` |  | | `_WorkflowTaskResultComment` | `WorkflowTaskResultComment` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSIBWFEMLDCRSN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Approve or Reject Email for Blocked Invoice'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_SuplrInvcBlkdWrkflwEmlDcsn
  as select from           I_WorkflowTask               as _Workflowtask

    inner join             I_WorkflowTaskApplObject     as _WorkflowTaskApplObject    on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                      and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                      and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'SupplierInvoice'
                                                                                      and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer to one join I_SupplierInvoiceAPI01       as _SupplierInvoice           on  _SupplierInvoice.SupplierInvoice               = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
                                                                                      and _SupplierInvoice.FiscalYear                    = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey2
                                                                                      and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null
    left outer to one join I_User                       as _User                      on _User.UserID = _SupplierInvoice.CreatedByUser
    left outer to one join I_CompanyCode                as _CompanyCodeText           on _SupplierInvoice.CompanyCode = _CompanyCodeText.CompanyCode
    left outer to one join I_Supplier                   as _SupplierText              on _SupplierText.Supplier = _SupplierInvoice.InvoicingParty
    inner join             P_PurchasingLastWorkflowStep as _WorkitemData              on _WorkitemData.TopLevelWorkflowTask = _Workflowtask.TopLevelWorkflowTask
    inner join             I_WorkflowTask               as _WorkitemDet               on  _WorkitemDet.WrkflwTskCompletionUTCDateTime = _WorkitemData.MaxWrkflwTskCompDateTime
                                                                                      and _WorkitemDet.TopLevelWorkflowTask           = _WorkitemData.TopLevelWorkflowTask
                                                                                      and _WorkitemDet.WorkflowTaskType               = 'W'
                                                                                      and _WorkitemDet.WorkflowTaskStatus             = 'COMPLETED'
    left outer to one join I_User                       as _ApproverUser              on _ApproverUser.UserID = _WorkitemDet.WorkflowTaskCurrentUser
    left outer to one join I_WorkflowTaskResultComment  as _WorkflowTaskResultComment on _WorkflowTaskResultComment.WorkflowTaskInternalID = _WorkitemDet.WorkflowTaskInternalID
    left outer to one join I_EHSWorkflowTitle           as _TaskTitle                 on  _TaskTitle.Language               = $session.system_language
                                                                                      and _TaskTitle.WorkflowTaskInternalID = _Workflowtask.WorkflowTaskInternalID
{

  key  _Workflowtask.WorkflowTaskInternalID,

       _SupplierInvoice.SupplierInvoice,
       _WorkflowTaskApplObject.SAPObjectNodeRepresentation,

       _TaskTitle.WorkflowTaskName                                                                 as SuplrInvcWrkflwTaskDesc,

       _Workflowtask.WorkflowTaskType                                                              as SuplrInvcWrkflwTaskType,

       _Workflowtask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc     as SuplrInvcWrkflwTskTypeDesc,

       _Workflowtask.WorkflowTaskStatus                                                            as SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _Workflowtask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc as SuplrInvcWrkflwTskStatusDesc,

       _Workflowtask.WorkflowTaskCreatedByUser,

       _Workflowtask.WrkflwTskCreationUTCDateTime                                                  as SuplrInvcWrkflwTskCrtnDateTime,

       _Workflowtask.WorkflowTaskCurrentUser,

       _User.UserDescription                                                                       as FullName,

       _ApproverUser.UserDescription                                                               as ApprovedByUserFullName,

       _Workflowtask.WorkflowTaskDefinition,

       _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime,

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

       _SupplierInvoice.DocumentCurrency,

       _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

       _WorkflowTaskResultComment.WorkflowTaskResultComment
}
where
      _Workflowtask.WorkflowTaskType       = 'F'
  and _Workflowtask.WorkflowTaskDefinition = 'WS00800251'
```
