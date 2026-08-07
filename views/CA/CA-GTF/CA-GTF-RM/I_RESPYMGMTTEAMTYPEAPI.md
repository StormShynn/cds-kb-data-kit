---
name: I_RESPYMGMTTEAMTYPEAPI
description: This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value
semantic_en: This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:businesspartner
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_RESPYMGMTTEAMTYPEAPI

**This CDS view is used to get a list of available team types. A team type represents a business subprocess and inherits its functions and responsibility definitions from its associated standard team category. Operational Purchasing and Strategic Purchasing are examples of team types in the Procurement team category. This CDS view provides the data to answer the following business questions: What are the available team types that can be used to create a team? What is the team category associated with the team type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMTYPEAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtTeamType` |  | |  |  | `CHAR(30)` | Team Type |
| `RespyMgmtTeamCategory` |  | |  |  | `CHAR(30)` | Team Category |
