---
name: C_LEGALDOCUMENTCUBE
description: This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value
semantic_en: This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Legal Document Header - Analytics Cube
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
# C_LEGALDOCUMENTCUBE

**This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMDocumentLinkedObject` |  | |  |  | `CHAR(10)` | Linked SAP Object |
| `LglCntntMDocumentLinkedObjKey` |  | |  |  | `CHAR(32)` | UUID Char32 |
| `LglCntntMDocumentIsTopVersion` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMCreatedDate` |  | |  |  | `DATS(8)` |  |
| `LglCntntMChangedDate` |  | |  |  | `DATS(8)` |  |
| `LglCntntMSignatureDocStatus` |  | |  |  | `CHAR(2)` | Signature Document Status |
| `LglCntntMGovLaw` |  | |  |  | `CHAR(7)` | Governing Law |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LglCntntMDocContentTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMDocType` |  | |  |  | `CHAR(1)` | Document Type |
| `LglCntntMDocContentType` |  | |  |  | `CHAR(4)` | Document Content Type |
| `LglCntntMDocAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMSgntrDocStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LegalDocumentVersion` |  | |  |  | `NUMC(4)` | Legal Document Version |
| `LglCntntMDocTemplateName` |  | |  |  | `CHAR(255)` | Document Template Name |
| `LglCntntMDocTemplateVersion` |  | |  |  | `CHAR(10)` | Document Template Version |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `LglCntntMLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglCntntMDocLowTouchLevelTxt` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglTransAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LegalTransactionHealth` |  | |  |  | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMEntityName` |  | |  |  | `CHAR(81)` |  |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMEntityType` |  | |  |  | `CHAR(4)` | Entity Type |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMVirtualDocVersKey` |  | |  |  | `CHAR(36)` | Virtual Document Version Key |
| `LglCntntMDocAssemblyStatusText` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMDocAssemblyStatus` |  | |  |  | `CHAR(20)` | Document Assembly Status |
| `LglCntntMDocReferenceNumber` |  | |  |  | `CHAR(32)` | Document Reference Number |
| `InternalDocumentStatus` |  | |  |  | `CHAR(2)` | Document Status |
| `LglCntntMDocStatusName` |  | |  |  | `CHAR(40)` | Long Text |
| `DocumentDescription` |  | |  |  | `CHAR(255)` | Name |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LegalDocAcceptedStatusInDays` |  | |  |  | `INT4(10)` |  |
| `TotalNumberOfLegalDocuments` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNrOfElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LglDocTotNrOfWaitElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotNrOfAcceptedStatus` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNumberOfFiles` |  | |  |  | `INT4(10)` | Total No. of Files |
| `LegalDocTotNrOfVirtualDocument` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNmbrOfLowTouchDoc` |  | |  |  | `INT4(10)` |  |
