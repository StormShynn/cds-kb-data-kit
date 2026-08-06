---
name: C_PURORDWORKFLOWAPPROVALEMAIL
description: Purordworkflowapprovalemail
app_component: MM-PUR-PO-WFL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - consumption-view
  - workflow
  - email
  - approval
  - component:MM-PUR-PO-WFL-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDWORKFLOWAPPROVALEMAIL

**Purordworkflowapprovalemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-WFL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `PurchaseOrder` | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |
| `PurchaseOrderType` | `_PurchaseOrder.PurchaseOrderType` |
| `DocumentCurrency` | `_PurchaseOrder.DocumentCurrency` |
| `PurchaseOrderNetAmount` | `cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount preserving type )` |
| `WorkflowTaskResult` | `case _WorkitemDet.WorkflowTaskType when 'W' then case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult when 'requestApproved' then 'Approved' when 'requestRejected' then 'Rejected' else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end when 'B' then 'Automatically Approved' else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end` |
| `PurOrdWrkflwTskCreationUTCDate` | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |
| `PurOrdWrkflwTskCreationUTCTime` | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |
| `PurOrdWrkflwTaskEndUTCDate` | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |
| `PurOrdWrkflwTaskEndUTCTime` | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |
| `Supplier` | `_PurchaseOrder.Supplier` |
| `CreatedByUserName` | `cast(_User.UserDescription as mm_oa_user_fullname )` |
| `SupplierName` | `_Supplier.SupplierName` |
| `POHeaderTextPlainLongText` | `_PurchaseOrderPlainLongText.PlainLongText` |
| `POHeaderNotePlainLongText` | `_PurchaseOrderNoteLongText.PlainLongText` |
| `ApprovedByUserFullName` | `case _WorkitemDet.WorkflowTaskType when 'B' then 'Automatically Approved' else cast(_ApproverUser.UserDescription as mm_oa_user_fullname ) end` |
| `WorkflowTaskResultComment` | `_WorkflowTaskResultComment.WorkflowTaskResultComment` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPURPOWFLAPPR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Order Details for Workflow Approval Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurOrdWorkflowApprovalEmail
  as select from           I_WorkflowTask               as _Workflowtask

    inner join             I_WorkflowTaskApplObject     as _WorkflowTaskApplObject     on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                       and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                       and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseOrder'
                                                                                       and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join I_PurchaseOrderAPI01         as _PurchaseOrder              on _PurchaseOrder.PurchaseOrder = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer to one join I_PurchasingDocumentType     as _PurDocType                 on  _PurDocType.PurchasingDocumentType     = _PurchaseOrder.PurchaseOrderType
                                                                                       and _PurDocType.PurchasingDocumentCategory = 'F'

    left outer to one join I_PurchaseOrderNetAmount     as _PurchaseOrderNetAmount     on _PurchaseOrderNetAmount.PurchaseOrder = _PurchaseOrder.PurchaseOrder

    left outer to one join I_User                       as _User                       on _User.UserID = _PurchaseOrder.CreatedByUser
    left outer to one join I_Supplier                   as _Supplier                   on _Supplier.Supplier = _PurchaseOrder.Supplier
    left outer to one join R_PurchaseOrderPlainLongText as _PurchaseOrderPlainLongText on  _PurchaseOrderPlainLongText.PurchaseOrder  = _PurchaseOrder.PurchaseOrder
                                                                                       and _PurchaseOrderPlainLongText.Language       = _PurchaseOrder.Language
                                                                                       and _PurchaseOrderPlainLongText.TextObjectType = 'F01'

    left outer to one join R_PurchaseOrderPlainLongText as _PurchaseOrderNoteLongText  on  _PurchaseOrderNoteLongText.PurchaseOrder  = _PurchaseOrder.PurchaseOrder
                                                                                       and _PurchaseOrderNoteLongText.Language       = _PurchaseOrder.Language
                                                                                       and _PurchaseOrderNoteLongText.TextObjectType = 'F02'
    inner join             P_PurchasingLastWorkflowStep as _WorkitemData               on _WorkitemData.TopLevelWorkflowTask = _Workflowtask.TopLevelWorkflowTask
    inner join             I_WorkflowTask               as _WorkitemDet                on  _WorkitemDet.WrkflwTskCompletionUTCDateTime = _WorkitemData.MaxWrkflwTskCompDateTime
                                                                                       and _WorkitemDet.TopLevelWorkflowTask           = _WorkitemData.TopLevelWorkflowTask
                                                                                       and (
                                                                                          _WorkitemDet.WorkflowTaskType                = 'W'
                                                                                          or _WorkitemDet.WorkflowTaskType             = 'B'
                                                                                        )
    left outer to one join I_User                       as _ApproverUser               on _ApproverUser.UserID = _WorkitemDet.WorkflowTaskCurrentUser
    left outer to one join I_WorkflowTaskResultComment  as _WorkflowTaskResultComment  on _WorkflowTaskResultComment.WorkflowTaskInternalID = _WorkitemDet.WorkflowTaskInternalID
    
   // left outer to one join SWFC_00800238(wf_id : WorkflowTaskInternalID)  as _WorkflowContainer on _WorkflowContainer.WorkflowId = _Workflowtask.WorkflowTaskInternalID
    

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                               as PurchaseOrder,
      _PurchaseOrder.PurchaseOrderType,
      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,
      @Semantics.currencyCode: true
      _PurchaseOrder.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount preserving type )                          as PurchaseOrderNetAmount,

      case _WorkitemDet.WorkflowTaskType
      when 'W' then case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult
                    when 'requestApproved' then 'Approved'
                    when 'requestRejected' then 'Rejected'
                    else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end
      when 'B' then 'Automatically Approved'
      else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end                                                   as WorkflowTaskResult,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )   as PurOrdWrkflwTskCreationUTCDate,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )   as PurOrdWrkflwTskCreationUTCTime,
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led ) as PurOrdWrkflwTaskEndUTCDate,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let ) as PurOrdWrkflwTaskEndUTCTime,
      _PurchaseOrder.Supplier,
      cast(_User.UserDescription as mm_oa_user_fullname )                                                             as CreatedByUserName,
      _Supplier.SupplierName,
      _PurchaseOrderPlainLongText.PlainLongText                                                                       as POHeaderTextPlainLongText,
      _PurchaseOrderNoteLongText.PlainLongText                                                                        as POHeaderNotePlainLongText,
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

      case _WorkitemDet.WorkflowTaskType
      when 'B' then 'Automatically Approved'
      else cast(_ApproverUser.UserDescription as mm_oa_user_fullname )   end                                          as ApprovedByUserFullName,

      _WorkflowTaskResultComment.WorkflowTaskResultComment                                                            as WorkflowTaskResultComment
}
where
  _Workflowtask.WorkflowTaskType = 'F'
```
