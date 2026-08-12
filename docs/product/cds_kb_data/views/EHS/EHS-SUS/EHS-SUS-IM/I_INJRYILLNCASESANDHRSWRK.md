---
name: I_INJRYILLNCASESANDHRSWRK
description: "This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value
semantic_en: "This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workplace Safety Metrics - Cube — CDS view giao diện dựa trên P_InjryIllnCasesAndHrsWrk."
keywords:
  - "workplace"
  - "safety"
  - "metrics"
  - "cube"
  - "location"
  - "start"
  - "date"
  - "calendar"
  - "year"
  - "month"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_INJRYILLNCASESANDHRSWRK

**This CDS view retrieves the months where both employee hours worked and incidents are recorded for a specific location (and its sublocations). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `StartDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  | `_CalendarMonth._Text[ 1:Language = $session.system_language ].CalendarMonthName` | `CHAR(60)` | Short Text for Fixed Values |
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
| `_EHSLocation` | | ✓ | | | | |
| `_Calendar` | | ✓ | | | | |
| `_IncidentBasicInfo` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_IncidentBasicInfo` | `I_IncidentBasicInfo` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INJRYILLNCASESANDHRSWRK')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINJRWRKHOURSCU'
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Workplace Safety Metrics - Cube'
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}

@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view I_InjryIllnCasesAndHrsWrk
  as select from P_InjryIllnCasesAndHrsWrk
  association [0..*] to I_EHSLocation       as _EHSLocation       on $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID
  association [1..1] to I_CalendarDate      as _Calendar          on _Calendar.CalendarDate = $session.system_date // take current year
  association [0..1] to I_CalendarMonth     as _CalendarMonth     on $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [0..*] to I_IncidentBasicInfo as _IncidentBasicInfo on $projection.EHSLocationUUID = _IncidentBasicInfo.EHSLocationUUID

{
  @ObjectModel.foreignKey.association: '_EHSLocation'
  @Consumption.valueHelpDefinition: [{ entity: { name: 'C_EHSExternalLocationVH', element: 'EHSLocationUUID' }}]
  EHSLocationUUID,
  EHSLocationID,
  StartDate,
  CalendarYear,
  CalendarMonth,
  _CalendarMonth._Text[ 1:Language = $session.system_language ].CalendarMonthName as CalendarMonthName,
  @DefaultAggregation: #SUM
  EHSWorkedTimeInHours,
  @DefaultAggregation: #SUM
  EHSHourWorkedPersonCount,
  @DefaultAggregation: #SUM
  NumberOfInjuryIllnessCases,
  @DefaultAggregation: #SUM
  NumberOfAffectedCalDays,
  @DefaultAggregation: #SUM
  @EndUserText.label: 'LTI'
  //This field reffers to LTI (Lost Time Injury) rate
  NumberOfCasesWithWorkDaysLost,
  @DefaultAggregation: #SUM
  @EndUserText.label: 'MTI'
  //This field reffers to MTI (Medeical Tratment Injury) rate
  NumberOfMedicalTreatmentCases,
  @DefaultAggregation: #SUM
  @EndUserText.label: 'FAI'
  //This field reffers to FAI (Incidents where fisrt aid had to be provided to the injured people) rate
  NmbrOfPersonsReceivedFirstAid,
  @DefaultAggregation: #SUM
  @EndUserText.label: 'RWI'
  //This field reffers to RWI (Restricted Work Injury) rate
  NmbrOfCasesWthRstrcdWrkInjry,
  @DefaultAggregation: #SUM
  NmbrOfCasesWthDaysAwayFrmWork,
  @DefaultAggregation: #SUM
  NmbrOfCasesWithTransfOrRstrcn,

  _Calendar,
  _EHSLocation,
  _IncidentBasicInfo

}
```
