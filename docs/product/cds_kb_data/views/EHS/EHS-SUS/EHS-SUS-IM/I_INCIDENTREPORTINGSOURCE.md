---
name: I_INCIDENTREPORTINGSOURCE
description: "This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation"
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value
semantic_en: "This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTREPORTINGSOURCE

**This CDS view provides you with supported values for the incident reporting source. You can use this view to identify the origin or channel through which an incident was reported in the system. This CDS view provides the data to answer the following business questions: Which reporting channels are used most frequently for incident reporting? How many incidents were reported through mobile applications versus web applications? What is the distribution of incident reports across different reporting sources? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. The following table shows the supported values and their meanings: Value Meaning 00 Unknown 01 Mobile Application 02 Web Application via Mobile Device 03 Web Application 04 Offline Interactive Forms 05 Public API 06 Injury/Illness Log Entry 07 Environment Management 08 Detailed Incident Creation**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReportingSourceCode` |  | |  |  | `CHAR(2)` | Incident Reporting Source |
