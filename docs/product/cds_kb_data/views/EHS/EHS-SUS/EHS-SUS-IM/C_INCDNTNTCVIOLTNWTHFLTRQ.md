---
name: C_INCDNTNTCVIOLTNWTHFLTRQ
description: "This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value
semantic_en: "This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Notice Of Violation Case Query — CDS view tiêu dùng dựa trên Incident Notice Of Violation Case Query."
keywords:
  - "incident"
  - "notice"
  - "violation"
  - "case"
  - "query"
  - "title"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-IM
---
# C_INCDNTNTCVIOLTNWTHFLTRQ

**This CDS view retrieves the number of incident records for a given location (and its sublocations) that involve a notice of violation. The data can be aggregated by attributes, such as category, type, and source. This CDS view provides the data to answer the following business questions: How many incidents were reported at my location in the past year that involved a notice of violation? How many notices of violation of each category were issued to my organization for a given location? How many violations were reported by a particular source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentTitle` |  | |  |  | `CHAR(80)` | Incident Title |
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
| `NoticeOfViolationCategory` |  | |  |  | `CHAR(21)` | Violation Category |
| `NoticeOfViolationType` |  | |  |  | `CHAR(21)` | Violation Type |
| `NoticeOfViolationSource` |  | |  |  | `CHAR(21)` | Violation Source |
| `ProposedPenaltyAmount` |  | |  |  | `CURR(15)` | Proposed Penalty Amount |
| `ProposedPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Proposed Penalty |
| `FinalPenaltyAmount` |  | |  |  | `CURR(15)` | Final Penalty Amount |
| `FinalPenaltyCurrency` |  | |  |  | `CUKY(5)` | Currency for Final Penalty |
| `NumberOfNoticeOfViolationCases` |  | |  |  | `INT4(10)` | Number of Notice Of Violation Cases |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INCDNTNTCVIOLTNWTHFLTRQ')/$value)*

```abap
@EndUserText.label: 'Incident Notice Of Violation Case Query'
@OData.publish: true
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}

define transient view entity C_IncdntNtcVioltnWthFltrQ
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

  as projection on I_IncidentNtcOfVioltnCaseCube
{

  @Consumption.hidden: true
  NoticeOfViolationUUID,

  IncidentID,
  @Consumption.hidden: true
  IncidentUUID,
  IncidentTitle,
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

  NoticeOfViolationCategory,
  NoticeOfViolationType,
  NoticeOfViolationSource,
  
  @Semantics.amount.currencyCode: 'ProposedPenaltyCurrency'
  ProposedPenaltyAmount,
  
  ProposedPenaltyCurrency,
  
  @Semantics.amount.currencyCode: 'FinalPenaltyCurrency'
  FinalPenaltyAmount,
  
  FinalPenaltyCurrency,
  
  NumberOfNoticeOfViolationCases
}
// We want only category Incident
where
  IncidentCategory = '001'
```
