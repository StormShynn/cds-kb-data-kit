---
name: I_EHSLOCATIONWITHUUIDFILTER
description: "This CDS view provides a filtered, time-dependent view of EHS (Environment, Health, and Safety) location data based on a specific location UUID parameter. It retrieves the current revision of a single EHS location by filtering on the provided location UUID and the current system date, returning master data attributes such as location type, status, authorization group, and organizational assignments (plant, cost center, company code, business area). This CDS view provides the data to answer the following business questions: Which locations are assigned to a specific plant or cost center? What is the current status of locations within my authorization scope? How are locations distributed across different company codes and business areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHUUIDFILTER')/$value
semantic_en: "This CDS view provides a filtered, time-dependent view of EHS (Environment, Health, and Safety) location data based on a specific location UUID parameter. It retrieves the current revision of a single EHS location by filtering on the provided location UUID and the current system date, returning master data attributes such as location type, status, authorization group, and organizational assignments (plant, cost center, company code, business area). This CDS view provides the data to answer the following business questions: Which locations are assigned to a specific plant or cost center? What is the current status of locations within my authorization scope? How are locations distributed across different company codes and business areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - master-data
  - plan
  - metadata-only
---
# I_EHSLOCATIONWITHUUIDFILTER

**This CDS view provides a filtered, time-dependent view of EHS (Environment, Health, and Safety) location data based on a specific location UUID parameter. It retrieves the current revision of a single EHS location by filtering on the provided location UUID and the current system date, returning master data attributes such as location type, status, authorization group, and organizational assignments (plant, cost center, company code, business area). This CDS view provides the data to answer the following business questions: Which locations are assigned to a specific plant or cost center? What is the current status of locations within my authorization scope? How are locations distributed across different company codes and business areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHUUIDFILTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `HierarchyNodeType` |  | |  |  | `CHAR(15)` |  |
