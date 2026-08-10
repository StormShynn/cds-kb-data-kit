---
name: I_INCIDENTRELEASETYPETEXT
description: "This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPETEXT')/$value
semantic_en: "This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTRELEASETYPETEXT

**This CDS view provides you with data for incident release types in Environment, Health, and Safety (EHS) incident management. You can use this view to categorize and analyze incidents based on their release type classification. This CDS view provides the data to answer the following business questions: What are the different release types associated with incidents in my organization? How can I classify incidents based on their release type for reporting and analysis purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRELEASETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseType` |  | |  |  | `CHAR(21)` | Release Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentReleaseTypeName` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
