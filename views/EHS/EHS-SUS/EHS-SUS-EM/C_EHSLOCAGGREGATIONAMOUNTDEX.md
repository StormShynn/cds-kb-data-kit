---
name: C_EHSLOCAGGREGATIONAMOUNTDEX
description: This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value
semantic_en: This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - transaction
  - metadata-only
---
# C_EHSLOCAGGREGATIONAMOUNTDEX

**This CDS view supports the extraction of data related to location aggregation activities, including details about the aggregated amounts for the location and the activity itself. The extracted data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can aggregated environmental amounts be extracted for analysis by an external system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCAGGREGATIONAMOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` |  | |  |  | `RAW(16)` | NodeID |
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
