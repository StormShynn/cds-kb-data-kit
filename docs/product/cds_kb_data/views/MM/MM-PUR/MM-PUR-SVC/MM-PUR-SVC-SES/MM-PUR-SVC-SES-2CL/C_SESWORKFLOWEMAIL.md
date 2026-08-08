---
name: C_SESWORKFLOWEMAIL
description: "Sesworkflowemail"
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - consumption-view
  - workflow
  - email
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# C_SESWORKFLOWEMAIL

**Sesworkflowemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` |  |  |
| `WorkflowTaskResultComment` |  | | `_WorkflowTaskResultComment` | `WorkflowTaskResultComment` |  |  |
| `ServiceEntrySheet` |  | | `_ServiceEntrySheet` | `ServiceEntrySheet` |  |  |
| `ServiceEntrySheetName` |  | | `_ServiceEntrySheet` | `ServiceEntrySheetName` |  |  |
| `PurchasingOrganization` |  | | `_ServiceEntrySheet` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_ServiceEntrySheet` | `PurchasingGroup` |  |  |
| `Supplier` |  | | `_ServiceEntrySheet` | `Supplier` |  |  |
| `PurchaseOrder` |  | | `_ServiceEntrySheet` | `PurchaseOrder` |  |  |
| `Currency` |  | | `_ServiceEntrySheet` | `Currency` |  |  |
| `TotalNetAmount` |  | | `_Document` | `TotalNetAmount` |  |  |
| `ApprovalStatus` |  | | `_ServiceEntrySheet` | `ApprovalStatus` |  |  |
| `ApprovedByUserFullName` |  | |  | `cast(_ApproverUser.UserDescription as mm_oa_user_fullname )` |  |  |
| `CreatedByUserName` |  | |  | `cast(_SESCreatorUser.UserDescription as mm_oa_user_fullname )` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheet` | `I_ServiceEntrySheetBasic` | [0..1] |
| `_Document` | `I_SrvcEntrShtItmTotNetAmt` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSESWFEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType : #CONSUMPTION

@ObjectModel : {
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL,
  supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER,
  modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
}

@EndUserText.label: 'Email for SES Wfl Approval or Rejection'
@Metadata.ignorePropagatedAnnotations:true

define view C_SESWorkflowEmail
  as select from    I_WorkflowTask           as _WorkflowTask
    inner join      I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                        and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                        and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'ServiceEntrySheet'
                                                                        and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    inner join P_PurchasingLastWorkflowStep         as _WorkitemData    on _WorkitemData.TopLevelWorkflowTask =  _WorkflowTask.TopLevelWorkflowTask
    inner join I_WorkflowTask                       as _WorkitemDet     on _WorkitemDet.WrkflwTskCompletionUTCDateTime = _WorkitemData.MaxWrkflwTskCompDateTime
                                                                          and  _WorkitemDet.TopLevelWorkflowTask = _WorkitemData.TopLevelWorkflowTask
                                                                          and  (_WorkitemDet.WorkflowTaskType = 'W' or _WorkitemDet.WorkflowTaskType = 'B')
    left outer to one join I_WorkflowTaskResultComment as _WorkflowTaskResultComment on  _WorkflowTaskResultComment.WorkflowTaskInternalID = _WorkitemDet.WorkflowTaskInternalID
    inner join I_ServiceEntrySheetBasic             as _SES             on _SES.ServiceEntrySheet = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
    left outer to one join  I_User                  as _ApproverUser    on _ApproverUser.UserID = _WorkitemDet.WorkflowTaskCurrentUser
    left outer to one join  I_User                  as _SESCreatorUser    on _SESCreatorUser.UserID = _SES.CreatedByUser

  association [0..1] to I_ServiceEntrySheetBasic as _ServiceEntrySheet
  on _ServiceEntrySheet.ServiceEntrySheet = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
  and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null
  association [0..1] to I_SrvcEntrShtItmTotNetAmt as _Document on _Document.ServiceEntrySheet = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
  and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null
{

  key _WorkflowTask.WorkflowTaskInternalID,

       _WorkflowTask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

       _WorkflowTaskResultComment.WorkflowTaskResultComment,

       _ServiceEntrySheet.ServiceEntrySheet,

       _ServiceEntrySheet.ServiceEntrySheetName,

       _ServiceEntrySheet.PurchasingOrganization,

       _ServiceEntrySheet.PurchasingGroup,

       _ServiceEntrySheet.Supplier,

       _ServiceEntrySheet.PurchaseOrder,

       @Semantics.currencyCode: true
       _ServiceEntrySheet.Currency,

       @Semantics.amount.currencyCode: 'Currency'
       _Document.TotalNetAmount,

       _ServiceEntrySheet.ApprovalStatus,

       cast(_ApproverUser.UserDescription as mm_oa_user_fullname )   as ApprovedByUserFullName,

       cast(_SESCreatorUser.UserDescription as mm_oa_user_fullname )   as CreatedByUserName

}
where _WorkflowTask.WorkflowTaskType = 'F'
```
