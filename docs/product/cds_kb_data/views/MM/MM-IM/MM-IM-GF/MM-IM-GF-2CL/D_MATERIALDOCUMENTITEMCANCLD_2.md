---
name: D_MATERIALDOCUMENTITEMCANCLD_2
description: "D Materialdocumentitemcancld 2"
semantic_vi: "Chứa dữ liệu hủy bỏ vật liệu tài liệu đơn vị, hữu ích cho việc quản lý đơn vị tài liệu vật liệu trong thành phần MM-IM-GF-2CL."
keywords:
  - "material document item"
  - "cancellation"
  - "mm-im-gf-2cl"
  - "material document"
  - "đơn vị tài liệu vật liệu"
  - "hủy bỏ"
  - "sourcing & procurement"
  - "material"
  - "lob:sourcing & procurement"
  - "bo:material"
semantic_en: "Exposes material document item cancellation data, useful for managing material document items in the MM-IM-GF-2CL component."
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - material
  - document
  - item-level
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTITEMCANCLD_2

**D Materialdocumentitemcancld 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentItem` |  | |  | `mblpo` |  |  |
| `GoodsMovementType` |  | |  | `bwart` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `StorageLocation` |  | |  | `lgort_d` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Entity for MaterialDocumentItem Canceled'
@ObjectModel: { sapObjectNodeType.name: 'MaterialDocumentItem' }
@ObjectModel: { supportedCapabilities: [#DATA_STRUCTURE]  }
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_MaterialDocumentItemCancld_2  
{
  MaterialDocumentItem        : mblpo;
  
  @Event.qualifiesEventType: true   
  GoodsMovementType         : bwart;
  Plant                     : werks_d;
  StorageLocation           : lgort_d;
  
  _DummyAssociation         : association to parent D_MaterialDocumentCanceled_2;
    
}
```
