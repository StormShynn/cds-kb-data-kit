---
name: C_INCDNTRELWTHFILTERQRY
description: "This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value
semantic_en: "This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
  - metadata-only
---
# C_INCDNTRELWTHFILTERQRY

**This CDS view retrieves the number of incident records for a specific location and its sublocations that involve an environmental release. The data can be aggregated by attributes, such as the type and size of release. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved an environmental release? How many releases were reported of each type? How many large releases have there been at my location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRELWTHFILTERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReleaseUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `IncidentMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `IncidentYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `IncidentYearQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `IncidentWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `IncidentTime` |  | |  |  | `TIMS(6)` | Field of type TIMS |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `IncidentReleaseType` |  | |  |  | `CHAR(21)` | Release Type |
| `IncidentReleaseSize` |  | |  |  | `CHAR(21)` | Release Size |
| `NumberOfReleaseCases` |  | |  |  | `INT4(10)` | Number of Release-Related Cases |
