---
name: C_INCDNTRATESWITHFLTRQRY
description: Workplace Safety Metrics - Query
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value
semantic_en: Workplace Safety Metrics - Query
tags:
  - EHS
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
  - metadata-only
---
# C_INCDNTRATESWITHFLTRQRY

**Workplace Safety Metrics - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value) |

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
| `NumberOfInjuryIllnessCases` | `INT4(10)` | Number of Injury/Illness Cases |
| `NumberOfAffectedCalDays` | `INT4(10)` | Number of Affected Calendar Days |
| `EHSHourWorkedPersonCount` | `DEC(10)` | Number of Workers |
| `NumberOfCasesWithWorkDaysLost` | `INT4(10)` |  |
| `NumberOfMedicalTreatmentCases` | `INT4(10)` |  |
| `NmbrOfPersonsReceivedFirstAid` | `INT4(10)` |  |
| `NmbrOfCasesWthRstrcdWrkInjry` | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `NmbrOfCasesWthDaysAwayFrmWork` | `INT4(10)` | Number of Cases with Days Away from Work |
| `NmbrOfCasesWithTransfOrRstrcn` | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `AvgNmbrOfCasesWithWorkDaysLost` | `DEC(20)` |  |
| `AvgNmbrOfMedicalTreatmentCases` | `DEC(20)` |  |
| `AvgNmbrOfPersonsRcvdFirstAid` | `DEC(20)` |  |
| `AvgNmbrOfCaseWthRstrcdWrkInjry` | `DEC(20)` |  |
| `NmbrOfRstrcdAndTransfCalDays` | `DECF(34)` |  |
| `MaxNmbrOfRstrcdAndTransfCalDay` | `DECF(34)` |  |
| `LostTimeInjuryFrequencyRate` | `DECF(34)` |  |
| `MaxLostTimeInjuryFrequencyRate` | `DECF(34)` |  |
| `LostTimeInjuryIncidenceRate` | `DECF(34)` |  |
| `MaxLostTimeInjuryIncidenceRate` | `DECF(34)` |  |
| `TotRecordableInjryFrqcyRate` | `DECF(34)` |  |
| `MaxRecordableInjryFrqcyRate` | `DECF(34)` |  |
| `InjuryFrequencyRate` | `DECF(34)` |  |
| `MaxInjuryFrequencyRate` | `DECF(34)` |  |
| `TotalRecordableFrequencyRate` | `DECF(34)` |  |
| `MaxRecordableFrequencyRate` | `DECF(34)` |  |
