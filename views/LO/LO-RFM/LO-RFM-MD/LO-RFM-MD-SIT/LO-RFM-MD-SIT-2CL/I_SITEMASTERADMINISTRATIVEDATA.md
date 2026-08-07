---
name: I_SITEMASTERADMINISTRATIVEDATA
description: This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value
semantic_en: This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:businesspartner
  - component:LO-RFM-MD-SIT-2CL
  - customer
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_SITEMASTERADMINISTRATIVEDATA

**This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
