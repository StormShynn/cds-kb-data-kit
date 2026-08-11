---
name: C_EHSSAMPLINGHEADERDEX
description: "This CDS view supports the extraction of sampling analyte data in a sampling definition. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can sampling analytes be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGHEADERDEX')/$value
semantic_en: "This CDS view supports the extraction of sampling analyte data in a sampling definition. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can sampling analytes be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Sampling Definition Header — CDS view tiêu dùng dựa trên I_SamplingHeader."
keywords:
  - "ehs"
  - "sampling"
  - "definition"
  - "header"
  - "title"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSSAMPLINGHEADERDEX

**This CDS view supports the extraction of sampling analyte data in a sampling definition. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution.. This CDS view provides the data to answer the following business questions: How can sampling analytes be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGHEADERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingHeaderUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `SamplingDefinitionUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSSamplingHeaderID` |  | |  |  | `CHAR(20)` | Header ID of Sampling Definition |
| `EHSSamplingHeaderTitle` |  | |  | `SamplingHeaderTitle` | `CHAR(132)` | Sampling Definition Name |
| `SamplingDefinitionName` |  | |  |  | `CHAR(132)` | Sampling Definition Name |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `SamplingAnalyteType` |  | |  |  | `CHAR(2)` | Subject Type |
| `SamplingAnalyteUUID` |  | |  | `cast( SamplingHeader.SamplingAnalyteUUID as ehfnd_sbj_key_ref preserving type )` | `RAW(16)` | Collective Subject Search |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `SamplingDefMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGHEADERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGHEADERDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'EHS Sampling Definition Header'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSSamplingDefinitionHeader'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehenvd_sdef_head',
        role: #MAIN,
        viewElement: ['SamplingHeaderUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehenvd_sdef_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['SamplingDefinitionUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
define view entity C_EHSSamplingHeaderDEX
  as select from           I_SamplingHeader         as SamplingHeader
    left outer to one join I_SamplingDefinitionRoot as SamplingDefinitionRoot on SamplingHeader.SamplingDefinitionUUID = SamplingDefinitionRoot.SamplingDefinitionUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Sampling Header Key'
  key SamplingHeader.SamplingHeaderUUID,
      @EndUserText.label: 'Sampling Definition Key'
      SamplingDefinitionRoot.SamplingDefinitionUUID,
      @EndUserText.label: 'Sampling Definition Header ID'
      SamplingHeader.EHSSamplingHeaderID,
      @EndUserText.label: 'Sampling Definition Title'
      SamplingHeader.SamplingHeaderTitle                                                             as EHSSamplingHeaderTitle,
      @EndUserText.label: 'Sampling Definition Name'
      SamplingDefinitionRoot.SamplingDefinitionName,
      @EndUserText.label: 'Location Key'
      SamplingDefinitionRoot.EHSLocationUUID,
      SamplingHeader.SamplingAnalyteType,
      @EndUserText.label: 'Subject Identifier'
      cast( SamplingHeader.SamplingAnalyteUUID as ehfnd_sbj_key_ref preserving type )                as SamplingAnalyteUUID,
      SamplingDefinitionRoot.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      SamplingDefinitionRoot.EHSSubjectUUID,
      @EndUserText.label: 'Migration Source'
      SamplingDefinitionRoot.SamplingDefMigrationSource,

      // Required for DCL
      _EHSLocationRevisionBasic
}
```
