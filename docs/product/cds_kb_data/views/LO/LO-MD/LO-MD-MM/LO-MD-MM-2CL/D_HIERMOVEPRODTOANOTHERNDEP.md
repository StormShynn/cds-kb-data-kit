---
name: D_HIERMOVEPRODTOANOTHERNDEP
description: "D Hiermoveprodtoanotherndep"
semantic_vi: "Đại diện cho việc di chuyển hàng hóa theo cấu trúc cấp bậc đến một nút khác trong cấu trúc cấp bậc sản phẩm, được sử dụng để quản lý thay đổi cấu trúc sản phẩm."
keywords:
  - "product hierarchy"
  - "hierarchical move"
  - "product structure"
  - "cấu trúc cấp bậc sản phẩm"
  - "di chuyển hàng hóa"
  - "sản phẩm"
  - "cấu trúc sản phẩm"
  - "sap logistics"
  - "logistics general"
  - "lo-md-mm-2cl"
semantic_en: "Represents a hierarchical move of products to another node in the product hierarchy, used to manage product structure changes."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# D_HIERMOVEPRODTOANOTHERNDEP

**D Hiermoveprodtoanotherndep**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductHierarchyTargetNode` |  | |  | `parnode` |  |  |

## Source Code

```abap
@EndUserText.label: 'ActionParameter:ProdHier MoveProduct'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_HierMoveProdToAnotherNdeP
{
  ProductHierarchyTargetNode : parnode;  
}
```
