---
name: C_EHSLOCATIONAGGREGATIONDEX
description: "This CDS view supports the extraction of data for location aggregation activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONAGGREGATIONDEX')/$value
semantic_en: "This CDS view supports the extraction of data for location aggregation activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Aggregation — CDS view tiêu dùng dựa trên I_LocAggregationRoot."
keywords:
  - "ehs"
  - "location"
  - "aggregation"
  - "migration"
  - "source"
  - "name"
  - "data"
  - "usage"
  - "periodicity"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSLOCATIONAGGREGATIONDEX

**This CDS view supports the extraction of data for location aggregation activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONAGGREGATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LocAggregationUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `LocAggregationID` |  | |  |  | `CHAR(20)` | Location Aggregation ID |
| `LocAggregationMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `LocAggregationName` |  | |  |  | `CHAR(132)` | Location Aggregation Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Aggregation Definition |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Measure Units of Various Types |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `LocAggregationTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONAGGREGATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONAGGREGATIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Location Aggregation'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSLocationAggregation'
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Analytics.internalName:#LOCAL
define view entity C_EHSLocationAggregationDEX
  as select from I_LocAggregationRoot
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Location Aggregation Key'
  key LocAggregationUUID,
      @EndUserText.label: 'Location Aggregation ID'
      LocAggregationID,
      @EndUserText.label: 'Migration Source'
      LocAggregationMigrationSource,
      LocAggregationName,
      DataUsagePeriodicity,
      @EndUserText.label: 'Location Key'
      EHSLocationUUID,
      UnitOfMeasure,
      EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      EHSSubjectUUID,
      @EndUserText.label: 'Aggregation Title'
      LocAggregationTitle,

      // Required for DCL
      _EHSLocationRevisionBasic
}
```
