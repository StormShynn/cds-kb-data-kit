---
name: _DCO_I_ACCOUNT
description: This CDS view provides access to collection accounts within the collections and dispute automation process. It represents accounts associated with business partners that are subject to collection activities. This CDS view provides the data to answer the following business questions: Which collection accounts exist for a specific business partner? What is the current collection segment assigned to an account? What are the receivable items associated with a collection account? What was the last activity performed on a collection account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNT')/$value
semantic_en: This CDS view provides access to collection accounts within the collections and dispute automation process. It represents accounts associated with business partners that are subject to collection activities. This CDS view provides the data to answer the following business questions: Which collection accounts exist for a specific business partner? What is the current collection segment assigned to an account? What are the receivable items associated with a collection account? What was the last activity performed on a collection account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_ACCOUNT

**This CDS view provides access to collection accounts within the collections and dispute automation process. It represents accounts associated with business partners that are subject to collection activities. This CDS view provides the data to answer the following business questions: Which collection accounts exist for a specific business partner? What is the current collection segment assigned to an account? What are the receivable items associated with a collection account? What was the last activity performed on a collection account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
