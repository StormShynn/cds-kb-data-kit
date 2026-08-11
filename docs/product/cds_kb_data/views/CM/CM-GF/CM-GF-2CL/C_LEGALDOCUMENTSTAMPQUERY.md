---
name: C_LEGALDOCUMENTSTAMPQUERY
description: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Document Stamp - Query — CDS view tiêu dùng dựa trên C_LegalDocumentStampCube."
keywords:
  - "legal"
  - "document"
  - "stamp"
  - "query"
  - "cntnt"
  - "name"
  - "transaction"
  - "health"
  - "entity"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - document
---
# C_LEGALDOCUMENTSTAMPQUERY

**This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentStampUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMDocumentStampName` |  | |  |  | `CHAR(40)` | Long Text |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` |  | |  |  | `CHAR(92)` | Governing Law Text |
| `LglCntntMMainOrgName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `LglCntntMMainOrgTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `TotalNumberOfLegalDocuments` |  | |  |  | `INT4(10)` | Total No. of Files |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMSTMPQUERY'
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
@EndUserText.label: 'Legal Document Stamp - Query'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

define view C_LegalDocumentStampQuery
  as select from C_LegalDocumentStampCube
{
  key  LglCntntMDocumentStampUUID,
       LglCntntMDocument,

       @EndUserText.label: 'Stamp Name'
       LglCntntMDocumentStampName,

       @EndUserText.label: 'Status of Legal Transaction'
       LegalTransactionHealthName,

       @EndUserText.label: 'Main Entity'
       LglCntntMEntity,

       @EndUserText.label: 'Main Entity Type'
       LglCntntMEntityTypeName,

       @EndUserText.label: 'Governing Law'
       LglCntntMGovLawText,

       @EndUserText.label: 'Main Orgn. Name'
       LglCntntMMainOrgName,

       @EndUserText.label: 'Main Orgn. Type Name'
       LglCntntMMainOrgTypeName,

       @EndUserText.label: 'Total No. of Legal Documents'
       @DefaultAggregation:#SUM
       TotalNumberOfLegalDocuments
}
```
