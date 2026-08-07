---
name: _DCO_I_BIZPRTNSEGMENTVH
description: "This CDS view provides value help for collection accounts by combining business partner information with collection segment data. It enables users to search and select business partners that are associated with collection segments. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segments? What collection accounts exist for a given business partner? How can I quickly find and select a business partner with their associated collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNSEGMENTVH')/$value
semantic_en: "This CDS view provides value help for collection accounts by combining business partner information with collection segment data. It enables users to search and select business partners that are associated with collection segments. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segments? What collection accounts exist for a given business partner? How can I quickly find and select a business partner with their associated collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_BIZPRTNSEGMENTVH

**This CDS view provides value help for collection accounts by combining business partner information with collection segment data. It enables users to search and select business partners that are associated with collection segments. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segments? What collection accounts exist for a given business partner? How can I quickly find and select a business partner with their associated collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNSEGMENTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(81)` |  |
| `DebtCollectionsSegmentName` |  | |  |  | `CHAR(50)` | Name of Collection Segment |
