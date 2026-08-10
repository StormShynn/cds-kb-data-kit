---
name: I_INCIDENTSTATUS
description: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value
semantic_en: "This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTSTATUS

**This CDS view provides you with the supported values for incident status. You can use it to identify and filter incidents based on their current processing state. This CDS view provides the data to answer the following business questions: What is the current status of a specific incident? How many incidents are currently in process versus closed? Which incidents have been reopened after closure? The following incident status values are available: Value Meaning 00 Void 01 New 02 In Process 03 Closed 04 Reopened To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
