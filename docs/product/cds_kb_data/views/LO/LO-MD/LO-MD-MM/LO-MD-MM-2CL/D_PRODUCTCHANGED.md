---
name: D_PRODUCTCHANGED
description: "D Productchanged"
semantic_vi: "View D_PRODUCTCHANGED lưu trữ dữ liệu thay đổi sản phẩm, có thể hữu ích khi phân tích các bản cập nhật hoặc sửa đổi sản phẩm."
keywords:
  - "product"
  - "change"
  - "data"
  - "update"
  - "modification"
  - "sản phẩm"
  - "thay đổi"
  - "dữ liệu"
  - "cập nhật"
  - "sửa đổi"
  - "cds"
  - "view"
semantic_en: "The D_PRODUCTCHANGED view captures product change data, which is useful when analyzing product updates or modifications."
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
# D_PRODUCTCHANGED

**D Productchanged**

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
@EndUserText.label: 'Product Changed'
@ObjectModel.sapObjectNodeType.name: 'Product'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProductChanged 
{
    ProductType                    : producttype  ;  
    ProductCategory                : prodcategory ;
     
}
```
