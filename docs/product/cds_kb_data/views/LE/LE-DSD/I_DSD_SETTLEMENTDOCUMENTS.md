---
name: I_DSD_SETTLEMENTDOCUMENTS
description: "Dsd Settlementdocuments"
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - document
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLEMENTDOCUMENTS

**Dsd Settlementdocuments**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DSD_TourNumber` | ✓ | | `_Documents` | `tour_id` |  |  |
| `DSD_RouteAccountingVisitNumber` | ✓ | | `_Documents` | `visit_id` |  |  |
| `DSD_CancellationDocumentType` | ✓ | | `_Documents` | `doc_type` |  |  |
| `DSD_ExtDeliveryOrOrderNumber` | ✓ | | `_Documents` | `hh_ref_no` |  |  |
| `DSD_ExtDocSequentialNumber` | ✓ | | `_Documents` | `counter` |  |  |
| `SDDocument` |  | | `_Documents` | `be_vbeln` |  |  |
| `Plant` |  | | `_Header` | `plant` |  |  |
| `_CancellationDocumentType` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CancellationDocumentType` | `I_DSD_TourCanclnDocumentType` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Merging of Backend Documents'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementDocuments
  as select from /dsd/sl_sld_docs as _Documents

  inner join /dsd/hh_rahd as _Header on _Documents.tour_id = _Header.tour_id      

  association [0..1] to I_DSD_TourCanclnDocumentType as _CancellationDocumentType on $projection.DSD_CancellationDocumentType = _CancellationDocumentType.DSD_CancellationDocumentType
  association [0..1] to I_SalesDocument              as _SalesDocument            on $projection.SDDocument                   = _SalesDocument.SalesDocument
{

  key _Documents.tour_id   as DSD_TourNumber,
  key _Documents.visit_id  as DSD_RouteAccountingVisitNumber,
  key _Documents.doc_type  as DSD_CancellationDocumentType,
  key _Documents.hh_ref_no as DSD_ExtDeliveryOrOrderNumber,
  key _Documents.counter   as DSD_ExtDocSequentialNumber,
      _Documents.be_vbeln  as SDDocument,
      
      _Header.plant as Plant,

      _CancellationDocumentType,
      _SalesDocument

}
```
