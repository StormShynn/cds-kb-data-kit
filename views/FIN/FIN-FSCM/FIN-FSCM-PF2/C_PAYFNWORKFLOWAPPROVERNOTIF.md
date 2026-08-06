---
name: C_PAYFNWORKFLOWAPPROVERNOTIF
description: Flex Workflow Approval Notification
app_component: FIN-FSCM-PF2
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value
semantic_en: Flex Workflow Approval Notification
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-PF2
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - lob:finance
  - notification
  - metadata-only
---
# C_PAYFNWORKFLOWAPPROVERNOTIF

**Flex Workflow Approval Notification**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNWORKFLOWAPPROVERNOTIF')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `PayFnSetUUID` | `RAW(16)` | Object UUID |
| `PayFnApprovalCurrency` | `CUKY(5)` | Approval Currency |
| `PayFnApprovalAmount` | `DEC(22)` | Approval Amount |
| `PayFnFunctionalApprovalCode` | `CHAR(8)` | Functional payment approval classifier |
| `PayFnFuncnlApprovalCodeDesc` | `CHAR(36)` | Functional payment approval classifier - Description text |
| `UserDescription` | `CHAR(130)` | Created by User Fullname |
| `WorkflowTaskURL` | `SSTR(1333)` | Workflow: Workflow Task URL |
| `WorkflowTaskExternalStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `WorkflowTaskProcessor` | `CHAR(12)` | Actual Agent of Work Item |
| `WorkflowTaskStepType` | `CHAR(40)` | Workflow: Step Id |
