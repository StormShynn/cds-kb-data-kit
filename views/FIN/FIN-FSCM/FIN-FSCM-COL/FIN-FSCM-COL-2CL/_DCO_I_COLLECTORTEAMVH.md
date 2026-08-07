---
name: _DCO_I_COLLECTORTEAMVH
description: This CDS view provides value help for collections agent teams. It enables users to search and select collections agent groups with their corresponding names in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collections agent groups are available in the system? What is the name of a specific collections agent group? How can I find a collections agent group by its name or ID? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COLLECTORTEAMVH')/$value
semantic_en: This CDS view provides value help for collections agent teams. It enables users to search and select collections agent groups with their corresponding names in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collections agent groups are available in the system? What is the name of a specific collections agent group? How can I find a collections agent group by its name or ID? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_COLLECTORTEAMVH

**This CDS view provides value help for collections agent teams. It enables users to search and select collections agent groups with their corresponding names in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collections agent groups are available in the system? What is the name of a specific collections agent group? How can I find a collections agent group by its name or ID? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_COLLECTORTEAMVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RespyMgmtTeamID` | `NUMC(8)` | Object ID |
| `DCoCollectorGroup` | `CHAR(40)` | Collections Agent Group |
| `DCoCollectorGroupName` | `SSTR(80)` | Name of Collections Agent Group |
