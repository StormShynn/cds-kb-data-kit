---
name: I_RESPYMGMTTEAMSTATUSTEXTAPI
description: This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value
semantic_en: This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_RESPYMGMTTEAMSTATUSTEXTAPI

**This CDS view is used to get the possible statuses of a team. The status of a team can be either enabled or disabled for business use. This CDS view provides the data to answer the following business question: What are the possible statuses of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMSTATUSTEXTAPI')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RespyMgmtTeamStatus` | `CHAR(2)` | Team Status |
| `Language` | `LANG(1)` | Language Key |
| `RespyMgmtTeamStatusText` | `CHAR(60)` | Short Text for Fixed Values |
