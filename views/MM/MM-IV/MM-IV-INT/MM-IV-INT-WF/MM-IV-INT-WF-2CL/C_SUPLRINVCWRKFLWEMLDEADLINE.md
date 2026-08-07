---
name: C_SUPLRINVCWRKFLWEMLDEADLINE
description: Suplrinvcwrkflwemldeadline
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowDeadline` | `WorkflowTaskInternalID` |
| `SAPObjectNodeRepresentation` |  | | `_WorkflowDeadline` | `SAPObjectNodeRepresentation` |
| `SuplrInvcWrkflwTaskDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskDesc` |
| `SuplrInvcWrkflwTaskType` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskType` |
| `SuplrInvcWrkflwTskTypeDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskTypeDesc` |
| `SuplrInvcWrkflwTaskStatus` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTaskStatus` |
| `SuplrInvcWrkflwTskStatusDesc` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskStatusDesc` |
| `WorkflowTaskCreatedByUser` |  | | `_WorkflowDeadline` | `WorkflowTaskCreatedByUser` |
| `SuplrInvcWrkflwTskCrtnDateTime` |  | | `_WorkflowDeadline` | `SuplrInvcWrkflwTskCrtnDateTime` |
| `WorkflowTaskCurrentUser` |  | | `_WorkflowDeadline` | `WorkflowTaskCurrentUser` |
| `FullName` |  | | `_WorkflowDeadline` | `FullName` |
| `WorkflowTaskDefinition` |  | | `_WorkflowDeadline` | `WorkflowTaskDefinition` |
| `WorkflowTaskDueUTCDateTime` |  | | `_WorkflowDeadline` | `WorkflowTaskDueUTCDateTime` |
| `SupplierInvoice` |  | | `_WorkflowDeadline` | `SupplierInvoice` |
| `FiscalYear` |  | | `_WorkflowDeadline` | `FiscalYear` |
| `CompanyCode` |  | | `_WorkflowDeadline` | `CompanyCode` |
| `CompanyCodeName` |  | | `_WorkflowDeadline` | `CompanyCodeName` |
| `InvoicingParty` |  | | `_WorkflowDeadline` | `InvoicingParty` |
| `SupplierName` |  | | `_WorkflowDeadline` | `SupplierName` |
| `BPSupplierName` |  | | `_WorkflowDeadline` | `BPSupplierName` |
| `InvoiceGrossAmount` |  | | `_WorkflowDeadline` | `InvoiceGrossAmount` |
| `DocumentCurrency` |  | | `_WorkflowDeadline` | `DocumentCurrency` |
| `WorkflowTaskURL` |  | |  |  |

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
