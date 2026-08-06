---
name: C_LEGALDOCUMENTQUERY
description: This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Legal Document Header – Query
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
# C_LEGALDOCUMENTQUERY

**This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LglCntntMDocumentUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` | `CHAR(10)` | Document ID |
| `LglCntntMDocumentLinkedObject` | `CHAR(10)` | Linked SAP Object |
| `LglCntntMCreatedDate` | `DATS(8)` |  |
| `LglCntntMChangedDate` | `DATS(8)` |  |
| `LglCntntMSignatureDocStatus` | `CHAR(2)` | Signature Document Status |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LglCntntMDocType` | `CHAR(1)` | Document Type |
| `DocumentDescription` | `CHAR(255)` | Name |
| `LegalTransactionTitle` | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMDocContentType` | `CHAR(4)` | Document Content Type |
| `LglCntntMDocContentTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMDocAccessLvl` | `CHAR(4)` | Access Level |
| `LglCntntMDocLowTouchLevelTxt` | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMSgntrDocStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `LegalDocumentVersion` | `NUMC(4)` | Legal Document Version |
| `LglCntntMDocTemplateName` | `CHAR(255)` | Document Template Name |
| `LglCntntMDocTemplateVersion` | `CHAR(10)` | Document Template Version |
| `LglCntntMDocAssemblyStatusText` | `CHAR(40)` | Long Text |
| `LglCntntMDocStatusName` | `CHAR(40)` | Long Text |
| `LegalTransaction` | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LglCntntMEntityName` | `CHAR(81)` |  |
| `LegalTransactionHealthName` | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMEntityTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgName` | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMDocReferenceNumber` | `CHAR(32)` | Document Reference Number |
| `TotalNumberOfLegalDocuments` | `INT4(10)` |  |
| `LegalDocTotalNrOfElectronicSgd` | `INT4(10)` |  |
| `LegalDocTotNrOfAcceptedStatus` | `INT4(10)` |  |
| `LegalDocTotalNumberOfFiles` | `INT4(10)` | Total No. of Files |
| `LegalDocTotNrOfVirtualDocument` | `INT4(10)` |  |
| `LegalDocTotalNmbrOfLowTouchDoc` | `INT4(10)` |  |
| `LglDocTotNrOfWaitElectronicSgd` | `INT4(10)` |  |
| `LegalDocAvgTimeFinalization` | `INT4(10)` |  |
