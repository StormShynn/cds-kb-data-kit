---
name: I_INCIDENT
description: This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value
semantic_en: This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Incident Header
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENT

**This CDS view retrieves header data from incident records. This CDS view provides the data to answer the following business questions: How many incidents, near misses, or safety observations are reported in my organization? How many of the reported incidents are closed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentMigrationSourceText` |  | |  |  | `CHAR(60)` | Incident Migration Source |
| `EHSDeviationHasJoinCondition` |  | |  |  | `CHAR(1)` |  |
| `IncidentReportingSourceCode` |  | |  |  | `CHAR(2)` | Incident Reporting Source |
