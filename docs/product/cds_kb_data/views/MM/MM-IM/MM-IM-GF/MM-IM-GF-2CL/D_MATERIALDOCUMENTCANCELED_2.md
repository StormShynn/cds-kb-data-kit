---
name: D_MATERIALDOCUMENTCANCELED_2
description: "D Materialdocumentcanceled 2"
semantic_vi: "View này hiển thị các mục đơn hàng vật liệu bị hủy bỏ, có thể được sử dụng để theo dõi và quản lý đơn hàng bị hủy và các giao dịch kho trong thành phần MM-IM-GF-2CL."
keywords:
  - "material document"
  - "canceled material document"
  - "inventory transaction"
  - "mm-im-gf-2cl"
  - "sourcing and procurement"
  - "material management"
  - "đơn hàng vật liệu"
  - "đơn hàng bị hủy"
  - "giao dịch kho"
semantic_en: "This view exposes canceled material document items, which can be used to track and manage canceled orders and inventory transactions in the MM-IM-GF-2CL component."
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
# D_MATERIALDOCUMENTCANCELED_2

**D Materialdocumentcanceled 2**

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
| `D_MaterialDocumentItemCancld_2` |  | |  | `_MaterialDocumentItemCanceled : composition [1..*] of D_MaterialDocumentItemCancld_2` |  |  |

## Source Code

```abap
@EndUserText.label: 'Entity for Material Document Canceled'

@ObjectModel: { sapObjectNodeType.name: 'MaterialDocument' }
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define root abstract entity D_MaterialDocumentCanceled_2
  
{
    InventoryTransactionType     : vgart;
    _MaterialDocumentItemCanceled : composition [1..*] of D_MaterialDocumentItemCancld_2;
    
}
```
