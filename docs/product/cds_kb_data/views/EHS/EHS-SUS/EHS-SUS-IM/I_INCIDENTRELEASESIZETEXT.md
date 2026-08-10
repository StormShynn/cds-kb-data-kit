---
name: I_INCIDENTRELEASESIZETEXT
description: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value
semantic_en: "This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - material
  - metadata-only
---
# I_INCIDENTRELEASESIZETEXT

**This CDS view provides you with information about the size of environmental releases associated with incidents. You can use this view to classify and analyze incidents based on the magnitude of the release. This CDS view provides the data to answer the following business questions: What are the different release size categories for incidents in my organization? How can I categorize incidents based on the scale of material or substance released? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASESIZETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseSize` |  | |  |  | `CHAR(21)` | Release Size |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentReleaseSizeName` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
