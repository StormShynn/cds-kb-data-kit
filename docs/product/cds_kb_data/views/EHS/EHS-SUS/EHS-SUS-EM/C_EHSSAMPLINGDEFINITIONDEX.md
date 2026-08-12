---
name: C_EHSSAMPLINGDEFINITIONDEX
description: "This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value
semantic_en: "This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Sampling Definition — CDS view tiêu dùng dựa trên I_SamplingDefinitionRoot."
keywords:
  - "ehs"
  - "sampling"
  - "definition"
  - "name"
  - "data"
  - "usage"
  - "periodicity"
  - "migration"
  - "source"
  - "subject"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
---
# C_EHSSAMPLINGDEFINITIONDEX

**This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingDefinitionUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `SamplingDefinitionName` |  | |  |  | `CHAR(132)` | Sampling Definition Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` |  |
| `SamplingDefMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |
| `_EHSDataPeriod` | | ✓ | | | | |
| `_EHSLocation` | | ✓ | | | | |
| `_SamplingHeader` | | ✓ | | | | |
| `_SamplingReference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Sampling Definition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}

@ObjectModel:{
supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET ],
sapObjectNodeType.name: 'EHSSamplingDefinition',
representativeKey: 'SamplingDefinitionUUID'
}

@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [
      {
        table: 'ehenvd_sdef_root',
        role: #MAIN,
        viewElement: ['SamplingDefinitionUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
@Metadata.allowExtensions:true
define view entity C_EHSSamplingDefinitionDEX
  as select from I_SamplingDefinitionRoot
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
      @EndUserText.label: 'Sampling Definition Key'
  key SamplingDefinitionUUID,
      @EndUserText.label: 'Sampling Definition Name'
      SamplingDefinitionName,
      @EndUserText.label: 'Data Period'
      DataUsagePeriodicity,
      @EndUserText.label: 'Migration Source'
      SamplingDefMigrationSource,
      EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      EHSSubjectUUID,
      @EndUserText.label: 'Location Key'
      EHSLocationUUID,

      /* Associations */
      _EHSDataPeriod,
      _EHSLocation,
      _SamplingHeader,
      _SamplingReference,

      // Required for DCL
      _EHSLocationRevisionBasic
}
```
