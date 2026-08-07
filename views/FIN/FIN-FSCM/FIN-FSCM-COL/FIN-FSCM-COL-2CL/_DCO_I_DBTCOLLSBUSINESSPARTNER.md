---
name: _DCO_I_DBTCOLLSBUSINESSPARTNER
description: "This CDS view provides access to business partner data in the context of collections and dispute automation. It serves as a basic interface view for managing and retrieving business partner information relevant to collection processes. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segment groups? What is the business partner category for collection purposes? Who created or last modified a business partner record in the collection context? Which business partners have associated segments, company codes, or branches in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DBTCOLLSBUSINESSPARTNER')/$value
semantic_en: "This CDS view provides access to business partner data in the context of collections and dispute automation. It serves as a basic interface view for managing and retrieving business partner information relevant to collection processes. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segment groups? What is the business partner category for collection purposes? Who created or last modified a business partner record in the collection context? Which business partners have associated segments, company codes, or branches in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Business Partner in Collections and Dispute Automation"
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
# _DCO_I_DBTCOLLSBUSINESSPARTNER

**This CDS view provides access to business partner data in the context of collections and dispute automation. It serves as a basic interface view for managing and retrieving business partner information relevant to collection processes. This CDS view provides the data to answer the following business questions: Which business partners are assigned to specific collection segment groups? What is the business partner category for collection purposes? Who created or last modified a business partner record in the collection context? Which business partners have associated segments, company codes, or branches in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DBTCOLLSBUSINESSPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsSegmentGroup` |  | |  |  | `CHAR(10)` | Collection Segment Group |
| `DCoBusinessPartnerCategory` |  | |  |  | `CHAR(3)` | Business Partner Category for Collection Process |
| `DCoBusinessPartnerCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `DCoBizPrtnCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoBizPrtnLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoBizPrtnLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
