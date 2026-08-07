---
name: _DCO_I_DISPUTEALLPROCESSSTEP
description: This CDS view provides a unified view of both custom and standard dispute processing step statuses by combining data from dispute processing step status and dispute evaluation processing step status sources. This CDS view provides the data to answer the following business questions: What are all available processing step statuses for disputes, including both custom and standard configurations? Which processing step statuses can be used across different dispute resolution scenarios? How can I retrieve a complete list of processing step statuses with their text descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTEALLPROCESSSTEP')/$value
semantic_en: This CDS view provides a unified view of both custom and standard dispute processing step statuses by combining data from dispute processing step status and dispute evaluation processing step status sources. This CDS view provides the data to answer the following business questions: What are all available processing step statuses for disputes, including both custom and standard configurations? Which processing step statuses can be used across different dispute resolution scenarios? How can I retrieve a complete list of processing step statuses with their text descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_DISPUTEALLPROCESSSTEP

**This CDS view provides a unified view of both custom and standard dispute processing step statuses by combining data from dispute processing step status and dispute evaluation processing step status sources. This CDS view provides the data to answer the following business questions: What are all available processing step statuses for disputes, including both custom and standard configurations? Which processing step statuses can be used across different dispute resolution scenarios? How can I retrieve a complete list of processing step statuses with their text descriptions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DISPUTEALLPROCESSSTEP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeProcessStepStatus` |  | |  |  | `CHAR(3)` | Processing Step Status |
