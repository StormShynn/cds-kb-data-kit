---
name: I_EHSLTSTLOCHIERARCHYREVISION
description: "This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value
semantic_en: "This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLTSTLOCHIERARCHYREVISION

**This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Root Key |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionDescription` |  | |  |  | `CHAR(80)` | Revision Description |
| `EHSLocHierarchyRevisionUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Revision Key |
