---
name: I_SITECATEGORY
description: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value
semantic_en: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_SITECATEGORY

**This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCategory` |  | |  |  | `CHAR(1)` | Site Category |
