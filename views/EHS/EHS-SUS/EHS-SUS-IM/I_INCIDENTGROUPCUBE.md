---
name: I_INCIDENTGROUPCUBE
description: Incident Group - Cube
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value
semantic_en: Incident Group - Cube
tags:
  - EHS
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTGROUPCUBE

**Incident Group - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `IncidentUUID` | `RAW(16)` | Incident UUID |
| `IncidentGroupUUID` | `RAW(16)` | NodeID |
| `IncidentGroupCode` | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` | `CHAR(21)` | Safety Observation Group |
| `IncidentID` | `CHAR(20)` | Incident ID |
| `IncidentTitle` | `CHAR(80)` | Incident Title |
| `IncidentStatus` | `CHAR(2)` | Incident Status |
| `IncidentCategory` | `CHAR(3)` | Incident Category |
| `IncidentMajorRootCause` | `CHAR(21)` | Major Root Cause |
| `Country` | `CHAR(3)` | Country/Region of Incident |
| `Region` | `CHAR(3)` | Region of Incident |
| `Plant` | `CHAR(4)` | Plant ID |
| `OrganizationalUnit` | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `IncidentDate` | `DATS(8)` | Incident Start Date |
| `IncidentMonth` | `NUMC(2)` | Calendar Month |
| `IncidentYear` | `NUMC(4)` | Calendar Year |
| `IncidentYearQuarter` | `NUMC(1)` | Calendar Quarter |
| `IncidentYearMonth` | `NUMC(6)` | Year Month |
| `IncidentWeekDay` | `NUMC(1)` | Week Day |
| `IncidentTimeIsUnknown` | `CHAR(1)` | Time Unknown for Incident Start |
| `IncidentTime` | `TIMS(6)` | Field of type TIMS |
| `EHSIncidentGroupSeverity` | `CHAR(21)` | Severity Level Code |
| `IncidentHour` | `CHAR(2)` | Hour |
| `IncidentInjuryIllnLogType` | `CHAR(50)` | Injury/Illness Log Entry Type |
| `IncidentHasAccessRestriction` | `CHAR(1)` | Restricted Access to Incident Record |
| `NumberOfIncidentRecords` | `INT4(10)` | Number of Incident Records |
| `NumberOfNearMissRecords` | `INT4(10)` | Number of Near Miss Records |
| `NumberOfSftyObservationRecords` | `INT4(10)` | Number of Safety Observation Records |
| `NumberOfInjryIllnLogRecords` | `INT4(10)` | Number of Injury/Illness Log Records |
