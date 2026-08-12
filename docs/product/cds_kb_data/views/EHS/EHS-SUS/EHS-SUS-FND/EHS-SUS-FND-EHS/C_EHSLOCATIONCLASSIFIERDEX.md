---
name: C_EHSLOCATIONCLASSIFIERDEX
description: "This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value
semantic_en: "This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Classifier — CDS view tiêu dùng dựa trên I_EHSLocClassifier."
keywords:
  - "ehs"
  - "location"
  - "classifier"
  - "central"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - transaction
---
# C_EHSLOCATIONCLASSIFIERDEX

**This CDS view supports the extraction of basic data for an EHS location revision and the location classifiers assigned to it. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location revision data and the classifiers assigned to it be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocClassifierUUID` | ✓ | |  |  | `RAW(16)` | Location Classifier UUID |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocClassifierID` |  | |  |  | `CHAR(40)` | BCO ID |
| `EHSLocClassifierCentralID` |  | |  |  | `CHAR(32)` | BCO KEY |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `LocationMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONCLASSIFIERDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location Classifier'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ] }
@ObjectModel.sapObjectNodeType.name: 'EHSLocationClassifier'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_loc_clsf',
        role: #MAIN,
        viewElement: ['EHSLocClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehfndd_clsf_rt',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocClassifierID', 'EHSLocClassifierCentralID'],
        tableElement: ['bco_id', 'bco_key']
      }, {
        table: 'ehfndd_loc_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocationUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
@Metadata.allowExtensions: true
define view entity C_EHSLocationClassifierDEX
  as select from           I_EHSLocClassifier  as EHSLocClassifier
    left outer to one join I_EHSClassifierRoot as EHSClassifierRoot on EHSLocClassifier.EHSLocClassifierRefUUID = EHSClassifierRoot.EHSClassifierUUID
    left outer to one join I_EHSLocationRoot   as EHSLocationRoot   on EHSLocClassifier.EHSLocationUUID = EHSLocationRoot.EHSLocationUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Location Classifier Key'
  key EHSLocClassifier.EHSLocClassifierUUID,
      EHSLocationRoot.EHSLocationID,
      @EndUserText.label: 'Location Classifier Identifier'
      EHSClassifierRoot.EHSLocClassifierID,
      @EndUserText.label: 'Location Classifier Character Key'
      EHSClassifierRoot.EHSLocClassifierCentralID,
      @EndUserText.label: 'Location Key'
      EHSLocationRoot.EHSLocationUUID,
      @EndUserText.label: 'Migration Source'
      EHSLocationRoot.LocationMigrationSource,

      // Needed for DCL
      _EHSLocationRevisionBasic
}
```
