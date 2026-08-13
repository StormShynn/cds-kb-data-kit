---
name: D_PINVDOCRECOUNTITEMKEYSP
description: "D Pinvdocrecountitemkeysp"
semantic_vi: "Các khóa của tài liệu kiểm kê vật lý cho quản lý hàng hóa và mua sắm theo từng mặt hàng. View này được sử dụng để truy cập và chỉnh sửa dữ liệu theo từng mặt hàng trong tài liệu kiểm kê vật lý."
keywords:
  - "physical inventory document"
  - "tài liệu kiểm kê vật lý"
  - "item-level procurement"
  - "mua sắm theo từng mặt hàng"
  - "inventory management"
  - "quản lý hàng hóa"
  - "ekko"
  - "mm-im-pi"
  - "sourcing & procurement"
  - "đơn mua hàng"
semantic_en: "Physical inventory document item keys for item-level procurement and inventory management. This view is used to access and manipulate item-level data in physical inventory documents."
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - item-level
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVDOCRECOUNTITEMKEYSP

**D Pinvdocrecountitemkeysp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocumentItem` |  | |  | `pi_item_number` |  |  |
| `_RecountSettings` | | ✓ | | | | |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Phys Inv Items to be recounted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_PInvDocRecountItemKeysP {
  PhysicalInventoryDocumentItem : pi_item_number;
  
  _RecountSettings : association to parent D_PInvRecountPhysInvtryDocItmP;
}
```
