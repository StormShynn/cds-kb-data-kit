---
name: C_BUDGETWORKFLOWDEADLINEEMAIL
description: Budget Document fr Wrkflw DeadlineEmail
app_component: PSM-GM-GTE
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value
semantic_en: Budget Document fr Wrkflw DeadlineEmail
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE
  - consumption-view
  - document
  - PSM-GM
  - PSM-GM-GTE
  - metadata-only
---
# C_BUDGETWORKFLOWDEADLINEEMAIL

**Budget Document fr Wrkflw DeadlineEmail**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUDGETWORKFLOWDEADLINEEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `BudgetDocumentType` |  | |  |  | `CHAR(4)` | Budget Document Type |
| `WorkflowTaskResult` |  | |  |  | `CHAR(255)` | Workflow: Returncode flexible workflow |
| `CreatedByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `WorkflowTaskResultReasonText` |  | |  |  | `CHAR(60)` | Flexible Workflow: Decision Reason Text |
