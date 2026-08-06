---
name: C_INCDNTALLGRPSWITHFILTERQ
description: All Incident Groups Query
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value
semantic_en: All Incident Groups Query
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

**All Incident Groups Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `IncidentID` | `CHAR(20)` | Incident ID |
| `IncidentUUID` | `RAW(16)` | Incident UUID |
| `IncidentGroupUUID` | `RAW(16)` | NodeID |
| `IncidentGroupCode` | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` | `CHAR(21)` | Safety Observation Group |
| `IncidentTitle` | `CHAR(80)` | Incident Title |
| `IncidentCategory` | `CHAR(3)` | Incident Category |
| `IncidentStatus` | `CHAR(2)` | Incident Status |
| `IncidentDate` | `DATS(8)` | Incident Start Date |
| `IncidentYear` | `NUMC(4)` | Calendar Year |
| `IncidentMonth` | `NUMC(2)` | Calendar Month |
| `IncidentYearMonth` | `NUMC(6)` | Year Month |
| `IncidentYearQuarter` | `NUMC(1)` | Calendar Quarter |
| `IncidentWeekDay` | `NUMC(1)` | Week Day |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `Plant` | `CHAR(4)` | Plant ID |
| `Country` | `CHAR(3)` | Country/Region of Incident |
| `Region` | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` | `CHAR(21)` | Major Root Cause |
| `EHSIncidentGroupSeverity` | `CHAR(21)` | Severity Level Code |
| `NumberOfIncidentRecords` | `INT4(10)` | Number of Incident Records |
| `NumberOfNearMissRecords` | `INT4(10)` | Number of Near Miss Records |
| `NumberOfSftyObservationRecords` | `INT4(10)` | Number of Safety Observation Records |
