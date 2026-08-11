---
name: C_EHSDATACOLLECTIONCLSFRDEX
description: "This CDS view supports the extraction of data from data collection activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections and classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONCLSFRDEX')/$value
semantic_en: "This CDS view supports the extraction of data from data collection activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections and classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Data Collection Classifier — CDS view tiêu dùng dựa trên I_EHSDataCollectionClassifier."
keywords:
  - "ehs"
  - "data"
  - "collection"
  - "classifier"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSDATACOLLECTIONCLSFRDEX

**This CDS view supports the extraction of data from data collection activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections and classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONCLSFRDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DataCollectionClassifierUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSDataClassifierUUID` |  | |  |  | `RAW(16)` | Aggregation Classifier Unique Key |
| `EHSDataClassifierID` |  | |  |  | `CHAR(30)` | Data Classifier for Location Aggregation |
| `DataCollectionUUID` |  | |  |  | `RAW(16)` | NodeID |
| `DataCollectionID` |  | |  |  | `CHAR(20)` | Data Collection Definition ID |
| `DataCollectionTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `DataCollectionName` |  | |  |  | `CHAR(132)` | Data Collection Definition Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `DataCollectionMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONCLSFRDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONCLSFRDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Data Collection Classifier'
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
  sapObjectNodeType.name: 'EHSDataCollectionClassifier'
}
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehenvd_mdef_acla',
        role: #MAIN,
        viewElement: ['DataCollectionClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_acla_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSDataClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_mdef_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['DataCollectionUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
define view entity C_EHSDataCollectionClsfrDEX
  as select from           I_EHSDataCollectionClassifier as EHSDataCollectionClassifier
    left outer to one join I_EHSDataClassifier           as EHSDataClassifier       on EHSDataCollectionClassifier.EHSDataClassifierUUID = EHSDataClassifier.EHSDataClassifierUUID
    left outer to one join I_DataCollectionRootBasic     as DataCollectionRootBasic on EHSDataCollectionClassifier.DataCollectionUUID = DataCollectionRootBasic.DataCollectionUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Data Collection Classifier Key'
  key EHSDataCollectionClassifier.DataCollectionClassifierUUID,
      @EndUserText.label: 'Data Classifier Key'
      EHSDataClassifier.EHSDataClassifierUUID,
      EHSDataClassifier.EHSDataClassifierID,
      @EndUserText.label: 'Data Collection Key'
      DataCollectionRootBasic.DataCollectionUUID,
      DataCollectionRootBasic.DataCollectionID,
      @EndUserText.label: 'Data Collection Title'
      DataCollectionRootBasic.DataCollectionTitle,
      DataCollectionRootBasic.DataCollectionName,
      DataCollectionRootBasic.DataUsagePeriodicity,
      DataCollectionRootBasic.EHSLocationUUID,
      DataCollectionRootBasic.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      DataCollectionRootBasic.EHSSubjectUUID,
      DataCollectionRootBasic.EHSAmountExternalSource,
      @EndUserText.label: 'Migration Source'
      DataCollectionRootBasic.DataCollectionMigrationSource,

      // Required for DCL
      _EHSLocationRevisionBasic
}
where
  EHSDataCollectionClassifier.EHSDataClassifierIsActive = 'X'
```
