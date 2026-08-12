---
name: C_EHSLOCAGGRGNCLSFRDEX
description: "This CDS view supports the extraction of data from location aggregation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGRGNCLSFRDEX')/$value
semantic_en: "This CDS view supports the extraction of data from location aggregation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Aggregation Classifier — CDS view tiêu dùng dựa trên I_EHSLocAggrgnClassifier."
keywords:
  - "ehs"
  - "location"
  - "aggregation"
  - "classifier"
  - "aggrgn"
  - "data"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSLOCAGGRGNCLSFRDEX

**This CDS view supports the extraction of data from location aggregation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location aggregations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGRGNCLSFRDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AggrgnClassifierUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSDataClassifierUUID` |  | |  |  | `RAW(16)` | Aggregation Classifier Unique Key |
| `EHSDataClassifierID` |  | |  |  | `CHAR(30)` | Data Classifier for Location Aggregation |
| `LocAggregationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `LocAggregationID` |  | |  |  | `CHAR(20)` | Location Aggregation ID |
| `LocAggregationTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `LocAggregationName` |  | |  |  | `CHAR(132)` | Location Aggregation Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Aggregation Definition |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `LocAggregationMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGRGNCLSFRDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGRGNCLSFRDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Location Aggregation Classifier'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@ObjectModel: { 
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'EHSLocAggregationClassifier'
}
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehenvd_adef_acla',
        role: #MAIN,
        viewElement: ['AggrgnClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_acla_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSDataClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_adef_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['LocAggregationUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
define view entity C_EHSLocAggrgnClsfrDEX
  as select from           I_EHSLocAggrgnClassifier as EHSLocAggrgnClassifier
    left outer to one join I_EHSDataClassifier      as EHSDataClassifier  on EHSLocAggrgnClassifier.EHSDataClassifierUUID = EHSDataClassifier.EHSDataClassifierUUID
    left outer to one join I_LocAggregationRoot     as LocAggregationRoot on EHSLocAggrgnClassifier.LocAggregationUUID = LocAggregationRoot.LocAggregationUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Aggregation Classifier Key'
  key EHSLocAggrgnClassifier.AggrgnClassifierUUID,
      @EndUserText.label: 'Data Classifier Key'
      EHSDataClassifier.EHSDataClassifierUUID,
      EHSDataClassifier.EHSDataClassifierID,
      @EndUserText.label: 'Location Aggregation Key'
      LocAggregationRoot.LocAggregationUUID,
      @EndUserText.label: 'Location Aggregation ID'
      LocAggregationRoot.LocAggregationID,
      @EndUserText.label: 'Aggregation Title'
      LocAggregationRoot.LocAggregationTitle,
      LocAggregationRoot.LocAggregationName,
      LocAggregationRoot.DataUsagePeriodicity,
      @EndUserText.label: 'Location Key'
      LocAggregationRoot.EHSLocationUUID,
      LocAggregationRoot.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      LocAggregationRoot.EHSSubjectUUID,
      @EndUserText.label: 'Migration Source'
      LocAggregationRoot.LocAggregationMigrationSource,

      // Required for DCL
      _EHSLocationRevisionBasic
}
where
  EHSLocAggrgnClassifier.EHSDataClassifierIsActive = 'X'
```
