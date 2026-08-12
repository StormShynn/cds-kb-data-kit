---
name: C_EHSDATACOLLECTIONDEX
description: "This CDS view supports the extraction of data for data collection activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONDEX')/$value
semantic_en: "This CDS view supports the extraction of data for data collection activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Data Collection — CDS view tiêu dùng dựa trên I_DataCollectionRootBasic."
keywords:
  - "ehs"
  - "data"
  - "collection"
  - "name"
  - "input"
  - "method"
  - "amount"
  - "external"
  - "source"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
  - bo:salesorganization
---
# C_EHSDATACOLLECTIONDEX

**This CDS view supports the extraction of data for data collection activities. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can data collections be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DataCollectionUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `DataCollectionID` |  | |  |  | `CHAR(20)` | Data Collection Definition ID |
| `DataCollectionName` |  | |  |  | `CHAR(132)` | Data Collection Definition Name |
| `DataCollectionInputMethod` |  | |  |  | `CHAR(2)` | Data Collection Input Method |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Measure Units of Various Types |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `DataCollectionTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `DataCollectionMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSDATACOLLECTIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Data Collection'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSDataCollection'
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled:true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Analytics.internalName:#LOCAL
define view entity C_EHSDataCollectionDEX
  as select from I_DataCollectionRootBasic
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Data Collection Key'
  key DataCollectionUUID,
      DataCollectionID,
      DataCollectionName,
      DataCollectionInputMethod,
      EHSAmountExternalSource,
      DataUsagePeriodicity,
      UnitOfMeasure,
      EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      EHSSubjectUUID,
      @EndUserText.label: 'Data Collection Title'
      DataCollectionTitle,
      @EndUserText.label: 'Migration Source'
      DataCollectionMigrationSource,
      EHSLocationUUID,

      // Required for DCL
      _EHSLocationRevisionBasic
}
```
