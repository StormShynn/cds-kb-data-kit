---
name: I_INCIDENTMAJORROOTCAUSETEXT
description: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value
semantic_en: "This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
  - metadata-only
---
# I_INCIDENTMAJORROOTCAUSETEXT

**This CDS view provides you with master data for incident root causes. You can use this view to classify and analyze the primary underlying causes of incidents, enabling you to identify patterns and implement preventive measures. This CDS view provides the data to answer the following business questions: What are the most common root causes of incidents in my organization? How can I categorize incidents by their major root causes for trend analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTMAJORROOTCAUSETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Root Cause |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentMajorRootCauseName` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
