---
name: C_EHSOVRDTSKTRNDFORLOCIDQ
description: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Overdue Task Instance Trend - Query — CDS view tiêu dùng dựa trên EHS Overdue Task Instance Trend - Query."
keywords:
  - "ehs"
  - "overdue"
  - "task"
  - "instance"
  - "trend"
  - "query"
  - "location"
  - "date"
  - "start"
  - "instce"
  - "completion"
  - "priority"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - bo:salesorder
---
# C_EHSOVRDTSKTRNDFORLOCIDQ

**This CDS view retrieves the number of overdue compliance tasks over a specific period based on their location and task type. This CDS view provides the data to answer the following business questions: How many compliance tasks are currently overdue at each location? What is the total number of overdue compliance tasks within a specific period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Task Definition Priority Description |
| `EHSSemanticObjectName` |  | |  |  | `CHAR(60)` | Task Origin |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value)*

```abap
@EndUserText.label: 'EHS Overdue Task Instance Trend - Query'
@VDM.viewType: #CONSUMPTION

@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}

define transient view entity C_EHSOvrdTskTrndForLocIDQ
  provider contract analytical_query
  with parameters

    @Consumption.hidden: true
    @Consumption.derivation: {
        lookupEntity : 'I_EHSLtstLocHierarchyRevision',
        resultElement : 'EHSLocHierarchyUUID'
      }
    P_EHSLocHierarchyUUID : ehfnd_conf_key,

    @EndUserText.label: 'Location'
    @Consumption.valueHelpDefinition: [{ entity.name: 'C_EHSLocationIdentifierVH', entity.element: 'EHSLocationID' }]
    P_EHSLocID            : ehfnd_loc_id,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date                : sydatum,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language            : sylangu

  as projection on I_EHSOvrdTskTrndCube
                   ( P_Date: $parameters.P_Date, P_Language: $parameters.P_Language )
{
  //Location

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
  // Task Instance

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSTaskDueDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSTaskStartDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSTaskInstceCompletionDate,

//  // Task Definition

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSTaskPriority,

  @Semantics.text: true
  EHSTaskPriorityName,

  @Semantics.text: true
  EHSSemanticObjectName,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CalendarMonth,
  
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CalendarYear,
  
  @EndUserText.label: 'Number of Records'
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfRecords

}
```
