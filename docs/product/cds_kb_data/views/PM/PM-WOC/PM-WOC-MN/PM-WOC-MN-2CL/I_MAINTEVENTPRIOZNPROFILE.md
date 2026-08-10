---
name: I_MAINTEVENTPRIOZNPROFILE
description: "This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value
semantic_en: "This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - notification
  - order
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_MAINTEVENTPRIOZNPROFILE

**This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEvtPrioritizationProfile` |  | |  |  | `CHAR(10)` | Prioritization Profile ID |
| `ConfigDeprecationCode` |  | |  |  | `CHAR(1)` | Deprecated Entries |
