---
name: I_RESPYMGMTTEAMOWNERAPI
description: "This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value
semantic_en: "This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_RESPYMGMTTEAMOWNERAPI

**This CDS view is used to get information about team owners. A team owner is a business user (business partner associated with an SAP user). This CDS view provides the data to answer the following business questions: What are the teams that a team owner is part of? Who are the team owners of a particular team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMOWNERAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtTeamOwnerType` |  | |  |  | `CHAR(2)` | Team Owner Type |
| `ResponsibilityTeamOwner` |  | |  |  | `CHAR(10)` | Business Partner Number |
