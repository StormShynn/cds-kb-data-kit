---
name: I_EHSDATAPERIOD
description: "This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value
semantic_en: "This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - metadata-only
---
# I_EHSDATAPERIOD

**This CDS view retrieves the time interval (such as monthly or yearly) over which individual amounts of environmental data are collected. This CDS view provides the data to answer the following business questions: Over what time period is each data amount collected? How many different time durations can you specify for collecting individual data amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSDataPeriod` |  | |  |  | `CHAR(3)` | Data Period of Data Collection Definition |
