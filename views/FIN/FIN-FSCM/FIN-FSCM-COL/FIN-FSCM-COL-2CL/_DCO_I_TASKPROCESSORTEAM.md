---
name: _DCO_I_TASKPROCESSORTEAM
description: This CDS view retrieves task processor group information for the collection process. It provides access to responsibility management teams that are specifically configured as task processor groups for collection tasks. This CDS view provides the data to answer the following business questions: Which task processor teams are available for assignment to tasks? What is the description of a specific task processor group? How are responsibility management teams mapped to task processor groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASKPROCESSORTEAM')/$value
semantic_en: This CDS view retrieves task processor group information for the collection process. It provides access to responsibility management teams that are specifically configured as task processor groups for collection tasks. This CDS view provides the data to answer the following business questions: Which task processor teams are available for assignment to tasks? What is the description of a specific task processor group? How are responsibility management teams mapped to task processor groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - task
  - metadata-only
---
# _DCO_I_TASKPROCESSORTEAM

**This CDS view retrieves task processor group information for the collection process. It provides access to responsibility management teams that are specifically configured as task processor groups for collection tasks. This CDS view provides the data to answer the following business questions: Which task processor teams are available for assignment to tasks? What is the description of a specific task processor group? How are responsibility management teams mapped to task processor groups? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_TASKPROCESSORTEAM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtTeamID` |  | |  |  | `NUMC(8)` | Object ID |
| `DbtCollsTaskProcessorGroup` |  | |  |  | `CHAR(40)` | Task Processor Group |
| `DbtCollsTaskProcessorGroupName` |  | |  |  | `SSTR(80)` | Task Processor Group (Name) |
