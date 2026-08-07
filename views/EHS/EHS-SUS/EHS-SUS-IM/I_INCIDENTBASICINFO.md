---
name: I_INCIDENTBASICINFO
description: This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value
semantic_en: This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Basic Information of an Incident
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - plan
  - metadata-only
---
# I_INCIDENTBASICINFO

**This CDS view retrieves the basic information of incident records. This CDS view provides the data to answer the following business questions: In which plant of my organization is the highest number of reported incidents? How many? In which country/region is the highest number of reported incidents in my organization? How many? How many incidents have been reported throughout the years? How many of the reported incidents have a restricted access? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTBASICINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentBasicInfoUUID` |  | |  |  | `RAW(16)` | Incident Basic Information UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `IncidentLocationType` |  | |  |  | `CHAR(21)` | Location Classification |
| `IncidentUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentUTCEndDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentTimeIsUnknown` |  | |  |  | `CHAR(1)` | Time Unknown for Incident Start |
| `IncidentTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Incident Start |
| `IncidentEndTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Incident End |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentHasAccessRestriction` |  | |  |  | `CHAR(1)` | Restricted Access to Incident Record |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentInjuryIllnLogType` |  | |  |  | `CHAR(50)` | Injury/Illness Log Entry Type |
| `EHSStreetHouseNumberText` |  | |  |  | `CHAR(60)` | Street / House Number of Incident |
| `EHSPostalCodeText` |  | |  |  | `CHAR(10)` | Postal Code of Incident |
| `EHSCityText` |  | |  |  | `CHAR(40)` | City of Incident |
| `IncidentDescOfEventUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentReportedDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `IncidentReportedTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Initial Incident Report |
| `EHSLocationID` |  | |  |  | `CHAR(20)` |  |
| `IncidentLatitudeValue` |  | |  |  | `DEC(15)` | Geographic Latitude |
| `IncidentLongitudeValue` |  | |  |  | `DEC(15)` | Geographic Longitude |
| `IncidentIsReportedAnonymously` |  | |  |  | `CHAR(1)` | Report Incident Anonymously |
| `IncidentLocationDescUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentImmdActionDescUUID` |  | |  |  | `RAW(16)` | NodeID |
