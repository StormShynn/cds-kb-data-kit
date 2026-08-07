---
name: I_SITEREFERENCESITE
description: This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value
semantic_en: This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - plan
  - metadata-only
---
# I_SITEREFERENCESITE

**This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `ReferenceSite` |  | |  |  | `CHAR(4)` | Reference Site |
| `IsReferenceSite` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
