---
name: C_LEGALDOCUMENTQUERY
description: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Document Header - Query — CDS view tiêu dùng dựa trên C_LegalDocumentCube."
keywords:
  - "Legal Document Header – Query"
  - "legal"
  - "document"
  - "header"
  - "query"
  - "cntnt"
  - "linked"
  - "object"
  - "created"
  - "date"
  - "changed"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - document
---
# C_LEGALDOCUMENTQUERY

**This CDS view provides the data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMDocumentLinkedObject` |  | |  |  | `CHAR(10)` | Linked SAP Object |
| `LglCntntMCreatedDate` |  | |  |  | `DATS(8)` |  |
| `LglCntntMChangedDate` |  | |  |  | `DATS(8)` |  |
| `LglCntntMSignatureDocStatus` |  | |  |  | `CHAR(2)` | Signature Document Status |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LglCntntMDocType` |  | |  |  | `CHAR(1)` | Document Type |
| `DocumentDescription` |  | |  |  | `CHAR(255)` | Name |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMDocContentType` |  | |  |  | `CHAR(4)` | Document Content Type |
| `LglCntntMDocContentTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMDocAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMDocLowTouchLevelTxt` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMSgntrDocStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LegalDocumentVersion` |  | |  |  | `NUMC(4)` | Legal Document Version |
| `LglCntntMDocTemplateName` |  | |  |  | `CHAR(255)` | Document Template Name |
| `LglCntntMDocTemplateVersion` |  | |  |  | `CHAR(10)` | Document Template Version |
| `LglCntntMDocAssemblyStatusText` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMDocStatusName` |  | |  |  | `CHAR(40)` | Long Text |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglCntntMEntityName` |  | |  |  | `CHAR(81)` |  |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMDocReferenceNumber` |  | |  |  | `CHAR(32)` | Document Reference Number |
| `TotalNumberOfLegalDocuments` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNrOfElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotNrOfAcceptedStatus` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNumberOfFiles` |  | |  |  | `INT4(10)` | Total No. of Files |
| `LegalDocTotNrOfVirtualDocument` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNmbrOfLowTouchDoc` |  | |  |  | `INT4(10)` |  |
| `LglDocTotNrOfWaitElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LegalDocAvgTimeFinalization` |  | |  | `cast( 100 as abap.int4 )` | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMLDQUERY'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Legal Document Header - Query'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_LegalDocumentQuery
  as select from C_LegalDocumentCube as LegalDocumentCube
{

       @Consumption.hidden: true
       @UI.hidden: true
  key  LglCntntMDocumentUUID,
       LglCntntMDocument,
       @EndUserText.label: 'Linked Object'
       LglCntntMDocumentLinkedObject,
       @EndUserText.label: 'Creation Date'
       LglCntntMCreatedDate,
       @EndUserText.label: 'Change Date'
       LglCntntMChangedDate,
       LglCntntMSignatureDocStatus,
       CalendarYear,
       CalendarQuarter,
       CalendarMonth,
       LglCntntMGovLawText,
       LglCntntMDocType,
       @EndUserText.label: 'Document Title'
       DocumentDescription,
       @EndUserText.label: 'Legal Transaction Title'
       LegalTransactionTitle,
       @Semantics.text: true
       @AnalyticsDetails.query.display: #KEY_TEXT
       LglCntntMDocContentType,
       @EndUserText.label: 'Content Type Name'
       LglCntntMDocContentTypeName,
       @EndUserText.label: 'Access Level'
       LglCntntMDocAccessLvl,
       @EndUserText.label: 'Low-Touch Level'
       LglCntntMDocLowTouchLevelTxt,
       @EndUserText.label: 'Signature Document Status'
       LglCntntMSgntrDocStatusName,
       @EndUserText.label: 'Version No. of Top Version'
       LegalDocumentVersion,
       @EndUserText.label: 'Template Name'
       LglCntntMDocTemplateName,
       @EndUserText.label: 'Template Version'
       LglCntntMDocTemplateVersion,
       @EndUserText.label: 'Assembly Status'
       LglCntntMDocAssemblyStatusText,
       
       @EndUserText.label: 'Document Status'
       LglCntntMDocStatusName,
       
       LegalTransaction,
       LglCntntMProfile,
       
       @Semantics.text: true
       @EndUserText.label: 'Main Entity'
       LglCntntMEntityName,
       //       @EndUserText.label: 'Profile Name'
       //       LglCntntMProfileName,
       @EndUserText.label: 'Status of Legal Transaction'
       LegalTransactionHealthName,
       
       @EndUserText.label: 'Main Orgn. Type Name'
       LglCntntMMainOrgTypeName,
       
       @EndUserText.label: 'Entity Type'
       LglCntntMEntityTypeName,
       
       @EndUserText.label: 'Main Orgn. Name'
       LglCntntMMainOrgName,
       
       LglCntntMDocReferenceNumber,

       @EndUserText.label: 'Total No. of Legal Documents'
       @DefaultAggregation: #SUM
       TotalNumberOfLegalDocuments,

       @EndUserText.label: 'No. of E-signed Documents'
       @DefaultAggregation: #SUM
       LegalDocTotalNrOfElectronicSgd,

       @EndUserText.label: 'No. of Documents in Accepted Status'
       @DefaultAggregation: #SUM
       LegalDocTotNrOfAcceptedStatus,

       @DefaultAggregation: #SUM
       LegalDocTotalNumberOfFiles,

       @EndUserText.label: 'Total No. of Virtual Documents'
       @DefaultAggregation: #SUM
       LegalDocTotNrOfVirtualDocument,

       @EndUserText.label: 'No. of Auto-assembled Documents'
       @DefaultAggregation: #SUM
       LegalDocTotalNmbrOfLowTouchDoc,

       @EndUserText.label: 'No. of Documents Waiting for E-sign'
       @DefaultAggregation: #SUM
       LglDocTotNrOfWaitElectronicSgd,

       @EndUserText.label: 'Average Document processing time'
       @DefaultAggregation: #FORMULA
       @AnalyticsDetails.query.decimals: 0
       @AnalyticsDetails.query.formula: 'NDIV0(   LegalDocAcceptedStatusInDays /  LegalDocTotNrOfAcceptedStatus  )'
       cast( 100 as abap.int4 ) as LegalDocAvgTimeFinalization



}
```
