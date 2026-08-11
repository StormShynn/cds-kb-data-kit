---
name: I_PRAACCOUNTINGDOCUMENTHEADER
description: "PRA Accounting Document Header"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value
semantic_en: "PRA Accounting Document Header"
semantic_vi: "PRA Accounting Document Header — CDS view giao diện dựa trên PRA Accounting Document Header."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "header"
  - "company"
  - "code"
  - "fiscal"
  - "period"
  - "description"
  - "origin"
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCOUNTINGDOCUMENTHEADER

**PRA Accounting Document Header**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `FiscalPeriod` | ✓ | |  | `cast (acct_period as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `AccountingDocument` | ✓ | |  | `doc_no` | `CHAR(10)` | Revenue Accounting Document Number |
| `DocumentDescription` |  | |  | `document_desc` | `CHAR(60)` | Document Description |
| `Origin` |  | |  | `system_src` | `CHAR(2)` | Application |
| `AccountingDocumentType` |  | |  | `doc_type` | `CHAR(2)` | Document Type |
| `OriginReferenceDocument` |  | |  | `ref_key` | `CHAR(20)` | Source Reference Document (VL,CI,SS,FT) |
| `AccountingDocumentStatus` |  | |  | `doc_status` | `CHAR(2)` | Accounting Document Status |
| `AccountingDocumentIsReversed` |  | |  | `rvrs_doc_fl` | `CHAR(1)` | Accounting Reverse Flag |
| `AccountingDocumentCrossCoRef` |  | |  | `xcc_key` | `CHAR(20)` | Cross Company key for Accounting Document Header |
| `PostingDate` |  | |  | `post_dt` | `DATS(8)` | Accounting Document Posting Date |
| `DocumentDate` |  | |  | `doc_dt` | `DATS(8)` | Document Date |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `LastChangedByUser` |  | |  | `cast( change_user as fclm_bam_changed_by )` | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  | `cast( change_timestamp as oiu_vdm_changed_on_ts )` | `DEC(15)` | Changed On Timestamp |
| `NumberOfItems` |  | |  | `cast( total_rec_cnt as oiu_vdm_no_of_items )` | `INT4(10)` | Number of Items |
| `NumberOfRejectedItems` |  | |  | `cast( rej_rec_cnt as oiu_vdm_no_of_rejected_items )` | `INT4(10)` | Number of Rejected Items |
| `NumberOfDocuments` |  | |  | `cast( 1 as oiu_vdm_no_of_docs)` | `INT4(10)` | Number of Documents |
| `_CompanyCode` | | ✓ | | | | |
| `_Origin` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_AccountingDocumentStatus` | | ✓ | | | | |
| `_AccountingDocumentIsReversed` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Origin` | `I_PRAApplicationOrigin` | [0..1] |
| `_AccountingDocumentType` | `I_PRAAccountingDocumentType` | [0..1] |
| `_AccountingDocumentStatus` | `I_PRAAccountingDocStatus` | [0..1] |
| `_AccountingDocumentIsReversed` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTHEADER')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Header'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTGDOCHDR'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'PRAAccountingDocHeader'
define view I_PRAAccountingDocumentHeader
  as select from /pra/acc_doc_hdr
  association [0..1] to I_CompanyCode               as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  //  association [0..1] to I_PRAFiscalPeriod           as _FiscalPeriod             on  $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  //                                                                                 and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
  association [0..1] to I_PRAApplicationOrigin      as _Origin                       on  $projection.Origin = _Origin.Origin
  association [0..1] to I_PRAAccountingDocumentType as _AccountingDocumentType       on  $projection.Origin                 = _AccountingDocumentType.Origin
                                                                                     and $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_PRAAccountingDocStatus    as _AccountingDocumentStatus     on  $projection.AccountingDocumentStatus = _AccountingDocumentStatus.AccountingDocumentStatus
  association [0..1] to I_Indicator                 as _AccountingDocumentIsReversed on  $projection.AccountingDocumentIsReversed = _AccountingDocumentIsReversed.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs )                as CompanyCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriod'
  key cast (acct_period as oiu_vdm_fis_period preserving type)            as FiscalPeriod,
      @ObjectModel.text.element:  [ 'DocumentDescription' ]
  key doc_no                                              as AccountingDocument,
      @Semantics.text: true
      document_desc                                       as DocumentDescription,
      @ObjectModel.foreignKey.association: '_Origin'
      system_src                                          as Origin,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      doc_type                                            as AccountingDocumentType,
      ref_key                                             as OriginReferenceDocument,
      @ObjectModel.foreignKey.association: '_AccountingDocumentStatus'
      doc_status                                          as AccountingDocumentStatus,
      @ObjectModel.foreignKey.association: '_AccountingDocumentIsReversed'
      rvrs_doc_fl                                         as AccountingDocumentIsReversed,
      xcc_key                                             as AccountingDocumentCrossCoRef,
      @Semantics.businessDate.at: true
      post_dt                                             as PostingDate,
      @Semantics.businessDate.at: true
      doc_dt                                              as DocumentDate,
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )           as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )      as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      cast( change_user as fclm_bam_changed_by )          as LastChangedByUser,
      cast( change_timestamp as oiu_vdm_changed_on_ts )   as ChangedDateTime,

      // measures
      @DefaultAggregation: #SUM
      cast( total_rec_cnt as oiu_vdm_no_of_items )        as NumberOfItems,
      @DefaultAggregation: #SUM
      cast( rej_rec_cnt as oiu_vdm_no_of_rejected_items ) as NumberOfRejectedItems,
      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_docs)                      as NumberOfDocuments,
      _CompanyCode,
      _AccountingDocumentType,
      _AccountingDocumentStatus,
      _Origin,
      _AccountingDocumentIsReversed
      //      _FiscalPeriod, // issue with ACCP types

};
```
