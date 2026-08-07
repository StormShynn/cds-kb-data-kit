---
name: _DCO_I_TASK
description: This CDS view provides access to tasks in collections and dispute automation, which are used to manage and track internal action items related to the collection process for business partners. This CDS view provides the data to answer the following business questions: Which tasks are overdue for a specific business partner? What is the current status of tasks assigned to a task processor group? Which business partners have open tasks in a specific collection segment? How many tasks were created or closed within a specific time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASK')/$value
semantic_en: This CDS view provides access to tasks in collections and dispute automation, which are used to manage and track internal action items related to the collection process for business partners. This CDS view provides the data to answer the following business questions: Which tasks are overdue for a specific business partner? What is the current status of tasks assigned to a task processor group? Which business partners have open tasks in a specific collection segment? How many tasks were created or closed within a specific time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
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
# _DCO_I_TASK

**This CDS view provides access to tasks in collections and dispute automation, which are used to manage and track internal action items related to the collection process for business partners. This CDS view provides the data to answer the following business questions: Which tasks are overdue for a specific business partner? What is the current status of tasks assigned to a task processor group? Which business partners have open tasks in a specific collection segment? How many tasks were created or closed within a specific time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
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
