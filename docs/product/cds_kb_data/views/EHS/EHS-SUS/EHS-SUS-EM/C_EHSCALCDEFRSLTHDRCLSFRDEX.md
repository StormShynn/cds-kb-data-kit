---
name: C_EHSCALCDEFRSLTHDRCLSFRDEX
description: "This CDS view supports the extraction of data from calculation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can calculations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCALCDEFRSLTHDRCLSFRDEX')/$value
semantic_en: "This CDS view supports the extraction of data from calculation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can calculations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Calculation Definition Header Classifier — CDS view tiêu dùng dựa trên I_EHSCalcDefRsltHdrClassifier."
keywords:
  - "ehs"
  - "calculation"
  - "definition"
  - "header"
  - "classifier"
  - "calc"
  - "rslt"
  - "data"
  - "result"
  - "root"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSCALCDEFRSLTHDRCLSFRDEX

**This CDS view supports the extraction of data from calculation activities and the data classifiers assigned to them. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can calculations and the data classifiers assigned to them be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCALCDEFRSLTHDRCLSFRDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalcRsltHdrClassifierUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSDataClassifierUUID` |  | |  |  | `RAW(16)` | Aggregation Classifier Unique Key |
| `EHSDataClassifierID` |  | |  |  | `CHAR(30)` | Data Classifier for Location Aggregation |
| `CalculationResultHeaderUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CalculationRootUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CalculationResultHeaderID` |  | |  |  | `CHAR(20)` | Calculation Definition - Result Header ID |
| `CalculationResultHeaderTitle` |  | |  |  | `CHAR(132)` | Description (Long) |
| `CalculationResultHeaderName` |  | |  |  | `CHAR(30)` | Calculation Variable Name |
| `EHSCalculationSetupName` |  | |  |  | `CHAR(60)` | Calculation Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSCalcMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCALCDEFRSLTHDRCLSFRDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSCALCDEFRSLTHDRCLSFRDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Calculation Definition Header Classifier'
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
  sapObjectNodeType.name: 'EHSCalcDefHeaderClassifier'
}
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehenvd_cdef_acla',
        role: #MAIN,
        viewElement: ['CalcRsltHdrClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_acla_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSDataClassifierUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_cdef_resh',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['CalculationResultHeaderUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_cdef_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['CalculationRootUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
define view entity C_EHSCalcDefRsltHdrClsfrDEX
  as select from           I_EHSCalcDefRsltHdrClassifier  as EHSCalcDefRsltHdrClassifier
    left outer to one join I_EHSDataClassifier            as EHSDataClassifier            on EHSCalcDefRsltHdrClassifier.EHSDataClassifierUUID = EHSDataClassifier.EHSDataClassifierUUID
    left outer to one join I_CalcDefResultHeader          as CalcDefResultHeader          on EHSCalcDefRsltHdrClassifier.CalculationResultHeaderUUID = CalcDefResultHeader.CalculationResultHeaderUUID
    left outer to one join I_EHSCalculationDefinitionRoot as EHSCalculationDefinitionRoot on CalcDefResultHeader.CalculationRootUUID = EHSCalculationDefinitionRoot.CalculationRootUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Calculation Result Header Classifier key'
  key EHSCalcDefRsltHdrClassifier.CalcRsltHdrClassifierUUID,
      @EndUserText.label: 'Data Classifier Key'
      EHSDataClassifier.EHSDataClassifierUUID,
      EHSDataClassifier.EHSDataClassifierID,
      @EndUserText.label: 'Calculation Result Header Key'
      CalcDefResultHeader.CalculationResultHeaderUUID,
      @EndUserText.label: 'Calculation Key'
      EHSCalculationDefinitionRoot.CalculationRootUUID,
      @EndUserText.label: 'Calculation Result Header ID'
      CalcDefResultHeader.CalculationResultHeaderID,
      @EndUserText.label: 'Calculation Result Header Title'
      CalcDefResultHeader.CalculationResultHeaderTitle,
      @EndUserText.label: 'Calculation Result Header Name'
      CalcDefResultHeader.CalculationResultHeaderName,
      EHSCalculationDefinitionRoot.EHSCalculationSetupName,
      CalcDefResultHeader.DataUsagePeriodicity,
      @EndUserText.label: 'Location Key'
      EHSCalculationDefinitionRoot.EHSLocationUUID,
      CalcDefResultHeader.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      CalcDefResultHeader.EHSSubjectUUID,
      @EndUserText.label: 'Migration Source'
      EHSCalculationDefinitionRoot.EHSCalcMigrationSource,

      // Required for DCL
      _EHSLocationRevisionBasic
}
where
  EHSCalcDefRsltHdrClassifier.EHSDataClassifierIsActive = 'X'
```
