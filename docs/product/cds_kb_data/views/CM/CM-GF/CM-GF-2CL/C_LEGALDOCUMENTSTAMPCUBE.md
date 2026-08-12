---
name: C_LEGALDOCUMENTSTAMPCUBE
description: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Legal Doc Stamp Data - Cube — CDS view tiêu dùng dựa trên I_LglCntntMDocumentStamp."
keywords:
  - "legal"
  - "doc"
  - "stamp"
  - "data"
  - "cube"
  - "cntnt"
  - "document"
  - "name"
tags:
  - CM
  - bo:companycode
  - CM-GF
  - CM-GF-2CL
  - component:CM-GF-2CL
  - consumption-view
  - document
---
# C_LEGALDOCUMENTSTAMPCUBE

**This CDS view provides the data to answer the following business questions: What is the total number of legal documents with stamps? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentStampUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocumentUUID` |  | | `_LegalDocument` | `LglCntntMDocumentUUID` | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | | `_LegalDocument` | `LglCntntMDocument` | `CHAR(10)` | Document ID |
| `LglCntntMDocumentStamp` |  | |  |  | `CHAR(4)` | Document Stamp Name |
| `LglCntntMDocumentStampName` |  | |  | `case when LglCntntMDocumentStamp._LglCntntMCstmDocStampTxt.LglCntntMDocumentStampName <> '' then LglCntntMDocumentStamp._LglCntntMCstmDocStampTxt.LglCntntMDocumentStampName else LglCntntMDocumentStamp._LglCntntMSAPDocStampText.LglCntntMDocumentStampName end` | `CHAR(40)` | Long Text |
| `LegalTransactionHealthName` |  | | `_LegalDocument._LegalTransaction._LegalTransactionHealthText` | `LegalTransactionHealthName` | `CHAR(40)` | Long Text |
| `LglCntntMEntity` |  | | `_LegalDocument._LegalTransaction._MainLegalTransactionEntity` | `LglCntntMEntity` | `CHAR(10)` | Entity ID |
| `LglCntntMEntityTypeName` |  | | `_LegalDocument._LegalTransaction._MainLegalTransactionEntity` | `LglCntntMEntityTypeName` | `CHAR(40)` | Long Text |
| `LglCntntMGovLawText` |  | |  | `_LegalDocument._LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText` | `CHAR(92)` | Governing Law Text |
| `LegalTransactionHealth` |  | | `_LegalDocument._LegalTransaction` | `LegalTransactionHealth` | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMMainOrgTypeName` |  | | `_LegalDocument._LegalTransaction._LglCntntMMainOrgTypeText` | `LglCntntMMainOrgTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `LglCntntMMainOrgName` |  | |  | `case when _LegalDocument._LegalTransaction.LglCntntMMainOrgType = '04' then _LegalDocument._LegalTransaction._SalesOrganizationText.SalesOrganizationName when _LegalDocument._LegalTransaction.LglCntntMMainOrgType = '05' then _LegalDocument._LegalTransaction._PurchasingOrganization.PurchasingOrganizationName else _LegalDocument._LegalTransaction._CompanyCode.CompanyCodeName end` | `CHAR(25)` | Name of Company Code or Company |
| `TotalNumberOfLegalDocuments` |  | |  | `cast( 1 as lcm_totalld_stamps )` | `INT4(10)` | Total No. of Files |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LEGALDOCUMENTSTAMPCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLCMPLGLSTMP'
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
@EndUserText.label: 'Legal Doc Stamp Data - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName:#LOCAL

define view C_LegalDocumentStampCube
  as select from I_LglCntntMDocumentStamp as LglCntntMDocumentStamp
    inner join   I_LegalDocument          as _LegalDocument on _LegalDocument.LglCntntMDocumentUUID = LglCntntMDocumentStamp.LglCntntMDocumentUUID
{
  key  LglCntntMDocumentStamp.LglCntntMDocumentStampUUID                                                                 as LglCntntMDocumentStampUUID,
       _LegalDocument.LglCntntMDocumentUUID                                                                              as LglCntntMDocumentUUID,
       _LegalDocument.LglCntntMDocument,
       LglCntntMDocumentStamp.LglCntntMDocumentStamp                                                                     as LglCntntMDocumentStamp,
       case when LglCntntMDocumentStamp._LglCntntMCstmDocStampTxt.LglCntntMDocumentStampName <> ''
            then LglCntntMDocumentStamp._LglCntntMCstmDocStampTxt.LglCntntMDocumentStampName
            else LglCntntMDocumentStamp._LglCntntMSAPDocStampText.LglCntntMDocumentStampName end                         as LglCntntMDocumentStampName,

       _LegalDocument._LegalTransaction._LegalTransactionHealthText.LegalTransactionHealthName                           as LegalTransactionHealthName,

       _LegalDocument._LegalTransaction._MainLegalTransactionEntity.LglCntntMEntity                                      as LglCntntMEntity,

       _LegalDocument._LegalTransaction._MainLegalTransactionEntity.LglCntntMEntityTypeName                              as LglCntntMEntityTypeName,

       _LegalDocument._LegalTransaction._LglCntntMGovLawText[1: Language = $session.system_language].LglCntntMGovLawText as LglCntntMGovLawText,

       _LegalDocument._LegalTransaction.LegalTransactionHealth                                                           as LegalTransactionHealth,

       _LegalDocument._LegalTransaction._LglCntntMMainOrgTypeText.LglCntntMMainOrgTypeName                               as LglCntntMMainOrgTypeName,

       case
       when _LegalDocument._LegalTransaction.LglCntntMMainOrgType = '04' then
            _LegalDocument._LegalTransaction._SalesOrganizationText.SalesOrganizationName
       when _LegalDocument._LegalTransaction.LglCntntMMainOrgType = '05' then
            _LegalDocument._LegalTransaction._PurchasingOrganization.PurchasingOrganizationName
         else
            _LegalDocument._LegalTransaction._CompanyCode.CompanyCodeName
         end                                                                                                             as LglCntntMMainOrgName,

       @Aggregation.referenceElement: ['LglCntntMDocumentUUID']
       @Aggregation.default: #COUNT_DISTINCT
       cast( 1 as  lcm_totalld_stamps )                                                                                  as TotalNumberOfLegalDocuments
}
where
      _LegalDocument.LglCntntMDocumentIsTopVersion = 'X'
  and _LegalDocument.IsEndOfPurposeBlocked         = ''
```
