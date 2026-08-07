---
name: C_EHSLOCATIONFORLOCIDQ
description: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value
semantic_en: "This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - metadata-only
---
# C_EHSLOCATIONFORLOCIDQ

**This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | EHS Location - Root UUID |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `NumberOfLocations` |  | |  |  | `INT4(10)` | Number of Locations |
