---
name: I_INCIDENTRESTRICTEDDUTY
description: "This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value
semantic_en: "This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTRESTRICTEDDUTY

**This CDS view retrieves information about work absences and restrictions of an injured person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system led to a work absence or restriction of the injured person? For what period? How many of the restrictions are also job transfers? Which incidents have an injured person with a permanent work absence or restriction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTRESTRICTEDDUTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RestrictedDutyUUID` |  | |  |  | `RAW(16)` | Restricted Duty UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  |  | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `RestrictedDutyCategory` |  | |  |  | `CHAR(3)` | Category of Restricted Duty |
| `RestrictedDutyStartDate` |  | |  |  | `DATS(8)` | Start Date of Restricted Duty |
| `RestrictedDutyEndDate` |  | |  |  | `DATS(8)` | Actual End Date of Restricted Duty |
| `RestrictedDutyEstimatedEndDate` |  | |  |  | `DATS(8)` | Estimated End Date of Restricted Duty |
| `RestrictedDutyInWorkDays` |  | |  |  | `INT4(10)` | Actual Workdays of Restricted Duty |
| `RestrictedDutyInCalendarDays` |  | |  |  | `INT4(10)` | Actual Calendar Days of Restricted Duty |
| `RestrictedDutyIsJobTransfer` |  | |  |  | `CHAR(1)` | Job Transfer |
| `RestrictedDutyIsPermanent` |  | |  |  | `CHAR(1)` | Permanent Restricted Duty |
