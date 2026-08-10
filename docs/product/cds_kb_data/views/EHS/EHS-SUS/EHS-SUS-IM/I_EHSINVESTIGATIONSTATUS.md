---
name: I_EHSINVESTIGATIONSTATUS
description: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value
semantic_en: "This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_EHSINVESTIGATIONSTATUS

**This CDS view provides you with the supported values for incident investigation status in Environment, Health, and Safety (EHS). You can use this view to understand and work with the different statuses that an investigation can have throughout its lifecycle. This CDS view provides the data to answer the following business questions: What is the current status of an investigation? How many investigations are currently in progress? Which investigations have been closed or canceled? The following investigation status values are available: Value Meaning 01 New 02 In Progress 03 Closed 04 Canceled To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSInvestigationStatus` |  | |  |  | `CHAR(2)` | Investigation Status |
