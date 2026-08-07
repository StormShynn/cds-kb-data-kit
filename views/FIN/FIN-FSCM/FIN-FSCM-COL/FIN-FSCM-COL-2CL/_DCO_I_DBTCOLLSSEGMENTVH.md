---
name: _DCO_I_DBTCOLLSSEGMENTVH
description: "This CDS view provides value help for collection segments. It enables users to search and select valid collection segments with their corresponding descriptions in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collection segments are available in the system? What is the description of a specific collection segment? How can I filter and select collection segments efficiently? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DBTCOLLSSEGMENTVH')/$value
semantic_en: "This CDS view provides value help for collection segments. It enables users to search and select valid collection segments with their corresponding descriptions in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collection segments are available in the system? What is the description of a specific collection segment? How can I filter and select collection segments efficiently? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# _DCO_I_DBTCOLLSSEGMENTVH

**This CDS view provides value help for collection segments. It enables users to search and select valid collection segments with their corresponding descriptions in a user-friendly manner. This CDS view provides the data to answer the following business questions: Which collection segments are available in the system? What is the description of a specific collection segment? How can I filter and select collection segments efficiently? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DBTCOLLSSEGMENTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DebtCollectionsSegmentName` |  | |  |  | `CHAR(50)` | Name of Collection Segment |
