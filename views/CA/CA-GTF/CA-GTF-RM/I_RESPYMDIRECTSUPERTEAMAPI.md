---
name: I_RESPYMDIRECTSUPERTEAMAPI
description: "This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value
semantic_en: "This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_RESPYMDIRECTSUPERTEAMAPI

**This CDS view is used to get information about the direct super team of a team. A super team is a higher-level team of an existing team. This CDS view provides the data to answer the following business questions: What is the super team of a team? What are the sub teams of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMDIRECTSUPERTEAMAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtParentGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
