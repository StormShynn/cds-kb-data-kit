---
name: I_ENVRMTAMOUNTSOVERVIEW
description: This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value
semantic_en: This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - metadata-only
---
# I_ENVRMTAMOUNTSOVERVIEW

**This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTAMOUNTSOVERVIEW')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSAmountUUID` | `RAW(16)` | NodeID |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Country` | `CHAR(3)` | Country/Region |
| `Region` | `CHAR(3)` | Region |
| `DataUsagePeriodicity` | `CHAR(3)` | Data Period of Data Collection Definition |
| `EHSAmountSourceType` | `CHAR(2)` | Data Source Type |
| `EHSAmountSourceTypeName` | `CHAR(255)` | Text Field in OTR |
| `EHSAmountUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` | `DATS(8)` | Date |
| `EHSLocationName` | `CHAR(60)` | Location |
| `EHSLocationType` | `CHAR(21)` | Location Type |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSSubjectType` | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `DataPeriodName` | `CHAR(60)` | Short Text for Fixed Values |
| `Plant` | `CHAR(4)` | Plant ID |
| `UnitOfMeasureName` | `CHAR(10)` | Unit of Measurement Text (Maximum 10 Characters) |
| `UnitOfMeasure` | `UNIT(3)` | Units of Measurement of Various Types |
| `EHSSubjectName` | `CHAR(1333)` |  |
| `NumberOfRecords` | `INT4(10)` | Whole Number with +/- Sign (-2.147.483.648 .. 2.147.483.647) |
| `EHSAmountValue` | `FLTP(16)` | Amount Value |
