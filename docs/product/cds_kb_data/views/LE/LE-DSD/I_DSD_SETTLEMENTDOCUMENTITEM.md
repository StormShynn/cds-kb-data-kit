---
name: I_DSD_SETTLEMENTDOCUMENTITEM
description: "Dsd Settlementdocumentitem"
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
