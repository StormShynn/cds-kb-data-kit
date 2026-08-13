---
name: C_PURCONTRAPPROVALEMAIL
description: "Purcontrapprovalemail"
semantic_vi: "View C_PURCONTRAPPROVALEMAIL hiển thị dữ liệu email phê duyệt hợp đồng mua hàng, có liên quan khi quản lý hợp đồng mua hàng và luồng phê duyệt."
keywords:
  - "purchase contract"
  - "hợp đồng mua hàng"
  - "approval"
  - "email"
  - "workflow"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "sourcing"
  - "procurement"
  - "mm"
  - "mm-pur"
semantic_en: "The C_PURCONTRAPPROVALEMAIL view exposes purchase contract approval email data, which is relevant when managing purchase contracts and their approval workflows."
app_component: MM-PUR-OA-CON-2CL
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
  - MM-PUR-OA
  - consumption-view
  - workflow
  - email
  - approval
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# C_PURCONTRAPPROVALEMAIL

**Purcontrapprovalemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
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
| `PurchaseContract` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `ActivePurchasingDocument` |  | | `_PurchaseContract` | `ActivePurchasingDocument` |  |  |
| `PurchaseContractType` |  | | `_PurchaseContract` | `PurchasingDocumentType` |  |  |
| `DocumentCurrency` |  | | `_PurchaseContract` | `DocumentCurrency` |  |  |
| `WorkflowTaskResult` |  | |  | `case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult when 'requestApproved' then 'Approved' when 'requestRejected' then 'Rejected' else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end` |  |  |
| `PurContrWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PurContrWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PurContrWrkflwTaskEndUTCDate` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PurContrWrkflwTaskEndUTCTime` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |
| `PurContrWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PurContrWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |
| `Supplier` |  | | `_PurchaseContract` | `Supplier` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `CreatedByUserDescription` |  | | `_User` | `UserDescription` |  |  |
| `ApprovedByUserFullName` |  | |  | `cast(_ApproverUser.UserDescription as mm_oa_user_fullname )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURCONTRAPREML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Contract Details for Workflow Approval Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurContrApprovalEmail
  as select from            I_WorkflowTask           as _Workflowtask

    inner join              I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseContract'
                                                                                and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

   // left outer to one join  I_PurchaseContractAPI01  as _PurchaseContract       on _PurchaseContract.PurchaseContract = _WorkflowTaskApplObject.TechnicalWrkflwObject
    left outer to one join  R_PurchasingDocument     as _PurchaseContract       on _PurchaseContract.PurchasingDocument = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                                and _PurchaseContract.PurchasingDocumentCategory = 'K'

    left outer to one join  I_PurchasingDocumentType as _PurDocType             on  _PurDocType.PurchasingDocumentType     = _PurchaseContract.PurchasingDocumentType
                                                                                and _PurDocType.PurchasingDocumentCategory = 'K'

    left outer to one join  I_User                   as _User                   on _User.UserID = _PurchaseContract.CreatedByUser
    left outer to one join  I_Supplier               as _Supplier               on _Supplier.Supplier = _PurchaseContract.Supplier

    inner join              P_PurchasingLastWorkflowStep as _WorkitemData       on _WorkitemData.TopLevelWorkflowTask =  _Workflowtask.TopLevelWorkflowTask
    inner join              I_WorkflowTask               as _WorkitemDet        on   _WorkitemDet.WrkflwTskCompletionUTCDateTime = _WorkitemData.MaxWrkflwTskCompDateTime
                                                                                and  _WorkitemDet.TopLevelWorkflowTask = _WorkitemData.TopLevelWorkflowTask
                                                                                and  _WorkitemDet.WorkflowTaskType = 'W'
    left outer to one join  I_User                       as _ApproverUser       on _ApproverUser.UserID = _WorkitemDet.WorkflowTaskCurrentUser

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseContract,

      _PurchaseContract.ActivePurchasingDocument as ActivePurchasingDocument,

      _PurchaseContract.PurchasingDocumentType as PurchaseContractType,

      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      @Semantics.currencyCode: true
      _PurchaseContract.DocumentCurrency,
      //@Semantics.amount.currencyCode: 'DocumentCurrency'
      //_PurchaseContract.PurchaseContractTargetAmount,

      case _Workflowtask._WorkflowTaskResult.WorkflowTaskResult
      when 'requestApproved' then 'Approved'
      when 'requestRejected' then 'Rejected'
      else _Workflowtask._WorkflowTaskResult.WorkflowTaskResult end                                                   as WorkflowTaskResult,
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )   as PurContrWrkflwTskCrtnUTCDte,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )   as PurContrWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led ) as PurContrWrkflwTaskEndUTCDate,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCompletionUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let ) as PurContrWrkflwTaskEndUTCTime,

      cast(tstmp_to_dats( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PurContrWrkflwTskDuUTCDte,
      cast(tstmp_to_tims( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PurContrWrkflwTskDuUTCTme,

      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

      _PurchaseContract.Supplier,
      _Supplier.SupplierName,
      _User.UserDescription                                                                                           as CreatedByUserDescription,
      cast(_ApproverUser.UserDescription as mm_oa_user_fullname )                                                     as ApprovedByUserFullName

}
where
  _Workflowtask.WorkflowTaskType = 'F'
```
