---
name: D_CUSTOMERMATERIALCHANGED
description: "D Customermaterialchanged"
semantic_vi: "View này hiển thị dữ liệu vật liệu theo khách hàng, bao gồm mô tả vật liệu và ưu tiên giao hàng, có thể được sử dụng để phân tích sở thích của khách hàng và tối ưu hóa giao hàng vật liệu."
keywords:
  - "customer material data"
  - "dữ liệu vật liệu theo khách hàng"
  - "material description"
  - "mô tả vật liệu"
  - "delivery priority"
  - "ưu tiên giao hàng"
  - "sap cds view"
  - "view dữ liệu vật liệu"
  - "customer preference"
  - "sở thích khách hàng"
  - "material delivery"
  - "giao hàng vật liệu"
semantic_en: "This view exposes customer-specific material data, including material descriptions and delivery priorities, which can be used to analyze customer preferences and optimize material delivery."
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
# D_CUSTOMERMATERIALCHANGED

**D Customermaterialchanged**

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
@EndUserText.label: 'Customer Material Changed'
@Event:{
    sapObjectNodeType: 'CustomerMaterial',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CustomerMaterialChanged
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
