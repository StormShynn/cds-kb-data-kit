---
name: I_INCIDENTGROUPCODE
description: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value
semantic_en: "This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTGROUPCODE

**This CDS view provides you with incident group codes for categorizing and organizing incidents. You can use this view to classify incidents according to predefined group codes, enabling consistent incident reporting and analysis across your organization. This CDS view provides the data to answer the following business questions: Which incident group codes are available for incident classification? Which incident group codes are currently active in the system? How can I standardize incident categorization across different business units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentGroupCode` |  | |  |  | `CHAR(21)` | Incident Group |
| `EHSInactiveConfiguration` |  | |  |  | `CHAR(1)` | Deactivate Configuration |
