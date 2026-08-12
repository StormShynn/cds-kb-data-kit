---
name: C_EHSAMOUNTSQUERY
description: "This CDS view retrieves and aggregates environmental data amounts. It allows filtering and aggregation by date, location, compliance scenario activity and related properties. This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTSQUERY')/$value
semantic_en: "This CDS view retrieves and aggregates environmental data amounts. It allows filtering and aggregation by date, location, compliance scenario activity and related properties. This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Environmental Data - Query — CDS view tiêu dùng dựa trên I_EHSAmountsCube."
keywords:
  - "environmental"
  - "data"
  - "query"
  - "amount"
  - "source"
  - "type"
  - "name"
  - "date"
  - "time"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
---
# C_EHSAMOUNTSQUERY

**This CDS view retrieves and aggregates environmental data amounts. It allows filtering and aggregation by date, location, compliance scenario activity and related properties. This CDS view provides the data to answer the following business questions: What amount of a specific pollutant has been released for a given location over a certain period of time? Which locations in the company produce the most emissions? What is the highest sampled value of a pollutant? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `EHSAmountSourceTypeName` |  | |  |  | `CHAR(255)` | Text Field in OTR |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  |  | `DATS(8)` | Date |
| `EHSAmountUTCYearMonth` |  | |  |  | `NUMC(6)` | Calendar Year and Month |
| `EHSAmountUTCYear` |  | |  |  | `NUMC(4)` | Year |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Measure Units of Various Types |
| `UnitOfMeasureName` |  | |  |  | `CHAR(10)` | Unit of Measurement Short Text with a 10-Character Maximum |
| `UnitOfMeasureDimension` |  | |  |  | `CHAR(6)` | Physical Dimension |
| `UnitOfMeasureDimensionName` |  | |  |  | `CHAR(20)` | Dimension Text |
| `EHSAmountIsReplaced` |  | |  |  | `CHAR(1)` | Substituted Value |
| `EHSAmountDeviationID` |  | |  |  | `CHAR(20)` | Business Object ID |
| `EHSAmountIsPreliminary` |  | |  |  | `CHAR(1)` | Preliminary Result |
| `EHSAmountStatus` |  | |  |  | `CHAR(2)` | Amount Status |
| `EHSAmountStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `EHSComplianceScenActivityID` |  | |  |  | `CHAR(20)` | Data Collection Definition ID |
| `EHSComplianceScenActivityName` |  | |  |  | `CHAR(132)` | Data Collection Definition Name |
| `EHSComplianceScenActivityTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSDataPeriodText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSAmountIssueType` |  | |  |  | `CHAR(2)` | Amount Issue Type Values |
| `EHSAmountIssueTypeText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSMainLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `Country` |  | |  | `[{ entity: { name: 'I_CountryVH', element: 'Country' } }] Country` | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `OrganizationalUnitName` |  | |  |  | `CHAR(25)` | Short Text of Organizational Unit |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifiersText` |  | |  |  | `CHAR(255)` | List of Classifiers (Comma Separated) - short |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectText` |  | |  |  | `CHAR(255)` | Subject |
| `EHSSubjectID` |  | |  |  | `CHAR(20)` | id |
| `CASNumber` |  | |  |  | `CHAR(20)` | CAS Number |
| `EHSDataClassifierID` |  | |  |  | `CHAR(30)` | Data Classifier for Location Aggregation |
| `EHSDataClassifiersText` |  | |  |  | `CHAR(255)` | Data Classifiers |
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | BCO ID |
| `EHSMainLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `NumberOfRecords` |  | |  |  | `INT1(3)` |  |
| `EHSAmountDataSumQuantity` |  | |  | `0` | `INT1(3)` |  |
| `EHSAmountDataMaxQuantity` |  | |  |  | `FLTP(16)` | Amount Value |
| `EHSAmountDataMinQuantity` |  | |  |  | `FLTP(16)` | Amount Value |
| `EHSAmountDataAvgQuantity` |  | |  | `0` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTSQUERY')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'CEHSAMNTSQUERY',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Environmental Data - Query'

@Analytics.query: true
@VDM.viewType: #CONSUMPTION

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType:{ serviceQuality: #D,        // < 15 msec
                         sizeCategory:  #XL,         // < 10.000.000
                         dataClass: #MIXED }

@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations: true

define view C_EHSAmountsQuery
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    @Semantics.businessDate.at: true
    P_Date     : sydatum,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu

  as select from I_EHSAmountsCube( P_Date: $parameters.P_Date,
                                   P_Language: $parameters.P_Language )

{
  // Amount Data
  @AnalyticsDetails.query.axis: #FREE
  EHSAmountUUID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @ObjectModel.text.element: ['EHSAmountSourceTypeName']
  EHSAmountSourceType,
  @Semantics.text: true
  EHSAmountSourceTypeName,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSAmountUTCDateTime,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSAmountUTCDate,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSAmountUTCYearMonth,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #INTERVAL, multipleSelections : false}
  EHSAmountUTCYear,
  @AnalyticsDetails.query.axis: #FREE
  EHSAmountValue,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Semantics.unitOfMeasure: true
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @ObjectModel.text.element: ['UnitOfMeasureName']
  UnitOfMeasure,
  @Semantics.text: true
  UnitOfMeasureName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['UnitOfMeasureDimensionName']
  UnitOfMeasureDimension,
  @Semantics.text: true
  UnitOfMeasureDimensionName,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
  EHSAmountIsReplaced,
  @AnalyticsDetails.query.axis: #FREE
  EHSAmountDeviationID,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false}
  EHSAmountIsPreliminary,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @ObjectModel.text.element: ['EHSAmountStatusName']
  EHSAmountStatus,
  @Semantics.text: true
  EHSAmountStatusName,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #RANGE, multipleSelections : true}
  EHSAmountExternalSource,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSComplianceScenActivityID,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #RANGE, multipleSelections : true}
  @Semantics.text: true
  EHSComplianceScenActivityName,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #RANGE, multipleSelections : true}
  @Semantics.text: true
  EHSComplianceScenActivityTitle,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @ObjectModel.text.element: ['EHSDataPeriodText']
  DataUsagePeriodicity,
  @Semantics.text: true
  EHSDataPeriodText,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @ObjectModel.text.element: ['EHSAmountIssueTypeText']
  EHSAmountIssueType,
  @Semantics.text: true
  EHSAmountIssueTypeText,

  // Location Data
 
  @Semantics.text: true
  EHSMainLocationName,
  @Semantics.text: true
  EHSLocationName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['EHSLocationTypeText']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSLocationType,

  @Semantics.text: true
  EHSLocationTypeText,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['CountryName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  @Consumption.valueHelpDefinition:
  [{ entity: {
        name: 'I_CountryVH',
        element: 'Country' } }]
  Country,
  @Semantics.text: true
  CountryName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['RegionName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  Region,
  @Semantics.text: true
  RegionName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['PlantName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  Plant,
  @Semantics.text: true
  PlantName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['OrganizationalUnitName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  OrganizationalUnit,
  @Semantics.text: true
  OrganizationalUnitName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['ControllingAreaName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  ControllingArea,
  @Semantics.text: true
  ControllingAreaName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['CostCenterName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CostCenter,
  @Semantics.text: true
  CostCenterName,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @ObjectModel.text.element: ['CompanyCodeName']
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CompanyCode,
  @Semantics.text: true
  CompanyCodeName,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true} 
  EHSLocationID,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  EHSLocClassifiersText,

  // Subject Data
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSSubjectType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #RANGE, multipleSelections : true}
  @Semantics.text: true
  EHSSubjectText,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSSubjectID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  CASNumber,

  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSDataClassifierID,
  @AnalyticsDetails.query.axis: #FREE
  @Semantics.text: true
  EHSDataClassifiersText,

  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  EHSLocClassifierID,

  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.display: #TEXT_KEY
  @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true} 
  EHSMainLocationID,

  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfRecords,

  @AnalyticsDetails: {
    exceptionAggregationSteps: [{
      exceptionAggregationBehavior: #SUM,
      exceptionAggregationElements: ['EHSAmountUUID'] }],
    query: {
      axis: #COLUMNS,
      formula: 'EHSAmountDataMinQuantity',
      decimals: 6 } }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Sum of Amounts'
  0 as EHSAmountDataSumQuantity,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 6
  EHSAmountDataMaxQuantity,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 6
  EHSAmountDataMinQuantity,

  @AnalyticsDetails: {
    exceptionAggregationSteps: [{
      exceptionAggregationBehavior: #AVG,
      exceptionAggregationElements: ['EHSAmountUUID'] }],
    query: {
      axis: #COLUMNS,
      formula: 'EHSAmountDataMinQuantity',
      decimals: 6 } }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Average Amount'
  0 as EHSAmountDataAvgQuantity
}
```
