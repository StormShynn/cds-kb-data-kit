---
name: _DCO_I_DISPUTEPRIORITY
description: "This CDS view provides access to dispute priority customizing data. It serves as a basic interface view for retrieving and managing priority classifications used in the dispute resolution process. This CDS view provides the data to answer the following business questions: What priority levels are configured for dispute resolution? Which priority classifications are available for categorizing disputes? How can I retrieve the complete list of dispute priorities with their descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTEPRIORITY')/$value
semantic_en: "This CDS view provides access to dispute priority customizing data. It serves as a basic interface view for retrieving and managing priority classifications used in the dispute resolution process. This CDS view provides the data to answer the following business questions: What priority levels are configured for dispute resolution? Which priority classifications are available for categorizing disputes? How can I retrieve the complete list of dispute priorities with their descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - lob:finance
  - metadata-only
---
# _DCO_I_DISPUTEPRIORITY

**This CDS view provides access to dispute priority customizing data. It serves as a basic interface view for retrieving and managing priority classifications used in the dispute resolution process. This CDS view provides the data to answer the following business questions: What priority levels are configured for dispute resolution? Which priority classifications are available for categorizing disputes? How can I retrieve the complete list of dispute priorities with their descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTEPRIORITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputePriority` |  | |  |  | `NUMC(1)` | Priority of the Dispute |
