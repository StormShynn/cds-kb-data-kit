---
name: I_INJRYILLNCASESANDHRSWRK
description: "This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value
semantic_en: "This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INJRYILLNCASESANDHRSWRK

**This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `StartDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSWorkedTimeInHours` |  | |  |  | `DEC(22)` |  |
| `EHSHourWorkedPersonCount` |  | |  |  | `DEC(10)` | Number of Workers |
| `NumberOfInjuryIllnessCases` |  | |  |  | `INT4(10)` | Number of Injury/Illness Cases |
| `NumberOfAffectedCalDays` |  | |  |  | `INT4(10)` | Number of Affected Calendar Days |
| `NumberOfCasesWithWorkDaysLost` |  | |  |  | `INT4(10)` |  |
| `NumberOfMedicalTreatmentCases` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPersonsReceivedFirstAid` |  | |  |  | `INT4(10)` |  |
| `NmbrOfCasesWthRstrcdWrkInjry` |  | |  |  | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `NmbrOfCasesWthDaysAwayFrmWork` |  | |  |  | `INT4(10)` | Number of Cases with Days Away from Work |
| `NmbrOfCasesWithTransfOrRstrcn` |  | |  |  | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
