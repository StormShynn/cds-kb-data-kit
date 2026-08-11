---
name: C_LEGALDOCUMENTCUBE
description: "This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value
semantic_en: "This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Document Header Data - Cube — CDS view tiêu dùng dựa trên P_LegalDocLatestVersionCube."
keywords:
  - "Legal Document Header - Analytics Cube"
  - "legal"
  - "document"
  - "header"
  - "data"
  - "cube"
  - "cntnt"
  - "linked"
  - "object"
  - "version"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - document
---
# C_LEGALDOCUMENTCUBE

**This CDS view provides data to answer the following business questions: What is the total number of legal documents in Accepted status? What is the total number of legal documents? What is the total number of legal documents that have been E-signed? What is the total number of legal documents waiting to be E-signed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMDocumentLinkedObject` |  | |  |  | `CHAR(10)` | Linked SAP Object |
| `LglCntntMDocumentLinkedObjKey` |  | |  |  | `CHAR(32)` | UUID Char32 |
| `LglCntntMDocumentIsTopVersion` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMCreatedDate` |  | | `_LegalDocLatestVersionCube` | `LglCntntMCreatedDate` | `DATS(8)` |  |
| `LglCntntMChangedDate` |  | | `_LegalDocLatestVersionCube` | `LglCntntMChangedDate` | `DATS(8)` |  |
| `LglCntntMSignatureDocStatus` |  | |  |  | `CHAR(2)` | Signature Document Status |
| `LglCntntMGovLaw` |  | | `_LegalTransaction` | `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMGovLawText` |  | |  | `_LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LglCntntMDocContentTypeName` |  | |  | `_LGLCNTNTMDOCCONTENTTYPETEXT[1: Language = $session.system_language].LglCntntMDocContentTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMDocType` |  | |  |  | `CHAR(1)` | Document Type |
| `LglCntntMDocContentType` |  | |  |  | `CHAR(4)` | Document Content Type |
| `LglCntntMDocAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMSgntrDocStatusName` |  | | `_SgntrDocStatusText` | `LglCntntMSgntrDocStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `LegalDocumentVersion` |  | |  |  | `NUMC(4)` | Legal Document Version |
| `LglCntntMDocTemplateName` |  | |  |  | `CHAR(255)` | Document Template Name |
| `LglCntntMDocTemplateVersion` |  | |  |  | `CHAR(10)` | Document Template Version |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | | `_CalendarDate` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
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
| `LglCntntMDocAssemblyStatusText` |  | | `_AssemblyStsText` | `LglCntntMDocAssemblyStatusText` | `CHAR(40)` | Long Text |
| `LglCntntMDocAssemblyStatus` |  | |  |  | `CHAR(20)` | Document Assembly Status |
| `LglCntntMDocReferenceNumber` |  | |  |  | `CHAR(32)` | Document Reference Number |
| `InternalDocumentStatus` |  | |  |  | `CHAR(2)` | Document Status |
| `LglCntntMDocStatusName` |  | |  |  | `CHAR(40)` | Long Text |
| `DocumentDescription` |  | |  |  | `CHAR(255)` | Name |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LegalDocAcceptedStatusInDays` |  | |  | `case when InternalDocumentStatus = 'AC' then ( dats_days_between( LglCntntMCreatedDate , LglCntntMChangedDate ) + 1 ) else cast('0' as abap.int4) end` | `INT4(10)` |  |
| `TotalNumberOfLegalDocuments` |  | | `_LegalDocumentFirstVersion` | `TotalNumberOfLegalDocuments` | `INT4(10)` |  |
| `LegalDocTotalNrOfElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LglDocTotNrOfWaitElectronicSgd` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotNrOfAcceptedStatus` |  | |  |  | `INT4(10)` |  |
| `LegalDocTotalNumberOfFiles` |  | | `_LegalDocumentFirstVersion` | `LegalDocTotalNumberOfFiles` | `INT4(10)` | Total No. of Files |
| `LegalDocTotNrOfVirtualDocument` |  | | `_LegalDocumentFirstVersion` | `LegalDocTotNrOfVirtualDocument` | `INT4(10)` |  |
| `LegalDocTotalNmbrOfLowTouchDoc` |  | |  |  | `INT4(10)` |  |
| `_CalendarDate` | | ✓ | | | | |
| `_LegalTransaction` | | ✓ | | | | |
| `_AssemblyStsText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_SgntrDocStatusText` | `I_LglCntntMSgntrDocStatusText` | [1..1] |
| `_LegalDocumentFirstVersion` | `I_LegalDocumentFirstVersion` | [1..1] |
| `_LegalTransaction` | `I_LegalTransaction` | [1..1] |
| `_LGLCNTNTMDOCCONTENTTYPETEXT` | `I_LglCntntMDocContentTypeText` | [1..1] |
| `_Extenstion` | `E_LegalDocument` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMLDCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Legal Document Header Data - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName:#LOCAL
define view C_LegalDocumentCube

  as select from P_LegalDocLatestVersionCube as _LegalDocLatestVersionCube

  association [1..1] to I_CalendarDate                as _CalendarDate                on  $projection.LglCntntMCreatedDate = _CalendarDate.CalendarDate

  association [1..1] to I_LglCntntMSgntrDocStatusText as _SgntrDocStatusText          on  $projection.LglCntntMSignatureDocStatus = _SgntrDocStatusText.LglCntntMSignatureDocStatus
                                                                                      and _SgntrDocStatusText.Language            = $session.system_language

  association [1..1] to I_LegalDocumentFirstVersion   as _LegalDocumentFirstVersion   on  $projection.LglCntntMDocument = _LegalDocumentFirstVersion.LglCntntMDocument


  association [1..1] to I_LegalTransaction            as _LegalTransaction            on  $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID

  association [1..1] to I_LglCntntMDocContentTypeText as _LGLCNTNTMDOCCONTENTTYPETEXT on  $projection.LglCntntMDocContentType   = _LGLCNTNTMDOCCONTENTTYPETEXT.LglCntntMDocContentType
                                                                                      and _LGLCNTNTMDOCCONTENTTYPETEXT.Language = $session.system_language
  //Extension
  association [1..1] to E_LegalDocument               as _Extenstion                  on  $projection.LglCntntMDocumentUUID = _Extenstion.LglCntntMDocumentUUID
{
  key  LglCntntMDocumentUUID                                                                              as LglCntntMDocumentUUID,
       LglCntntMDocument                                                                                  as LglCntntMDocument,
       LglCntntMDocumentLinkedObject                                                                      as LglCntntMDocumentLinkedObject,
       LglCntntMDocumentLinkedObjKey                                                                      as LglCntntMDocumentLinkedObjKey,
       LglCntntMDocumentIsTopVersion                                                                      as LglCntntMDocumentIsTopVersion,
       LegalTransaction                                                                                   as LegalTransaction,
       LegalTransactionUUID                                                                               as LegalTransactionUUID,
       _LegalDocLatestVersionCube.LglCntntMCreatedDate                                                    as LglCntntMCreatedDate,
       _LegalDocLatestVersionCube.LglCntntMChangedDate                                                    as LglCntntMChangedDate,
       LglCntntMSignatureDocStatus                                                                        as LglCntntMSignatureDocStatus,
       _LegalTransaction.LglCntntMGovLaw                                                                  as LglCntntMGovLaw,
       _LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText as LglCntntMGovLawText,
       _LGLCNTNTMDOCCONTENTTYPETEXT[1: Language = $session.system_language].LglCntntMDocContentTypeName   as LglCntntMDocContentTypeName,
       LglCntntMDocType                                                                                   as LglCntntMDocType,
       LglCntntMDocContentType                                                                            as LglCntntMDocContentType,
       LglCntntMDocAccessLvl                                                                              as LglCntntMDocAccessLvl,
       _SgntrDocStatusText.LglCntntMSgntrDocStatusName                                                    as LglCntntMSgntrDocStatusName,
       LegalDocumentVersion                                                                               as LegalDocumentVersion,
       LglCntntMDocTemplateName                                                                           as LglCntntMDocTemplateName,
       LglCntntMDocTemplateVersion                                                                        as LglCntntMDocTemplateVersion,
       _CalendarDate.CalendarYear                                                                         as CalendarYear,
       _CalendarDate.CalendarQuarter                                                                      as CalendarQuarter,
       _CalendarDate.CalendarMonth                                                                        as CalendarMonth,
       LglCntntMLanguage,
       LglCntntMProfile,
       //       _LglCntntMProfileText.LglCntntMProfileName                                                         as LglCntntMProfileName,
       LglCntntMDocLowTouchLevelTxt,
       LglTransAccessLvl,
       LegalTransactionHealth,
       LglCntntMEntityName,
       LegalTransactionHealthName,
       LglCntntMMainOrgTypeName,
       LglCntntMEntityType,
       LglCntntMEntityTypeName,
       LglCntntMMainOrgName,
       LglCntntMVirtualDocVersKey,
       _AssemblyStsText.LglCntntMDocAssemblyStatusText,
       LglCntntMDocAssemblyStatus,
       LglCntntMDocReferenceNumber,
       InternalDocumentStatus,
       LglCntntMDocStatusName                                                                             as LglCntntMDocStatusName,
       DocumentDescription,
       LegalTransactionTitle,
       @DefaultAggregation: #SUM
       case
       when  InternalDocumentStatus = 'AC'
       then   ( dats_days_between(  LglCntntMCreatedDate  , LglCntntMChangedDate  ) + 1 )
       else cast('0' as abap.int4)
       end                                                                                                as LegalDocAcceptedStatusInDays,

       @DefaultAggregation: #SUM
       _LegalDocumentFirstVersion.TotalNumberOfLegalDocuments                                             as TotalNumberOfLegalDocuments,

       @DefaultAggregation: #SUM
       LegalDocTotalNrOfElectronicSgd                                                                     as LegalDocTotalNrOfElectronicSgd,

       @DefaultAggregation: #SUM
       LglDocTotNrOfWaitElectronicSgd                                                                     as LglDocTotNrOfWaitElectronicSgd,

       @DefaultAggregation: #SUM
       LegalDocTotNrOfAcceptedStatus                                                                      as LegalDocTotNrOfAcceptedStatus,
       @DefaultAggregation: #SUM
       _LegalDocumentFirstVersion.LegalDocTotalNumberOfFiles                                              as LegalDocTotalNumberOfFiles,

       @DefaultAggregation: #SUM
       _LegalDocumentFirstVersion.LegalDocTotNrOfVirtualDocument                                          as LegalDocTotNrOfVirtualDocument,

       @DefaultAggregation: #SUM
       LegalDocTotalNmbrOfLowTouchDoc                                                                     as LegalDocTotalNmbrOfLowTouchDoc,

       _CalendarDate,
       _LegalTransaction,
       _AssemblyStsText
}
```
