---
name: D_MODPRODSPECADDITEMP
description: "D Modprodspecadditemp"
semantic_vi: "View D_MODPRODSPECADDITEMP hiển thị dữ liệu sản phẩm đặc tả cho việc thêm vào sản phẩm đặc tả sửa đổi. Nó được sử dụng khi tạo hoặc cập nhật sản phẩm đặc tả sửa đổi trong thành phần MM-PUR-MPS-2CL."
keywords:
  - "modification product specification"
  - "sản phẩm đặc tả sửa đổi"
  - "mm-pur-mps-2cl"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "sourcing & procurement"
  - "item-level"
  - "component"
  - "lob"
semantic_en: "The D_MODPRODSPECADDITEMP view exposes product specification item data for adding to a modification product specification. It is used when creating or updating a modification product specification in the MM-PUR-MPS-2CL component."
app_component: MM-PUR-MPS-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-MPS
  - item-level
  - component:MM-PUR-MPS-2CL
  - lob:Sourcing & Procurement
---
# D_MODPRODSPECADDITEMP

**D Modprodspecadditemp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-MPS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ModProdSpecItemType` |  | |  | `mmpur_mps_item_type` |  |  |
| `ModProdSpecSelectedItemUUID` |  | |  | `mmpur_mps_selected_item_uuid` |  |  |
| `ModProdSpecItemIsSubitem` |  | |  | `mmpur_mps_item_is_subitem` |  |  |

## Source Code

```abap
@EndUserText.label: 'Model Product Specification Item Type for Add Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_ModProdSpecAddItemP
{
  ModProdSpecItemType         : mmpur_mps_item_type;
  ModProdSpecSelectedItemUUID : mmpur_mps_selected_item_uuid;
  ModProdSpecItemIsSubitem    : mmpur_mps_item_is_subitem;
}
```
