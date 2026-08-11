---
name: C_PAYFNWORKFLOWAPPROVERNOTIF
description: "Flex Workflow Approval Notification"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value
semantic_en: "Flex Workflow Approval Notification"
semantic_vi: "Flex Workflow Approval Notification — CDS view tiêu dùng dựa trên I_WorkflowStatusDetails."
keywords:
  - "flex"
  - "workflow"
  - "approval"
  - "notification"
  - "task"
  - "internal"
  - "currency"
  - "amount"
  - "functional"
  - "code"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-PF2-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - FIN-FSCM-PF2-2CL
  - lob:finance
  - notification
---
# C_PAYFNWORKFLOWAPPROVERNOTIF

**Flex Workflow Approval Notification**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowStatusDetails` | `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `PayFnSetUUID` |  | | `_Set` | `PayFnSetUUID` | `RAW(16)` | Object UUID |
| `PayFnApprovalCurrency` |  | | `_Set._Set` | `PayFnApprovalCurrency` | `CUKY(5)` | Approval Currency |
| `PayFnApprovalAmount` |  | | `_Set._Set` | `PayFnApprovalAmount` | `DEC(22)` | Approval Amount |
| `PayFnFunctionalApprovalCode` |  | | `_Set._Set` | `PayFnFunctionalApprovalCode` | `CHAR(8)` | Functional payment approval classifier |
| `UserDescription` |  | |  | `cast(_User.UserDescription as mm_oa_user_fullname )` | `CHAR(130)` | Created by User Fullname |
| `WorkflowTaskURL` |  | | `_WorkflowTaskURL` | `WorkflowTaskURL` | `SSTR(1333)` | Workflow: Workflow Task URL |
| `WorkflowTaskExternalStatus` |  | | `_WorkflowStatusDetails` | `WorkflowTaskExternalStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `WorkflowTaskProcessor` |  | | `_WorkflowStatusDetails` | `WorkflowTaskProcessor` | `CHAR(12)` | Actual Agent of Work Item |
| `WorkflowTaskStepType` |  | | `_WorkflowStatusDetails` | `WorkflowTaskStepType` | `CHAR(40)` | Workflow: Step Id |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_WorkflowTaskURL` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true
 
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]

@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Flex Workflow Approval Notification'
define view entity C_PayFnWorkflowApproverNotif 
  as select from I_WorkflowStatusDetails as _WorkflowStatusDetails
  
  //Workflow
  inner join I_WorkflowTaskApplObject             as _WorkflowTaskApplObject
   on _WorkflowStatusDetails.WorkflowTaskInternalID = _WorkflowTaskApplObject.WorkflowTaskInternalID  
  
  //Functional Approval 
  left outer join C_PayFnFuncnlApprvlSetAssgmt    as _Set
   on _WorkflowTaskApplObject.TechnicalWrkflwObject = bintohex(_Set.PayFnSetUUID)
   
  //User
  left outer join I_User                          as _User
   on _User.UserID = _Set.CreatedByUser
   
  association [0..1] to I_WorkflowTaskURL         as _WorkflowTaskURL 
   on $projection.WorkflowTaskInternalID = _WorkflowTaskURL.WorkflowTaskInternalID

{
    key _WorkflowStatusDetails.WorkflowTaskInternalID,
    
    //Functional Approval
    _Set.PayFnSetUUID,
    _Set._Set.PayFnApprovalCurrency,
    @Semantics.amount.currencyCode: 'PayFnApprovalCurrency'
    _Set._Set.PayFnApprovalAmount,
    _Set._Set.PayFnFunctionalApprovalCode,
    _Set._Set._ApprovalCode._Text[1:Language=$session.system_language].PayFnFuncnlApprovalCodeDesc,
    
    //User
    cast(_User.UserDescription as mm_oa_user_fullname ) as UserDescription,
    
    //Link
    _WorkflowTaskURL.WorkflowTaskURL,

    //Workflow Status Details
    _WorkflowStatusDetails.WorkflowTaskExternalStatus,
    _WorkflowStatusDetails.WorkflowTaskProcessor,
    _WorkflowStatusDetails.WorkflowTaskStepType
    
}where _WorkflowStatusDetails.WorkflowScenarioDefinition = 'WS61000163';
```
