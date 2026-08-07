---
name: C_EHSSAMPLINGDEFINITIONDEX
description: This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value
semantic_en: This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_EHSSAMPLINGDEFINITIONDEX

**This CDS view retrieves the main details of sampling definitions set up in the system, such as their name, period, subject type, or migration source (if applicable). This CDS view provides the data to answer the following business questions: What's the period and subject type of a particular sampling definition? What's the migration source of a particular sampling definition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingDefinitionUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SamplingDefinitionName` |  | |  |  | `CHAR(132)` | Sampling Definition Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` |  |
| `SamplingDefMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
