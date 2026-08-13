---
name: D_MATERIALDOCUMENTCREATED_2
description: "D Materialdocumentcreated 2"
semantic_vi: "View này hiển thị dữ liệu tạo tài liệu vật liệu, có thể được sử dụng để theo dõi và phân tích quá trình tạo tài liệu vật liệu trong thành phần MM-IM-GF-2CL."
keywords:
  - "material document creation"
  - "tạo tài liệu vật liệu"
  - "mm-im-gf-2cl"
  - "sourcing and procurement"
  - "lob:sourcing & procurement"
  - "bo:material"
  - "inventory transaction type"
  - "d_materialdocumentitemcrted_2"
semantic_en: "This view exposes material document creation data, which can be used to track and analyze material document creation processes in the MM-IM-GF-2CL component."
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
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTCREATED_2

**D Materialdocumentcreated 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryTransactionType` |  | |  | `vgart` |  |  |
| `D_MaterialDocumentItemCrted_2` |  | |  | `_MaterialDocumentItemCreated : composition [1..*] of D_MaterialDocumentItemCrted_2` |  |  |

## Source Code

```abap
@EndUserText.label: 'Entity for Material Document Created'

@ObjectModel: { sapObjectNodeType.name: 'MaterialDocument' }
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
define root abstract entity D_MaterialDocumentCreated_2
  
{
    InventoryTransactionType     : vgart;
    _MaterialDocumentItemCreated : composition [1..*] of D_MaterialDocumentItemCrted_2;
    
}
```
