---
name: _DCO_I_BIZPRTNDUPLICATE
description: This CDS view provides access to business partner duplicate records in collections and dispute automation. It enables the identification and management of duplicate business partner entries by linking the collection business partner with potential duplicate business partners in the system. This CDS view provides the data to answer the following business questions: Which business partners have been identified as potential duplicates in collections and dispute automation? When were duplicate business partner records created and by whom? What is the relationship between a collection business partner and its identified duplicates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNDUPLICATE')/$value
semantic_en: This CDS view provides access to business partner duplicate records in collections and dispute automation. It enables the identification and management of duplicate business partner entries by linking the collection business partner with potential duplicate business partners in the system. This CDS view provides the data to answer the following business questions: Which business partners have been identified as potential duplicates in collections and dispute automation? When were duplicate business partner records created and by whom? What is the relationship between a collection business partner and its identified duplicates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_BIZPRTNDUPLICATE

**This CDS view provides access to business partner duplicate records in collections and dispute automation. It enables the identification and management of duplicate business partner entries by linking the collection business partner with potential duplicate business partners in the system. This CDS view provides the data to answer the following business questions: Which business partners have been identified as potential duplicates in collections and dispute automation? When were duplicate business partner records created and by whom? What is the relationship between a collection business partner and its identified duplicates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BIZPRTNDUPLICATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoBPDuplicateUUID` |  | |  |  | `RAW(16)` | Business Partner Duplicate UUID |
| `DCoBusinessPartnerDuplicate` |  | |  |  | `CHAR(10)` | Business Partner Duplicate |
| `DCoBPDuplicateCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoBPDuplicateCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoBPDplLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoBPDplLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
