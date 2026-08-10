---
name: I_COLLECTIONSRESUBMISSION
description: "This CDS view provides information about resubmissions within the collections management process in SAP Collections Management. It aggregates and exposes key data related to resubmissions, including business partner information, collection segments, reasons and statuses for resubmissions, and metadata about the creation and modification of resubmission records. The view facilitates data extraction and supports transactional operations, making it suitable for integration into business processes and analytics. This CDS view provides the data to answer the following business questions: Which resubmissions are currently active in the collections management process? What are the due dates and timestamps for resubmissions? Which business partners are associated with specific resubmissions? What are the reasons and statuses for each resubmission? Who created or last changed a particular resubmission record, and when did these actions occur? What is the collection segment associated with each resubmission? Are there any restrictions on contacting the business partner until the resubmission date is reached? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONSRESUBMISSION')/$value
semantic_en: "This CDS view provides information about resubmissions within the collections management process in SAP Collections Management. It aggregates and exposes key data related to resubmissions, including business partner information, collection segments, reasons and statuses for resubmissions, and metadata about the creation and modification of resubmission records. The view facilitates data extraction and supports transactional operations, making it suitable for integration into business processes and analytics. This CDS view provides the data to answer the following business questions: Which resubmissions are currently active in the collections management process? What are the due dates and timestamps for resubmissions? Which business partners are associated with specific resubmissions? What are the reasons and statuses for each resubmission? Who created or last changed a particular resubmission record, and when did these actions occur? What is the collection segment associated with each resubmission? Are there any restrictions on contacting the business partner until the resubmission date is reached? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-COL-2CL
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - transaction
  - metadata-only
---
# I_COLLECTIONSRESUBMISSION

**This CDS view provides information about resubmissions within the collections management process in SAP Collections Management. It aggregates and exposes key data related to resubmissions, including business partner information, collection segments, reasons and statuses for resubmissions, and metadata about the creation and modification of resubmission records. The view facilitates data extraction and supports transactional operations, making it suitable for integration into business processes and analytics. This CDS view provides the data to answer the following business questions: Which resubmissions are currently active in the collections management process? What are the due dates and timestamps for resubmissions? Which business partners are associated with specific resubmissions? What are the reasons and statuses for each resubmission? Who created or last changed a particular resubmission record, and when did these actions occur? What is the collection segment associated with each resubmission? Are there any restrictions on contacting the business partner until the resubmission date is reached? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONSRESUBMISSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResubmissionUUID` |  | |  |  | `CHAR(32)` | Resubmission Key |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `ResubmissionDueDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `CollResubmissionDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCntctUntilResubmsnDateIsReq` |  | |  |  | `CHAR(1)` | Don't Contact Until Resubmission Date |
| `ResubmissionReason` |  | |  |  | `CHAR(4)` | Reason for Resubmission |
| `ResubmissionStatus` |  | |  |  | `CHAR(1)` | Status of Resubmission |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `ChangedOnDateTime` |  | |  |  | `DEC(15)` | Last Changed At |
| `ObjectType` |  | |  |  | `CHAR(10)` | Object Type |
| `ObjectKey` |  | |  |  | `CHAR(70)` | Object key |
