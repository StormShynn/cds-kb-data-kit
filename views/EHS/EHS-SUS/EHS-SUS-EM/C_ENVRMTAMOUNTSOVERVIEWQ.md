---
name: C_ENVRMTAMOUNTSOVERVIEWQ
description: This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value
semantic_en: This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_ENVRMTAMOUNTSOVERVIEWQ

**This CDS view retrieves all approved monthly environmental amounts stored in the system for all types of compliance scenario activities (data collections, calculations, samplings, and location aggregations). This CDS view provides the data to answer the following business questions: What are the environmental amounts produced in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENVRMTAMOUNTSOVERVIEWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountUTCDate` |  | |  |  | `DATS(8)` | Date |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
| `DataPeriodName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSSubjectName` |  | |  |  | `CHAR(1333)` |  |
| `UnitOfMeasureName` |  | |  |  | `CHAR(10)` | Unit of Measurement Short Text with a 10-Character Maximum |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Whole Number with +/- Sign (-2.147.483.648 .. 2.147.483.647) |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
