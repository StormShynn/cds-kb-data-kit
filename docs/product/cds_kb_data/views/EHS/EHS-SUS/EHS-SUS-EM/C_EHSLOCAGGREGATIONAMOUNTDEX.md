---
name: C_EHSLOCAGGREGATIONAMOUNTDEX
description: "This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value
semantic_en: "This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Aggregation Data Extractor — CDS view tiêu dùng dựa trên I_EHSAmount."
keywords:
  - "aggregation"
  - "data"
  - "extractor"
  - "amount"
  - "date"
  - "time"
  - "value"
  - "unit"
  - "measure"
  - "warning"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
---
# C_EHSLOCAGGREGATIONAMOUNTDEX

**This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Measure Units of Various Types |
| `EHSAmountHasWarning` |  | |  |  | `CHAR(1)` | Warning |
| `EHSAmountIsFaulty` |  | |  |  | `CHAR(1)` | Faulty Value |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Aggregation Data Extractor'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSDataAmount'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_amns_root',
        role: #MAIN,
        viewElement: ['EHSAmountUUID'],
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
define view entity C_EHSLocAggregationAmountDEX
  as select from           I_EHSAmount          as EHSAmount
    left outer to one join I_LocAggregationRoot as LocAggregationRoot on EHSAmount.EHSAmountSourceUUID = LocAggregationRoot.LocAggregationUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{
  key EHSAmount.EHSAmountUUID,
      EHSAmount.EHSAmountUTCDateTime,
      EHSAmount.EHSAmountValue,
      EHSAmount.UnitOfMeasure,
      @Semantics.booleanIndicator
      EHSAmount.EHSAmountHasWarning,
      @Semantics.booleanIndicator
      EHSAmount.EHSAmountIsFaulty,
      LocAggregationRoot.LocAggregationUUID,
      LocAggregationRoot.LocAggregationID,
      LocAggregationRoot.LocAggregationTitle,
      LocAggregationRoot.LocAggregationName,
      LocAggregationRoot.DataUsagePeriodicity,
      LocAggregationRoot.EHSLocationUUID,
      LocAggregationRoot.EHSSubjectType,
      LocAggregationRoot.EHSSubjectUUID,
      LocAggregationRoot.LocAggregationMigrationSource,

      // Needed for DCL
      _EHSLocationRevisionBasic
}
where
      EHSAmount.EHSAmountSourceType     = '06'
  and EHSAmount.EHSAmountStatus         = '02'
  and EHSAmount.EHSAmountIsPreliminary  = ''
  and EHSAmount.EHSAmountIsMissing      = ''
  and EHSAmount.EHSAmountIsNotAvailable = ''
```
