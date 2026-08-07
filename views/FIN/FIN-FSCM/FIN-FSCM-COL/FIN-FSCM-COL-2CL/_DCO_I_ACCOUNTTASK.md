---
name: _DCO_I_ACCOUNTTASK
description: This CDS view provides a comprehensive view of tasks in collections and dispute automation that are associated with collection accounts. It combines active tasks and draft tasks, enabling users to manage and monitor the collection process across business partner hierarchies and accounts. This CDS view provides the data to answer the following business questions: What are all the tasks (both active and draft) associated with a specific collection account? Which tasks are due for a particular business partner and segment? What is the status of collection tasks across different accounts? Which tasks have been created by the current user and are still in draft status? Are there any accounts that are excluded from the worklist until the task due date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTTASK')/$value
semantic_en: This CDS view provides a comprehensive view of tasks in collections and dispute automation that are associated with collection accounts. It combines active tasks and draft tasks, enabling users to manage and monitor the collection process across business partner hierarchies and accounts. This CDS view provides the data to answer the following business questions: What are all the tasks (both active and draft) associated with a specific collection account? Which tasks are due for a particular business partner and segment? What is the status of collection tasks across different accounts? Which tasks have been created by the current user and are still in draft status? Are there any accounts that are excluded from the worklist until the task due date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - task
  - metadata-only
---
# _DCO_I_ACCOUNTTASK

**This CDS view provides a comprehensive view of tasks in collections and dispute automation that are associated with collection accounts. It combines active tasks and draft tasks, enabling users to manage and monitor the collection process across business partner hierarchies and accounts. This CDS view provides the data to answer the following business questions: What are all the tasks (both active and draft) associated with a specific collection account? Which tasks are due for a particular business partner and segment? What is the status of collection tasks across different accounts? Which tasks have been created by the current user and are still in draft status? Are there any accounts that are excluded from the worklist until the task due date? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTTASK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DebtCollectionsTaskUUID` |  | |  |  | `RAW(16)` | UUID of Task in Collections and Dispute Automation |
| `DebtCollectionsTask` |  | |  |  | `CHAR(12)` | Task |
| `DebtCollectionsTaskReason` |  | |  |  | `CHAR(3)` | Task Reason |
| `DebtCollectionsTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of the Task |
| `DebtCollectionsTaskStatus` |  | |  |  | `NUMC(1)` | Task Status |
| `DCoAcctIsExcldFrmWlUntilDuDte` |  | |  |  | `CHAR(1)` | Account Is Excluded from Worklist When Task Is Open |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DbtCollsTaskProcessorGroup` |  | |  |  | `CHAR(40)` | Task Processor Group |
| `DCoActivityIsCreated` |  | |  |  | `CHAR(1)` | Activity Is Created |
| `DebtCollectionsTaskIsMigrated` |  | |  |  | `CHAR(1)` | Task Is Migrated |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DbtCollsTaskCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DbtCollsTaskCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DbtCollsTaskLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DbtCollsTaskLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DbtCollsTaskClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DbtCollsTaskClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DebtCollectionsTaskCriticality` |  | |  |  | `INT1(3)` | Task Criticality |
