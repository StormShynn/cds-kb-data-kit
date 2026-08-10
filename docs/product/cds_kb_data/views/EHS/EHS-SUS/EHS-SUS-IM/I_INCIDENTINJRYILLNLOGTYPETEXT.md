---
name: I_INCIDENTINJRYILLNLOGTYPETEXT
description: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value
semantic_en: "This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTINJRYILLNLOGTYPETEXT

**This CDS view provides you with supported values for injury and illness log entry types. You can use it to categorize and classify different types of injuries and illnesses that are recorded in the Injury/Illness Log. This CDS view provides the data to answer the following business questions: What types of injuries and illnesses are recorded in the incident management system? How can I classify incident log entries by injury or illness type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJRYILLNLOGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentInjuryIllnLogType` |  | |  |  | `CHAR(50)` | Injury/Illness Log Entry Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentInjuryIllnLogTypeText` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
