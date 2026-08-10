---
name: I_EHSLOCATIONWITHFILTER
description: "This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value
semantic_en: "This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - plan
  - metadata-only
---
# I_EHSLOCATIONWITHFILTER

**This CDS view provides a filtered view of EHS (Environment, Health, and Safety) location data based on a specific location ID parameter and the current system date. It retrieves the active revision of an EHS location by filtering on the location ID and ensuring the revision is valid for the current date. You can use it to access detailed information about EHS locations, including location type, status, authorization group, and organizational assignments such as plant, cost center, company code, and business area. This CDS view provides the data to answer the following business questions: What are the details of a specific EHS location? Which locations are assigned to a particular plant or cost center? What is the current status of locations within my authorization scope? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONWITHFILTER')/$value) |

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
