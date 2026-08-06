---
name: I_RESPYMGMTTEAMMEMBERFUNCAPI
description: This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value
semantic_en: This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - task
  - metadata-only
---
# I_RESPYMGMTTEAMMEMBERFUNCAPI

**This CDS view is used to get information about the functions assigned to team members. Each team member is responsible for performing certain tasks. These tasks are represented as team member functions. A team can have zero or more team members and each team member can have one or more functions. This CDS view provides the data to answer the following business questions: What are the functions assigned to a team member? To which team members are a particular function assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMMEMBERFUNCAPI')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RespyMgmtGlobalTeamID` | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `ResponsibilityTeamMember` | `CHAR(10)` | Business Partner Number |
| `RespyMgmtTeamMemberType` | `CHAR(2)` | Team Member Type |
| `RespyMgmtFunction` | `CHAR(10)` | Function |
