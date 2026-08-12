---
name: I_VALUATIONDOCUMENTHDR
description: "Valuation Document Header"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value
semantic_en: "Valuation Document Header"
semantic_vi: "Valuation Document Header — CDS view giao diện dựa trên oiurv_doc_hdr."
keywords:
  - "valuation"
  - "document"
  - "header"
  - "year"
  - "number"
  - "delivery"
  - "network"
  - "sales"
  - "date"
  - "allocation"
  - "frequency"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALUATIONDOCUMENTHDR

**Valuation Document Header**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentYear` | ✓ | |  | `doc_year` | `NUMC(4)` | Document year |
| `ValuationDocumentNumber` | ✓ | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `SalesDate` |  | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `AllocationFrequency` |  | |  | `freq_cd` | `CHAR(1)` | Frequency |
| `ValuationDocumentStatus` |  | |  | `doc_status` | `CHAR(2)` | Valuation Document Status |
| `ValuationDocumentType` |  | |  | `doc_type` | `CHAR(4)` | Valuation Document Type |
| `ProcessingStatus` |  | |  | `proc_status` | `CHAR(1)` | Valuation Document Processing Status |
| `LastExecutionDate` |  | |  | `run_date` | `DATS(8)` | Run Date |
| `LastExecutionTime` |  | |  | `run_time` | `TIMS(6)` | Run time |
| `DocumentIsArchived` |  | |  | `cast( arch_flag as xarch )` | `CHAR(1)` | Indicator: Document Already Archived? |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `NumberOfDocuments` |  | |  | `cast( 1 as oiu_vdm_no_of_docs )` | `INT4(10)` | Number of Documents |
| `OriginTransaction` |  | |  | `cast( 'O3URV_DOC' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `_ValuationDocumentYear` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_AllocationFrequencyCode` | | ✓ | | | | |
| `_ValnDocProcessingStatus` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ValnDocStatus` | | ✓ | | | | |
| `_ValnDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_AllocationFrequencyCode` | `I_AllocationFrequencyCode` | [0..1] |
| `_ValnDocProcessingStatus` | `I_ValnDocProcessingStatus` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ValnDocStatus` | `I_ValnDocStatus` | [0..1] |
| `_ValnDocType` | `I_ValnDocType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value)*

```abap
@EndUserText.label: 'Valuation Document Header'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVALNDOCHDR'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAValuationDocumentHeader'

define view I_ValuationDocumentHdr
  as select from oiurv_doc_hdr
  association [0..1] to I_CalendarYear            as _ValuationDocumentYear   on $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_DeliveryNetwork         as _DeliveryNetwork         on $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_AllocationFrequencyCode as _AllocationFrequencyCode on $projection.AllocationFrequency = _AllocationFrequencyCode.AllocationFrequency
  association [0..1] to I_ValnDocProcessingStatus as _ValnDocProcessingStatus on $projection.ProcessingStatus = _ValnDocProcessingStatus.ProcessingStatus
  association [0..1] to I_User                    as _CreatedByUser           on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_ValnDocStatus           as _ValnDocStatus           on $projection.ValuationDocumentStatus = _ValnDocStatus.ValuationDocumentStatus
  association [0..1] to I_ValnDocType             as _ValnDocType             on $projection.ValuationDocumentType = _ValnDocType.ValuationDocumentType
{
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
  key doc_year                                                                       as ValuationDocumentYear,
  key doc_no                                                                         as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                                          as DeliveryNetwork,
      sale_dt                                                                        as SalesDate,
      @ObjectModel.foreignKey.association: '_AllocationFrequencyCode'
      freq_cd                                                                        as AllocationFrequency,
      @ObjectModel.foreignKey.association: '_ValnDocStatus'
      doc_status                                                                     as ValuationDocumentStatus,
      @ObjectModel.foreignKey.association: '_ValnDocType'
      doc_type                                                                       as ValuationDocumentType,
      @ObjectModel.foreignKey.association: '_ValnDocProcessingStatus'
      proc_status                                                                    as ProcessingStatus,
      //@Semantics.businessDate.lastChangedAt: true
      @Semantics.systemDate.createdAt: true
      run_date                                                                       as LastExecutionDate,
      //@Semantics.time: true
      @Semantics.systemTime.createdAt: true
      run_time                                                                       as LastExecutionTime,
      cast( arch_flag as xarch )                                                     as DocumentIsArchived,
      //      @ObjectModel.foreignKey.association: '_CreatedByUser'
      cast( oiu_cruser as fclm_bam_created_by )                                      as CreatedByUser,

      //measures
      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_docs )                                                as NumberOfDocuments,

      //needed to support authorization check
      cast( 'O3URV_DOC' as fqm_origin_trans_id )                                     as OriginTransaction,

      //associations
      _ValuationDocumentYear,
      _DeliveryNetwork,
      _AllocationFrequencyCode,
      _ValnDocStatus,
      _ValnDocType,
      _ValnDocProcessingStatus,
      _CreatedByUser
};
```
