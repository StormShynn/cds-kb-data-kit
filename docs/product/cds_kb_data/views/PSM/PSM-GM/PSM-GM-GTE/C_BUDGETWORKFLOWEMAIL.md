---
name: C_BUDGETWORKFLOWEMAIL
description: "Budget Document for WF ApprovalEmail"
app_component: PSM-GM-GTE
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWEMAIL')/$value
semantic_en: "Budget Document for WF ApprovalEmail"
semantic_vi: "Budget Document for WF ApprovalEmail — CDS view tiêu dùng dựa trên I_WorkflowTask."
keywords:
  - "budget"
  - "document"
  - "for"
  - "approvalemail"
  - "workflow"
  - "task"
  - "internal"
  - "planning"
  - "category"
  - "type"
  - "result"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE
  - consumption-view
  - document
  - PSM-GM
  - PSM-GM-GTE
---
# C_BUDGETWORKFLOWEMAIL

**Budget Document for WF ApprovalEmail**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `BudgetDocument` |  | | `_BudgetDocument` | `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PlanningCategory` |  | | `_BudgetDocument` | `PlanningCategory` | `CHAR(10)` | Plan Category |
| `BudgetDocumentType` |  | | `_BudgetDocument` | `BudgetDocumentType` | `CHAR(4)` | Budget Document Type |
| `WorkflowTaskResult` |  | |  | `case Workflowtask.WorkflowTaskResult when 'requestApproved' then 'Approved' when 'requestRejected' then 'Rejected' else Workflowtask.WorkflowTaskResult end` | `CHAR(255)` | Workflow: Returncode flexible workflow |
| `UserDescription` |  | |  | `cast(_User.UserDescription as vdm_userdescription preserving type )` | `CHAR(80)` | User Description |
| `WorkflowTaskCurrentUser` |  | | `_WorkflowtaskDecision` | `WorkflowTaskCurrentUser` | `CHAR(12)` | Actual Agent of Work Item |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWEMAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWEMAIL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFMBDEMAIL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Budget Document for WF ApprovalEmail'
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : { serviceQuality: #C,
                           sizeCategory: #L,
                           dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view C_BudgetWorkflowEmail
  as select from            I_WorkflowTask           as Workflowtask
    left outer to many join I_WorkflowTaskApplObject as _WorkflowTaskApplObject     on  _WorkflowTaskApplObject.WorkflowTaskInternalID = Workflowtask.WorkflowTaskInternalID
                                                                                    and _WorkflowTaskApplObject.WorkflowObjectRole     = '01'
    left outer to one join  I_BudgetDocument         as _BudgetDocument             on  _BudgetDocument.ControllingArea    = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 1, 4 )
                                                                                    and _BudgetDocument.BudgetDocumentYear = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 5, 4 )
                                                                                    and _BudgetDocument.BudgetDocument     = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 9, 10 )
    left outer to one join  I_WorkflowTaskApplObject as _WorkflowTaskApplObDecision on  _WorkflowTaskApplObDecision.WorkflowTaskInternalID = Workflowtask.WorkflowTaskInternalID
                                                                                    and _WorkflowTaskApplObDecision.WorkflowObjectRole     = '99'
    left outer to one join  I_WorkflowTask           as _WorkflowtaskDecision       on  _WorkflowtaskDecision.WorkflowTaskInternalID = _WorkflowTaskApplObDecision.TechnicalWrkflwObject
                                                                                    and _WorkflowtaskDecision.WorkflowTaskStatus     = 'COMPLETED'
    left outer to one join  I_WorkflowTaskResult     as _WorkflowTaskResult         on _WorkflowTaskResult.WorkflowInternalID   = Workflowtask.WorkflowTaskInternalID
                                                                                    and(
                                                                                      _WorkflowTaskResult.WorkflowTaskResult    = 'APPROVED'
                                                                                      or _WorkflowTaskResult.WorkflowTaskResult = 'REJECTED'
                                                                                    )
    left outer to one join  I_User                   as _User                       on _User.UserID = _WorkflowtaskDecision.WorkflowTaskCurrentUser                                                                                    

{
  key Workflowtask.WorkflowTaskInternalID,

      _BudgetDocument.BudgetDocument                                      as BudgetDocument,
      _BudgetDocument.PlanningCategory                                    as PlanningCategory,
      _BudgetDocument.BudgetDocumentType                                  as BudgetDocumentType,

      //      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 8 , 10) as bdgt_docnr preserving type ) as BudgetDocument,

      case Workflowtask.WorkflowTaskResult
        when 'requestApproved'
          then 'Approved'
        when 'requestRejected'
          then 'Rejected'
      else Workflowtask.WorkflowTaskResult end                            as WorkflowTaskResult,

      cast(_User.UserDescription as vdm_userdescription preserving type ) as UserDescription,

      Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText,

      _WorkflowtaskDecision.WorkflowTaskCurrentUser                       as WorkflowTaskCurrentUser
}
where
  Workflowtask.WorkflowTaskType = 'F'
```
