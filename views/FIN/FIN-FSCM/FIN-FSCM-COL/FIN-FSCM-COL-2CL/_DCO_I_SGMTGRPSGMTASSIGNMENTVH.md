---
name: _DCO_I_SGMTGRPSGMTASSIGNMENTVH
description: This CDS view provides value help for the assignment of collection segments to segment groups. It enables users to search and select valid assignments of segments to segment groups with their corresponding descriptive texts. This CDS view provides the data to answer the following business questions: Which collection segments are assigned to a specific collection segment group? What is the descriptive name of a collection segment? Which segment groups contain a particular collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_SGMTGRPSGMTASSIGNMENTVH')/$value
semantic_en: This CDS view provides value help for the assignment of collection segments to segment groups. It enables users to search and select valid assignments of segments to segment groups with their corresponding descriptive texts. This CDS view provides the data to answer the following business questions: Which collection segments are assigned to a specific collection segment group? What is the descriptive name of a collection segment? Which segment groups contain a particular collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_SGMTGRPSGMTASSIGNMENTVH

**This CDS view provides value help for the assignment of collection segments to segment groups. It enables users to search and select valid assignments of segments to segment groups with their corresponding descriptive texts. This CDS view provides the data to answer the following business questions: Which collection segments are assigned to a specific collection segment group? What is the descriptive name of a collection segment? Which segment groups contain a particular collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_SGMTGRPSGMTASSIGNMENTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DebtCollectionsSegmentGroup` |  | |  |  | `CHAR(10)` | Collection Segment Group |
| `DebtCollectionsSegmentName` |  | |  |  | `CHAR(50)` | Name of Collection Segment |
| `DbtCollsSegmentGroupName` |  | |  |  | `CHAR(50)` | Name of Group of Collection Segments |
