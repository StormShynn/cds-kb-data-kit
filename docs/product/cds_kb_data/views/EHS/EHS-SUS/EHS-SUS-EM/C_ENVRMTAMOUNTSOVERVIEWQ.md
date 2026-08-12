---
name: C_ENVRMTAMOUNTSOVERVIEWQ
description: "This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value
semantic_en: "This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Environmental Amounts Overview Query — CDS view tiêu dùng dựa trên I_EnvrmtAmountsOverview."
keywords:
  - "environmental"
  - "amounts"
  - "overview"
  - "query"
  - "amount"
  - "date"
  - "time"
  - "location"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - bo:salesorder
---
# C_ENVRMTAMOUNTSOVERVIEWQ

**This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  |  | `DATS(8)` | Date |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `DataPeriodName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSSubjectName` |  | |  |  | `CHAR(1333)` |  |
| `UnitOfMeasureName` |  | |  |  | `CHAR(10)` | Unit of Measurement Short Text with a 10-Character Maximum |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Whole Number with +/- Sign (-2.147.483.648 .. 2.147.483.647) |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value)*

```abap
@AbapCatalog:
{
    sqlViewName: 'CENVAMNSOVRVIEWQ',
    compiler.compareFilter: true,
    preserveKey:true
}

@EndUserText.label: 'Environmental Amounts Overview Query'
//=====================================================
//Analytics
//=====================================================
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #D,        // < 15 msec
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #MIXED }
// used for the C1 contract                         
@Metadata: {
             ignorePropagatedAnnotations: true
           }                         

@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
                         
// protected by DCL0
define view C_EnvrmtAmountsOverviewQ
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu

  as select from I_EnvrmtAmountsOverview ( P_Language:$parameters.P_Language)
{

       @UI.hidden: true
       @EndUserText.label: 'Amount Key'
  key  EHSAmountUUID,
       @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #TEXT
       @EndUserText.label: 'Amount UTC DateTimeStamp'
       EHSAmountUTCDateTime,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Amount UTC Date'
       EHSAmountUTCDate,

       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Location Key'
       EHSLocationUUID,
       @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Location Name'
       EHSLocationName,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       EHSLocationType,

//       @AnalyticsDetails.query.axis: #FREE
//       @AnalyticsDetails.query.display: #KEY_TEXT
//       EHSLocationTypeText,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       BusinessArea,

//       @AnalyticsDetails.query.axis: #FREE
//       @AnalyticsDetails.query.display: #KEY_TEXT
//       EHSLocationTypeText,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       Region,

//       @AnalyticsDetails.query.axis: #FREE
//       @AnalyticsDetails.query.display: #KEY_TEXT
//       BusinessAreaName,

       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       Country,

//       @AnalyticsDetails.query.axis: #FREE
//       @AnalyticsDetails.query.display: #KEY_TEXT
//       CountryName,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       Plant,
//
//       @AnalyticsDetails.query.axis: #FREE
//       @AnalyticsDetails.query.display: #KEY_TEXT
//       PlantName,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Amount Source Type'
       EHSAmountSourceType,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Data Period Key'
       DataUsagePeriodicity,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Data Period'
       DataPeriodName,


       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       EHSSubjectType,

       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Subject Key'
       EHSSubjectUUID,
       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       @EndUserText.label: 'Subject Name'
       EHSSubjectName,

       @AnalyticsDetails.query.axis: #FREE
       @AnalyticsDetails.query.display: #KEY_TEXT
       UnitOfMeasureName,


       //Measures
       @EndUserText.label: 'Number of Records'
       NumberOfRecords ,
       EHSAmountValue
       //,

}
```
