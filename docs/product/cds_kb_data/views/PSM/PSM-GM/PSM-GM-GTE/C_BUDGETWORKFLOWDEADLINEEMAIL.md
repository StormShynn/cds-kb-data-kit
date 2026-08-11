---
name: C_BUDGETWORKFLOWDEADLINEEMAIL
description: "Budget Document fr Wrkflw DeadlineEmail"
app_component: PSM-GM-GTE
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value
semantic_en: "Budget Document fr Wrkflw DeadlineEmail"
semantic_vi: "Budget Document fr Wrkflw DeadlineEmail — CDS view tiêu dùng dựa trên I_WorkflowTask."
keywords:
  - "budget"
  - "document"
  - "wrkflw"
  - "deadlineemail"
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
# C_BUDGETWORKFLOWDEADLINEEMAIL

**Budget Document fr Wrkflw DeadlineEmail**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `BudgetDocument` |  | | `_BudgetDocument` | `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PlanningCategory` |  | | `_BudgetDocument` | `PlanningCategory` | `CHAR(10)` | Plan Category |
| `BudgetDocumentType` |  | | `_BudgetDocument` | `BudgetDocumentType` | `CHAR(4)` | Budget Document Type |
| `WorkflowTaskResult` |  | |  | `case Workflowtask.WorkflowTaskResult when 'requestApproved' then 'Approved' when 'requestRejected' then 'Rejected' else Workflowtask.WorkflowTaskResult end` | `CHAR(255)` | Workflow: Returncode flexible workflow |
| `CreatedByUserName` |  | |  | `cast(_User.UserDescription as vdm_userdescription preserving type )` | `CHAR(80)` | User Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFMBDDEMAIL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Budget Document fr Wrkflw DeadlineEmail'
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : { serviceQuality: #C,
                           sizeCategory: #L,
                           dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view C_BudgetWorkflowDeadlineEmail
  as select from            I_WorkflowTask           as Workflowtask
    left outer to many join I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID = Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole     = '99'
    left outer to one join  I_BudgetDocument         as _BudgetDocument         on  _BudgetDocument.ControllingArea    = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 1, 4 )
                                                                                and _BudgetDocument.BudgetDocumentYear = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 5, 4 )
                                                                                and _BudgetDocument.BudgetDocument     = substring( _WorkflowTaskApplObject.TechnicalWrkflwObject, 9, 10 )
    left outer to one join  I_User                   as _User                   on _User.UserID = _BudgetDocument.CreatedByUser

{
  key Workflowtask.WorkflowTaskInternalID,

      _BudgetDocument.BudgetDocument                                      as BudgetDocument,
      _BudgetDocument.PlanningCategory                                    as PlanningCategory,
      _BudgetDocument.BudgetDocumentType                                  as BudgetDocumentType,

      //      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 8 , 10 ) as bdgt_docnr preserving type ) as BudgetDocument,

      case Workflowtask.WorkflowTaskResult
        when 'requestApproved'
          then 'Approved'
        when 'requestRejected'
          then 'Rejected'
      else Workflowtask.WorkflowTaskResult end                            as WorkflowTaskResult,

      cast(_User.UserDescription as vdm_userdescription preserving type ) as CreatedByUserName,

      Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText
}
```
