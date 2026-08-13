---
name: D_MATERIALDOCUMENTITEMCRTED_2
description: "D Materialdocumentitemcrted 2"
semantic_vi: "View này hiển thị dữ liệu vật liệu tài liệu vật liệu, cụ thể cho các vật liệu được tạo, có thể được sử dụng để phân tích hoặc báo cáo về vật liệu tài liệu vật liệu đã được tạo."
keywords:
  - "material document item"
  - "vật liệu tài liệu vật liệu"
  - "created item"
  - "đã được tạo"
  - "material document"
  - "tài liệu vật liệu"
  - "sap mm"
  - "mm-im-gf-2cl"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "bo:material"
semantic_en: "This view exposes material document item data, specifically for created items, which can be used to analyze or report on material document items that have been created."
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
# D_MATERIALDOCUMENTITEMCRTED_2

**D Materialdocumentitemcrted 2**

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
@EndUserText.label: 'Entity for MaterialDocument Item Created'
@ObjectModel: { sapObjectNodeType.name: 'MaterialDocumentItem' }
@ObjectModel: { supportedCapabilities: [#DATA_STRUCTURE]  }
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_MaterialDocumentItemCrted_2  
{
  MaterialDocumentItem        : mblpo;
  
  @Event.qualifiesEventType: true   
  GoodsMovementType         : bwart;
  Plant                     : werks_d;
  StorageLocation           : lgort_d;
  
  _DummyAssociation         : association to parent D_MaterialDocumentCreated_2;
    
}
```
