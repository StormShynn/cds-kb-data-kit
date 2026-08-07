---
name: I_SITEBLOCKING
description: This CDS view allows you to access information about site blocking periods and reasons for specific customers. This CDS view provides the data to answer the following business questions: Which site customers are currently blocked? What are the start and end dates of each site blocking period? Why is a site blocked (what is the blocking reason)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKING')/$value
semantic_en: This CDS view allows you to access information about site blocking periods and reasons for specific customers. This CDS view provides the data to answer the following business questions: Which site customers are currently blocked? What are the start and end dates of each site blocking period? Why is a site blocked (what is the blocking reason)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_SITEBLOCKING

**This CDS view allows you to access information about site blocking periods and reasons for specific customers. This CDS view provides the data to answer the following business questions: Which site customers are currently blocked? What are the start and end dates of each site blocking period? Why is a site blocked (what is the blocking reason)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SiteBlockingFromDate` |  | |  |  | `DATS(8)` | Block from |
| `SiteBlockingToDate` |  | |  |  | `DATS(8)` | Block to |
| `SiteBlockingReason` |  | |  |  | `CHAR(2)` | Blocking Reason |
