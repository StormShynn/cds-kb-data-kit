---
name: I_INCIDENTCATEGORYTEXT
description: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value
semantic_en: "This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTCATEGORYTEXT

**This CDS view provides you with supported values for incident categories. You can use it to classify incidents according to their type, such as actual incidents, near misses, safety observations, or injury/illness log entries. This CDS view provides the data to answer the following business questions: What types of incidents are recorded in the system? How many near misses versus actual incidents have been reported? What is the distribution of safety observations across different categories? Value Meaning 001 Incident 002 Near Miss 003 Safety Observation 004 Injury/Illness Log To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
