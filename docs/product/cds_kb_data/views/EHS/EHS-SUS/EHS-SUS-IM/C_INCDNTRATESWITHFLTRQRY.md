---
name: C_INCDNTRATESWITHFLTRQRY
description: "This CDS view retrieves various workplace safety metrics for a specific location (and its sublocations) as well as their monthly maximum and average values. This CDS view provides the data to answer the following business questions: How has the total recordable incidence rate (TRIR) of my organization developed over time? What was the maximum monthly DART Rate for the previous year? How many injuries were there that resulted in time away from work? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value
semantic_en: "This CDS view retrieves various workplace safety metrics for a specific location (and its sublocations) as well as their monthly maximum and average values. This CDS view provides the data to answer the following business questions: How has the total recordable incidence rate (TRIR) of my organization developed over time? What was the maximum monthly DART Rate for the previous year? How many injuries were there that resulted in time away from work? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workplace Safety Metrics - Query — CDS view tiêu dùng dựa trên Workplace Safety Metrics - Query."
keywords:
  - "workplace"
  - "safety"
  - "metrics"
  - "query"
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
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
---
# C_INCDNTRATESWITHFLTRQRY

**This CDS view retrieves various workplace safety metrics for a specific location (and its sublocations) as well as their monthly maximum and average values. This CDS view provides the data to answer the following business questions: How has the total recordable incidence rate (TRIR) of my organization developed over time? What was the maximum monthly DART Rate for the previous year? How many injuries were there that resulted in time away from work? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value) |

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
| `NumberOfInjuryIllnessCases` |  | |  |  | `INT4(10)` | Number of Injury/Illness Cases |
| `NumberOfAffectedCalDays` |  | |  |  | `INT4(10)` | Number of Affected Calendar Days |
| `EHSHourWorkedPersonCount` |  | |  |  | `DEC(10)` | Number of Workers |
| `NumberOfCasesWithWorkDaysLost` |  | |  |  | `INT4(10)` |  |
| `NumberOfMedicalTreatmentCases` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPersonsReceivedFirstAid` |  | |  |  | `INT4(10)` |  |
| `NmbrOfCasesWthRstrcdWrkInjry` |  | |  |  | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `NmbrOfCasesWthDaysAwayFrmWork` |  | |  |  | `INT4(10)` | Number of Cases with Days Away from Work |
| `NmbrOfCasesWithTransfOrRstrcn` |  | |  |  | `INT4(10)` | Number of Cases with Job Restriction or Transfer |
| `AvgNmbrOfCasesWithWorkDaysLost` |  | |  | `cast(NumberOfCasesWithWorkDaysLost as abap.dec(20,2))` | `DEC(20)` |  |
| `AvgNmbrOfMedicalTreatmentCases` |  | |  | `cast(NumberOfMedicalTreatmentCases as abap.dec(20,2))` | `DEC(20)` |  |
| `AvgNmbrOfPersonsRcvdFirstAid` |  | |  | `cast(NmbrOfPersonsReceivedFirstAid as abap.dec(20,2))` | `DEC(20)` |  |
| `AvgNmbrOfCaseWthRstrcdWrkInjry` |  | |  | `cast(NmbrOfCasesWthRstrcdWrkInjry as abap.dec(20,2))` | `DEC(20)` |  |
| `Restricted` |  | |  |  |  |  |
| `NmbrOfRstrcdAndTransfCalDays` |  | |  | `or Transferred' (($projection.nmbrofcaseswithtransforrstrcn + $projection.nmbrofcaseswthdaysawayfrmwork) * 200000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `MaxNmbrOfRstrcdAndTransfCalDay` |  | |  | `(($projection.nmbrofcaseswithtransforrstrcn + $projection.nmbrofcaseswthdaysawayfrmwork) * 200000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `LostTimeInjuryFrequencyRate` |  | |  | `($projection.numberofcaseswithworkdayslost * 1000000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `MaxLostTimeInjuryFrequencyRate` |  | |  | `($projection.numberofcaseswithworkdayslost * 1000000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `LostTimeInjuryIncidenceRate` |  | |  | `($projection.numberofcaseswithworkdayslost * 100) / $projection.ehshourworkedpersoncount` | `DECF(34)` |  |
| `MaxLostTimeInjuryIncidenceRate` |  | |  | `($projection.numberofcaseswithworkdayslost * 100) / $projection.ehshourworkedpersoncount` | `DECF(34)` |  |
| `TotRecordableInjryFrqcyRate` |  | |  | `(($projection.numberofcaseswithworkdayslost + $projection.numberofmedicaltreatmentcases + $projection.nmbrofcaseswthrstrcdwrkinjry) * 1000000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `MaxRecordableInjryFrqcyRate` |  | |  | `(($projection.numberofcaseswithworkdayslost + $projection.numberofmedicaltreatmentcases + $projection.nmbrofcaseswthrstrcdwrkinjry) * 100000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `InjuryFrequencyRate` |  | |  | `($projection.numberofinjuryillnesscases * 1000000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `MaxInjuryFrequencyRate` |  | |  | `($projection.numberofinjuryillnesscases * 1000000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `TotalRecordableFrequencyRate` |  | |  | `($projection.numberofinjuryillnesscases * 200000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |
| `MaxRecordableFrequencyRate` |  | |  | `($projection.numberofinjuryillnesscases * 200000) / $projection.ehsworkedtimeinhours` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTRATESWITHFLTRQRY')/$value)*

```abap
@EndUserText.label: 'Workplace Safety Metrics - Query'
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED
@OData.publish: true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
define transient view entity C_IncdntRatesWithFltrQry
  provider contract analytical_query
  with parameters
    // without this annotation when accessing the Analytics from different clients the metadata of service breaks
    // due to some buffering of hierarchy keys (not in our logic -> the analytical engine works in this way)
    // and we need to clear the cache everytime, because the app is throwing an exception
    // it is working together with hierarchyBinding : [ { type: #PARAMETER, value: 'p_hierkey'} ]
    @Consumption.hidden: true
    @Consumption.derivation: {
        lookupEntity : 'I_EHSLtstLocHierarchyRevision',
        resultElement : 'EHSLocHierarchyUUID'
      }
    P_EHSLocHierarchyUUID : ehfnd_conf_key,

    @EndUserText.label: 'Location'
    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSExternalLocationVH', entity.element: 'EHSLocationUUID' }]
    P_EHSLocUUID            : ehfnd_location_uuid_ref
    
  as projection on I_InjryIllnCasesAndHrsWrk
{
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.hierarchyInitialLevel: 1

  @Consumption.filter: {
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    hierarchyBinding : [ { type: #PARAMETER, value: 'P_EHSLocHierarchyUUID'} ]
  }
  // Define the current user's my location as default value for the location filter
  @Consumption.derivation: {
  lookupEntity: 'I_EHSLocationWithUUIDFilter',
  resultHierarchyNode:{nodeTypeElement: 'HierarchyNodeType' },
  binding: [{
  targetParameter: 'P_EHSLocUUID',
  type: #PARAMETER,
  value: 'P_EHSLocUUID'
  }]
  }
  EHSLocationUUID,
  EHSLocationID,
  StartDate,
  CalendarYear,
  CalendarMonth,
  CalendarMonthName,
  EHSWorkedTimeInHours,
  NumberOfInjuryIllnessCases,
  NumberOfAffectedCalDays,
  EHSHourWorkedPersonCount,
  NumberOfCasesWithWorkDaysLost,
  NumberOfMedicalTreatmentCases,
  NmbrOfPersonsReceivedFirstAid,
  NmbrOfCasesWthRstrcdWrkInjry,
  NmbrOfCasesWthDaysAwayFrmWork,
  NmbrOfCasesWithTransfOrRstrcn,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #AVG, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  cast(NumberOfCasesWithWorkDaysLost as abap.dec(20,2))                                                                                                                            as AvgNmbrOfCasesWithWorkDaysLost,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #AVG, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  cast(NumberOfMedicalTreatmentCases as abap.dec(20,2))                                                                                                                            as AvgNmbrOfMedicalTreatmentCases,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #AVG, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  cast(NmbrOfPersonsReceivedFirstAid as abap.dec(20,2))                                                                                                                            as AvgNmbrOfPersonsRcvdFirstAid,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #AVG, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  cast(NmbrOfCasesWthRstrcdWrkInjry as abap.dec(20,2))                                                                                                                             as AvgNmbrOfCaseWthRstrcdWrkInjry,

  @Aggregation.default: #FORMULA
  @EndUserText.label: 'DART Rate'
  @EndUserText.quickInfo: 'Days Away, Restricted, or Transferred'
  (($projection.nmbrofcaseswithtransforrstrcn + $projection.nmbrofcaseswthdaysawayfrmwork) * 200000) / $projection.ehsworkedtimeinhours                                            as NmbrOfRstrcdAndTransfCalDays,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  (($projection.nmbrofcaseswithtransforrstrcn + $projection.nmbrofcaseswthdaysawayfrmwork) * 200000) / $projection.ehsworkedtimeinhours                                            as MaxNmbrOfRstrcdAndTransfCalDay,

  //  LTIFR = (LTIs x Standardized Rate) / (Hours Worked)
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'LTIFR'
  @EndUserText.quickInfo: 'Lost time injury frequency rate'
  ($projection.numberofcaseswithworkdayslost * 1000000) / $projection.ehsworkedtimeinhours                                                                                          as LostTimeInjuryFrequencyRate,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  ($projection.numberofcaseswithworkdayslost * 1000000) / $projection.ehsworkedtimeinhours                                                                                          as MaxLostTimeInjuryFrequencyRate,

  //  LTIIR = (LTIs x 100) / (Number of Employees)
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'LTIIR'
  @EndUserText.quickInfo: 'Lost time injury incidence rate'
  ($projection.numberofcaseswithworkdayslost * 100) / $projection.ehshourworkedpersoncount                                                                                         as LostTimeInjuryIncidenceRate,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  ($projection.numberofcaseswithworkdayslost * 100) / $projection.ehshourworkedpersoncount                                                                                         as MaxLostTimeInjuryIncidenceRate,

  //  TRIFR = {(LTI + MTI + RWI) x 1,000,000} / Hours Worked
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'TRIFR'
  @EndUserText.quickInfo: 'Total recordable injury frequency rate '
  (($projection.numberofcaseswithworkdayslost + $projection.numberofmedicaltreatmentcases + $projection.nmbrofcaseswthrstrcdwrkinjry) * 1000000) / $projection.ehsworkedtimeinhours as TotRecordableInjryFrqcyRate,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  (($projection.numberofcaseswithworkdayslost + $projection.numberofmedicaltreatmentcases + $projection.nmbrofcaseswthrstrcdwrkinjry) * 100000) / $projection.ehsworkedtimeinhours as MaxRecordableInjryFrqcyRate,

  //  AIFR = (Number of injuries in the period × 1,000,000) / Number of hours worked in the period
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'AIFR'
  @EndUserText.quickInfo: 'Injury frequency rate'
  ($projection.numberofinjuryillnesscases * 1000000) / $projection.ehsworkedtimeinhours                                                                                            as InjuryFrequencyRate,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  ($projection.numberofinjuryillnesscases * 1000000) / $projection.ehsworkedtimeinhours                                                                                            as MaxInjuryFrequencyRate,


  //  ТRIR = (Total recordable cases × 200,000) / Employee hours worked 
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'TRIR'
  @EndUserText.quickInfo: 'Total Recordable Incidence Rate'
  ($projection.numberofinjuryillnesscases * 200000) / $projection.ehsworkedtimeinhours                                                                                    as TotalRecordableFrequencyRate,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [{ exceptionAggregationBehavior: #MAX, exceptionAggregationElements: [ 'CalendarYear' , 'CalendarMonth' ] }]
  ($projection.numberofinjuryillnesscases * 200000) / $projection.ehsworkedtimeinhours                                                                               as MaxRecordableFrequencyRate
}
```
