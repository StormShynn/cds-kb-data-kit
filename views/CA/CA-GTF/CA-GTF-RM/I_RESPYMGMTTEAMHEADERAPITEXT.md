---
name: I_RESPYMGMTTEAMHEADERAPITEXT
description: This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value
semantic_en: This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_RESPYMGMTTEAMHEADERAPITEXT

**This CDS view is used to get information about team headers. Team headers contain information about team, for example, name of the team, status, etc. This CDS view provides the data to answer the following business questions: What is the global ID of a team? What is the name of a team? Is the team enabled or disabled for business use? What is the team type of a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMHEADERAPITEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RespyMgmtGlobalTeamID` | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `Language` | `LANG(1)` | Language Key |
| `RespyMgmtTeamDescription` | `CHAR(50)` | Team Description |
