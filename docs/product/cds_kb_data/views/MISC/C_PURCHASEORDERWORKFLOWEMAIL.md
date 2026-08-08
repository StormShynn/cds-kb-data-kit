---
name: C_PURCHASEORDERWORKFLOWEMAIL
description: "Purchase Order Details for Workflow Deadline Email"
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
semantic_en: "Purchase Order Details for Workflow Deadline Email — Consumption CDS view based on I_WorkflowTask."
semantic_vi: "Purchase Order Details for Workflow Deadline Email — CDS view tiêu dùng dựa trên I_WorkflowTask."
keywords:
  - "purchase"
  - "order"
  - "details"
  - "for"
  - "workflow"
  - "deadline"
  - "email"
  - "workflowtask"
  - "amount"
  - "wrkflw"
  - "creation"
  - "time"
  - "task"
tags:
  - LO
  - component:LO
  - consumption-view
  - lob:logistics general
  - order
  - purchase-order
---
# C_PURCHASEORDERWORKFLOWEMAIL

**Purchase Order Details for Workflow Deadline Email**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `PurchaseOrder` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `PurchaseOrderType` |  | | `_PurchaseOrder` | `PurchaseOrderType` |  |  |
| `DocumentCurrency` |  | | `_PurchaseOrder` | `DocumentCurrency` |  |  |
| `PurchaseOrderNetAmount` |  | |  | `cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )` |  |  |
| `PurOrdWrkflwTskCreationUTCDate` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PurOrdWrkflwTskCreationUTCTime` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PurOrdWrkflwTaskDueUTCDate` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PurOrdWrkflwTaskDueUTCTime` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |
| `Supplier` |  | | `_PurchaseOrder` | `Supplier` |  |  |
| `CreatedByUser` |  | |  | `cast(_User.UserDescription as mm_oa_user_fullname )` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `POHeaderTextPlainLongText` |  | | `_PurchaseOrderPlainLongText` | `PlainLongText` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPURORDWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Order Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurchaseOrderWorkflowEmail
  as select from    I_WorkflowTask               as _Workflowtask

    inner join      I_WorkflowTaskApplObject     as _WorkflowTaskApplObject     on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseOrder'
                                                                                and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer join I_PurchaseOrderAPI01         as _PurchaseOrder              on _PurchaseOrder.PurchaseOrder = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer join I_PurchasingDocumentType     as _PurDocType                 on  _PurDocType.PurchasingDocumentType     = _PurchaseOrder.PurchaseOrderType
                                                                                and _PurDocType.PurchasingDocumentCategory = 'F'

    left outer join I_PurchaseOrderNetAmount     as _PurchaseOrderNetAmount     on _PurchaseOrderNetAmount.PurchaseOrder = _PurchaseOrder.PurchaseOrder

    left outer join I_User                       as _User                       on _User.UserID = _PurchaseOrder.CreatedByUser
    left outer join I_Supplier                   as _Supplier                   on _Supplier.Supplier = _PurchaseOrder.Supplier
    left outer join R_PurchaseOrderPlainLongText as _PurchaseOrderPlainLongText on  _PurchaseOrderPlainLongText.PurchaseOrder  = _PurchaseOrder.PurchaseOrder
                                                                                and _PurchaseOrderPlainLongText.Language       = _PurchaseOrder.Language
                                                                                and _PurchaseOrderPlainLongText.TextObjectType = 'F01'

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseOrder,
      //Purchase Order Type
      _PurchaseOrder.PurchaseOrderType,
      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,
      //_PurDocType._Text.PurchasingDocumentTypeName,


      //Purchase Order Amount
      @Semantics.currencyCode: true
      _PurchaseOrder.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )                        as PurchaseOrderNetAmount,

      //Creation Time
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PurOrdWrkflwTskCreationUTCDate,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PurOrdWrkflwTskCreationUTCTime,
      //Deadline Due Time
      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PurOrdWrkflwTaskDueUTCDate,
      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PurOrdWrkflwTaskDueUTCTime,

      //Supplier
      _PurchaseOrder.Supplier,

      //Created By User
      cast(_User.UserDescription as mm_oa_user_fullname )                                                           as CreatedByUser,

      //Supplier Name Based on Supplier Code
      _Supplier.SupplierName,

      //Purchase Order Header Text
      _PurchaseOrderPlainLongText.PlainLongText                                                                     as POHeaderTextPlainLongText

}
```
