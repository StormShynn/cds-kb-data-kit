---
name: D_CUSTOMERMATERIALCREATED
description: "D Customermaterialcreated"
semantic_vi: "View D_CUSTOMERMATERIALCREATED hiển thị dữ liệu vật liệu dành cho khách hàng được tạo trong hệ thống, thường được sử dụng để phân tích hoặc báo cáo thông tin vật liệu dành cho khách hàng."
keywords:
  - "customer material"
  - "material data"
  - "created data"
  - "sd-md-mm-2cl"
  - "sales & distribution"
  - "material management"
  - "customer specific"
  - "material information"
semantic_en: "The D_CUSTOMERMATERIALCREATED view exposes customer-specific material data created in the system, typically used to analyze or report on customer-specific material information."
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - customer
  - material
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# D_CUSTOMERMATERIALCREATED

**D Customermaterialcreated**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |
| `MaterialByCustomer` |  | |  | `matnr_ku` |  |  |
| `MaterialDescriptionByCustomer` |  | |  | `postx` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `DeliveryPriority` |  | |  | `lprio` |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  | `minlf` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |

## Source Code

```abap
@EndUserText.label: 'Customer Material Created'
@Event:{
    sapObjectNodeType: 'CustomerMaterial',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CustomerMaterialCreated 
{
  Material                      : matnr;
  MaterialByCustomer            : matnr_ku;
  MaterialDescriptionByCustomer : postx;
  Plant                         : werks_d;
  DeliveryPriority              : lprio;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  MinDeliveryQtyInBaseUnit      : minlf;
  BaseUnit                      : meins;

}
```
