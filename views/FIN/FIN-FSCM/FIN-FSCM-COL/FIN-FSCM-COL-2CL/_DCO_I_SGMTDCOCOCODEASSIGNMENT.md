---
name: _DCO_I_SGMTDCOCOCODEASSIGNMENT
description: This CDS view provides the assignment of company codes to collection segments. It serves as a basic configuration view that maps which company codes are associated with specific collection segments in the system. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific collection segment? What is the segment assignment for a given company code in collections and dispute automation? How are company codes organized across collection segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_SGMTDCOCOCODEASSIGNMENT')/$value
semantic_en: This CDS view provides the assignment of company codes to collection segments. It serves as a basic configuration view that maps which company codes are associated with specific collection segments in the system. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific collection segment? What is the segment assignment for a given company code in collections and dispute automation? How are company codes organized across collection segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_SGMTDCOCOCODEASSIGNMENT

**This CDS view provides the assignment of company codes to collection segments. It serves as a basic configuration view that maps which company codes are associated with specific collection segments in the system. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific collection segment? What is the segment assignment for a given company code in collections and dispute automation? How are company codes organized across collection segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_SGMTDCOCOCODEASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
