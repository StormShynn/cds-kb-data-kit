---
name: I_SITEVALNANDINVTRYMANAGEMENT
description: "This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value
semantic_en: "This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:businesspartner
  - component:LO-RFM-MD-SIT-2CL
  - customer
  - interface-view
  - inventory
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_SITEVALNANDINVTRYMANAGEMENT

**This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
