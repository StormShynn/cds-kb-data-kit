---
name: I_INJRYILLNCASESANDHRSWRK
description: Workplace Safety Metrics - Cube
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value
semantic_en: Workplace Safety Metrics - Cube
tags:
  - EHS
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INJRYILLNCASESANDHRSWRK

**Workplace Safety Metrics - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `StartDate` | `DATS(8)` | Incident Start Date |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` | `CHAR(60)` | Short Text for Fixed Values |
| `EHSWorkedTimeInHours` | `DEC(22)` |  |
| `EHSHourWorkedPersonCount` | `DEC(10)` | Number of Workers |
| `NumberOfInjuryIllnessCases` | `INT4(10)` | Number of Injury/Illness Cases |
| `NumberOfAffectedCalDays` | `INT4(10)` | Number of Affected Calendar Days |
| `NumberOfCasesWithWorkDaysLost` | `INT4(10)` |  |
| `NumberOfMedicalTreatmentCases` | `INT4(10)` |  |
| `NmbrOfPersonsReceivedFirstAid` | `INT4(10)` |  |
| `NmbrOfCasesWthRstrcdWrkInjry` | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `NmbrOfCasesWthDaysAwayFrmWork` | `INT4(10)` | Number of Cases with Days Away from Work |
| `NmbrOfCasesWithTransfOrRstrcn` | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
