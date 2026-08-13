---
name: D_PRODUCTCREATED
description: "D Productcreated"
semantic_vi: "View D_PRODUCTCREATED hiển thị dữ liệu tạo sản phẩm, có thể sử dụng khi theo dõi sự kiện tạo sản phẩm hoặc phân tích vòng đời sản phẩm."
keywords:
  - "product creation"
  - "tạo sản phẩm"
  - "product lifecycle"
  - "sự kiện tạo sản phẩm"
  - "vòng đời sản phẩm"
  - "sap cds"
  - "cds view"
  - "logistics general"
  - "lo-md-mm-2cl"
semantic_en: "The D_PRODUCTCREATED view exposes product creation data, which can be used when tracking product creation events or analyzing product lifecycle."
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# D_PRODUCTCREATED

**D Productcreated**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` |  | |  | `producttype` |  |  |
| `ProductCategory` |  | |  | `prodcategory` |  |  |

## Source Code

```abap
@EndUserText.label: 'Product Created'
@ObjectModel.sapObjectNodeType.name: 'Product'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProductCreated 
{
    ProductType                    : producttype  ;  
    ProductCategory                : prodcategory ;
     
}
```
