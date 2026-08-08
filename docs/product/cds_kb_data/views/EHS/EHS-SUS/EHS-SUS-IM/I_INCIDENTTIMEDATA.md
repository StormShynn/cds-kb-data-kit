---
name: I_INCIDENTTIMEDATA
description: "This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value
semantic_en: "This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTTIMEDATA

**This CDS view retrieves information about the time period of work absences and restrictions. This CDS view provides the data to answer the following business questions: What's the average length of work absences or restrictions due to incidents in my organization? Which incidents have injured persons with a permanent restriction? Which incidents have injured persons with a permanent absence? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTTIMEDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentTimeDataUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  |  | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `NmbrOfCalendarDaysAwayFromWork` |  | |  |  | `INT4(10)` | Actual Calendar Days of Absence |
| `CaseHasPermanentAbsences` |  | |  |  | `CHAR(1)` | Permanent Absence Exists |
| `NmbrOfRstrcdAndTransfCalDays` |  | |  |  | `INT4(10)` | Actual Calendar Days of Restricted Duty |
| `CaseHasPermanentRestrictions` |  | |  |  | `CHAR(1)` | Permanent Restriction Exists |
