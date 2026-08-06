---
name: C_LEGALDOCUMENTSTAMPQUERY
description: This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - document
  - metadata-only
---
# C_LEGALDOCUMENTSTAMPQUERY

**This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LglCntntMDocumentStampUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` | `CHAR(10)` | Document ID |
| `LglCntntMDocumentStampName` | `CHAR(40)` | Long Text |
| `LegalTransactionHealthName` | `CHAR(40)` | Long Text |
| `LglCntntMEntity` | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LglCntntMMainOrgName` | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMMainOrgTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `TotalNumberOfLegalDocuments` | `INT4(10)` | Total No. of Files |
