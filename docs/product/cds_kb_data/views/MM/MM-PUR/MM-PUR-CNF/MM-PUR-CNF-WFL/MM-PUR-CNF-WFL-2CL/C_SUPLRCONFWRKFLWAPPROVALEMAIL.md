---
name: C_SUPLRCONFWRKFLWAPPROVALEMAIL
description: "Suplrconfwrkflwapprovalemail"
app_component: MM-PUR-CNF-WFL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-CNF
  - consumption-view
  - workflow
  - email
  - approval
  - component:MM-PUR-CNF-WFL-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRCONFWRKFLWAPPROVALEMAIL

**Suplrconfwrkflwapprovalemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-CNF-WFL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `SupplierConfirmation` |  | | `_SupplierConfirmation` | `SupplierConfirmation` |  |  |
| `DocumentCurrency` |  | | `_PurchaseOrderNetAmount` | `DocumentCurrency` |  |  |
| `PurchaseOrderNetAmount` |  | |  | `cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )` |  |  |
| `PurchaseOrder` |  | | `_SupplierConfirmation` | `SuplrConfRefPurchaseOrder` |  |  |
| `CreatedByUserName` |  | |  | `cast(_User.UserDescription as mm_oa_user_fullname )` |  |  |
| `Supplier` |  | | `_SupplierConfirmation` | `Supplier` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `PurchasingDocumentType` |  | | `_SupplierConfirmation` | `PurchasingDocumentType` |  |  |
| `CreationDate` |  | | `_SupplierConfirmation` | `CreationDate` |  |  |
| `WorkflowTaskResult` |  | |  | `case _WorkitemDet.WorkflowTaskType when 'W' then case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult when 'SupplierConfirmationApproved' then 'Approved' when 'SupplierConfirmationRejected' then 'Rejected' else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end when 'B' then 'Automatically Approved' else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end` |  |  |
| `ApprovedByUserFullName` |  | |  | `case _WorkitemDet.WorkflowTaskType when 'B' then 'Automatically Approved' else cast(_ApproverUser.UserDescription as mm_oa_user_fullname ) end` |  |  |
| `LastStepWorkflowTaskInternalID` |  | | `_WorkitemDet` | `WorkflowTaskInternalID` |  |  |
| `_WorkflowTaskResultComment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskResultComment` | `I_WorkflowTaskResultComment` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSCWFLAPPR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Confirmation Details for Workflow Approval Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_SuplrConfWrkflwApprovalEmail
  as select from           I_WorkflowTask               as _Workflowtask

    inner join             I_WorkflowTaskApplObject     as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                   and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                   and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'SupplierConfirmation'
                                                                                   and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join I_SupplierConfirmation       as _SupplierConfirmation   on _SupplierConfirmation.SupplierConfirmation = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer to one join I_PurchaseOrderNetAmount     as _PurchaseOrderNetAmount on _PurchaseOrderNetAmount.PurchaseOrder = _SupplierConfirmation.SuplrConfRefPurchaseOrder

    left outer to one join I_User                       as _User                   on _User.UserID = _SupplierConfirmation.CreatedByUser

    left outer to one join I_Supplier                   as _Supplier               on _Supplier.Supplier = _SupplierConfirmation.Supplier

    inner join             P_PurchasingLastWorkflowStep as _WorkitemData           on _WorkitemData.TopLevelWorkflowTask = _Workflowtask.TopLevelWorkflowTask

    inner join             I_WorkflowTask               as _WorkitemDet            on  _WorkitemDet.WrkflwTskCompletionUTCDateTime = _WorkitemData.MaxWrkflwTskCompDateTime
                                                                                   and _WorkitemDet.TopLevelWorkflowTask           = _WorkitemData.TopLevelWorkflowTask
                                                                                   and (
                                                                                      _WorkitemDet.WorkflowTaskType                = 'W'
                                                                                      or _WorkitemDet.WorkflowTaskType             = 'B'
                                                                                    )

    left outer to one join I_User                       as _ApproverUser           on _ApproverUser.UserID = _WorkitemDet.WorkflowTaskCurrentUser

    left outer to one join I_PurchasingDocumentType     as _PurDocType             on  _PurDocType.PurchasingDocumentType     = _SupplierConfirmation.PurchasingDocumentType
                                                                                   and _PurDocType.PurchasingDocumentCategory = 'F'

  //left outer to one join I_WorkflowTaskResultComment  as _WorkflowTaskResultComment on _WorkflowTaskResultComment.WorkflowTaskInternalID = _WorkitemDet.WorkflowTaskInternalID
  association [0..1] to I_WorkflowTaskResultComment as _WorkflowTaskResultComment on _WorkflowTaskResultComment.WorkflowTaskInternalID = _WorkitemDet.WorkflowTaskInternalID

{
  key _Workflowtask.WorkflowTaskInternalID,
      _SupplierConfirmation.SupplierConfirmation,

      @Semantics.currencyCode: true
      _PurchaseOrderNetAmount.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount ) as PurchaseOrderNetAmount,
      _SupplierConfirmation.SuplrConfRefPurchaseOrder                                        as PurchaseOrder,

      cast(_User.UserDescription as mm_oa_user_fullname )                                    as CreatedByUserName,

      _SupplierConfirmation.Supplier,
      _Supplier.SupplierName,
      _SupplierConfirmation.PurchasingDocumentType,
      _SupplierConfirmation.CreationDate,
      //Document type name for Purchase Order document type
      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

      case _WorkitemDet.WorkflowTaskType
      when 'W' then case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult
                    when 'SupplierConfirmationApproved' then 'Approved'
                    when 'SupplierConfirmationRejected' then 'Rejected'
                    else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end
      when 'B' then 'Automatically Approved'
      else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end                          as WorkflowTaskResult,

      case _WorkitemDet.WorkflowTaskType
      when 'B' then 'Automatically Approved'
      else cast(_ApproverUser.UserDescription as mm_oa_user_fullname )   end                 as ApprovedByUserFullName,

      _WorkitemDet.WorkflowTaskInternalID                                                    as LastStepWorkflowTaskInternalID,

      _WorkflowTaskResultComment
      //.WorkflowTaskResultComment                                   as WorkflowTaskResultComment

}
where
  _Workflowtask.WorkflowTaskType = 'F'
```
