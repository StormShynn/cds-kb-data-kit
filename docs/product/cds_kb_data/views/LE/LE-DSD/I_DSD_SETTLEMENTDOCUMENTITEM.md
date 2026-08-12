---
name: I_DSD_SETTLEMENTDOCUMENTITEM
description: "Dsd Settlementdocumentitem"
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
  - item-level
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLEMENTDOCUMENTITEM

**Dsd Settlementdocumentitem**

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
| `DSD_SettlementDocument` | ✓ | | `_Item` | `sld_doc_id` |  |  |
| `DSD_TourNumber` | ✓ | | `_Item` | `tour_id` |  |  |
| `TourDocumentType` |  | | `_Item` | `obj_typ` |  |  |
| `TourDocumentNumber` |  | | `_Item` | `obj_id` |  |  |
| `Plant` |  | | `_Header` | `plant` |  |  |
| `_TourDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TourDocumentType` | `I_DSD_TourDocumentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Document Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementDocumentItem
  as select from /dsd/sl_sld_item as _Item

  inner join /dsd/sl_sld_head as _Header on _Item.sld_doc_id = _Header.sld_doc_id 

  association [0..1] to I_DSD_TourDocumentType as _TourDocumentType on $projection.TourDocumentType = _TourDocumentType.TourDocumentType

{
  key _Item.sld_doc_id as DSD_SettlementDocument,
  key _Item.tour_id    as DSD_TourNumber,
      _Item.obj_typ    as TourDocumentType,
      _Item.obj_id     as TourDocumentNumber,
 
      _Header.plant    as Plant,
      
      _TourDocumentType

}
```
