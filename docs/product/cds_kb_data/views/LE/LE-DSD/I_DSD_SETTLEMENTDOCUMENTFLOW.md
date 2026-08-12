---
name: I_DSD_SETTLEMENTDOCUMENTFLOW
description: "Dsd Settlementdocumentflow"
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
# I_DSD_SETTLEMENTDOCUMENTFLOW

**Dsd Settlementdocumentflow**

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
| `DocFlowPrecdgDocumentCategory` | ✓ | | `_DocumentFlow` | `pre_doc_type` |  |  |
| `DocFlowPrecedingDocumentNumber` | ✓ | | `_DocumentFlow` | `pre_doc_id` |  |  |
| `DocFlowPrecedingDocumentItem` | ✓ | | `_DocumentFlow` | `pre_doc_item` |  |  |
| `DocFlowSubsqntDocumentCategory` | ✓ | | `_DocumentFlow` | `fol_doc_type` |  |  |
| `DocFlowSubsqntDocumentNumber` | ✓ | | `_DocumentFlow` | `fol_doc_id` |  |  |
| `DocFlowSubsequentDocumentItem` | ✓ | | `_DocumentFlow` | `fol_doc_item` |  |  |
| `DSD_TourNumber` | ✓ | | `_DocumentFlow` | `tour_id` |  |  |
| `DSD_RouteAccountingVisitNumber` | ✓ | | `_DocumentFlow` | `visit_id` |  |  |
| `Plant` |  | | `_Header` | `plant` |  |  |
| `_PrecedingDocumentType` | | ✓ | | | | |
| `_SubsequentDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrecedingDocumentType` | `I_DSD_DocumentCategory` | [0..1] |
| `_SubsequentDocumentType` | `I_DSD_DocumentCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Document Flow'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementDocumentFlow
  as select from /dsd/sl_sld_flow as _DocumentFlow

   inner join /dsd/hh_rahd as _Header on _DocumentFlow.tour_id = _Header.tour_id   
  
  association [0..1] to I_DSD_DocumentCategory as _PrecedingDocumentType  on $projection.DocFlowPrecdgDocumentCategory  = _PrecedingDocumentType.DocumentFlowDocumentCategory
  association [0..1] to I_DSD_DocumentCategory as _SubsequentDocumentType on $projection.DocFlowSubsqntDocumentCategory = _SubsequentDocumentType.DocumentFlowDocumentCategory

{
  key _DocumentFlow.pre_doc_type as DocFlowPrecdgDocumentCategory,
  key _DocumentFlow.pre_doc_id   as DocFlowPrecedingDocumentNumber,
  key _DocumentFlow.pre_doc_item as DocFlowPrecedingDocumentItem,
  key _DocumentFlow.fol_doc_type as DocFlowSubsqntDocumentCategory,
  key _DocumentFlow.fol_doc_id   as DocFlowSubsqntDocumentNumber,
  key _DocumentFlow.fol_doc_item as DocFlowSubsequentDocumentItem,
  key _DocumentFlow.tour_id      as DSD_TourNumber,
  key _DocumentFlow.visit_id     as DSD_RouteAccountingVisitNumber,
  
      _Header.plant              as Plant,

      _PrecedingDocumentType,
      _SubsequentDocumentType

}
```
