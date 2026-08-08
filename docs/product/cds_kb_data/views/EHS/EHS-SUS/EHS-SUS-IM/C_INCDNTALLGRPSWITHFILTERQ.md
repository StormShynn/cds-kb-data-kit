---
name: C_INCDNTALLGRPSWITHFILTERQ
description: "This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value
semantic_en: "This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
  - metadata-only
---
# C_INCDNTALLGRPSWITHFILTERQ

**This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentGroupUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentGroupCode` |  | |  |  | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` |  | |  |  | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` |  | |  |  | `CHAR(21)` | Safety Observation Group |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `IncidentMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `IncidentYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `IncidentYearQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `IncidentWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `EHSIncidentGroupSeverity` |  | |  |  | `CHAR(21)` | Severity Level Code |
| `NumberOfIncidentRecords` |  | |  |  | `INT4(10)` | Number of Incident Records |
| `NumberOfNearMissRecords` |  | |  |  | `INT4(10)` | Number of Near Miss Records |
| `NumberOfSftyObservationRecords` |  | |  |  | `INT4(10)` | Number of Safety Observation Records |
