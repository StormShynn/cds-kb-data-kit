---
name: _DCO_I_TASKACCOUNTINGDOCUMENT
description: This CDS view provides access to the relationship between tasks in collections and dispute automation and their associated receivable items. It enables the retrieval of receivable items linked to specific collection tasks. This CDS view provides the data to answer the following business questions: Which receivable items are associated with a specific task? What are the receivable items linked to a particular task? Who created or last modified the relationship between a task and a receivable item? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASKACCOUNTINGDOCUMENT')/$value
semantic_en: This CDS view provides access to the relationship between tasks in collections and dispute automation and their associated receivable items. It enables the retrieval of receivable items linked to specific collection tasks. This CDS view provides the data to answer the following business questions: Which receivable items are associated with a specific task? What are the receivable items linked to a particular task? Who created or last modified the relationship between a task and a receivable item? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_TASKACCOUNTINGDOCUMENT

**This CDS view provides access to the relationship between tasks in collections and dispute automation and their associated receivable items. It enables the retrieval of receivable items linked to specific collection tasks. This CDS view provides the data to answer the following business questions: Which receivable items are associated with a specific task? What are the receivable items linked to a particular task? Who created or last modified the relationship between a task and a receivable item? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASKACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsTaskUUID` |  | |  |  | `RAW(16)` | UUID of Task in Collections and Dispute Automation |
| `DCoTaskAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item Related to Task |
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `DCoTskAcctgDocCreationUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoTskAcctgDocCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoTskAcctgDocLastChgdByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoTskAcctgDocLstChgDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
