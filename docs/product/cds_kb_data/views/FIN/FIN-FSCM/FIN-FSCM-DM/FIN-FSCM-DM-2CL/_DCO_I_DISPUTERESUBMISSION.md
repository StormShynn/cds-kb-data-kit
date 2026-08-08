---
name: _DCO_I_DISPUTERESUBMISSION
description: "This CDS view provides access to resubmission records associated with disputes. It enables tracking and management of dispute resubmission activities, including their status, due dates, and lifecycle information. This CDS view provides the data to answer the following business questions: What are the open resubmissions for a specific dispute? Which resubmissions are overdue based on their due dates? Who created or last modified a particular dispute resubmission? What is the current status and activity type of dispute resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTERESUBMISSION')/$value
semantic_en: "This CDS view provides access to resubmission records associated with disputes. It enables tracking and management of dispute resubmission activities, including their status, due dates, and lifecycle information. This CDS view provides the data to answer the following business questions: What are the open resubmissions for a specific dispute? Which resubmissions are overdue based on their due dates? Who created or last modified a particular dispute resubmission? What is the current status and activity type of dispute resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DISPUTERESUBMISSION

**This CDS view provides access to resubmission records associated with disputes. It enables tracking and management of dispute resubmission activities, including their status, due dates, and lifecycle information. This CDS view provides the data to answer the following business questions: What are the open resubmissions for a specific dispute? Which resubmissions are overdue based on their due dates? Who created or last modified a particular dispute resubmission? What is the current status and activity type of dispute resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTERESUBMISSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` |  | |  |  | `RAW(16)` | Dispute UUID |
| `DCoDisputeResubmissionUUID` |  | |  |  | `RAW(16)` | Resubmission UUID |
| `DCoDisputeResubmissionDueDate` |  | |  |  | `DATS(8)` | Resubmission Due Date |
| `DCoDisputeResubmissionActivity` |  | |  |  | `CHAR(3)` | Resubmission Activity |
| `DCoDisputeResubmissionStatus` |  | |  |  | `NUMC(1)` | Resubmission Status |
| `DCoDisputeResubmissionNoteText` |  | |  |  | `STRI(4000)` | Resubmission Note |
| `DCoDisputeResubmsnCreationUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoDsputResubmsnCrtnDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoDsputResubmsnLastChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoDsputResubmsnLstChgDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoDisputeResubmsnClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DCoDsputResubmsnClsgDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
