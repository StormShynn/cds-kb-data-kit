---
name: C_INCDNTALLGRPSWITHFILTERQ
description: "This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value
semantic_en: "This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "All Incident Groups Query — CDS view tiêu dùng dựa trên All Incident Groups Query."
keywords:
  - "all"
  - "incident"
  - "groups"
  - "query"
  - "group"
  - "code"
  - "near"
  - "miss"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
---
# C_INCDNTALLGRPSWITHFILTERQ

**This CDS view retrieves the number incident records per incident, near miss, or safety observation group for a specific location and its sublocations. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location and its sublocations last year? How many near misses were reported at my location that happened because of unsafe conditions? How many safety observations were reported at my location that involved unsafe use of equipment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentGroupUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentGroupCode` |  | |  |  | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` |  | |  |  | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` |  | |  |  | `CHAR(21)` | Safety Observation Group |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `IncidentDate` |  | |  |  | `DATS(8)` | Incident Start Date |
| `IncidentYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `IncidentMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `IncidentYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `IncidentYearQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `IncidentWeekDay` |  | |  |  | `NUMC(1)` | Week Day |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentMajorRootCause` |  | |  |  | `CHAR(21)` | Major Root Cause |
| `EHSIncidentGroupSeverity` |  | |  |  | `CHAR(21)` | Severity Level Code |
| `NumberOfIncidentRecords` |  | |  |  | `INT4(10)` | Number of Incident Records |
| `NumberOfNearMissRecords` |  | |  |  | `INT4(10)` | Number of Near Miss Records |
| `NumberOfSftyObservationRecords` |  | |  |  | `INT4(10)` | Number of Safety Observation Records |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTALLGRPSWITHFILTERQ')/$value)*

```abap
@EndUserText.label: 'All Incident Groups Query'
@OData.publish: true
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}

define transient view entity C_IncdntAllGrpsWithFilterQ
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
    @Consumption.derivation: {
       lookupEntity: 'C_EHSMyLocation',
       resultElement: 'EHSLocationID' }
       
    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSLocationIdentifierVH', entity.element: 'EHSLocationID' }]
    P_EHSLocID            : ehfnd_loc_id

  as projection on I_IncidentGroupCube
{

  IncidentID,
  @Consumption.hidden: true
  IncidentUUID,

  @Consumption.hidden: true
  IncidentGroupUUID,

  @AnalyticsDetails.query.axis: #COLUMNS
  IncidentGroupCode,
  @AnalyticsDetails.query.axis: #COLUMNS
  NearMissGroupCode,
  @EndUserText.label: 'Safety Observation Group'
  @AnalyticsDetails.query.axis: #COLUMNS
  SafetyObservationGroupCode,

  IncidentTitle,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Category'
  IncidentCategory,
  IncidentStatus,

  @Semantics.calendar.dayOfYear: true
  IncidentDate,

  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.year: true
  IncidentYear,
  
  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.month: true
  IncidentMonth,
  
  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.yearMonth: true
  IncidentYearMonth,
  
  @ObjectModel.value.derivedFrom: ['IncidentDate']
  @Semantics.calendar.yearQuarter: true
  IncidentYearQuarter,
  
  IncidentWeekDay,
  
  @EndUserText.label: 'Location ID'
  EHSLocationID,

  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.hierarchyInitialLevel: 1
  @Consumption.filter.hidden: true
  @Consumption.filter: {
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    hierarchyBinding : [ { type: #PARAMETER, value: 'P_EHSLocHierarchyUUID'} ]
  }
  @Consumption.derivation: {
   lookupEntity: 'I_EHSLocationWithFilter',
   resultHierarchyNode:{nodeTypeElement: 'HierarchyNodeType' },
   binding: [{
     targetParameter: 'P_EHSLocID',
     type: #PARAMETER,
     value: 'P_EHSLocID'
   }]
  }

  EHSLocationUUID,

  @AnalyticsDetails.query.axis: #ROWS
  Plant,
  Country,
  Region,

  IncidentMajorRootCause,

  EHSIncidentGroupSeverity,

  NumberOfIncidentRecords,
  NumberOfNearMissRecords,
  NumberOfSftyObservationRecords
 
} where IncidentCategory <> '004'
```
